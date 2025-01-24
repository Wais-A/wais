/**
 * Site Configuration Module
 *
 * Implements site-wide configuration including metadata and featured projects.
 * Uses the SiteConfig interface to ensure type safety and consistent structure.
 *
 * @see {@link SiteConfig} in types/site.ts for type definitions
 */

import type { SiteConfig } from "@/types";
import { person } from "./person";
import { themeConfig } from "./theme";

export const siteConfig: SiteConfig = {
  meta: {
    title: `${person.name} - ${person.role}`,
    description: person.bio,
    baseURL: "wais.me",
    ogImage: "/images/og-image.png",
    lang: "en",
    locale: "en-US",
  },
  theme: {
    defaultMode: themeConfig.colors.background,
    transitionDuration: 50, // milliseconds for theme transition
  },

  projects: person.projects,
};
