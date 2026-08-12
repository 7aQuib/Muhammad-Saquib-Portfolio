import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Gallery | Mohammad Saquib",
  description: "A curated collection of static Instagram posts and web banner designs.",
};

// We generate an array of the user's uploaded images, keeping the strict
// aspect ratios (1:1, 4:5, 16:9, and 9:16) for masonry rendering.
const galleryItems = [
  { id: 1, title: "Year-End Gratitude", category: "Instagram Post (1:1)", width: 800, height: 800, imgUrl: "/images/Design Gallery/15. Year-End Gratitude Post.png" },
  { id: 2, title: "Hydration Goals", category: "Instagram Story (9:16)", width: 900, height: 1600, imgUrl: "/images/Design Gallery/2. [Post] Hydration Goals, Upgraded.jpg" },
  { id: 3, title: "Amazon Banner", category: "Web Banner (16:9)", width: 800, height: 450, imgUrl: "/images/Design Gallery/Amazon Banner Image.jpg" },
  { id: 4, title: "Guava Everyday", category: "Instagram Post (4:5)", width: 800, height: 1000, imgUrl: "/images/Design Gallery/5. Guava – Easy Everyday Choice.png" },
  { id: 5, title: "Hero Banner", category: "Web Banner (16:9)", width: 800, height: 450, imgUrl: "/images/Design Gallery/Hero Banner.png" },
  { id: 6, title: "Education & Honesty", category: "Instagram Post (1:1)", width: 800, height: 800, imgUrl: "/images/Design Gallery/Day 18 – Education + Honesty (Carousel).png" },
  { id: 7, title: "Diwali Orange Juice", category: "Instagram Post (4:5)", width: 800, height: 1000, imgUrl: "/images/Design Gallery/Diwali Ornage Juice.jpg" },
  { id: 8, title: "Brand Store", category: "Web Banner (16:9)", width: 800, height: 450, imgUrl: "/images/Design Gallery/Brand Store.png" },
  { id: 9, title: "Juice For Your Mood", category: "Instagram Reel (9:16)", width: 900, height: 1600, imgUrl: "/images/Design Gallery/Juice_ForYour_Mood.jpg" },
  { id: 10, title: "Constitution Day", category: "Instagram Post (4:5)", width: 800, height: 1000, imgUrl: "/images/Design Gallery/Freedom to Choose Better” – Constitution Day.png" },
  { id: 11, title: "Independence Day", category: "Web Banner (16:9)", width: 800, height: 450, imgUrl: "/images/Design Gallery/Happy Independence Day.png" },
  { id: 12, title: "World Photography Day", category: "Instagram Post (1:1)", width: 800, height: 800, imgUrl: "/images/Design Gallery/World Photography Day.jpg" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6">
          Design <span className="text-brand-gradient font-hand-alt block sm:inline">Gallery</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light">
          A curated collection of static Instagram posts, dynamic web banners, and visual identity snippets designed to capture attention and drive engagement.
        </p>
      </div>

      {/* Strict Ratio Masonry Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft cursor-pointer"
            >
              {/* Image Container mapped strictly to 1:1, 4:5, or 16:9 */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${item.width} / ${item.height}` }}>
                <img 
                  src={item.imgUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-white font-display text-xl sm:text-2xl leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Top Right Icon */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action Footer */}
      <div className="max-w-7xl mx-auto mt-32 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Want something similar?</h2>
        <Link 
          href="/#services" 
          className="inline-block bg-brand-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-widest border-2 border-border shadow-hard hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-border)] transition-all"
        >
          View My Services
        </Link>
      </div>
    </main>
  );
}
