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
import { useDockConfig, useScrollVisibility } from "@/lib/responsive";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  const isVisible = useScrollVisibility();
  const dockConfig = useDockConfig();

  return (
    <TooltipProvider>
      <Dock
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-4 shadow-md transition-transform duration-300",
          "webkit-overflow-touch webkit-tap-transparent",
          isVisible
            ? "translate-y-0"
            : "translate-y-[150%] max-sm:translate-y-full" // Separate mobile and desktop values
        )}
        direction="middle"
        iconDistance={dockConfig.iconDistance}
        iconMagnification={dockConfig.iconMagnification}
        iconSize={dockConfig.iconSize}
      >
        {/* Navigation Links Section */}
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
        {/* Vertical Divider */}
        <div className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-800" />
        {/* Social Links Section */}
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
