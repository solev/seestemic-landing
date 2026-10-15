// Everything in this file is illustrative example content for the landing page.
// None of it describes a real customer, result, or measurement.

export type IconName =
  | "check"
  | "arrowRight"
  | "arrowUp"
  | "arrowDown"
  | "external"
  | "plus"
  | "close"
  | "search"
  | "mail"
  | "calendar"
  | "sheet"
  | "photo"
  | "doc"
  | "bank"
  | "book"
  | "chat"
  | "shop"
  | "star"
  | "folder"
  | "phone"
  | "lock"
  | "replay"
  | "chevronLeft"
  | "receipt"
  | "clock"
  | "user"
  | "users"
  | "bookmark";

export type HelperId =
  | "quotes"
  | "inbox"
  | "frontDesk"
  | "invoices"
  | "bookkeeping"
  | "questions"
  | "report"
  | "handbook";

export interface Helper {
  id: HelperId;
  name: string;
  color: string;
}

export const helpers: Record<HelperId, Helper> = {
  quotes: { id: "quotes", name: "Quotes", color: "#F07C3A" },
  inbox: { id: "inbox", name: "Inbox", color: "#2FB39A" },
  frontDesk: { id: "frontDesk", name: "Front desk", color: "#7A5CFA" },
  invoices: { id: "invoices", name: "Invoices", color: "#E9558B" },
  bookkeeping: { id: "bookkeeping", name: "Bookkeeping", color: "#6BAF4B" },
  questions: { id: "questions", name: "Customer questions", color: "#2E9EFF" },
  report: { id: "report", name: "Weekly report", color: "#E8B22F" },
  handbook: { id: "handbook", name: "Staff handbook", color: "#4A5BD4" },
};

/* ------------------------------------------------------------------ */
/* Hero app window                                                     */
/* ------------------------------------------------------------------ */

export interface DemoStep {
  text: string;
  tool: IconName;
  toolLabel: string;
}

export interface DocRow {
  label: string;
  note?: string;
  value?: string;
  /** Step after which this row appears while the demo plays. */
  step?: number;
}

export interface DemoThread {
  helper: HelperId;
  preview: string;
  time: string;
  unread?: number;
  subtitle: string;
  intro: { from: string; org?: string; via: string; viaIcon: IconName; time: string; text: string; attachment?: string };
  steps: DemoStep[];
  doc: {
    title: string;
    id?: string;
    status: string;
    meta?: DocRow[];
    rows: DocRow[];
    total?: [string, string];
    actions?: [string, string?];
    sent?: string;
  };
  ask?: string;
  owner?: string;
  system?: string;
  reply: string;
}

