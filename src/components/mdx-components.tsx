// src/components/mdx-components.tsx

import type React from "react";

// Example Custom MDX Component
export const CustomButton = ({ children }: { children: React.ReactNode }) => (
  <button type="button" className="px-4 py-2 rounded">
    {children}
  </button>
);

// Add more custom components as needed
