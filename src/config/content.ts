// src/config/content.ts

import type { Content } from "@/types/content";
import { person } from "./person";

export const content: Content = {
  home: {
    title: "Software Engineer",
    subtitle: "Full-stack Development & IT Support",
    description:
      "Building modern web applications with JavaScript, React, and Node.js while pursuing Computer Science at LCCC.",
    projects: [
      {
        title: "Team Development Projects",
        description:
          "Collaborated on multiple full-stack web applications using modern technologies and agile methodologies.",
        tags: ["React", "Node.js", "JavaScript", "TypeScript"],
        link: "https://github.com/wais-a",
        image: "/images/project1.png",
      },
      {
        title: "IT Support Systems",
        description:
          "Managed and resolved technical support tickets for staff and students at LCCC.",
        tags: ["Technical Support", "Problem Solving", "Customer Service"],
        image: "/images/project2.png",
      },
    ],
  },

  blog: {
    title: "Technical Blog",
    description:
      "Thoughts and insights on software development, IT support, and technology.",
    postsPerPage: 6,
  },

  contact: {
    title: "Get in Touch",
    description: "Interested in collaborating? Let's discuss your project.",
    email: person.email,
    form: {
      endpoint: "/api/contact",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
    },
  },

  social: [
    { platform: "GitHub", url: person.github },
    { platform: "LinkedIn", url: person.linkedin },
    { platform: "BlueSky", url: person.bluesky },
  ],

  about: {
    description:
      "Full-stack developer and IT professional with experience in both software development and technical support. Currently pursuing Computer Science at LCCC while working as an IT Student Employee.",
  },
};
