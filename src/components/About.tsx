"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "../Assets/Images/Profile.png";
import Container from "@/components/ui/Container";
export function About() {
  const containerRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 lg:py-48 bg-background overflow-hidden relative">
      <Container className="space-y-32 md:space-y-48 lg:space-y-64">
        
        {/* 1. About Hero Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 lg:col-span-10">
            <motion.h2 
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-display font-bold tracking-tighter leading-[1.1] text-foreground uppercase"
            >
              I build visual identities that command authority.
            </motion.h2>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-6 md:mt-8">
            <motion.p 
              variants={fadeUp}
              className="text-xl md:text-3xl text-muted-foreground font-sans font-light leading-relaxed"
            >
              Branding, packaging, and visual systems for ambitious founders who demand market leadership.
            </motion.p>
          </div>
        </motion.div>

        {/* 2. Positioning (Portrait & Bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl bg-card border border-border group shadow-lg" data-cursor="hover" data-cursor-label="MEET ME">
              <Image
                src={profileImage}
                alt="Mohammad Saquib - Senior Brand & Packaging Designer"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Corner badge matching reference */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-white text-[10px] font-mono uppercase tracking-widest font-bold rounded-full shadow-md">
                DESIGN DIRECTOR
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest px-2">
              <span>Mohammad Saquib</span>
              <span>Based in India</span>
            </div>
          </motion.div>

          {/* Right: Bio & Philosophy matching reference */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="col-span-1 lg:col-span-7 flex flex-col gap-6 md:gap-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/60 rounded-full border border-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground w-fit">
              <span>02 / THE PERSON BEHIND IT</span>
            </div>

            <motion.h3 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-[1.15]">
              Good design starts{" "}
              <span className="font-editorial italic font-normal text-foreground/90 block sm:inline">
                with a better question.
              </span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-foreground font-sans font-light leading-[1.3] tracking-tight">
              What does a brand feel like first? Before typography, color palettes, or packaging forms, there is an instinctual gut reaction: a feeling that something is either <span className="italic text-muted-foreground">premium, punchy, or quietly confident</span>.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed">
              From youth-focused FMCG and retail goods to bold corporate identities, my goal is fundamental: to make a product look undeniably memorable in the three seconds a customer gives it.
            </motion.p>

            {/* Core Tools Badges matching reference image */}
            <motion.div variants={fadeUp} className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mr-2">Core Tools:</span>
              {["Illustrator", "Photoshop", "Figma", "After Effects", "Packaging Prepress"].map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-card border border-border text-foreground/80 shadow-xs"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
