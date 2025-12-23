"use client";

import React from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";
const AboutSection = () => {
  const frontendSkills = [
    "TypeScript", "React", "Vue", "Veux", "Redux Toolkit", "Next.js",
    "Nuxt", "Jest", "GraphQL", "React Native", "PuggetJS", "Enzyme"
  ];

  const stylesSkills = [
    "SCSS", "SASS", "PostCSS", "Ant.d", "Mui", "Material UI"
  ];

  const backendSkills = [
    "Golang", "Gin", "GORM", "PostgreSQL", "MySQL", "MongoDB", "gRPC",
    "Redis", "Kafka", "Node", "Nest", "TypeORM", "Microservices"
  ];

  const devOpsSkills = [
    "Nginx", "Brotli", "Docker", "(CI/CD)", "k8s", "Bash"
  ];

  const favoriteTools = [
    "Brelli", "Docker", "(CI/CD)", "k8s", "Bash"
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-dark-primary">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-fira text-light-secondary mb-4 tracking-widest">
            ... /About me ...
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Introduction & Photo */}
          <div className="space-y-8 animate-fadeIn">
            {/* Intro Text */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-fira font-semibold text-light-primary">
                Hello! I'm Nikita, I'm a{" "}
                <span className="italic text-light-primary">full-stack developer</span>.
              </h3>
              <p className="text-light-secondary font-sans text-base leading-relaxed">
                More than <span className="text-light-primary font-semibold">5 years</span> experience.
              </p>
            </div>

            {/* Photo */}
            <div className="relative group max-w-md">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-light-secondary/10 to-dark-secondary/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-dark-secondary group-hover:border-light-secondary/30 transition-all duration-300">
                <div className="aspect-[3/4] bg-dark-secondary relative">
                  {/* Placeholder for developer photo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-primary/80"></div>
                  <Image
                    src="/Images/user.png"
                    alt="Nikita Khvatov - Full-stack Developer"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code2 className="h-20 w-20 text-light-secondary/30 mx-auto mb-4" />
                      <p className="text-light-secondary/50 font-fira text-sm">
                        Developer Photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            {/* Front-end Skills */}
            <SkillCategory
              title="Front-end"
              skills={frontendSkills}
            />

            {/* Styles Skills */}
            <SkillCategory
              title="Styles"
              skills={stylesSkills}
            />

            {/* Back-end Skills */}
            <SkillCategory
              title="Back-end"
              skills={backendSkills}
            />

            {/* DevOps Skills */}
            <SkillCategory
              title="DevOps"
              skills={devOpsSkills}
            />

            {/* Favorite Tools Note */}
            <div className="flex items-start gap-3 bg-dark-secondary/30 border border-dark-secondary rounded-2xl p-4">
              <div className="mt-1">
                <div className="w-6 h-6 rounded-full bg-light-primary/10 flex items-center justify-center">
                  <Code2 className="h-4 w-4 text-light-primary" />
                </div>
              </div>
              <div>
                <p className="text-light-secondary font-sans text-sm leading-relaxed">
                  Some of my{" "}
                  <span className="text-light-primary italic">favorite technologies</span>,
                  <br />
                  topics, or tools that I worked with:
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {favoriteTools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-primary border border-dark-secondary rounded-full text-light-primary font-fira text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Category Component
const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: string[];
}) => {
  return (
    <div className="bg-light-primary/5 backdrop-blur-sm border border-dark-secondary rounded-2xl p-6 hover:border-light-secondary/30 transition-all duration-300">
      <h4 className="text-light-primary font-fira text-lg font-semibold mb-4">
        {title}
      </h4>
      <div className="text-light-secondary font-fira text-sm leading-relaxed">
        {skills.join(" / ")}
      </div>
    </div>
  );
};

export default AboutSection;