import { Tags } from "@/components/custom-ui/tagAndList";
import { CustomButton } from "@/components/pages/blog/mdx-components";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { format } from "date-fns";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

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

    return {
      title: `${post.metadata.title} | Your Blog Name`,
      description: post.metadata.description,
      openGraph: {
        title: post.metadata.title,
        description: post.metadata.description,
        type: "article",
        ...(post.metadata.image && {
          images: [{ url: post.metadata.image }],
        }),
      },
    };
  } catch {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
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
          {/* Featured image with next/image optimization */}
          {post.metadata.image && (
            <div className="mb-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                width={800}
                height={450}
                className="object-cover w-full h-full"
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
            <div className="flex items-center gap-2 text-sm">
              <time dateTime={post.metadata.date}>
                {format(new Date(post.metadata.date), "MMMM dd, yyyy")}
              </time>
              {post.metadata.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.metadata.readingTime}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* MDX content with Tailwind Typography styling */}
        <div className="prose prose-neutral dark:prose-invert max-w-none overflow-hidden">
          <MDXRemote source={post.content} components={{ CustomButton }} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
