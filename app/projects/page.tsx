import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production projects by Kaushal Rathod across logistics, dashboards, and e-commerce platforms using Next.js, React, and Node.js.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Kaushal Rathod",
    description:
      "Case-study style project portfolio with technology stack, business context, and outcomes.",
    url: absoluteUrl("/projects"),
    images: [
      {
        url: "/Images/48jobs.png",
        width: 1200,
        height: 630,
        alt: "Project showcase by Kaushal Rathod",
      },
    ],
  },
};

const projects = [
  {
    title: "48jobs.com Logistics Job Portal",
    image: "/Images/48jobs.png",
    description:
      "A logistics hiring platform with candidate onboarding, role-based access, and verification workflows.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    outcome:
      "Improved hiring flow automation with better candidate discovery and admin control.",
  },
  {
    title: "Trukky Learning Management System",
    image: "/Images/Trukky-LMS.png",
    description:
      "An internal LMS for logistics teams with progress tracking, content management, and analytics.",
    technologies: ["Laravel", "React", "TypeScript", "MySQL"],
    outcome:
      "Enabled structured training delivery and reduced onboarding friction for teams.",
  },
  {
    title: "Zestify E-commerce Experience",
    image: "/Images/image2.jpg",
    description:
      "A storefront and admin suite with product catalog workflows, content controls, and checkout UX improvements.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    outcome:
      "Delivered faster storefront performance and maintainable admin tooling.",
  },
];

const faqs = [
  {
    question: "What technologies does Kaushal Rathod use for full stack projects?",
    answer:
      "Kaushal primarily works with Next.js, React, Node.js, TypeScript, Laravel, PostgreSQL, and MySQL depending on project requirements.",
  },
  {
    question: "What type of projects are included in this portfolio?",
    answer:
      "This portfolio includes logistics platforms, dashboards, LMS products, and e-commerce applications with frontend and backend ownership.",
  },
  {
    question: "Can Kaushal help with SEO and GEO-ready website architecture?",
    answer:
      "Yes. Projects are built with structured metadata, semantic HTML, performance optimization, and schema markup for SEO and AI discoverability.",
  },
];

export default function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Kaushal Rathod",
    url: absoluteUrl("/projects"),
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      creator: {
        "@type": "Person",
        name: siteConfig.author.name,
      },
      image: absoluteUrl(project.image),
      keywords: project.technologies.join(", "),
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="soft-grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
          <header>
            <div className="section-label bg-[#ffeb3b]">Projects</div>
            <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
              Full stack projects with measurable outcomes.
            </h1>
            <p className="mt-4 max-w-3xl text-base text-black/75 sm:text-lg">
              This project portfolio highlights production work I have delivered
              across logistics, learning systems, and commerce products. Each
              project includes clear context, technologies used, and impact.
            </p>
          </header>

          <section aria-label="Project list" className="grid grid-cols-12 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="soft-card soft-shadow col-span-12 flex flex-col gap-4 p-5 sm:p-6 md:col-span-6 lg:col-span-4"
              >
                <div className="relative h-44 overflow-hidden rounded-[22px] border-[3px] border-black bg-[#ffeb3b]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-sm text-black/70">{project.description}</p>
                <p className="text-sm font-semibold">Outcome: {project.outcome}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="soft-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link className="soft-btn soft-btn-dark soft-btn-fluid w-full sm:w-fit" href="/contact">
                  Discuss Similar Project
                </Link>
              </article>
            ))}
          </section>

          <section className="soft-section bg-white p-5 sm:p-6" aria-labelledby="projects-faq">
            <h2 id="projects-faq" className="display-font text-2xl sm:text-3xl">
              FAQ
            </h2>
            <div className="mt-4 grid gap-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="soft-card soft-shadow-sm p-4">
                  <h3 className="text-base font-bold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-black/75">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
