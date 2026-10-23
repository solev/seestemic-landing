// Copy, prices and FAQ for /ai-automation-cost-small-business, a neutral guide to what AI automation costs a small business.
// It's an answer page, not a sales page: each section opens with a short answer that makes sense when quoted on its own,
// Seestemic appears once, as a labelled worked example, and the page has one call to action. The FAQ feeds both the page
// and the FAQPage JSON-LD, so the two always match.
// Rules (Martin, October 2026):
// - Never name the AI product behind the worked example, its vendor or its subscription. Call it "an AI subscription".
// - Never name or link competitors or agencies, and don't quote agency prices.
// - No "data stays in the EU" claim for the AI helper; use only the `dataNote` wording below.
// - Never call Seestemic an EIS digital consultant (diginõustaja), or say its work or monthly fees qualify for a grant.
// - AI covers hours; it doesn't replace people. No invented numbers: every figure has an official source or is a
//   labelled example input.
// Third-party prices are list prices from each vendor's own page and change often. Re-check them on publish day and
// every quarter, then update `pricesChecked`. Statistics Estonia publishes a new wage quarter about every three months;
// update `wage`, and the savings example follows.
import { aiSubscription, care, eur, founding, pilot, pilotOpen, review, setup, usd } from "./offer";
import { grantChecked } from "./estonia";
import { eisGrantsPage } from "./site";

/** Shown as "Prices last checked" and used as the Article's dateModified. */
export const pricesChecked = { iso: "2026-10-22", label: "22 Oct 2026", long: "22 October 2026" } as const;

/** The day the guide was first published. */
export const published = { iso: "2026-10-22" } as const;

export const h1 = "How much does AI automation cost a small business? (2026, in euros)";

/** About $30 a month, as shown on the page. */
export const subscription = usd(aiSubscription.usdPerMonth);

/** Seestemic's data wording for the AI helper. EU data residency for it is not confirmed, so say no more than this. */
export const dataNote =
  "Seestemic signs a data processing agreement with you. Your data can stay in the EU, depending on the provider we choose together.";

const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
const inWords = (n: number) => numberWords[n] ?? String(n);

/** Euro amounts with cents, such as €18.20, for tool prices. Seestemic's own prices use `eur` from offer.ts. */
const eurCents = (amount: number) => `€${amount.toFixed(2)}`;

export const urls = {
  chatgpt: "https://openai.com/business/pricing/",
  chatgptHelp: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview",
  claude: "https://claude.com/pricing",
  copilot: "https://www.microsoft.com/en-ie/microsoft-365-copilot/pricing-new",
  zapier: "https://zapier.com/pricing",
  make: "https://www.make.com/en/compare/make-vs-zapier",
  wages: "https://stat.ee/en/wages-and-salaries-and-labour-costs",
  wagesMethod:
    "https://stat.ee/en/find-statistics/statistics-theme/work-life/wages-and-salaries-and-labour-costs/average-monthly-gross-wages-and-salaries",
} as const;

/**
 * List prices, checked on `pricesChecked`. US dollars unless noted, excluding VAT. Monthly prices are per month.
 * Make's monthly-billing prices weren't verified on make.com, so they are left out on purpose.
 */
export const prices = {
  chatgptBusiness: { annual: 20, monthly: 25, minSeats: 2 },
  claude: { proMonthly: 20, proAnnual: 17, proUpfront: 200 },
  /** In euros, on an annual plan. The promotion applies to the first year only. */
  copilotBusiness: { annual: 18.2, promo: 15.6, promoEnds: "31 Dec 2026", maxUsers: 300 },
  zapier: { freeTasks: 100, proAnnual: 19.99, proMonthly: 29.99, proTasks: 750, teamAnnual: 69 },
  make: { freeCredits: 1000, core: 9, pro: 16, teams: 29, credits: 10000 },
} as const;

const { chatgptBusiness: gpt, claude, copilotBusiness: copilot, zapier, make } = prices;
const n = (value: number) => value.toLocaleString("en-GB");

export interface ToolRow {
  tool: string;
  plan: string;
  price: string;
  billing: string;
  source: { href: string; label: string };
}

