import type { Metadata } from "next";
import HomeCTA from "@/components/sections/HomeCTA";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import HomeHero from "@/components/sections/HomeHero";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio",
  description:
    "Portfolio of Kaushal Rathod, a full stack developer building modern web apps with Next.js, React, Node.js, and TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kaushal Rathod | Full Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience in frontend and backend engineering.",
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/Images/profileimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Kaushal Rathod portfolio home page",
      },
    ],
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.author.name,
      description: siteConfig.description,
      url: siteConfig.siteUrl,
      sameAs: siteConfig.author.sameAs,
    },
    url: absoluteUrl("/"),
  };

  return (
    <div className="soft-grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeHero />
      <HomeFeaturedProjects />
      <HomeCTA />
    </div>
  );
}
