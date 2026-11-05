import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function HomeCTA() {
  return (
    <section className="pt-8 pb-24 lg:pt-12 lg:pb-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="soft-section flex flex-col gap-8 bg-[#ff7f6b] p-6 text-black sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <div className="section-label bg-white">Let&apos;s collaborate</div>
            <h2 className="display-font mt-4 text-[clamp(2rem,6vw,3.5rem)] leading-[0.95]">
              Have a product in mind? Let&apos;s build it.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-black/80">
              Share a quick brief and timeline. I&apos;ll follow up with a
              clear plan, scope, and next steps.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Link className="soft-btn soft-btn-dark soft-btn-fluid whitespace-nowrap sm:w-auto" href="/contact">
              Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              className="soft-btn soft-btn-fluid whitespace-nowrap sm:w-auto"
              href={`mailto:${siteConfig.author.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
