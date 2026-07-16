"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motion } from "@/lib/motion";

export default function Reveal({
  children,
  y = motion.y.md,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.batch(ref.current, {
      onEnter: (batch) => {
        gsap.from(batch, {
          y,
          opacity: 0,
          delay,
          duration: motion.duration,
          ease: motion.ease,
        });
      },
    });
  });

  return <div ref={ref} className={`will-change w-full h-full ${className}`.trim()}>{children}</div>;
}
