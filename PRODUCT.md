# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Businesses that want to introduce AI or improve how AI is used across their company. The audience is intentionally broad rather than limited to one industry, company size, department, or level of technical maturity.

## Product Purpose

Seestemic helps companies find worthwhile opportunities for AI, implement the supporting agents and workflows, connect them to existing work, and help employees adopt them successfully. Success means AI becomes a useful company capability that improves real work, rather than an isolated experiment or technology purchase.

## Positioning

Seestemic is a long-term, business-first AI partner. The partnership spans opportunity discovery, strategy, implementation, integration, appropriate controls, employee training, adoption, measurement, and continued improvement.

## Operating Context

Engagements begin with a company's existing business processes, tools, data, documents, and team practices. The specific industry, software stack, workflows, and AI maturity vary by client.

## Capabilities and Constraints

- Identify and prioritize valuable AI opportunities.
- Design and build AI agents, workflow automations, customer-facing assistants, and internal AI enablement systems.
- Integrate AI into the software and processes a company already uses.
- Define human oversight, access boundaries, ownership, and success measures appropriate to each workflow.
- Train employees and support adoption after delivery.
- The current website is a static Astro and Tailwind CSS landing page; it does not require application or backend functionality. It also has two search pages, `/ai-for-small-business-estonia` (copy and FAQ in `src/data/estonia.ts`) and the guide `/eis-grants-ai-software-small-business` (copy, grant facts and FAQ in `src/data/eis-grants.ts`), listed on the `/guides` hub (the breadcrumb target) and in the footer from `guidePages` in `src/data/site.ts`. The EIS guide is an article, not a sales page: answer first, a dated status table, Article, FAQPage and BreadcrumbList schema, a visible "Last checked" date (`lastChecked` in its data file, also the Article `dateModified`), only a short Seestemic section near the end and one booking button, and no booking button in its header. It never calls Seestemic a digital consultant (diginõustaja), never says Seestemic applies for grants, and never says Seestemic's work or Care qualifies for a grant. Grant statuses change when budgets run out: re-check every status on eis.ee monthly and on any EIS news, then update `lastChecked`. Search pages are answer pages, not copies of the homepage: they don't repeat the homepage's sections, such as the founder chat (Martin, October 2026). Each section heading is a question people search for or ask AI assistants, followed by a short answer that makes sense when quoted on its own, and then the detail (tables, examples, steps). Every section answer and FAQ is also in the page's FAQPage schema with the same wording, so change both together; they share the data file. Reuse the `guide-*` classes in `src/styles/global.css` for the next search pages. A new page needs no `vercel.json` route; it is served as is and joins the sitemap on build. Its JSON-LD points at the shared organisation and website by `orgId` and `websiteId` from `src/data/schema.ts` rather than defining its own, and canonical and sitemap URLs have no trailing slash (`trailingSlash: "never"` in `astro.config.mjs`). It adds a Service node with the page's audience and prices; the prices come from `offers` in `src/data/schema.ts`, which the homepage organisation's `makesOffer` shares (adding Partner, which only the homepage shows), and which switch from the pilot to the setup once founding places run out. The homepage links to the page from the FAQ intro as well as the footer.
- The target market is not currently constrained to a particular industry, company size, department, or geography. The Estonia search page does say who it is for, by Martin's decision in October 2026: small businesses with 1 to 20 people, such as trades, clinics and shops. Those are examples for that page, not a limit on the company, and the page adds that the job matters more than the industry.

Offer and prices, approved by Martin in October 2026:
- Every figure below lives once in `src/data/offer.ts`: the prices, the review's 30 minutes, Care's 4 hours, the case study's 6 to 8 weeks and the founding places. Both pages, the booking panel and the JSON-LD read them from there, so change a figure there (and here), never in page copy.
- **Free AI review:** a free 30-minute call, booked through Cal.com. It is the page's main action.
- **Delivery:** Seestemic mostly sets up AI teammates in a ready-made AI app, connected to the client's email, calendar and files, and clients message them from that app on their phone or computer. A custom build is the exception, for a job that needs it (Martin, October 2026). So the site says "set up" rather than "build", and "connected to" the tools a client uses rather than "inside" them. Training the client's team is part of the setup and the pilot, not Care. Never name the AI app or its vendor on the site.
- **Setup:** from €1,500, one-time, for the first AI teammate, training included.
- **Founding-client pilot:** Martin's offer for the first 5 clients, approved in October 2026: one AI teammate for one task, training included, for €500 one-time (normally from €1,500). In return, the client writes a short case study after 6 to 8 weeks. The page shows it on step 2 (a "First 5 clients" pill and the struck €1,500) and in a painted band under the steps. Always call it one-time, because it sits beside monthly prices. Places are tracked in `founding` in `src/data/offer.ts`; raise `taken` as clients sign, and the offer disappears when none are left. Places are claimed through the free AI review, so the band's button is "Book a free AI review". Care is not part of the pilot: it is optional and starts after it, and the page says so next to Care's price.
- **Care:** from €300 a month, optional, starting after setup (after the pilot for founding clients): up to 4 hours of the Seestemic team's time and a check-in each month. The 4 hours came from review feedback in October 2026, so confirm it with Martin before building on it. Never price it per AI teammate or say how many it includes.
- **Partner:** from €1,200 a month. Seestemic helps the whole company adopt AI in various ways, not only through AI teammates. The page shows it as its own card with three points: a plan for where AI can help, team by team; help picking AI tools, plus simple rules for using them safely; and hands-on training for every team. Partner's hours, and whether it includes Care, are not decided, so do not claim them.
- AI costs, such as an AI subscription, are not included; the client pays them separately.
- Clients keep everything Seestemic sets up, including if they stop Care. Minimum terms and notice periods are not decided, so do not claim any.
- Seestemic is not VAT-registered (exempt for now). The page says "No VAT is added, as Seestemic isn't VAT-registered." Do not write "prices exclude VAT" until it registers, because that reads as 24% on top; once it registers, switch to that line.
- AI teammates can talk to each customer in that customer's own language; do not list specific languages. Calls and training are in English.
- Seestemic signs a data processing agreement with each client. Do not promise more than that about client data, such as keeping it in the EU or out of AI training: the AI tools Seestemic sets up can't guarantee either for every client (Martin's call, October 2026).
- Larger setups of €4,000 or more may qualify for EIS co-funding (see Evidence on Hand); the page says so under the prices and links to the FAQ answer.
- The company's legal name, registry code and address are pending a company rename. Leave them, and the Privacy page, off the site until Martin supplies them.
- The site lives at https://www.seestemic.com (the primary domain; the apex redirects to www). Canonicals, og:url and the sitemap all use www. Older design proposals live on design.seestemic.com; only their known paths (listed in `vercel.json`) redirect there, and any other unknown path gets the site's own 404 page.
- Analytics: OpenPanel, self-hosted on Seestemic's Coolify (dashboard https://openpanel.coolify.seestemic.com, project "Seestemic"). It is cookieless, so the page has no cookie banner. The tracker loads only in production builds, from the config in `analytics` in `src/data/site.ts`. It records page views, outgoing links, `booking_opened` (with `from`: the id of the section holding the button, such as header, top, pilot, how, about, book or footer on the homepage, and header, top, contents, cost, book or footer on `/ai-for-small-business-estonia`, and review or footer on `/eis-grants-ai-software-small-business`; a button's `data-booking-from` overrides the section id) and `booking_completed`, and nothing the visitor types into Cal.com. OpenPanel accepts events only from seestemic.com, www.seestemic.com and seestemic-landing.vercel.app; add any new domain to the project's allowed domains. The client ID is public, but the client secret must never be committed.

