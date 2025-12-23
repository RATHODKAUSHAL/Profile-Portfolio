import type { Metadata, Viewport } from "next"
import { Fira_Code, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/ClientLayout"

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
  themeColor: "#0f172a",
}

// ✅ metadata WITHOUT viewport / themeColor
export const metadata: Metadata = {
  title: "Kaushal Rathod - Full-stack Developer",
  description:
    "Portfolio of Kaushal Rathod, a full-stack developer with 2+ years of experience specializing in React, Vue, Node.js, and modern web technologies.",
  keywords: [
    "Full-stack Developer",
    "React",
    "Vue",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Kaushal Rathod" }],
  creator: "Kaushal Rathod",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaushalrathod.com/",
    title: "Kaushal Rathod - Full-stack Developer",
    description:
      "Portfolio showcasing projects and expertise in full-stack development",
    siteName: "Kaushal Rathod Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushal Rathod - Full-stack Developer",
    description:
      "Portfolio showcasing projects and expertise in full-stack development",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
