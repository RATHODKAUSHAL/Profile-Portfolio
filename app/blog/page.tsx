import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getBlogPosts, baseKeywords, geoKeywords } from "@/lib/blog"

const posts = getBlogPosts()

const pageTitle = "Developer Blog | Next.js, Full-Stack, and Community Insights"
const pageDescription =
  "Modern developer blog with practical Next.js, full-stack, and system design insights for India developers, Gujarat developers, and the Ahmedabad developer community."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [...baseKeywords, ...geoKeywords, "developer blog India", "Next.js insights"],
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: "https://example.com/blog",
    siteName: "Kaushal Rathod Blog",
    images: [
      {
        url: "/Images/image1.jpg",
        width: 1200,
        height: 630,
        alt: "Developer blog hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/Images/image1.jpg"],
  },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: "https://example.com/blog",
  hasPart: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    url: `https://example.com/blog/${post.slug}`,
  })),
}

export default function BlogPage() {
  return (
    <main className="blog-shell">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-text">
            <span className="section-label">Developer Blog</span>
            <h1 className="blog-title display-font">
              Modern engineering stories for India developers and global teams.
            </h1>
            <p className="blog-subtitle">
              Practical Next.js, full-stack, and architecture notes for the
              Ahmedabad developer community, Gujarat developers, and distributed
              product teams.
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
              {geoKeywords.map((keyword) => (
                <span key={keyword} className="blog-tag">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="blog-hero-media">
            <div className="blog-hero-image">
              <Image
                src="/Images/Office.jpg"
                alt="Developer workspace"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
            <div className="blog-hero-card soft-card soft-shadow">
              <div className="blog-hero-card-title">Community Signals</div>
              <p>
                Curated guidance for JavaScript developers India, Next.js
                developers India, and full-stack developers India.
              </p>
              <Link href="/contact" className="blog-hero-link">
                Join the newsletter <ArrowRight className="h-4 w-4" />
              </Link>
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
            <h3 className="blog-cta-title display-font">
              Need a blog that ranks and converts?
            </h3>
            <p className="blog-cta-text">
              I help developer teams craft SEO-ready articles with strong GEO
              signals for India developers and fast, accessible delivery.
            </p>
          </div>
          <Link href="/contact" className="soft-btn soft-btn-dark">
            Start a blog sprint
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </main>
  )
}
