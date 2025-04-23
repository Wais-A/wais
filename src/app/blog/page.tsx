// src/app/blog/page.tsx
import Card from "@/components/custom-ui/card";
import { Tags } from "@/components/custom-ui/tagAndList";
import { TextAnimate } from "@/components/ui/text-animate";
import { content } from "@/config/content";
import { getAllBlogPosts } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";
import { parseISO } from "date-fns";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generateMetadata(
  "Blog",
  "Read my latest blog posts about technology, development, and more."
);

/**
 * Blog Index Page Component
 */
export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Header section with title and description */}
      <section className="mb-12">
       /** <h1>
         * <TextAnimate animation="blurInUp" by="character" startOnView={false}>
         *   {content.blog.title}
         * </TextAnimate>
        </h1> */
        <Card className="p-6">
          <h5 className="text-lg text-card-foreground mb-0">
            {content.blog.description}
          </h5>
        </Card>
      </section>

      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            {/* Article preview with hover effects and metadata */}
            <article className="border-b pb-6 last:border-b-0 last:pb-0">
              <Link href={`/blog/${post.slug}`} className="group">
                {/* Featured preview with hover zoom effect */}
                {post.metadata.image && (
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full transition-transform group-hover:scale-[1.01]"
                    />
                  </div>
                )}

                <div className="space-y-2 text-center">
                  {/* Post title first */}
                  <h2 className="text-xl sm:text-2xl font-bold group-hover:text-neutral-950 dark:group-hover:text-neutral-400 transition-colors">
                    {post.metadata.title}
                  </h2>

                  {/* Topic tags below title */}
                  {post.metadata.tags && (
                    <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mb-2">
                      <Tags items={post.metadata.tags ?? []} />
                    </div>
                  )}

                  <p className="text-sm sm:text-base line-clamp-2 text-card-foreground max-w-lg mx-auto">
                    {post.metadata.description}
                  </p>

                  {/* Post metadata */}
                  <div className="whitespace-nowrap overflow-x-auto no-scrollbar px-2 py-3 mt-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-3 sm:space-x-6 min-w-max mx-auto">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary shrink-0" />
                        <time dateTime={post.metadata.date}>
                          {format(parseISO(post.metadata.date), "MMM dd, yyyy")}
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
                </div>
              </Link>
            </article>
          </Card>
        ))}
      </div>
    </div>
  );
}
