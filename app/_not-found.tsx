import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "404 – Page Not Found | Kaushal Rathod",
  description: "The page you are looking for does not exist.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">404 – Page Not Found</h1>
    </div>
  )
}
