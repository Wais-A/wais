import { NavDock } from "@/components/nav-dock";
import { generateMetadata, viewport } from "@/lib/metadata"; // Add viewport to import
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata();
export { viewport }; // Export viewport config

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark [&.dark]:transition-none transition-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative overflow-y-auto min-h-dvh lg:py-20 max-sm:py-5">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <main className="">{children}</main>
          </div>
          <NavDock />
        </div>
      </body>
    </html>
  );
}
