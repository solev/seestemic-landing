---
version: 1
slug: "src-pages-ai-for-small-business-estonia-astro"
primary_target: "src/pages/ai-for-small-business-estonia.astro"
related_targets: ["src/data/estonia.ts","src/styles/global.css"]
---

# Search page: AI for small business in Estonia (/ai-for-small-business-estonia)

## Scope and mode
The first of a short list of search pages, each answering one question a small business owner searches for or asks an AI assistant better than anyone else. The page is in **Read** mode, with a **Persuade** close. Success means the reader gets a straight answer, and the page is good enough to rank and to be quoted in AI answers. The reader then books the free AI review without anyone chasing them. It is not a second homepage; never rebuild it from homepage sections.

## Audience, job, action
- **Reader:** a small business owner or manager, often in Estonia, who searched for "AI for small business Estonia" or a nearby question (is it worth it, is it safe for customer data, what does it cost, is there funding). They are not technical and are close to buying.
- **Their job:** find the answer to their question within one screen of the heading, check the facts (prices, funding, data), and decide whether to talk to someone.
- **Action:** "Book a free 30-minute AI review", which opens the inline Cal.com panel. The CTAs are in the hero, the contents rail, under the prices and in the closing band; "Email us" is secondary.

## Structure (the pattern for the next search pages)
- Hero: the H1 that matches the search, one lead, the CTAs, and a "Seestemic at a glance" fact card on a painting (no words directly on paint).
- The first section, "Who is Seestemic for?", names the audience (1 to 20 people, such as trades, clinics and shops) in a three-row list whose lines only name jobs the helpers already do. They are examples, not a limit (Martin's decision, October 2026), so it ends "What matters is the job, not the industry."
- A sticky "On this page" rail on desktop (a dot marks the current section). Below 1024px it becomes a sideways-scrolling row of chips.
- Each section has an H2 that is the searcher's question, then `.guide-answer`: 40 to 70 words that make sense quoted on their own and name Seestemic where it matters. The detail follows: a table, the cast of helpers, one painted example, steps or a comparison.
- A visible FAQ for long-tail questions, all answers open. The section answers and the FAQ make up the FAQPage schema with exactly the visible wording; both come from `src/data/estonia.ts`. The JSON-LD also has a Service with the audience and the prices (`offers` in `src/data/schema.ts`, shared with the homepage).
- Dated facts: "Updated" in the glance card and the FAQ, and "Checked on" beside the EIS source link. Update both whenever a fact is re-checked.
- Closing linen band with the booking panel.

## Proof and content
- Facts come only from `PRODUCT.md`. The EIS grant claims are the homepage FAQ's, plus the official grant name, that applications are open until the budget runs out, and that the separate AI grant closed on 24 August 2026 (linked to its EIS page), all checked on eis.ee. Never name or describe Seestemic as the grant's digital consultant, and leave the other conditions to "other conditions apply" with the link.
- Example messages and the approval card carry "Example" labels; there are no clients or results yet.
- Speak as "we". No team size, no languages listed, and calls and training are in English.

## Constraints
- Use the `guide-*` classes in `src/styles/global.css`, not homepage section classes. No eyebrows, icon card grids or hero metrics.
- Tables stack below 760px and keep explicit ARIA table roles so they stay tables for screen readers.
- The canonical is `https://www.seestemic.com/ai-for-small-business-estonia`, and the page is linked from the homepage FAQ intro and footer.
- No "Who's behind Seestemic" section: the homepage founder chat (`/#about`) covers it, so this page doesn't repeat it (Martin, October 2026). The organisation's JSON-LD still names the founder.

## Direction and memorable moments
- It should be remembered for the fact card floating on the coast painting, and the Quotes approval card on the field painting answering "Is AI safe for your customer data?".
- One authored motion: the glance card fades up on load.

## Unresolved
- Links to the next pages once they are live (TODO comments in the source): the EIS grant guide (board #2), the AI cost guide (#3), the GDPR checklist (#4) and the founding pilot page (#14).
- The page is in the sitemap; Google Search Console is not set up yet.
- Re-check the EIS facts every few months and update the "Checked on" date.
