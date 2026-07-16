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

    // Pinning and drawing the line
    gsap.to(lineRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // Pin when the section reaches the center of viewport
        end: `+=${window.innerHeight * 2}`, // Stay pinned for 2 screen heights
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

        {/* Horizontal Timeline Section */}
        <div className="relative w-full h-40 hidden md:block mt-12">
          
          {/* Base Track */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2" />
          
          {/* Animated Progress Track */}
          <div 
            ref={lineRef}
            className="absolute top-1/2 left-0 w-full h-[4px] bg-foreground origin-left scale-x-0 -translate-y-1/2 z-10" 
          />

          {/* Timeline Nodes Container */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center z-20 px-[2px]">
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;
              const isPast = activeIndex > idx;
              const isReached = isActive || isPast;

              return (
                <div key={idx} className="relative flex flex-col items-center justify-center w-0">
                  
                  {/* Floating Pill (Week/Step name) */}
                  <div className={`absolute bottom-10 px-5 py-2 rounded-full border-2 text-xs font-mono whitespace-nowrap transition-all duration-500 ${
                    isActive 
                      ? 'bg-foreground text-background border-foreground shadow-hard -translate-y-2' 
                      : isPast 
                        ? 'bg-background text-foreground border-foreground/50' 
                        : 'bg-background text-muted-foreground border-border'
                  }`}>
                    {step.step}
                  </div>

                  {/* The Node Dot */}
                  <div className={`relative w-4 h-4 rounded-full transition-all duration-500 z-10 border-2 ${
                    isReached ? 'bg-foreground border-foreground' : 'bg-background border-border'
                  }`} />

                  {/* Pulsing Outer Ring for Active Node */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent transition-all duration-700 ease-out pointer-events-none ${
                    isActive ? 'w-12 h-12 opacity-100 scale-100' : 'w-4 h-4 opacity-0 scale-50'
                  }`} />
                  
                  {/* Optional Text Below */}
                  <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-max text-center transition-all duration-500 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    <div className="flex flex-col gap-1 text-muted-foreground text-xs font-sans tracking-wide">
                      <span>— {step.title.split(' ')[0]}</span>
                      {step.title.split(' ').length > 1 && <span>— {step.title.split(' ').slice(1).join(' ')}</span>}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Fallback View (Vertical Timeline) */}
        <div className="md:hidden flex flex-col gap-8 mt-12 border-l-2 border-border pl-6 relative">
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            const isPast = activeIndex > idx;
            const isReached = isActive || isPast;

            return (
              <div key={idx} className="relative">
                {/* Vertical Node */}
                <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                  isReached ? 'bg-foreground border-foreground' : 'bg-background border-border'
                }`} />
                
                {/* Active Ring */}
                <div className={`absolute -left-[39px] top-[-3px] w-8 h-8 rounded-full border-2 border-accent transition-all duration-700 ease-out pointer-events-none ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} />

                <div className="mb-2">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border-2 inline-block mb-3 transition-colors ${
                    isActive ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-muted-foreground border-border'
                  }`}>
                    {step.step}
                  </span>
                  <h4 className={`text-xl font-bold transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
