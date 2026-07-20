import { AboutContent } from "./AboutContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Mohammad Saquib, a Professional Graphic Designer and Brand Crafter with over 3 years of experience.",
  openGraph: {
    title: "About Me | Mohammad Saquib",
    description: "Learn more about Mohammad Saquib, a Professional Graphic Designer and Brand Crafter with over 3 years of experience.",
  },
  alternates: {
    canonical: "/about",
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
