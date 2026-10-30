// Copy and facts for /eis-grants-ai-software-small-business, a neutral guide to EIS grants for AI and software.
// It's an answer page, not a sales page: each section opens with a short answer that makes sense when quoted on
// its own. The FAQ feeds both the page and the FAQPage JSON-LD, so the two always match.
// Every grant status here changes when budgets run out. Re-check them on eis.ee and tehnopol.ee every month,
// and on any EIS news, then update `lastChecked`.
// Never say or imply that Seestemic is an EIS digital consultant (diginõustaja), or that its work qualifies
// for a grant; both are open decisions for Martin (October 2026).
import { review } from "./offer";

/** When every status and figure below was last checked. Shown on the page and used as the Article's dateModified. */
export const lastChecked = { iso: "2026-10-22", label: "22 Oct 2026", long: "22 October 2026" } as const;

/** The day the guide was first published. */
export const published = { iso: "2026-10-22" } as const;

export const h1 = "Can an EIS grant pay for AI or new software in your business? (2026)";

export const urls = {
  rteEn: "https://eis.ee/en/services/rte-software/",
  rteEt: "https://eis.ee/teenused/rte_tarkvara_toetus/",
  rteNews: "https://eis.ee/eis-toetab-ettevotete-aritarkvara-kasutuselevottu-1-miljoni-euroga/",
  rteRegulation: "https://www.riigiteataja.ee/et/akt/127012026020",
  aiEn: "https://eis.ee/en/services/adopting-artificial-intelligence/",
  aiEt: "https://eis.ee/teenused/tehisaru-toetus/",
  aiNews: "https://eis.ee/ettev%c3%b5tjad-saavad-t%c3%a4nasest-taotleda-tehisaru-kasutuselev%c3%b5tu-toetust/",
  aiRegulation: "https://www.riigiteataja.ee/et/akt/126062026024",
  aiGuide: "https://eis.ee/wp-content/uploads/2026/08/tehisaru-juhend-ja-naidisjuhtumid.pdf",
  roadmap: "https://eis.ee/en/services/grant-for-digitalisation-roadmap/",
  roadmapAdvisory: "https://eis.ee/en/services/support-for-digitalisation-roadmap-advisory-and-development-activities/",
  raise: "https://www.tehnopol.ee/en/project/raise-ai-programme/",
  raiseNews: "https://www.tehnopol.ee/en/raise-ai-programme-for-growth-stage-smes/",
} as const;

export const eisContact = { email: "klienditeenindus@eis.ee", phone: "+372 627 9700", tel: "+3726279700" } as const;

/** The answer box under the H1. */
export const summary =
  "As of 22 October 2026, the EIS grant for adopting AI is closed (it shut on 24 August 2026). Small Estonian firms with at least €50,000 average revenue can still apply for the RTE software implementation grant (€2,000–€5,000, 50% self-financing, digital consultant required). RAISE takes applications until 20 November 2026.";

export type SectionId = "status" | "fit" | "rte" | "aiGrant" | "raise" | "checks" | "seestemic";

export interface Answer {
  /** The section's anchor. */
  id: string;
  /** Short label for the "On this page" list. */
  nav: string;
  /** The section heading, phrased the way people search or ask. */
  question: string;
  /** The section's first paragraph: a complete, dated answer on its own. */
  answer: string;
}

