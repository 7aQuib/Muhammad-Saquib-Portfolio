"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Ideation.",
  "Composition.",
  "Typography.",
  "Color.",
  "Grid.",
  "Execution.",
];

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    // Check if we've already played the preloader this session
    if (sessionStorage.getItem("preloader-played")) {
      setIsLoading(false);
      return;
    }

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    let start = 0;
    const duration = 3000; // 3 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        
        // Wait at 100% for the glare effect to finish before animating out
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("preloader-played", "true");
          document.body.style.overflow = "auto";
        }, 1200); 
      } else {
        setProgress(Math.floor(start));
        
        // Map 0-45% to the words array
        if (start < 45) {
          const wordIndex = Math.floor((start / 45) * words.length);
          setCurrentWord(Math.min(wordIndex, words.length - 1));
        }
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Top Curtain */}
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute top-0 left-0 w-full h-1/2 bg-background z-10 border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
          {/* Bottom Curtain */}
          <motion.div
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-background z-10 border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
          />

          {/* 3D Grid Background */}
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20 flex items-center justify-center opacity-30"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-[200vw] h-[200vw]"
              style={{
                rotateX: 70,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "4rem 4rem",
              }}
            />
          </motion.div>

          {/* Content Wrapper with Perspective */}
          <motion.div
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative z-30 flex flex-col items-center justify-center w-full h-full"
            style={{ perspective: "1000px" }}
          >
            <AnimatePresence mode="wait">
              {/* Act 1: Rapid Fire Words (0-45%) */}
              {progress < 45 ? (
                <motion.div
                  key="words"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="absolute font-sans text-xl md:text-3xl uppercase tracking-[0.3em] text-muted-foreground font-light"
                >
                  {words[currentWord]}
                </motion.div>
              ) : (
                /* Act 2 & 3: 3D Vismora Studio Reveal (45-100%) */
                <motion.div
                  key="masterpiece"
                  initial={{ rotateX: 60, y: 150, z: -800, opacity: 0 }}
                  animate={{ rotateX: 0, y: 0, z: 0, opacity: 1 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative text-center flex flex-col items-center"
                >
                  {/* Light Glare Effect */}
                  <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none rounded-xl">
                    <motion.div
                      initial={{ x: "-150%" }}
                      animate={{ x: "150%" }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 mix-blend-overlay"
                    />
                  </div>

                  <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground uppercase leading-none">
                    Vismora
                  </h1>
                  <span className="text-lg sm:text-2xl md:text-4xl text-muted-foreground font-sans tracking-[0.4em] font-light mt-2 sm:mt-4 md:mt-6">
                    STUDIO
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Right Percentage Counter */}
          <motion.div
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-40 font-sans text-3xl md:text-5xl font-light tracking-widest text-foreground"
          >
            {progress.toString().padStart(3, "0")}
            <span className="text-muted-foreground text-base md:text-xl font-mono">%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
