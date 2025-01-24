/**
 * Navigation Configuration Module
 *
 * Implements the site-wide navigation structure using the Navigation interface.
 * Centralizes all navigation-related configuration including main navigation
 * links and social media links.
 *
 * @see {@link Navigation} in types/site.ts for type definitions
 * @see {@link person} in person.ts for social media URL configuration
 * @see {@link Icons} in components/custom-ui/icons.ts for available icons
 */

import { Icons } from "@/components/custom-ui/icons";
import { person } from "@/config/person";
import type { Navigation } from "@/types";

/**
 * Navigation configuration object implementing the Navigation interface.
 * Defines both the main navigation bar items and social media links.
 *
 * Main navigation uses internal routes while social links use external URLs
 * from the person configuration. All items include an icon from the Icons
 * collection for consistent visual representation.
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
