// PROTOTYPE (throwaway): a looping, seekable timeline for the og:video compositions.
// Every animation runs on one clock with the loop's length, so the renderer can pause
// the page and step it frame by frame, and frame 0 always equals the last frame.

export const EASE = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
  inout: "cubic-bezier(0.65, 0, 0.35, 1)",
  in: "cubic-bezier(0.55, 0, 0.75, 0.2)",
  linear: "linear",
};

const all = (target) =>
  typeof target === "string"
    ? [...document.querySelectorAll(target)]
    : target instanceof Element
      ? [target]
      : [...target];

export function createTimeline(duration) {
  const anims = [];
  const ms = duration * 1000;

  /**
   * keys: [[seconds, props, ease?], ...]. The first key names every animated
   * property; later keys only list what changes. The ease shapes the segment
   * that starts at that key. Two keys at the same second make a cut.
   */
  function track(target, keys, { stagger = 0 } = {}) {
    all(target).forEach((el, i) => {
      let carry = {};
      const frames = keys.map(([t, props, ease]) => {
        carry = { ...carry, ...props };
        const at = Math.min(duration, Math.max(0, t + i * stagger));
        return { ...carry, offset: at / duration, easing: EASE[ease] ?? ease ?? "linear" };
      });
      if (frames[0].offset > 0) frames.unshift({ ...frames[0], offset: 0, easing: "linear" });
      if (frames.at(-1).offset < 1) frames.push({ ...frames.at(-1), offset: 1 });
      anims.push(el.animate(frames, { duration: ms, iterations: Infinity, fill: "both" }));
    });
  }

  /** A periodic animation (spinner, typing dots, drift). Its period must divide the loop to stay seamless. */
  function cycle(target, keyframes, period, { delay = 0, stagger = 0 } = {}) {
    all(target).forEach((el, i) => {
      const a = el.animate(keyframes, { duration: period * 1000, iterations: Infinity, fill: "both" });
      a.__offset = (delay + i * stagger) * 1000;
      anims.push(a);
    });
  }

  function seek(t) {
    for (const a of anims) {
      const period = a.effect.getTiming().duration;
      const local = t * 1000 - (a.__offset ?? 0);
      a.pause();
      a.currentTime = local >= 0 ? local : ((local % period) + period) % period;
    }
  }

  function play() {
    seek(0);
    const now = document.timeline.currentTime;
    for (const a of anims) {
      a.startTime = now - (a.currentTime ?? 0);
    }
  }

  return { duration, track, cycle, seek, play, anims };
}

/* ------------------------------------------------------------------ */
/* Helper character                                                    */
/* ------------------------------------------------------------------ */

function squircle(x, y, w, h, [tl, tr, br, bl], k = 0.14) {
  return [
    `M${x + tl} ${y}`,
    `H${x + w - tr}`,
    `C${x + w - tr * k} ${y} ${x + w} ${y + tr * k} ${x + w} ${y + tr}`,
    `V${y + h - br}`,
    `C${x + w} ${y + h - br * k} ${x + w - br * k} ${y + h} ${x + w - br} ${y + h}`,
    `H${x + bl}`,
    `C${x + bl * k} ${y + h} ${x} ${y + h - bl * k} ${x} ${y + h - bl}`,
    `V${y + tl}`,
    `C${x} ${y + tl * k} ${x + tl * k} ${y} ${x + tl} ${y}`,
    "Z",
  ].join("");
}

const BODY = squircle(10, 10, 100, 100, [48, 48, 20, 48]);

export function helperSVG({ color, tilt = -7, cls = "", happy = true } = {}) {
  const style = color ? ` style="--helper-color:${color}"` : "";
  return `<svg class="helper ${cls}" viewBox="0 0 120 120" aria-hidden="true"${style}>
  <g transform="rotate(${tilt} 60 60)">
    <path class="helper-body" d="${BODY}" />
    <g class="helper-eyes">
      <g class="helper-eyes-open">
        <rect class="helper-eye" x="41" y="37" width="12" height="27" rx="6" />
        <rect class="helper-eye" x="67" y="37" width="12" height="27" rx="6" />
      </g>
      ${happy ? `<g class="helper-eyes-happy"><path d="M40.5 56.5Q47 44 53.5 56.5" /><path d="M66.5 56.5Q73 44 79.5 56.5" /></g>` : ""}
    </g>
  </g>
</svg>`;
}

/** Blinks at the given seconds: close 70ms, open 140ms. The site's blink keyframes take about 130ms and 260ms. */
export function blink(tl, helper, times) {
  const keys = [[0, { transform: "scaleY(1)" }]];
  for (const t of times) {
    keys.push([t, { transform: "scaleY(1)" }, "in"]);
    keys.push([t + 0.07, { transform: "scaleY(0.08)" }, "out"]);
    keys.push([t + 0.21, { transform: "scaleY(1)" }]);
  }
  tl.track(helper.querySelectorAll(".helper-eye"), keys);
}

