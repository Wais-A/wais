/**
 * Content Configuration Module
 *
 * Implements content structure for different sections of the website,
 * including home, blog, contact, and about pages. Uses the Content
 * interface to ensure type safety and consistent structure.
 *
 *
 */

// src/config/content.ts
import type { Content } from "@/types";
import { person } from "./person";

export const content: Content = {
  home: {
    title: person.role, // References person.ts
    description: person.bio, // Single source of truth
    projects: person.projects.slice(0, 2),
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
    email: person.email, // Use email from person
    form: {
      endpoint: "/api/contact",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
    },
  },

  about: {
    description: person.bio, // Use bio from person
  },
};
