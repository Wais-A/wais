// src/mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import type { ImageProps } from "next/image";
import Link from "next/link";
import * as React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with anchor links
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4">
        {children}
      </h3>
    ),
    // Styled paragraphs
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-neutral-700 dark:text-neutral-300">
        {children}
      </p>
    ),
    // Enhanced code blocks
    pre: ({ children, ...props }) => (
      <pre
        className="mt-6 mb-4 overflow-x-auto rounded-lg p-4"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="relative rounded py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {children}
      </code>
    ),
    // Responsive images
    img: (props) => (
      <div className="my-8">
        <Image
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
          alt={props.alt || "Blog image"}
        />
      </div>
    ),
    // Enhanced links
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </Link>
    ),
    // Lists
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),
    ...components,
  };
}
