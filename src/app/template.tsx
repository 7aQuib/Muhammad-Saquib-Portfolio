"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Wipe element that sweeps across the screen on enter */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent origin-bottom z-[100]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Wipe element that sweeps across the screen on exit */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent origin-top z-[100]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* The actual content that fades in and scales slightly */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex flex-col relative z-10 w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
