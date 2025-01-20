// src/lib/blog.ts
import { promises as fs } from "node:fs";
import path from "node:path";
import type { BlogPost } from "@/types/blog";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  // Extract metadata from frontmatter and content from MDX file
  const { data, content } = matter(fileContent);

  // Debugging: Log the extracted date

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

  // Sort by date, newest first
  return posts.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });
}
