// src/config/content.ts
export const contentConfig = {
  home: {
    title: "Full-stack Developer",
    subtitle: "Building modern web experiences",
    description: "I create performant and accessible web applications using React, Next.js, and TypeScript.",
    
    // Featured projects section
    projects: [
      {
        title: "Project One",
        description: "Brief project description",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://project1.com"
      },
      // Add more projects as needed
    ]
  },

  blog: {
    title: "Blog",
    description: "Thoughts on development, design, and technology",
    postsPerPage: 6
  },

  contact: {
    title: "Get in Touch",
    description: "Have a project in mind? Let's talk about it.",
    email: "your@email.com",
    
    // Form configuration
    form: {
      endpoint: "/api/contact", // Your form handling endpoint
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true }
      ]
    }
  },

  social: [
    { platform: "GitHub", url: "https://github.com/yourusername" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { platform: "Twitter", url: "https://twitter.com/yourusername" }
  ]
};
