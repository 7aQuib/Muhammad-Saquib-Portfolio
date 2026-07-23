"use client";

import { useRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLAnchorElement>('.service-card');
    
    cards.forEach((card, index) => {
      // Don't animate the last card because nothing covers it
      if (index === cards.length - 1) return;
      
      const nextCard = cards[index + 1];
      
      gsap.to(card, {
        scale: 0.92,
        filter: "brightness(0.3)", // Darken significantly to create depth
        scrollTrigger: {
          trigger: nextCard,
          // Start animating when the NEXT card is halfway up the screen
          start: "top center", 
          // End animating when the NEXT card reaches its sticky point
          end: `top top+=${96 + ((index + 1) * 32)}`,
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="services" className="py-24 relative bg-background border-y border-border" ref={containerRef}>
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-display text-foreground tracking-tight mb-6 font-bold">
              Crafted to <span className="text-accent">convert.</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
              Specialized design services focused on elevating your brand's perception and driving real business results. Professional, user-friendly, and tailored to your goals.
            </p>
          </div>
        </div>

        {/* Sticky Card Stack */}
        <div className="flex flex-col gap-12 md:gap-32 pb-12 md:pb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Alternating layout for desktop
            const isEven = index % 2 === 0;

            return (
              <Link
                key={index}
                href={`/service/${service.slug}`}
                className="service-card sticky group flex flex-col lg:flex-row bg-card rounded-[2.5rem] border-2 border-border overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-accent/50 w-full max-w-5xl mx-auto origin-top"
                style={{ top: `calc(6rem + ${index * 2}rem)` }}
              >
                {/* Image Area - Switches side based on index on large screens */}
                <div className={`relative h-72 sm:h-96 lg:h-auto lg:w-1/2 overflow-hidden bg-muted ${!isEven ? 'lg:order-last' : ''}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Action Button */}
                  <div className={`absolute top-6 ${!isEven ? 'left-6' : 'right-6'} w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:-rotate-12 group-hover:scale-110 shadow-lg`}>
                    <ArrowUpRight className="w-6 h-6 text-white transition-transform" />
                  </div>

                  {/* Icon at bottom of image */}
                  <div className={`absolute bottom-6 ${!isEven ? 'right-8' : 'left-8'} flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center lg:w-1/2 bg-card">
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xl font-medium font-sans text-muted-foreground mb-6 uppercase tracking-widest text-sm border-l-2 border-accent pl-4">
                    {service.tagline}
                  </p>
                  <p className="text-foreground/80 font-sans text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Lead Magnet Box */}
        <div className="mt-20 bg-accent text-accent-foreground border-2 border-border shadow-hard rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
          {/* Decorative background shapes */}
          <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[200%] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-background text-foreground rounded-full text-xs font-mono font-bold tracking-wider mb-6 shadow-sm uppercase">
              Free Resource
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">Not sure where to start?</h3>
            <p className="text-accent-foreground/90 font-sans text-lg md:text-xl leading-relaxed mb-0">
              Download my free "Brand Identity Audit Checklist" to see if your current visual identity is holding your business back.
            </p>
          </div>
          
          <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-xl text-foreground font-sans bg-background border-2 border-border focus:outline-none focus:ring-4 focus:ring-black/20 dark:focus:ring-white/20 min-w-[280px] shadow-inner text-lg"
            />
            <MagneticButton>
              <button className="bg-foreground text-background px-8 py-4 rounded-xl font-bold text-lg border-2 border-transparent hover:border-border shadow-hard hover:shadow-hard-hover hover:-translate-y-1 transition-all whitespace-nowrap">
                Get Checklist
              </button>
            </MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
