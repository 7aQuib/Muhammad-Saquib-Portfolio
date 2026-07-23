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

    // Simulate loading progress
    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        
        // Short delay at 100% before animating out
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("preloader-played", "true");
          document.body.style.overflow = "auto";
        }, 400);
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
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Main Content */}
          <div className="flex flex-col items-center gap-12">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground uppercase"
              >
                Vismora Studio
              </motion.h1>
            </div>
            
            {/* Loading Bar & Counter */}
            <div className="flex flex-col items-center gap-4 w-64 md:w-80">
              <div className="h-[1px] w-full bg-border overflow-hidden">
                <motion.div
                  className="h-full bg-foreground"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="font-sans text-xs tracking-[0.2em] text-muted-foreground flex justify-between w-full">
                <span>LOADING</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
