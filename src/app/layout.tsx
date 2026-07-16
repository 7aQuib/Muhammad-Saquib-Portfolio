import type { Metadata } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graphic Design Portfolio",
  description: "Branding, Packaging, Social Media, and Painting Materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white transition-colors duration-500">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Cursor />
            {/* SVG Filters for the effect from the original theme */}
            <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden="true">
              <defs>
                <filter id=""><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="2"/></filter>
                <filter id="-2"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
              </defs>
            </svg>
            {children}
            <Analytics />
          </ThemeProvider>
      </body>
    </html>
  );
}
