import { NavDock } from "@/components/navigation/nav-dock";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import { generateMetadata, viewport } from "@/lib/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Configure Geist Sans font for primary text
 * Using CSS variables for consistent font usage across components
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

/**
 * Configure Geist Mono font for code and monospace text
 * Matches the sans-serif configuration for consistency
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// Generate metadata for SEO and social sharing
export const metadata: Metadata = generateMetadata();
export { viewport };

/**
 * Root layout component that wraps all pages
 * Implements:
 * - Dark mode as default theme
 * - Custom font loading and fallbacks
 * - Responsive grid background with overlay
 * - Fixed navigation dock
 * - Content padding for dock visibility
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.meta.lang || "en"}
      className={themeConfig.colors.background}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Main container with grid background and gradient overlay */}
        <div className="w-full bg-background dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative overflow-y-auto min-h-dvh lg:py-20 ">
          {/* Radial gradient mask for background pattern */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          {/* Content container with z-index to appear above background */}
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <main style={{ paddingBottom: "80px" }}>{children}</main>
          </div>
          {/* Fixed navigation dock at the bottom */}
          <NavDock />
        </div>
      </body>
    </html>
  );
}
