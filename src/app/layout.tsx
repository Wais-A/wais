import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavDock } from "@/components/navigation/nav-dock";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import { generateMetadata, viewport } from "@/lib/metadata";
import { Providers } from "./providers";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = generateMetadata();
export { viewport };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.meta.lang || "en"}
      className={themeConfig.colors.background}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="w-full bg-background dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative min-h-dvh lg:py-20 ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="relative z-10 max-w-6xl mx-auto px-4">
              <main style={{ paddingBottom: "80px" }}>
                {children} <Analytics /> <SpeedInsights />
              </main>
            </div>
            <NavDock />
          </div>
        </Providers>
      </body>
    </html>
  );
}
