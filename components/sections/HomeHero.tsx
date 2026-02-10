const statItems = [
  { label: "Experience", value: "2+ Years" },
  { label: "Projects", value: "18+ Shipped" },
  { label: "Focus", value: "Full Stack" },
];

export default function HomeHero() {
  return (
    <section className="pt-28 lg:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-8 px-6">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
          <span className="section-label bg-[#ffeb3b]">Developer Portfolio</span>
          <h1 className="display-font text-[56px] leading-[0.95] tracking-tight lg:text-[84px]">
            Full Stack Developer
          </h1>
          <p className="max-w-xl text-lg text-black/75">
            Friendly, modern product engineering with a Neo-Brutalist soul.
            I design and build web apps that feel playful, reliable, and
            effortless to use.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="soft-btn soft-btn-accent" href="/projects">
              View Projects
            </a>
            <a className="soft-btn soft-btn-dark" href="/contact">
              Contact Me
            </a>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="soft-card soft-shadow-sm col-span-12 px-4 py-3 sm:col-span-4"
              >
                <div className="text-xs font-semibold uppercase text-black/60">
                  {item.label}
                </div>
                <div className="text-lg font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="soft-section flex h-full min-h-[360px] flex-col justify-between gap-6 bg-[#2f5dff] p-6 text-white">
            <div className="text-xs font-semibold uppercase text-white/80">
              Developer Avatar
            </div>
            <div className="flex h-48 items-center justify-center rounded-[22px] border-[3px] border-black bg-white text-sm font-semibold text-black">
              Illustration Placeholder
            </div>
            <div className="flex flex-wrap gap-2">
              {["UI Systems", "APIs", "Performance", "Design"].map((tag) => (
                <span key={tag} className="soft-tag bg-white text-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