/** In page order. */
export const answers: Record<SectionId, Answer> = {
  status: {
    id: "status",
    nav: "What’s open now",
    question: "Which EIS grants for AI and software are open right now?",
    answer:
      "As of 22 October 2026, two EIS grants that can pay for business software or digital development are open: the RTE software grant and the roadmap advisory and development grant. The AI adoption grant, the roadmap grant and the RTE process automation grant are closed. Tehnopol’s RAISE programme is open until 20 November 2026.",
  },
  fit: {
    id: "fit",
    nav: "Which one fits me?",
    question: "Which grant fits my business?",
    answer:
      "It mostly depends on your revenue. Under €50,000 a year on average, no current EIS digital grant fits. From €50,000, the RTE software grant may. From €200,000, and with a digitalisation roadmap, the roadmap advisory and development grant (up to €35,000) may fit as well.",
  },
  rte: {
    id: "rte",
    nav: "The RTE software grant",
    question: "What does the EIS software grant pay for?",
    answer:
      "The RTE grant for software implementation and integration pays €2,000 to €5,000 towards new business software: a one-off licence or joining fee, integration development and the digital consultant. You pay at least half the cost yourself. As of 22 October 2026, it takes applications on a rolling basis until its €1 million budget runs out.",
  },
  aiGrant: {
    id: "ai-grant",
    nav: "The AI grant",
    question: "What happened to the EIS AI grant?",
    answer:
      "EIS’s grant for adopting artificial intelligence opened on 24 August 2026 and closed the same day at 16:00, because applications exceeded its €2 million budget. As of 22 October 2026, EIS has not announced a new round.",
  },
  raise: {
    id: "raise",
    nav: "RAISE",
    question: "What is RAISE, and who can apply?",
    answer:
      "RAISE is a free AI programme led by Tehnopol for growth-stage SMEs in Estonia, Latvia, Finland and Sweden. Sixteen selected companies get mentoring and up to €14,000 of funded AI development support with a matched provider. Applications close on 20 November 2026.",
  },
  checks: {
    id: "checks",
    nav: "Before you apply",
    question: "What should I check before applying for an EIS grant?",
    answer:
      "Check five things first: your revenue, your de minimis balance, e-invoicing, the training course, and that no work has started. If one of them fails, you may not qualify, or some of your costs may not count.",
  },
  seestemic: {
    id: "seestemic",
    nav: "Where Seestemic fits",
    question: "Where does Seestemic fit in?",
    answer:
      "We set up AI teammates that take repetitive jobs off a small business’s plate. Many useful AI teammates cost less than a grant process.",
  },
};

export interface GrantStatus {
  name: string;
  open: boolean;
  status: string;
  amount: string;
  selfFinancing: string;
  revenue: string;
  condition: string;
  /** The official page. Missing only where we have no official source yet; `note` then says why. */
  link?: { href: string; label: string };
  note?: string;
}

/** The status table, in the order a small business is most likely to care about. */
export const statuses: GrantStatus[] = [
  {
    name: "AI adoption grant",
    open: false,
    status: "Closed on 24 Aug 2026, 16:00",
    amount: "€20,000",
    selfFinancing: "20%",
    revenue: "€200,000 (previous year)",
    condition: "Results proven by a prototype or test video",
    link: { href: urls.aiEn, label: "eis.ee" },
  },
  {
    name: "RTE software implementation and integration",
    open: true,
    status: "Open, until the €1M budget runs out",
    amount: "€2,000–€5,000",
    selfFinancing: "50%",
    revenue: "€50,000 (average of 2 years)",
    condition: "A digital consultant (diginõustaja) is mandatory",
    link: { href: urls.rteEn, label: "eis.ee" },
  },
  {
    name: "Digitalisation roadmap grant",
    open: false,
    status: "Closed since 24 Jul 2026, 09:00",
    amount: "Up to €10,000",
    selfFinancing: "30–50%",
    revenue: "€200,000",
    condition: "Paid for drawing up a digitalisation roadmap",
    link: { href: urls.roadmap, label: "eis.ee" },
  },
  {
    name: "Roadmap advisory and development grant",
    open: true,
    status: "Open",
    amount: "Up to €35,000",
    selfFinancing: "30–50%",
    revenue: "€200,000",
    condition: "You need a digitalisation roadmap",
    link: { href: urls.roadmapAdvisory, label: "eis.ee" },
  },
  {
    name: "RTE business process automation and data exchange",
    open: false,
    status: "Closed since 4 Sep 2026, 16:00",
    amount: "Up to €150,000",
    selfFinancing: "Not checked",
    revenue: "Not checked",
    condition: "Status not re-checked on eis.ee, see the note",
    note: "Status from a third-party summary dated 7 October 2026, not yet re-checked on eis.ee.",
  },
  {
    name: "RAISE (Tehnopol, not EIS)",
    open: true,
    status: "Open until 20 Nov 2026",
    amount: "Up to €14,000 of funded AI development support",
    selfFinancing: "None, it’s free",
    revenue: "Some revenue",
    condition: "Growth-stage, generally up to 5 years old; 16 places",
    link: { href: urls.raise, label: "tehnopol.ee" },
  },
];

