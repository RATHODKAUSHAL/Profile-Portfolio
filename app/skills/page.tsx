const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "bg-[#ffeb3b]",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Auth", "Webhooks"],
    color: "bg-[#2f5dff] text-white",
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Prisma", "Redis", "Supabase"],
    color: "bg-white",
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "CI/CD", "Postman", "Figma"],
    color: "bg-[#ff7f6b]",
  },
];

export default function SkillsPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-28 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div>
            <div className="section-label bg-[#ffeb3b]">Skills</div>
            <h1 className="display-font text-[52px] leading-[0.95] lg:text-[68px]">
              Tools and systems I ship with.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-black/75">
              Categorized stack overview with a soft Neo-Brutalist UI treatment.
              Modular, reliable, and always evolving.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`soft-card soft-shadow col-span-12 flex flex-col gap-4 p-6 sm:col-span-6 lg:col-span-3 ${group.color}`}
              >
                <div className="text-xs font-semibold uppercase text-black/70">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="soft-tag bg-white text-black">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
