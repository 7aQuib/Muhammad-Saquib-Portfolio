"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
}

export function GalleryGrid({ initialItems }: { initialItems: GalleryItem[] }) {
  const [itemsToShow, setItemsToShow] = useState(12);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setItemsToShow((prev) => Math.min(prev + 12, initialItems.length));
        }
      },
      { rootMargin: "400px" } // trigger 400px before the user actually hits the bottom
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [initialItems.length]);

  const displayedItems = initialItems.slice(0, itemsToShow);

  return (
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {displayedItems.map((item) => (
          <div 
            key={item.id} 
            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft cursor-pointer"
          >
            <img 
              src={item.imgUrl} 
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
                  {item.category}
                </p>
                <h3 className="text-white font-display text-xl sm:text-2xl leading-tight">
                  {item.title}
                </h3>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loading trigger at bottom */}
      {itemsToShow < initialItems.length && (
        <div ref={loadMoreRef} className="h-20 w-full mt-10 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
