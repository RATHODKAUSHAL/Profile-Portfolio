import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="soft-section flex flex-col gap-6 bg-[#ff7f6b] p-5 text-black sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="section-label bg-white">Let&apos;s Collaborate</div>
            <h3 className="display-font text-[clamp(1.5rem,7vw,2.875rem)] leading-[0.95]">
              Ready to build a friendly, bold product?
            </h3>
            <p className="mt-3 text-sm text-black/75">
              Drop a quick brief and timeline. I will follow up with a clear
              plan, scope, and next steps.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 md:w-auto">
            <Link className="soft-btn soft-btn-dark soft-btn-fluid sm:w-auto" href="/contact">
              Contact Me
            </Link>
            <Link className="soft-btn soft-btn-fluid sm:w-auto" href="/skills">
              View Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
