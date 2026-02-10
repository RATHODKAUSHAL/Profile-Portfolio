const highlights = [
  { label: "Experience", value: "2+ Years" },
  { label: "Projects", value: "18+ Shipped" },
  { label: "Tools", value: "25+ Systems" },
];

export default function AboutPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-28 lg:pt-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-8 px-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="section-label bg-[#ffeb3b]">About</div>
            <h1 className="display-font text-[52px] leading-[0.95] lg:text-[68px]">
              Friendly builder with a bold UI lens.
            </h1>
            <p className="mt-4 text-lg text-black/75">
              Personal introduction placeholder. I translate ideas into
              delightful web experiences, balancing clarity, performance, and
              playful details.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
            <div className="soft-section bg-white p-6">
              <h2 className="text-xl font-semibold">Developer Bio</h2>
              <p className="mt-3 text-sm text-black/70">
                Short bio placeholder. I focus on accessible design systems,
                reliable APIs, and modern tooling that keeps teams shipping fast
                without compromising quality.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="soft-card soft-shadow-sm col-span-12 bg-[#2f5dff] px-4 py-4 text-white sm:col-span-4"
                >
                  <div className="text-xs font-semibold uppercase text-white/70">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="soft-section bg-[#ff7f6b] p-6">
              <h3 className="text-lg font-semibold">What I care about</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Clear product thinking",
                  "Playful but usable UI",
                  "Collaborative delivery",
                  "Performant systems",
                ].map((item) => (
                  <span key={item} className="soft-tag bg-white text-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
