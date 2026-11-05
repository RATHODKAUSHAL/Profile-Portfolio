import type { Metadata } from "next";
import HomeCTA from "@/components/sections/HomeCTA";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import HomeHero from "@/components/sections/HomeHero";
import HomeLatestPosts from "@/components/sections/HomeLatestPosts";
import HomeExpertise, { homeFaqs } from "@/components/sections/HomeExpertise";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { personId, websiteId } from "@/lib/seo";

const pageTitle = "Kaushal Rathod | Software Developer, Web & Mobile Apps";
const pageDescription =
  "Kaushal Rathod is a software developer in Ahmedabad, India, building full-stack web apps and React Native mobile apps. See his portfolio and get in touch.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl("/")}#profile`,
        name: "Kaushal Rathod: Software Developer",
        description: pageDescription,
        url: absoluteUrl("/"),
        dateModified: "2026-11-05",
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
      <HomeLatestPosts />
      <HomeCTA />
    </main>
  );
}
