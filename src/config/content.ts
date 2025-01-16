import type { Content } from "@/types/content";
// content.ts
// Content configuration utilizing centralized personal information
import { person } from "./person";

/**
 * Content Configuration Module
 *
 * @packageDocumentation Centralizes all static content configuration for the website,
 * leveraging personal information from the person config. This ensures consistent
 * content management and easy updates across the application.
 *
 * @see person.ts for personal information configuration
 */

/**
 * Main content configuration object
 *
 * @type {Content}
 * @property {object} home - Homepage content configuration
 *    @property {string} title - Main professional title
 *    @property {string} subtitle - Brief tagline
 *    @property {string} description - Detailed professional summary
 *    @property {Array<Project>} projects - Featured projects showcase
 *
 * @property {object} blog - Blog section configuration
 *    @property {string} title - Blog section title
 *    @property {string} description - Blog section description
 *    @property {number} postsPerPage - Pagination control for blog posts
 *
 * @property {object} contact - Contact section configuration
 *    @property {string} title - Contact section header
 *    @property {string} description - Contact section description
 *    @property {string} email - Contact email (pulled from person config)
 *    @property {object} form - Contact form configuration
 *
 * @property {Array<Social>} social - Social media links configuration
 *    Each entry contains platform name and URL (URLs pulled from person config)
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
