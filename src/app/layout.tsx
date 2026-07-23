import type { Metadata } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { Preloader } from "@/components/Preloader";
import Spotlight from "@/components/ui/Spotlight";

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
  metadataBase: new URL("https://muhammad-saquib-portfolio.vercel.app"),
  title: {
    default: "Mohammad Saquib | Graphic Design Portfolio",
    template: "%s | Mohammad Saquib",
  },
  description: "Brand & Packaging Designer crafting high-impact visual identities, social media creatives, and print media designs.",
  keywords: ["Graphic Designer", "Brand Identity", "Packaging Design", "Social Media Design", "Portfolio", "Mohammad Saquib", "Vismora Studio"],
  authors: [{ name: "Mohammad Saquib" }],
  creator: "Mohammad Saquib",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-saquib-portfolio.vercel.app",
    title: "Mohammad Saquib | Graphic Design Portfolio",
    description: "Brand & Packaging Designer crafting high-impact visual identities, social media creatives, and print media designs.",
    siteName: "Mohammad Saquib Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Saquib | Graphic Design Portfolio",
    description: "Brand & Packaging Designer crafting high-impact visual identities, social media creatives, and print media designs.",
    creator: "@Ansarisaquib19",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohammad Saquib",
  "url": "https://muhammad-saquib-portfolio.vercel.app",
  "jobTitle": "Graphic Designer",
  "worksFor": {
    "@type": "Organization",
    "name": "Vismora Studio"
  },
  "sameAs": [
    "https://www.linkedin.com/in/muhammad-saquib-ansari-823621381/",
    "https://www.instagram.com/vismora.studio/",
    "https://www.facebook.com/profile.php?id=61578699250259",
    "https://x.com/Ansarisaquib19",
    "https://www.behance.net/ansarisaquib3",
    "https://dribbble.com/muhammad-saquib-ansari"
  ]
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
            <Preloader />
            <Cursor />
            <Spotlight />
            {/* SVG Filters for the effect from the original theme */}
            <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden="true">
              <defs>
                <filter id=""><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="2"/></filter>
                <filter id="-2"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
              </defs>
            </svg>
            {children}
            <Analytics />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </ThemeProvider>
      </body>
    </html>
  );
}
