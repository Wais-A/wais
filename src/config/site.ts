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
    keywords: [
      person.role,
      "computer science",
      "software engineering",
      "IT systems",
      "undergraduate research",
      ...person.skills.languages,
      ...person.skills.webData,
    ],
    authors: [{ name: person.name, url: person.github }],
    twitterHandle: "@_Wais_a",
    alternateLocales: { "en-US": "/" },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  },
  theme: {
    defaultMode: themeConfig.colors.background,
    transitionDuration: 50,
  },
};
