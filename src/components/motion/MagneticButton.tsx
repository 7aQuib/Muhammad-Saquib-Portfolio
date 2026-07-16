"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function MagneticButton({ 
  children,
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  const move = (e: React.MouseEvent) => {
    if (isReducedMotion || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const leave = () => {
    if (isReducedMotion || !ref.current) return;

    gsap.to(ref.current, { 
      x: 0, 
      y: 0, 
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`will-change-transform inline-block ${className}`}
    >
      {children}
    </div>
  );
}
