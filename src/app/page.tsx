import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then((mod) => mod.About));
const BrandMarquee = dynamic(() => import("@/components/BrandMarquee").then((mod) => mod.BrandMarquee));
const Portfolio = dynamic(() => import("@/components/Portfolio").then((mod) => mod.Portfolio));
const Services = dynamic(() => import("@/components/Services").then((mod) => mod.Services));
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.Testimonials));
const Contact = dynamic(() => import("@/components/Contact").then((mod) => mod.Contact));
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));

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
