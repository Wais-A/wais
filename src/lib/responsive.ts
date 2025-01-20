import { BREAKPOINTS } from "@/types/responsive";
import type { DockConfig } from "@/types/responsive";
import { useEffect, useState } from "react";

// Default config for desktop (used during SSR)
const defaultConfig: DockConfig = {
  iconDistance: 140,
  iconMagnification: 50,
  iconSize: 40,
};

export function getDockConfig(screenWidth: number): DockConfig {
  if (screenWidth <= BREAKPOINTS.sm) {
    return {
      iconDistance: 65,
      iconMagnification: 35,
      iconSize: 30,
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

// Create a debounced function for handling resize events
export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    function handleScroll() {
      const scrollingElement = document.scrollingElement;
      const currentScroll = scrollingElement ? scrollingElement.scrollTop : 0;

      if (currentScroll < 50) {
        setIsVisible(true);
        return;
      }

      if (
        window.innerHeight + currentScroll >=
        (scrollingElement ? scrollingElement.scrollHeight : 0) - 50
      ) {
        setIsVisible(true);
        return;
      }

      if (currentScroll > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

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
