import Link from "next/link";
// src/components/pages/blog/mdx-components.tsx
import type React from "react";

// Example Custom MDX Component
export const CustomButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90"
  >
    {children}
  </button>
);

// Custom link component for MDX that uses Next.js Link
export const CustomLink = ({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href || "#"} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

// Custom callout component
export const Callout = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "error";
}) => {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
  };

  return (
    <div className={`p-4 border-l-4 rounded-r-md my-4 ${styles[type]}`}>
      {children}
    </div>
  );
};

// Add more custom components as needed
