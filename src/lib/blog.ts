/**
 * Blog Post Management Module
 *
 * Provides functionality for retrieving and managing blog posts stored as MDX files.
 * Each post contains frontmatter metadata and MDX content.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import type { BlogPost } from "@/types/blog";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

/**
 * Retrieves a single blog post by its slug.
 *
 * @param slug - The unique identifier for the blog post (filename without .mdx extension)
 * @returns A promise that resolves to a BlogPost object containing metadata and content
 */
export async function getBlogPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags,
      image: data.image,
      author: data.author,
      readingTime: data.readingTime,
    },
    slug,
    content,
  };
}

/**
 * Retrieves all blog posts and sorts them by date.
 *
 * @returns A promise that resolves to an array of BlogPost objects, sorted by date (newest first)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(POSTS_PATH);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(".mdx", "");
        return await getBlogPost(slug);
      })
  );

  return posts.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });
}
