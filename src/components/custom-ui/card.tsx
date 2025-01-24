import type { ReactNode } from "react";

/**
 * Card Component Props
 * @property children - Card content
 * @property className - Optional CSS classes for custom styling
 */
interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card Component
 *
 * A reusable card component with consistent styling:
 * - Semi-transparent background with backdrop blur
 * - Rounded corners and border
 * - Hover effect with subtle shadow
 * - Supports custom className for flexibility
 */
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`relative bg-card backdrop-blur-sm rounded-xl p-6 border transition-all hover:shadow-lg hover:shadow-shadowColor ${className}`}
    >
      {children}
    </div>
  );
}
