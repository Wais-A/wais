import { Tags } from "@/components/custom-ui/tagAndList";
import { MDXRenderer } from "@/components/pages/blog/mdx-renderer";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import { format } from "date-fns";
import { Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

/**
 * Generates metadata for the blog post including OpenGraph data
 * for social media sharing.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { slug } = params;
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
 * Generates static paths for all blog posts during build time.
 */
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Blog Post Page Component
 */
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { slug } = params;
    const post = await getBlogPost(slug);

    return (
      <article className="container mx-auto py-6 px-4 sm:py-8 max-w-[100dvw] sm:max-w-3xl">
        <header className="mb-6 sm:mb-10 text-center">
          {/* Featured image at the top */}
          {post.metadata.image && (
            <div className="mb-5 sm:mb-6 aspect-video overflow-hidden rounded-lg shadow-md">
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

          {/* Title first */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-center">
            {post.metadata.title}
          </h1>

          {/* Topic tags below the title */}
          {post.metadata.tags && (
            <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
              <Tags items={post.metadata.tags ?? []} />
            </div>
          )}

          {/* Post metadata with icons in a non-wrapping compact layout */}
          <div className="whitespace-nowrap overflow-x-auto no-scrollbar px-2 py-3 border-t border-b border-muted text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-3 sm:space-x-6 min-w-max mx-auto">
              {post.metadata.author && (
                <div className="flex items-center gap-1">
                  <User size={14} className="text-primary shrink-0" />
                  <span className="truncate max-w-24 sm:max-w-none">
                    {post.metadata.author}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-primary shrink-0" />
                <time dateTime={post.metadata.date}>
                  {format(new Date(post.metadata.date), "MMM dd, yyyy")}
                </time>
              </div>

              {post.metadata.readingTime && (
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-primary shrink-0" />
                  <span>{post.metadata.readingTime}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* MDX content with Tailwind Typography styling */}
        <Suspense
          fallback={
            <div className="animate-pulse h-32 sm:h-64 bg-muted rounded-lg" />
          }
        >
          <div className="text-sm sm:text-base">
            <MDXRenderer content={post.content} />
          </div>
        </Suspense>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
