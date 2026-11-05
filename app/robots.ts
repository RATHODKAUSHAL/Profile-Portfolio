import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Search engines and AI assistants are explicitly welcome: a portfolio wants
// maximum visibility in search results and AI answers.
const searchAndAiBots = [
  "Googlebot",
  "Bingbot",
  "Applebot",
  "DuckDuckBot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: searchAndAiBots, allow: "/", disallow: ["/api/"] },
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
