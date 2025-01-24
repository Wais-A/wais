/**
 * Navigation Configuration Module
 *
 * @packageDocumentation Defines the site-wide navigation structure, including main navigation
 * links and social media links. Uses centralized personal information from person config
 * for social media URLs.
 *
 * @see person.ts for social media URL configuration
 * @see Icons component for available icon definitions
 */
import { Icons } from "@/components/custom-ui/icons";
import { person } from "@/config/person";

import type { Navigation } from "@/types";

/**
 * Navigation configuration object
 *
 * @type {Navigation}
 * @property {Array<NavItem>} navbar - Main navigation items
 *    Each item includes:
 *    - href: Internal route path
 *    - icon: Icon component from Icons collection
 *    - label: Display text for the link
 *
 * @property {Array<SocialLink>} social - Social media navigation items
 *    Each item includes:
 *    - label: Platform name
 *    - url: External URL (pulled from person config)
 *    - icon: Platform-specific icon from Icons collection
 */
export const navigation: Navigation = {
  navbar: [
    { url: "/", icon: Icons.home, label: "Home" },
    { url: "/blog", icon: Icons.blog, label: "Blog" },
    { url: "/about", icon: Icons.about, label: "About" },
  ],
  social: [
    {
      label: "GitHub",
      url: person.github,
      icon: Icons.github,
    },
    {
      label: "BlueSky",
      url: person.bluesky,
      icon: Icons.blueSky,
    },
    {
      label: "LinkedIn",
      url: person.linkedin,
      icon: Icons.linkedin,
    },
  ],
};
