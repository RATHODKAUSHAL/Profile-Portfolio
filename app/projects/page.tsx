import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteOgImage } from "@/lib/og";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";
import fleetConnektBanner from "../../Assets/fleetconnekt/fleetconnekt-logistics-app-banner.webp";

const pageTitle = "Kaushal Rathod Projects: Web & Mobile App Case Studies";
const pageDescription =
  "Kaushal Rathod's projects: FleetConnekt, 48jobs.com, Trukky LMS and Zestify. See the stack and outcome of each web and mobile app, then discuss yours.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/projects"),
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteOgImage.url],
  },
};

type Project = {
  title: string;
  image: string | StaticImageData;
  imageAlt: string;
  description: string;
  technologies: string[];
  outcome: string;
  platform: "web" | "mobile";
  caseStudy?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "48jobs.com Logistics Job Portal",
    image: "/Images/48jobs-logistics-job-portal.webp",
    imageAlt: "48jobs.com home page listing logistics jobs",
    description:
      "A logistics hiring platform with candidate onboarding, role-based access, and verification workflows.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    outcome:
      "Improved hiring flow automation with better candidate discovery and admin control.",
    platform: "web",
    liveUrl: "https://48jobs.com",
  },
  {
    title: "Trukky Learning Management System",
    image: "/Images/trukky-lms-dashboard.webp",
    imageAlt: "Trukky LMS dashboard with course progress and analytics",
    description:
      "An internal LMS for logistics teams with progress tracking, content management, and analytics.",
    technologies: ["Laravel", "React", "TypeScript", "MySQL"],
    outcome:
      "Enabled structured training delivery and reduced onboarding friction for teams.",
    platform: "web",
  },
  {
    title: "Zestify E-commerce Experience",
    image: "/Images/laptop-working-from-cafe.webp",
    imageAlt: "Laptop on a café table (placeholder until a Zestify screenshot is added)",
    description:
      "A storefront and admin suite with product catalog workflows, content controls, and checkout UX improvements.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    outcome:
      "Delivered faster storefront performance and maintainable admin tooling.",
    platform: "web",
  },
  {
    title: "FleetConnekt Logistics Platform",
    image: fleetConnektBanner,
    imageAlt: "FleetConnekt mobile app screens for transporters",
    description:
      "A mobile-first Indian highway logistics platform with a verified transporter directory and digital lorry receipt workflows.",
    technologies: ["Mobile App", "Logistics", "Digital Lorry Receipts"],
    outcome:
      "Combined transporter discovery, route information, and freight documentation in one operational experience.",
    platform: "mobile",
    caseStudy: "/projects/fleetconnekt",
  },
];

const imageUrl = (image: string | StaticImageData) =>
  absoluteUrl(typeof image === "string" ? image : image.src);

const faqs = [
  {
    question: "What technologies does Kaushal Rathod use for full stack projects?",
    answer:
      "Kaushal primarily works with Next.js, React and TypeScript for web interfaces, Node.js and Laravel for APIs, PostgreSQL and MySQL for data, and React Native with Expo for mobile apps. The stack is chosen per project: 48jobs.com runs on Next.js, Node.js and PostgreSQL, while Trukky LMS uses Laravel, React and MySQL.",
  },
  {
    question: "What type of projects are included in this portfolio?",
    answer:
      "The portfolio covers logistics and operations software: FleetConnekt, a highway logistics mobile app; 48jobs.com, a logistics hiring platform; Trukky LMS, an internal training system; and Zestify, an e-commerce storefront with an admin suite. In each project Kaushal worked across the frontend, backend and data layer.",
  },
  {
    question: "Can Kaushal help with SEO and GEO-ready website architecture?",
    answer:
      "Yes. Kaushal builds sites with semantic HTML, per-page metadata, JSON-LD structured data, XML sitemaps and llms.txt files, and keeps pages statically rendered and fast. That makes content easy for search engines to index and for AI assistants such as ChatGPT, Perplexity and Gemini to read and cite accurately.",
  },
];

export default function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/projects")}#page`,
        name: "Full-stack and mobile app projects by Kaushal Rathod",
        description: pageDescription,
        url: absoluteUrl("/projects"),
        about: { "@id": personId },
        hasPart: projects.map((project, index) => ({
          "@type": project.platform === "mobile" ? "SoftwareApplication" : "WebApplication",
          "@id": `${absoluteUrl("/projects")}#project-${index + 1}`,
          name: project.title,
          description: project.description,
          applicationCategory: "BusinessApplication",
          operatingSystem: project.platform === "mobile" ? "Android" : "Web",
          creator: { "@id": personId },
          image: imageUrl(project.image),
          url:
            project.liveUrl ??
            absoluteUrl(project.caseStudy ?? `/projects#project-${index + 1}`),
          keywords: project.technologies.join(", "),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/projects")}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ]),
    ],
  };

  return (
    <main className="soft-grid-bg">
      <JsonLd data={projectsSchema} />
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
          <header>
            <div className="section-label bg-[#ffeb3b]">Projects</div>
            <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
              Kaushal Rathod&apos;s projects
            </h1>
            <p className="mt-4 max-w-3xl text-base text-black/75 sm:text-lg">
              These projects by Kaushal Rathod are production web and mobile
              apps for logistics, team training and e-commerce. Each one lists
              the problem, the technologies used and the outcome.
            </p>
          </header>

          <section aria-label="Project list" className="grid grid-cols-12 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                id={`project-${index + 1}`}
                className="soft-card soft-shadow col-span-12 flex flex-col gap-4 p-5 sm:p-6 md:col-span-6 lg:col-span-4"
              >
                <div className="relative h-44 overflow-hidden rounded-[22px] border-[3px] border-black bg-[#ffeb3b]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
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
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.caseStudy ? (
                    <Link className="soft-btn soft-btn-dark soft-btn-fluid sm:w-fit" href={project.caseStudy}>
                      View case study
                    </Link>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      className="soft-btn soft-btn-dark soft-btn-fluid sm:w-fit"
                      href={project.liveUrl}
                      rel="noopener"
                      target="_blank"
                    >
                      Visit {new URL(project.liveUrl).host}
                    </a>
                  ) : null}
                  <Link className="soft-btn soft-btn-fluid sm:w-fit" href="/contact">
                    Discuss a similar project
                  </Link>
                </div>
              </article>
            ))}
          </section>

          <section className="soft-section bg-white p-5 sm:p-6" aria-labelledby="projects-faq">
            <h2 id="projects-faq" className="display-font text-2xl sm:text-3xl">
              Frequently asked questions
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
    </main>
  );
}
