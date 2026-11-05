import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kaushal Rathod, a full stack developer focused on performant web applications, accessible interfaces, and scalable APIs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    title: "About Kaushal Rathod",
    description:
      "Learn about Kaushal Rathod's full-stack and mobile app development experience, technical focus, and product approach.",
    url: absoluteUrl("/about"),
    images: [{
      url: "/Images/profileimage.jpeg",
      width: 1600,
      height: 1200,
      alt: "Kaushal Rathod, full stack and mobile app developer",
    }],
  },
};

const highlights = [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects", value: "10+ Shipped" },
  { label: "Tools", value: "25+ Systems" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${absoluteUrl("/about")}#page`,
        name: "About Kaushal Rathod",
        description: metadata.description,
        url: absoluteUrl("/about"),
        mainEntity: { "@id": personId },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  return (
    <main className="soft-grid-bg">
      <JsonLd data={aboutSchema} />
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-6 px-4 sm:gap-8 sm:px-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="section-label bg-[#ffeb3b]">About</div>
            <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
              Full-stack and mobile developer building reliable products.
            </h1>
            <p className="mt-4 text-base text-black/75 sm:text-lg">
              I am Kaushal Rathod, a full-stack and mobile app developer based
              in Ahmedabad, Gujarat. I use Next.js, React, Node.js, TypeScript,
              React Native, and Expo to turn product requirements into reliable
              software for users and internal teams.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
            <div className="soft-section bg-white p-5 sm:p-6">
              <h2 className="text-xl font-semibold">Developer Bio</h2>
              <p className="mt-3 text-sm text-black/70">
                I work across user interfaces, API architecture, database design,
                mobile delivery, and developer workflows. My experience includes
                logistics platforms, learning systems, dashboards, and search-ready
                content architecture.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="soft-card soft-shadow-sm col-span-12 bg-[#2f5dff] px-4 py-4 sm:col-span-4"
                >
                  <div className="text-xs font-semibold uppercase">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="soft-section bg-[#ff7f6b] p-5 sm:p-6">
              <h3 className="text-lg font-semibold">What I care about</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Clear product thinking",
                  "Playful but usable UI",
                  "Collaborative delivery",
                  "Performant systems",
                ].map((item) => (
                  <span key={item} className="soft-tag bg-white text-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
