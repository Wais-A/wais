import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`relative bg-card/30 backdrop-blur-md rounded-xl p-6 border transition-all hover:shadow-lg hover:shadow-shadowColor ${className}`}
    >
      {children}
    </div>
  );
}
