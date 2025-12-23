"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowUp, Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contacts" }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:nik.khvat@gmail.com", label: "Email" },
    { icon: <Send className="h-5 w-5" />, href: "https://t.me", label: "Telegram" }
  ];

  return (
    <footer className="relative bg-dark-primary border-t border-dark-secondary">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-light-primary text-dark-primary hover:bg-light-secondary shadow-lg hover:shadow-xl transition-all duration-300 group w-12 h-12"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="font-fira text-light-primary">
                <h3 className="text-2xl font-bold">Nikita</h3>
                <p className="text-lg text-light-secondary">Khvatov</p>
              </div>
            </Link>
            <p className="text-light-secondary font-sans text-sm leading-relaxed">
              Full-stack Developer passionate about creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex items-center gap-2 text-light-secondary font-sans text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
              <span>in Georgia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-light-primary font-fira text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light-secondary hover:text-light-primary font-sans text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-light-primary font-fira text-lg font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nik.khvat@gmail.com"
                  className="text-light-secondary hover:text-light-primary font-sans text-sm transition-colors duration-300 block"
                >
                  nik.khvat@gmail.com
                </a>
              </li>
              <li>
                <span className="text-light-secondary font-sans text-sm block">
                  Tbilisi, Georgia
                </span>
              </li>
              <li>
                <span className="text-light-secondary font-sans text-sm block">
                  Available for freelance
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-light-primary font-fira text-lg font-semibold mb-4">
              Follow Me
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-dark-secondary border border-dark-secondary rounded-xl hover:border-light-primary hover:bg-dark-secondary/70 text-light-secondary hover:text-light-primary transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 inline-block transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter/CTA */}
            <div className="mt-6 p-4 bg-dark-secondary/30 border border-dark-secondary rounded-xl">
              <p className="text-light-secondary font-sans text-xs mb-2">
                Interested in working together?
              </p>
              <Link href="#contacts">
                <Button
                  size="sm"
                  className="w-full bg-light-primary text-dark-primary hover:bg-light-secondary rounded-lg font-sans text-sm"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-secondary mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-light-secondary font-sans text-sm text-center md:text-left">
            © {currentYear} Nikita Khvatov. All rights reserved.
          </p>

          {/* Tech Stack */}
          <div className="flex items-center gap-2 text-light-secondary font-sans text-xs">
            <span>Built with</span>
            <span className="px-2 py-1 bg-dark-secondary rounded text-light-primary font-fira">
              Next.js
            </span>
            <span className="px-2 py-1 bg-dark-secondary rounded text-light-primary font-fira">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-dark-secondary rounded text-light-primary font-fira">
              Tailwind
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-light-secondary hover:text-light-primary font-sans text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-light-secondary hover:text-light-primary font-sans text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;