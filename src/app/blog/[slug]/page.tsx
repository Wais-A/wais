import { CustomButton } from "@/components/mdx-components";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { format } from "date-fns";
// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import "./../../globals.css";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Await the params to access slug
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

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  try {
    // Await the params to access slug
    const { slug } = await params;
    const post = await getBlogPost(slug);

    return (
      <article className="container mx-auto py-8 px-4">
        <header className="mb-8">
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

            <h1 className="text-4xl font-bold">{post.metadata.title}</h1>

            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
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

        <div
          className=" prose prose-neutral dark:prose-invert max-w-none  overflow-hidden "
          style={{ paddingBottom: "80px" }}
        >
          <MDXRemote source={post.content} components={{ CustomButton }} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
