export interface DockConfig {
  iconDistance: number;
  iconMagnification: number;
  iconSize: number;
}

// Screen size breakpoints (in pixels)
export const BREAKPOINTS = {
  sm: 640, // Mobile
  lg: 1024, // Tablet
} as const;
