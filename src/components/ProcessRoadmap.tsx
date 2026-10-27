"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Container from "@/components/ui/Container";

interface Step {
  step: string;
  title: string;
  desc: string;
}

export default function ProcessRoadmap({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Pinning and drawing the vertical line
    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // Pin when the section reaches the center of viewport
        end: `+=${window.innerHeight * 1.5}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const segments = steps.length - 1;
          
          // Math.round makes the state switch exactly halfway between nodes
          const closestIndex = Math.round(progress * segments);
          
          setActiveIndex(closestIndex);
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="bg-background text-foreground min-h-screen flex flex-col justify-center py-20 relative overflow-hidden border-t-2 border-b-2 border-border"
    >
      <Container className="w-full relative z-10">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          
          {/* Title block */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Working Process
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight leading-none">
              Roadmap
            </h2>
            <p className="text-xl md:text-2xl font-hand text-muted-foreground mt-4 max-w-sm">
              How we turn strategy into a tangible reality.
            </p>
          </div>

          {/* Dynamic Active Description */}
          <div className="relative min-h-[160px] flex items-center">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeIndex === idx 
                    ? 'opacity-100 transform-none pointer-events-auto' 
                    : activeIndex > idx 
                      ? 'opacity-0 -translate-y-full pointer-events-none'
                      : 'opacity-0 translate-y-full pointer-events-none'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    Phase {step.step}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Vertical Timeline Section */}
        <div className="flex flex-col gap-10 mt-12 border-l-2 border-border pl-8 md:pl-12 relative max-w-2xl">
          {/* Animated vertical track */}
          <div 
            ref={lineRef}
            className="absolute -left-[2px] top-0 bottom-0 w-[4px] bg-foreground origin-top scale-y-0 z-10 rounded-full"
          />

          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            const isPast = activeIndex > idx;
            const isReached = isActive || isPast;

            return (
              <div 
                key={idx} 
                className="relative cursor-pointer group" 
                onClick={() => setActiveIndex(idx)}
              >
                {/* Vertical Node Dot */}
                <div className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 flex items-center justify-center ${
                  isReached ? 'bg-foreground border-foreground' : 'bg-background border-border'
                }`}>
                  {isActive && <div className="w-2 h-2 rounded-full bg-accent" />}
                </div>
                
                {/* Active Outer Ring */}
                <div className={`absolute -left-[51px] md:-left-[67px] top-[-3.5px] w-10 h-10 rounded-full border-2 border-accent transition-all duration-700 ease-out pointer-events-none ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} />

                <div className="mb-2">
                  <span className={`text-xs font-mono px-3.5 py-1 rounded-full border-2 inline-block mb-2 transition-colors ${
                    isActive ? 'bg-foreground text-background border-foreground shadow-sm' : 'bg-transparent text-muted-foreground border-border'
                  }`}>
                    {step.step}
                  </span>
                  <h4 className={`text-xl md:text-2xl font-bold font-display transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm font-sans text-muted-foreground mt-1 max-w-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
