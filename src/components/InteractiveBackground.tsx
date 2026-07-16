"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for animated elements
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we are on client side and elements exist
    if (!orb1Ref.current || !orb2Ref.current || !shape1Ref.current || !shape2Ref.current) return;

    // Use GSAP's highly optimized quickTo for performance
    const moveOrb1X = gsap.quickTo(orb1Ref.current, "x", { duration: 0.8, ease: "power3" });
    const moveOrb1Y = gsap.quickTo(orb1Ref.current, "y", { duration: 0.8, ease: "power3" });
    
    const moveOrb2X = gsap.quickTo(orb2Ref.current, "x", { duration: 1.2, ease: "power3" });
    const moveOrb2Y = gsap.quickTo(orb2Ref.current, "y", { duration: 1.2, ease: "power3" });
    
    const moveShape1X = gsap.quickTo(shape1Ref.current, "x", { duration: 1.5, ease: "power3" });
    const moveShape1Y = gsap.quickTo(shape1Ref.current, "y", { duration: 1.5, ease: "power3" });
    
    const moveShape2X = gsap.quickTo(shape2Ref.current, "x", { duration: 0.6, ease: "power3" });
    const moveShape2Y = gsap.quickTo(shape2Ref.current, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Apply different multipliers for parallax depth
      moveOrb1X(x * 80);
      moveOrb1Y(y * 80);
      
      moveOrb2X(x * -120);
      moveOrb2Y(y * -120);
      
      moveShape1X(x * 40);
      moveShape1Y(y * 40);
      
      moveShape2X(x * -60);
      moveShape2Y(y * -60);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Dynamic Gradients */}
      <div 
        ref={orb1Ref}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[100px] opacity-70 will-change mix-blend-multiply"
      />
      <div 
        ref={orb2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-gradient blur-[120px] opacity-30 will-change mix-blend-multiply"
      />

      {/* Abstract Shape 1 */}
      <div 
        ref={shape1Ref}
        className="absolute top-[20%] right-[15%] w-64 h-64 border border-border/40 rounded-full opacity-30 will-change"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent rounded-full backdrop-blur-[2px]" />
      </div>

      {/* Abstract Shape 2 */}
      <div 
        ref={shape2Ref}
        className="absolute bottom-[20%] left-[10%] w-96 h-96 border border-border/30 rounded-[100px] rotate-45 opacity-20 will-change"
      >
        <div className="absolute inset-4 border border-border/20 rounded-[80px]" />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
