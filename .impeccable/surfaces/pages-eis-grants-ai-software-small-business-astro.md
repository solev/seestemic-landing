---
version: 1
slug: "pages-eis-grants-ai-software-small-business-astro"
primary_target: "src/pages/eis-grants-ai-software-small-business.astro"
related_targets: ["src/data/eis-grants.ts","src/styles/global.css","src/pages/guides.astro"]
---

# Guide: Can an EIS grant pay for AI or new software? (/eis-grants-ai-software-small-business)

## Scope and mode
An SEO and AI-answer article (board #2), in **Read** mode only. It should still be useful if Seestemic didn't exist. Success means the page is indexed, ranks for EIS grant queries (EN and ET terms), and gets quoted in AI answers. A booking is a bonus.

## Audience, job, action
- **Reader:** owners of Estonian small businesses (1 to 20 people) who are not technical, plus their accountants. They are asking "Is there money for AI or software right now, and do I qualify?"
- **Their job:** see what's open as of a date, work out which grant fits their revenue, and learn the conditions before applying.
- **Action:** one "Book a free 30-minute AI review" button in the closing `#review` section, which opens the inline Cal.com panel. The header has no booking button (`booking={false}`), and there's an EIS customer-service line beside the CTA.

## Structure
- An article head: breadcrumb (Home → Guides → EIS grants), H1, byline "By Martin Solev, Tallinn" with "Last checked", and a linen answer box (`guide-summary`) with a dated summary, the "Last checked" line and an eis.ee link.
- A sticky "On this page" rail, reused from the Estonia guide.
- Sections, each an H2 question followed by `.guide-answer`: the status table, which grant fits, the RTE software grant, what happened to the AI grant, RAISE, five checks, where Seestemic fits (120 words at most), FAQ (9 items), and the review CTA.
- The status table (`guide-status`) has a dated caption and dated status cells with open/closed dots. It stacks into label/value rows below 760px.
- All copy and facts are in `src/data/eis-grants.ts`. The FAQPage JSON-LD is built from the same `faqs`, so the visible text and the schema stay identical.

## Proof and content
- Facts come only from the brief's grant-facts list, checked on 22 Oct 2026, and each one links to eis.ee, Riigi Teataja or Tehnopol. The RTE process automation status comes from a third-party summary and has no EIS link until it is re-checked.
- Never say or imply that Seestemic is a digital consultant (diginõustaja), that it applies for grants, or that its pilot, setup or Care qualifies for a grant. Write "may qualify", never "you will get".
- Every status carries a date. Don't speculate about the AI grant reopening. AIRE is left out until Martin decides.
- The pilot price comes from `src/data/offer.ts`.

## Constraints
- Use the `guide-*` classes and the "Guide articles" block in `src/styles/global.css`. No hero painting, no pricing blocks, no Offer schema.
- Estonian terms are wrapped in `lang="et"`.
- An inline element that starts a source line after text needs `{" "}`, because Astro compression otherwise glues the words.

## Unresolved
- Martin's open decisions: the digital-consultant role, whether a Seestemic pilot can count as eligible software, an Estonian parallel page, update cadence, and AIRE.
- The wording of FAQ 8 and check 5 still needs confirming against the RTE regulation.
