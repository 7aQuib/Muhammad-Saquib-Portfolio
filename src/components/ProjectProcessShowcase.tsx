"use client";

import Image from "next/image";
import { CheckCircle2, Layers, Sparkles, Box, Palette, Megaphone } from "lucide-react";
import Container from "@/components/ui/Container";

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  icon: any;
  duration: string;
  objective: string;
  description: string;
  keyActions: string[];
  deliverable: string;
  image: string;
  metric: { value: string; label: string };
}

const steps: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Discovery & Category Audit",
    icon: Layers,
    duration: "Week 1 - 2",
    objective: "Identify retail whitespace in crowded FMCG beverage aisles.",
    description: "Before opening Illustrator, I audited 40+ competitor cans in retail beverage coolers. The goal was to uncover what made young consumers choose one can over another in under 3 seconds.",
    keyActions: [
      "Audited retail shelf presence and competitor visual cliches",
      "Defined Gen-Z and young adult sensory triggers & nostalgia cues",
      "Created 3 distinct visual territories (Retro-Pop, Minimal Craft, Maximalist Energy)"
    ],
    deliverable: "Strategic Brand Territory & Category Whitespace Document",
    image: "/images/Design Gallery/juice-pop/Artboard 1.jpg",
    metric: { value: "3 Sec", label: "Shelf Decision Benchmark" }
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Custom Lettering & Wordmark",
    icon: Sparkles,
    duration: "Week 3",
    objective: "Sculpt a tactile, energetic 3D wordmark with distinct soul.",
    description: "Crafted bouncy, hand-drawn vector typography that communicates fizzy carbonation and fruity sweetness. The custom 'O' integrates a soda can pull-tab motif for immediate category connection.",
    keyActions: [
      "Explored 20+ thumbnail sketches testing bubble volume and italic tilt",
      "Engineered bespoke 3D bevel and drop-shadow layers in vector curves",
      "Stress-tested optical balance across 24px digital icons to 10ft billboard scale"
    ],
    deliverable: "Master Vector Wordmark, Secondary Lockups, & Pull-Ring Iconography",
    image: "/images/Design Gallery/juice-pop/Artboard 10.jpg",
    metric: { value: "100%", label: "Custom Hand-Crafted Lettering" }
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Flavour Architecture & Palette",
    icon: Palette,
    duration: "Week 4 - 5",
    objective: "Establish chromatic flavor identification visible across retail aisles.",
    description: "Designed a high-saturation colour system engineered for instant recognition: Mango Splash (Sunlit Yellow), Berry Blast (Electric Crimson), Crisp Green Apple (Zesty Chartreuse), and Orange Fizz (Tangerine Amber).",
    keyActions: [
      "Formulated Pantone spot colors for consistent high-vibrancy can printing",
      "Illustrated bespoke fruit characters and tactile splash elements for each SKU",
      "Built standardized flavour badge system maintaining visual balance across varieties"
    ],
    deliverable: "Flavour Architecture System & Chromatic Brand Tokens",
    image: "/images/Design Gallery/juice-pop/Artboard 2.jpg",
    metric: { value: "5 SKUs", label: "Distinct Flavour Identifiers" }
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "360° Packaging & Dielines",
    icon: Box,
    duration: "Week 6 - 7",
    objective: "Engineer production-ready aluminium can packaging with tactile finishes.",
    description: "Transformed flat 2D artwork into 360-degree cylindrical packaging. Planned tactile matte finishes with selective spot UV gloss over fruit illustrations to create a premium sensory hand-feel.",
    keyActions: [
      "Engineered 330ml sleek can vector dielines with exact print tolerance",
      "Integrated regulatory nutritional tables, barcode zones, and recycling icons",
      "Created CMYK + Spot Pantone plate separation files for the canning factory"
    ],
    deliverable: "Print-Ready Vector Dielines with Prepress Production Files",
    image: "/images/Design Gallery/juice-pop/Artboard 3.jpg",
    metric: { value: "0 Error", label: "Prepress Print Proofing" }
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Retail Rollout & Ad Creatives",
    icon: Megaphone,
    duration: "Week 8",
    objective: "Deliver omnichannel launch assets across digital and supermarket displays.",
    description: "Created high-impact promotional assets to support retail store placement and social media buzz, including 3D packaging renders, fridge header cards, and animated social launch carousels.",
    keyActions: [
      "Rendered photorealistic 3D product lineups for e-commerce and retail decks",
      "Designed omnichannel digital banners and Instagram launch story carousels",
      "Assembled the master Brand Guidelines Bible for internal marketing teams"
    ],
    deliverable: "Digital Ad Suite, Retail POS Displays, & 60-Page Brand Bible",
    image: "/images/Design Gallery/juice-pop/Artboard 4.jpg",
    metric: { value: "+45%", label: "Q1 Retail Sell-Through Rate" }
  }
];

