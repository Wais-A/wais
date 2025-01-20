import { BREAKPOINTS } from "@/types/responsive";
import type { DockConfig } from "@/types/responsive";
import { useEffect, useState } from "react";

// Default config for desktop (used during SSR)
const defaultConfig: DockConfig = {
  iconDistance: 140,
  iconMagnification: 50,
  iconSize: 40,
};

// Get dock configuration based on screen width
export function getDockConfig(screenWidth: number): DockConfig {
  if (screenWidth <= BREAKPOINTS.sm) {
    return {
      iconDistance: 80, // Smaller distance for tighter spacing
      iconMagnification: 40, // Slightly less magnification
      iconSize: 32, // Smaller base size
    };
  }

  if (screenWidth <= BREAKPOINTS.lg) {
    return {
      iconDistance: 110,
      iconMagnification: 48,
      iconSize: 36,
    };
  }

  return defaultConfig;
}

// Create a debounced function for handling resize events
export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    function handleScroll() {
      const currentScroll = window.scrollY;

      // Show at top of page
      if (currentScroll < 50) {
        setIsVisible(true);
        return;
      }

      // Show at bottom of page
      if (
        window.innerHeight + currentScroll >=
        document.documentElement.scrollHeight - 50
      ) {
        setIsVisible(true);
        return;
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScroll > lastScroll) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScroll = currentScroll;
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}

// Keep your other existing functions...

// Hook to handle responsive dock configuration
export function useDockConfig(): DockConfig {
  // Initialize with default config for SSR
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

