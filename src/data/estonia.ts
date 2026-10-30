// Copy for /ai-for-small-business-estonia, a search page that answers one question per section.
// Each section opens with a short answer that makes sense on its own, so search snippets and AI
// assistants can quote it. Those answers and the FAQ feed both the page and the FAQPage JSON-LD,
// so the two always match. AI teammate messages are illustrative examples, not client results.
import type { HelperId } from "./helpers";
import { care, eur, founding, pilot, pilotOpen, review, setup } from "./offer";

/** Shown on the page as "Updated" and used as the page's dateModified. */
export const lastUpdated = { iso: "2026-10-22", label: "22 October 2026" } as const;

/** When the EIS grant facts below, and the AI grant's closure, were last checked against eis.ee. */
export const grantChecked = { iso: "2026-10-22", label: "22 October 2026" } as const;

export const eisGrantUrl = "https://eis.ee/en/services/rte-software/";

/** EIS's separate AI grant, closed since 24 August 2026. The page only says it closed; don't promote it. */
export const eisAiGrantUrl = "https://eis.ee/en/services/adopting-artificial-intelligence/";

export type SectionId = "who" | "worth" | "what" | "safe" | "cost" | "funding" | "how" | "why";

export interface Answer {
  /** Short label for the "On this page" list. */
  nav: string;
  /** The section heading, phrased the way people search or ask. */
  question: string;
  /** The section's first paragraph: a complete answer on its own. */
  answer: string;
}

/** In page order. */
export const answers: Record<SectionId, Answer> = {
  who: {
    nav: "Who it’s for",
    question: "Who is Seestemic for?",
    answer:
      "Seestemic is built for small businesses in Estonia with 1 to 20 people, such as trades, clinics and shops. Most have no IT team, so the owner or someone in the office handles the quotes, bookings, emails and invoices. Our AI teammates take on those repetitive jobs, connected to the tools the business already uses.",
  },
  worth: {
    nav: "Is it worth it?",
    question: "Is AI worth it for a small business?",
    answer:
      "Usually, if one repetitive job eats hours of your week, such as writing quotes, answering the same emails or chasing unpaid invoices. You don’t need an IT team or a big budget. We start with one job, set it up with the tools you already use and only add more once it clearly helps.",
  },
  what: {
    nav: "What AI can do",
    question: "What can AI do for a small business?",
    answer:
      "It can take over the repetitive parts of your week: drafting quotes, sorting email, booking appointments, chasing late invoices, filing receipts, answering everyday customer questions and summing up your numbers. Each AI teammate does one job, connected to your own tools, and asks before anything important happens.",
  },
  safe: {
    nav: "Data and GDPR",
    question: "Is AI safe for your customer data?",
    answer:
      "It can be, when it’s set up with clear limits. Each AI teammate only sees the tools and data you allow, anything important waits for your OK, and its work is logged so you can check it. We sign a data processing agreement with you, as GDPR requires.",
  },
  cost: {
    nav: "Prices",
    question: "How much does AI cost for a small business?",
    answer: `At Seestemic, you start with a free ${review.minutes}-minute AI review. Setting up your first AI teammate costs from ${eur(setup.from)}, one-time${
      pilotOpen ? `, or ${eur(pilot.price)} for our first ${founding.places} clients` : ""
    }. Care, our optional monthly support, starts at ${eur(care.from)} a month. AI costs, such as an AI subscription, are paid separately.`,
  },
  funding: {
    nav: "EIS funding",
    question: "Can an Estonian company get funding for AI?",
    answer:
      "Possibly, for larger setups. EIS (the Estonian Business and Innovation Agency, formerly Enterprise Estonia) can cover up to half the cost of a software project for Estonian companies, with a grant of €2,000 to €5,000, so the project needs to cost at least €4,000.",
  },
  how: {
    nav: "Getting started",
    question: "How do you start using AI in a small business?",
    answer:
      "Start with one job, not a big AI project. At Seestemic, we look at your week on a free call, set up one AI teammate for the job that takes the most time, train the people who’ll use it and only add more once it clearly works.",
  },
  why: {
    nav: "DIY or done for you",
    question: "Should you set up AI yourself or get help?",
    answer:
      "If you enjoy tinkering with software and have the time, you can start with off-the-shelf AI tools yourself. If you’d rather keep running your business, a done-for-you setup skips the trial and error.",
  },
};

