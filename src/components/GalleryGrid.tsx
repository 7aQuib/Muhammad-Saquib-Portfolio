"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
}

function GalleryItemCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      data-cursor="hover"
      data-cursor-label="View"
      className={`break-inside-avoid relative group rounded-2xl overflow-hidden border border-border/50 shadow-soft transition-colors duration-500 mb-6 ${
        !isLoaded ? "bg-white/5 animate-pulse min-h-[250px]" : "bg-card"
      }`}
    >
      <img 
        src={item.imgUrl} 
        alt={item.title}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto object-cover transition-all duration-700 ${
          isLoaded ? "opacity-100 group-hover:scale-105" : "opacity-0"
        }`}
        loading="lazy"
      />
      
      {isLoaded && (
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
      )}
    </motion.div>
  );
}

export function GalleryGrid({ initialItems }: { initialItems: GalleryItem[] }) {
  const [itemsToShow, setItemsToShow] = useState(12);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled near the bottom of the page (within 500px)
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500;

      if (isNearBottom) {
        setItemsToShow((prev) => Math.min(prev + 12, initialItems.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check just in case the screen is huge and doesn't need scrolling to hit the bottom
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialItems.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const displayedItems = initialItems.slice(0, itemsToShow);

  return (
    <>
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          <AnimatePresence>
            {displayedItems.map((item) => (
              <GalleryItemCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedImage(item)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Loading trigger at bottom */}
        {itemsToShow < initialItems.length && (
          <div className="h-20 w-full mt-10 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[60]"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center"
            >
              <img 
                src={selectedImage.imgUrl} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
