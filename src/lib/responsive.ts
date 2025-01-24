/**
 * Responsive Design Module
 *
 * Provides utilities for handling responsive design elements including
 * dock configuration and scroll-based visibility management.
 */

import { BREAKPOINTS } from "@/types/responsive";
import type { DockConfig } from "@/types/responsive";
import { useEffect, useState } from "react";

/**
 * Default dock configuration for desktop screens.
 * Used during server-side rendering before client-side hydration.
 */
const defaultConfig: DockConfig = {
  iconDistance: 140,
  iconMagnification: 50,
  iconSize: 40,
};

/**
 * Determines dock configuration based on screen width.
 * Adjusts icon size, spacing, and magnification for different breakpoints.
 *
 * @param screenWidth - The current viewport width in pixels
 * @returns DockConfig object with appropriate measurements for the screen size
 */
export function getDockConfig(screenWidth: number): DockConfig {
  if (screenWidth <= BREAKPOINTS.sm) {
    return {
      iconDistance: 65,
      iconMagnification: 35,
      iconSize: 35,
    };
  }

  if (screenWidth <= BREAKPOINTS.lg) {
    return {
      iconDistance: 110,
      iconMagnification: 48,
      iconSize: 36,
    };
  }

  // Restore original desktop values
  return defaultConfig;
}

/**
 * Hook that manages visibility of UI elements based on scroll position.
 * Implements smart scroll behavior:
 * - Always visible in first 300px from top
 * - Always visible near page bottom
 * - Hides when scrolling down
 * - Shows when scrolling up past threshold
 *
 * @returns boolean indicating whether the element should be visible
 */
export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    let upScrollDistance = 0;

    function handleScroll() {
      const scrollingElement = document.scrollingElement;
      const currentScroll = scrollingElement ? scrollingElement.scrollTop : 0;
      const SCROLL_THRESHOLD = 150; // Minimum pixels to scroll up before showing navbar

      // Always show navbar in the first 300px from top
      if (currentScroll < 300) {
        setIsVisible(true);
        upScrollDistance = 0; // Reset upward scroll tracking
        lastScroll = currentScroll;
        return;
      }

      // Always show navbar when near the bottom of the page
      if (
        window.innerHeight + currentScroll >=
        (scrollingElement ? scrollingElement.scrollHeight : 0) - 50
      ) {
        setIsVisible(true);
        upScrollDistance = 0; // Reset upward scroll tracking
        lastScroll = currentScroll;
        return;
      }

      // Determine scroll direction and update tracking
      if (currentScroll > lastScroll) {
        // Scrolling down
        setIsVisible(false);
        upScrollDistance = 0; // Reset upward scroll tracking
      } else {
        // Scrolling up
        const scrollDifference = lastScroll - currentScroll;
        upScrollDistance += scrollDifference;

        // Only show navbar if we've scrolled up enough
        if (upScrollDistance >= SCROLL_THRESHOLD) {
          setIsVisible(true);
        }
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}

/**
 * Hook that manages responsive dock configuration.
 * Handles window resize events with debouncing to prevent performance issues.
 * Initializes with default desktop config during SSR, then updates based on actual window size.
 *
 * @returns DockConfig object with current responsive measurements
 */
export function useDockConfig(): DockConfig {
  const [dockConfig, setDockConfig] = useState<DockConfig>(defaultConfig);

  useEffect(() => {
    // Update config with actual window width after mount
    setDockConfig(getDockConfig(window.innerWidth));

    const updateDockConfig = () => {
      setDockConfig(getDockConfig(window.innerWidth));
    };

    // Set up debounced resize handler
    const handleResize = createDebouncedResizeHandler(updateDockConfig);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dockConfig;
}
/**
 * Creates a debounced handler for window resize events.
 * Prevents excessive updates by waiting for resize events to settle.
 *
 * @param updateDockConfig - Function to update dock configuration
 * @returns Debounced event handler function with 200ms delay
 */
function createDebouncedResizeHandler(updateDockConfig: () => void) {
  let timeoutId: number | undefined;

  return () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      updateDockConfig();
    }, 200);
  };
}
