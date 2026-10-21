// Structured data (JSON-LD) for search and AI answer engines. Other pages can point at the organisation by its @id.
import { faqs } from "./helpers";
import { email, linkedInUrl } from "./site";

export const siteUrl = "https://www.seestemic.com/";
export const orgId = `${siteUrl}#org`;
export const websiteId = `${siteUrl}#site`;

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
  makesOffer: [
    { "@type": "Offer", name: "Free 30-minute AI review", price: "0", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Founding-client pilot: one AI helper for one task", price: "500", priceCurrency: "EUR" },
    {
      "@type": "Offer",
      name: "Care",
      priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "300", priceCurrency: "EUR", unitText: "MONTH" },
    },
  ],
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
