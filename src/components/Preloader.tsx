"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // Check if we've already played the preloader this session
    if (sessionStorage.getItem("preloader-played")) {
      setIsLoading(false);
      return;
    }

    // Lock body scroll
    document.body.style.overflow = "hidden";

    const animation = animate(count, 100, {
      duration: 2.5,
      ease: [0.33, 1, 0.68, 1], // Very smooth ease-out curve
      onComplete: () => {
        // Brief pause at 100 before animating out
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("preloader-played", "true");
          document.body.style.overflow = "auto";
        }, 600);
      }
    });

    return () => {
      animation.stop();
      document.body.style.overflow = "auto";
    };
  }, [count]);

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
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1], // Cinematic ease in-out
                  delay: i * 0.1, // Stagger delay for the wipe effect
                }}
                className="w-1/4 h-full bg-[#0a0a0a]"
              />
            ))}
          </div>

          {/* Tiny Brand Name (Top Left) */}
          <motion.div
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-8 left-8 md:top-12 md:left-12 z-30 font-sans text-xs md:text-sm tracking-[0.4em] text-white/50 uppercase"
          >
            Vismora Studio
          </motion.div>

          {/* Massive Percentage Counter */}
          <motion.div
            exit={{ y: "-80%", opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-30 font-display font-bold text-white tracking-tighter leading-none flex items-baseline justify-center"
            style={{ fontSize: "clamp(6rem, 25vw, 25rem)" }}
          >
            <motion.span>{rounded}</motion.span>
            <span className="text-3xl md:text-6xl lg:text-[6rem] font-sans font-light text-white/50 ml-2 md:ml-4">
              %
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
