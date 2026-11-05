import { siteConfig } from "@/lib/site";
import {
  keyFacts,
  list,
  llmsArticles,
  llmsPages,
  llmsProjects,
  llmsSummary,
  textResponse,
} from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const content = `# ${siteConfig.name}

> ${llmsSummary}

## Key facts

${list(keyFacts)}

## Projects

${list(llmsProjects)}

## Pages

${list(llmsPages)}

## Articles

${list(llmsArticles())}

## Optional

- [Full text for LLMs](${siteConfig.siteUrl}/llms-full.txt)
- [Sitemap](${siteConfig.siteUrl}/sitemap.xml)
- [RSS feed](${siteConfig.siteUrl}/feed.xml)
`;

  return textResponse(content);
}
