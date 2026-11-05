import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteOgImage } from "@/lib/og";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";

const pageTitle = "About Kaushal Rathod: Software Developer from Ahmedabad";
const pageDescription =
  "Meet Kaushal Rathod, a software developer from Ahmedabad with 3+ years building logistics, hiring and learning platforms. Read his story and get in touch.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/about"),
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

const highlights = [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects", value: "10+ Shipped" },
  { label: "Tools", value: "25+ Systems" },
];

const roles = [
  {
    role: "Full Stack Developer",
    company: "Trukky",
    period: "February 2025 – present",
  },
  {
    role: "Frontend Developer",
    company: "Maze Technolabs",
    period: "March 2024 – January 2025",
  },
  {
    role: "Junior Developer Intern",
    company: "Maze Technolabs",
    period: "June 2023 – March 2024",
  },
];

const projects = [
  {
    name: "FleetConnekt",
    href: "/projects/fleetconnekt",
    summary:
      "a mobile-first highway logistics platform with a verified transporter directory and digital lorry receipts",
  },
  {
    name: "48jobs.com",
    href: "/projects",
    summary:
      "a logistics hiring platform with candidate onboarding, role-based access and verification workflows",
  },
  {
    name: "Trukky LMS",
    href: "/projects",
    summary:
      "an internal learning platform with progress tracking, content management and analytics",
  },
];

const principles = [
  "Clear product thinking",
  "Playful but usable UI",
  "Collaborative delivery",
  "Performant systems",
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AboutPage", "ProfilePage"],
        "@id": `${absoluteUrl("/about")}#page`,
        name: `About ${siteConfig.author.name}`,
        description: pageDescription,
        url: absoluteUrl("/about"),
        dateModified: "2026-11-05",
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
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="section-label bg-[#ffeb3b]">About</div>
            <h1 className="display-font mt-4 text-[clamp(2rem,7vw,4rem)] leading-[0.95]">
              About Kaushal Rathod, software developer
            </h1>
            <p className="mt-6 text-base leading-7 text-black/80 sm:text-lg sm:leading-8">
              I&apos;m Kaushal Rathod, a software developer based in Ahmedabad,
              Gujarat, India. Since 2023 I have built production web and mobile
              products with Next.js, React, TypeScript, Node.js, React Native,
              Expo, Laravel and PostgreSQL. Today I work as a Full Stack
              Developer at Trukky, building logistics products such as
              FleetConnekt, and I work remotely with teams worldwide.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-xl">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="soft-card soft-shadow-sm bg-[#dbe7ff] px-3 py-3 sm:px-4"
                >
                  <div className="text-xs font-semibold uppercase text-black/70">
                    {item.label}
                  </div>
                  <div className="text-base font-bold sm:text-lg">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative overflow-hidden rounded-[26px] border-[3px] border-black bg-white shadow-[8px_8px_0_rgba(0,0,0,0.18)]">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={siteConfig.author.image}
                  alt="Kaushal Rathod, software developer, smiling on a terrace"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <article className="soft-section bg-white p-5 sm:p-8">
            <h2 className="display-font text-2xl sm:text-3xl">What does Kaushal Rathod do?</h2>
            <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base">
              I build full-stack web applications and cross-platform mobile
              apps, from the database and API to the interface and the app
              release. My work covers user interfaces, API architecture,
              database design, mobile delivery and developer workflows, with
              attention to accessibility, performance and search-ready content.
            </p>
            <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base">
              See my{" "}
              <Link className="font-bold underline underline-offset-4" href="/skills">
                Next.js and React Native skills
              </Link>{" "}
              or the{" "}
              <Link className="font-bold underline underline-offset-4" href="/services">
                software development services
              </Link>{" "}
              I offer.
            </p>
          </article>

          <article className="soft-section bg-white p-5 sm:p-8">
            <h2 className="display-font text-2xl sm:text-3xl">Where has Kaushal Rathod worked?</h2>
            <ol className="mt-4 grid gap-4">
              {roles.map((item) => (
                <li key={`${item.company}-${item.role}`} className="border-l-[3px] border-black pl-4">
                  <h3 className="font-bold">
                    {item.role} at {item.company}
                  </h3>
                  <p className="text-sm text-black/70">{item.period}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-7 text-black/75 sm:text-base">
              Read the{" "}
              <Link className="font-bold underline underline-offset-4" href="/experience">
                full work experience
              </Link>{" "}
              or{" "}
              <Link className="font-bold underline underline-offset-4" href="/resume">
                Kaushal Rathod&apos;s resume
              </Link>
              .
            </p>
          </article>

          <article className="soft-section bg-white p-5 sm:p-8">
            <h2 className="display-font text-2xl sm:text-3xl">Products I have built</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-black/75 sm:text-base">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link className="font-bold underline underline-offset-4" href={project.href}>
                    {project.name}
                  </Link>
                  : {project.summary}.
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base">
              The stack and outcome for each one are in{" "}
              <Link className="font-bold underline underline-offset-4" href="/projects">
                Kaushal Rathod&apos;s projects
              </Link>
              .
            </p>
          </article>

          <article className="soft-section bg-[#ff7f6b] p-5 sm:p-8">
            <h2 className="display-font text-2xl sm:text-3xl">How I work</h2>
            <p className="mt-4 text-sm leading-7 text-black/80 sm:text-base">
              I turn product requirements into reliable software for users and
              internal teams. I prefer clear data contracts, reusable
              components and focused reviews, and I work remotely with teams
              worldwide from Ahmedabad (IST, UTC+5:30).
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {principles.map((item) => (
                <li key={item} className="soft-tag bg-white text-black">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-5 px-4 sm:px-6">
          <p className="display-font text-2xl sm:text-3xl">Want to work together?</p>
          <div className="flex flex-wrap gap-3">
            <Link className="soft-btn soft-btn-dark" href="/contact">
              Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              className="soft-btn"
              href={siteConfig.author.sameAs[1]}
              rel="me noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
            <a
              className="soft-btn"
              href={siteConfig.author.sameAs[0]}
              rel="me noopener noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
