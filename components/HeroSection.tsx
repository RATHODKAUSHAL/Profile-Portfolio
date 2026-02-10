"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Facebook, Instagram, Mail, Send } from "lucide-react";
import Image from "next/image";
import profileImage from "@/public/Images/profileimage.jpeg"
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 bg-gradient-to-b from-dark-primary via-dark-primary to-dark-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-8xl gap-5 font-bold font-fira text-light-primary leading-tight">
                Full-stack
                <br />
                <span className="text-5xl flex flex-row md:text-6xl lg:text-8xl gap-5 font-bold font-fira text-light-primary leading-tight">Developer</span>
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-light-secondary font-sans text-base md:text-xl max-w-md">
                  My goal is to{" "}
                  <span className="text-light-primary italic">
                    write maintainable, clean
                  </span>{" "}
                  and{" "}
                  <span className="text-light-primary italic">
                    understandable code
                  </span>{" "}
                  to process development was enjoyable.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <SocialLink
                href="https://github.com/RATHODKAUSHAL"
                icon={<Github className="h-5 w-5" />}
                label="Github"
              />
              <SocialLink
                href="https://www.linkedin.com/in/kaushal-rathod-dev/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/mr.kaushal_rathod/"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="mailto:rathodkaushal2001@email.com"
                icon={<Mail className="h-5 w-5" />}
                label="Email"
              />
            </div>
          </div>

          <div>
            {/* Right Content - Featured Project Card */}
            <div className="relative animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                {/* Decorative circles */}
                <div className="absolute w-1/2 -inset-4 bg-gradient-to-r from-light-secondary/20 to-dark-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>

                {/* Card */}
                {/* Card Image/Gradient */}
                <div className="relative">
                  <Image
                    src={profileImage}
                    alt="Kaushal Rathod"
                    className="rounded-2xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                    priority
                  />
                </div>

              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                <button className="w-2 h-2 rounded-full bg-light-primary"></button>
                <button className="w-2 h-2 rounded-full bg-dark-secondary"></button>
                <button className="w-2 h-2 rounded-full bg-dark-secondary"></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Social Link Component
const SocialLink = ({
  href,
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-dark-secondary/50 hover:bg-dark-secondary border border-dark-secondary hover:border-light-secondary/30 rounded-full transition-all duration-300 group"
    >
      <span className="text-light-secondary group-hover:text-light-primary transition-colors">
        {icon}
      </span>
      <span className="text-light-secondary group-hover:text-light-primary font-sans text-sm transition-colors">
        {label}
      </span>
    </a>
  );
};

export default HeroSection;