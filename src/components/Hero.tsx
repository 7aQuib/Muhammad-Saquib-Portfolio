"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import heroImg from "@/Assets/Images/hero-page-banner.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

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

    mouseX.set(xPct * -12);
    mouseY.set(yPct * -12);
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
    hidden: { opacity: 0, y: 40 },
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
      className="relative bg-background overflow-hidden flex items-center pt-24 md:pt-28 pb-10 md:pb-14"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column - Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Top metadata pill matching reference design */}
              <motion.div variants={itemVariants} className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4 max-w-lg border-b border-border/80 pb-2.5">
                <span>INDEPENDENT DESIGN DIRECTOR</span>
                <span className="text-accent font-bold">AVAILABLE Q1 2026</span>
              </motion.div>

              {/* Editorial script kicker */}
              <motion.p variants={itemVariants} className="font-editorial text-2xl md:text-3xl text-muted-foreground italic mb-2 tracking-normal lowercase">
                a little structure, a lot of soul.
              </motion.p>

              {/* Main Headline */}
              <h1 className="text-[12vw] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.2rem] xl:text-[6.8rem] font-display font-bold text-foreground tracking-tight leading-[0.88] uppercase relative">
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
                className="mt-4 md:mt-5 text-base sm:text-lg md:text-xl text-muted-foreground font-sans font-light max-w-xl leading-relaxed"
              >
                Senior Brand & Packaging Designer. Turning ambitious ideas into distinctive, market-leading visual identities.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="mt-6 md:mt-8 flex flex-wrap items-center gap-6">
                <MagneticButton>
                  <a 
                    href="#projects" 
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap inline-flex items-center gap-3 text-sm"
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

              {/* Direct Email Line matching reference image */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 pt-4 border-t border-border/60 flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider"
              >
                <span>Drop a hello:</span>
                <a 
                  href="mailto:ansarisaquib3@gmail.com" 
                  className="text-foreground hover:text-accent transition-colors font-medium lowercase tracking-normal"
                >
                  ansarisaquib3@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Hero Portrait on Right Side (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none"
              style={{ x: smoothMouseX, y: smoothMouseY }}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Soft atmospheric ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* Framed Studio Card containing the updated right-side cutout image */}
              <div className="relative aspect-[2/3] w-full max-h-[480px] lg:max-h-[540px] rounded-3xl overflow-hidden bg-gradient-to-b from-card/90 via-muted/30 to-card/90 border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-end justify-center p-2">
                <Image
                  src={heroImg}
                  alt="Muhammad Saquib - Senior Brand & Packaging Designer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
                  priority
                  placeholder="blur"
                />

                {/* Corner sticker badge matching reference image */}
                <div className="absolute bottom-5 right-5 z-20 bg-accent text-white px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-xl -rotate-6 border border-white/20 select-none">
                  HANDCRAFTED STORIES ✦
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
