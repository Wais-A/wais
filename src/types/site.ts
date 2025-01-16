/**
 * Site Configuration Types Module
 *
 * @packageDocumentation Defines TypeScript interfaces and types for site-wide configuration,
 * including navigation, social links, and project information.
 */

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
  href: string;
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
 * Project Information Type
 *
 * Defines structure for project showcase items
 *
 * @property title - Project name
 * @property description - Brief project description
 * @property image - URL to project preview image
 * @property tags - Array of technology/skill tags
 */
export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

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
 * @property navigation - Main navigation configuration
 * @property projects - Array of featured projects
 */
export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    baseURL: string;
    ogImage: string;
  };
  navigation: NavItem[];
  projects: Project[];
}
