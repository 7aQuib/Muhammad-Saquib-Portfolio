"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import heroImg from "@/Assets/Images/hero-page-banner.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const scrollYTransform = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = sectionRef.current.getBoundingClientRect();
    
    const xPct = (clientX - left - width / 2) / (width / 2);
    const yPct = (clientY - top - height / 2) / (height / 2);

    mouseX.set(xPct * -15);
    mouseY.set(yPct * -15);
  };

  const containerVariants = {
    hidden: { },
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  const renderWordReveal = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden align-bottom"
        style={{ lineHeight: 1 }}
      >
        <motion.span
          variants={{
            hidden: { y: "100%" },
            visible: { y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative min-h-full bg-background overflow-hidden flex items-center pt-20 md:pt-28"
    >
      {/* Background Image Layer (Right Half) */}
      <motion.div
        style={{ y: scrollYTransform, opacity }}
        className="absolute inset-x-0 bottom-0 top-20 md:top-28 grid grid-cols-1 md:grid-cols-2 z-0"
      >
        <div className="hidden md:block" />
        <motion.div 
          className="relative h-full w-full opacity-60 md:opacity-100 scale-[1.05]"
          style={{ x: smoothMouseX, y: smoothMouseY }}
        >
          <Image
            src={heroImg}
            alt="Mohammad Saquib"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            priority
            placeholder="blur"
          />
          {/* Tiny dim so it isn't blindingly white */}
          <div className="absolute inset-0 bg-background/10" />

          {/* Corner sticker badge matching reference image */}
          <div className="hidden sm:block absolute bottom-16 right-8 md:right-16 z-20 bg-accent text-white px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider rounded-xl shadow-2xl -rotate-6 border border-white/20">
            HANDCRAFTED STORIES ✦
          </div>

          {/* Fade left edge into the text area */}
          <div className="absolute top-0 bottom-0 left-0 w-3/4 bg-gradient-to-r from-background via-background/40 to-transparent" />

          {/* Fade right edge */}
          <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />

          {/* Fade top edge */}
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background to-transparent" />

          {/* Fade bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </motion.div>

      <Container className="relative z-10 w-full h-full py-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end min-h-[80vh] pb-12 md:pb-20 lg:pb-32">

          {/* Left Column - Typography */}
          <div className="md:col-span-7 flex flex-col justify-end pt-12 md:pt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Top metadata pill from reference */}
              <motion.div variants={itemVariants} className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6 max-w-lg border-b border-border/80 pb-3">
                <span>INDEPENDENT DESIGN DIRECTOR</span>
                <span className="text-accent font-bold">AVAILABLE Q1 2026</span>
              </motion.div>

              {/* Editorial script kicker from reference */}
              <motion.p variants={itemVariants} className="font-editorial text-2xl md:text-3xl text-muted-foreground italic mb-2 tracking-normal lowercase">
                a little structure, a lot of soul.
              </motion.p>

              {/* Main Headline */}
              <h1 className="text-[12vw] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-display font-bold text-foreground tracking-tight leading-[0.88] uppercase relative">
                <div>{renderWordReveal("Muhammad")}</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-editorial italic font-normal text-foreground normal-case tracking-normal">
                    Saquib
                  </span>
                  <span className="text-accent">.</span>
                </div>
              </h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground font-sans font-light max-w-xl leading-relaxed"
              >
                Senior Brand & Packaging Designer. Turning ambitious ideas into distinctive, market-leading visual identities.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="mt-8 md:mt-12 flex flex-wrap items-center gap-6">
                <MagneticButton>
                  <a 
                    href="#projects" 
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap inline-flex items-center gap-3 text-sm"
                  >
                    <span>Explore My Work</span>
                    <span>→</span>
                  </a>
                </MagneticButton>
                
                <a 
                  href="#contact"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>Let's collaborate</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Left-Aligned - Philosophy Quote */}
          {/* <div className="relative mt-12 md:mt-16 md:col-span-12 flex flex-col justify-end items-start pb-12 md:pb-0 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="relative flex flex-col items-start text-left text-neutral-300 w-full max-w-3xl bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-xl border border-white/90 rounded-xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display italic text-lg text-white">Design Philosophy</span>
                <ArrowDownRight className="w-5 h-5 text-neutral-500" />
              </div>
              <p className="font-sans text-sm md:text-lg text-white leading-relaxed font-light">
                "I believe great design is not decoration <span className="italic font-medium">it's communication</span>. Every visual decision should serve a purpose, whether it's improving usability, enhancing perception, or driving conversions."
              </p>
            </motion.div>
          </div> */}

        </div>
      </Container>

      {/* Ticker marquee matching reference image */}
      <div className="w-full border-t border-border bg-card/60 backdrop-blur-md py-4 overflow-hidden relative z-20">
        <div className="flex w-fit animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-4 text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span>Brand Identity</span>
              <span className="text-accent font-bold">✦</span>
              <span>Packaging Design</span>
              <span className="text-accent font-bold">✦</span>
              <span>Social Media Creatives</span>
              <span className="text-accent font-bold">✦</span>
              <span>Ads Campaign Creatives</span>
              <span className="text-accent font-bold">✦</span>
              <span>Creative Direction</span>
              <span className="text-accent font-bold">✦</span>
              <span>Visual Storytelling</span>
              <span className="text-accent font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
