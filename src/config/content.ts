// content.ts
// Content configuration utilizing centralized personal information
import { person } from "./person";
import type { Content } from "@/types/content";

/**
 * Application content configuration
 * Contains all static content for the website including:
 * - Home page content
 * - Blog settings
 * - Contact form configuration
 * - Social media links
 */
export const content: Content = {
  home: {
    title: "Full-stack Developer",
    subtitle: "Building modern web experiences",
    description:
      "I create performant and accessible web applications using React, Next.js, and TypeScript.",
    projects: [
      {
        title: "Project One",
        description: "Description of the first project",
        tags: ["React", "TypeScript", "Tailwind"],
        link: "https://project1.com",
        image: "https://picsum.photos/600/400",
      },
      // Add more projects as needed
    ],
  },

  blog: {
    title: "Blog",
    description: "Thoughts on development, design, and technology",
    postsPerPage: 6,
  },

  contact: {
    title: "Get in Touch",
    description: "Have a project in mind? Let's talk about it.",
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
};
