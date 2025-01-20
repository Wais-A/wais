// src/types/blog.ts
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