/** Examples of tools you can use yourself, in no particular order. Not the AI subscription in the worked example. */
export const tools: ToolRow[] = [
  {
    tool: "ChatGPT",
    plan: "Business, standard seat",
    price: `${usd(gpt.annual)} per user a month (${usd(gpt.monthly)} billed monthly)`,
    billing: `Annual or monthly; at least ${gpt.minSeats} seats`,
    source: { href: urls.chatgpt, label: "openai.com" },
  },

  {
    tool: "Claude",
    plan: "Pro",
    price: `${usd(claude.proMonthly)} a month (${usd(claude.proAnnual)} a month billed annually, ${usd(claude.proUpfront)} upfront)`,
    billing: "Monthly or annual",
    source: { href: urls.claude, label: "claude.com" },
  },

  {
    tool: "Microsoft 365 Copilot",
    plan: "Business, an add-on",
    price: `${eurCents(copilot.annual)} per user a month (promotion: ${eurCents(copilot.promo)} until ${copilot.promoEnds}, first year only)`,
    billing: `Annual; needs an eligible Microsoft 365 Business plan; 1 to ${copilot.maxUsers} users`,
    source: { href: urls.copilot, label: "microsoft.com" },
  },
  {
    tool: "Zapier",
    plan: "Free",
    price: `$0, ${n(zapier.freeTasks)} tasks a month`,
    billing: "None",
    source: { href: urls.zapier, label: "zapier.com" },
  },
  {
    tool: "Zapier",
    plan: "Professional",
    price: `From ${usd(zapier.proAnnual)} a month for ${n(zapier.proTasks)} tasks (${usd(zapier.proMonthly)} billed monthly)`,
    billing: "Annual or monthly; extra tasks are billed per task",
    source: { href: urls.zapier, label: "zapier.com" },
  },
  {
    tool: "Zapier",
    plan: "Team",
    price: `From ${usd(zapier.teamAnnual)} a month`,
    billing: "Annual",
    source: { href: urls.zapier, label: "zapier.com" },
  },
  {
    tool: "Make",
    plan: "Free",
    price: `$0, ${n(make.freeCredits)} credits a month`,
    billing: "None",
    source: { href: urls.make, label: "make.com" },
  },
  {
    tool: "Make",
    plan: "Core, Pro, Teams",
    price: `${usd(make.core)}, ${usd(make.pro)} or ${usd(make.teams)} a month, each from ${n(make.credits)} credits`,
    billing: "Annual",
    source: { href: urls.make, label: "make.com" },
  },
];

/** Statistics Estonia, table PA111 (page last updated 3 Sep 2026). Check for a newer quarter before relying on it. */
export const wage = { monthly: 2243, quarter: "Q2 2026", source: "Statistics Estonia" } as const;

/**
 * The savings example: hours covered, valued at the average gross wage. Every input is shown on the page.
 * Rounding never favours the result: the value of hours rounds down to €10, and payback rounds up to whole months.
 */
const monthlyHours = (perWeek: number) => (perWeek * 52) / 12;
const fullTimeHours = Math.round(monthlyHours(40));
const hourly = Math.round(wage.monthly / fullTimeHours);
/** For this example only, the AI subscription in dollars is treated as the same number of euros. */
const subscriptionEur = aiSubscription.usdPerMonth;
/** The setups the payback is worked out for: the founding pilot while it's open, and the normal setup price. */
const setups = pilotOpen ? [pilot.price, setup.from] : [setup.from];

const scenario = (label: string, perWeek: number) => {
  const hours = monthlyHours(perWeek);
  const value = Math.floor((hours * hourly) / 10) * 10;
  const net = value - subscriptionEur;
  return {
    label,
    perWeek,
    hours: hours.toFixed(1),
    value,
    net,
    payback: setups.map((price) => ({ price, months: net > 0 ? Math.ceil(price / net) : undefined })),
    withCare: net - care.from,
  };
};

export const savings = {
  fullTimeHours,
  hourly,
  subscriptionEur,
  scenarios: [scenario("Example A", 5), scenario("Example B", 10)],
};