export function ProjectProcessShowcase() {
  return (
    <section id="showcase" className="py-24 md:py-36 bg-muted/30 border-t border-border/80 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-card rounded-full border border-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>CASE STUDY / WORKING PROCESS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.08] mb-6">
            Juice Pop Beverages{" "}
            <span className="font-editorial italic font-normal text-foreground/90 block sm:inline">
              The End-to-End Creative Process.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
            How a youth-focused FMCG soda was conceptualized, sculpted, and engineered for real-world retail shelves. A transparent look at my 5-phase design methodology from discovery to final production.
          </p>
        </div>

        {/* Project Meta Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-3xl border border-border/80 shadow-sm mb-12">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Client</p>
            <p className="text-sm md:text-base font-bold text-foreground">Juice Pop Co. (FMCG)</p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1">My Role</p>
            <p className="text-sm md:text-base font-bold text-foreground">Lead Brand & Packaging</p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Timeframe</p>
            <p className="text-sm md:text-base font-bold text-foreground">8 Weeks End-to-End</p>
          </div>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Scope</p>
            <p className="text-sm md:text-base font-bold text-foreground">Identity, 5 SKUs, Ads & Dielines</p>
          </div>
        </div>

        {/* VERTICAL PROJECT PROCESS TIMELINE */}
        <div className="relative pl-6 sm:pl-10 md:pl-16 space-y-12 md:space-y-16 before:absolute before:left-3 sm:before:left-5 md:before:left-8 before:top-6 before:bottom-8 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-border before:to-border/30">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative group">
                {/* Vertical Node Dot along the spine */}
                <div className="absolute -left-6 sm:-left-10 md:-left-16 top-3 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-accent text-accent font-mono text-xs sm:text-sm font-bold flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
                  <span>{step.stepNumber}</span>
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-30 pointer-events-none" />
                </div>

                {/* Phase Card Content */}
                <div className="bg-card rounded-3xl border border-border/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Process Breakdown */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            Phase {step.stepNumber}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/60">
                            {step.duration}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-3">
                          {step.title}
                        </h3>

                        <p className="text-xs font-mono uppercase tracking-wider text-accent/90 mb-3">
                          Objective: {step.objective}
                        </p>

                        <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed font-light mb-6">
                          {step.description}
                        </p>

                        {/* Key Actions List */}
                        <div className="space-y-2.5">
                          <p className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                            Key Execution Steps:
                          </p>
                          {step.keyActions.map((action, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-sans text-foreground/85 leading-snug">
                                {action}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Deliverable & Impact Metric Box */}
                      <div className="pt-5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">Key Deliverable</p>
                          <p className="text-xs font-bold text-foreground font-mono">{step.deliverable}</p>
                        </div>
                        <div className="bg-muted/50 px-3.5 py-1.5 rounded-xl border border-border flex items-center gap-2 flex-shrink-0">
                          <span className="text-base font-display font-bold text-accent">
                            {step.metric.value}
                          </span>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase">{step.metric.label}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: High-Res Project Asset Viewer */}
                    <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted/30 border border-border/80 shadow-md group/img">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-all duration-700 group-hover/img:scale-104"
                      />
                      <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-mono uppercase tracking-widest border border-white/20">
                        Phase {step.stepNumber} Asset
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
