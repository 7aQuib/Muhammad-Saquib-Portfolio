"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

import imgBranding from "@/Assets/Images/Branding.png";
import imgPackaging from "@/Assets/Images/Packaging design.png";
import imgSocial from "@/Assets/Images/social media kit.png";

type Category = "All" | "Branding" | "Packaging" | "Social Media Creative" | "Ads Campaign Creatives";

interface ProjectItem {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  tag: string;
  description: string;
  image: any;
  link: string;
  external?: boolean;
}

const projectsData: ProjectItem[] = [
  {
    id: "juice-pop-brand",
    title: "JUICE POP — Brand Identity",
    category: "Branding",
    categoryLabel: "Brand Identity",
    tag: "Custom Lettering & 3D Brandmark",
    description: "Bespoke inflated wordmark with vibrant, tactile pop aesthetics designed for instant youth recognition.",
    image: "/images/Design Gallery/juice-pop/Artboard 1.jpg",
    link: "/#showcase"
  },
  {
    id: "juice-pop-packaging",
    title: "JUICE POP — Packaging System",
    category: "Packaging",
    categoryLabel: "Packaging Design",
    tag: "360° Can Graphics & Flavour Architecture",
    description: "Five-sku fruit soda line with high-saturation chromatic coding, spot UV textures, and bold shelf standout.",
    image: "/images/Design Gallery/juice-pop/Artboard 2.jpg",
    link: "/#showcase"
  },
  {
    id: "kus-organic",
    title: "KUS Organic — Litchi Lemonade",
    category: "Packaging",
    categoryLabel: "Packaging Design",
    tag: "Beverage Packaging & Art Direction",
    description: "Art-directed bottle label and 3D splash visualization for a premium organic fruit beverage line.",
    image: imgPackaging,
    link: "https://www.behance.net/ansarisaquib3",
    external: true
  },
  {
    id: "display-ads-campaign",
    title: "Omnichannel Ads Campaign Creatives",
    category: "Ads Campaign Creatives",
    categoryLabel: "Ads Campaign",
    tag: "High-Conversion Performance Banners",
    description: "Multi-format digital banner suites, performance ad variations, and billboard creatives that drive commercial ROI.",
    image: "/images/Design Gallery/Display Banners/Artboard 4.png",
    link: "https://www.behance.net/ansarisaquib3",
    external: true
  },
  {
    id: "social-launch-kit",
    title: "Dynamic Social Media Creative System",
    category: "Social Media Creative",
    categoryLabel: "Social Creative",
    tag: "Instagram Carousels & Launch Creatives",
    description: "Thumb-stopping social templates, promotional teasers, and cohesive story kits for modern consumer brands.",
    image: imgSocial,
    link: "https://www.behance.net/ansarisaquib3",
    external: true
  },
  {
    id: "vismora-identity",
    title: "Strategic Brand Identity Architecture",
    category: "Branding",
    categoryLabel: "Brand Identity",
    tag: "Comprehensive Visual Guidelines",
    description: "Scalable corporate guidelines, typography hierarchy, responsive vector logomarks, and brand bible assets.",
    image: imgBranding,
    link: "https://www.behance.net/ansarisaquib3",
    external: true
  }
];

export function CategoryProjects() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Branding",
    "Packaging",
    "Social Media Creative",
    "Ads Campaign Creatives"
  ];

  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter((item) => item.category === activeTab);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background border-t border-border/80 relative">
      <Container>
        {/* Section Header matching reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/60 rounded-full border border-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span>01 / SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.08]">
              A few things{" "}
              <span className="font-editorial italic font-normal text-foreground/90 block sm:inline">
                I've put into the world.
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <Link
              href="https://www.behance.net/ansarisaquib3"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            >
              <span>View all projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-foreground text-background border-foreground font-bold shadow-sm"
                    : "bg-card/70 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {cat === "All" ? "All Works" : cat}
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Card Grid matching reference image */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const CardContent = (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-card rounded-3xl border border-border/80 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5"
                  data-cursor="hover"
                  data-cursor-label="EXPLORE"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Category pill on image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10 font-bold">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Arrow button overlay */}
                    <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-black backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Meta Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-muted-foreground group-hover:text-accent transition-colors">
                          <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
                        </span>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                        {project.tag}
                      </p>
                      <p className="text-sm font-sans text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );

              if (project.external) {
                return (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                );
              }

              return (
                <Link key={project.id} href={project.link} className="block">
                  {CardContent}
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