const firstPayback = savings.scenarios[0].payback[0];

/** The answer box under the H1. */
export const summary = `For most small businesses, AI automation means a one-off setup fee, an AI subscription (often around ${subscription} a month per user), optional monthly upkeep, and some of your own time to review and approve. Doing it yourself costs less cash but more hours. A done-for-you setup costs more upfront but less of your time.`;

export type SectionId = "costs" | "tools" | "compare" | "hidden" | "example" | "savings" | "grant" | "tips";

export interface Answer {
  id: SectionId;
  /** Short label for the "On this page" list. */
  nav: string;
  /** The section heading, phrased the way people search or ask. */
  question: string;
  /** The section's first paragraph: a complete answer on its own. */
  answer: string;
}

/** In page order. */
export const answers: Record<SectionId, Answer> = {
  costs: {
    id: "costs",
    nav: "The four costs",
    question: "What are the four costs of AI automation?",
    answer:
      "AI automation has four costs: a one-off setup, the AI subscription and tools, optional monthly upkeep, and your own time. The last is easy to forget, and it often decides whether doing it yourself is really cheaper.",
  },
  tools: {
    id: "tools",
    nav: "Tool prices",
    question: "What do the AI tools themselves cost?",
    answer: `As of ${pricesChecked.long}, AI assistant plans list at about ${usd(claude.proAnnual)} to ${usd(gpt.monthly)} (or ${eurCents(copilot.annual)}) per user a month, and automation platforms have free plans, with paid plans from ${usd(make.core)} a month billed annually. Higher tiers and heavier use cost more.`,
  },
  compare: {
    id: "compare",
    nav: "DIY, agency or done for you",
    question: "Should you do it yourself, hire an agency or get it done for you?",
    answer:
      "Doing it yourself costs the least cash and the most time. A custom-built agency project suits larger or unusual processes across several systems. A done-for-you setup handles one job for a fixed price and takes little of your time. None of them is right for everyone.",
  },
  hidden: {
    id: "hidden",
    nav: "Hidden costs",
    question: "What costs are easy to miss?",
    answer:
      "Watch for usage overages, seat minimums, promotions that end, VAT, exchange rates and the time it takes to keep things running.",
  },
  example: {
    id: "example",
    nav: "Example: done for you",
    question: "What does a done-for-you setup cost? An example",
    answer:
      "In this Seestemic example, one small helper drafts quotes from your price list and waits for the owner’s OK before sending.",
  },
  savings: {
    id: "savings",
    nav: "What it can cover",
    question: "What can an AI helper cover, and when does it pay for itself?",
    answer: `An AI assistant for about ${subscription} a month won’t replace a person, but it can cover some of the routine admin hours someone in your business spends each week. Compare that with what those hours cost: in Estonia, the average gross monthly wage was ${eur(wage.monthly)} in ${wage.quarter} (${wage.source}). A part- or full-time admin role costs a couple of thousand euros a month.`,
  },
  grant: {
    id: "grant",
    nav: "Grants",
    question: "Can a grant pay for AI automation?",
    answer:
      "Possibly, for larger setups. EIS can cover up to half the cost of a software project for Estonian companies, with a grant of €2,000 to €5,000, so the project needs to cost at least €4,000.",
  },
  tips: {
    id: "tips",
    nav: "Keeping costs down",
    question: "How can you keep AI automation costs down?",
    answer:
      "Start small: automate one job, the one with the most repeated hours, and use tools you already pay for before adding new ones.",
  },
};