export const demoThreads: DemoThread[] = [
  {
    helper: "quotes",
    preview: "Quote for the dental clinic is ready",
    time: "9:41",
    subtitle: "Turns requests into ready-to-send quotes",
    intro: {
      from: "Dental clinic",
      org: "New customer",
      via: "Email",
      viaIcon: "mail",
      time: "9:38",
      text: "Hi! Could you quote new flooring for our waiting room and two treatment rooms? Photos attached. We’d love it done before May.",
      attachment: "4 photos",
    },
    steps: [
      { text: "Read the email and the 4 photos", tool: "mail", toolLabel: "Email" },
      { text: "Matched 3 items on your price list", tool: "sheet", toolLabel: "Price list" },
      { text: "Found a free site visit: Thu 10:00", tool: "calendar", toolLabel: "Calendar" },
      { text: "Drafted the quote in your template", tool: "doc", toolLabel: "Quotes" },
    ],
    doc: {
      title: "Quote",
      id: "Q-1042",
      status: "Sent",
      meta: [
        { label: "For", value: "Dental clinic", step: 1 },
        { label: "Site visit", value: "Thu 10:00", step: 3 },
      ],
      rows: [
        { label: "Vinyl plank flooring", note: "3 rooms", value: "€3,420", step: 2 },
        { label: "Underlay and trims", value: "€540", step: 2 },
        { label: "Removal and fitting", value: "€900", step: 2 },
      ],
      total: ["Total", "€4,860"],
      actions: ["Approve & send", "Edit"],
      sent: "Sent to the clinic",
    },
    ask: "Your quote for the dental clinic is ready to check.",
    owner: "Looks good. Send it, and always offer Thursday visits.",
    system: "Sent to the clinic · New rule saved",
    reply: "Done. I’ll follow up on Monday if they haven’t replied.",
  },
  {
    helper: "inbox",
    preview: "48 emails sorted. 3 need you.",
    time: "9:12",
    unread: 3,
    subtitle: "Sorts email and answers the routine ones",
    intro: {
      from: "Your inbox",
      via: "Email",
      viaIcon: "mail",
      time: "6:00",
      text: "48 new emails arrived overnight.",
    },
    steps: [
      { text: "Filed 36 newsletters, receipts and updates", tool: "folder", toolLabel: "Folders" },
      { text: "Answered 9 routine questions with your saved replies", tool: "mail", toolLabel: "Email" },
      { text: "Flagged 3 that need your decision", tool: "bookmark", toolLabel: "Flagged" },
    ],
    doc: {
      title: "Needs you",
      status: "3 emails",
      rows: [
        { label: "Price increase", note: "Timber supplier" },
        { label: "Refund over €500", note: "Online order" },
        { label: "Partnership idea", note: "Design studio" },
      ],
      actions: ["Open all"],
    },
    reply: "Everything else is handled. These 3 need your call.",
  },
  {
    helper: "frontDesk",
    preview: "Booked 6 appointments overnight",
    time: "7:58",
    subtitle: "Answers customers and books appointments",
    intro: {
      from: "Website chat and messages",
      via: "Chat",
      viaIcon: "chat",
      time: "18:00",
      text: "14 conversations came in after closing time.",
    },
    steps: [
      { text: "Answered 14 questions about hours and prices", tool: "chat", toolLabel: "Chat" },
      { text: "Booked 6 appointments", tool: "calendar", toolLabel: "Calendar" },
      { text: "Sent reminders for tomorrow", tool: "phone", toolLabel: "Text" },
    ],
    doc: {
      title: "New bookings",
      status: "6 overnight",
      rows: [
        { label: "First visit", note: "New customer", value: "Tue 09:30" },
        { label: "Follow-up", note: "Returning customer", value: "Tue 11:00" },
        { label: "Consultation", note: "Booked through chat", value: "Wed 14:15" },
        { label: "3 more", note: "Thu and Fri" },
      ],
    },
    reply: "One caller asked about group discounts. I said you’d call back today.",
  },
  {
    helper: "invoices",
    preview: "2 invoices are over 30 days late",
    time: "Tue",
    subtitle: "Matches payments and chases late invoices",
    intro: {
      from: "Bank feed",
      via: "Bank",
      viaIcon: "bank",
      time: "Mon",
      text: "23 payments came in this week.",
    },
    steps: [
      { text: "Matched 23 payments to invoices", tool: "bank", toolLabel: "Bank" },
      { text: "Sent friendly reminders for 5 due invoices", tool: "mail", toolLabel: "Email" },
      { text: "Found 2 more than 30 days late", tool: "book", toolLabel: "Accounts" },
    ],
    doc: {
      title: "Overdue",
      status: "2 invoices",
      rows: [
        { label: "Café", note: "INV-2291 · 34 days", value: "€1,240" },
        { label: "Hardware store", note: "INV-2304 · 31 days", value: "€860" },
      ],
      total: ["Outstanding", "€2,100"],
      actions: ["Send final reminder", "Call instead"],
    },
    reply: "Should I send a final reminder, or would you rather call?",
  },
  {
    helper: "bookkeeping",
    preview: "March receipts are filed",
    time: "Mon",
    subtitle: "Files receipts and keeps the books tidy",
    intro: {
      from: "Receipts",
      via: "Email",
      viaIcon: "receipt",
      time: "Mon",
      text: "61 receipts arrived by email and photo in March.",
    },
    steps: [
      { text: "Read all 61 receipts", tool: "photo", toolLabel: "Photos" },
      { text: "Filed 58 in your accounts", tool: "book", toolLabel: "Accounts" },
      { text: "Set aside 3 that need a quick check", tool: "bookmark", toolLabel: "Review" },
    ],
    doc: {
      title: "Needs a check",
      status: "3 receipts",
      rows: [
        { label: "Fuel", note: "Business or personal?", value: "€86.40" },
        { label: "Office chairs", note: "Which cost centre?", value: "€1,180.00" },
        { label: "Client lunch", note: "Who attended?", value: "€64.90" },
      ],
    },
    reply: "March is ready for your accountant once these 3 are sorted.",
  },
  {
    helper: "report",
    preview: "Your week on one page",
    time: "Fri",
    subtitle: "Turns your numbers into a short summary",
    intro: {
      from: "Every Friday",
      via: "Schedule",
      viaIcon: "clock",
      time: "17:00",
      text: "Time for your weekly summary.",
    },
    steps: [
      { text: "Pulled this week’s sales", tool: "shop", toolLabel: "Shop" },
      { text: "Pulled bookings and new reviews", tool: "star", toolLabel: "Reviews" },
      { text: "Wrote your one-page summary", tool: "doc", toolLabel: "Report" },
    ],
    doc: {
      title: "Week 12",
      status: "Summary",
      rows: [
        { label: "Sales", note: "Up 6% on last week", value: "€18,420" },
        { label: "New customers", value: "23" },
        { label: "New reviews", note: "Average 4.8", value: "11" },
        { label: "Busiest day", value: "Sat" },
      ],
    },
    reply: "Sent to you and your manager. Two reviews mention slow replies. Want me to draft answers?",
  },
];

