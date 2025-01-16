"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

import Link from "next/link";

import { useEffect, useState } from "react";

/**
 * NavDock Component
 *
 * A responsive navigation dock that appears at the bottom of the screen.
 * Features:
 * - Auto-hides on scroll down, shows on scroll up
 * - Always visible at top of page and bottom of page
 * - Contains navigation links, social links, and theme toggle
 * - Includes tooltips for accessibility
 */
export function NavDock() {
  // Track visibility state of the dock
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frameId: number | null = null;

    const handleScroll = () => {
      // Cancel any pending frame
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY ? "down" : "up";

        // Add a small buffer (1px) for bottom detection to account for rounding
        const isAtBottom =
          currentScrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 1;

        // Only update state if visibility needs to change
        const shouldBeVisible =
          direction === "up" || // Show when scrolling up
          currentScrollY < 10 || // Show when near top
          isAtBottom; // Show when at bottom

        setIsVisible(shouldBeVisible);
        lastScrollY = currentScrollY;
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clean up any pending animation frame
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-4 shadow-md transition-transform duration-300",
          // Apply translation based on visibility
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Navigation Links Section */}
        {navigation.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        {/* Vertical Divider */}
        <div className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-800" />

        {/* Social Links Section */}
        {navigation.social.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        {/* Vertical Divider */}
        <div className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-800" />

        {/* Theme Toggle Button */}
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
