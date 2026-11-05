import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Syne } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/ClientLayout"
import JsonLd from "@/components/JsonLd"
import Script from "next/script"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { personId, websiteId } from "@/lib/seo"

// Fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

// ✅ CORRECT place for viewport + themeColor
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffeb3b",
}

// ✅ metadata WITHOUT viewport / themeColor
// Canonicals are set per page so new routes never inherit the home URL.
// OG/Twitter images come from app/opengraph-image.tsx; icons from app/icon.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: "/about" }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  category: "technology",
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Kaushal Rathod's developer blog" }],
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "GianrNYJnwhD4DHgw_SMpVb-c5zT7GFtPq_vKJs98do",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { author } = siteConfig

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: author.name,
    alternateName: author.alternateName,
    givenName: author.givenName,
    familyName: author.familyName,
    jobTitle: author.role,
    description: author.longBio,
    url: siteConfig.siteUrl,
    mainEntityOfPage: absoluteUrl("/about"),
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(author.image),
      width: 1600,
      height: 1200,
    },
    email: `mailto:${author.email}`,
    sameAs: author.sameAs,
    nationality: { "@type": "Country", name: author.location.country },
    address: {
      "@type": "PostalAddress",
      addressLocality: author.location.city,
      addressRegion: author.location.region,
      addressCountry: author.location.countryCode,
    },
    worksFor: {
      "@type": "Organization",
      name: author.employer.name,
      url: author.employer.url,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: author.role,
      occupationLocation: { "@type": "City", name: author.location.city },
      skills:
        "Next.js, React, TypeScript, Node.js, React Native, Expo, Laravel, PostgreSQL, MySQL",
    },
    knowsAbout: [
      "Full-stack web development",
      "Mobile app development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Laravel",
      "PHP",
      "React Native",
      "Expo",
      "Android application development",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Supabase",
      "REST APIs",
      "Logistics software",
      "Technical SEO",
      "Web performance",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "project enquiries",
      email: author.email,
      url: absoluteUrl("/contact"),
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    alternateName: "Kaushal Rathod Portfolio",
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: { "@id": personId },
    publisher: { "@id": personId },
    inLanguage: "en-US",
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {author.sameAs.map((href) => (
          <link key={href} rel="me" href={href} />
        ))}
      </head>
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} antialiased`}
      >
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-779KQ6LCER"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-779KQ6LCER');
        `}
      </Script>
        <JsonLd data={[personSchema, websiteSchema]} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
