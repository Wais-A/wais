"use client";

import { useEffect, useState } from "react";

/**
 * useScrollVisibility - A client-only hook that hides/shows the dock
 */
export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    let upScrollDistance = 0;

    function handleScroll() {
      const scrollingElement = document.scrollingElement;
      const currentScroll = scrollingElement ? scrollingElement.scrollTop : 0;
      const SCROLL_THRESHOLD = 150; // how many pixels to scroll up to show dock

      // Always show in first 300px of page
      if (currentScroll < 300) {
        setIsVisible(true);
        upScrollDistance = 0;
        lastScroll = currentScroll;
        return;
      }

      // Always show near bottom
      if (
        window.innerHeight + currentScroll >=
        (scrollingElement ? scrollingElement.scrollHeight : 0) - 50
      ) {
        setIsVisible(true);
        upScrollDistance = 0;
        lastScroll = currentScroll;
        return;
      }

      // Otherwise, hide on scroll down, show on scroll up
      if (currentScroll > lastScroll) {
        setIsVisible(false);
        upScrollDistance = 0;
      } else {
        const scrollDifference = lastScroll - currentScroll;
        upScrollDistance += scrollDifference;
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