/* ------------------------------------------------------------------ */
/* "Give each helper one job" phone picker                             */
/* ------------------------------------------------------------------ */

export type ConvoLine =
  | { from: "helper" | "me"; text: string }
  | { from: "card"; icon: IconName; title: string; lines: string[] };

export interface Job {
  helper: HelperId;
  lead: string;
  description: string;
  uses: { icon: IconName; label: string }[];
  /** Whose phone this is. */
  phoneOwner: "owner" | "customer" | "staff";
  phoneTitle: string;
  phoneSubtitle: string;
  convo: ConvoLine[];
}

export const jobs: Job[] = [
  {
    helper: "quotes",
    lead: "Turns requests into ready-to-send quotes",
    description:
      "Reads the email and photos, checks your price list and drafts the quote in your template. Nothing goes out until you say so.",
    uses: [
      { icon: "mail", label: "Email" },
      { icon: "sheet", label: "Price list" },
      { icon: "calendar", label: "Calendar" },
    ],
    phoneOwner: "owner",
    phoneTitle: "Quotes",
    phoneSubtitle: "Your AI helper",
    convo: [
      { from: "card", icon: "mail", title: "New request from a dental clinic", lines: ["Flooring for 3 rooms · 4 photos"] },
      { from: "helper", text: "Quote Q-1042 is ready: €4,860, with a site visit on Thursday at 10:00. Send it?" },
      { from: "me", text: "Yes, send it." },
      { from: "helper", text: "Sent. I’ll follow up on Monday if the clinic hasn’t replied." },
    ],
  },
  {
    helper: "inbox",
    lead: "Keeps your inbox under control",
    description:
      "Sorts every email, answers the routine ones with your saved replies and shows you only what needs you.",
    uses: [
      { icon: "mail", label: "Email" },
      { icon: "folder", label: "Folders" },
      { icon: "doc", label: "Saved replies" },
    ],
    phoneOwner: "owner",
    phoneTitle: "Inbox",
    phoneSubtitle: "Your AI helper",
    convo: [
      { from: "helper", text: "Good morning. 48 new emails: I answered 9 and filed 36." },
      { from: "helper", text: "3 need you: a price increase, a refund over €500 and a partnership idea." },
      { from: "me", text: "Show me the refund." },
      { from: "card", icon: "receipt", title: "Refund request · Order 5127", lines: ["Arrived damaged", "€640 · photos attached"] },
    ],
  },
  {
    helper: "frontDesk",
    lead: "Answers customers and books appointments, day and night",
    description: "Replies to messages and website chats, books straight into your calendar and sends reminders.",
    uses: [
      { icon: "chat", label: "Website chat" },
      { icon: "calendar", label: "Calendar" },
      { icon: "phone", label: "Text messages" },
    ],
    phoneOwner: "owner",
    phoneTitle: "Front desk",
    phoneSubtitle: "Your AI helper",
    convo: [
      { from: "helper", text: "6 new bookings overnight. Tomorrow is full until 14:00." },
      { from: "me", text: "Great. Can you move my 16:00 today to Friday?" },
      { from: "helper", text: "Done. I’ve let the customer know and updated your calendar." },
      { from: "card", icon: "calendar", title: "Fri 16:00 · Consultation", lines: ["Moved from today"] },
    ],
  },
  {
    helper: "invoices",
    lead: "Helps you get paid on time",
    description:
      "Matches payments to invoices, sends polite reminders and tells you when it’s time to pick up the phone.",
    uses: [
      { icon: "bank", label: "Bank" },
      { icon: "book", label: "Accounts" },
      { icon: "mail", label: "Email" },
    ],
    phoneOwner: "owner",
    phoneTitle: "Invoices",
    phoneSubtitle: "Your AI helper",
    convo: [
      { from: "helper", text: "Two invoices are more than 30 days late." },
      { from: "card", icon: "receipt", title: "Overdue · €2,100", lines: ["Café · €1,240", "Hardware store · €860"] },
      { from: "me", text: "Send the café a final reminder. I’ll call the hardware store." },
      { from: "helper", text: "Reminder sent. I’ve added “Call the hardware store” to today’s list." },
    ],
  },
  {
    helper: "bookkeeping",
    lead: "Keeps the books tidy as you go",
    description:
      "Collects receipts from email and photos, files them in your accounts and asks when something is unclear.",
    uses: [
      { icon: "photo", label: "Photos" },
      { icon: "mail", label: "Email" },
      { icon: "book", label: "Accounts" },
    ],
    phoneOwner: "owner",
    phoneTitle: "Bookkeeping",
    phoneSubtitle: "Your AI helper",
    convo: [
      { from: "card", icon: "receipt", title: "Fuel · €86.40", lines: ["Mar 14 · card ending 4417"] },
      { from: "helper", text: "Is this fuel receipt for the business?" },
      { from: "me", text: "Yes, business." },
      { from: "helper", text: "Got it. I’ll file fuel on that card as business from now on." },
    ],
  },
  {
    helper: "questions",
    lead: "Answers the questions you get every day",
    description:
      "Uses your own prices, policies and FAQs, and hands the chat to a person whenever it isn’t sure.",
    uses: [
      { icon: "chat", label: "Website chat" },
      { icon: "doc", label: "Your FAQs" },
      { icon: "calendar", label: "Calendar" },
    ],
    phoneOwner: "customer",
    phoneTitle: "Customer questions",
    phoneSubtitle: "Replies on your website",
    convo: [
      { from: "me", text: "Hi, do you deliver on Saturdays?" },
      { from: "helper", text: "Yes. Saturday deliveries run from 9:00 to 13:00. Want me to book one?" },
      { from: "me", text: "Yes please, this Saturday." },
      { from: "helper", text: "Booked for Saturday at 10:00. You’ll get a text the day before." },
    ],
  },
  {
    helper: "report",
    lead: "Puts your whole week on one page",
    description: "Pulls the numbers from your tools every Friday and writes a short, plain-English summary.",
    uses: [
      { icon: "shop", label: "Sales" },
      { icon: "calendar", label: "Bookings" },
      { icon: "star", label: "Reviews" },
    ],
    phoneOwner: "owner",
    phoneTitle: "Weekly report",
    phoneSubtitle: "Your AI helper",
    convo: [
      { from: "card", icon: "doc", title: "Week 12 summary", lines: ["Sales €18,420 · up 6%", "23 new customers · 11 reviews"] },
      { from: "helper", text: "Saturday was your busiest day. Two reviews mention slow replies. Want me to draft answers?" },
      { from: "me", text: "Yes, draft them for me to check." },
    ],
  },
  {
    helper: "handbook",
    lead: "Gives your team answers without interrupting you",
    description:
      "Learns your procedures and documents, so new and busy staff can find the right answer on their own.",
    uses: [
      { icon: "folder", label: "Shared files" },
      { icon: "doc", label: "Procedures" },
      { icon: "chat", label: "Team chat" },
    ],
    phoneOwner: "staff",
    phoneTitle: "Staff handbook",
    phoneSubtitle: "Ask about any procedure",
    convo: [
      { from: "me", text: "How do I process a return without a receipt?" },
      { from: "helper", text: "Store credit only, up to €100. Above that, a manager needs to approve it." },
      { from: "card", icon: "doc", title: "Returns policy", lines: ["Section 4 · updated in January"] },
      { from: "me", text: "Perfect, thanks!" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Questions                                                           */
/* ------------------------------------------------------------------ */

export interface Faq {
  id?: string;
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

export const faqs: Faq[] = [
  {
    question: "Do I need to be technical?",
    answer:
      "No. We handle the setup and explain everything in plain language. If you can write an email, you can work with an AI helper.",
  },
  {
    question: "Will it work with the software we already use?",
    answer:
      "Usually, yes. We build around what you have, such as Microsoft 365, Google Workspace, your CRM, help desk or accounting software, instead of asking you to switch.",
  },
  {
    question: "Is our information safe?",
    answer:
      "You decide what each helper can see and which actions need your approval, and its work is logged so you can check it. We choose the AI provider that fits your needs, your data can stay in the EU, and we sign a data processing agreement with you.",
  },
  {
    question: "Which languages do the helpers speak?",
    answer:
      "Your customers’ languages. A helper can talk to each customer in their own language. Our calls and training are in English.",
  },
  {
    question: "What happens if we stop Care?",
    answer:
      "You keep everything we built. Care is simply our team’s time when you need it: up to 4 hours a month, plus a monthly check-in. AI costs, such as an AI subscription, are always paid separately.",
  },
  {
    question: "Will AI replace my staff?",
    answer:
      "That isn’t the goal. Helpers take the repetitive parts of the job off people’s plates, so your team spends more time with customers and on decisions that need a person.",
  },
  {
    question: "How soon will we see results?",
    answer:
      "We start with one job, so your first helper can be useful early. Then we measure it with you and only expand what clearly works.",
  },
  {
    question: "Do you train our team?",
    answer:
      "Yes. Hands-on sessions and simple guides, so everyone knows when to use their helpers, how to check the work and when to step in.",
  },
  {
    id: "funding",
    question: "Can we get funding for this?",
    answer:
      "Possibly, for larger setups. EIS (the Estonian Business and Innovation Agency, formerly Enterprise Estonia) can cover up to half the cost of a software project for Estonian companies, with a grant of €2,000 to €5,000, so the project needs to cost at least €4,000. Your revenue should average at least €50,000 a year over the last two years, and you apply before the work starts. Care isn’t covered, and other conditions apply.",
    link: { href: "https://eis.ee/en/services/rte-software/", label: "See the EIS grant" },
  },
];
