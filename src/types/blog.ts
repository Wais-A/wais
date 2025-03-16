// src/types/blog.ts

// ISO date string format (YYYY-MM-DD)
export type ISODateString = `${number}-${number}-${number}`;

export interface BlogPost {
  metadata: {
    title: string;
    description: string;
    date: ISODateString;
    tags?: string[];
    image?: string;
    author?: string;
    readingTime?: string;
  };
  slug: string;
  content: string;
}
