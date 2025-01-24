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
 * @property metadata - Post metadata
 *    @property title - Post title
 *    @property description - Brief description or excerpt
 *    @property date - Publication date
 *    @property tags - Optional array of topic tags
 *    @property image - Optional featured image URL
 *    @property author - Optional post author
 *    @property readingTime - Optional estimated reading duration
 * @property slug - URL-friendly identifier
 * @property content - Main post content (typically MDX)
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
