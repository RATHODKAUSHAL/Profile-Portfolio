import type { Metadata } from "next";
import { BriefcaseBusiness, CalendarDays, CodeXml, Rocket } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteOgImage } from "@/lib/og";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { experiences, formatDuration } from "@/lib/experience";
import { breadcrumbSchema, personId } from "@/lib/seo";

const pageTitle = "Experience: Full Stack Developer at Trukky";
const pageDescription =
  "Kaushal Rathod's experience: Full Stack Developer at Trukky since 2025 and Frontend Developer at Maze Technolabs. See each role, its results and the tech used.";

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
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: absoluteUrl("/experience"),
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    images: [siteOgImage.url],
  },
};



// Rebuild daily so the "Present" role duration stays current.
export const revalidate = 86400;

const stats = [
  { value: "3+", label: "Years building", icon: CalendarDays },
  { value: "3", label: "Roles", icon: BriefcaseBusiness },
  { value: "10+", label: "Core technologies", icon: CodeXml },
];

export default function ExperiencePage() {
  const experienceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl("/experience")}#page`,
        name: pageTitle,
        description: pageDescription,
        url: absoluteUrl("/experience"),
        mainEntity: { "@id": personId },
      },
      {
        "@type": "ItemList",
        name: `${siteConfig.author.name} work history`,
        itemListElement: experiences.map((experience, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "OrganizationRole",
            roleName: experience.role,
            startDate: experience.start,
            ...(experience.end ? { endDate: experience.end } : {}),
            memberOf: { "@type": "Organization", name: experience.company },
          },
        })),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Experience", path: "/experience" },
      ]),
    ],
  };

  return (
    <main className="soft-grid-bg">
      <JsonLd data={experienceSchema} />

      <section className="pt-24 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-20 sm:px-6 lg:gap-20 lg:pb-28">
          <header className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="section-label bg-[#ffeb3b]">Experience</div>
              <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
                Kaushal Rathod&apos;s work experience
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-black/75 sm:text-lg">
                Since 2023, Kaushal Rathod has worked across frontend and full-stack roles,
                building responsive interfaces, dependable APIs, and practical
                systems for product and logistics teams. See the{" "}
                <Link className="font-bold underline underline-offset-4" href="/projects">
                  projects from these roles
                </Link>{" "}
                or{" "}
                <Link className="font-bold underline underline-offset-4" href="/skills">
                  the tools he uses
                </Link>
                , or view the{" "}
                <Link className="font-bold underline underline-offset-4" href="/resume">
                  one-page resume
                </Link>
                .
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
                      <span className="text-xs font-semibold uppercase text-black/60">
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
                        {experience.role}{" "}
                        <span className="text-black/60">at {experience.company}</span>
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
                        <strong className="text-xs leading-tight lg:text-sm">
                          {experience.company}
                        </strong>
                        <span className="mt-1 text-[0.625rem] font-bold uppercase leading-tight opacity-80 lg:text-xs">
                          {formatDuration(experience.start, experience.end)}
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
