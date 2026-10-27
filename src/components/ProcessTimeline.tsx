"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Milestone {
  number: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  tags: string[];
}

const milestones: Milestone[] = [
  {
    number: "01",
    phase: "Phase One",
    title: "Discovery & Problem Definition",
    duration: "Week 01",
    description: "Before sketching or touching pixels, we dissect your business objectives, competitive landscape, and audience psychology. We define what success looks like commercially.",
    tags: ["Market Audit", "Customer Psychology", "Whitespace Analysis"]
  },
  {
    number: "02",
    phase: "Phase Two",
    title: "Visual Strategy & Architecture",
    duration: "Week 02",
    description: "Establishing the creative blueprint. We explore distinct visual directions, typography hierarchy, and color palettes chosen not for fleeting trends, but for psychological authority and longevity.",
    tags: ["Moodboards", "Color Psychology", "Art Direction"]
  },
  {
    number: "03",
    phase: "Phase Three",
    title: "Craft, Lettering & System Design",
    duration: "Week 03 - 04",
    description: "Sculpting the identity. We develop custom letterforms, bespoke logomarks, dynamic graphic devices, and responsive layout systems with rigorous optical precision.",
    tags: ["Custom Lettering", "Vector Craft", "Design Tokens"]
  },
  {
    number: "04",
    phase: "Phase Four",
    title: "Real-World Prototyping & Shelf Testing",
    duration: "Week 05 - 06",
    description: "We stress-test every visual asset in its real-world environment—from 3-second supermarket shelf impact to mobile feed scroll-stoppers and billboard scale.",
    tags: ["3D Packaging", "Shelf Standout", "Prepress Proofing"]
  },
  {
    number: "05",
    phase: "Phase Five",
    title: "Final Delivery & Brand Guidelines",
    duration: "Week 07+",
    description: "Delivering an unshakeable design system. You receive full vector asset suites, print-ready prepress dielines, and an exhaustive brand bible ensuring seamless scaling across any agency or team.",
    tags: ["Brand Bible", "Print Dielines", "Asset Library"]
  }
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Measure exact horizontal scroll overflow based on viewport size
  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const visibleWidth = window.innerWidth;
        // Include generous padding at the end so the 5th card is fully centered/visible
        setScrollRange(Math.max(0, totalWidth - visibleWidth + 120));
      }
    };

    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  // Track vertical scroll progress across the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for fluid movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001
  });

  // Dynamic transforms driven by the same scroll progress
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="relative h-[260vh] md:h-[300vh] bg-background border-t-2 border-border/80"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 md:py-14 overflow-hidden z-10">
        
        {/* Top: Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-card rounded-full border border-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3 shadow-sm">
                <span>02 / THE METHODOLOGY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
                The Process{" "}
                <span className="font-editorial italic font-normal text-foreground/90 block sm:inline">
                  that turns ideas into authority.
                </span>
              </h2>
            </div>

            {/* Scroll Progress Indicator & Step Count */}
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground flex-shrink-0">
              <span className="hidden sm:inline">Scroll to explore</span>
              <div className="w-28 sm:w-36 h-2 bg-muted/60 border border-border rounded-full overflow-hidden p-[1px]">
                <motion.div
                  style={{ scaleX, originX: 0 }}
                  className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(255,77,36,0.8)]"
                />
              </div>
              <span className="text-foreground font-bold font-mono">05 Milestones</span>
            </div>
          </div>
        </div>

        {/* Middle: Horizontal Process Track & Cards */}
        <div className="w-full relative my-auto">
          
          {/* Static Background Horizontal Guide Track */}
          <div className="absolute top-[23px] left-0 right-0 h-1 bg-border/80 z-0" />
          
          {/* Animated Scroll-Driven Active Progress Line */}
          <motion.div
            style={{ scaleX, originX: 0 }}
            className="absolute top-[23px] left-0 right-0 h-1.5 bg-accent z-10 shadow-[0_0_15px_rgba(255,77,36,0.7)]"
          />

          {/* Horizontally Moving Cards Track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 md:gap-8 px-6 sm:px-12 md:px-20 w-max relative z-20 pt-1"
          >
            {milestones.map((milestone) => (
              <div
                key={milestone.number}
                className="w-[320px] sm:w-[380px] md:w-[440px] shrink-0 flex flex-col group"
              >
                {/* Horizontal Timeline Node Dot */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-card border-2 border-border group-hover:border-accent text-foreground group-hover:text-accent font-mono font-bold text-xs sm:text-sm flex items-center justify-center shadow-md transition-colors relative z-20">
                    <span>{milestone.number}</span>
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-30 pointer-events-none group-hover:opacity-60" />
                  </div>
                  <div className="h-0.5 flex-1 bg-border/60" />
                </div>

                {/* Milestone Card Content */}
                <div className="bg-card p-6 sm:p-8 rounded-3xl border border-border/80 shadow-sm hover:border-accent/40 hover:shadow-hard transition-all duration-300 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                        {milestone.phase}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2.5 py-0.5 rounded-full border border-border/60">
                        {milestone.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground tracking-tight mb-3">
                      {milestone.title}
                    </h3>

                    <p className="text-sm font-sans text-muted-foreground leading-relaxed font-light mb-6">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/70">
                    {milestone.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs font-mono text-muted-foreground flex-shrink-0">
          <span>End-to-End Creative Execution</span>
          <span className="animate-pulse">↓ Keep scrolling down to proceed</span>
        </div>

      </div>
    </section>
  );
}
