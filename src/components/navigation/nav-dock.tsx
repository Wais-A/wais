"use client";

import { ThemeToggle } from "@/components/custom-ui/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navigation } from "@/config/navigation";
import { useDockConfig, useScrollVisibility } from "@/lib/responsive";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Navigation Dock Component
 *
 * A macOS-style dock navigation that provides:
 * 1. Responsive Behavior
 *    - Auto-hides on scroll down
 *    - Shows on scroll up
 *    - Always visible at page top/bottom
 *    - Adapts to mobile and desktop viewports
 *
 * 2. Visual Features
 *    - Semi-transparent backdrop with blur
 *    - Smooth show/hide transitions
 *    - Icon magnification on hover
 *    - Accessible tooltips
 *
 * 3. Navigation Sections
 *    - Internal navigation links
 *    - External social links
 *    - Theme toggle
 */
export function NavDock() {
  const isVisible = useScrollVisibility();
  const dockConfig = useDockConfig();

  return (
    <TooltipProvider>
      <Dock
        className={cn(
          // Base styles
          "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-4 shadow-md",
          // Mobile optimizations
          "webkit-overflow-touch webkit-tap-transparent",
          // Visual effects
          "bg-background/30 backdrop-blur-md",
          // Visibility transitions
          "transition-transform duration-300",
          isVisible
            ? "translate-y-0"
            : "translate-y-[150%] max-sm:translate-y-full"
        )}
        direction="middle"
        iconDistance={dockConfig.iconDistance}
        iconMagnification={dockConfig.iconMagnification}
        iconSize={dockConfig.iconSize}
      >
        {/* Main Navigation Links */}
        {navigation.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full",
                    "flex items-center justify-center"
                  )}
                >
                  <item.icon />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        {/* Section Divider */}
        <div className="mx-2 h-8 w-px bg-muted" />

        {/* Social Media Links */}
        {navigation.social.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full",
                    "flex items-center justify-center"
                  )}
                >
                  <item.icon />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        {/* Section Divider */}
        <div className="mx-2 h-8 w-px bg-muted" />

        {/* Theme Toggle */}
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
