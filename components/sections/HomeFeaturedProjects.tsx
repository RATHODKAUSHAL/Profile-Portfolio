import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, MapPinned, PanelsTopLeft } from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    title: "48Jobs.com",
    description:
      "End-to-end platform with auth, job workflows, and verification integrations.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    category: "Logistics hiring",
    icon: BriefcaseBusiness,
    accent: "bg-[#dbe7ff]",
  },
  {
    number: "02",
    title: "FleetConnekt",
    description:
      "FleetConnekt connects verified transport agencies, modern document workflows, and route intelligence in one platform built for the realities of Indian highway logistics.",
    tags: ["Mobile App", "Logistics", "Digital Lorry Receipts"],
    category: "Highway logistics",
    href: "/fleetconnekt",
    icon: MapPinned,
    accent: "bg-[#ffeb3b]",
  },
  {
    number: "03",
    title: "Design System Starter",
    description:
      "Reusable UI kit with component docs and fast prototyping workflow.",
    tags: ["Storybook", "Tailwind", "Figma"],
    category: "Design infrastructure",
    icon: PanelsTopLeft,
    accent: "bg-[#ffe0da]",
  },
];

export default function HomeFeaturedProjects() {
  return (
    <section className="featured-projects py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="section-label">Featured Projects</div>
            <h2 className="display-font mt-3 text-[clamp(2rem,8vw,3.5rem)] leading-[0.95]">
              A preview of my builds
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/65 sm:text-base">
              Digital products designed around real operational challenges.
            </p>
          </div>
          <Link className="soft-btn soft-btn-accent soft-btn-fluid sm:w-auto" href="/projects">
            See all projects
          </Link>
        </div>
        <div className="featured-projects-row grid grid-cols-12 gap-5 lg:gap-6">
          {featuredProjects.map((project) => {
            const Icon = project.icon;

            return (
            <div
              key={project.title}
              className="featured-project-card soft-card soft-shadow group col-span-12 flex min-h-[320px] flex-col p-5 sm:p-6 md:col-span-6"
            >
              <div className="featured-project-card-content flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className={`project-card-icon flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-black ${project.accent}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <span className="project-card-number">{project.number}</span>
                </div>
                <div className="mt-7">
                  <p className="project-card-category">{project.category}</p>
                  <h3 className="display-font mt-2 text-2xl leading-none">{project.title}</h3>
                  <p className="project-card-copy mt-3 max-w-xl text-sm leading-6 text-black/70">{project.description}</p>
                </div>
                <div className="mt-auto border-t-2 border-black pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="soft-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link className="project-card-link mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em]" href={project.href ?? "/projects"}>
                    View project <span className="project-card-link-icon"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
