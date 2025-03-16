import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${siteConfig.meta.baseURL}` ||
  "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export function generateMetadata(
  title?: string,
  description?: string
): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.meta.title}`
    : siteConfig.meta.title;
  const pageDescription = description || siteConfig.meta.description;

  const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: pageTitle,
    description: pageDescription,
    applicationName: siteConfig.meta.title,
    authors: siteConfig.meta.authors,
    keywords: siteConfig.meta.keywords,
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: BASE_URL,
      siteName: siteConfig.meta.title,
      images: [
        {
          url: siteConfig.meta.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.meta.title} social preview image`,
        },
      ],
      locale: siteConfig.meta.locale,
      type: "website",
    },
    twitter: siteConfig.meta.twitterHandle
      ? {
          card: "summary_large_image",
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: siteConfig.meta.ogImage,
              alt: `${siteConfig.meta.title} social preview image`,
            },
          ],
          creator: siteConfig.meta.twitterHandle,
        }
      : null,
    alternates: {
      canonical: BASE_URL,
      languages: siteConfig.meta.alternateLocales || {},
    },
    verification: siteConfig.meta.verification,
    icons: {
      icon: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
  };

  return metadata;
}
