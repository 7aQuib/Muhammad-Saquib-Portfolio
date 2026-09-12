"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for better performance than state
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth out the motion
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Accessibility & Device checks
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return; // Disable on mobile
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for a data-cursor element or clickable element in the DOM tree of the target
      const cursorEl = target.closest('[data-cursor]');
      const clickableEl = target.closest('a, button, input, select, textarea, .link');

      if (cursorEl) {
        setIsHovering(true);
        const label = cursorEl.getAttribute('data-cursor-label');
        if (label) {
          setCursorText(label);
        } else {
          setCursorText("");
        }
      } else if (clickableEl) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Determine size based on state
  const cursorSize = isHovering && cursorText ? 80 : (isHovering ? 48 : 12);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none z-[9999] overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        backgroundColor: (isHovering && !cursorText) ? "transparent" : "#ffffff",
        border: (isHovering && !cursorText) ? "2px solid #ffffff" : "0px solid #ffffff",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <AnimatePresence mode="wait">
        {cursorText && (
          <motion.span
            key={cursorText}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            className="text-black text-[10px] font-bold font-mono uppercase tracking-widest pointer-events-none whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
