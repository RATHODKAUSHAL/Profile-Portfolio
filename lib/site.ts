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
  title: "Kaushal Rathod | Full Stack & Mobile App Developer",
  description:
    "Kaushal Rathod is a full stack and mobile app developer in Ahmedabad building production web and mobile products with Next.js, React, Node.js, TypeScript, React Native, and Expo.",
  siteUrl,
  locale: "en_US",
  author: {
    name: "Kaushal Rathod",
    role: "Full Stack & Mobile App Developer",
    email: "rathodkaushal2001@gmail.com",
    image: "/Images/profileimage.jpeg",
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
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Expo Developer",
    "Full Stack Developer Ahmedabad",
  ],
} as const;

export const absoluteUrl = (path = "") =>
  path.startsWith("http")
    ? path
    : `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