/** The "at a glance" card in the first screen. Keep values short: the card sits beside the H1. */
export const glance: { label: string; value: string }[] = [
  { label: "What we do", value: "Set up AI teammates for repetitive jobs, like quotes, email and invoice reminders" },
  { label: "Where they work", value: "Connected to the tools you already use, such as Microsoft 365 or Google Workspace" },
  { label: "Who decides", value: "You. Anything important waits for your OK" },
  { label: "Your data", value: "Covered by a data processing agreement" },
  { label: "First step", value: `A free ${review.minutes}-minute AI review` },
  {
    label: "First AI teammate",
    value: pilotOpen
      ? `${eur(pilot.price)} one-time for our first ${founding.places} clients, normally from ${eur(setup.from)}`
      : `From ${eur(setup.from)}, one-time`,
  },
  { label: "Funding", value: "Setups of €4,000 or more may qualify for EIS co-funding" },
  { label: "Based in", value: "Tallinn, Estonia. Calls and training are in English" },
];

/**
 * "Who is Seestemic for?": examples, not a limit (Martin's decision for this page, October 2026).
 * Each line only names jobs the AI teammates in `jobs` below already do.
 */
export const businessTypes: { type: string; text: string }[] = [
  {
    type: "Trades",
    text: "Electricians, plumbers, builders and cleaners. AI teammates draft quotes from your price list, book jobs and chase late invoices.",
  },
  {
    type: "Clinics",
    text: "Dental, physio, beauty and vet clinics. AI teammates book appointments, send reminders and answer everyday questions.",
  },
  {
    type: "Shops",
    text: "Local and online shops. AI teammates answer questions about prices, delivery and returns, and sum up the week’s sales.",
  },
];

export const fitSigns = [
  "You or your team type the same things into emails, quotes or spreadsheets every week.",
  "Customers wait for replies, quotes or bookings while you’re busy doing the work itself.",
  "You’d rather have AI set up for you than learn new software.",
];

export const jobs: { helper: HelperId; job: string; example: string }[] = [
  {
    helper: "quotes",
    job: "Drafts quotes from your price list",
    example: "Drafted a €4,860 flooring quote for a dental clinic. Waiting for your OK.",
  },
  {
    helper: "inbox",
    job: "Sorts your email and answers the routine ones",
    example: "Answered 9 of 48 new emails with your saved replies. 3 need you.",
  },
  {
    helper: "frontDesk",
    job: "Books appointments and sends reminders",
    example: "Booked 6 appointments overnight and sent tomorrow’s reminders.",
  },
  {
    helper: "invoices",
    job: "Matches payments and chases late invoices",
    example: "2 invoices are over 30 days late. Send a final reminder, or will you call?",
  },
  {
    helper: "bookkeeping",
    job: "Reads receipts and files them in your accounts",
    example: "Filed 58 of 61 receipts. 3 have a quick question for you.",
  },
  {
    helper: "questions",
    job: "Answers customers from your own prices and policies",
    example: "Told a customer you deliver on Saturdays and booked them in for 10:00.",
  },
  {
    helper: "report",
    job: "Sums up your week on one page",
    example: "Your week is ready: sales, bookings and new reviews on one page.",
  },
  {
    helper: "handbook",
    job: "Answers your team from your own procedures",
    example: "Showed a new colleague how to handle a return without a receipt.",
  },
];

