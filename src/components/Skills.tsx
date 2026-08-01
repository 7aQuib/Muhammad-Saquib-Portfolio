"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { PenTool, Layout, Box, MonitorSmartphone, Palette, Layers, Type, Sparkles } from "lucide-react";

const skillsData = [
  {
    category: "Design & Strategy",
    items: [
      { name: "Brand Identity", icon: Palette },
      { name: "Packaging Design", icon: Box },
      { name: "UI/UX Design", icon: MonitorSmartphone },
      { name: "Typography", icon: Type },
    ]
  },
  {
    category: "Tools & Software",
    items: [
      { name: "Adobe Illustrator", icon: PenTool },
      { name: "Adobe Photoshop", icon: Layout },
      { name: "Figma", icon: Layers },
      { name: "After Effects", icon: Sparkles },
    ]
  }
];

export function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-background border-y border-border relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block px-3 py-1 bg-card border-2 border-border shadow-hard rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-6">
              04 — Tech Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-foreground">
              My Toolkit & <span className="text-brand-gradient">Expertise</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-sans text-lg max-w-sm leading-relaxed pb-1">
            The industry-standard tools and strategic disciplines I use to bring ideas to life.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
        >
          {skillsData.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <motion.h3 variants={fadeUp} className="font-mono text-sm uppercase tracking-widest text-muted-foreground border-b border-border pb-4">
                {group.category}
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.items.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={i} 
                      variants={fadeUp}
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-hard transition-all duration-300 group cursor-default"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-display text-lg font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
