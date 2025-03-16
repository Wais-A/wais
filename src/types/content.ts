// src/types/content.ts

// Form field configuration
export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
};

// Valid URL patterns for internal and external links
export type UrlString = `${"http" | "https"}://${string}` | `/${string}`;

// Valid image path patterns
export type ImagePath =
  | `${"http" | "https"}://${string}`
  | `/${string}.${"png" | "jpg" | "jpeg" | "webp" | "svg" | "gif"}`;

// Project information structure
export type Project = {
  title: string;
  description: string;
  image: ImagePath;
  tags: string[];
  link?: UrlString;
};

// Home page content structure
export type HomeContent = {
  title: string;
  description: string;
  projects: Project[];
};

// Blog section content structure
export type BlogContent = {
  title: string;
  description: string;
  postsPerPage: number;
};

// Contact page content structure
export type ContactContent = {
  title: string;
  description: string;
  email: string;
  form: {
    endpoint: string;
    fields: FormField[];
  };
};

// Global content configuration
export type Content = {
  home: HomeContent;
  blog: BlogContent;
  contact: ContactContent;
  about: {
    description: string;
  };
};
