"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profileImage from "../Assets/Images/Profile.png";
import Container from "@/components/ui/Container";

export function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Column - Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleUp}
            className="h-full"
          >
            <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden bg-card border border-border flex items-end justify-center group">
              {/* Background watermark 'M' */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">
                <span className="text-[30rem] font-display font-bold leading-none tracking-tighter">M</span>
              </div>

              <Image
                src={profileImage}
                alt="Mohammad Saquib"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column - Text & Stats */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-between gap-12"
          >
            {/* Bio Text */}
            <motion.div variants={fadeUp} className="space-y-6 text-sm md:text-base text-muted-foreground font-sans font-light leading-relaxed">
              <p>
                <strong className="text-foreground font-medium">I'm Mohammad Saquib</strong>, a <span className="italic text-foreground">Graphic Designer</span> specializing in branding, packaging, and high-impact marketing visuals.
              </p>
              <p>
                With hands-on experience in designing for FMCG products, <span className="italic text-foreground">social media campaigns</span>, and <span className="italic text-foreground">digital-first brands</span>, I focus on creating visuals that are not only aesthetically strong but also strategically aligned with business goals.
              </p>
              <p>
                My approach combines modern design systems, storytelling, and consumer psychology to build designs that connect, convert, and scale across platforms.
              </p>
              <p>
                I've worked on projects ranging from product packaging and label design to campaign creatives and brand identity systems, delivering consistent and impactful visual experiences.
              </p>
            </motion.div>

            {/* Stats Boxes */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* 20+ Projects Box */}
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-center backdrop-blur-md relative overflow-hidden h-full group hover:bg-card/80 transition-colors">
                  <div className="absolute -right-4 -bottom-4 text-[10rem] lg:text-[12rem] font-display font-bold text-foreground/[0.02] group-hover:text-foreground/[0.05] transition-all duration-500 group-hover:scale-110 select-none pointer-events-none leading-none tracking-tighter">
                    20
                  </div>
                  <div className="relative z-10 flex flex-col">
                    <div className="text-8xl lg:text-8xl font-display font-bold text-foreground tracking-tighter mb-2 group-hover:text-accent transition-colors">
                      20<span className="text-muted-foreground">+</span>
                    </div>
                    <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                      <span className="text-lg sm:text-2xl font-serif italic text-muted-foreground group-hover:text-foreground transition-colors">Successful projects</span>
                    </div>
                  </div>
                </div>

                {/* Experience Box */}
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-center backdrop-blur-md relative overflow-hidden h-full group hover:bg-card/80 transition-colors">
                  <div className="flex flex-col items-start mb-6 z-10 w-full">
                    <div className="text-xl font-serif italic text-muted-foreground group-hover:text-foreground transition-colors">Hands on</div>
                    <div className="text-3xl sm:text-4xl font-sans font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">Experience</div>
                  </div>

                  <div className="flex flex-col gap-3.5 w-full z-10 mt-2">
                    <div className="flex items-center gap-3.5 group/item">
                      <div className="text-muted-foreground group-hover/item:text-accent transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline strokeLinecap="round" strokeLinejoin="round" points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line strokeLinecap="round" strokeLinejoin="round" x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      </div>
                      <span className="font-serif italic text-muted-foreground text-sm sm:text-base group-hover/item:text-foreground transition-colors group-hover/item:translate-x-1 duration-300">Branding & Packaging</span>
                    </div>

                    <div className="flex items-center gap-3.5 group/item">
                      <div className="text-muted-foreground group-hover/item:text-accent transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                      </div>
                      <span className="font-serif italic text-muted-foreground text-sm sm:text-base group-hover/item:text-foreground transition-colors group-hover/item:translate-x-1 duration-300">Social Media Design</span>
                    </div>

                    <div className="flex items-center gap-3.5 group/item">
                      <div className="text-muted-foreground group-hover/item:text-accent transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                      </div>
                      <span className="font-serif italic text-muted-foreground text-sm sm:text-base group-hover/item:text-foreground transition-colors group-hover/item:translate-x-1 duration-300">Print Media Works</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Connect Box */}
              <Link href="#contact" className="group rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 backdrop-blur-md hover:bg-card/80 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-display font-bold text-foreground tracking-tighter group-hover:text-accent transition-colors">5+</span>
                  <div className="flex flex-col items-start">
                    <span className="font-display italic text-muted-foreground text-xl group-hover:text-foreground transition-colors">Happy</span>
                    <span className="font-display font-medium text-2xl text-foreground">Clients</span>
                  </div>
                </div>
                <div className="w-px h-12 bg-border hidden md:block" />
                <div className="text-3xl lg:text-4xl font-display font-medium text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-3">
                  Let's Connect
                  <svg className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
