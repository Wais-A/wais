/**
 * Responsive Design Module
 *
 * Provides utilities for handling responsive design elements including
 * dock configuration and scroll-based visibility management.
 */

import { BREAKPOINTS } from "@/types/responsive";
import type { DockConfig } from "@/types/responsive";
import { useEffect, useState } from "react";

// Add device type detection
type DeviceType = "mobile" | "tablet" | "desktop";

function detectDevice(userAgent: string): DeviceType {
  const isMobile =
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent);
  return isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
}

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
export function getDockConfig(deviceType: DeviceType): DockConfig {
  switch (deviceType) {
    case "mobile":
      return {
        iconDistance: 65,
        iconMagnification: 35,
        iconSize: 35,
      };
    case "tablet":
      return {
        iconDistance: 110,
        iconMagnification: 48,
        iconSize: 36,
      };
    default: // desktop
      return defaultConfig;
  }
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
export function useDockConfig(userAgent?: string): DockConfig {
  const [dockConfig, setDockConfig] = useState<DockConfig>(() => {
    if (typeof window === "undefined" && userAgent) {
      return getDockConfig(detectDevice(userAgent));
    }
    return defaultConfig;
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const deviceType =
        width <= BREAKPOINTS.sm
          ? "mobile"
          : width <= BREAKPOINTS.lg
            ? "tablet"
            : "desktop";
      setDockConfig(getDockConfig(deviceType));
    };

    // Initial update
    update();

    // Create ResizeObserver
    const observer = new ResizeObserver((entries) => {
      // Only trigger update if actual dimension changes
      for (const entry of entries) {
        if (entry.contentRect.width !== window.innerWidth) {
          update();
        }
      }
    });

    // Observe the document element
    if (document.documentElement) {
      observer.observe(document.documentElement);
    }

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once

  return dockConfig;
}
/**
 * Creates a debounced handler for window resize events.
 * Prevents excessive updates by waiting for resize events to settle.
 *
 * @param updateDockConfig - Function to update dock configuration
 * @returns Debounced event handler function with 200ms delay
 */
