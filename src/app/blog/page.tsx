import { contentConfig } from '@/config';

export default function Blog() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          {contentConfig.blog.title}
        </h1>
        <p className="text-lg mb-12 text-neutral-600 dark:text-neutral-400">
          {contentConfig.blog.description}
        </p>
        
        <div className="grid gap-8">
          <article className="p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg border">
            <time className="text-sm text-neutral-600 dark:text-neutral-400">
              January 13, 2025
            </time>
            <h2 className="text-2xl font-semibold mt-2">
              Sample Blog Post
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              Preview text of the blog post goes here...
            </p>
            <a href="#" className="inline-block mt-4 text-primary hover:underline">
              Read more →
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}