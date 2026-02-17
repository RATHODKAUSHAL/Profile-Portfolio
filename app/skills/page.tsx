const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "/skills/react.png" },
      { name: "Next.js", icon: "/skills/nextjs.png" },
      { name: "JavaScript", icon: "/skills/javascript.png" },
      { name: "TypeScript", icon: "/skills/Typescript.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwindcss.png" },
      { name: "shadcn", icon: "/skills/shadcn.png" },
    ],
    color: "bg-[#ffeb3b]",
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "/skills/Node.js.png" },
      { name: "Express", icon: "/skills/Express.png" },
      { name: "REST APIs", icon: "/skills/RESTAPIs.png" },
      { name: "Laravel", icon: "/skills/LARAVEL.png" },
      { name: "PHP", icon: "/skills/PHP.png" },
    ],
    color: "bg-[#2f5dff] text-white",
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: "/skills/PostgreSQL.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
      { name: "Prisma", icon: "/skills/prisma.png" },
      { name: "Supabase", icon: "/skills/supabase.png" },
    ],
    color: "bg-white",
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "/skills/git.png" },
      { name: "Postman", icon: "/skills/postman.png" },
    ],
    color: "bg-[#ff7f6b]",
  },
];

const highlights = [
  { label: "Craft", value: "Design to Dev" },
  { label: "Performance", value: "Core Web Vitals" },
  { label: "Collaboration", value: "Agile + Review" },
  { label: "Delivery", value: "Ship-Ready" },
];

export default function SkillsPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-28 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="section-label bg-[#ffeb3b]">Skills</div>
              <h1 className="display-font text-[40px] leading-[0.95] sm:text-[48px] lg:text-[68px]">
                Tools, patterns, and systems I ship with.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-black/75">
                A focused stack built for product velocity and durable UX. Each
                category is curated for clarity, reliability, and speed in
                production.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="soft-card soft-shadow flex h-full flex-col gap-4 bg-white p-6">
                <div className="text-xs font-semibold uppercase text-black/60">
                  Stack Snapshot
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border-[2px] border-black bg-[#f7f7f7] px-4 py-3 text-sm font-semibold text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
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
          <div className="grid grid-cols-12 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="soft-card soft-shadow col-span-12 flex flex-col gap-4 p-6 sm:col-span-6"
              >
                <div className={`flex items-center justify-between rounded-2xl border-[2px] border-black px-4 py-2 ${group.color}`}>
                  <span className="text-xs font-semibold uppercase">
                    {group.title}
                  </span>
                  <span className="text-xs font-semibold uppercase">
                    {group.items.length} tools
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 rounded-2xl border-[2px] border-black bg-white px-3 py-2 text-sm font-semibold text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
                    >
                      <img
                        src={item.icon}
                        alt={`${item.name} logo`}
                        className="h-6 w-6"
                        loading="lazy"
                      />
                      <span>{item.name}</span>
                    </div>
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
