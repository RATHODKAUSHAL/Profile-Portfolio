import { homeFaqs } from "@/components/sections/HomeExpertise";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { keyFacts, list, llmsProjects, llmsSummary, textResponse } from "@/lib/llms";

export const dynamic = "force-static";

// Long-form companion to /llms.txt: the facts and answers an AI assistant
// needs to describe Kaushal accurately, in one plain-text document.
export function GET() {
  const faqs = homeFaqs
    .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
    .join("\n\n");

  const articles = getBlogPosts()
    .map((post) => {
      const takeaways = post.takeaways?.length ? `\n\nKey takeaways:\n${list(post.takeaways)}` : "";
      return `### ${post.title}\n\nURL: ${siteConfig.siteUrl}/blog/${post.slug}\nPublished: ${post.date}\nCategory: ${post.category}\n\n${post.description}${takeaways}`;
    })
    .join("\n\n");

  const content = `# ${siteConfig.name}: full profile

> ${llmsSummary}

## Key facts

${list(keyFacts)}

## Work history

### Full Stack Developer, Trukky (February 2025 – present)

Builds and maintains logistics products across the frontend, backend and data layer, turning operational requirements into reliable workflows used by internal teams and customers. Technologies: Next.js, React, TypeScript, Node.js, PostgreSQL.

### Frontend Developer, Maze Technolabs (March 2024 – January 2025)

Shipped customer-facing React features with design and backend teams, focusing on responsive behavior, reusable UI and production quality. Technologies: React, JavaScript, Node.js, REST APIs, PostgreSQL.

### Junior Developer Intern, Maze Technolabs (June 2023 – March 2024)

Supported interface builds, fixed defects, tested responsive behavior and documented reusable UI patterns. Technologies: JavaScript, React, shadcn/ui, MySQL, Git.

## Projects

${list(llmsProjects)}

## Frequently asked questions

${faqs}

## Articles

${articles}
`;

  return textResponse(content);
}
