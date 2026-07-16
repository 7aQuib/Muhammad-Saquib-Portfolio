"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "@/lib/motion";

export default function Stagger({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.children || [], {
      y: motion.y.md,
      opacity: 0,
      stagger: motion.stagger,
      duration: motion.duration,
      ease: motion.ease,
    });
  });

  return <div ref={ref} className="w-full h-full">{children}</div>;
}
