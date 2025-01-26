/**
 * Site Configuration Types Module
 *
 * @packageDocumentation Defines TypeScript interfaces and types for site-wide configuration,
 * including navigation, social links, and project information.
 */

import type { Project } from "./content";

/**
 * Icon Component Props Type
 *
 * @extends React.HTMLAttributes<SVGElement>
 * Allows passing standard HTML/SVG attributes to icon components
 */
export type IconProps = React.HTMLAttributes<SVGElement>;

/**
 * Navigation Item Interface
 *
 * Defines structure for main navigation links
 *
 * @property href - URL or route path for the navigation item
 * @property icon - React component that renders the item's icon
 * @property label - Display text for the navigation item
 */
export interface NavItem {
  url: string;
  icon: React.ComponentType<IconProps>;
  label: string;
}

/**
 * Social Media Link Interface
 *
 * Defines structure for social media links
 *
 * @property label - Platform name (e.g., "GitHub", "Twitter")
 * @property url - Full URL to social media profile
 * @property icon - React component that renders the platform's icon
 */
export interface SocialItem {
  label: string;
  url: string;
  icon: React.ComponentType<IconProps>;
}

/**
 * Navigation Configuration Interface
 *
 * Combines main navigation and social links
 *
 * @property navbar - Array of main navigation items
 * @property social - Array of social media links
 */
export interface Navigation {
  navbar: NavItem[];
  social: SocialItem[];
}

/**
 * Site Configuration Interface
 *
 * Main configuration type for the entire site
 *
 * @property meta - Site-wide metadata
 *    @property title - Site name/title
 *    @property description - Site description for SEO
 *    @property baseURL - Base URL for absolute path generation
 *    @property ogImage - Default Open Graph image for social sharing
 *    @property lang - Site language code
 *    @property locale - Site locale for internationalization
 * @property theme - Theme configuration
 *    @property defaultMode - Default theme mode ("light" | "dark")
 *    @property transitionDuration - Duration for theme transitions in milliseconds
 * @property projects - Array of featured projects
 */
/**
 * SEO metadata configuration
 */
export interface SeoMeta {
  title: string;
  description: string;
  baseURL: string;
  ogImage: string;
  lang: string;
  locale: string;
  keywords?: string[];
  authors?: { name: string; url?: string }[];
  twitterHandle?: string;
  alternateLocales?: { [key: string]: string };
  verification?: {
    google?: string;
    yandex?: string;
    bing?: string;
  };
}

/**
 * Site Configuration Interface
 *
 * Main configuration type for the entire site
 *
 * @property meta - Site-wide metadata including SEO configurations
 * @property theme - Theme configuration including mode and transitions
 * @property projects - Array of featured projects
 */
export interface SiteConfig {
  meta: SeoMeta;
  theme: {
    defaultMode: "light" | "dark";
    transitionDuration: number;
  };
  projects: Project[];
}
