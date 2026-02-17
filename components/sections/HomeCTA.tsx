export default function HomeCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="soft-section flex flex-col gap-6 bg-[#ff7f6b] p-8 text-black md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="section-label bg-white">Lets Collaborate</div>
            <h3 className="display-font text-[28px] leading-[0.95] sm:text-[32px] lg:text-[46px]">
              Ready to build a friendly, bold product?
            </h3>
            <p className="mt-3 text-sm text-black/75">
              Drop a quick brief and timeline. I will follow up with a clear
              plan, scope, and next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="soft-btn soft-btn-dark" href="/contact">
              Contact Me
            </a>
            <a className="soft-btn" href="/skills">
              View Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
