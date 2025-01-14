// src/lib/metadata.ts
import { siteConfig } from "@/config/site";

export function generateMetadata(title?: string, description?: string) {
  const meta = {
    title: title || siteConfig.meta.title,
    description: description || siteConfig.meta.description,
    openGraph: {
      title: title || siteConfig.meta.title,
      description: description || siteConfig.meta.description,
      url: `https://${siteConfig.meta.baseURL}`,
      siteName: siteConfig.meta.title,
      images: [
        {
          url: siteConfig.meta.ogImage,
          width: 1200,
          height: 630,
        }
      ],
      locale: "en-US",
      type: "website",
    },
    // Add more metadata as needed
  };

  return meta;
}