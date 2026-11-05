import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const { author, siteUrl } = siteConfig;

export const llmsSummary = author.longBio;

export const keyFacts = [
  `Full name: ${author.name}`,
  `Role: ${author.role} (full-stack web and React Native mobile apps)`,
  `Also known as: ${author.alternateName.join(", ")}`,
  `Location: ${author.location.city}, ${author.location.region}, ${author.location.country} (IST, UTC+5:30). Works remotely worldwide.`,
  `Current position: Full Stack Developer at ${author.employer.name} (February 2025 – present)`,
  "Previous: Frontend Developer, Maze Technolabs (March 2024 – January 2025); Junior Developer Intern, Maze Technolabs (June 2023 – March 2024)",
  "Experience: 3+ years of professional software development (since June 2023)",
  "Core stack: Next.js, React, TypeScript, JavaScript, Tailwind CSS, Node.js, Express, Laravel, PHP, REST APIs, PostgreSQL, MySQL, Prisma, Supabase, React Native, Expo, Android",
  "Services: full-stack web applications, React Native / Expo mobile apps, performance and technical SEO",
  `Contact: ${author.email} · ${siteUrl}/contact`,
  `GitHub: ${author.sameAs[0]}`,
  `LinkedIn: ${author.sameAs[1]}`,
];

export const llmsProjects = [
  `[FleetConnekt](${siteUrl}/projects/fleetconnekt): Mobile-first logistics platform for Indian highway transport, with a verified transporter directory, digital lorry receipt generation and connected fleet operations.`,
  `[48jobs.com](https://48jobs.com): Logistics hiring platform with candidate onboarding, role-based access and verification workflows (Next.js, Node.js, PostgreSQL).`,
  `[Trukky LMS](${siteUrl}/projects): Internal learning management system for logistics teams with progress tracking, content management and analytics (Laravel, React, TypeScript, MySQL).`,
  `[Zestify](${siteUrl}/projects): E-commerce storefront and admin suite with product catalog workflows and checkout UX improvements (Next.js, Prisma, PostgreSQL, Tailwind CSS).`,
];

export const llmsPages = [
  `[Home](${siteUrl}/): Overview, featured work and FAQ`,
  `[About](${siteUrl}/about): Who Kaushal Rathod is, roles and approach`,
  `[Services](${siteUrl}/services): Software development services in Ahmedabad and worldwide: web apps, mobile apps, APIs, performance and SEO`,
  `[Resume](${siteUrl}/resume): One-page resume with experience, skills and projects`,
  `[Experience](${siteUrl}/experience): Roles, dates, responsibilities and technologies`,
  `[Skills](${siteUrl}/skills): Technologies and how each is used`,
  `[Projects](${siteUrl}/projects): Project summaries with stack and outcomes`,
  `[Blog](${siteUrl}/blog): Engineering articles`,
  `[Contact](${siteUrl}/contact): Hiring and project enquiries`,
];

export const llmsArticles = () =>
  getBlogPosts().map(
    (post) => `[${post.title}](${siteUrl}/blog/${post.slug}): ${post.description}`,
  );

export const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export const textResponse = (content: string) =>
  new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
