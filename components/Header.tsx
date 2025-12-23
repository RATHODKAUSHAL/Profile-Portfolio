"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Contacts", href: "#contacts" },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-md border-b border-dark-secondary">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col font-fira text-light-primary">
            <span title="Kaushal Rathod" className="text-lg font-semibold">KR.</span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-light-secondary font-semibold hover:text-light-primary transition-colors duration-300 font-sans text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Language & Theme Toggle */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-dark-secondary"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-light-primary" />
              ) : (
                <Moon className="h-5 w-5 text-dark-primary" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-dark-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-light-primary" />
              ) : (
                <Menu className="h-5 w-5 text-light-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dark-secondary pt-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-light-secondary hover:text-light-primary transition-colors duration-300 font-sans text-sm"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 text-xs font-sans text-light-secondary pt-2 border-t border-dark-secondary">
                <button className="hover:text-light-primary transition-colors">
                  En
                </button>
                <button className="hover:text-light-primary transition-colors">
                  Ge
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;