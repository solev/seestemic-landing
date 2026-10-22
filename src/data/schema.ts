// Structured data (JSON-LD) for search and AI answer engines. Other pages can point at the organisation by its @id.
import { faqs } from "./helpers";
import { email, founding, linkedInUrl } from "./site";

export const siteUrl = "https://www.seestemic.com/";
export const orgId = `${siteUrl}#org`;
export const websiteId = `${siteUrl}#site`;

const pilotOpen = founding.taken < founding.places;

/**
 * The prices shown on the homepage steps and the Estonia page's price table; the descriptions use the table's wording.
 * While founding places remain, the first helper is the €500 pilot; after that, the setup from €1,500.
 */
export const offers = [
  {
    "@type": "Offer",
    name: "Free 30-minute AI review",
    description: "A 30-minute call about the jobs that take up your week, and an honest view of where AI can help.",
    price: "0",
    priceCurrency: "EUR",
  },
  pilotOpen
    ? {
        "@type": "Offer",
        name: "Founding-client pilot: one AI helper for one task",
        description: `One small helper, set up for one task, for our first ${founding.places} clients. One-time, normally from €1,500. In return, you write a short case study after 6 to 8 weeks.`,
        price: "500",
        priceCurrency: "EUR",
      }
    : {
        "@type": "Offer",
        name: "First helper setup",
        description: "Your first helper, set up for one job inside your tools, with your approval rules built in. One-time.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: "1500", priceCurrency: "EUR" },
      },
  {
    "@type": "Offer",
    name: "Care",
    description: `Optional: up to 4 hours of our team’s time each month, plus a monthly check-in. It starts after ${pilotOpen ? "the pilot" : "setup"}.`,
    priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "300", priceCurrency: "EUR", unitText: "MONTH" },
  },
];

export const organization = {
  "@type": "ProfessionalService",
  "@id": orgId,
  name: "Seestemic",
  url: siteUrl,
  logo: `${siteUrl}apple-touch-icon.png`,
  image: `${siteUrl}og.png`,
  email,
  description:
    "Seestemic sets up AI helpers that take repetitive jobs off your plate, inside the tools you already use. You stay in charge: nothing important happens without your OK.",
  address: { "@type": "PostalAddress", addressLocality: "Tallinn", addressCountry: "EE" },
  areaServed: ["EE", "EU"],
  knowsLanguage: "en",
  founder: { "@type": "Person", name: "Martin Solev", sameAs: [linkedInUrl] },
  sameAs: [linkedInUrl],
  makesOffer: offers,
};

export const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: "Seestemic",
  publisher: { "@id": orgId },
};

// Uses the same FAQ data the page renders, so the answers always match the visible text.
export const faqPage = {
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export const homeSchema = { "@context": "https://schema.org", "@graph": [organization, website, faqPage] };

/** Serialises JSON-LD for a <script type="application/ld+json"> block, escaping "<" so text can't close the tag. */
export const toJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
