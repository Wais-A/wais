/**
 * Metadata Generation Module
 *
 * @packageDocumentation Provides functions to generate standardized metadata for pages,
 * supporting SEO optimization and social media sharing. Implements Open Graph and
 * Twitter Card protocols for rich social media previews.
 *
 * @see siteConfig.meta for default metadata values
 */

import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

/**
 * Base URL Configuration
 *
 * Determines the site's base URL using the following priority:
 * 1. Environment variable NEXT_PUBLIC_BASE_URL
 * 2. Site configuration baseURL
 * 3. Localhost fallback for development
 *
 * Note:  This is crucial for generating absolute URLs required by
 * social media preview cards and SEO
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${siteConfig.meta.baseURL}` ||
  "http://localhost:3000";

/**
 * Generates comprehensive metadata for a page
 *
 * @param title - Optional page-specific title. If not provided, uses site default
 * @param description - Optional page-specific description. If not provided, uses site default
 *
 * @returns {Metadata} Next.js Metadata object containing:
 *   - Basic metadata (title, description)
 *   - Open Graph metadata for social sharing
 *   - Twitter Card metadata for Twitter sharing
 *   - Canonical URL for SEO
 *
 * @example
 * ```typescript
 * // Basic usage with defaults
 * generateMetadata()
 *
 * // Page-specific metadata
 * generateMetadata("Blog Post Title", "This is a blog post about...")
 * ```
 *
 * Note:  All URLs in the metadata are absolute, using BASE_URL as the prefix.
 * This is required for social media previews to work correctly.
 */
export function generateMetadata(
  title?: string,
  description?: string
): Metadata {
  return {
    // Sets the base URL for all relative URLs in the metadata
    metadataBase: new URL(BASE_URL),

    // Basic metadata with fallbacks to site defaults
    title: title || siteConfig.meta.title,
    description: description || siteConfig.meta.description,

    // Open Graph metadata for Facebook, LinkedIn, etc.
    openGraph: {
      title: title || siteConfig.meta.title,
      description: description || siteConfig.meta.description,
      url: BASE_URL,
      siteName: siteConfig.meta.title,
      images: [
        {
          url: siteConfig.meta.ogImage,
          width: 1200, // Standard OG image dimensions
          height: 630,
        },
      ],
      locale: "en-US",
      type: "website",
    },

    // Twitter Card metadata for Twitter sharing
    twitter: {
      card: "summary_large_image", // Larger preview format
      title: title || siteConfig.meta.title,
      description: description || siteConfig.meta.description,
      images: [siteConfig.meta.ogImage],
    },

    // Canonical URL for SEO to prevent duplicate content issues
    alternates: {
      canonical: BASE_URL,
    },
  };
}
