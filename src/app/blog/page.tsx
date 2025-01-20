import { getAllBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Your Blog Name",
  description:
    "Read my latest blog posts about technology, development, and more.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 ">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8 last:border-b-0">
            <Link href={`/blog/${post.slug}`} className="group">
              {post.metadata.image && (
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <img
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-2">
                {post.metadata.tags && (
                  <div className="flex gap-2">
                    {post.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-2xl font-bold group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {post.metadata.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <time dateTime={post.metadata.date}>
                    {new Date(post.metadata.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
        ))}
      </div>
    </div>
  );
}
