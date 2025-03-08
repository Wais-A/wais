

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
    // Enhanced SEO metadata
    keywords: [
      person.role,
      "developer",
      "software engineer",
      "web development",
      ...person.skills.languages,
      ...person.skills.frameworks,
    ],
    authors: [
      {
        name: person.name,
        url: person.github,
      },
    ],
    // Optional social media handles
    twitterHandle: person.bluesky, // Using Bluesky as Twitter/X alternative
    // Support for multiple languages (can be expanded later)
    alternateLocales: {
      "en-US": "/",
    },
    // Search engine verification (add your verification codes when ready)
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  },
  theme: {
    defaultMode: themeConfig.colors.background,
    transitionDuration: 50, // milliseconds for theme transition
  },
  projects: person.projects,
};
