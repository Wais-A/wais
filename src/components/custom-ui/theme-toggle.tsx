"use client";

import { themeConfig } from "@/config/theme";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * Theme Toggle Component
 *
 * Manages theme switching with the following features:
 * - Syncs with system preferences on initial load
 * - Persists theme choice in localStorage
 * - Prevents transition flicker during theme changes
 * - Provides visual feedback through tooltips
 * - Handles SSR by deferring mount
 */
export function ThemeToggle() {
  // Track component mount state for SSR
  const [mounted, setMounted] = useState(false);
  // Track next theme state for tooltip
  const [mode, setMode] = useState("Light");

  /**
   * Handles theme switching with transition prevention
   * 1. Adds class to prevent transitions during switch
   * 2. Updates theme classes and localStorage
   * 3. Updates tooltip text
   * 4. Removes transition prevention after switch
   */
  const toggleDarkMode = () => {
    // Prevent transition flicker
    document.documentElement.classList.add("changing-theme");

    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setMode("Dark"); // Show Dark option when in light mode
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setMode("Light"); // Show Light option when in dark mode
    }

    // Re-enable transitions after theme switch
    setTimeout(() => {
      document.documentElement.classList.remove("changing-theme");
    }, themeConfig.transitions.themeSwitchDuration);
  };

  /**
   * Initialize theme on component mount
   * - Checks localStorage and system preferences
   * - Sets initial theme and tooltip state
   * - Enables client-side rendering
   */
  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
    setMode(isDark ? "Light" : "Dark");
  }, []);

  // Prevent SSR flash
  if (!mounted) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-full"
            )}
          >
            {/* Sun icon - visible in dark mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Theme icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="hidden dark:block transition-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            {/* Moon icon - visible in light mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Theme icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="block dark:hidden transition-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>Switch to {mode} Mode</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
