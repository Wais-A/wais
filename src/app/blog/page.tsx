import { content } from "@/config/content";
import { generateMetadata } from "@/lib/metadata";
import { viewport } from "@/lib/metadata";

export const metadata = generateMetadata(
  "Blog - Wais Almakaleh",
  "Read our latest blog posts about technology and development."
);
export { viewport };

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.blog.title}</h1>
      <p className="text-lg mb-12 text-neutral-600 dark:text-neutral-400">
        {content.blog.description}
      </p>

      <div className="grid gap-8">
        <article className="p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg border">
          <time className="text-sm text-neutral-600 dark:text-neutral-400">
            January 13, 2025
          </time>
          <h2 className="text-2xl font-semibold mt-2">Sample Blog Post</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Preview text of the blog post goes here...
          </p>
          <a
            href="/blog/post"
            className="inline-block mt-4 text-primary hover:underline"
          >
            Read more →
          </a>
        </article>
      </div>
    </div>
  );
}
