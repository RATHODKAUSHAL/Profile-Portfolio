// Work history shared by /experience and /resume.

export type Experience = {
  role: string;
  company: string;
  period: string;
  start: string;
  end?: string;
  accent: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Trukky",
    period: "February 2025 – Present",
    start: "2025-02",
    accent: "bg-[#ffeb3b]",
    summary:
      "I build and maintain logistics products across the frontend, backend, and data layer, turning operational requirements into reliable workflows used by internal teams and customers.",
    achievements: [
      "Delivered responsive product experiences with Next.js, React, and TypeScript.",
      "Connected complex UI workflows to Node.js APIs and PostgreSQL data.",
      "Improved maintainability through reusable components, clearer contracts, and focused reviews.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Maze Technolabs",
    period: "March 2024 – January 2025",
    start: "2024-03",
    end: "2025-01",
    accent: "bg-[#2f5dff] text-white",
    summary:
      "I shipped customer-facing React features in collaboration with design and backend teams, with particular attention to responsive behavior, reusable UI, and production quality.",
    achievements: [
      "Converted product requirements and designs into accessible React interfaces.",
      "Integrated REST APIs and handled loading, error, and empty states across user flows.",
      "Reduced mobile UI friction by improving layouts, component reuse, and performance.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    role: "Junior Developer Intern",
    company: "Maze Technolabs",
    period: "June 2023 – March 2024",
    start: "2023-06",
    end: "2024-03",
    accent: "bg-[#ff7f6b]",
    summary:
      "I developed my production foundations by supporting interface builds, fixing defects, testing responsive behavior, and documenting patterns the team could reuse.",
    achievements: [
      "Built and refined web screens with JavaScript, React, and component libraries.",
      "Worked through QA feedback and learned to debug issues systematically.",
      "Documented reusable UI patterns and strengthened Git-based collaboration habits.",
    ],
    technologies: ["JavaScript", "React", "shadcn/ui", "MySQL", "Git"],
  },
];

// Inclusive month count, LinkedIn-style ("1 yr 5 mos"). Ongoing roles count to today.
export function formatDuration(start: string, end?: string) {
  const [startYear, startMonth] = start.split("-").map(Number);
  const endDate = end ? new Date(`${end}-01`) : new Date();
  const months =
    (endDate.getFullYear() - startYear) * 12 + (endDate.getMonth() + 1 - startMonth) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [
    years ? `${years} yr${years > 1 ? "s" : ""}` : "",
    rest ? `${rest} mo${rest > 1 ? "s" : ""}` : "",
  ];
  return parts.filter(Boolean).join(" ");
}