/** Eye travel in viewBox units: [[seconds, x, y, duration?, ease?], ...]; the first entry is the resting gaze at 0. */
export function look(tl, helper, moves) {
  const at = (x, y) => ({ transform: `translate(${x}px, ${y}px)` });
  const [first, ...rest] = moves;
  const keys = [[0, at(first[1], first[2])]];
  let prev = first;
  for (const move of rest) {
    keys.push([move[0], at(prev[1], prev[2]), move[4] ?? "out"]);
    keys.push([move[0] + (move[3] ?? 0.45), at(move[1], move[2])]);
    prev = move;
  }
  tl.track(helper.querySelector(".helper-eyes"), keys);
}

/** Happy eyes between [start, end] pairs. */
export function happy(tl, helper, spans) {
  const open = [[0, { opacity: 1 }]];
  const arcs = [[0, { opacity: 0 }]];
  for (const [a, b] of spans) {
    open.push([a, { opacity: 1 }, "out"], [a + 0.18, { opacity: 0 }], [b, { opacity: 0 }, "out"], [b + 0.18, { opacity: 1 }]);
    arcs.push([a, { opacity: 0 }, "out"], [a + 0.18, { opacity: 1 }], [b, { opacity: 1 }, "out"], [b + 0.18, { opacity: 0 }]);
  }
  tl.track(helper.querySelector(".helper-eyes-open"), open);
  tl.track(helper.querySelector(".helper-eyes-happy"), arcs);
}

/* ------------------------------------------------------------------ */
/* Reveals                                                             */
/* ------------------------------------------------------------------ */

const RISE = {
  from: { opacity: 0, transform: "translateY(6px)" },
  to: { opacity: 1, transform: "translateY(0px)" },
};
const POP = {
  from: { opacity: 0, transform: "scale(0.4)" },
  to: { opacity: 1, transform: "scale(1)" },
};

/**
 * Visible spans: [[in, out], ...] in seconds. An `in` at or below 0 means visible at frame 0;
 * an `out` at or past the loop end means it stays. Defaults to the site's reveal: 6px rise, 0.45s ease-out.
 */
export function show(tl, target, spans, { from = RISE.from, to = RISE.to, gone, dur = 0.45, out = 0.3, ease = "out", stagger = 0 } = {}) {
  const exit = gone ?? { ...to, opacity: 0 };
  const keys = [[0, spans[0][0] <= 0 ? to : from]];
  for (const [a, b] of spans) {
    if (a > 0) keys.push([a, from, ease], [a + dur, to]);
    if (b < tl.duration) keys.push([b, to, "inout"], [b + out, exit], [b + out, from]);
  }
  tl.track(target, keys, { stagger });
}

export const pop = (tl, target, spans, opts = {}) => show(tl, target, spans, { ...POP, dur: 0.35, ...opts });

/** Layout offset of `el` inside `ancestor`, ignoring transforms (safe while the preview is scaled). */
export function offsetIn(el, ancestor) {
  let x = 0;
  let y = 0;
  for (let node = el; node && node !== ancestor; node = node.offsetParent) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

/* ------------------------------------------------------------------ */
/* Icons (from src/components/Icon.astro) and logo                     */
/* ------------------------------------------------------------------ */

const ICONS = {
  check: '<path d="M5 12.6 9.6 17 19 7.4"/>',
  mail: '<rect x="3.25" y="5.25" width="17.5" height="13.5" rx="3"/><path d="M4.5 7.75l7.5 5.5 7.5-5.5"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  sheet: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 9.5h16M4 14.5h16M10 9.5V20"/>',
  photo:
    '<rect x="3.5" y="5" width="17" height="14" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="M4.5 17l4.5-4.5 3.5 3.5 2.5-2.5 4.5 4"/>',
  doc: '<path d="M7 3.5h6.5L18.5 8.5v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z"/><path d="M13 3.5v5h5.5M8.5 13h7M8.5 16.5h5"/>',
  arrowUp: '<path d="M12 19.5v-15M6 10.5l6-6 6 6"/>',
};

export function icon(name, size = 24, cls = "") {
  return `<svg class="icon ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}

export async function inlineLogos() {
  const marks = document.querySelectorAll("[data-logo-mark]");
  if (!marks.length) return;
  const svg = await (await fetch("/src/assets/brand/seestemic-mark-small.svg")).text();
  marks.forEach((slot) => {
    slot.outerHTML = svg.replace("<svg ", '<svg class="logo-mark" aria-hidden="true" ');
  });
}

/* ------------------------------------------------------------------ */
/* Boot: preview plays in real time; ?capture hands the clock to the renderer */
/* ------------------------------------------------------------------ */

export async function boot(build, { duration, poster }) {
  const capture = new URLSearchParams(location.search).has("capture");
  if (capture) document.body.dataset.capture = "";
  else {
    const fit = () => {
      const s = Math.min(1, (innerWidth - 32) / 1280, (innerHeight - 32) / 720);
      document.documentElement.style.setProperty("--fit", String(s));
    };
    fit();
    addEventListener("resize", fit);
  }

  await inlineLogos();
  await document.fonts.ready;
  await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));

  const tl = createTimeline(duration);
  build(tl);
  tl.seek(0);

  const at = new URLSearchParams(location.search).get("t");
  if (capture || at !== null) tl.seek(Number(at ?? 0));
  else tl.play();

  window.og = { duration, poster, seek: (t) => tl.seek(t), ready: true };
  document.documentElement.dataset.ready = "";
}
