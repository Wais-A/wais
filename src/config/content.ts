// content.ts
// Content configuration utilizing centralized personal information
import { person } from "./person";

export const content = {
  home: {
    title: person.role,
    subtitle: "Building modern web experiences",
    description: person.bio,

    projects: [
      {
        title: "Project One",
        description: "Brief project description",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://project1.com",
      },
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

export type Content = typeof content;
