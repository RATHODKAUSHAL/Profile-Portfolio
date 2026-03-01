"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      if (media.matches) {
        setIsMenuOpen(false);
      }
    };
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-4 border-black bg-white/90 backdrop-blur-[2px]">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="soft-card soft-shadow-sm flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold sm:h-11 sm:w-11">
            KR
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-base font-semibold sm:text-lg">Kaushal Rathod</div>
            <div className="truncate text-[10px] font-semibold uppercase text-black/60 sm:text-xs">
              Full Stack Developer
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold uppercase md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <Link href="/contact" className="soft-btn md:inline-flex">
            Contact
          </Link>
          </div>
          <div className="md:hidden">
            <button
            type="button"
            className="soft-btn soft-btn-accent h-10 min-h-0 px-3 py-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t-4 border-black bg-white px-4 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[480px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 text-sm font-semibold uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="soft-card soft-shadow-sm px-4 py-3"
              >
                {link.name}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
