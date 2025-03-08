import { CodeBlock } from "@/components/ui/code-block";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout, CustomButton, CustomLink } from "./mdx-components";

interface MDXRendererProps {
  content: string;
  className?: string;
}

export function MDXRenderer({ content, className = "" }: MDXRendererProps) {
  return (
    <div
      className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}
    >
      <MDXRemote
        source={content}
        components={{
          // Custom components
          CustomButton,
          Callout,
          a: CustomLink,

          // Override default element rendering
          pre: (props) => (
            <div
              className="not-prose w-full max-w-full overflow-hidden my-6"
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");

            // If the code block has a language class, use the CodeBlock component
            if (match) {
              const language = match[1];
              return (
                <CodeBlock
                  language={language}
                  code={String(children).replace(/\n$/, "")}
                />
              );
            }

            // For inline code, just use a regular code element with wrapping
            return (
              <code
                className="px-1.5 py-0.5 text-sm rounded bg-muted font-mono break-words whitespace-normal"
                {...props}
              >
                {children}
              </code>
            );
          },

          // Table responsiveness improvements
          table: (props) => (
            <div className="w-full overflow-x-auto">
              <table {...props} />
            </div>
          ),

          // Image enhancements with proper accessibility
          img: ({ alt, ...props }) => (
            <img
              {...props}
              alt={alt || "Blog post image"}
              className="rounded-md mx-auto"
              loading="lazy"
            />
          ),
        }}
      />
    </div>
  );
}
