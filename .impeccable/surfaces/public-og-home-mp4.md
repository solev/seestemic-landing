---
version: 1
slug: "public-og-home-mp4"
primary_target: "public/og/home.mp4"
related_targets: ["src/layouts/BaseLayout.astro","src/pages/index.astro","public/og/home.jpg"]
---

# Share video (og:video)

## Scope and mode
The muted, looping video a link to seestemic.com plays where it is shared, in **Persuade** mode. Discord and Telegram play og:video inline; Facebook sometimes does; X needs a separate twitter:player card; every other platform shows only og:image, so frame 0 has to work as a still on its own.

## Audience, job, action
- **Viewer:** someone who was sent the link in a chat, seeing it at roughly 400px wide, muted, often only on frame 0.
- **Their job:** know at a glance that Seestemic gives a business AI teammates that do the busywork while the owner approves.
- **Action:** open the link. The video carries no button of its own.

## Proof and content
- Only the site's own copy, except that it says "teammate" wherever the live site still says "helper", so the window title reads "Your teammates". The hero line comes from `src/pages/index.astro`, and the job, steps, labels and amounts from `src/data/helpers.ts` and `src/scripts/demo.ts`. Depicted work keeps its "Example" pill. Never add claims, metrics or customers.

## Constraints
- Shipped on the homepage only: `public/og/home.mp4` as og:video and `public/og/home.jpg` (frame 0) as og:image, set through the `video` and `image` props of `src/layouts/BaseLayout.astro`. The other pages keep the static `og.png`.
- Discord plays og:video only when `og:type` is a video type, and takes its layout from whichever of `twitter:card` and `og:type` comes last. So a page with a video gets `og:type` `video.other`, printed after `twitter:card`, while X keeps `summary_large_image`.
- The og:image stays under 300KB, or WhatsApp drops it; it ships as a JPEG of about 125KB.
- 1280×720 (16:9), a 10 s seamless loop, 30 fps, no audio, H.264 High yuv420p with faststart, about 1 MB.
- Frame 0 is the poster and also the og:image: crop y 24–696 and scale to 1200×630, so on frame 0 nothing that matters sits in the top or bottom 24px.
- Keep story text out of the frame centre: a play button about 64px wide at 400px (about 205px at 1280) must not cover anything you need to read.
- Story text is at least 40px at 1280, which is about 12.5px at 400px.
- Paintings stay untouched and static, one per card, taken from the section the card miniaturises.

## Direction and memorable moment
- Shipped: **A, "One job, start to finish"**, the hero in miniature.
  - The logo and "Let [helper] AI handle the busywork" sit on white.
  - The dawn painting is a rounded band.
  - The example window peeks, rises, checks off four steps, readies the quote and presses Approve & send. The quote is marked Sent, then the window sinks away and the next request rises in.
- **Memorable moment:** the headline helper watches the work and smiles when the quote is sent.
- Source composition and renderer: `prototypes/og-video/` on the `prototype/og-video` branch. That branch also keeps alternatives B ("On it.") and C ("Busywork band").

## Unresolved
- X shows only the still. Playing the video there needs a twitter:player card and an HTML player page.
- The composition and renderer live only on the `prototype/og-video` branch. The video has to be re-rendered there, and both files copied into `public/og/`, whenever the hero line or the demo strings change.
- The video says "teammates" before the site does. Until the teammates copy ships, its "Your teammates" title differs from the live demo window's "Your helpers", and the homepage's og:title and og:description still say "AI helpers".
- The Estonia and EIS pages have no share video of their own.
