"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * This component dynamically updates the theme-color meta tag
 * to match the current theme, ensuring Safari on iOS changes
 * its UI color to match your website theme.
 */
export function SafariThemeManager() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Get existing meta tag or create a new one
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }

    // Set the color based on current theme
    if (resolvedTheme === "dark") {
      // Dark theme color - use your dark theme background
      metaThemeColor.setAttribute("content", "#000000");
    } else {
      // Light theme color - use your light theme background
      metaThemeColor.setAttribute("content", "#ffffff");
    }
  }, [resolvedTheme]);

  // This component doesn't render anything
  return null;
}
