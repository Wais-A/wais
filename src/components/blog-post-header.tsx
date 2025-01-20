// src/components/blog-post-header.tsx
interface BlogPostHeaderProps {
  title: string;
  date: string;
  tags?: string[];
  readingTime?: string;
}

export function BlogPostHeader({
  title,
  date,
  tags,
  readingTime,
}: BlogPostHeaderProps) {
  return (
    <div className="mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
        {title}
      </h1>
      <div className="flex flex-wrap gap-2 items-center text-sm text-neutral-600 dark:text-neutral-400">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
      {tags && tags.length > 0 && (
        <div className="flex gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
