"use client";

import { ThemeProvider } from "next-themes";
import { SafariThemeManager } from "./safari-theme-manager";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SafariThemeManager />
      {children}
    </ThemeProvider>
  );
}
