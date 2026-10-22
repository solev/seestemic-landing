import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // www is the primary domain on Vercel; the apex redirects here. Canonicals, og:url and the sitemap all use it.
  site: "https://www.seestemic.com",
  // Page URLs have no trailing slash, so sitemap entries match the canonical tags.
  trailingSlash: "never",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
