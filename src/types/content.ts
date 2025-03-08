/**
 * Content type definitions for the website's various sections
 */

/**
 * Represents a form field configuration
 *  name - Field identifier used in form submission
 *  label - Display label for the form field
 *  type - Input type (text, email, or textarea)
 *  required - Whether the field is mandatory
 */
export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
};

/**
 * Content structure for the home page
 *  title - Main headline
 *  subtitle - Secondary headline
 *  description - Page description or introduction
 *  projects - Array of featured projects
 */
export type HomeContent = {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
};

/**
 * Content structure for the blog section
 *  title - Blog section title
 *  description - Blog section description
 *  postsPerPage - Number of posts to display per page
 */
export type BlogContent = {
  title: string;
  description: string;
  postsPerPage: number;
};

/**
 * Content structure for the contact page
 *  title - Contact page title
 *  description - Contact page description
 *  email - Contact email address
 *  form - Form configuration including endpoint and fields
 */
export type ContactContent = {
  title: string;
  description: string;
  email: string;
  form: {
    endpoint: string;
    fields: FormField[];
  };
};

/**
 * Project Information Type
 *
 * Defines structure for project showcase items
 *
 *  title - Project name
 *  description - Brief project description
 *  image - URL to project preview image
 *  tags - Array of technology/skill tags
 *  link - Optional URL to project (e.g. GitHub, live demo)
 */
export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

/**
 * Global content configuration combining all section content
 *  home - Home page content
 *  blog - Blog section content
 *  contact - Contact page content
 *  about - About section content
 *  social - Social media links
 */
export type Content = {
  home: HomeContent;
  blog: BlogContent;
  contact: ContactContent;
  about: {
    description: string;
  };
};
