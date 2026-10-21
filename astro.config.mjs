import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // www is the primary domain on Vercel; the apex redirects here. Canonicals, og:url and the sitemap all use it.
  site: "https://www.seestemic.com",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
