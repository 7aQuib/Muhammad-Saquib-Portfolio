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
        
        {/* 1. About Hero / Creative Manifesto Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Subtle ambient warm back-glow */}
          <div className="absolute -top-12 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Eyebrow Metadata Ribbon */}
          <motion.div 
            variants={fadeUp} 
            className="flex items-center justify-between border-b border-border/80 pb-4 mb-8 sm:mb-12 max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/60 rounded-full border border-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>02 / CREATIVE MANIFESTO</span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground hidden sm:inline">
              STRATEGY × CRAFT × COMMERCE
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="max-w-5xl">
            <motion.h2 
              variants={fadeUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-display font-extrabold tracking-tight text-foreground leading-[1.04]"
            >
              <span>I build visual identities</span>{" "}
              <span className="block sm:mt-1">
                <span className="font-editorial italic font-normal text-accent normal-case tracking-normal">
                  that command authority
                </span>
                <span className="text-accent inline-block ml-1">.</span>
              </span>
            </motion.h2>
          </div>

          {/* Subtitle & Value Proposition Grid */}
          <motion.div 
            variants={fadeUp}
            className="mt-8 sm:mt-12 pt-8 border-t border-border/80 max-w-5xl flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            {/* Left: Interactive Discipline Pills & Manifesto Description */}
            <div className="max-w-2xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: "Branding", tag: "Identity Systems" },
                  { name: "Packaging", tag: "360° Shelf Standout" },
                  { name: "Visual Systems", tag: "Omnichannel Scale" }
                ].map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card border border-border/80 text-xs font-mono uppercase tracking-wider text-foreground font-semibold shadow-2xs hover:border-accent/40 hover:text-accent transition-colors"
                  >
                    <span className="text-accent">✦</span>
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-sans font-light leading-relaxed">
                Branding, packaging, and visual systems for ambitious founders who demand{" "}
                <span className="text-foreground font-medium underline decoration-accent/40 decoration-2 underline-offset-6 hover:decoration-accent transition-colors">
                  market leadership
                </span>
                .
              </p>
            </div>

            {/* Right: Authority Seal Card */}
            <div className="flex-shrink-0 flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-card border border-border/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-display text-xl font-bold">
                ✦
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">Design Standard</p>
                <p className="text-sm font-display font-bold text-foreground">Zero Fluff. Pure Impact.</p>
              </div>
            </div>
          </motion.div>
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
