import { Icons } from "@/components/icons";
import type { SiteConfig } from "@/types";

// Site configuration including metadata, navigation links, and projects
export const siteConfig: SiteConfig = {
  meta: {
    title: "Wais's Portfolio", // Website title
    description:
      "Full-stack developer passionate about building modern web applications", // Site description
    baseURL: "your-domain.com", // Base URL of the site
    ogImage: "/images/og-image.png", // Open Graph image for social sharing
  },

  navigation: [
    { href: "/", label: "Home", icon: Icons.home },
    { href: "/blog", label: "Blog", icon: Icons.blog },
    { href: "/contact", label: "Contact", icon: Icons.email },
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
  ],
};
