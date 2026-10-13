---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/styles/global.css","src/layouts/BaseLayout.astro"]
---

# Landing page (/)

## Scope and mode
The single marketing page, in **Persuade** mode. The visitor should decide to book an intro call; emailing is the fallback.

## Audience, job, action
- **Reader:** a business owner or manager who is not technical and has never bought "AI".
- **Their job:** understand in five seconds what Seestemic does, believe they stay in charge, and see their own busywork in the examples.
- **Action:** "Book an intro call", which opens the inline Cal.com panel; "Email us" is secondary. Every section ends within reach of one of the two.

## Proof and content
- There is no real proof yet: no testimonials, client logos or results. Product visuals are authored examples (Harbor Dental quote, Corner Bakery invoice, and others), and each carries an "Example" pill.
- Never invent claims, numbers or customers to fill the gap.
- Copy is plain English for owners. Use "helpers", "busywork", "your OK", never "agents", "LLM" or "workflows".

## Constraints
- The style is pinned to xAI's Grok Bot page (x.ai/bot), but every asset is Seestemic's own: an original speech-bubble helper and paintings generated for this site. Never ship xAI marks or art.
- The booking script at the end of `src/pages/index.astro` is ported verbatim; change it only alongside the Cal.com setup.

## Direction and memorable moments
- The direction contract is the first comment in `<body>` in `src/layouts/BaseLayout.astro`.
- The page should be remembered for:
  - The helper sitting inside the headline.
  - The example app finishing a quote on a painted dawn.
  - The giant black helper breaking out of the "Just tell it what you need" card.
  - The hairline helper drawing itself above the footer.

## Unresolved
- Real proof to add beside the examples once available.
- LinkedIn and Privacy URLs. The old footer linked to dead `#` anchors, so they were left out until real URLs exist.
