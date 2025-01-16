/**
 * Content type definitions for the website's various sections
 */

/**
 * Represents a form field configuration
 * @property name - Field identifier used in form submission
 * @property label - Display label for the form field
 * @property type - Input type (text, email, or textarea)
 * @property required - Whether the field is mandatory
 */
export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
};

/**
 * Content structure for the home page
 * @property title - Main headline
 * @property subtitle - Secondary headline
 * @property description - Page description or introduction
 * @property projects - Array of featured projects
 */
export type HomeContent = {
  title: string;
  subtitle: string;
  description: string;
  projects: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
  }[];
};

/**
 * Content structure for the blog section
 * @property title - Blog section title
 * @property description - Blog section description
 * @property postsPerPage - Number of posts to display per page
 */
export type BlogContent = {
  title: string;
  description: string;
  postsPerPage: number;
};

/**
 * Content structure for the contact page
 * @property title - Contact page title
 * @property description - Contact page description
 * @property email - Contact email address
 * @property form - Form configuration including endpoint and fields
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
 * Represents a social media link
 * @property platform - Name of the social media platform
 * @property url - Full URL to the social media profile
 */
export type SocialLink = {
  platform: string;
  url: string;
};

/**
 * Global content configuration combining all section content
 * @property home - Home page content
 * @property blog - Blog section content
 * @property contact - Contact page content
 * @property social - Social media links
 */
export type Content = {
  home: HomeContent;
  blog: BlogContent;
  contact: ContactContent;
  social: SocialLink[];
};
