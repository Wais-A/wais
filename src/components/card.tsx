import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // Defines the type for content passed into the component
  className?: string; // Optional className for custom styles
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`relative bg-card backdrop-blur-sm rounded-xl p-6 border transition-all hover:shadow-lg hover:shadow-shadowColor ${className}`}
    >
      {children}
    </div>
  );
}
