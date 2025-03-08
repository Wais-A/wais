import { Tags } from "@/components/custom-ui/tagAndList";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import { format } from "date-fns";
import type { Metadata } from "next";
import {MDXRenderer} from "@/components/pages/blog/mdx-renderer"
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

/**
 * Props interface for the blog post page component.
 * Next.js 13+ wraps dynamic route parameters in a Promise,
 * requiring async handling of the slug parameter.
 */
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generates metadata for the blog post including OpenGraph data
 * for social media sharing. Falls back to generic metadata if
 * the post is not found.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    // Generate base metadata with title and description
    const metadata = baseGenerateMetadata(
      post.metadata.title,
      post.metadata.description
    );

    // Enhance with article-specific metadata
    return {
      ...metadata,
      openGraph: {
        ...metadata.openGraph,
        type: "article",
        publishedTime: post.metadata.date,
        authors: post.metadata.author ? [post.metadata.author] : undefined,
        tags: post.metadata.tags,
        images: post.metadata.image
          ? [
              {
                url: post.metadata.image,
                width: 800,
                height: 450,
                alt: post.metadata.title,
              },
            ]
          : metadata.openGraph?.images,
      },
      twitter: {
        ...metadata.twitter,
        card: "summary_large_image",
        title: post.metadata.title,
        description: post.metadata.description,
        images: post.metadata.image ? [post.metadata.image] : undefined,
      },
    };
  } catch {
    return baseGenerateMetadata(
      "Post Not Found",
      "The blog post you are looking for does not exist."
    );
  }
}

/**
 * Generates static paths for all blog posts during build time
 * to enable static generation of blog post pages.
 */
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Blog Post Page Component
 *
 * Renders a full blog post with:
 * - Optimized featured image using next/image
 * - Rich metadata display (tags, date, reading time)
 * - MDX content with custom component support
 * - Responsive typography with dark mode support
 *
 * Uses Tailwind Typography for consistent content styling
 * and includes error handling with 404 redirect.
 */
export default async function BlogPostPage({ params }: Props) {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    return (
      <article className="container mx-auto py-8 px-4">
        <header className="mb-8">
          {/* Featured preview with next/image optimization */}
          {post.metadata.image && (
            <div className="mb-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                width={800}
                height={450}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          )}

          <div className="space-y-2">
            {/* Topic tags */}
            {post.metadata.tags && (
              <div className="flex gap-2">
                <Tags items={post.metadata.tags} />
              </div>
            )}

            <h1 className="text-4xl font-bold">{post.metadata.title}</h1>

            {/* Post metadata */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={post.metadata.date}>
                {format(new Date(post.metadata.date), "MMMM dd, yyyy")}
              </time>
              {post.metadata.readingTime && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{post.metadata.readingTime} read</span>
                </>
              )}
              {post.metadata.author && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>By {post.metadata.author}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* MDX content with Tailwind Typography styling */}
        <Suspense
          fallback={
            <div className="animate-pulse h-64 bg-muted rounded-lg"></div>
          }
        >
          <MDXRenderer content={post.content} />
        </Suspense>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
