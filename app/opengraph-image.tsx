import { ogSize, renderOgCard } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = `${siteConfig.author.name}, ${siteConfig.author.role}`;

export default function OpenGraphImage() {
  return renderOgCard({
    eyebrow: `${siteConfig.author.location.city}, India`,
    title: `${siteConfig.author.name}: ${siteConfig.author.role}`,
    subtitle: "Next.js · React · Node.js · React Native · Expo",
  });
}
