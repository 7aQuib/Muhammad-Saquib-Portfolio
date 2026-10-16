"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/ui/Container";

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  // Calculate dynamic line height
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="py-14 md:py-20 bg-background relative overflow-hidden">
      <Container>
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-card rounded-full border border-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3 shadow-sm">
            <span>02 / THE METHODOLOGY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            The Process{" "}
            <span className="font-editorial italic font-normal text-foreground/90 block sm:inline">
              that turns ideas into authority.
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed max-w-2xl mx-auto">
            A battle-tested, transparent roadmap designed to eliminate guesswork, respect your time, and deliver undeniable brand presence.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Static Background Vertical Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/80 -translate-x-1/2" />

          {/* Animated Scroll-Driven Active Progress Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,77,36,0.6)] z-10"
          />

          {/* Milestones Stack */}
          <div className="space-y-10 md:space-y-14">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.number}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Glowing Node Dot in Center */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center z-20 shadow-md group-hover:border-accent transition-colors">
                    <span className="text-xs font-mono font-bold text-foreground">
                      {milestone.number}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-40 pointer-events-none" />
                  </div>

                  {/* Left Side Content (desktop alternating) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-card p-8 md:p-10 rounded-3xl border border-border/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                          {milestone.phase}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {milestone.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-3">
                        {milestone.title}
                      </h3>

                      <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed font-light mb-6">
                        {milestone.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {milestone.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty side for layout balance on desktop */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? "md:order-2" : "md:order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
