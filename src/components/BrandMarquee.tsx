"use client";

import React from "react";
import { brands } from "@/data/brands";

export function BrandMarquee() {
  // Split brands into two rows
  const row1 = brands.slice(0, Math.ceil(brands.length / 2));
  const row2 = brands.slice(Math.ceil(brands.length / 2));

  return (
    <section className="py-24 bg-background overflow-hidden relative border-y border-border">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground">
          Trusted by Innovative Brands
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-8 max-w-[100vw] overflow-hidden">
        
        {/* Left/Right Gradient Fades */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Moves Left) */}
        <div className="flex w-fit animate-marquee-left hover:pause">
          {[...row1, ...row1, ...row1, ...row1].map((brand, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-8 mx-4 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tighter whitespace-nowrap">
                {brand}
              </h3>
            </div>
          ))}
        </div>

        {/* Row 2 (Moves Right) */}
        <div className="flex w-fit animate-marquee-right hover:pause">
          {[...row2, ...row2, ...row2, ...row2].map((brand, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-8 mx-4 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tighter whitespace-nowrap">
                {brand}
              </h3>
            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%); /* Since we duplicated the array 4 times, 1 loop is 25% */
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite; /* Slightly different speed */
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