/** The cost-components table. */
export const costs: { cost: string; what: string; price: string; payee: string }[] = [
  {
    cost: "One-off setup",
    what: "Choosing the job, connecting your tools, writing the instructions, testing, and training your team.",
    price: `DIY: your hours. Professional setups are quoted per project and vary with scope. Example: Seestemic, ${
      pilotOpen ? `${eur(pilot.price)} for founding clients, normally from ${eur(setup.from)}` : `from ${eur(setup.from)}`
    } (see the example below).`,
    payee: "You, in hours, or whoever sets it up",
  },
  {
    cost: "AI subscription and tools",
    what: "AI seats and, if needed, an automation platform that connects your apps.",
    price: "Per user a month for AI seats; a monthly plan with a task or credit allowance for automation platforms.",
    payee: "Usually you, directly to the provider",
  },
  {
    cost: "Monthly upkeep",
    what: "Fixing things when your apps change, adjusting instructions and adding new cases.",
    price: "Your hours, or a care plan. Usually optional.",
    payee: "You, in hours, or whoever runs the care plan",
  },
  {
    cost: "Owner time",
    what: "Deciding the rules, reviewing drafts, approving actions and training staff.",
    price: "There’s no published figure. Estimate it as your hours × the value of your hour.",
    payee: "Paid in your own hours",
  },
];

export const routes = [
  { key: "diy", label: "DIY (you + off-the-shelf tools)" },
  { key: "agency", label: "Custom-built agency project" },
  { key: "done", label: "Done-for-you setup (one job, set up for you)" },
] as const;

/** Generic and fair: qualitative cells only, no agency prices and no "saves X hours" claims. */
export const comparison: { topic: string; diy: string; agency: string; done: string }[] = [
  {
    topic: "Upfront cash",
    diy: "No setup fee; subscriptions only",
    agency: "A project quote, usually scoped across several processes or systems",
    done: "A fixed one-off price for one job",
  },
  {
    topic: "Monthly",
    diy: "Your AI and tool subscriptions",
    agency: "Subscriptions, plus often a support retainer",
    done: "Your AI subscription, plus optional care",
  },
  {
    topic: "Your time",
    diy: "Highest: you learn, build, test and fix",
    agency: "Medium: workshops, briefing, testing, sign-off",
    done: "Low: you explain the job, set the approval rules and review",
  },
  {
    topic: "Speed to first result",
    diy: "Depends on your skills and spare time",
    agency: "Follows the project plan",
    done: "One job first, then expand once it works",
  },
  {
    topic: "Control and risk",
    diy: "Everything is yours, including mistakes and data handling",
    agency: "Strong for complex needs; check who owns and maintains the build",
    done: "Narrow scope; approval rules built in; check who owns the setup if you stop paying",
  },
  {
    topic: "Best for",
    diy: "Owners who enjoy tinkering and have spare hours",
    agency: "Larger or unusual processes across several systems",
    done: "Owners who want one repetitive job handled without learning the tools",
  },
];

export const hiddenCosts: { title: string; text: string }[] = [
  {
    title: "Usage overages.",
    text: "Pay-per-task or credit top-ups on automation platforms, and usage top-ups on some AI plans.",
  },
  { title: "Seat minimums.", text: `Some business plans need at least ${gpt.minSeats} seats.` },
  {
    title: "Promotions that end.",
    text: `One listed Copilot price is a promotion that runs until ${copilot.promoEnds}.`,
  },
  { title: "VAT on top.", text: "Most list prices exclude VAT." },
  { title: "Exchange rates.", text: "Many tools bill in US dollars, so your euro cost moves." },
  {
    title: "Keeping it running.",
    text: "When an app changes, someone spends time fixing the setup.",
  },
];

export const tips: { title: string; text: string }[] = [
  { title: "Start with one job.", text: "Add a second once it works." },
  { title: "Pick the job with the most repeated hours.", text: "That’s where it covers the most time." },
  {
    title: "Use tools you already pay for.",
    text: "On Microsoft 365, for example, try Copilot before adding new tools.",
  },
  { title: "Set a spending cap on usage-based tools.", text: "Then overages can’t surprise you." },
  { title: "Ask who owns the setup if you stop paying.", text: "You should keep what was built." },
];

export interface Faq {
  question: string;
  answer: string;
  /** An internal link shown under the answer. Not part of the FAQPage JSON-LD. */
  link?: { href: string; label: string };
}

