"use client";

import Link from "next/link";
import { NAV_DATA } from "@/lib/navigation";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/theme-toggle";

export function NavDock() {
  return (
    <Dock className="fixed bottom-8 left-1/2 -translate-x-1/2">
      {NAV_DATA.navbar.map((item) => (
        <DockIcon key={item.label}>
          <Link
            href={item.href}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all group-hover:scale-110"
          >
            <item.icon className="h-5 w-5" />
          </Link>
        </DockIcon>
      ))}
      
      <div className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-800" />
      
      {NAV_DATA.social.map((item) => (
        <DockIcon key={item.name}>
          
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all group-hover:scale-110"
          >
            <item.icon className="h-5 w-5" />
          </a>
        </DockIcon>
      ))}

      <div className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-800" />
      
      <DockIcon>
        <ThemeToggle />
      </DockIcon>
    </Dock>
  );
}