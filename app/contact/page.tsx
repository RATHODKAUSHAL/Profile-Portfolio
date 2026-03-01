import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kaushal Rathod for full stack development, web app consulting, and collaboration opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-6 px-4 sm:gap-8 sm:px-6">
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-5">
            <div className="section-label bg-[#ffeb3b]">Contact</div>
            <h1 className="display-font text-[clamp(2rem,8vw,4.25rem)] leading-[0.95]">
              Let&apos;s build something meaningful.
            </h1>
            <p className="text-base text-black/75 sm:text-lg">
              Share your project brief, timeline, and goals. I reply within 48
              hours with clear scope and next steps.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="soft-section bg-white p-5 sm:p-6">
              <form className="grid grid-cols-12 gap-4" aria-label="Contact form">
                <label className="col-span-12 sm:col-span-6">
                  <span className="mb-1 block text-sm font-semibold">Name</span>
                  <input
                  className="soft-input col-span-12 sm:col-span-6"
                  placeholder="Your name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                />
                </label>
                <label className="col-span-12 sm:col-span-6">
                  <span className="mb-1 block text-sm font-semibold">Email</span>
                  <input
                  className="soft-input col-span-12 sm:col-span-6"
                  placeholder="you@example.com"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                />
                </label>
                <label className="col-span-12">
                  <span className="mb-1 block text-sm font-semibold">
                    Project type
                  </span>
                  <input
                  className="soft-input col-span-12"
                  placeholder="Project type"
                  name="projectType"
                  type="text"
                />
                </label>
                <label className="col-span-12">
                  <span className="mb-1 block text-sm font-semibold">
                    Project details
                  </span>
                  <textarea
                  className="soft-input col-span-12 min-h-[140px]"
                  placeholder="Tell me about your project"
                  name="message"
                  required
                />
                </label>
                <div className="col-span-12 flex flex-wrap items-center gap-3">
                  <button className="soft-btn soft-btn-dark soft-btn-fluid sm:w-auto" type="submit">
                    Send Message
                  </button>
                  <span className="text-xs font-semibold uppercase text-black/60">
                    Available for collaborations
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
