"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = steps[activeStepIndex];

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

        {/* Phase Navigation Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-foreground text-background border-foreground font-bold shadow-md scale-102"
                    : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {step.stepNumber}
                </span>
                <span className="hidden sm:inline font-sans font-medium text-sm capitalize">
                  {step.title}
                </span>
                <Icon className="w-4 h-4 ml-1 opacity-70" />
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-card rounded-3xl border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Left Column: Process Breakdown */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    Phase {currentStep.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {currentStep.duration}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
                  {currentStep.title}
                </h3>

                <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed mb-6 font-light">
                  {currentStep.description}
                </p>

                {/* Key Actions List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                    Key Execution Steps:
                  </p>
                  {currentStep.keyActions.map((action, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-sans text-foreground/80 leading-snug">
                        {action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverable & Impact Metric Box */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Deliverable</p>
                  <p className="text-xs font-bold text-foreground font-mono">{currentStep.deliverable}</p>
                </div>
                <div className="bg-muted/50 px-4 py-2 rounded-2xl border border-border flex items-center gap-3">
                  <div>
                    <span className="text-lg md:text-xl font-display font-bold text-accent">
                      {currentStep.metric.value}
                    </span>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase">{currentStep.metric.label}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Project Asset Viewer */}
            <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted/30 border border-border/80 shadow-md">
              <Image
                src={currentStep.image}
                alt={currentStep.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 hover:scale-103"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[10px] font-mono uppercase tracking-widest border border-white/20">
                Artwork Preview: Phase {currentStep.stepNumber}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
