import { useState, useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
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
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {displayedItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
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
          <div className="h-20 w-full mt-10 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[60]"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
            <img 
              src={selectedImage.imgUrl} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
