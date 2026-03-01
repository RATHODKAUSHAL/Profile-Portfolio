import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kaushal Rathod, a full stack developer focused on performant web applications, accessible interfaces, and scalable APIs.",
  alternates: {
    canonical: "/about",
  },
};

const highlights = [
  { label: "Experience", value: "2+ Years" },
  { label: "Projects", value: "18+ Shipped" },
  { label: "Tools", value: "25+ Systems" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
      knowsAbout: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "REST API development",
        "Web performance optimization",
      ],
    },
  };

  return (
    <div className="soft-grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-6 px-4 sm:gap-8 sm:px-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="section-label bg-[#ffeb3b]">About</div>
            <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
              Full stack developer building fast, accessible web products.
            </h1>
            <p className="mt-4 text-base text-black/75 sm:text-lg">
              I am Kaushal Rathod, a full stack developer specializing in
              Next.js, React, Node.js, and TypeScript. I help teams deliver
              reliable products with strong UX, performance, and maintainable
              engineering systems.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
            <div className="soft-section bg-white p-5 sm:p-6">
              <h2 className="text-xl font-semibold">Developer Bio</h2>
              <p className="mt-3 text-sm text-black/70">
                I focus on building clear user interfaces, scalable API
                architecture, and developer-friendly workflows. My work spans
                product planning, frontend systems, backend integrations, and
                SEO/GEO-oriented content structures.
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
    </div>
  );
}
