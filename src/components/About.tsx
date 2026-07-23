"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../Assets/Images/Profile.png";
import Container from "@/components/ui/Container";

export function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 lg:py-48 bg-background overflow-hidden relative">
      <Container className="space-y-32 md:space-y-48 lg:space-y-64">
        
        {/* 1. About Hero Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 lg:col-span-10">
            <motion.h2 
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-display font-bold tracking-tighter leading-[1.1] text-foreground uppercase"
            >
              I build visual identities that command authority.
            </motion.h2>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-6 md:mt-8">
            <motion.p 
              variants={fadeUp}
              className="text-xl md:text-3xl text-muted-foreground font-sans font-light leading-relaxed"
            >
              Branding, packaging, and visual systems for ambitious founders who demand market leadership.
            </motion.p>
          </div>
        </motion.div>

        {/* 2. Positioning (Portrait & Bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-card border border-border group">
              <Image
                src={profileImage}
                alt="Mohammad Saquib"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle accent overlay */}
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="col-span-1 lg:col-span-7 flex flex-col gap-8 md:gap-10"
          >
            <motion.p variants={fadeUp} className="text-2xl md:text-4xl text-foreground font-sans font-light leading-[1.3] tracking-tight">
              Specializing in branding, packaging, and high-end visual systems, I partner with ambitious founders to translate complex business objectives into <span className="italic text-muted-foreground">clear, scalable design solutions</span>.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
              I approach design as a strategic asset, not mere aesthetics. Every decision is rooted in aligning a brand’s visual language with its commercial goals.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
              What sets my work apart is a rigorous adherence to minimalism and purpose—stripping away the unnecessary so the core message remains undeniable.
            </motion.p>
          </motion.div>
        </div>

        {/* 3. Capabilities */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12 md:space-y-16"
        >
          <motion.h3 variants={fadeUp} className="text-xs md:text-sm font-sans tracking-[0.2em] text-muted-foreground uppercase border-b border-border pb-6">
            Capabilities
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 group/list">
            {[
              {
                title: "Brand Identity",
                desc: "Crafting foundational visual systems that position businesses as premium market leaders."
              },
              {
                title: "Packaging Design",
                desc: "Designing structural and visual packaging that increases shelf impact and drives market share."
              },
              {
                title: "Visual Systems",
                desc: "Developing scalable design languages that maintain consistency across all digital and physical touchpoints."
              }
            ].map((cap, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="flex flex-col gap-4 group/item hover:!opacity-100 group-hover/list:opacity-30 transition-opacity duration-500 cursor-default"
              >
                <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                <h4 className="text-3xl md:text-4xl font-display font-medium text-foreground tracking-tight">{cap.title}</h4>
                <p className="text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Process */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
        >
          <div className="col-span-1 lg:col-span-4 relative">
            <motion.h3 variants={fadeUp} className="text-xs md:text-sm font-sans tracking-[0.2em] text-muted-foreground uppercase lg:sticky lg:top-32 border-b border-border pb-6 lg:border-none lg:pb-0">
              The Process
            </motion.h3>
          </div>
          
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-24 md:gap-32">
            {[
              {
                title: "Discovery",
                desc: "Before any design begins, we dissect the business. We analyze market positioning, audience psychology, and commercial objectives to ensure the design solves real problems."
              },
              {
                title: "Strategy",
                desc: "We define the visual architecture. This is where typography, color theory, and layout systems are chosen not for trends, but for their psychological impact and scalability."
              },
              {
                title: "Execution",
                desc: "The final phase is rigorous refinement. Stripping away the unnecessary until only the undeniable remains, delivering a polished, high-end visual identity ready for market."
              }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative flex flex-col gap-6">
                <div className="absolute -left-4 md:-left-12 -top-12 md:-top-20 text-[8rem] md:text-[14rem] font-display font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                  0{i + 1}
                </div>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight relative z-10">{step.title}</h4>
                <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed max-w-2xl relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. Proof (Metrics) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="border-t border-b border-border py-16 md:py-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "20+", label: "Successful Projects" },
              { value: "5+", label: "Industries Scaled" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "3", label: "Years Experience" },
            ].map((metric, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-3">
                <div className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-foreground tracking-tighter">{metric.value}</div>
                <div className="text-xs md:text-sm font-sans tracking-[0.2em] text-muted-foreground uppercase">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
