/**
 * Metadata Generation Module
 *
 * This module provides functions to generate metadata for different pages
 * of the application, enhancing SEO and social sharing capabilities.
 */

import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import person from "@/config/person";

// Set base URL from config or default to localhost in development
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${siteConfig.meta.baseURL}` ||
  "http://localhost:3000";

/**
 * Generates metadata for a page, including Open Graph properties.
 *
 * @param title - The title of the page. Defaults to site title if not provided.
 * @param description - The description of the page. Defaults to site description if not provided.
 * @returns An object containing metadata properties.
 */
export function generateMetadata(
  title?: string,
  description?: string
): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: title || siteConfig.meta.title,
    description: description || siteConfig.meta.description,
    openGraph: {
      title: title || siteConfig.meta.title,
      description: description || siteConfig.meta.description,
      url: BASE_URL,
      siteName: siteConfig.meta.title,
      images: [
        {
          url: siteConfig.meta.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.meta.title,
      description: description || siteConfig.meta.description,
      images: [siteConfig.meta.ogImage],
    },
    alternates: {
      canonical: BASE_URL,
    },
  };
}
