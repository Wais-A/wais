export interface DockConfig {
  iconDistance: number;
  iconMagnification: number;
  iconSize: number;
}

// Screen size breakpoints (in pixels)
export const BREAKPOINTS = {
  sm: 640, // Tailwind's sm
  md: 768, // Tailwind's md
  lg: 1024, // Tailwind's lg
  xl: 1280, // Tailwind's xl
  "2xl": 1536, // Tailwind's 2xl
} as const;
