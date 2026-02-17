export type BlogContentBlock =
  | {
      type: "heading"
      text: string
    }
  | {
      type: "paragraph"
      text: string
    }
  | {
      type: "list"
      items: string[]
    }
  | {
      type: "code"
      language: string
      code: string
    }
  | {
      type: "tip" | "note" | "example"
      title: string
      text: string
    }
  | {
      type: "quote"
      text: string
      author: string
    }

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  dateLabel: string
  readTime: string
  category: string
  tags: string[]
  keywords: string[]
  author: {
    name: string
    title: string
  }
  coverImage: string
  ogImage: string
  content: BlogContentBlock[]
}

export const geoKeywords = [
  "India developers",
  "Gujarat developers",
  "Ahmedabad developer community",
  "JavaScript developers India",
  "Next.js developers India",
  "Full-stack developers India",
]

export const baseKeywords = [
  "developer blog",
  "full-stack engineering",
  "Next.js",
  "React",
  "TypeScript",
  "web performance",
  "developer productivity",
  "system design",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-performance-playbook-india",
    title: "Next.js Performance Playbook for Indian Developer Teams",
    description:
      "A practical guide for JavaScript developers in India to ship faster Next.js apps with smart caching, image strategy, and performance budgets.",
    date: "2025-12-18",
    dateLabel: "Dec 18, 2025",
    readTime: "8 min read",
    category: "Next.js",
    tags: ["Next.js", "Performance", "India Devs"],
    keywords: [
      ...baseKeywords,
      ...geoKeywords,
      "Next.js performance",
      "IN developer teams",
      "SSR caching",
      "Core Web Vitals",
    ],
    author: {
      name: "Kaushal Rathod",
      title: "Full Stack Developer",
    },
    coverImage: "/Images/image1.jpg",
    ogImage: "/Images/image1.jpg",
    content: [
      {
        type: "paragraph",
        text:
          "This playbook is built for JavaScript developers in India who need consistent Next.js performance without over-engineering. It blends Core Web Vitals discipline with pragmatic choices that work for distributed teams across Gujarat, Ahmedabad, and beyond.",
      },
      {
        type: "heading",
        text: "1. Start with a performance budget",
      },
      {
        type: "paragraph",
        text:
          "Define acceptable limits for LCP, CLS, and TBT early. Make it visible in every PR so the full-stack developers India teams can catch regressions before they reach production.",
      },
      {
        type: "tip",
        title: "Tip: Performance budget checklist",
        text:
          "Agree on < 2.5s LCP for mobile, CLS < 0.1, and JS bundles under 180 KB for key routes.",
      },
      {
        type: "heading",
        text: "2. Use smart caching at the edge",
      },
      {
        type: "paragraph",
        text:
          "Prefer ISR or partial pre-rendering for content that changes weekly. It keeps the experience fast for the Ahmedabad developer community without sacrificing freshness.",
      },
      {
        type: "code",
        language: "tsx",
        code:
          "export const revalidate = 3600\n\nexport default async function Page() {\n  const data = await fetch(\"https://api.example.com/metrics\", {\n    next: { revalidate: 3600 },\n  })\n  return <Dashboard data={await data.json()} />\n}\n",
      },
      {
        type: "note",
        title: "Note on bundle size",
        text:
          "Audit third-party analytics scripts. In many India developer teams, the fastest win is removing unused SDKs.",
      },
      {
        type: "heading",
        text: "3. Ship images with intention",
      },
      {
        type: "paragraph",
        text:
          "Standardize aspect ratios and use responsive `sizes`. It reduces layout shift and keeps visual consistency on mobile.",
      },
      {
        type: "example",
        title: "Example: consistent image sizes",
        text:
          "Use 16:9 or 4:3 ratios across blog cards and hero sections, then set `sizes` to match your grid.",
      },
    ],
  },
  {
    slug: "system-design-notes-for-geo-distributed-teams",
    title: "System Design Notes for Geo-Distributed Product Teams",
    description:
      "Notes on designing resilient APIs for teams across India, Gujarat, and global developer communities with clear ownership boundaries.",
    date: "2025-11-29",
    dateLabel: "Nov 29, 2025",
    readTime: "7 min read",
    category: "Architecture",
    tags: ["Architecture", "APIs", "Distributed Teams"],
    keywords: [
      ...baseKeywords,
      ...geoKeywords,
      "system design",
      "service boundaries",
      "API resilience",
    ],
    author: {
      name: "Kaushal Rathod",
      title: "Full Stack Developer",
    },
    coverImage: "/Images/image2.jpg",
    ogImage: "/Images/image2.jpg",
    content: [
      {
        type: "paragraph",
        text:
          "When teams span India developers, Gujarat developers, and global partners, system design clarity becomes a growth multiplier. These notes focus on ownership, observability, and pragmatic SLA design.",
      },
      {
        type: "heading",
        text: "Define service ownership early",
      },
      {
        type: "paragraph",
        text:
          "Every service should have a single accountable team with a clear on-call rotation. It avoids blurred responsibility across full-stack developers India squads.",
      },
      {
        type: "note",
        title: "Ownership map",
        text:
          "Publish a simple ownership table in your repo so new Ahmedabad developers can ramp up fast.",
      },
      {
        type: "heading",
        text: "Contract-first APIs prevent surprises",
      },
      {
        type: "paragraph",
        text:
          "A shared API contract prevents breaking changes and removes guesswork during cross-timezone handoffs.",
      },
      {
        type: "code",
        language: "yaml",
        code:
          "paths:\n  /v1/projects:\n    get:\n      summary: List projects\n      responses:\n        \"200\":\n          description: OK\n",
      },
      {
        type: "example",
        title: "Example: reliability guardrail",
        text:
          "Create a lightweight SLO sheet with uptime, response time, and error budget targets for each service.",
      },
      {
        type: "quote",
        text:
          "Clarity in service boundaries is the fastest way to scale engineering output.",
        author: "Architecture notes",
      },
    ],
  },
  {
    slug: "frontend-writing-for-developer-communities",
    title: "Frontend Writing That Resonates with Developer Communities",
    description:
      "How to craft technical blog posts, examples, and CTAs that engage the Ahmedabad developer community and JavaScript developers in India.",
    date: "2025-10-11",
    dateLabel: "Oct 11, 2025",
    readTime: "6 min read",
    category: "Content",
    tags: ["Content", "Developer Experience", "Community"],
    keywords: [
      ...baseKeywords,
      ...geoKeywords,
      "developer content strategy",
      "technical writing",
      "developer advocacy",
    ],
    author: {
      name: "Kaushal Rathod",
      title: "Full Stack Developer",
    },
    coverImage: "/Images/image3.jpg",
    ogImage: "/Images/image3.jpg",
    content: [
      {
        type: "paragraph",
        text:
          "Developer communities in India respond best to clear outcomes, quick wins, and grounded examples. This post breaks down how to write with that expectation in mind.",
      },
      {
        type: "heading",
        text: "Lead with outcomes",
      },
      {
        type: "paragraph",
        text:
          "Start each section with the result readers will get. It keeps JavaScript developers India focused and engaged.",
      },
      {
        type: "tip",
        title: "Tip: Use checkpoints",
        text:
          "Add quick checkpoints between sections to reinforce learning, especially for mobile readers.",
      },
      {
        type: "heading",
        text: "Examples beat long theory",
      },
      {
        type: "paragraph",
        text:
          "Use short, scannable code snippets with an action-oriented explanation to support practical learning.",
      },
      {
        type: "code",
        language: "tsx",
        code:
          "export function CTA() {\n  return (\n    <section className=\"cta\">\n      <h3>Ready to ship?</h3>\n      <p>Start with one small, measurable improvement today.</p>\n    </section>\n  )\n}\n",
      },
      {
        type: "example",
        title: "Example: developer CTA",
        text:
          "Invite readers to download a checklist, view a code sample, or join a local meetup.",
      },
    ],
  },
]

export const getBlogPosts = () => blogPosts

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug)
