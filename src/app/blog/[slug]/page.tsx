// src/app/blog/[slug]/page.tsx
import {
  generateMetadata as baseGenerateMetadata,
  viewport,
} from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export { viewport };

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  try {
    const { metadata } = await import(`@/content/blog/${params.slug}.mdx`);
    return baseGenerateMetadata(
      `${metadata.title} - Wais Almakaleh`,
      metadata.description
    );
  } catch {
    return baseGenerateMetadata(
      "Post Not Found",
      "The blog post you are looking for does not exist."
    );
  }
}

export default async function Page({ params }: PostPageProps) {
  try {
    const { default: Post, metadata } = await import(
      `@/content/blog/${params.slug}.mdx`
    );

    return (
      <article className="prose dark:prose-invert">
        <div className="mb-8">
          <time
            dateTime={metadata.date}
            className="text-sm text-muted-foreground"
          >
            {new Date(metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <Post />
      </article>
    );
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return [
    { slug: "first-post" },
    // Add more posts as you create them
  ];
}

export const dynamicParams = false;