export const safety: { title: string; text: string }[] = [
  { title: "You set the limits.", text: "Decide what each AI teammate may do on its own and what always needs your OK." },
  { title: "We pick the AI provider with you.", text: "We choose the one that fits your needs." },
  { title: "You keep what we set up.", text: "It’s all yours, even if you stop Care." },
];

/** Repeats the homepage FAQ's wording. Re-check against eis.ee before changing it, and update grantChecked. */
export const grantFacts: { label: string; value: string }[] = [
  { label: "Grant", value: "Grant for implementing or linking software" },
  { label: "Grant size", value: "€2,000 to €5,000, up to half the project cost" },
  { label: "Your revenue", value: "An average of at least €50,000 a year over the last two years" },
  { label: "When to apply", value: "Before the work starts" },
  { label: "Not covered", value: "Monthly fees, such as Care" },
  { label: "Applications", value: "Open. Apply any time until the budget runs out" },
];

export const steps: { title: string; text: string }[] = [
  {
    title: "Free AI review",
    text: `A ${review.minutes}-minute call. Tell us which jobs take too long, and we’ll be honest about where AI can help.`,
  },
  {
    title: "One AI teammate, set up for you",
    text: "We connect it to the tools you already use, with your approval rules built in.",
  },
  {
    title: "Training, then results",
    text: "Hands-on training for the people who’ll use it. Then we measure with you, fix what isn’t right and add what works.",
  },
];

export const comparison: { topic: string; diy: string; us: string }[] = [
  {
    topic: "Where to start",
    diy: "You work out which job is worth automating",
    us: "We look at your week with you and pick the job worth doing first",
  },
  {
    topic: "Setup",
    diy: "You connect the tools and write the instructions",
    us: "We connect it to the tools you already use",
  },
  {
    topic: "Safety",
    diy: "You decide the limits and test them yourself",
    us: "Approval rules and logging come built in",
  },
  { topic: "Your team", diy: "Everyone learns on their own", us: "Hands-on training for the people who’ll use it" },
  { topic: "Afterwards", diy: "You fix things when they change", us: "Optional Care: our team’s time when you need it" },
  {
    topic: "Cost",
    diy: "Your time, plus AI subscriptions",
    us: "A free review, then a one-time setup. AI costs are separate",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

/** Questions the sections above don't already answer. */
export const faqs: Faq[] = [
  {
    question: "Do I need to be technical to use AI?",
    answer:
      "No. We set everything up and explain it in plain language, so you don’t need an IT team. If you can write an email, you can work with an AI teammate, and we train the people who’ll use it.",
  },
  {
    question: "Will AI replace my staff?",
    answer:
      "That isn’t the goal. AI teammates take the repetitive parts of the job off people’s plates, so your team spends more time with customers and on decisions that need a person. Anything important still waits for someone’s OK.",
  },
  {
    question: "Does it work with Microsoft 365, Google Workspace and my accounting software?",
    answer:
      "Usually, yes. We connect your AI teammates to the tools you already have, such as Microsoft 365, Google Workspace, your CRM, help desk or accounting software, instead of asking you to switch. If something won’t fit, we’ll tell you on the free AI review.",
  },
  {
    question: "Which languages do the AI teammates speak?",
    answer:
      "Your customers’ languages. An AI teammate can reply to each customer in their own language, using your prices, policies and saved replies. Our calls and training with you are in English.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "You start with one job, so your first AI teammate can be useful early. We don’t promise a fixed timeline. We measure it with you, fix what isn’t right and only expand what clearly works.",
  },
  {
    question: "What happens if I stop paying for Care?",
    answer: `You keep everything we set up. Care is optional: up to ${care.hours} hours of our team’s time each month, plus a monthly check-in. Without it, your AI teammates are still yours, and you keep paying any AI costs, such as an AI subscription, directly.`,
  },
  {
    question: "What do I need to prepare for the free AI review?",
    answer:
      "Nothing formal. Bring one or two jobs that take too long and a rough idea of the tools you use for them. You don’t need to know anything about AI. We’ll be honest about where it helps and where it doesn’t.",
  },
];
