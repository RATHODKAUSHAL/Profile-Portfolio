import type { Metadata, Viewport } from "next"
import { Fira_Code, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/ClientLayout"
import Script from "next/script"

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
  title: "Developer Portfolio - Full Stack Developer",
  description:
    "Personal developer portfolio with soft Neo-Brutalist UI and modern engineering focus.",
  keywords: [
    "Full-stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Kaushal Rathod" }],
  creator: "Kaushal Rathod",
  manifest: "/manifest.json",
  icons: {
    icon: "/Images/user.png",
    apple: "/Images/user.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com/",
    title: "Developer Portfolio - Full Stack Developer",
    description:
      "Portfolio showcasing projects and expertise in full-stack development",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio - Full Stack Developer",
    description:
      "Portfolio showcasing projects and expertise in full-stack development",
  },
  // 
  //  verification: {
  //   google: "GianrNYJnwhD4DHgw_SMpVb-c5zT7GFtPq_vKJs98do",
  // },
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