export const faqs: Faq[] = [
  {
    question: "How much does AI automation cost for a small business?",
    answer: `Expect a one-off setup fee (your own hours if you do it yourself), an AI subscription of often around ${subscription} a month per user, optional monthly upkeep, and some of your time to review and approve. A done-for-you setup for one job costs more upfront but less of your time. Prices checked ${pricesChecked.long}.`,
  },
  {
    question: "What do ChatGPT, Claude or Copilot cost for a business?",
    answer: `As of ${pricesChecked.long}: ChatGPT Business is ${usd(gpt.annual)} per user per month billed annually (${usd(gpt.monthly)} monthly), with a minimum of ${inWords(gpt.minSeats)} seats. Claude Pro is ${usd(claude.proMonthly)} a month (${usd(claude.proAnnual)} a month billed annually). Microsoft 365 Copilot Business is an add-on to an eligible Microsoft 365 plan, at ${eurCents(copilot.annual)} per user per month on an annual plan. Prices exclude VAT.`,
  },
  {
    question: "How much do Zapier and Make cost?",
    answer: `As of ${pricesChecked.long}, Zapier has a free plan with ${n(zapier.freeTasks)} tasks a month. Its Professional plan starts at ${usd(zapier.proAnnual)} a month billed annually for ${n(zapier.proTasks)} tasks (${usd(zapier.proMonthly)} monthly). Make’s free plan includes ${n(make.freeCredits)} credits a month, and its Core plan starts at ${usd(make.core)} a month billed annually for ${n(make.credits)} credits. Heavier use costs more on both.`,
  },
  {
    question: "What are the monthly costs after an AI helper is set up?",
    answer: `Mainly the AI subscription, often around ${subscription} a month per user, which you pay to the provider. You may also pay for an automation platform if your setup needs one. A care plan for fixes and changes is usually optional. Seestemic’s Care starts at ${eur(care.from)} a month and covers team time only.`,
  },
  {
    question: "Is it cheaper to set up AI automation myself?",
    answer:
      "In cash, yes: you pay only the subscriptions. In time, often not. You choose the job, connect the tools, write the instructions, test unusual cases and fix things when your apps change. If your hours are worth more spent running the business, a fixed-price setup for one job can cost less overall.",
  },
  {
    question: "Can an AI assistant replace an admin employee?",
    answer: `It’s better to think of it as covering hours, not replacing a person. An AI subscription of around ${subscription} a month can take on routine admin, such as drafting replies, sorting email or chasing invoices, while a person approves anything important. For comparison, the average gross monthly wage in Estonia was ${eur(wage.monthly)} in ${wage.quarter} (${wage.source}).`,
  },
  {
    question: "How long does AI automation take to pay for itself?",
    answer: `It depends on the hours it covers and what an hour costs you. Divide the setup cost by the monthly value of the hours covered, minus running costs. In one illustrative example, covering ${savings.scenarios[0].perWeek} hours of admin a week at about ${eur(hourly)} an hour pays back a ${eur(firstPayback.price)} setup in about ${inWords(firstPayback.months ?? 0)} months.`,
  },
  {
    question: "Can an EIS grant pay for AI automation in Estonia?",
    answer: `Possibly, for larger setups. EIS’s software grant covers up to half of a software project’s cost, from €2,000 to €5,000, so the project needs to cost at least €4,000. You need at least €50,000 average yearly revenue over the last two years, and you must apply before the work starts. Monthly fees aren’t covered. Checked ${grantChecked.label}.`,
    link: { href: eisGrantsPage.href, label: "Read our EIS grants guide" },
  },
  {
    question: "What does Seestemic charge?",
    answer: `A free ${review.minutes}-minute AI review, then ${
      pilotOpen
        ? `${eur(pilot.price)} one-time to set up a first helper for the first ${inWords(founding.places)} founding clients (normally from ${eur(setup.from)})`
        : `from ${eur(setup.from)} one-time to set up a first helper`
    }, and optional Care from ${eur(care.from)} a month for Seestemic’s team time. You pay the AI subscription, about ${subscription} a month, directly. Seestemic signs a data processing agreement, and you keep what’s built if you stop Care.`,
    link: { href: "/ai-for-small-business-estonia#what", label: "See what an AI helper does" },
  },
];
