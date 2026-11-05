import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

// Update a route's date whenever that page's content changes.
const routes = [
  { path: "", updated: "2026-11-05", priority: 1, changeFrequency: "weekly" },
  { path: "/about", updated: "2026-11-05", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", updated: "2026-11-05", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects/fleetconnekt", updated: "2026-11-05", priority: 0.8, changeFrequency: "monthly" },
  { path: "/experience", updated: "2026-11-05", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", updated: "2026-11-05", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resume", updated: "2026-11-05", priority: 0.7, changeFrequency: "monthly" },
  { path: "/skills", updated: "2026-11-05", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", updated: "2026-11-05", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", updated: "2026-11-05", priority: 0.6, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: new Date(route.updated),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${siteConfig.siteUrl}/blog/${post.slug}/opengraph-image`],
  }));

  return [...staticPages, ...blogPages];
}
