import { content } from "@/config/content";
import { generateMetadata, viewport } from "@/lib/metadata";
import Link from "next/link";

export { viewport };
export const metadata = generateMetadata(
  "Blog - Wais Almakaleh",
  "Read my latest posts about software development and technology."
);

export default function Blog() {
  // In a production app, you might want to use a build step or API
  // to generate this list of posts dynamically
  const posts = [
    {
      slug: "first-post",
      ...require("@/content/blog/first-post.mdx").metadata,
    },
    // Add more posts here
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.blog.title}</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="p-6  backdrop-blur-sm rounded-lg border"
          >
            <Link href={`/blog/${post.slug}`}>
              <time className="text-sm text-neutral-600 dark:text-neutral-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="text-2xl font-semibold mt-2">{post.title}</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
