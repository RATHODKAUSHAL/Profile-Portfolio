export const siteConfig = {
  name: "Kaushal Rathod Portfolio",
  title: "Kaushal Rathod | Full Stack Developer",
  description:
    "Kaushal Rathod is a full stack developer specializing in Next.js, React, Node.js, TypeScript, and scalable web applications.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://example.com",
  locale: "en_US",
  author: {
    name: "Kaushal Rathod",
    role: "Full Stack Developer",
    email: "rathodkaushal2001@gmail.com",
    image: "/Images/profileimage.jpeg",
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
    "Portfolio",
    "Web Development Services",
    "Ahmedabad Developer",
    "India Full Stack Developer",
  ],
}

export const absoluteUrl = (path = "") => `${siteConfig.siteUrl}${path}`
