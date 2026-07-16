"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AvatarImage from "@/Assets/Images/Muhammad Saquib Ansari.png";
import { CertificateStack } from "@/components/CertificateStack";

export function AboutContent() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-gradient selection:text-accent-foreground font-sans relative overflow-x-hidden">
      <Navbar />

      {/* Global Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute left-[10%] w-px h-full bg-border"></div>
        <div className="absolute left-[50%] w-px h-full bg-border"></div>
        <div className="absolute left-[90%] w-px h-full bg-border"></div>
        <div className="absolute top-[20%] h-px w-full bg-border"></div>
        <div className="absolute top-[40%] h-px w-full bg-border"></div>
        <div className="absolute top-[65%] h-px w-full bg-border"></div>
      </div>

      <main className="relative z-10 w-full pt-32 pb-0">

        {/* HERO SECTION */}
        <section className="px-4 md:px-12 lg:px-24 mb-16 relative">
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              className="font-display font-black leading-[0.8] tracking-tighter text-foreground"
              style={{ fontSize: "clamp(4rem, 15vw, 15rem)" }}
            >
              I'M SAQUIB
            </motion.h1>

            <motion.div variants={fadeUp} className="w-full flex justify-between items-center mt-2 px-2 lg:px-8">
              <span className="font-hand-alt text-2xl md:text-4xl text-accent">&amp; this is my portfolio</span>
              <motion.svg
                className="w-6 h-6 md:w-8 md:h-8 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </motion.svg>
            </motion.div>
          </motion.div>
        </section>

        {/* WHAT I DO CARDS */}
        <section className="px-4 md:px-12 lg:px-24 mb-24 lg:mb-32 relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

            {/* Vertical Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex items-center"
            >
              <h2 className="font-display font-bold text-4xl xl:text-6xl tracking-widest uppercase text-foreground whitespace-nowrap -rotate-90 origin-center translate-y-20">
                WHAT I DO
              </h2>
            </motion.div>

            {/* Mobile Title */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:hidden font-display font-bold text-4xl tracking-widest uppercase text-foreground mb-4"
            >
              WHAT I DO
            </motion.h2>

            {/* Cards Grid */}
            <motion.div
              className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 z-10 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { num: '01', title: 'Brand Identity', desc: 'Brand visuals & identities' },
                { num: '02', title: 'Packaging Design', desc: 'Functional product packaging' },
                { num: '03', title: 'Social Media', desc: 'Online brand promotions & ads' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-card backdrop-blur-md rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between aspect-[3/4] ring-1 ring-border shadow-xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>

                  <div className="flex justify-between items-start">
                    <span className="font-display text-7xl lg:text-8xl font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors">
                      {item.num}
                      <span className="text-xl ml-2 font-mono text-accent">↙</span>
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display font-bold text-2xl lg:text-3xl mb-2">{item.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT & EXPERIENCE SPLIT */}
        <section className="px-4 md:px-12 lg:px-24 mb-24 lg:mb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 relative z-10">

            {/* Left Side: About Me */}
            <div className="lg:col-span-7 lg:pr-16 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-display font-black text-6xl md:text-7xl lg:text-[7rem] leading-none tracking-tight mb-8"
              >
                About me!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12"
              >
                I'm a design-driven creative with hands-on experience — crafting scroll-stopping content for social media, eye-catching packaging, and bold brand identities that actually connect. Eventually, I worked extensively on print media, and led multiple high-impact design projects. If it's got colors, curves, or creativity — I'm on it.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid grid-cols-3 gap-4 border-t border-border pt-8"
              >
                {[
                  { value: '3+', label: 'Years Experience' },
                  { value: '40+', label: 'Projects Delivered' },
                  { value: '20', label: 'Clients Worldwide' }
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <h4 className="font-display font-bold text-3xl md:text-5xl text-foreground">{stat.value}</h4>
                    <p className="font-mono text-[9px] md:text-xs text-muted-foreground uppercase tracking-widest mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side: Education & Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 lg:border-l lg:border-border lg:pl-16 flex flex-col space-y-16"
            >
              {/* Education */}
              <motion.div variants={fadeUp}>
                <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter mb-8">Education</h3>
                <div className="space-y-8">
                  <div className="relative group">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors">Graphic Design</h4>
                    <p className="font-mono text-xs text-muted-foreground mt-1 mb-1">Learn with Rajiv Mehta</p>
                    <span className="font-mono text-[10px] uppercase text-accent tracking-widest">Online Course</span>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors">BCA</h4>
                    <p className="font-mono text-xs text-muted-foreground mt-1 mb-1">Maulana Azad College, Aurangabad</p>
                    <span className="font-mono text-[10px] uppercase tracking-widest">Aug 2019 - 2022</span>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors">B.Com</h4>
                    <p className="font-mono text-xs text-muted-foreground mt-1 mb-1">Swayam Siddhi Mitra Sangh's College</p>
                    <span className="font-mono text-[10px] uppercase tracking-widest">May 2016 - 2019</span>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -left-16 top-0 w-8 h-px bg-border hidden lg:block"></div>
                <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter mb-8">Experience</h3>
                <div className="space-y-8">
                  <div className="relative group">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors">RUS Organic Pvt. Ltd.</h4>
                    <p className="font-mono text-xs text-muted-foreground mt-1 mb-1">Graphic Designer &amp; Media</p>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Apr 2024 - May 2026</span>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors">Freelance</h4>
                    <p className="font-mono text-xs text-muted-foreground mt-1 mb-1">Graphic Designer</p>
                    <span className="font-mono text-[10px] uppercase tracking-widest">2020 - Present</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* EXPERTISE & CREDENTIALS */}
        <section className="w-full bg-card/50 border-t border-border pt-24 pb-32 overflow-hidden relative">
          <div className="px-4 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

              {/* Left Column (Skills & Tools) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="lg:col-span-7 flex flex-col gap-16"
              >
                {/* Skills */}
                <motion.div variants={fadeUp}>
                  <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter mb-8">Skills & Specialities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {[
                      { num: '01', title: 'Branding Identity' },
                      { num: '02', title: 'Packaging Design' },
                      { num: '03', title: 'Social Media Creative' },
                      { num: '04', title: 'Banner & Hoardings' },
                      { num: '05', title: 'Motion Graphics' }
                    ].map((skill, i) => (
                      <div key={i} className="flex items-center gap-4 group/skill border-b border-border/50 pb-4 cursor-default">
                        <span className="font-mono text-xs text-muted-foreground group-hover/skill:text-accent transition-colors">{skill.num}</span>
                        <span className="font-display font-bold text-lg tracking-wide text-foreground group-hover/skill:translate-x-2 transition-transform">{skill.title}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div variants={fadeUp}>
                  <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter mb-8">Design &amp; Editing Tools</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-display text-lg mb-4 text-muted-foreground">Design</h3>
                      <div className="flex flex-wrap gap-3">
                        {['Figma', 'Photoshop (Ps)', 'Illustrator (Ai)', 'CorelDraw'].map(tool => (
                          <span key={tool} className="px-4 py-2 rounded-full border border-border/50 bg-background text-sm tracking-wide hover:border-accent hover:text-accent transition-colors cursor-default">{tool}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-4 text-muted-foreground">Editing &amp; Motion</h3>
                      <div className="flex flex-wrap gap-3">
                        {['Lightroom (Lr)', 'Premiere Pro (Pr)', 'After Effects (Ae)'].map(tool => (
                          <span key={tool} className="px-4 py-2 rounded-full border border-border/50 bg-background text-sm tracking-wide hover:border-accent hover:text-accent transition-colors cursor-default">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column (Certificates) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-border"
              >
                  <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter mb-8">Certifications</h2>
                <CertificateStack />
              </motion.div>

            </div>

            {/* Bottom Social Media Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter">Let's Connect</h2>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: 'LinkedIn', icon: 'in', color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]' },
                  { label: 'Pinterest', icon: 'P', color: 'hover:bg-[#E60023] hover:text-white hover:border-[#E60023]' },
                  { label: 'Instagram', icon: 'Ig', color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-[#dc2743]' },
                  { label: 'Behance', icon: 'Bē', color: 'hover:bg-[#1769ff] hover:text-white hover:border-[#1769ff]', link: 'https://www.behance.net/ansarisaquib3' },
                  { label: 'Facebook', icon: 'f', color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]' },
                  { label: 'Threads', icon: '@', color: 'hover:bg-foreground hover:text-background hover:border-foreground' }
                ].map((social, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }}>
                    <Link
                      href={social.link || '#'}
                      target={social.link ? '_blank' : undefined}
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border font-display font-bold text-lg transition-all duration-300 ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </div >
  );
}
