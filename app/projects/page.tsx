import Image from "next/image";

const projects = [
  {
    title: "48jobs.com (Logistics Job Portal)",
    image: "/Images/48jobs.png",
    description:
      "End-to-end platform with auth, workflows, and verification integrations.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Logistics Management service",
    image: "/",
    description:
      "Production dashboard for bookings, transport discovery, and analytics.",
    tags: ["Laravel", "React", "TypeScript", "Postgresql"],
  },
  {
    title: "Zestify-Ecommernce Website",
    image: "/",
    description:
      "Multi-tenant admin system with billing, user roles, and audit trails.",
    tags: ["Next.js", "Stripe", "Prisma"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-28 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div>
            <div className="section-label bg-[#ffeb3b]">Projects</div>
            <h1 className="display-font text-[40px] leading-[0.95] sm:text-[48px] lg:text-[68px]">
              Build highlights and product work.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-black/75">
              Each project blends bold structure with friendly, rounded UI.
              Replace placeholders with real case studies.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="soft-card soft-shadow col-span-12 flex flex-col gap-4 p-6 md:col-span-6 lg:col-span-4"
              >
                <div className="flex h-40 items-center justify-center rounded-[22px] border-[3px] border-black bg-[#ffeb3b] text-sm font-semibold">
                  <Image src={project.image} alt="project image" className="object-cover w-full" width={100} height={100}/>
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
                <button className="soft-btn soft-btn-dark w-fit">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
