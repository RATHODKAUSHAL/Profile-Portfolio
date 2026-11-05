import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import JsonLd from "@/components/JsonLd"
import { getBlogPosts, baseKeywords } from "@/lib/blog"
import { siteOgImage } from "@/lib/og"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { breadcrumbSchema, personId } from "@/lib/seo"

const posts = getBlogPosts()

const pageTitle = "Kaushal Rathod Blog: Next.js & React Native Guides"
const pageDescription =
  "The Kaushal Rathod blog: practical guides on Next.js, React Native, Expo, full-stack architecture, performance and SEO. Read the latest articles."

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/blog",
  },
  keywords: [...baseKeywords, "Next.js blog", "React Native tutorials"],
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/blog"),
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteOgImage.url],
  },
}

const topics = Array.from(new Set(posts.map((post) => post.category)))

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${absoluteUrl("/blog")}#blog`,
      name: `${siteConfig.author.name}'s developer blog`,
      description: pageDescription,
      url: absoluteUrl("/blog"),
      author: { "@id": personId },
      publisher: { "@id": personId },
      inLanguage: "en-US",
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author: { "@id": personId },
        url: absoluteUrl(`/blog/${post.slug}`),
      })),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  ],
}

export default function BlogPage() {
  return (
    <main className="blog-shell">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-text">
            <span className="section-label">Developer Blog</span>
            <h1 className="blog-title display-font">
              Kaushal Rathod&apos;s blog: Next.js &amp; React Native guides
            </h1>
            <p className="blog-subtitle">
              Kaushal Rathod writes practical Next.js, React Native and
              full-stack architecture guides from real production work, with
              code you can reuse.
            </p>
            <div className="blog-hero-actions">
              <Link href="/contact" className="soft-btn soft-btn-accent">
                Work with me
              </Link>
              <Link href="#latest" className="soft-btn">
                Explore latest posts
              </Link>
            </div>
            <div className="blog-keywords">
              {topics.map((topic) => (
                <span key={topic} className="blog-tag">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="blog-hero-media">
            <div className="blog-hero-image">
              <Image
                src="/Images/office-desk-setup.webp"
                alt="Laptop and notes on a developer's desk"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
            <div className="blog-hero-card soft-card soft-shadow">
              <div className="blog-hero-card-title">Stay updated</div>
              <p>
                New articles on Next.js, Expo and full-stack delivery. Follow
                along with the RSS feed.
              </p>
              <a href="/feed.xml" className="blog-hero-link">
                Subscribe via RSS <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="latest" className="blog-grid-section">
        <div className="blog-grid-header">
          <h2 className="blog-section-title display-font">Latest articles</h2>
          <p className="blog-section-subtitle">
            Deep dives, quick wins, and proven patterns for high-impact teams.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-image">
                  <Image
                    src={post.coverImage}
                    alt={`${post.title} cover`}
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-description">{post.description}</p>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-card-footer">
                    <span>{post.dateLabel}</span>
                    <span className="blog-card-cta">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-cta">
        <div className="blog-cta-inner">
          <div>
            <h2 className="blog-cta-title display-font">
              Need a fast, search-ready website?
            </h2>
            <p className="blog-cta-text">
              I build Next.js sites and apps with clean metadata, structured
              data and strong Core Web Vitals.
            </p>
          </div>
          <Link href="/contact" className="soft-btn soft-btn-dark soft-btn-fluid sm:w-auto">
            Start a project
          </Link>
        </div>
      </section>

      <JsonLd data={blogSchema} />
    </main>
  )
}
