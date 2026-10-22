// What Seestemic sells and for how much. Every price on the site, and the figures that go with it, comes from here:
// both pages, the booking panel and the JSON-LD. Change a figure here, never in page copy.
// Approved by Martin in October 2026; see "Offer and prices" in PRODUCT.md.

/** Founding-client pilot places. Raise `taken` as clients sign; the pilot disappears once every place is taken. */
export const founding = { places: 5, taken: 0 } as const;
export const pilotOpen = founding.taken < founding.places;
export const placesLeft = founding.places - founding.taken;

/** The free AI review, booked through Cal.com. */
export const review = { price: 0, minutes: 30 } as const;

/** One small helper for one task, at a one-time founding price; the client writes a short case study afterwards. */
export const pilot = { price: 500, caseStudyAfter: "6 to 8 weeks" } as const;

/** One-time setup of the first helper. While the pilot is open, it is the pilot's "normally from" price. */
export const setup = { from: 1500 } as const;

/** Optional monthly support: hours of our team's time plus a monthly check-in. It starts after the pilot or the setup. */
export const care = { from: 300, hours: 4, startsAfter: pilotOpen ? "the pilot" : "setup" } as const;

/** Company-wide AI adoption, shown on the homepage only. */
export const partner = { from: 1200 } as const;

/**
 * The AI subscription behind a helper: about $30 a month, excl. VAT, which the client pays the provider directly.
 * It isn't part of setup or Care. Never name the product or its vendor on the site; call it "an AI subscription".
 */
export const aiSubscription = { usdPerMonth: 30 } as const;

/** Writes a whole-euro amount the way the site shows prices, such as €1,500. */
export const eur = (amount: number) => `€${amount.toLocaleString("en-GB")}`;
/** Writes a US-dollar amount, with cents only when there are some, such as $30 or $19.99. */
export const usd = (amount: number) =>
  `$${amount.toLocaleString("en-GB", { minimumFractionDigits: Number.isInteger(amount) ? 0 : 2, maximumFractionDigits: 2 })}`;
