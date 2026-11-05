import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import fleetConnektBanner from "../../Assets/fleetconnekt/fleetconnekt-logistics-app-banner.webp";

type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  href: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "FleetConnekt",
    category: "Highway logistics · Mobile",
    description:
      "Verified transporter directory, digital lorry receipts, and route intelligence for Indian highway logistics.",
    tags: ["Mobile App", "Logistics", "Digital LR"],
    image: fleetConnektBanner,
    href: "/projects/fleetconnekt",
  },
  {
    title: "48Jobs.com",
    category: "Logistics hiring · Web",
    description:
      "Job platform with candidate onboarding, role-based access, and verification workflows.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/Images/48jobs-logistics-job-portal.webp",
    href: "/projects",
  },
  {
    title: "Trukky LMS",
    category: "Team training · Web",
    description:
      "Internal learning platform with progress tracking, content management, and analytics.",
    tags: ["Laravel", "React", "MySQL"],
    image: "/Images/trukky-lms-dashboard.webp",
    href: "/projects",
  },
];

export default function HomeFeaturedProjects() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="featured-projects-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="section-label bg-[#dbe7ff]">Selected work</div>
            <h2
              id="featured-projects-title"
              className="display-font mt-4 text-[clamp(2rem,7vw,3.5rem)] leading-[0.95]"
            >
              Products built for real operations
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              Logistics, hiring, and training platforms used by teams every day.
            </p>
          </div>
          <Link className="soft-btn soft-btn-fluid sm:w-auto" href="/projects">
            All projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card soft-card soft-shadow bg-white ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="project-card-media bg-[#f4f4f4]">
                <Image
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-black/60">
                  {project.category}
                </p>
                <h3 className="display-font mt-2 text-2xl leading-tight">
                  <Link className="project-card-link" href={project.href}>
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  {project.description}
                </p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="soft-tag shadow-none">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="project-card-arrow shrink-0" aria-hidden="true">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
