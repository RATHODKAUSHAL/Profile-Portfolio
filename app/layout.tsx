import type { Metadata, Viewport } from "next"
import { Fira_Code, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/ClientLayout"
import JsonLd from "@/components/JsonLd"
import Script from "next/script"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { personId, websiteId } from "@/lib/seo"

// Fonts
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

// ✅ CORRECT place for viewport + themeColor
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffeb3b",
}

// ✅ metadata WITHOUT viewport / themeColor
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: "/about" }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Kaushal Rathod's developer blog" }],
    },
  },
  icons: {
    icon: "/Images/user.png",
    apple: "/Images/user.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/Images/profileimage.jpeg",
        width: 1600,
        height: 1200,
        alt: "Kaushal Rathod portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/Images/profileimage.jpeg"],
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.author.image),
    email: siteConfig.author.email,
    sameAs: siteConfig.author.sameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressRegion: siteConfig.author.location.region,
      addressCountry: siteConfig.author.location.countryCode,
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "React Native",
      "Expo",
      "Android application development",
      "PostgreSQL",
      "Technical SEO",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    alternateName: "Kaushal Rathod Portfolio",
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.author.name,
    },
    publisher: { "@id": personId },
    inLanguage: "en-US",
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${openSans.variable} antialiased`}
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
