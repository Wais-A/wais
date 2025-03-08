/**
 * Theme Configuration Module
 *
 * Defines the theme settings for the application, including color palettes
 * and visual effects. Implements the ThemeConfig interface for type safety
 * and consistent theming across the application.
 *
 *  {@link ThemeConfig} in types/theme.ts for type definitions
 */

import type { ThemeConfig } from "@/types";

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "emerald", // Primary color used for main interactive elements
    accent: "indigo", // Accent color for highlights and secondary actions
    background: "dark", // Background theme setting: "dark" or "light"
  },

  effects: {
    gradient: true, // Enables gradient backgrounds across components
    hover: "scale", // Hover effect type: "scale", "glow", or "none"
    opacity: 0.5, // Opacity level applied to specific UI elements
  },
  transitions: {
    themeSwitchDuration: 300, // Match the duration in ThemeToggle
  },
};
