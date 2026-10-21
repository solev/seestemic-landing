// Copy for /ai-for-small-business-estonia. The FAQ answers here feed both the visible accordion and the
// FAQPage JSON-LD, so the two always match. The feed rows are illustrative examples, not client results.
import type { HelperId } from "./helpers";
import { founding } from "./site";

export const pilotOpen = founding.taken < founding.places;

/** Shown on the page as "Last updated" and used as the page's dateModified. */
export const lastUpdated = { iso: "2026-10-21", label: "21 October 2026" } as const;

/** When the EIS grant facts below were last checked against eis.ee. */
export const grantChecked = { iso: "2026-10-21", label: "21 October 2026" } as const;

export const eisGrantUrl = "https://eis.ee/en/services/rte-software/";

export interface FeedItem {
  helper: HelperId;
  text: string;
  status: string;
  done?: boolean;
}

export const feed: FeedItem[] = [
  {
    helper: "quotes",
    text: "Drafted a €4,860 flooring quote for a dental clinic, with a site visit on Thursday at 10:00.",
    status: "Waiting for your OK",
  },
  {
    helper: "inbox",
    text: "Sorted 48 new emails, answered 9 with your saved replies and flagged 3 that need you.",
    status: "3 need you",
  },
  {
    helper: "frontDesk",
    text: "Booked 6 appointments overnight and sent reminders for tomorrow.",
    status: "Done",
    done: true,
  },
  {
    helper: "invoices",
    text: "Matched this week’s payments. 2 invoices are over 30 days late: send a final reminder, or will you call?",
    status: "Your call",
  },
  {
    helper: "bookkeeping",
    text: "Read 61 receipts, filed 58 in your accounts and set aside 3 with a quick question.",
    status: "3 to check",
  },
  {
    helper: "questions",
    text: "Told a customer you deliver on Saturdays, using your own prices and policies, and booked one for 10:00.",
    status: "Done",
    done: true,
  },
  {
    helper: "report",
    text: "Put your week on one page, from this week’s sales, bookings and new reviews.",
    status: "Sent",
    done: true,
  },
  {
    helper: "handbook",
    text: "Showed a new colleague how to handle a return without a receipt, straight from your returns policy.",
    status: "Done",
    done: true,
  },
];

export const grantFacts: { label: string; value: string }[] = [
  { label: "Run by", value: "EIS, the Estonian Business and Innovation Agency (formerly Enterprise Estonia)" },
  { label: "Covers", value: "Up to half the cost of a software project for an Estonian company" },
  { label: "Grant size", value: "€2,000 to €5,000, so the project needs to cost at least €4,000" },
  { label: "Your revenue", value: "An average of at least €50,000 a year over the last two years" },
  { label: "When to apply", value: "Before the work starts" },
  { label: "Not covered", value: "Monthly fees such as Care" },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What can AI do for a small business in Estonia?",
    answer:
      "It can take over repetitive jobs: drafting quotes, sorting email, booking appointments, reminding customers about invoices, filing receipts, answering everyday customer questions and writing a weekly report. A helper does this inside the tools you already use, and you approve anything important before it happens. You start with one job and add more only when it clearly works.",
  },
  {
    question: "How much does AI automation cost for a small business?",
    answer: pilotOpen
      ? `At Seestemic, the first step is a free 30-minute AI review. Our founding-client pilot, for our first ${founding.places} clients, is €500 one-time for one small helper set up for one task, normally from €1,500. Care is optional after the pilot, from €300 a month. AI costs, such as an AI subscription, are paid separately, and no VAT is added.`
      : "At Seestemic, the first step is a free 30-minute AI review. Setting up your first helper costs from €1,500, one-time. Care is optional after setup, from €300 a month. AI costs, such as an AI subscription, are paid separately, and no VAT is added, as Seestemic isn’t VAT-registered.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. We set everything up and explain it in plain language, so you don’t need an IT team. If you can write an email, you can work with an AI helper. We also train the people who’ll use it, so everyone knows how to check its work and when to step in.",
  },
  {
    question: "Is it GDPR-safe?",
    answer:
      "We set it up so you stay in control of your data. You decide what each helper can see and which actions need your approval, and its work is logged so you can check it. We choose the AI provider that fits your needs, your data can stay in the EU, and we sign a data processing agreement with you.",
  },
  {
    question: "Will AI replace my staff?",
    answer:
      "That isn’t the goal. Helpers take the repetitive parts of the job off people’s plates, so your team spends more time with customers and on decisions that need a person. Anything important still waits for someone’s OK, and we train your team to check a helper’s work and step in when needed.",
  },
  {
    question: "Does it work with Microsoft 365, Google Workspace and my accounting software?",
    answer:
      "Usually, yes. We build around what you already have, such as Microsoft 365, Google Workspace, your CRM, help desk or accounting software, instead of asking you to switch. On the free AI review we look at the tools you use and tell you honestly if something won’t fit.",
  },
  {
    question: "Can I get an EIS grant for AI?",
    answer:
      "Possibly, for larger setups. EIS’s grant for software implementation and integration can cover up to half the cost of a project, with a grant of €2,000 to €5,000, so the project needs to cost at least €4,000. Your revenue should average at least €50,000 a year over the last two years, and you apply before the work starts. The separate EIS AI adoption grant closed in August 2026.",
  },
  {
    question: "Which languages do the helpers speak?",
    answer:
      "Your customers’ languages. A helper can talk to each customer in their own language, using your prices, policies and saved replies. Our calls, training and guides with you are in English. On the free AI review, tell us which languages your customers write in.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "You start with one job, so your first helper can be useful early. We don’t promise a fixed timeline: we measure the helper with you, fix what isn’t right and only expand what clearly works. If AI isn’t a good fit for a job, we’ll tell you on the free AI review.",
  },
  {
    question: "What happens if I stop paying for Care?",
    answer:
      "You keep everything we built. Care is optional, and it’s simply our team’s time when you need it: up to 4 hours a month, plus a monthly check-in. Without Care, your helpers are still yours, and AI costs, such as an AI subscription, are paid separately as before.",
  },
  {
    question: "Who would I actually work with?",
    answer:
      "Martin Solev, Seestemic’s founder, on your first call. He runs Seestemic from Tallinn and has built software for over 12 years, including cloud services used by millions of people. After that call, Martin and our team build your helper, train your people and look after it.",
  },
];
