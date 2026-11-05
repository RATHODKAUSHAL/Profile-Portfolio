import { ogSize, renderOgCard } from "@/lib/og";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Blog post cover";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return renderOgCard({
    eyebrow: post ? `${post.category} · ${post.readTime}` : "Developer Blog",
    title: post?.title ?? "Developer Blog",
    background: "#fff6c0",
  });
}
