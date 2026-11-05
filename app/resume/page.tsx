import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { experiences, formatDuration } from "@/lib/experience";
import { siteOgImage } from "@/lib/og";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";
import PrintButton from "./PrintButton";

// Rebuild daily so the "Present" role duration stays current.
export const revalidate = 86400;

const pageTitle = "Kaushal Rathod Resume: Software Developer CV & Skills";
const pageDescription =
  "Kaushal Rathod's resume: software developer in Ahmedabad with 3+ years in Next.js, React Native and Node.js. View his experience and skills, or save as PDF.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/resume" },
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/resume"),
    images: [siteOgImage],
    firstName: siteConfig.author.givenName,
    lastName: siteConfig.author.familyName,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteOgImage.url],
  },
};

const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { title: "Mobile", items: ["React Native", "Expo", "Android"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Laravel", "PHP"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Prisma", "Supabase"] },
  { title: "Tools", items: ["Git", "Postman"] },
];

const projects = [
  {
    name: "FleetConnekt",
    href: "/projects/fleetconnekt",
    text: "Mobile-first logistics app for Indian highway transport: verified transporter directory and digital lorry receipts.",
  },
  {
    name: "48jobs.com",
    href: "/projects",
    text: "Logistics hiring platform with candidate onboarding, role-based access and verification workflows (Next.js, Node.js, PostgreSQL).",
  },
  {
    name: "Trukky LMS",
    href: "/projects",
    text: "Internal learning platform for logistics teams with progress tracking and analytics (Laravel, React, MySQL).",
  },
];

export default function ResumePage() {
  const { author } = siteConfig;

  const resumeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl("/resume")}#page`,
        name: pageTitle,
        description: pageDescription,
        url: absoluteUrl("/resume"),
        mainEntity: { "@id": personId },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Resume", path: "/resume" },
      ]),
    ],
  };

  return (
    <main className="soft-grid-bg resume-page">
      <JsonLd data={resumeSchema} />
      <section className="pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <div className="soft-section bg-white p-6 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6 border-b-[3px] border-black pb-6">
              <div>
                <h1 className="display-font text-[clamp(2rem,6vw,3.25rem)] leading-[0.95]">
                  Kaushal Rathod&apos;s resume
                </h1>
                <p className="mt-3 text-lg font-bold">
                  {author.role} · {author.location.city}, {author.location.region}, {author.location.country}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <li>
                    <a className="underline underline-offset-4" href={`mailto:${author.email}`}>
                      {author.email}
                    </a>
                  </li>
                  <li>
                    <a className="underline underline-offset-4" href={siteConfig.siteUrl}>
                      {new URL(siteConfig.siteUrl).host}
                    </a>
                  </li>
                  <li>
                    <a className="underline underline-offset-4" href={author.sameAs[1]} rel="me noopener noreferrer" target="_blank">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a className="underline underline-offset-4" href={author.sameAs[0]} rel="me noopener noreferrer" target="_blank">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <PrintButton />
            </div>

            <section className="mt-8" aria-labelledby="summary-title">
              <h2 id="summary-title" className="resume-heading">Summary</h2>
              <p className="mt-3 leading-7 text-black/80">{author.longBio}</p>
            </section>

            <section className="mt-8" aria-labelledby="experience-title">
              <h2 id="experience-title" className="resume-heading">Experience</h2>
              <ol className="mt-4 grid gap-6">
                {experiences.map((experience) => (
                  <li key={`${experience.company}-${experience.role}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-bold">
                        {experience.role}, {experience.company}
                      </h3>
                      <p className="text-sm font-semibold text-black/60">
                        {experience.period} · {formatDuration(experience.start, experience.end)}
                      </p>
                    </div>
                    <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm leading-6 text-black/80">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-black/60">
                      {experience.technologies.join(" · ")}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-8" aria-labelledby="skills-title">
              <h2 id="skills-title" className="resume-heading">Skills</h2>
              <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-[8rem_1fr]">
                {skillGroups.map((group) => (
                  <div key={group.title} className="contents">
                    <dt className="font-bold">{group.title}</dt>
                    <dd className="text-black/80">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-8" aria-labelledby="projects-title">
              <h2 id="projects-title" className="resume-heading">Selected projects</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-black/80">
                {projects.map((project) => (
                  <li key={project.name}>
                    <Link className="font-bold underline underline-offset-4" href={project.href}>
                      {project.name}
                    </Link>
                    : {project.text}
                  </li>
                ))}
              </ul>
            </section>

            <p className="no-print mt-10 border-t-[3px] border-black pt-6 text-sm text-black/70">
              More detail on the{" "}
              <Link className="font-bold underline underline-offset-4" href="/experience">
                experience page
              </Link>
              , or{" "}
              <Link className="font-bold underline underline-offset-4" href="/contact">
                hire Kaushal Rathod
              </Link>{" "}
              for your project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
