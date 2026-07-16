"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { EnquiryModal } from "@/components/EnquiryModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] lg:w-auto z-50 transition-all duration-500">
      <div className="bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl rounded-full pl-6 pr-2 py-2 relative z-50 flex items-center justify-between">
        
        {/* Left Side: Brand & Separator */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link href="/" className="font-display text-2xl tracking-tight flex items-center group">
            <span className="text-accent mr-1 opacity-70 group-hover:opacity-100 transition-opacity">★</span> 
            Vismora<span className="text-brand-gradient ml-1 font-hand-alt text-2xl opacity-80 group-hover:opacity-100">.studio</span>
          </Link>
          <div className="hidden lg:block w-px h-5 bg-border/80"></div>
        </div>

        {/* Right Side: Desktop Links & Actions */}
        <div className="hidden lg:flex items-center space-x-6 pl-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] font-medium text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pl-4">
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="bg-[#f24e1e] hover:bg-[#d94015] text-white px-6 py-2.5 rounded-full shadow-lg transition-all text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap inline-flex items-center group"
            >
              Let's Talk
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2 pl-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-foreground hover:bg-secondary focus:outline-none transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="block h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-background/90 backdrop-blur-xl border border-border shadow-lg rounded-3xl overflow-hidden transition-all duration-300 origin-top z-40 ${
          isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:bg-foreground/10 block px-4 py-3 rounded-xl text-lg font-mono font-bold uppercase tracking-wider transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsEnquiryModalOpen(true);
            }}
            className="bg-brand-gradient text-accent-foreground block w-full px-4 py-3 rounded-xl border border-border shadow-lg text-lg font-bold uppercase text-center mt-2"
          >
            Hire Me →
          </button>
        </div>
      </div>

      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </nav>
  );
}
