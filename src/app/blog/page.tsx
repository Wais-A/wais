import Card from "@/components/custom-ui/card";
import { Tags } from "@/components/custom-ui/tagAndList";
import { getAllBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Your Blog Name",
  description:
    "Read my latest blog posts about technology, development, and more.",
};

/**
 * Blog Index Page Component
 *
 * Displays a list of blog posts with rich previews including:
 * - Featured images with hover animations
 * - Topic tags for easy categorization
 * - Post metadata (date and reading time)
 * - Responsive card layout
 */
export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1>Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.slug}>
            {/* Article preview with hover effects and metadata */}
            <article className="border-b pb-8 last:border-b-0">
              <Link href={`/blog/${post.slug}`} className="group">
                {/* Featured image with hover zoom effect */}
                {post.metadata.image && (
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <img
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-[1.01]"
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

                  {/* Post title with hover effect */}
                  <h2 className="text-2xl font-bold group-hover:text-neutral-950 dark:group-hover:text-neutral-400 transition-colors">
                    {post.metadata.title}
                  </h2>
                  <p>{post.metadata.description}</p>

                  {/* Post metadata */}
                  <div>
                    <time dateTime={post.metadata.date}>
                      {new Date(post.metadata.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                    {post.metadata.readingTime && (
                      <>
                        <span>•</span>
                        <span>{post.metadata.readingTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          </Card>
        ))}
      </div>
    </div>
  );
}
