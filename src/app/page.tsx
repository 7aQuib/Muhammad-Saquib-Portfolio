import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const CategoryProjects = dynamic(() => import("@/components/CategoryProjects").then((mod) => mod.CategoryProjects));
const ProjectProcessShowcase = dynamic(() => import("@/components/ProjectProcessShowcase").then((mod) => mod.ProjectProcessShowcase));
const About = dynamic(() => import("@/components/About").then((mod) => mod.About));
const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline").then((mod) => mod.ProcessTimeline));
const Services = dynamic(() => import("@/components/Services").then((mod) => mod.Services));
const Skills = dynamic(() => import("@/components/Skills").then((mod) => mod.Skills));
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
        {/* Section before "I build visual identities..." featuring Branding, Packaging, Social Media Creatives, Ads Campaigns */}
        <CategoryProjects />
        {/* In-depth working process case study showcase */}
        <ProjectProcessShowcase />
        {/* Starts with "I build visual identities that command authority." */}
        <About />
        {/* Scroll-animated timeline for The Process */}
        <ProcessTimeline />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
