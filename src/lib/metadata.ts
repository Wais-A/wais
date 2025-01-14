/**
 * Metadata Generation Module
 * 
 * This module provides functions to generate metadata for different pages
 * of the application, enhancing SEO and social sharing capabilities.
 */

import { siteConfig } from "@/config/site";

/**
 * Generates metadata for a page, including Open Graph properties.
 * 
 * @param title - The title of the page. Defaults to site title if not provided.
 * @param description - The description of the page. Defaults to site description if not provided.
 * @returns An object containing metadata properties.
 */
export function generateMetadata(title?: string, description?: string) {
  const meta = {
    title: title || siteConfig.meta.title, // Page title
    description: description || siteConfig.meta.description, // Page description
    openGraph: {
      title: title || siteConfig.meta.title, // Open Graph title
      description: description || siteConfig.meta.description, // Open Graph description
      url: `https://${siteConfig.meta.baseURL}`, // URL of the page
      siteName: siteConfig.meta.title, // Name of the site
      images: [
        {
          url: siteConfig.meta.ogImage, // Open Graph image URL
          width: 1200, // Image width
          height: 630, // Image height
        }
      ],
      locale: "en-US", // Locale setting
      type: "website", // Type of content
    },
    // Additional metadata properties can be added here
  };

  return meta;
}