export interface Faq {
  question: string;
  answer: string;
  /** A related link shown under the answer. It isn't part of the answer, so the FAQPage text stays exact. */
  link?: { href: string; label: string };
}

export const faqs: Faq[] = [
  {
    question: "Is the EIS AI adoption grant still open?",
    answer:
      "No. EIS closed the grant for adopting artificial intelligence on 24 August 2026 at 16:00, because applications exceeded its €2 million budget. It offered €20,000 per project with 20% self-financing for companies with at least €200,000 revenue. As of 22 October 2026, EIS has not announced a new round.",
  },
  {
    question: "What EIS grant can a small business use for software or AI in 2026?",
    answer:
      "As of 22 October 2026, the main option is EIS’s RTE grant for software implementation and integration. It’s open on a rolling basis until its €1 million budget runs out, pays €2,000–€5,000 with 50% self-financing, and needs at least €50,000 average revenue over the last two years. AI tools may qualify if they’re new business software or an integration.",
  },
  {
    question: "Do I need a digital consultant for the EIS software grant?",
    answer:
      "Yes. Involving a digital consultant (diginõustaja) is mandatory. The consultant must have done at least three similar advisory projects in the four years before your project. Their fee can be covered, but it can make up at most 50% of the grant.",
  },
  {
    question: "What else do I need to qualify for the RTE software grant?",
    answer:
      "You need to be in the Estonian Commercial Register, have at least €50,000 average revenue over two years, and have someone who has completed the free “Ettevõtte digitaliseerimise koolitus” course. You also need to use e-invoicing by the end of the project and stay under the €300,000 de minimis limit.",
  },
  {
    question: "Does the EIS grant cover software licences?",
    answer:
      "The RTE software grant covers a one-off licence purchase or joining fee, plus integration development and the digital consultant. It doesn’t cover upgrading software you already use, hardware, or VAT. Monthly subscriptions beyond the one-off cost aren’t listed as eligible.",
  },
  {
    question: "What if my revenue is under €50,000?",
    answer:
      "Then none of EIS’s current digital grants fit, as of 22 October 2026. Options are RAISE (if your company is growth-stage and generally up to five years old) or starting small with your own budget. A single AI teammate often costs less than the paperwork of a grant.",
    link: { href: "/ai-for-small-business-estonia#cost", label: "What AI costs for a small business in Estonia" },
  },
  {
    question: "What is RAISE and when is the deadline?",
    answer:
      "RAISE is a free Tehnopol-led AI programme for growth-stage SMEs in Estonia, Latvia, Finland and Sweden. Sixteen selected companies get mentoring and up to €14,000 of funded AI development support with a matched provider. Applications close on 20 November 2026.",
  },
  {
    question: "Can I start the work before applying?",
    answer:
      "Generally, no. Apply first and don’t sign binding orders before you submit, or the costs may become ineligible. Check the grant regulation for your measure.",
  },
  {
    question: "Can Seestemic apply for the grant for me?",
    answer: `No. The company applies itself, in Estonian, through EIS’s E-toetus environment. Seestemic can help you work out whether AI is worth doing at all, in a free ${review.minutes}-minute review.`,
  },
];
