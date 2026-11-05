const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

const siteUrl = deploymentHost
  ? deploymentHost.startsWith("http")
    ? deploymentHost.replace(/\/$/, "")
    : `https://${deploymentHost.replace(/\/$/, "")}`
  : "https://kaushalrathod.com";

export const siteConfig = {
  name: "Kaushal Rathod",
  title: "Kaushal Rathod | Software Developer, Web & Mobile Apps",
  description:
    "Kaushal Rathod is a software developer in Ahmedabad, India, building full-stack web apps and React Native mobile apps. See his projects and get in touch.",
  siteUrl,
  locale: "en_US",
  author: {
    name: "Kaushal Rathod",
    givenName: "Kaushal",
    familyName: "Rathod",
    alternateName: ["Rathod Kaushal", "Kaushal"],
    role: "Software Developer",
    // The two entity sentences AI tools should quote (KEYWORD_STRATEGY.md §4.7).
    bio: "Kaushal Rathod is a software developer based in Ahmedabad, India, who builds full-stack web applications and React Native mobile apps with Next.js, React and Node.js.",
    longBio:
      "Kaushal Rathod is a software developer based in Ahmedabad, Gujarat, India. Since 2023 he has built production web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo, Laravel and PostgreSQL. He works as a Full Stack Developer at Trukky, building logistics products such as FleetConnekt, and works remotely with teams worldwide.",
    employer: {
      name: "Trukky",
      url: "https://www.trukky.com",
      since: "2025-02",
    },
    email: "rathodkaushal2001@gmail.com",
    image: "/Images/kaushal-rathod-outdoor-portrait.webp",
    location: {
      city: "Ahmedabad",
      region: "Gujarat",
      country: "India",
      countryCode: "IN",
    },
    sameAs: [
      "https://github.com/RATHODKAUSHAL",
      "https://www.linkedin.com/in/kaushal-rathod-dev/",
    ],
  },
  keywords: [
    "Kaushal Rathod",
    "Kaushal Rathod portfolio",
    "Software Developer",
    "Software Developer Ahmedabad",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Expo Developer",
  ],
} as const;

export const absoluteUrl = (path = "") =>
  path.startsWith("http")
    ? path
    : `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
