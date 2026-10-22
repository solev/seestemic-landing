export const introCallUrl = "https://cal.com/martinsolev/intro-call-with-martin";
export const email = "hello@seestemic.com";
export const linkedInUrl = "https://www.linkedin.com/in/martin-solev-a09b0061/";

// Self-hosted OpenPanel on Coolify, project "Seestemic". The client ID is public; never put the client secret here.
export const analytics = {
  apiUrl: "https://openpanel-api.coolify.seestemic.com",
  scriptUrl: "https://openpanel.coolify.seestemic.com/op1.js",
  clientId: "6778a55c-1541-4b50-92d6-514ea63b3cfd",
} as const;

export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Examples", href: "#examples" },
  { label: "About", href: "#about" },
  { label: "Questions", href: "#questions" },
] as const;

// Landing pages beyond the homepage. Linked from the footer on every page.
export const estoniaPage = { label: "AI for small business in Estonia", href: "/ai-for-small-business-estonia" } as const;
