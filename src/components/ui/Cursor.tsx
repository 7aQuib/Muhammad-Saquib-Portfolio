"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Accessibility & Device checks
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;
    if (!cursor || !follower || !label) return;

    // 2. Clamped quickTo for lag-free performance (Max 0.25s duration)
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3.out",
    });
    
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3.out",
    });

    const xToFollower = gsap.quickTo(follower, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    
    const yToFollower = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    setIsVisible(true);

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    // 3. State Management (Default, Hover, Hidden)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Hidden State: Inputs and text selection areas
      if (
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.isContentEditable ||
        window.getSelection()?.toString().length
      ) {
        gsap.to(cursor, { opacity: 0, duration: 0.2 });
        gsap.to(follower, { opacity: 0, duration: 0.2 });
        return;
      } else {
        gsap.to(cursor, { opacity: 1, duration: 0.2 });
        gsap.to(follower, { opacity: 1, duration: 0.2 });
      }

      // Hover State logic
      const cursorInteractable = target.closest('[data-cursor]');
      const isClickable = target.closest('a, button');
      
      if (cursorInteractable) {
        const type = cursorInteractable.getAttribute('data-cursor');
        const labelText = cursorInteractable.getAttribute('data-cursor-label');

        if (type === "hover") {
          gsap.to(cursor, { 
            scale: 3, 
            backgroundColor: "white",
            mixBlendMode: "difference",
            duration: 0.3, 
            ease: "power2.out" 
          });
          gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });

          if (labelText) {
            label.innerText = labelText;
            gsap.to(label, { opacity: 1, scale: 0.33, duration: 0.2 }); // scale inverse of cursor scale
          }
        }
      } else if (isClickable) {
        gsap.to(cursor, { 
          scale: 2.5, 
          backgroundColor: "transparent",
          border: "1px solid white",
          mixBlendMode: "difference",
          duration: 0.3, 
          ease: "power2.out" 
        });
        gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorInteractable = target.closest('[data-cursor]');
      const isClickable = target.closest('a, button');

      if (cursorInteractable || isClickable) {
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: "white",
          border: "none",
          mixBlendMode: "difference",
          duration: 0.3, 
          ease: "power2.out" 
        });
        gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(label, { opacity: 0, duration: 0.2 });
        label.innerText = "";
      }
    };

    const handleSelectionChange = () => {
      if (window.getSelection()?.toString().length) {
         gsap.to(cursor, { opacity: 0, duration: 0.2 });
         gsap.to(follower, { opacity: 0, duration: 0.2 });
      } else {
         gsap.to(cursor, { opacity: 1, duration: 0.2 });
         gsap.to(follower, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white/50 rounded-full pointer-events-none z-[99] mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <span 
          ref={labelRef} 
          className="opacity-0 text-black font-mono text-[10px] font-bold tracking-wider whitespace-nowrap pointer-events-none"
        ></span>
      </div>
    </>
  );
}
