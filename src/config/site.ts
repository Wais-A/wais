// Definitions and configuration for site settings

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  // Additional fields can be added as needed
};

// Site configuration including metadata, navigation links, and projects
export const siteConfig = {
  meta: {
    title: "Wais's Portfolio", // Website title
    description:
      "Full-stack developer passionate about building modern web applications", // Site description
    baseURL: "your-domain.com", // Base URL of the site
    ogImage: "/images/og-image.png", // Open Graph image for social sharing
  },

  navigation: [
    { name: "Home", path: "/" }, // Home page link
    { name: "Blog", path: "/blog" }, // Blog page link
    { name: "Contact", path: "/contact" }, // Contact page link
  ],

  projects: [
    {
      title: "Project One",
      description: "Description of project one.",
      image: "/images/project-one.png",
      tags: ["React", "TypeScript"], // Technologies used
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "/images/project-two.png",
      tags: ["Next.js", "Tailwind CSS"],
    },
    // Add more projects as needed
  ],
};
