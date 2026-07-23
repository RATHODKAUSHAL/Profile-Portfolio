import type { Metadata } from "next";
import Image from "next/image";
import { absoluteUrl, siteConfig } from "@/lib/site";

const pageTitle = "Technical Skills | Web & Mobile Application Development";
const pageDescription =
  "Explore Kaushal Rathod's frontend, mobile, backend, database, and developer tooling experience with React, Next.js, Expo, React Native, Node.js, and PostgreSQL.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/skills" },
  keywords: [
    "Kaushal Rathod skills",
    "Next.js developer",
    "React Native developer",
    "Expo developer",
    "Full Stack Developer India",
  ],
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/skills"),
    images: [
      {
        url: "/Images/profileimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Kaushal Rathod web and mobile development skills",
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

const skillGroups = [
  {
    title: "Frontend",
    accent: "bg-[#ffeb3b]",
    items: [
      {
        name: "React",
        icon: "/skills/react.png",
        description:
          "I use React to turn product ideas into reusable, state-driven interfaces. It taught me to think in components, keep data flow predictable, and design UI that is easy to evolve.",
      },
      {
        name: "Next.js",
        icon: "/skills/nextjs.png",
        description:
          "I build full-stack, production-ready experiences with Next.js, from routed pages to server-rendered data. It taught me how rendering choices, caching, and structure shape performance.",
      },
      {
        name: "JavaScript",
        icon: "/skills/JavaScript.png",
        description:
          "JavaScript is the foundation of the interactive products I create. Working with it has sharpened my understanding of asynchronous code, browser behavior, and dependable application logic.",
      },
      {
        name: "TypeScript",
        icon: "/skills/TypeScript.png",
        description:
          "I use TypeScript to make growing codebases safer and easier to understand. It taught me to model data clearly, catch mistakes early, and create better contracts between components.",
      },
      {
        name: "Tailwind CSS",
        icon: "/skills/Tailwindcss.png",
        description:
          "I use Tailwind CSS to build responsive interfaces quickly while keeping visual rules consistent. It strengthened my eye for spacing, layout systems, and maintainable design tokens.",
      },
      {
        name: "shadcn",
        icon: "/skills/shadcn.png",
        description:
          "I use shadcn/ui as an accessible, flexible base for polished product interfaces. It taught me how to adapt component primitives without losing control of behavior or design.",
      },
    ],
  },
  {
    title: "Mobile Application",
    accent: "bg-[#7a6cff] text-white",
    items: [
      {
        name: "Expo",
        icon: "/skills/expo.svg",
        description:
          "I use Expo to develop, test, and ship React Native applications with a productive cross-platform workflow. It taught me how config plugins, EAS builds, and native capabilities fit together.",
      },
      {
        name: "React Native",
        icon: "/skills/react-native.svg",
        description:
          "I build mobile interfaces with React Native while sharing familiar React patterns across Android and iOS. It taught me mobile-first interaction, native constraints, and platform-aware UI design.",
      },
      {
        name: "Android",
        icon: "/skills/android.svg",
        description:
          "I develop and test Android application flows, permissions, builds, and device-specific behavior. It taught me to account for lifecycle changes, hardware differences, and native delivery requirements.",
      },
    ],
  },
  {
    title: "Backend",
    accent: "bg-[#2f5dff] text-white",
    items: [
      {
        name: "Node.js",
        icon: "/skills/Node.js.png",
        description:
          "I use Node.js to build server-side features and connect frontend experiences to real data. It taught me event-driven thinking, asynchronous workflows, and practical service architecture.",
      },
      {
        name: "Express",
        icon: "/skills/Express.png",
        description:
          "I build focused web services and middleware pipelines with Express. The framework taught me to structure routes cleanly, validate requests, and handle errors consistently.",
      },
      {
        name: "REST APIs",
        icon: "/skills/RESTAPIs.png",
        description:
          "I design and consume REST APIs that keep client-server communication clear and reliable. This work taught me thoughtful resource modeling, useful status codes, and stable contracts.",
      },
      {
        name: "Laravel",
        icon: "/skills/Laravel.png",
        description:
          "I use Laravel to deliver structured backend applications with authentication, validation, and database workflows. It deepened my understanding of MVC and convention-led development.",
      },
      {
        name: "PHP",
        icon: "/skills/PHP.png",
        description:
          "I have used PHP to create dynamic server-rendered features and application logic. It gave me strong fundamentals in request lifecycles, sessions, and dependable backend development.",
      },
    ],
  },
  {
    title: "Database",
    accent: "bg-white",
    items: [
      {
        name: "PostgreSQL",
        icon: "/skills/PostgreSQL.png",
        description:
          "I use PostgreSQL for relational data that needs consistency and expressive querying. It taught me deliberate schema design, indexing, joins, and the value of data integrity.",
      },
      {
        name: "MySQL",
        icon: "/skills/mysql.png",
        description:
          "I have built application data layers with MySQL and written queries for everyday product needs. It strengthened my understanding of normalization, relationships, and query performance.",
      },
      {
        name: "Prisma",
        icon: "/skills/prisma.png",
        description:
          "I use Prisma for type-safe database access and clear, reviewable schema changes. It taught me to keep application models and persisted data closely aligned.",
      },
      {
        name: "Supabase",
        icon: "/skills/supabase.png",
        description:
          "I use Supabase to move quickly with hosted Postgres, authentication, storage, and real-time features. It taught me to prototype fast while still respecting permissions and data design.",
      },
    ],
  },
  {
    title: "Tools",
    accent: "bg-[#ff7f6b]",
    items: [
      {
        name: "Git",
        icon: "/skills/git.png",
        description:
          "I use Git every day to work iteratively, collaborate safely, and keep changes traceable. It taught me disciplined commits, confident branching, and thoughtful code review habits.",
      },
      {
        name: "Postman",
        icon: "/skills/postman.png",
        description:
          "I use Postman to explore, test, and document APIs before they reach the UI. It taught me to verify edge cases early and make backend behavior easier to share and debug.",
      },
    ],
  },
];

const skills = skillGroups.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    category: group.title,
    accent: group.accent,
  })),
);

