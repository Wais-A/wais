/**
 * Theme Configuration
 *
 * This file defines the theme settings for the application, including
 * color palettes and visual effects. It allows for easy customization
 * of the application's appearance by modifying these configurations.
 */
import type { ThemeConfig } from "@/types/theme";

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "emerald",
    accent: "indigo",
    background: "dark",
  },
  effects: {
    gradient: true,
    hover: "scale",
    opacity: 0.5,
  },
};
