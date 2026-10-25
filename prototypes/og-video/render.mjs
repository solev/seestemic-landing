#!/usr/bin/env node
// PROTOTYPE (throwaway): renders the og:video compositions to MP4 plus poster stills.
//
//   npm run render                 all variants: out/<v>.mp4, out/<v>-poster.png (1280x720), out/<v>-og.png (1200x630)
//   npm run render -- b c          only some variants
//   npm run render -- --stills     contact sheet per variant (out/review/), no video
//   npm run render -- --serve      just serve the gallery at http://127.0.0.1:4807/prototypes/og-video/
//
// Frames are captured at 2x and downscaled, then encoded as H.264 (yuv420p, +faststart, no audio).

import { spawn } from "node:child_process";
import { createReadStream, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const out = path.join(here, "out");

export const VARIANTS = {
  a: "a-one-job.html",
  b: "b-on-it.html",
  c: "c-busywork.html",
};

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const fps = Number(option("fps", 30));
const scale = Number(option("scale", 2));
const crf = String(option("crf", 21));
const port = Number(option("port", 4807));
const picked = args.filter((a) => VARIANTS[a]);
const keys = picked.length ? picked : Object.keys(VARIANTS);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
};

function serve() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    let file = path.normalize(path.join(root, decodeURIComponent(url.pathname)));
    if (!file.startsWith(root)) {
      res.writeHead(403).end();
      return;
    }
    let stat;
    try {
      stat = statSync(file);
      if (stat.isDirectory()) {
        file = path.join(file, "index.html");
        stat = statSync(file);
      }
    } catch {
      res.writeHead(404).end("Not found");
      return;
    }
    const type = TYPES[path.extname(file)] ?? "application/octet-stream";
    const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range ?? "");
    if (range) {
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : stat.size - 1;
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store",
      });
      createReadStream(file, { start, end }).pipe(res);
      return;
    }
    res.writeHead(200, {
      "Content-Type": type,
      "Content-Length": stat.size,
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-store",
    });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(port, "127.0.0.1", () => resolve(server)));
}

function ffmpeg(argv, input) {
  return new Promise((resolve, reject) => {
    const proc = spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...argv], {
      stdio: [input ? "pipe" : "ignore", "inherit", "inherit"],
    });
    proc.on("error", reject);
    proc.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))));
    if (input) input(proc.stdin);
  });
}

async function still(page, t, file) {
  await page.evaluate(
    (time) =>
      new Promise((resolve) => {
        window.og.seek(time);
        requestAnimationFrame(() => requestAnimationFrame(resolve));
      }),
    t,
  );
  const png = await page.screenshot({ type: "png" });
  if (file) await writeFile(file, png);
  return png;
}

async function render(page, key, base) {
  await page.goto(`${base}/prototypes/og-video/${VARIANTS[key]}?capture`);
  await page.waitForFunction(() => window.og?.ready === true, null, { timeout: 20000 });
  const { duration, poster } = await page.evaluate(() => ({ duration: window.og.duration, poster: window.og.poster }));

  if (flag("stills")) {
    const dir = path.join(out, "review");
    mkdirSync(dir, { recursive: true });
    const step = Number(option("step", 0.5));
    const times = [];
    for (let t = 0; t < duration - 1e-6; t += step) times.push(Number(t.toFixed(3)));
    const frames = path.join(dir, `${key}-%03d.png`);
    let i = 0;
    for (const t of times) {
      await page.evaluate((time) => {
        let stamp = document.getElementById("og-stamp");
        if (!stamp) {
          stamp = document.createElement("div");
          stamp.id = "og-stamp";
          stamp.style.cssText =
            "position:fixed;top:8px;left:8px;z-index:99;padding:4px 8px;border-radius:6px;background:#000c;color:#fff;font:600 20px/1 Menlo,monospace";
          document.body.append(stamp);
        }
        stamp.textContent = `${time.toFixed(1)}s`;
      }, t);
      await still(page, t, frames.replace("%03d", String(++i).padStart(3, "0")));
    }
    const cols = 4;
    await ffmpeg([
      "-framerate", "1", "-i", frames,
      "-vf", `scale=640:360:flags=lanczos,tile=${cols}x${Math.ceil(times.length / cols)}:padding=6:color=white`,
      "-frames:v", "1", path.join(dir, `${key}-sheet.png`),
    ]);
    console.log(`${key}: ${times.length} stills -> out/review/${key}-sheet.png`);
    return;
  }

  const frames = Math.round(duration * fps);
  const video = path.join(out, `${key}.mp4`);
  const started = Date.now();
  await ffmpeg(
    [
      "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
      "-vf", `scale=1280:720:flags=lanczos,format=yuv420p`,
      "-c:v", "libx264", "-preset", "slow", "-crf", crf, "-profile:v", "high", "-level", "4.0",
      "-g", String(fps * 2), "-movflags", "+faststart", "-an", video,
    ],
    async (stdin) => {
      for (let i = 0; i < frames; i += 1) {
        const png = await still(page, i / fps);
        if (!stdin.write(png)) await new Promise((r) => stdin.once("drain", r));
      }
      stdin.end();
    },
  );

  const big = path.join(out, `${key}-poster@2x.png`);
  await still(page, poster, big);
  await ffmpeg(["-i", big, "-vf", "scale=1280:720:flags=lanczos", path.join(out, `${key}-poster.png`)]);
  await ffmpeg([
    "-i", big,
    "-vf", `scale=1280:720:flags=lanczos,crop=1280:672:0:24,scale=1200:630:flags=lanczos`,
    path.join(out, `${key}-og.png`),
  ]);
  await ffmpeg(["-i", big, "-vf", "scale=400:-2:flags=lanczos", path.join(out, `${key}-chat.png`)]);
  const bytes = statSync(video).size;
  const manifestFile = path.join(out, "manifest.json");
  let manifest = {};
  try {
    manifest = JSON.parse(readFileSync(manifestFile, "utf8"));
  } catch {}
  manifest[key] = { video: `${key}.mp4`, bytes, duration, fps, width: 1280, height: 720 };
  writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
  const size = (bytes / 1024 / 1024).toFixed(2);
  console.log(`${key}: ${frames} frames, ${duration}s -> out/${key}.mp4 (${size} MB) in ${((Date.now() - started) / 1000).toFixed(0)}s`);
}

const server = await serve();
const base = `http://127.0.0.1:${port}`;

if (flag("serve")) {
  console.log(`Gallery: ${base}/prototypes/og-video/`);
  for (const [key, file] of Object.entries(VARIANTS)) console.log(`  ${key}: ${base}/prototypes/og-video/${file}`);
} else {
  mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: scale });
  const page = await context.newPage();
  page.on("pageerror", (error) => console.error(`page error: ${error.message}`));
  page.on("console", (msg) => msg.type() === "error" && console.error(`console: ${msg.text()}`));
  try {
    for (const key of keys) await render(page, key, base);
  } finally {
    await browser.close();
    server.close();
  }
}
