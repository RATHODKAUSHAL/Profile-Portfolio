import type { Metadata } from "next";
import HomeCTA from "@/components/sections/HomeCTA";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import HomeHero from "@/components/sections/HomeHero";
import HomeExpertise, { homeFaqs } from "@/components/sections/HomeExpertise";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { personId, websiteId } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Kaushal Rathod | Full Stack & Mobile App Developer",
  },
  description:
    "Portfolio of Kaushal Rathod, an Ahmedabad-based full stack and mobile app developer building with Next.js, React, Node.js, TypeScript, React Native, and Expo.",
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
        url: "/Images/profile.png",
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
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl("/")}#profile`,
        name: "Kaushal Rathod — Full Stack & Mobile App Developer",
        description: siteConfig.description,
        url: absoluteUrl("/"),
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/")}#faq`,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="soft-grid-bg">
      <JsonLd data={homeSchema} />
      <HomeHero />
      <HomeFeaturedProjects />
      <HomeExpertise />
      <HomeCTA />
    </main>
  );
}
