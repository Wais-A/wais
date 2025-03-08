import type { Project } from "./content";

/**
 * Icon Component Props Type
 *
 * @extends React.HTMLAttributes<SVGElement>
 * Allows passing standard HTML/SVG attributes to icon components
 */
export type IconProps = React.HTMLAttributes<SVGElement>;

export interface NavItem {
  url: string;
  icon: React.ComponentType<IconProps>;
  label: string;
}

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
 *  navbar - Array of main navigation items
 *  social - Array of social media links
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
 *  meta - Site-wide metadata
 *     title - Site name/title
 *     description - Site description for SEO
 *     baseURL - Base URL for absolute path generation
 *     ogImage - Default Open Graph image for social sharing
 *     lang - Site language code
 *     locale - Site locale for internationalization
 *  theme - Theme configuration
 *     defaultMode - Default theme mode ("light" | "dark")
 *     transitionDuration - Duration for theme transitions in milliseconds
 *  projects - Array of featured projects
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
 *  meta - Site-wide metadata including SEO configurations
 *  theme - Theme configuration including mode and transitions
 *  projects - Array of featured projects
 */
export interface SiteConfig {
  meta: SeoMeta;
  theme: {
    defaultMode: "light" | "dark";
    transitionDuration: number;
  };
  projects: Project[];
}
