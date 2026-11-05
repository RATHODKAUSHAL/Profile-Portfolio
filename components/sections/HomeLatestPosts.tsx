import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";

export default function HomeLatestPosts() {
  const posts = [...getBlogPosts()]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="py-16 lg:py-24" aria-labelledby="latest-posts-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="section-label bg-[#ffe0da]">From the blog</div>
            <h2
              id="latest-posts-title"
              className="display-font mt-4 text-[clamp(2rem,7vw,3.5rem)] leading-[0.95]"
            >
              Latest articles
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              Practical notes on Next.js, React Native, Expo and full-stack
              architecture from real projects.
            </p>
          </div>
          <Link className="soft-btn soft-btn-fluid sm:w-auto" href="/blog">
            All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="project-card soft-card soft-shadow-sm h-full bg-white p-5 sm:p-6">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-black/60">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug">
                  <Link className="project-card-link" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/70">{post.description}</p>
                <time
                  className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.08em] text-black/60"
                  dateTime={post.date}
                >
                  {post.dateLabel}
                </time>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
