"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import MagneticButton from "@/components/motion/MagneticButton";

import ImgIdentity from "@/Assets/Images/project-section-banner/Identity Design.jpg";
import ImgMotion from "@/Assets/Images/project-section-banner/Motion Graphics Desing.png";
import ImgPackaging from "@/Assets/Images/project-section-banner/Packeging Solution.png";
import ImgPrint from "@/Assets/Images/project-section-banner/Print Media.png";
import ImgSocial from "@/Assets/Images/project-section-banner/Social Media Creative.png";

const projects = [
  {
    title: "Identity Design",
    category: "Branding",
    image: ImgIdentity,
    link: "https://www.behance.net/ansarisaquib3"
  },
  {
    title: "Motion Graphics",
    category: "Animation",
    image: ImgMotion,
    link: "https://www.behance.net/ansarisaquib3"
  },
  {
    title: "Packaging Solution",
    category: "Product",
    image: ImgPackaging,
    link: "https://www.behance.net/ansarisaquib3"
  },
  {
    title: "Print Media",
    category: "Editorial",
    image: ImgPrint,
    link: "https://www.behance.net/ansarisaquib3"
  },
  {
    title: "Social Media Creative",
    category: "Marketing",
    image: ImgSocial,
    link: "https://www.behance.net/ansarisaquib3"
  }
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Smooth cursor follow using GSAP
  useGSAP(() => {
    if (!cursorRef.current) return;
    
    // GSAP quickTo for high performance following (springy ease)
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power3.out" });
    
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor width (400) and height (300) to center it under the mouse
      xTo(e.clientX - 200);
      yTo(e.clientY - 150);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="portfolio" className="relative w-full min-h-screen bg-background text-foreground py-24 sm:py-32 overflow-hidden cursor-default border-y-2 border-border" ref={containerRef}>
      
      {/* Floating Custom Cursor */}
      <div 
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[300px] z-50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
        style={{
          opacity: activeIndex !== null ? 1 : 0,
          transform: activeIndex !== null ? 'scale(1)' : 'scale(0.8)',
          visibility: activeIndex !== null ? 'visible' : 'hidden'
        }}
      >
        {/* Project Images */}
        {projects.map((proj, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={proj.image} 
              alt={proj.title} 
              fill 
              sizes="400px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        ))}

        {/* View Full Project Badge Overlay */}
        <div className="absolute z-10 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-center border border-white/20 shadow-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-center leading-tight text-white drop-shadow-md whitespace-nowrap">
            View Full Project
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
              Selected <span className="text-brand-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-mono">
              A collection of distinct brands, immersive experiences, and visual stories that elevate businesses to new heights.
            </p>
          </div>
          <div className="pb-2">
            <MagneticButton>
              <Link 
                href="https://www.behance.net/ansarisaquib3"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-btn !bg-accent !text-accent-foreground flex items-center gap-4"
              >
                See all on Behance 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Interactive Project List */}
        <div className="flex flex-col border-t-2 border-border">
          {projects.map((project, idx) => (
            <Link 
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-16 border-b-2 border-border transition-colors hover:bg-muted/30 px-4 lg:px-8 -mx-4 lg:-mx-8 cursor-pointer"
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center gap-6 lg:gap-12">
                <span className="text-muted-foreground font-mono text-sm lg:text-base font-bold">
                  0{idx + 1}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter group-hover:pl-4 lg:group-hover:pl-8 transition-all duration-500 text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
              </div>
              <div className="mt-4 lg:mt-0 pl-12 lg:pl-0 flex items-center justify-between lg:justify-end w-full lg:w-auto">
                <span className="text-muted-foreground font-serif italic text-xl lg:text-2xl group-hover:text-foreground transition-colors duration-300">
                  {project.category}
                </span>
                {/* Mobile/Tablet view project indicator */}
                <span className="lg:hidden text-xs font-mono uppercase tracking-wider border-2 border-border rounded-full px-3 py-1 text-foreground">
                  View
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
