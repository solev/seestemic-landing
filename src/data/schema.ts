// Structured data (JSON-LD) for search and AI answer engines. Other pages can point at the organisation by its @id.
import { faqs } from "./helpers";
import { care, eur, founding, partner, pilot, pilotOpen, review, setup } from "./offer";
import { email, linkedInUrl } from "./site";

export const siteUrl = "https://www.seestemic.com/";
export const orgId = `${siteUrl}#org`;
export const websiteId = `${siteUrl}#site`;

/**
 * The prices shown on the homepage steps and the Estonia page's price table; the descriptions use the table's wording.
 * While founding places remain, the first AI teammate is the pilot; after that, the setup. The figures come from offer.ts.
 */
export const offers = [
  {
    "@type": "Offer",
    name: `Free ${review.minutes}-minute AI review`,
    description: `A ${review.minutes}-minute call about the jobs that take up your week, and an honest view of where AI can help.`,
    price: String(review.price),
    priceCurrency: "EUR",
  },
  pilotOpen
    ? {
        "@type": "Offer",
        name: "Founding-client pilot: one AI teammate for one task",
        description: `One AI teammate for one task, training included, for our first ${founding.places} clients. One-time, normally from ${eur(setup.from)}. In return, you write a short case study after ${pilot.caseStudyAfter}.`,
        price: String(pilot.price),
        priceCurrency: "EUR",
      }
    : {
        "@type": "Offer",
        name: "First AI teammate setup",
        description:
          "Your first AI teammate, set up for one job and connected to your tools, with your approval rules built in and training included. One-time.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: String(setup.from), priceCurrency: "EUR" },
      },
  {
    "@type": "Offer",
    name: "Care",
    description: `Optional: up to ${care.hours} hours of our team’s time each month, plus a monthly check-in. It starts after ${care.startsAfter}.`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: String(care.from),
      priceCurrency: "EUR",
      unitText: "MONTH",
    },
  },
];

/** Only the homepage shows Partner, so only the organisation offers it. The description follows its Partner card. */
const partnerOffer = {
  "@type": "Offer",
  name: "Partner",
  description:
    "We help every team adopt AI in the ways that fit, not only through AI teammates: a plan for where AI can help, team by team; help picking AI tools, plus simple rules for using them safely; and hands-on training for every team.",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    minPrice: String(partner.from),
    priceCurrency: "EUR",
    unitText: "MONTH",
  },
};

export const organization = {
  "@type": "ProfessionalService",
  "@id": orgId,
  name: "Seestemic",
  url: siteUrl,
  logo: `${siteUrl}apple-touch-icon.png`,
  image: `${siteUrl}og/home.jpg`,
  email,
  description:
    "Seestemic sets up AI teammates that take repetitive jobs off your plate, connected to the tools you already use, and can look after them for you. You stay in charge: nothing important happens without your OK.",
  address: { "@type": "PostalAddress", addressLocality: "Tallinn", addressCountry: "EE" },
  areaServed: ["EE", "EU"],
  knowsLanguage: "en",
  founder: { "@type": "Person", name: "Martin Solev", sameAs: [linkedInUrl] },
  sameAs: [linkedInUrl],
  makesOffer: [...offers, partnerOffer],
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
