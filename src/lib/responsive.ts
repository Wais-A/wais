"use client";

// src/lib/responsive.ts
import { useEffect, useState, useRef } from "react"; // Add useRef import

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollRef = useRef(0);
  const upScrollDistanceRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const scrollingElement = document.scrollingElement;
      const currentScroll = scrollingElement ? scrollingElement.scrollTop : 0;
      const SCROLL_THRESHOLD = 150;

      // Always show in first 300px of page
      if (currentScroll < 300) {
        setIsVisible(true);
        upScrollDistanceRef.current = 0;
        lastScrollRef.current = currentScroll;
        return;
      }

      // Always show near bottom
      if (
        window.innerHeight + currentScroll >=
        (scrollingElement ? scrollingElement.scrollHeight : 0) - 50
      ) {
        setIsVisible(true);
        upScrollDistanceRef.current = 0;
        lastScrollRef.current = currentScroll;
        return;
      }

      // Otherwise, hide on scroll down, show on scroll up
      if (currentScroll > lastScrollRef.current) {
        setIsVisible(false);
        upScrollDistanceRef.current = 0;
      } else {
        const scrollDifference = lastScrollRef.current - currentScroll;
        upScrollDistanceRef.current += scrollDifference;
        if (upScrollDistanceRef.current >= SCROLL_THRESHOLD) {
          setIsVisible(true);
        }
      }

      lastScrollRef.current = currentScroll;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}
