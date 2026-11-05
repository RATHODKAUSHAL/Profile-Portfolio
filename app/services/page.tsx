import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, Layers, Server, Smartphone } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteOgImage } from "@/lib/og";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";

const pageTitle = "Software Developer in Ahmedabad: Services | Kaushal Rathod";
const pageDescription =
  "Hire Kaushal Rathod, a software developer in Ahmedabad, for Next.js web apps, React Native mobile apps, APIs and performance work. Start your project today.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/services"),
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteOgImage.url],
  },
};

const services = [
  {
    id: "web-applications",
    icon: Layers,
    accent: "bg-[#ffeb3b]",
    title: "Full-stack web application development",
    subtitle: "Next.js developer",
    description:
      "Product interfaces, server-rendered Next.js pages, Node.js APIs, authentication and relational data models, built as one maintainable system.",
    includes: [
      "Next.js and React frontends with TypeScript",
      "Admin panels and dashboards for operations teams",
      "Authentication, roles and permissions",
      "Fast, accessible pages that search engines can index",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    proof: { href: "/projects", label: "See 48jobs.com and Trukky LMS" },
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    accent: "bg-[#dbe7ff]",
    title: "Mobile app development",
    subtitle: "React Native & Expo developer",
    description:
      "Cross-platform React Native and Expo apps with Android delivery, device permissions, push notifications and API integrations.",
    includes: [
      "React Native apps built with Expo",
      "Push notifications, permissions and deep links",
      "Shared backend with your web app",
      "Builds ready for Play Store release",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Android"],
    proof: { href: "/projects/fleetconnekt", label: "See the FleetConnekt app case study" },
  },
  {
    id: "apis",
    icon: Server,
    accent: "bg-[#ffe0da]",
    title: "APIs and backend development",
    subtitle: "Node.js & Laravel developer",
    description:
      "REST APIs and backends with clear data contracts, so web and mobile clients stay in sync as the product grows.",
    includes: [
      "REST APIs in Node.js/Express or Laravel",
      "PostgreSQL and MySQL schema design",
      "Third-party and verification integrations",
      "Documented endpoints your team can maintain",
    ],
    stack: ["Node.js", "Express", "Laravel", "PHP", "PostgreSQL", "MySQL", "Prisma"],
    proof: { href: "/blog/full-stack-project-architecture-checklist-2026", label: "Read the architecture checklist" },
  },
  {
    id: "performance-seo",
    icon: Gauge,
    accent: "bg-[#fff3ad]",
    title: "Performance and technical SEO",
    subtitle: "Core Web Vitals & search-ready launches",
    description:
      "Accessible interfaces, Core Web Vitals-conscious implementation, semantic content, metadata and structured data for search-ready launches.",
    includes: [
      "Core Web Vitals audits and fixes (LCP, INP, CLS)",
      "Metadata, sitemaps and JSON-LD structured data",
      "Image and font optimization",
      "Content that AI assistants can read and cite",
    ],
    stack: ["Next.js", "Lighthouse", "Schema.org", "Search Console"],
    proof: { href: "/blog/nextjs-performance-playbook-india", label: "Read the Next.js performance playbook" },
  },
];

const steps = [
  { title: "Brief", text: "You share your goals, budget and timeline through the contact form." },
  { title: "Scope", text: "I reply by email with questions, a proposed scope and milestones." },
  { title: "Build", text: "Work happens in small, reviewable releases you can test along the way." },
  { title: "Launch", text: "Deployment, handover and documentation so your team can run it." },
];

const faqs = [
  {
    question: "Do you work with clients outside Ahmedabad?",
    answer:
      "Yes. Kaushal Rathod is a software developer based in Ahmedabad, India, and works remotely with clients and teams worldwide. Communication happens over email, calls and shared project boards, in Indian Standard Time (UTC+5:30) with overlap for other time zones when needed.",
  },
  {
    question: "What budget do I need to hire a software developer?",
    answer:
      "It depends on scope: a focused website costs far less than a web app with a mobile app and admin panel. The contact form lets you choose a range from under ₹10k to more than ₹1L, or 'Let's discuss', and Kaushal replies with a scope that fits that budget.",
  },
  {
    question: "What should I send to get started?",
    answer:
      "Send what the product should do, who will use it, any designs or reference links, your budget range and your ideal timeline. A short brief is enough to start; Kaushal follows up with questions before proposing a scope, milestones and next steps.",
  },
];

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/services")}#page`,
        name: pageTitle,
        description: pageDescription,
        url: absoluteUrl("/services"),
        about: { "@id": personId },
        mainEntity: {
          "@type": "OfferCatalog",
          name: `Software development services by ${siteConfig.author.name}`,
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${absoluteUrl("/services")}#${service.id}`,
              name: service.title,
              description: service.description,
              serviceType: service.subtitle,
              provider: { "@id": personId },
              areaServed: [
                { "@type": "City", name: siteConfig.author.location.city },
                { "@type": "Country", name: siteConfig.author.location.country },
                "Worldwide",
              ],
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/services")}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
  };

  return (
    <main className="soft-grid-bg">
      <JsonLd data={servicesSchema} />

      <section className="pt-24 lg:pt-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="section-label bg-[#ffeb3b]">Services</div>
            <h1 className="display-font mt-4 text-[clamp(2rem,7vw,4rem)] leading-[0.95]">
              Software developer in Ahmedabad: web &amp; mobile app services
            </h1>
            <p className="mt-6 text-base leading-7 text-black/80 sm:text-lg sm:leading-8">
              I&apos;m Kaushal Rathod, a software developer in Ahmedabad, India.
              I build full-stack web applications, React Native mobile apps and
              the APIs behind them for startups and operations teams, and I
              work remotely with clients worldwide.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="soft-btn soft-btn-dark" href="/contact">
                Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link className="soft-btn" href="/projects">
                See Kaushal Rathod&apos;s projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-label="Services">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                id={service.id}
                className="soft-card soft-shadow-sm flex scroll-mt-28 flex-col bg-white p-5 sm:p-7"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-black ${service.accent}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-black/60">
                  {service.subtitle}
                </p>
                <h2 className="display-font mt-2 text-2xl leading-tight">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/75">{service.description}</p>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.08em]">What&apos;s included</h3>
                <ul className="mt-2 grid list-disc gap-1.5 pl-5 text-sm leading-6 text-black/75">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {service.stack.map((tech) => (
                    <li key={tech} className="soft-tag shadow-none">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-auto pt-6 text-sm font-bold underline underline-offset-4"
                  href={service.proof.href}
                >
                  {service.proof.label}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-16 lg:pb-24" aria-labelledby="process-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 id="process-title" className="display-font text-[clamp(1.8rem,5vw,3rem)] leading-none">
            How a project works
          </h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="soft-card soft-shadow-sm bg-white p-5">
                <span className="display-font text-sm text-black/50">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-24 lg:pb-32" aria-labelledby="services-faq-title">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="services-faq-title" className="display-font text-2xl leading-tight sm:text-3xl">
              Hire a freelance software developer in Ahmedabad
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/70">
              Common questions before starting a project.
            </p>
            <Link className="soft-btn soft-btn-dark mt-5" href="/contact">
              Hire Kaushal Rathod
            </Link>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="soft-section bg-white p-5">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-black/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
