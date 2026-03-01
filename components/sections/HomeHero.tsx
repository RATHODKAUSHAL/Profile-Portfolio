import Image from "next/image";
import Link from "next/link";

const statItems = [
  { label: "Experience", value: "2+ Years" },
  { label: "Projects", value: "18+ Shipped" },
  { label: "Focus", value: "Full Stack" },
];

export default function HomeHero() {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-6 px-4 sm:gap-8 sm:px-6">
        <div className="col-span-12 flex flex-col gap-5 sm:gap-6 lg:col-span-7">
          <span className="section-label bg-[#ffeb3b]">Kaushal Rathod</span>
          <h1 className="display-font text-[clamp(2.1rem,10vw,5.25rem)] leading-[0.95] tracking-tight">
            Full Stack Developer
          </h1>
          <p className="max-w-xl text-base text-black/75 sm:text-lg">
            I am a full stack developer specializing in Next.js, React,
            Node.js, and TypeScript. I design and build fast, accessible web
            applications that are reliable in production.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link className="soft-btn soft-btn-accent soft-btn-fluid sm:w-auto" href="/projects">
              View Projects
            </Link>
            <Link className="soft-btn soft-btn-dark soft-btn-fluid sm:w-auto" href="/contact">
              Contact Me
            </Link>
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
          <div className="soft-section flex h-full min-h-[320px] flex-col justify-between gap-5 bg-[#2f5dff] p-4 text-white sm:min-h-[360px] sm:gap-6 sm:p-6">
            <div className="text-xs font-semibold uppercase text-white/80">
              Developer Portrait
            </div>
            <div className="relative overflow-hidden rounded-[22px] border-[3px] border-black bg-white">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/Images/profileimage.jpeg"
                  alt="Kaushal Rathod portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
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