## Brand Commitments

- Product and company name: Seestemic.
- What Seestemic sets up are "AI teammates" (Martin's decision, October 2026), never "helpers", "assistants" or "employees". Each is named after the job you'd hire for: Quote writer, Inbox manager, Receptionist, Invoice chaser, Bookkeeper, Customer care, Report writer and Staff helpdesk (`helpers` in `src/data/helpers.ts`). Mid-sentence a name takes "your", as in "Message your quote writer…" (`yourName`). They are software, not people, and the FAQ says so. Code keeps its old identifiers, such as `Helper.astro`, `helpers.ts` and the mascot called "the helper" in DESIGN.md.
- Present AI in practical business terms rather than as technology for its own sake.
- Emphasize partnership, measurable usefulness, integration with existing work, human control, and employee adoption.
- Do not narrow the company to one industry or a single AI product without an explicit product decision.
- Do not mention Microsoft Teams for now.
- Seestemic speaks as "we", "us" and "our" (Martin's decision, October 2026), never "I" or "me". The one exception is the founder chat, where Martin introduces himself in the first person; the lead above it names him ("Short answer: Martin"). Do not claim a team size, names or roles. Customers' own words, such as FAQ questions and example messages, may say "I" or "we".

## Evidence on Hand

There are currently no verified testimonials, case studies, benchmarks, customer names, or quantitative proof claims approved for publication.

Approved founder facts, taken from Martin's CV and approved when he picked the founder chat: Martin Solev is the founder and runs Seestemic from Tallinn; he has built software for over 12 years, including cloud services used by millions of people; his LinkedIn is https://www.linkedin.com/in/martin-solev-a09b0061/. He is behind the company and is each client's first contact, on the first call. Seestemic has a team that sets up and looks after AI teammates with him, so never imply he works alone (Martin, October 2026). Do not name his employer or its products without his explicit approval.

The previous landing page's named testimonials, the `3–6 weeks` delivery claim, and all other proof-like statistics or attributed statements are placeholders. Future work must not treat them as factual evidence or invent replacements. They require explicit verification or approved content before publication.

The site's product examples are authored, not client work. They use euros, 24-hour times and plain roles (a dental clinic, a café) instead of invented people or company names.

EIS funding, re-checked on 14, 15 and 22 October 2026 against eis.ee and the grant regulation published there in August 2026: the RTE grant for software implementation and integration (https://eis.ee/en/services/rte-software/) takes applications on an ongoing basis until its budget runs out (the regulation's explanatory memorandum adds "or until 31 March 2029"). It covers up to 50% of eligible costs, with a grant of €2,000 to €5,000, so the project must cost at least €4,000. The company, registered in the Estonian Commercial Register, applies itself before committing to the work, with an itemised quote. It needs average sales revenue of at least €50,000 over its last two financial years and a mandatory digital advisor with three similar engagements in the past four years. Someone at the company must complete the free "Digitalising your company" course, the company must use e-invoicing by the end of the project, and the grant counts as de minimis aid. Monthly fees such as Care are not covered. There is no vendor registry. EIS's separate grant for adopting artificial intelligence (https://eis.ee/en/services/adopting-artificial-intelligence/) closed on 24 August 2026, once applications exceeded its remaining budget, and was still closed on 22 October 2026. Do not promote it; the Estonia page only says it closed, with that link, because owners search for it. EIS's English name is now the Estonian Business and Innovation Agency; the FAQ adds "formerly Enterprise Estonia" because owners still know that name.

## Product Principles

1. Start with business value and the work that should improve, not with a predetermined AI product.
2. Build around each company's existing systems, processes, and people.
3. Treat implementation, controls, training, and adoption as one continuous engagement.
4. Keep human ownership and appropriate oversight wherever decisions or risk require it.
5. Expand what proves useful and measurable instead of forcing AI into unsuitable work.
