// Content configuration for different sections of the site

export const contentConfig = {
  home: {
    title: "Full-stack Developer", // Main title on the home page
    subtitle: "Building modern web experiences", // Subtitle on the home page
    description: "I create performant and accessible web applications using React, Next.js, and TypeScript.", // Home page description
    
    // Featured projects section details
    projects: [
      {
        title: "Project One",
        description: "Brief project description",
        tags: ["Next.js", "TypeScript", "Tailwind"], // Technologies used
        link: "https://project1.com" // Project link
      },
      // Add more projects as needed
    ]
  },

  blog: {
    title: "Blog", // Blog section title
    description: "Thoughts on development, design, and technology", // Blog section description
    postsPerPage: 6 // Number of posts per page
  },

  contact: {
    title: "Get in Touch", // Contact section title
    description: "Have a project in mind? Let's talk about it.", // Contact section description
    email: "your@email.com", // Contact email
    
    // Form configuration for contact submissions
    form: {
      endpoint: "/api/contact", // Endpoint to handle form submissions
      fields: [
        { name: "name", label: "Name", type: "text", required: true }, // Name field
        { name: "email", label: "Email", type: "email", required: true }, // Email field
        { name: "message", label: "Message", type: "textarea", required: true } // Message field
      ]
    }
  },

  social: [
    { platform: "GitHub", url: "https://github.com/yourusername" }, // GitHub link
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" }, // LinkedIn link
    { platform: "Twitter", url: "https://twitter.com/yourusername" } // Twitter link
  ]
};
