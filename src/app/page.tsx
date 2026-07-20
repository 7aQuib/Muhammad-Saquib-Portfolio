import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohammad Saquib | Graphic Design Portfolio",
  description: "Explore the graphic design portfolio of Mohammad Saquib. Specializing in branding, packaging, social media creatives, and premium visual design.",
  openGraph: {
    title: "Mohammad Saquib | Graphic Design Portfolio",
    description: "Explore the graphic design portfolio of Mohammad Saquib. Specializing in branding, packaging, social media creatives, and premium visual design.",
  },
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <BrandMarquee />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
