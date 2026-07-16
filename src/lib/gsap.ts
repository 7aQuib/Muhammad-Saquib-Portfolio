import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Motion system (CONSISTENT)
export const motion = {
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
};

// Reduced motion handler (FIXED)
export const handleReducedMotion = (selector: string) => {
  if (typeof window === "undefined") return false;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    gsap.set(selector, { opacity: 1, y: 0 });
    return true;
  }

  return false;
};

export { gsap, ScrollTrigger, useGSAP };
