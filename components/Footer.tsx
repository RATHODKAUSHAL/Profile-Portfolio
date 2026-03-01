"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/RATHODKAUSHAL",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/kaushal-rathod-dev/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:rathodkaushal2001@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t-4 border-black bg-white">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="soft-btn soft-btn-accent h-12 w-12"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="text-xl font-semibold sm:text-2xl">Kaushal Rathod</div>
              <div className="text-sm font-semibold uppercase text-black/60">
                Full Stack Developer
              </div>
            </Link>
            <p className="text-sm text-black/70">
              Building friendly, bold web experiences with soft Neo-Brutalist
              styling and modern engineering practices.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-black/60">
              Pages
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-black/60">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-black/70">
              <span>rathodkaushal2001@gmail.com</span>
              <span>Remote / Worldwide</span>
              <span>Available for collaborations</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-black/60">
              Follow
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="soft-card soft-shadow-sm flex h-11 w-11 items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-[3px] border-black/80 pt-6 text-xs font-semibold uppercase text-black/60 md:flex-row md:items-center">
          <div>&copy; {currentYear} Kaushal Rathod Portfolio</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
