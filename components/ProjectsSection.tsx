"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Gostat from "@/public/Images/image1.jpg"
// Project type definition
interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  link?: string;
  github?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "Gostat",
      category: "Backend",
      tags: ["Golang", "TypeScript", "Gin", "React.Js", "PostgreSQL", "Redis"],
      description: "GOstat is cutting-edge, denormalized shared application using the HTTP/HTTPS, HTTP regular authentication with JWT, and centralized database. This project exemplifies several key microservices, each contributing to the overall functionality and dynamism.",
      image: "/Images/user.png",
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      id: "2",
      title: "Kana Master",
      category: "Frontend",
      tags: ["TypeScript", "ReactNative", "Redux Toolkit", "i18n", "iOS"],
      description: "Kana Master is an iOS application designed for learning and memorizing Japanese kana and preferred exercises. You have bits and preferred exercises that helps in learning and memorizing Japanese characters via mnemonic associations and demonstrates how to properly draw each character.",
      image: "/Images/user.png",
      link: "https://example.com"
    },
    {
      id: "3",
      title: "Anime Sentry",
      category: "Mobile",
      tags: ["i18n", "GORM", "PostgreSQL", "i18n", "grimory", "gin/cors"],
      description: "Hey, anime fans! Struggling to track anime episodes? Can't follow anime release notifications for new episode release? Kana-db's Real Works: - Send live for your anime link - Fan remake show anime concepts - SMS transfer to your phone plan with premium ending. In 1-4 wording every 30 mins, for bar shorts for new episode using unique material. For the first to know about more. Connect now and never miss an episode!",
      image: "/Images/user.png",
      link: "https://example.com",
      github: "https://github.com"
    }
  ];

  // Filter categories
  const categories = ["All", "Frontend", "Backend", "Mobile", "DevOps"];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-dark-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-sm font-fira text-light-secondary mb-4 tracking-widest">
            ... /Projects ...
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                activeFilter === category
                  ? "bg-light-primary text-dark-primary font-semibold"
                  : "bg-dark-secondary/50 text-light-secondary border border-dark-secondary hover:border-light-secondary/30 hover:text-light-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-light-secondary font-sans text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: Project; 
  index: number;
}) => {
  return (
    <div 
      className="group animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative bg-dark-primary border border-dark-secondary rounded-3xl overflow-hidden hover:border-light-secondary/30 transition-all duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-64 bg-dark-secondary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-light-secondary/30 font-fira text-sm">
              {project.title}
            </div>
          </div>

          {/* Overlay with links */}
          <div className="absolute inset-0 bg-dark-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-light-primary text-dark-primary rounded-full hover:scale-110 transition-transform"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-light-primary text-dark-primary rounded-full hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-fira font-semibold text-light-primary mb-3">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-dark-secondary/50 border border-dark-secondary rounded-full text-light-secondary font-fira text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-light-secondary font-sans text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="group/btn border-light-primary/20 hover:border-light-primary hover:bg-light-primary/10 text-light-primary rounded-full px-6 flex-1"
            >
              View Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            
            {/* Quick Action Icons */}
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-secondary/50 hover:bg-dark-secondary border border-dark-secondary hover:border-light-secondary/30 rounded-full transition-all group/icon"
                >
                  <Github className="h-4 w-4 text-light-secondary group-hover/icon:text-light-primary transition-colors" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-secondary/50 hover:bg-dark-secondary border border-dark-secondary hover:border-light-secondary/30 rounded-full transition-all group/icon"
                >
                  <ExternalLink className="h-4 w-4 text-light-secondary group-hover/icon:text-light-primary transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;