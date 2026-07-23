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
import { absoluteUrl, siteConfig } from "@/lib/site"

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
    category: post.category,
    authors: [{ name: post.author.name, url: siteConfig.author.sameAs[1] }],
    creator: post.author.name,
    publisher: post.author.name,
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
      modifiedTime: post.date,
      section: post.category,
      tags: post.tags,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export const dynamicParams = false

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

  const wordCount = post.content.reduce((total, block) => {
    if (block.type === "list") {
      return total + block.items.join(" ").split(/\s+/).length
    }
    if (block.type === "code") {
      return total + block.code.split(/\s+/).length
    }
    return total + block.text.split(/\s+/).length
  }, 0)

  const postSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": absoluteUrl(`/blog/${post.slug}`),
        },
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        wordCount,
        author: {
          "@type": "Person",
          "@id": `${siteConfig.siteUrl}/#person`,
          name: post.author.name,
          url: siteConfig.siteUrl,
          sameAs: siteConfig.author.sameAs,
        },
        publisher: {
          "@type": "Person",
          "@id": `${siteConfig.siteUrl}/#person`,
          name: post.author.name,
        },
        image: absoluteUrl(post.ogImage),
        url: absoluteUrl(`/blog/${post.slug}`),
        keywords: [...post.keywords, ...geoKeywords].join(", "),
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(`/blog/${post.slug}`),
          },
        ],
      },
      ...(post.faqs
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
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
              <time dateTime={post.date}>{post.dateLabel}</time>
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

        {post.takeaways && (
          <aside className="blog-answer-box" aria-labelledby="quick-answer-title">
            <span className="section-label bg-[#ffeb3b]">Quick answer</span>
            <h2 id="quick-answer-title" className="display-font text-2xl">
              What you need to know
            </h2>
            <ul>
              {post.takeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </aside>
        )}

        <section className="blog-prose">{post.content.map(renderBlock)}</section>

        {post.faqs && (
          <section className="blog-faq" aria-labelledby="article-faq-title">
            <h2 id="article-faq-title" className="display-font text-3xl">
              Frequently asked questions
            </h2>
            <div className="grid gap-4">
              {post.faqs.map((faq) => (
                <article key={faq.question} className="soft-card soft-shadow-sm p-5">
                  <h3 className="font-bold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/75">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {post.sources && (
          <section className="blog-sources" aria-labelledby="article-sources-title">
            <h2 id="article-sources-title" className="display-font text-2xl">
              Official resources
            </h2>
            <ul>
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
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
