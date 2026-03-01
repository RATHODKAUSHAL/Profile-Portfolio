import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import {
  getBlogPost,
  getBlogPosts,
  baseKeywords,
  geoKeywords,
  type BlogContentBlock,
} from "@/lib/blog"
import { absoluteUrl } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {
    return {}
  }

  const title = `${post.title} | Developer Blog`
  const description = post.description

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    keywords: [...baseKeywords, ...geoKeywords, ...post.keywords],
    openGraph: {
      type: "article",
      title,
      description,
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.ogImage],
    },
  }
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

const renderBlock = (block: BlogContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="blog-prose-heading">
          {block.text}
        </h2>
      )
    case "paragraph":
      return (
        <p key={index} className="blog-prose-paragraph">
          {block.text}
        </p>
      )
    case "list":
      return (
        <ul key={index} className="blog-prose-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case "code":
      return (
        <pre key={index} className="blog-prose-code">
          <code>{block.code}</code>
        </pre>
      )
    case "tip":
    case "note":
    case "example":
      return (
        <aside key={index} className={`blog-callout blog-callout-${block.type}`}>
          <strong>{block.title}</strong>
          <p>{block.text}</p>
        </aside>
      )
    case "quote":
      return (
        <blockquote key={index} className="blog-prose-quote">
          <p>{block.text}</p>
          <span>{block.author}</span>
        </blockquote>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {
    notFound()
  }

  const relatedPosts = getBlogPosts().filter((item) => item.slug !== post.slug)

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    image: post.ogImage,
    url: absoluteUrl(`/blog/${post.slug}`),
    keywords: [...post.keywords, ...geoKeywords].join(", "),
  }

  return (
    <main className="blog-shell">
      <article className="blog-article">
        <header className="blog-article-header">
          <div className="blog-breadcrumbs">
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>
          <h1 className="blog-title display-font">{post.title}</h1>
          <p className="blog-subtitle">{post.description}</p>
          <div className="blog-article-meta">
            <span className="blog-meta-chip">
              <Calendar className="h-4 w-4" />
              {post.dateLabel}
            </span>
            <span className="blog-meta-chip">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="blog-meta-chip">{post.author.name}</span>
          </div>
          <div className="blog-article-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="blog-article-cover">
            <Image
              src={post.coverImage}
              alt={`${post.title} cover image`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </header>

        <section className="blog-prose">{post.content.map(renderBlock)}</section>
      </article>

      <section className="blog-cta blog-cta-article">
        <div className="blog-cta-inner">
          <div>
            <h3 className="blog-cta-title display-font">
              Want this playbook for your team?
            </h3>
            <p className="blog-cta-text">
              I work with product teams across India to improve SEO, GEO
              discoverability, and performance for developer content.
            </p>
          </div>
          <Link href="/contact" className="soft-btn soft-btn-accent soft-btn-fluid sm:w-auto">
            Book a consultation
          </Link>
        </div>
      </section>

      <section className="blog-related">
        <div className="blog-grid-header">
          <h2 className="blog-section-title display-font">
            More from the blog
          </h2>
          <p className="blog-section-subtitle">
            Explore additional notes for Next.js developers India and global
            engineering teams.
          </p>
        </div>
        <div className="blog-grid">
          {relatedPosts.map((item) => (
            <article key={item.slug} className="blog-card">
              <Link href={`/blog/${item.slug}`} className="blog-card-link">
                <div className="blog-card-image">
                  <Image
                    src={item.coverImage}
                    alt={`${item.title} cover`}
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-description">{item.description}</p>
                  <div className="blog-card-footer">
                    <span>{item.dateLabel}</span>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
    </main>
  )
}
