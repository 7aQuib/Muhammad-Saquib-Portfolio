"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ReviewModal } from "./ReviewModal";

// Static fallback testimonials
const initialTestimonials = [
  {
    quote: "The branding they created completely transformed our business. We saw a 40% increase in conversions within the first month of launching the new visual identity.",
    author: "Sarah Jenkins",
    role: "Founder, Bloom Cosmetics",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Absolutely brilliant work on our packaging design. It stands out on the shelves and we've received endless compliments from our customers.",
    author: "Marcus Chen",
    role: "CEO, Artisan Coffee Co.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The social media kit is a lifesaver. It takes us minutes instead of hours to create stunning posts that perfectly align with our brand.",
    author: "Elena Rodriguez",
    role: "Marketing Director, TechStart",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const q = query(
        collection(db, "reviews"),
        where("status", "==", "approved"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      
      const dynamicReviews = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          quote: data.quote,
          author: data.author,
          role: data.role,
          image: data.image || `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(data.author)}`
        };
      });

      // Combine dynamic and static
      setTestimonials([...dynamicReviews, ...initialTestimonials]);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
      // Fallback to initial
      setTestimonials(initialTestimonials);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleDragEnd = (e: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.offset.x > swipeThreshold) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-background border-y-2 border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-card border-2 border-border shadow-hard rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-6">
              02 — Client Love
            </div>
            <h2 className="text-4xl font-display text-foreground tracking-tight mb-2 md:mb-4">Don't just take my word for it.</h2>
            <p className="text-muted-foreground block md:hidden mb-2 animate-pulse">
              (Swipe to read more)
            </p>
          </div>
          <div className="text-center md:text-right">
             <button 
               onClick={() => setIsModalOpen(true)}
               className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold font-mono text-sm tracking-widest uppercase hover:-translate-y-1 hover:shadow-hard transition-all"
             >
               Leave a Review
             </button>
          </div>
        </div>

        {loading ? (
           <div className="w-full h-64 flex items-center justify-center text-muted-foreground font-mono">
             Loading reviews...
           </div>
        ) : (
          <>
            {/* DESKTOP LAYOUT (Infinite Slider) */}
            <div className="hidden md:block w-full overflow-hidden py-4 group relative">
              <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
              
              <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: Math.max(25, duplicatedTestimonials.length * 4), repeat: Infinity }}
              >
                {duplicatedTestimonials.map((t, i) => (
                  <div key={i} className="w-[450px] shrink-0 bg-card p-8 rounded-2xl border-2 border-border shadow-hard flex flex-col hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-accent mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L16.417 14.591V3H21V14.591L18.6 21H14.017ZM3 21L5.4 14.591V3H9.983V14.591L7.583 21H3Z" />
                      </svg>
                    </div>
                    <p className="text-lg font-sans text-muted-foreground mb-6 flex-grow leading-relaxed">"{t.quote}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t-2 border-border border-dashed">
                      <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-border" />
                      <div>
                        <h3 className="font-display text-xl text-foreground">{t.author}</h3>
                        <p className="font-mono text-sm font-bold text-muted-foreground uppercase">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* MOBILE LAYOUT (Stacked Swappable Cards) */}
            <div className="block md:hidden relative h-[380px] w-full max-w-sm mx-auto mt-8">
              {testimonials.map((t, i) => {
                let offset = i - activeIndex;
                if (offset < 0) offset += testimonials.length;
                const isTop = offset === 0;
                return (
                  <motion.div
                    key={i + "-" + t.author} // Used i to ensure uniqueness if duplicates exist
                    className="absolute top-0 left-0 w-full h-full bg-card p-6 sm:p-8 rounded-3xl border-2 border-border shadow-2xl flex flex-col"
                    style={{ 
                      zIndex: testimonials.length - offset,
                      cursor: isTop ? "grab" : "auto"
                    }}
                    animate={{
                      y: offset * 24,
                      scale: 1 - offset * 0.06,
                      opacity: offset > 2 ? 0 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    whileDrag={{ cursor: "grabbing", scale: 1.02 }}
                  >
                    <div className="text-accent mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L16.417 14.591V3H21V14.591L18.6 21H14.017ZM3 21L5.4 14.591V3H9.983V14.591L7.583 21H3Z" />
                      </svg>
                    </div>
                    <p className="text-base sm:text-lg font-sans text-muted-foreground mb-6 flex-grow leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t-2 border-border border-dashed mt-auto">
                      <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-border bg-background" />
                      <div>
                        <h3 className="font-display text-lg text-foreground truncate">{t.author}</h3>
                        <p className="font-mono text-xs font-bold text-muted-foreground uppercase truncate">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

      </div>
      
      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchReviews} 
      />
    </section>
  );
}
