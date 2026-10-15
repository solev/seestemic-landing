export const introCallUrl = "https://cal.com/martinsolev/intro-call-with-martin";
export const email = "hello@seestemic.com";
export const linkedInUrl = "https://www.linkedin.com/in/martin-solev-a09b0061/";

// Founding-client pilot. Raise `taken` as clients sign; the offer disappears once every place is taken.
export const founding = { places: 5, taken: 0 } as const;

export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Examples", href: "#examples" },
  { label: "About", href: "#about" },
  { label: "Questions", href: "#questions" },
] as const;
