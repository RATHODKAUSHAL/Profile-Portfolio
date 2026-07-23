import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const posts = getBlogPosts()
    .map(
      (post) =>
        `- [${post.title}](${siteConfig.siteUrl}/blog/${post.slug}): ${post.description}`,
    )
    .join("\n");

  const content = `# ${siteConfig.name}

> ${siteConfig.description}

Kaushal Rathod is a full stack and mobile application developer in Ahmedabad, India. He builds web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo, Android, and PostgreSQL.

## Primary pages

- [Home](${siteConfig.siteUrl}/): Portfolio overview and featured work.
- [About](${siteConfig.siteUrl}/about): Developer background and focus.
- [Skills](${siteConfig.siteUrl}/skills): Web, mobile, backend, database, and tooling experience.
- [Projects](${siteConfig.siteUrl}/projects): Selected production projects and outcomes.
- [Experience](${siteConfig.siteUrl}/experience): Professional roles, responsibilities, and technologies.
- [Blog](${siteConfig.siteUrl}/blog): Practical engineering articles.
- [Contact](${siteConfig.siteUrl}/contact): Collaboration and project enquiries.

## Articles

${posts}

## Author

- Name: ${siteConfig.author.name}
- Role: Full Stack & Mobile Application Developer
- GitHub: ${siteConfig.author.sameAs[0]}
- LinkedIn: ${siteConfig.author.sameAs[1]}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