const highlights = [
  { label: "Craft", value: "Design to Dev" },
  { label: "Performance", value: "Core Web Vitals" },
  { label: "Collaboration", value: "Agile + Review" },
  { label: "Delivery", value: "Ship-Ready" },
];

export default function SkillsPage() {
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technical skills used by Kaushal Rathod",
    description: pageDescription,
    url: absoluteUrl("/skills"),
    itemListElement: skills.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: skill.name,
      description: skill.description,
    })),
  };

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl("/skills"),
    mainEntity: {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
      knowsAbout: skills.map((skill) => skill.name),
    },
  };

  return (
    <main className="soft-grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-20 sm:px-6 lg:gap-20 lg:pb-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="section-label bg-[#ffeb3b]">Skills</div>
              <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
                Tools, patterns, and systems I ship with.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-black/75 sm:text-lg">
                A focused stack built for product velocity and durable UX. Each
                category is curated for clarity, reliability, and speed in
                production.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="soft-card soft-shadow flex h-full flex-col gap-4 bg-white p-5 sm:p-6">
                <div className="text-xs font-semibold uppercase text-black/60">
                  Stack Snapshot
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border-[2px] border-black bg-[#f7f7f7] px-3 py-3 text-sm font-semibold text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:px-4"
                    >
                      <div className="text-[11px] uppercase text-black/60">
                        {item.label}
                      </div>
                      <div className="text-base">{item.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-black/70">
                  Balanced coverage across UI systems, API delivery, and data
                  architecture with modern tooling.
                </p>
              </div>
            </div>
          </div>

          <section aria-labelledby="skill-journey-title">
            <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
              <div className="section-label bg-white">My toolkit</div>
              <h2
                id="skill-journey-title"
                className="display-font mt-4 text-3xl leading-tight sm:text-4xl"
              >
                What I use and what each skill taught me.
              </h2>
            </div>

            <ol className="relative mx-auto max-w-5xl before:absolute before:bottom-8 before:left-8 before:top-8 before:w-[3px] before:-translate-x-1/2 before:bg-black lg:before:left-1/2">
              {skills.map((skill, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <li
                    key={skill.name}
                    className="relative mb-8 grid grid-cols-[4rem_minmax(0,1fr)] items-center last:mb-0 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)]"
                  >
                    <article
                      className={`group/card soft-card soft-shadow-sm relative col-start-2 overflow-hidden bg-white p-5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:-rotate-[0.35deg] hover:shadow-[9px_9px_0_0_rgba(0,0,0,0.22)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:row-start-1 ${
                        isLeft ? "lg:col-start-1" : "lg:col-start-3"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-1/2 hidden h-[3px] w-8 -translate-y-1/2 bg-black lg:block ${
                          isLeft ? "-right-8" : "-left-8"
                        }`}
                      />
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h3 className="display-font text-xl transition-transform duration-300 ease-out group-hover/card:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none sm:text-2xl">
                          {skill.name}
                        </h3>
                        <span
                          className={`rounded-full border-2 border-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${skill.accent}`}
                        >
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
                        {skill.description}
                      </p>
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 bottom-0 h-2 origin-left scale-x-0 border-t-2 border-black transition-transform duration-300 ease-out group-hover/card:scale-x-100 motion-reduce:transition-none ${skill.accent}`}
                      />
                    </article>

                    <div className="relative z-10 col-start-1 row-start-1 flex justify-center lg:col-start-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,0.18)] lg:h-20 lg:w-20">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          className="h-9 w-9 object-contain lg:h-11 lg:w-11"
                          width={44}
                          height={44}
                          loading="lazy"
                        />
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
