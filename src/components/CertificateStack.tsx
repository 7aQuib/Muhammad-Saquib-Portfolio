"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";

const certificates = [
  "certificate.pdf",
  "certificate_00.pdf",
  "certificate_02.pdf",
  "certificate_03.pdf",
  "certificate_04.pdf",
  "certificate_05.pdf",
  "certificate_06.pdf"
];

export function CertificateStack() {
  const [cards, setCards] = useState(certificates);
  const [exitX, setExitX] = useState(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold || info.offset.x < -swipeThreshold) {
      setExitX(info.offset.x);
      setCards((prev) => {
        const newCards = [...prev];
        const removed = newCards.shift();
        if (removed) {
           newCards.push(removed);
        }
        return newCards;
      });
    }
  };

  return (
    <div className="relative w-full max-w-md aspect-[1.414] mx-auto group">
      <AnimatePresence initial={false}>
        {cards.map((cert, index) => {
          if (index > 2) return null;

          const isTop = index === 0;

          return (
            <motion.div
              key={cert}
              className={`absolute inset-0 rounded-xl overflow-hidden bg-white ring-1 flex flex-col ${
                isTop ? 'ring-border z-30 cursor-grab active:cursor-grabbing shadow-2xl' : 
                index === 1 ? 'ring-border/70 z-20 shadow-xl' : 
                'ring-border/50 z-10 shadow-lg'
              }`}
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{
                scale: 1 - index * 0.05,
                y: index * 16,
                x: isTop ? 0 : index === 1 ? 12 : 24,
                rotate: isTop ? 0 : index === 1 ? 4 : 8,
                opacity: 1 - index * 0.1,
              }}
              exit={{ 
                x: exitX > 0 ? 300 : -300, 
                opacity: 0, 
                rotate: exitX > 0 ? 20 : -20,
                transition: { duration: 0.3 } 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={isTop ? handleDragEnd : undefined}
            >
              {/* Overlay block to ensure drag events are captured instead of the iframe */}
              <div className="absolute inset-0 z-10"></div>
              
              <iframe 
                src={`/Documents/${cert}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                className="w-full h-full border-none bg-white pointer-events-none" 
              />
              
              {!isTop && (
                <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] z-10"></div>
              )}
              
              {isTop && (
                <Link 
                  href={`/Documents/${cert}`} 
                  target="_blank" 
                  className="absolute bottom-4 right-4 z-20 bg-foreground text-background px-4 py-2 rounded-full font-bold text-xs shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                  onPointerDown={(e) => e.stopPropagation()} 
                >
                  Full PDF <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </Link>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground pointer-events-none opacity-50">
        <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
        Swipe to browse
      </div>
    </div>
  );
}
