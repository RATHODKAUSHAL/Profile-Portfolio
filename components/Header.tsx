"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-4 border-black bg-white/90 backdrop-blur-[2px]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="soft-card soft-shadow-sm flex h-11 w-11 items-center justify-center text-sm font-bold">
            DN
          </div>
          <div className="leading-tight">
            <div className="text-lg font-semibold">Developer Name</div>
            <div className="text-xs font-semibold uppercase text-black/60">
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

        <div className="flex items-center gap-3">
          <Link href="/contact" className="soft-btn hidden md:inline-flex">
            Contact
          </Link>
          <button
            type="button"
            className="soft-btn soft-btn-accent md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t-4 border-black bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase">
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
      )}
    </header>
  );
};

export default Header;
