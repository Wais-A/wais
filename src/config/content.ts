/**
 * Content Configuration Module
 *
 * Implements content structure for different sections of the website,
 * including home, blog, contact, and about pages. Uses the Content
 * interface to ensure type safety and consistent structure.
 *
 * @see {@link Content} in types/content.ts for type definitions
 */

import type { Content } from "@/types";
import { person } from "./person";

export const content: Content = {
  home: {
    title: "Software Engineer",
    subtitle: "Full-stack Development & IT Support",
    description:
      "Building modern web applications with JavaScript, React, and Node.js while pursuing Computer Science at LCCC.",
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

  about: {
    description:
      "Full-stack developer and IT professional with experience in both software development and technical support. Currently pursuing Computer Science at LCCC while working as an IT Student Employee.",
  },
};
