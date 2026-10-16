"use client";

export function HeroMarquee() {
  const items = [
    "Brand Identity",
    "Packaging Design",
    "Social Media Creatives",
    "Ads Campaign Creatives",
    "Creative Direction",
    "Visual Storytelling",
  ];

  return (
    <div className="w-full border-y border-border/80 bg-card/70 backdrop-blur-md py-3 md:py-3.5 overflow-hidden relative z-20 shadow-xs">
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-4 text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground"
          >
            {items.map((item, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span className="hover:text-foreground transition-colors font-medium">{item}</span>
                <span className="text-accent font-bold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
