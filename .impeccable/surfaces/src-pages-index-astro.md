---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/styles/global.css","src/layouts/BaseLayout.astro"]
---

# Landing page (/)

## Scope and mode
The single marketing page, in **Persuade** mode. The visitor should decide to book a free AI review; emailing is the fallback.

## Audience, job, action
- **Reader:** a business owner or manager who is not technical and has never bought "AI".
- **Their job:** understand in five seconds what Seestemic does, believe they stay in charge, and see their own busywork in the examples.
- **Action:** "Book a free AI review", a free 30-minute call that opens the inline Cal.com panel; "Email me" is secondary. Every section ends within reach of one of the two.

## Proof and content
- There is no real proof yet: no testimonials, client logos or results. Product visuals are authored examples (a dental clinic's quote, a café's overdue invoice, and others) in euros and 24-hour time, with plain roles instead of invented names, and each carries an "Example" pill.
- Prices live on the three steps and the Partner card under them. Three fine-print lines follow: what the client keeps and AI costs, no VAT, and EIS co-funding for setups of €4,000 or more, linked to the FAQ answer. The FAQ covers data, languages, stopping Care and EIS funding. Every figure comes from `PRODUCT.md`; never add discounts, terms or other prices.
- The one trust signal is Martin himself. The "Who's behind Seestemic" chat (`#about`, `src/components/FounderChat.astro`) uses only the founder facts approved in `PRODUCT.md`; every alternative layout tried is kept on the `prototype/who-section` branch.
- Never invent claims, numbers or customers to fill the gap.
- Copy is plain English for owners. Use "helpers", "busywork", "your OK", never "agents", "LLM" or "workflows".
- Seestemic speaks as Martin: "I", "me", "my" or "Seestemic", never "we", "us" or "our team". FAQ questions are the customer speaking and may say "we".

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
- A Privacy URL, plus the company's legal name, registry code and address. All wait for the company rename. LinkedIn is resolved: the founder chat links Martin's profile.
- The Cal.com event still has the slug `intro-call-with-martin`; Martin is renaming it to a 30-minute "Free AI review". If the slug changes, update the namespace, link and URL in `src/pages/index.astro`.
