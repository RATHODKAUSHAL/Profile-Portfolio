import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // The dev server needs eval for fast refresh, so the CSP only applies in production.
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
    : []),
];

// Old URLs that may be indexed or shared, mapped to their new keyword-friendly paths.
const movedPaths: Array<[string, string]> = [
  ["/fleetconnekt", "/projects/fleetconnekt"],
  ["/Images/profile.png", "/Images/kaushal-rathod-software-developer.webp"],
  ["/Images/profileimage.jpeg", "/Images/kaushal-rathod-outdoor-portrait.webp"],
  ["/Images/48jobs.png", "/Images/48jobs-logistics-job-portal.webp"],
  ["/Images/Trukky-LMS.png", "/Images/trukky-lms-dashboard.webp"],
  ["/Images/image1.jpg", "/Images/laptop-coffee-workspace.webp"],
  ["/Images/image2.jpg", "/Images/laptop-working-from-cafe.webp"],
  ["/Images/image3.jpg", "/Images/developer-coding-in-cafe.webp"],
  ["/Images/Office.jpg", "/Images/office-desk-setup.webp"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return movedPaths.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
