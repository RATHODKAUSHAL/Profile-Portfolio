import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteOgImage } from "@/lib/og";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";
import ContactForm from "./ContactForm";

const pageTitle = "Hire Kaushal Rathod | Contact a Software Developer";
const pageDescription =
  "Hire Kaushal Rathod, a software developer in Ahmedabad, for your web or React Native app. Share your brief, budget and timeline, and get a reply by email.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/contact"),
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteOgImage.url],
  },
};

const steps = [
  "Send a short brief: goals, timeline and any links or designs you already have.",
  "I review it and reply by email with questions and a proposed scope.",
  "We agree on the plan, milestones and next steps before any work starts.",
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${absoluteUrl("/contact")}#page`,
        name: `Contact ${siteConfig.author.name}`,
        description: pageDescription,
        url: absoluteUrl("/contact"),
        mainEntity: { "@id": personId },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };

  return (
    <main className="soft-grid-bg">
      <JsonLd data={contactSchema} />
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="section-label w-fit bg-[#ffeb3b]">Contact</div>
            <h1 className="display-font text-[clamp(2rem,7vw,3.75rem)] leading-[0.95]">
              Hire Kaushal Rathod for your web or mobile app
            </h1>
            <p className="text-base leading-7 text-black/75 sm:text-lg">
              I&apos;m Kaushal Rathod, a software developer building web and
              mobile apps for teams worldwide. Share your project brief, budget
              and timeline, and I&apos;ll follow up with clear scope and next
              steps. Not sure yet?{" "}
              <Link className="font-bold underline underline-offset-4" href="/projects">
                See my projects first
              </Link>
              .
            </p>

            <section aria-labelledby="hire-title">
              <h2 id="hire-title" className="text-xl font-bold">
                How can I hire Kaushal Rathod?
              </h2>
              <ol className="mt-3 grid list-decimal gap-2 pl-5 text-sm leading-6 text-black/75">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="other-ways-title">
              <h2 id="other-ways-title" className="text-xl font-bold">
                Other ways to reach me
              </h2>
              <div className="mt-3 flex flex-wrap gap-3">
                <a className="soft-btn" href={`mailto:${siteConfig.author.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" /> {siteConfig.author.email}
                </a>
                <a
                  className="soft-btn"
                  href={siteConfig.author.sameAs[1]}
                  rel="me noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
              </div>
              <p className="mt-3 text-sm text-black/70">
                Based in Ahmedabad, India (IST, UTC+5:30). Working remotely with
                teams worldwide.
              </p>
            </section>
          </div>
          <div className="lg:col-span-7">
            <div className="soft-section bg-white p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
