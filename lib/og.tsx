import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

type OgCardProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  background?: string;
};

// Shared 1200x630 social card so every page gets a correctly sized OG image.
export function renderOgCard({
  eyebrow,
  title,
  subtitle = `${siteConfig.author.name} · ${siteConfig.author.role}`,
  background = "#ffffff",
}: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background,
          border: "16px solid #000000",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            border: "4px solid #000000",
            borderRadius: 999,
            padding: "8px 24px",
            background: "#ffeb3b",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 48 ? 64 : 80,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#000000",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span>{subtitle}</span>
          <span style={{ fontWeight: 700 }}>
            {new URL(siteConfig.siteUrl).host}
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}

// Pages that define their own `openGraph` block don't inherit app/opengraph-image,
// so they reference the generated site card explicitly.
export const siteOgImage = {
  url: "/opengraph-image",
  width: ogSize.width,
  height: ogSize.height,
  alt: `${siteConfig.author.name}, ${siteConfig.author.role}`,
};
