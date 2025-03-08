"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollRef = useRef(0);
  const upScrollDistanceRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollingElement = document.scrollingElement;
          const currentScroll = scrollingElement
            ? scrollingElement.scrollTop
            : 0;
          const SCROLL_THRESHOLD = 150;

          // Always show in first 300px of page
          if (currentScroll < 300) {
            setIsVisible(true);
            upScrollDistanceRef.current = 0;
            lastScrollRef.current = currentScroll;
            ticking = false;
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
            ticking = false;
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
          ticking = false;
        });

        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}
