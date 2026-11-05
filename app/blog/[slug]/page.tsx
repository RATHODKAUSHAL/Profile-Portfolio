import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import JsonLd from "@/components/JsonLd"
import {
  getBlogPost,
  getBlogPosts,
  getWordCount,
  baseKeywords,
  type BlogContentBlock,
  type BlogPost,
} from "@/lib/blog"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { breadcrumbSchema, personId } from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {
    return {}
  }

  const title = post.seoTitle ?? `${post.title} | ${siteConfig.name}`
  const description = post.description

  return {
    title: { absolute: title },
    description,
    category: post.category,
    authors: [{ name: post.author.name, url: absoluteUrl("/about") }],
    creator: post.author.name,
    publisher: post.author.name,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    keywords: [...baseKeywords, ...post.keywords],
    openGraph: {
      type: "article",
      title,
      description,
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: post.category,
      tags: post.tags,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

// Same category first, then newest; three cards keep the page focused.
const getRelatedPosts = (post: BlogPost) =>
  getBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const sameCategory =
        Number(b.category === post.category) - Number(a.category === post.category)
      return sameCategory || b.date.localeCompare(a.date)
    })
    .slice(0, 3)

const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

// Renders `backtick` spans as inline code instead of literal backticks.
const renderInline = (text: string) =>
  text.split(/(`[^`]+`)/g).map((part, index) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={index} className="blog-inline-code">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  )

const renderBlock = (block: BlogContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} id={headingId(block.text)} className="blog-prose-heading">
          {block.text}
        </h2>
      )
    case "paragraph":
      return (
        <p key={index} className="blog-prose-paragraph">
          {renderInline(block.text)}
        </p>
      )
    case "list":
      return (
        <ul key={index} className="blog-prose-list">
          {block.items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>
      )
    case "code":
      return (
        <pre
          key={index}
          className="blog-prose-code"
          data-language={block.language}
          aria-label={`${block.language} code example`}
        >
          <code>{block.code}</code>
        </pre>
      )
    case "tip":
    case "note":
    case "example":
      return (
        <aside key={index} className={`blog-callout blog-callout-${block.type}`}>
          <strong>{block.title}</strong>
          <p>{renderInline(block.text)}</p>
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

  const relatedPosts = getRelatedPosts(post)
  const wordCount = getWordCount(post)
  const headings = post.content.filter(
    (block): block is Extract<BlogContentBlock, { type: "heading" }> => block.type === "heading",
  )

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
        dateModified: post.updated ?? post.date,
        articleSection: post.category,
        wordCount,
        author: { "@id": personId },
        publisher: { "@id": personId },
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
          width: 1200,
          height: 630,
        },
        url: absoluteUrl(`/blog/${post.slug}`),
        keywords: post.keywords.join(", "),
        inLanguage: "en-US",
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
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
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>
          <h1 className="blog-title display-font">{post.title}</h1>
          <p className="blog-subtitle">{post.description}</p>
          <div className="blog-article-meta">
            <span className="blog-meta-chip">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            {post.updated && post.updated !== post.date ? (
              <span className="blog-meta-chip">
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
            ) : null}
            <span className="blog-meta-chip">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
            <Link className="blog-meta-chip" href="/about" rel="author">
              By {post.author.name}
            </Link>
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

        {headings.length >= 4 ? (
          <nav className="blog-toc" aria-labelledby="toc-title">
            <h2 id="toc-title" className="blog-toc-title">
              In this article
            </h2>
            <ul>
              {headings.map((heading) => (
                <li key={heading.text}>
                  <a href={`#${headingId(heading.text)}`}>{heading.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

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

        <aside className="blog-author" aria-labelledby="author-title">
          <Image
            src={siteConfig.author.image}
            alt={siteConfig.author.name}
            width={72}
            height={72}
            className="blog-author-avatar"
            // The global `img { height: auto }` rule would otherwise distort the circle.
            style={{ width: 72, height: 72 }}
          />
          <div>
            <h2 id="author-title" className="blog-author-name">
              Written by{" "}
              <Link href="/about" rel="author">
                {siteConfig.author.name}
              </Link>
            </h2>
            <p className="blog-author-role">{siteConfig.author.role}</p>
            <p className="blog-author-bio">
              {siteConfig.author.bio} He currently works as a Full Stack
              Developer at {siteConfig.author.employer.name}.
            </p>
            <p className="blog-author-links">
              <Link href="/about">About me</Link>
              <a href={siteConfig.author.sameAs[1]} rel="me noopener noreferrer" target="_blank">
                LinkedIn
              </a>
              <a href={siteConfig.author.sameAs[0]} rel="me noopener noreferrer" target="_blank">
                GitHub
              </a>
            </p>
          </div>
        </aside>
      </article>

      <section className="blog-cta blog-cta-article">
        <div className="blog-cta-inner">
          <div>
            <h2 className="blog-cta-title display-font">
              Need help building something like this?
            </h2>
            <p className="blog-cta-text">
              I build full-stack web and React Native apps for teams
              worldwide, from the first API to the production release.
            </p>
          </div>
          <Link href="/contact" className="soft-btn soft-btn-accent soft-btn-fluid sm:w-auto">
            Start a project
          </Link>
        </div>
      </section>

      <section className="blog-related">
        <div className="blog-grid-header">
          <h2 className="blog-section-title display-font">
            More from the blog
          </h2>
          <p className="blog-section-subtitle">
            Related articles on Next.js, React Native and full-stack delivery.
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

      <JsonLd data={postSchema} />
    </main>
  )
}
