import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable MDX file extensions
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // Configure allowed image domains and patterns
  images: {
    remotePatterns: [
      // Allow Picsum Photos
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // Allow all paths under picsum.photos
      },
      // Allow Unsplash Images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allow all paths under images.unsplash.com
      },
    ],
  },
};

// Configure MDX options
const withMDX = createMDX({
  // Define options for MDX processing
  options: {
    remarkPlugins: [], // Add remark plugins here if needed
    rehypePlugins: [], // Add rehype plugins here if needed
  },
});

// Export the combined configuration
export default withMDX(nextConfig);
