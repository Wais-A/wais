/**
 * Theme Configuration
 *
 * This file defines the theme settings for the application, including
 * color palettes and visual effects. It allows for easy customization
 * of the application's appearance by modifying these configurations.
 */

export const themeConfig = {
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
};
