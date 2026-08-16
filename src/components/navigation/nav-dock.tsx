"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
import { useScrollVisibility } from "@/lib/responsive";
import { cn } from "@/lib/utils";

export function NavDock() {
  // A short delay before showing the dock
  const [showDock, setShowDock] = useState(false);

  // Wait 300ms after mount, then allow the dock to slide in
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDock(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Other hooks
  const isVisible = useScrollVisibility();
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMedium = useMediaQuery({ maxWidth: 768 });

  // Determine numeric props
  let iconSize = 35;
  let iconMagnification = 50;
  let iconDistance = 35;
  const direction: "top" | "middle" | "bottom" = "middle";

  if (showDock && isSmall) {
    iconSize = 35;
    iconMagnification = 35;
    iconDistance = 50;
  } else if (showDock && isMedium) {
    iconSize = 35;
    iconMagnification = 40;
    iconDistance = 60;
  } else {
    iconSize = 40;
    iconMagnification = 60;
    iconDistance = 140;
  }

  // If not ready yet, push the dock below the screen. Once showDock=true,
  // use isVisible to decide if it's fully up ("translate-y-0") or partially hidden.
  const positionClass = !showDock
    ? "translate-y-[200%]" // below screen
    : isVisible
      ? "translate-y-0" // fully visible
      : "translate-y-[150%] max-sm:translate-y-[200%]"; // hidden on scroll

  // Define improved button styles with better touch feedback
  const buttonStyle = cn(
    buttonVariants({ variant: "ghost", size: "icon" }),
    "rounded-full flex items-center justify-center",
    // Improved touch states for mobile
    "touch-manipulation",
    "active:bg-accent/80 active:scale-95",
    // Transition for smooth touch feedback
    "transition-all duration-150"
  );

  return (
    <TooltipProvider>
      <Dock
        className={cn(
          "dock-transition",
          "fixed bottom-5 max-sm:bottom-2 sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 right-0 z-50 flex items-center justify-center py-4 shadow-md",
          "webkit-overflow-touch webkit-tap-transparent",
          "bg-background/30 backdrop-blur-md",
          positionClass
        )}
        iconDistance={iconDistance}
        iconMagnification={iconMagnification}
        iconSize={iconSize}
        direction={direction}
      >
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
                  className={buttonStyle}
                >
                  <item.icon />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <div className="mx-2 h-8 w-px bg-muted" />

        {/* Theme Toggle */}
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
