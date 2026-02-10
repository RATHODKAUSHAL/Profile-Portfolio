export default function ContactPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-28 lg:pt-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-8 px-6">
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-5">
            <div className="section-label bg-[#ffeb3b]">Contact</div>
            <h1 className="display-font text-[52px] leading-[0.95] lg:text-[68px]">
              Lets build something friendly.
            </h1>
            <p className="text-lg text-black/75">
              Contact form UI placeholder. Share a quick brief and timeline,
              and I will get back within 48 hours.
            </p>
            <div className="flex flex-wrap gap-2">
              {["GitHub", "LinkedIn", "Behance", "Email"].map((item) => (
                <span key={item} className="soft-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="soft-section bg-white p-6">
              <form className="grid grid-cols-12 gap-4">
                <input
                  className="soft-input col-span-12 sm:col-span-6"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="soft-input col-span-12 sm:col-span-6"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="soft-input col-span-12"
                  placeholder="Project type"
                  type="text"
                />
                <textarea
                  className="soft-input col-span-12 min-h-[140px]"
                  placeholder="Tell me about your project"
                />
                <div className="col-span-12 flex flex-wrap items-center gap-3">
                  <button className="soft-btn soft-btn-dark" type="submit">
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
