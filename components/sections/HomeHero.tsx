import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const statItems = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Products shipped" },
  { value: "Web + App", label: "End-to-end delivery" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "React Native",
  "Expo",
  "PostgreSQL",
  "Laravel",
];

export default function HomeHero() {
  return (
    <section className="pt-24 pb-8 sm:pt-28 lg:pt-36 lg:pb-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <span className="section-label gap-2.5 bg-white tracking-[0.14em]">
            <span className="home-status-dot" aria-hidden="true" />
            Available for new projects
          </span>

          <h1 className="display-font text-[clamp(2.4rem,9vw,5rem)] leading-[0.98] tracking-tight">
            Kaushal Rathod,{" "}
            <span className="home-hero-highlight">Software</span> Developer
          </h1>

          <p className="max-w-xl text-base leading-7 text-black/75 sm:text-lg sm:leading-8">
            I&apos;m Kaushal Rathod, a software developer based in Ahmedabad,
            India. I build full-stack web applications and React Native mobile
            apps with Next.js, React and Node.js, from the first API to the app
            store release.
          </p>

          <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:gap-4">
            <Link className="soft-btn soft-btn-accent soft-btn-fluid sm:w-auto" href="/projects">
              View my projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link className="soft-btn soft-btn-dark soft-btn-fluid sm:w-auto" href="/contact">
              Start a project
            </Link>
          </div>

          <dl className="soft-card soft-shadow-sm grid w-full grid-cols-3 divide-x-[3px] divide-black sm:max-w-xl">
            {statItems.map((item) => (
              <div key={item.label} className="flex flex-col-reverse px-3 py-3 sm:px-5 sm:py-4">
                <dt className="mt-1 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.08em] text-black/60 sm:text-xs">
                  {item.label}
                </dt>
                <dd className="display-font text-base leading-none sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative mr-[14px] mb-[14px]">
            <div className="home-portrait-plate" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[26px] border-[3px] border-black bg-white">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/Images/kaushal-rathod-software-developer.webp"
                  alt="Kaushal Rathod, software developer in Ahmedabad"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 448px, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="soft-card soft-shadow-sm absolute -left-3 bottom-6 flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] sm:-left-6">
              <MapPin className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              Ahmedabad · Remote worldwide
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-6xl px-4 sm:px-6 lg:mt-20">
        <div className="flex flex-col gap-4 border-y-[3px] border-black py-5 sm:flex-row sm:items-center sm:gap-6">
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-black/60">
            Core stack
          </p>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li key={tech} className="soft-tag shadow-none">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
