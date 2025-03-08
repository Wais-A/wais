/**
 * Blog Post Type Definitions
 *
 * @packageDocumentation Defines the structure for blog posts and related metadata
 */

/**
 * Blog Post Interface
 *
 * Defines the structure for individual blog posts including metadata and content
 *
 *  metadata - Post metadata
 *     title - Post title
 *     description - Brief description or excerpt
 *     date - Publication date
 *     tags - Optional array of topic tags
 *     image - Optional featured image URL
 *     author - Optional post author
 *     readingTime - Optional estimated reading duration
 *  slug - URL-friendly identifier
 *  content - Main post content (typically MDX)
 */
export interface BlogPost {
  metadata: {
    title: string;
    description: string;
    date: string;
    tags?: string[];
    image?: string;
    author?: string;
    readingTime?: string;
  };
  slug: string;
  content: string;
}
