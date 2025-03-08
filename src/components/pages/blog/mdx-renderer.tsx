// src/components/pages/blog/mdx-renderer.tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomButton } from "./mdx-components";

interface MDXRendererProps {
  content: string;
  className?: string;
}

export function MDXRenderer({ content, className = "" }: MDXRendererProps) {
  return (
    <div
      className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}
    >
      <MDXRemote source={content} components={{ CustomButton }} />
    </div>
  );
}
