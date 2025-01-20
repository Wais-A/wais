// src/config/site.ts

import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  meta: {
    title: "Wais Almakaleh - Software Engineer",
    description:
      "Full-stack developer and IT professional specializing in modern web development with React, Node.js, and JavaScript. Currently pursuing Computer Science at LCCC.",
    baseURL: "wais-almakaleh.com", // Replace with your actual domain
    ogImage: "/images/og-image.png",
  },

  projects: [
    {
      title: "Full-Stack Development",
      description:
        "Built and deployed responsive web applications working in teams of up to 10 members.",
      image: "/images/dev-project.png",
      tags: ["React", "Node.js", "JavaScript", "TypeScript"],
    },
    {
      title: "IT Support Systems",
      description:
        "Managed technical support and troubleshooting for campus-wide IT infrastructure.",
      image: "/images/support-project.png",
      tags: ["Technical Support", "Problem Solving", "System Administration"],
    },
    {
      title: "Database Management",
      description: "Experience with SQL, NoSQL, and Firebase implementations.",
      image: "/images/database-project.png",
      tags: ["SQL", "NoSQL", "Firebase"],
    },
    {
      title: "Frontend Development",
      description:
        "Created responsive and accessible user interfaces using modern frameworks.",
      image: "/images/frontend-project.png",
      tags: ["React", "Redux", "Angular", "CSS3"],
    },
  ],
};
