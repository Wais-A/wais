/**
 * Responsive Design Type Definitions
 *
 * @packageDocumentation Defines types and constants for responsive design features,
 * including dock component configuration and screen breakpoints.
 */

/**
 * Dock Component Configuration Interface
 *
 * Defines the configuration options for the macOS-style dock component
 *
 * @property iconDistance - Space between dock icons in pixels
 * @property iconMagnification - Scale factor for icon hover effect
 * @property iconSize - Base size of dock icons in pixels
 */
export interface DockConfig {
  iconDistance: number;
  iconMagnification: number;
  iconSize: number;
}

/**
 * Screen Breakpoint Constants
 *
 * Defines standard screen width breakpoints following Tailwind CSS conventions.
 * Used for responsive design media queries and conditional rendering.
 *
 * @property sm - Small screens (640px)
 * @property md - Medium screens (768px)
 * @property lg - Large screens (1024px)
 * @property xl - Extra large screens (1280px)
 * @property 2xl - 2X large screens (1536px)
 */
export const BREAKPOINTS = {
  sm: 640, // Tailwind's sm
  md: 768, // Tailwind's md
  lg: 1024, // Tailwind's lg
  xl: 1280, // Tailwind's xl
  "2xl": 1536, // Tailwind's 2xl
} as const;
