/**
 * Blog Page Component
 * 
 * This component displays the blog section of the portfolio.
 * It includes a list of blog posts with previews and links to read more.
 * The layout is designed to be responsive and visually appealing using Tailwind CSS.
 */
import { generateMetadata } from "@/lib/metadata";
import { content } from "@/config/content";
import { person } from "@/config/personal";

export const metadata = generateMetadata(
  "Blog - Wais Almakaleh",
  "Read our latest blog posts about technology and development."
);

export default function Blog() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      {/* Radial gradient overlay for visual enhancement */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Blog Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          {content.blog.title} {/* Title of the blog section */}
        </h1>
        <p className="text-lg mb-12 text-neutral-600 dark:text-neutral-400">
          {content.blog.description} {/* Description of the blog section */}
        </p>

        {/* Blog Posts Grid */}
        <div className="grid gap-8">
          <article className="p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg border">
            <time className="text-sm text-neutral-600 dark:text-neutral-400">
              January 13, 2025 {/* Publication date of the blog post */}
            </time>
            <h2 className="text-2xl font-semibold mt-2">
              Sample Blog Post {/* Title of the blog post */}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              Preview text of the blog post goes here...{" "}
              {/* Brief preview of the post */}
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-primary hover:underline"
            >
              Read more → {/* Link to the full blog post */}
            </a>
          </article>
          {/* Additional blog posts can be added here */}
        </div>
      </div>
    </div>
  );
}