"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if we've already played the preloader this session
    if (sessionStorage.getItem("preloader-played")) {
      setIsLoading(false);
      return;
    }

    // Lock body scroll
    document.body.style.overflow = "hidden";

    let start = 0;
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        
        // Brief pause at 100 before animating out
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("preloader-played", "true");
          document.body.style.overflow = "auto";
        }, 700); 
      } else {
        setProgress(Math.floor(start));
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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* Staggered Vertical Columns Background */}
          <div className="absolute inset-0 flex z-10 w-full h-full">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.1, // Stagger delay for the wipe effect
                }}
                className="w-1/4 h-full bg-[#0a0a0a]"
              />
            ))}
          </div>

          {/* Tiny Brand Name (Top Left) */}
          <motion.div
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-8 left-8 md:top-12 md:left-12 z-30 font-sans text-xs md:text-sm tracking-[0.4em] text-white/50 uppercase"
          >
            Vismora Studio
          </motion.div>

          {/* Massive Percentage Counter */}
          <motion.div
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="relative z-30 font-display font-bold text-white tracking-tighter leading-none flex items-baseline justify-center"
            style={{ fontSize: "clamp(6rem, 25vw, 25rem)" }}
          >
            {progress}
            <span className="text-3xl md:text-6xl lg:text-[6rem] font-sans font-light text-white/50 ml-2 md:ml-4">
              %
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
