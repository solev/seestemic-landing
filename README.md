# Seestemic landing page

A static Astro and Tailwind CSS implementation of the Seestemic landing page.

```sh
npm install
npm run dev
```

Analytics run on self-hosted OpenPanel (cookieless). The tracker is only added to production builds (`npm run build`); its settings are in `analytics` in `src/data/site.ts`.

Prices, the founding-client places and the other offer figures live in `src/data/offer.ts`. Change them there, not in page copy.
