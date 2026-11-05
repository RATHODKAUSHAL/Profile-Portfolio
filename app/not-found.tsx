import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="soft-grid-bg">
      <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center gap-5 px-4 pt-24 sm:px-6">
        <div className="section-label bg-[#ffeb3b]">404</div>
        <h1 className="display-font text-[clamp(2rem,7vw,3.5rem)] leading-[0.95]">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-base leading-7 text-black/70">
          The link may be outdated or mistyped. Try one of these instead:
        </p>
        <nav className="flex flex-wrap gap-3" aria-label="Helpful links">
          <Link className="soft-btn soft-btn-accent" href="/">
            Home
          </Link>
          <Link className="soft-btn" href="/projects">
            Projects
          </Link>
          <Link className="soft-btn" href="/blog">
            Blog
          </Link>
          <Link className="soft-btn" href="/contact">
            Contact
          </Link>
        </nav>
      </section>
    </main>
  );
}
