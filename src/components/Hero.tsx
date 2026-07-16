"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/Assets/Images/hero-page-banner.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
            hidden: { y: "100%", opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      </span>
    ));
  };

  return (
    <section className="relative min-h-full bg-background overflow-hidden flex items-center pt-20 md:pt-28">
      {/* Background Image Layer (Right Half) */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-x-0 bottom-0 top-20 md:top-28 grid grid-cols-1 md:grid-cols-2 z-0"
      >
        <div className="hidden md:block" />
        <div className="relative h-full w-full opacity-60 md:opacity-100">
          <Image
            src={heroImg}
            alt="Mohammad Saquib"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          {/* Tiny dim so it isn't blindingly white */}
          <div className="absolute inset-0 bg-background/10" />

          {/* Fade left edge into the text area */}
          <div className="absolute top-0 bottom-0 left-0 w-3/4 bg-gradient-to-r from-background via-background/40 to-transparent" />

          {/* Fade right edge */}
          <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />

          {/* Fade top edge */}
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background to-transparent" />

          {/* Fade bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </div>
      </motion.div>

      <Container className="relative z-10 w-full h-full py-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end min-h-[80vh] pb-12 md:pb-20 lg:pb-32">

          {/* Left Column - Typography */}
          <div className="md:col-span-7 flex flex-col justify-end">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="text-muted-foreground font-hand text-3xl md:text-5xl italic mb-2 md:-mb-4 ml-2">
                I'm
              </motion.div>

              <h1 className="text-[12vw] md:text-[6rem] lg:text-[8rem] font-display font-bold text-foreground tracking-tighter leading-[0.85] uppercase relative">
                <div>{renderWordReveal("Muhammad")}</div>
                <div className="flex items-end gap-8">
                  <div>{renderWordReveal("Saquib")}</div>
                  <motion.div variants={itemVariants} className="hidden lg:block pb-2">
                    <div className="text-muted-foreground normal-case tracking-normal leading-normal text-left">
                      <p className="font-display italic text-xl text-muted-foreground">Design Portfolio 2026</p>
                      <p className="font-sans text-xs tracking-[0.2em] mt-1 max-w-[400px] leading-relaxed">
                        Brand & Packaging Designer | Visual Storytelling For Modern Brands
                      </p>
                    </div>
                  </motion.div>
                </div>
              </h1>

              <motion.div variants={itemVariants} className="mt-24 md:mt-32 flex items-center justify-start gap-4 text-muted-foreground group cursor-pointer">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowDownRight className="w-8 h-8 flex-shrink-0 group-hover:text-accent transition-colors" />
                </motion.div>
                <p className="font-sans text-xs uppercase tracking-[0.2em] leading-relaxed group-hover:text-foreground transition-colors">
                  Crafting High-Impact Visual Identities
                </p>
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
    </section>
  );
}
