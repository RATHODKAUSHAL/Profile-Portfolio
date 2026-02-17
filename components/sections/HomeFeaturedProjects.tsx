const featuredProjects = [
  {
    title: "Logistics Job Portal",
    description:
      "End-to-end platform with auth, job workflows, and verification integrations.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Fleet Aggregation Dashboard",
    description:
      "Operational dashboard with booking flows, live status, and analytics.",
    tags: ["React", "TypeScript", "REST APIs"],
  },
  {
    title: "Design System Starter",
    description:
      "Reusable UI kit with component docs and fast prototyping workflow.",
    tags: ["Storybook", "Tailwind", "Figma"],
  },
];

export default function HomeFeaturedProjects() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="section-label">Featured Projects</div>
            <h2 className="display-font text-[32px] leading-[0.95] sm:text-[40px] lg:text-[56px]">
              A preview of my builds
            </h2>
          </div>
          <a className="soft-btn soft-btn-accent" href="/projects">
            See all projects
          </a>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="soft-card soft-shadow col-span-12 flex flex-col gap-5 p-6 lg:col-span-4"
            >
              <div className="flex h-40 items-center justify-center rounded-[22px] border-[3px] border-black bg-[#ffeb3b] text-sm font-semibold">
                Project Image
              </div>
              <div className="text-lg font-bold">{project.title}</div>
              <p className="text-sm text-black/70">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="soft-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a className="soft-btn soft-btn-dark w-fit" href="/projects">
                View project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
