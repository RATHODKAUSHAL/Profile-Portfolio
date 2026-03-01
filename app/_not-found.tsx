import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Developer Portfolio",
  description: "The page you are looking for does not exist.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffeb3b",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <h1 className="text-xl font-semibold sm:text-2xl">404 - Page Not Found</h1>
    </div>
  );
}
