import { Gauge, Layers, Smartphone, Plus } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Full-stack web applications",
    icon: Layers,
    accent: "bg-[#ffeb3b]",
    description:
      "Product interfaces, server-rendered Next.js pages, Node.js APIs, authentication flows, and relational data models built as one maintainable system.",
  },
  {
    title: "Mobile application development",
    icon: Smartphone,
    accent: "bg-[#dbe7ff]",
    description:
      "Cross-platform React Native and Expo applications with Android delivery, device permissions, push notifications, and API integrations.",
  },
  {
    title: "Performance and discoverability",
    icon: Gauge,
    accent: "bg-[#ffe0da]",
    description:
      "Accessible interfaces, Core Web Vitals-conscious implementation, semantic content, metadata, and structured data for search-ready launches.",
  },
];

export const homeFaqs = [
  {
    question: "Who is Kaushal Rathod?",
    answer:
      "Kaushal Rathod is a software developer based in Ahmedabad, Gujarat, India. He has built production software since 2023 and currently works as a Full Stack Developer at Trukky, building logistics web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo and PostgreSQL.",
  },
  {
    question: "What does Kaushal Rathod do?",
    answer:
      "Kaushal builds full-stack web applications, cross-platform mobile apps and internal tools for operations teams. His work includes FleetConnekt, a highway logistics app with a verified transporter directory and digital lorry receipts; 48jobs.com, a logistics hiring platform; and Trukky LMS, a learning platform with progress tracking and analytics.",
  },
  {
    question: "Where is Kaushal Rathod based?",
    answer:
      "Kaushal Rathod is based in Ahmedabad, Gujarat, India, and works in Indian Standard Time (UTC+5:30). He works remotely with clients and teams worldwide, so you don't need to be in Ahmedabad to hire him for a web or mobile project.",
  },
  {
    question: "How can I hire Kaushal Rathod?",
    answer:
      "Send a short brief with your goals, budget and timeline through the contact page at kaushalrathod.com/contact, or email rathodkaushal2001@gmail.com. Kaushal reviews every enquiry and follows up by email with questions, a proposed scope and the next steps for your web or mobile project.",
  },
  {
    question: "What tools and skills does Kaushal Rathod use?",
    answer:
      "His core stack is Next.js, React and TypeScript on the frontend; Node.js, Express, Laravel and REST APIs on the backend; PostgreSQL, MySQL, Prisma and Supabase for data; and React Native with Expo for mobile apps. He also handles performance tuning, accessibility and technical SEO.",
  },
  {
    question: "How much experience does Kaushal Rathod have?",
    answer:
      "Kaushal has more than three years of professional experience. He started as a Junior Developer Intern at Maze Technolabs in June 2023, became a Frontend Developer there in March 2024, and has been a Full Stack Developer at Trukky since February 2025, working across React interfaces, Node.js APIs and PostgreSQL data.",
  },
];

export default function HomeExpertise() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="expertise-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <header className="max-w-3xl">
          <div className="section-label bg-[#ffeb3b]">Services &amp; expertise</div>
          <h2
            id="expertise-title"
            className="display-font mt-4 text-[clamp(2rem,7vw,3.5rem)] leading-[0.95]"
          >
            From product idea to production-ready software.
          </h2>
          <p className="mt-4 text-base leading-7 text-black/70 sm:text-lg">
            I help teams turn operational problems into fast, accessible web
            and mobile products, with clear architecture and dependable delivery.
            See the full list of{" "}
            <Link className="font-bold underline underline-offset-4" href="/services">
              software development services
            </Link>
            .
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="soft-card soft-shadow-sm flex flex-col bg-white p-5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-black ${service.accent}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="display-font text-sm text-black/40">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <section
          className="soft-section grid gap-6 bg-white p-5 sm:p-8 lg:grid-cols-[1fr_2fr] lg:gap-10"
          aria-labelledby="home-faq-title"
        >
          <div>
            <h2 id="home-faq-title" className="display-font text-2xl leading-tight sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/70">
              Quick answers about who I am and how I work. Read the{" "}
              <Link className="font-bold underline underline-offset-4" href="/about">
                full story about Kaushal Rathod
              </Link>{" "}
              or{" "}
              <Link className="font-bold underline underline-offset-4" href="/contact">
                ask me directly
              </Link>
              .
            </p>
          </div>
          <div className="divide-y-2 divide-black border-y-2 border-black">
            {homeFaqs.map((faq, index) => (
              <details key={faq.question} className="home-faq group" open={index === 0}>
                <summary className="flex items-center justify-between gap-4 py-4">
                  <h3 className="font-bold">{faq.question}</h3>
                  <span className="home-faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#ffeb3b]">
                    <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </summary>
                <p className="pb-5 pr-12 text-sm leading-6 text-black/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
