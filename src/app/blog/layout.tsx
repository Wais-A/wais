/**
 * Blog Layout Component
 *
 * Provides consistent padding and container constraints for all blog pages.
 * Wraps both the blog list and individual post pages to maintain visual
 * consistency throughout the blog section.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto px-4 py-8">{children}</div>;
}
