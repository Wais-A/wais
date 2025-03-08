/**
 * Blog Post Management Module
 *
 * Provides functionality for retrieving and managing blog posts stored as MDX files.
 * Each post contains frontmatter metadata and MDX content.
 */

// src/lib/blog.ts
import { promises as fs } from "node:fs";
import path from "node:path";
import type { BlogPost } from "@/types/blog";
import matter from "gray-matter";
import { LRUCache } from "lru-cache"; // Import LRUCache

const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

// Create cache instance
const postCache = new LRUCache<string, BlogPost | BlogPost[]>({
  max: 20, // Cache size - 20 posts
  ttl: 1000 * 60 * 5, // 5 minutes
});

export async function getBlogPost(slug: string): Promise<BlogPost> {
  // Check cache first
  const cachedPost = postCache.get(slug);
  if (cachedPost && !Array.isArray(cachedPost)) {
    return cachedPost;
  }

  // If not cached, read from filesystem
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const post: BlogPost = {
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

  // Cache the post
  postCache.set(slug, post);
  return post;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Cache key for all posts list
  const ALL_POSTS_CACHE_KEY = "__all_posts__";
  
  // Check cache first
  const cachedPosts = postCache.get(ALL_POSTS_CACHE_KEY) as BlogPost[] | undefined;
  if (cachedPosts) {
    return cachedPosts;
  }

  // If not cached, read from filesystem
  const files = await fs.readdir(POSTS_PATH);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(".mdx", "");
        return await getBlogPost(slug);
      })
  );

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  // Cache the sorted list
  postCache.set(ALL_POSTS_CACHE_KEY, sortedPosts);
  return sortedPosts;
}
