import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Kaushal Rathod in full stack and frontend development roles.",
  alternates: {
    canonical: "/experience",
  },
};

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Trukky",
    period: "Feb 2025 - Present",
    summary:
      "Led full-stack delivery for logistics products, modernized UI, and optimized API performance.",
  },
  {
    role: "Frontend Developer",
    company: "Maze Technolabs",
    period: "Mar 2024 - Jan 2025",
    summary:
      "Shipped React features, partnered with design, and improved mobile performance.",
  },
  {
    role: "Jr. Developer Intern",
    company: "Maze Technolabs",
    period: "Jun 2023 - Mar 2024",
    summary:
      "Supported UI builds, assisted QA, and documented reusable patterns.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
          <div>
            <div className="section-label bg-[#ffeb3b]">Experience</div>
            <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
              Timeline of roles and impact.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-black/75 sm:text-lg">
              Card-based timeline with soft Neo-Brutalist styling for an
              approachable, structured feel.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {experiences.map((item) => (
              <div
                key={item.role}
                className="soft-card soft-shadow col-span-12 flex flex-col gap-4 p-5 sm:p-6 lg:col-span-4"
              >
                <div className="text-xs font-semibold uppercase text-black/60">
                  {item.period}
                </div>
                <div className="text-lg font-bold">{item.role}</div>
                <div className="text-sm font-semibold">{item.company}</div>
                <p className="text-sm text-black/70">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
