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
export function createDebouncedResizeHandler(
  callback: (width: number) => void,
  delay = 100
) {
  let timeoutId: NodeJS.Timeout;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(window.innerWidth);
    }, delay);
  };
}

// Hook to handle scroll visibility
export function useScrollVisibility(): boolean {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frameId: number | null = null;

    const handleScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY ? "down" : "up";
        
        // More precise bottom detection
        const isAtBottom =
          Math.abs(
            (window.innerHeight + window.scrollY) - 
            document.documentElement.scrollHeight
          ) < 10;

        const shouldBeVisible =
          direction === "up" ||
          currentScrollY < 10 ||
          isAtBottom;

        setIsVisible(shouldBeVisible);
        lastScrollY = currentScrollY;
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return isVisible;
}

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
