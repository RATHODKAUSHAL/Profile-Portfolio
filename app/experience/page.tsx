import type { Metadata } from "next";
import { BriefcaseBusiness, CalendarDays, CodeXml, Rocket } from "lucide-react";
import { absoluteUrl, siteConfig } from "@/lib/site";

const pageTitle = "Professional Experience | Full Stack & Frontend Developer";
const pageDescription =
  "Explore Kaushal Rathod's professional experience building logistics products, React interfaces, Next.js applications, APIs, and data-driven systems.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/experience" },
  keywords: [
    "Kaushal Rathod experience",
    "Full Stack Developer experience",
    "Frontend Developer Ahmedabad",
    "React developer experience",
    "Next.js developer India",
  ],
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/experience"),
    images: [
      {
        url: "/Images/profileimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Kaushal Rathod professional experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/Images/profileimage.jpeg"],
  },
};

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Trukky",
    period: "February 2025 – Present",
    duration: "1 yr 5 mos",
    accent: "bg-[#ffeb3b]",
    summary:
      "I build and maintain logistics products across the frontend, backend, and data layer, turning operational requirements into reliable workflows used by internal teams and customers.",
    achievements: [
      "Delivered responsive product experiences with Next.js, React, and TypeScript.",
      "Connected complex UI workflows to Node.js APIs and PostgreSQL data.",
      "Improved maintainability through reusable components, clearer contracts, and focused reviews.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Maze Technolabs",
    period: "March 2024 – January 2025",
    duration: "11 mos",
    accent: "bg-[#2f5dff] text-white",
    summary:
      "I shipped customer-facing React features in collaboration with design and backend teams, with particular attention to responsive behavior, reusable UI, and production quality.",
    achievements: [
      "Converted product requirements and designs into accessible React interfaces.",
      "Integrated REST APIs and handled loading, error, and empty states across user flows.",
      "Reduced mobile UI friction by improving layouts, component reuse, and performance.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    role: "Junior Developer Intern",
    company: "Maze Technolabs",
    period: "June 2023 – March 2024",
    duration: "10 mos",
    accent: "bg-[#ff7f6b]",
    summary:
      "I developed my production foundations by supporting interface builds, fixing defects, testing responsive behavior, and documenting patterns the team could reuse.",
    achievements: [
      "Built and refined web screens with JavaScript, React, and component libraries.",
      "Worked through QA feedback and learned to debug issues systematically.",
      "Documented reusable UI patterns and strengthened Git-based collaboration habits.",
    ],
    technologies: ["JavaScript", "React", "shadcn/ui", "MySQL", "Git"],
  },
];

const stats = [
  { value: "3+", label: "Years building", icon: CalendarDays },
  { value: "3", label: "Roles", icon: BriefcaseBusiness },
  { value: "10+", label: "Core technologies", icon: CodeXml },
];

export default function ExperiencePage() {
  const experienceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/experience"),
    mainEntity: {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.author.name,
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Trukky",
      },
      knowsAbout: Array.from(
        new Set(experiences.flatMap((experience) => experience.technologies)),
      ),
      sameAs: siteConfig.author.sameAs,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: absoluteUrl("/experience"),
      },
    ],
  };

  return (
    <main className="soft-grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-24 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-20 sm:px-6 lg:gap-20 lg:pb-28">
          <header className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="section-label bg-[#ffeb3b]">Experience</div>
              <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
                Building products, solving problems, and growing with every role.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-black/75 sm:text-lg">
                Since 2023, I have worked across frontend and full-stack roles,
                building responsive interfaces, dependable APIs, and practical
                systems for product and logistics teams.
              </p>
            </div>
            <div className="col-span-12 grid grid-cols-3 gap-3 lg:col-span-4 lg:grid-cols-1">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="soft-card soft-shadow-sm flex flex-col items-center gap-1 bg-white p-3 text-center sm:flex-row sm:text-left lg:p-4"
                  >
                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <div>
                      <strong className="block text-lg leading-none">{stat.value}</strong>
                      <span className="text-[10px] font-semibold uppercase text-black/60 sm:text-xs">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </header>

          <section aria-labelledby="career-timeline-title">
            <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
              <div className="section-label bg-white">Career timeline</div>
              <h2
                id="career-timeline-title"
                className="display-font mt-4 text-3xl leading-tight sm:text-4xl"
              >
                The work, impact, and lessons behind each chapter.
              </h2>
            </div>

            <ol className="relative mx-auto max-w-5xl before:absolute before:bottom-10 before:left-12 before:top-10 before:w-[3px] before:-translate-x-1/2 before:bg-black lg:before:left-1/2">
              {experiences.map((experience, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <li
                    key={`${experience.company}-${experience.role}`}
                    className="relative mb-10 grid grid-cols-[6rem_minmax(0,1fr)] items-center last:mb-0 lg:mb-14 lg:grid-cols-[minmax(0,1fr)_9rem_minmax(0,1fr)]"
                  >
                    <article
                      className={`group/card soft-card soft-shadow-sm relative col-start-2 overflow-hidden bg-white p-5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.35deg] hover:shadow-[9px_9px_0_0_rgba(0,0,0,0.22)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:row-start-1 ${
                        isLeft ? "lg:col-start-1" : "lg:col-start-3"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-1/2 hidden h-[3px] w-8 -translate-y-1/2 bg-black lg:block ${
                          isLeft ? "-right-8" : "-left-8"
                        }`}
                      />
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className={`soft-tag ${experience.accent}`}>
                          {experience.period}
                        </span>
                      </div>
                      <h3 className="display-font text-xl transition-transform duration-300 group-hover/card:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none sm:text-2xl">
                        {experience.role}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-black/75 sm:text-base">
                        {experience.summary}
                      </p>
                      <ul className="mt-4 grid gap-2 text-sm leading-6 text-black/75">
                        {experience.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-2">
                            <Rocket className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span key={technology} className="soft-tag">
                            {technology}
                          </span>
                        ))}
                      </div>
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 bottom-0 h-2 origin-left scale-x-0 border-t-2 border-black transition-transform duration-300 group-hover/card:scale-x-100 motion-reduce:transition-none ${experience.accent}`}
                      />
                    </article>

                    <div className="relative z-10 col-start-1 row-start-1 flex justify-center lg:col-start-2">
                      <div className={`flex h-20 w-20 flex-col items-center justify-center rounded-full border-[3px] border-black px-2 text-center shadow-[4px_4px_0_0_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none lg:h-28 lg:w-28 ${experience.accent}`}>
                        <strong className="text-[11px] leading-tight lg:text-sm">
                          {experience.company}
                        </strong>
                        <span className="mt-1 text-[8px] font-bold uppercase leading-tight opacity-75 lg:text-[10px]">
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>
      </section>
    </main>
  );
}
