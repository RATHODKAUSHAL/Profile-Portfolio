"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";

// Work experience type definition
interface WorkExperience {
  id: string;
  period: string;
  duration: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
}

const WorkExperienceSection = () => {
  // Work experience data
  const experiences: WorkExperience[] = [
    {
      id: "1",
      period: "Feb 2025 - Present",
      duration: "12 months",
      company: "Trukky",
      position: "Fullstack developer | NextJS & React",
      description: "Developed and maintained large-scale React applications with focus on performance optimization.",
      technologies: ["React", "Redux", "TypeScript", "NodeJS", "PostgreSQL"]
    },
    {
      id: "2",
      period: "November 2020 - Jan 2025",
      duration: "3 months",
      company: "Maze technolabs",
      position: "Frontend developer | React & NodeJS",
      description: "Built full-stack applications using modern JavaScript frameworks and Python backend services.",
      technologies: ["JavaScript", "ReactJS", "Node.js", "PostgreSQL"]
    },
    {
      id: "3",
      period: "Jan-2024 - October 2020",
      duration: "9 months",
      company: "Maze technolabs",
      position: "Frontend developer | JavaScript & ReactJS",
      description: "Worked on various client projects, delivering end-to-end solutions from design to deployment.",
      technologies: ["JavaScript", "ReactJS", "Shadcn", "Mysql"]
    }
  ];

  const totalExperience = "4 years 9 months";

  return (
    <section id="work" className="min-h-screen py-20 px-4 bg-dark-secondary/20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-light-primary mt-6">
              <span className="font-bold text-xl">Experience</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-light-secondary/20 via-light-secondary/50 to-light-secondary/20"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={exp.id} 
                experience={exp} 
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            number="2"
            label="Years Experience"
          />
          <StatCard 
            number="6+"
            label="Projects Completed"
          />
          <StatCard 
            number="10+"
            label="Technologies"
          />
        </div>
      </div>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ 
  experience, 
  index,
  isEven 
}: { 
  experience: WorkExperience; 
  index: number;
  isEven: boolean;
}) => {
  return (
    <div 
      className={`relative animate-fadeIn ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} md:w-1/2`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Timeline Dot */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0">
        <div className="w-4 h-4 rounded-full bg-light-primary border-4 border-dark-secondary shadow-lg"></div>
      </div>

      {/* Card */}
      <div className="group bg-dark-primary border border-dark-secondary rounded-2xl p-6 hover:border-light-secondary/30 hover:shadow-xl hover:shadow-light-secondary/5 transition-all duration-300">
        {/* Period Badge */}
        <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark-secondary/50 border border-dark-secondary rounded-full">
            <Calendar className="h-3.5 w-3.5 text-light-primary" />
            <span className="text-light-primary font-fira text-xs font-semibold">
              {experience.period}
            </span>
          </div>
          <span className="text-light-secondary font-sans text-xs">
            {experience.duration}
          </span>
        </div>

        {/* Company */}
        <h3 className="text-2xl font-fira font-bold text-light-primary mb-2">
          {experience.company}
        </h3>

        {/* Position */}
        <p className="text-light-secondary font-sans text-base mb-3 font-semibold">
          {experience.position}
        </p>

        {/* Description */}
        <p className="text-light-secondary font-sans text-sm leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-dark-secondary/30 border border-dark-secondary rounded-full text-light-secondary font-fira text-xs hover:border-light-secondary/30 hover:text-light-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Timeline Connector */}
      <div className="md:hidden w-0.5 h-12 bg-light-secondary/20 ml-6 mt-2"></div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ 
  number, 
  label 
}: { 
  number: string; 
  label: string;
}) => {
  return (
    <div className="bg-dark-primary border border-dark-secondary rounded-2xl p-6 text-center hover:border-light-secondary/30 transition-all duration-300 group">
      <div className="text-4xl md:text-5xl font-fira font-bold text-light-primary mb-2 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="text-light-secondary font-sans text-sm">
        {label}
      </div>
    </div>
  );
};

export default WorkExperienceSection;