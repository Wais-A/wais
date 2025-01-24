"use client";

import { Icons } from "@/components/custom-ui/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { themeConfig } from "@/config/theme";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

/**
 * Theme Toggle Component
 *
 * Manages theme switching with the following features:
 * - Uses next-themes for theme management
 * - Syncs with system preferences
 * - Persists theme choice
 * - Prevents transition flicker
 * - Provides visual feedback through tooltips
 * - Handles SSR by deferring mount
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.add("changing-theme");
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setTimeout(() => {
      document.documentElement.classList.remove("changing-theme");
    }, themeConfig.transitions.themeSwitchDuration);
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep the existing class computation
  const buttonClasses = cn(
    buttonVariants({ variant: "ghost", size: "icon" }),
    "rounded-full relative"
  );

  if (!mounted) {
    return <div className={buttonClasses} />;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              resolvedTheme === "dark" ? "light" : "dark"
            } mode`}
            className={buttonClasses}
          >
            <Icons.themeSun
              className={`h-[1.2rem] w-[1.2rem] transition-transform ${
                resolvedTheme === "dark"
                  ? "rotate-0 scale-100"
                  : "rotate-90 scale-0 hidden"
              }`}
            />
            <Icons.themeMoon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
                resolvedTheme === "dark"
                  ? "rotate-90 scale-0 hidden"
                  : "rotate-0 scale-100"
              }`}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          Switch to {resolvedTheme === "dark" ? "light" : "dark"} mode
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
