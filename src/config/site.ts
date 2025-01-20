// src/config/site.ts

import type { SiteConfig } from "@/types";
import { person } from "./person";

export const siteConfig: SiteConfig = {
  meta: {
    title: "Wais Almakaleh - Software Engineer",
    description:
      "Full-stack developer and IT professional specializing in modern web development with React, Node.js, and JavaScript. Currently pursuing Computer Science at LCCC.",
    baseURL: "wais-almakaleh.com", // Replace with your actual domain
    ogImage: "/images/og-image.png",
  },

  projects: person.projects,
};
