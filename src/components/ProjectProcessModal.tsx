"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Box, 
  Palette, 
  Megaphone, 
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

import imgBranding from "@/Assets/Images/Branding.png";
import imgPackaging from "@/Assets/Images/Packaging design.png";
import imgSocial from "@/Assets/Images/social media kit.png";

export interface ProcessPhase {
  number: string;
  title: string;
  duration: string;
  objective: string;
  description: string;
  keyActions: string[];
  deliverable: string;
  metric: { value: string; label: string };
  image: any;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: "Branding" | "Packaging" | "Social Media Creative" | "Ads Campaign Creatives";
  categoryLabel: string;
  tag: string;
  client: string;
  role: string;
  timeframe: string;
  scope: string;
  overview: string;
  heroImage: any;
  externalLink?: string;
  phases: ProcessPhase[];
  gallery?: string[];
}

export const allProjectsCaseStudies: Record<string, ProjectDetail> = {
  "juice-pop-brand": {
    id: "juice-pop-brand",
    title: "JUICE POP",
    subtitle: "Brand Identity & Custom Lettering Architecture",
    category: "Branding",
    categoryLabel: "Brand Identity",
    tag: "Custom Lettering & 3D Brandmark",
    client: "Juice Pop Co. (FMCG Beverages)",
    role: "Lead Brand Designer & Letterer",
    timeframe: "4 Weeks End-to-End",
    scope: "Custom Wordmark, 3D Curves, Chromatic System & Master Brand Bible",
    overview: "A vibrant, tactile identity system created for a youth-focused FMCG fruit soda startup. Built from scratch with hand-drawn lettering, tactile 3D volume, and an energetic palette engineered to disrupt conventional supermarket beverage coolers.",
    heroImage: "/images/Design Gallery/juice-pop/Artboard 1.jpg",
    gallery: [
      "/images/Design Gallery/juice-pop/Artboard 1.jpg",
      "/images/Design Gallery/juice-pop/Artboard 10.jpg",
      "/images/Design Gallery/juice-pop/Artboard 5.jpg",
      "/images/Design Gallery/juice-pop/Artboard 6.jpg",
      "/images/Design Gallery/juice-pop/Artboard 7.jpg",
      "/images/Design Gallery/juice-pop/Artboard 11.jpg",
      "/images/Design Gallery/juice-pop/Artboard 12.jpg"
    ],
    phases: [
      {
        number: "01",
        title: "Discovery & Retail Category Audit",
        duration: "Week 1",
        objective: "Identify retail whitespace in crowded FMCG beverage aisles.",
        description: "Audited 40+ competitor cans in supermarket coolers. Defined sensory cues that trigger Gen-Z impulse buys in under 3 seconds, targeting tactile 3D pop graphics as the winning whitespace.",
        keyActions: [
          "Supermarket cooler audit and visual fatigue analysis",
          "Audience sensory mapping (fizzy carbonation & nostalgia cues)",
          "Formulated 3 conceptual visual territories (Retro-Pop, Minimal Craft, Maximalist Energy)"
        ],
        deliverable: "Strategic Brand Territory & Category Whitespace Document",
        metric: { value: "3 Sec", label: "Shelf Decision Benchmark" },
        image: "/images/Design Gallery/juice-pop/Artboard 1.jpg"
      },
      {
        number: "02",
        title: "Custom Lettering & 3D Wordmark",
        duration: "Week 2",
        objective: "Sculpt bouncy, hand-drawn vector typography that radiates carbonated fizz.",
        description: "Explored 30+ thumbnail sketches testing bubble volume and italic tilt. Engineered custom vector curves with bespoke bevels, drop shadows, and an integrated soda can pull-tab hidden in the 'O'.",
        keyActions: [
          "Hand-drawn thumbnail lettering sketches exploring organic curves",
          "Engineered precision vector paths with 3D bevel and highlight layers",
          "Stress-tested optical balance from 24px favicon to 10ft billboard scale"
        ],
        deliverable: "Master Vector Wordmark, Secondary Lockups, & Pull-Ring Iconography",
        metric: { value: "100%", label: "Custom Hand-Crafted Lettering" },
        image: "/images/Design Gallery/juice-pop/Artboard 10.jpg"
      },
      {
        number: "03",
        title: "Chromatic Palette & Typography Tokens",
        duration: "Week 3",
        objective: "Establish chromatic identification visible across retail aisles.",
        description: "Calibrated high-saturation spot colors engineered for maximum shelf punch under retail cooler lighting. Paired the bubbly custom wordmark with crisp grotesque geometric typography.",
        keyActions: [
          "Formulated Pantone spot colors for accurate high-vibrancy printing",
          "Engineered hierarchical typography tokens for digital & physical touchpoints",
          "Built standardized chromatic tokens for multi-flavor consistency"
        ],
        deliverable: "Chromatic Tokens & Typographic Hierarchy System",
        metric: { value: "5 Tones", label: "Pantone Color Calibrated" },
        image: "/images/Design Gallery/juice-pop/Artboard 5.jpg"
      },
      {
        number: "04",
        title: "Brand Illustrations & Sticker Assets",
        duration: "Week 3 - 4",
        objective: "Develop playful secondary brand assets that add tactile personality.",
        description: "Created bespoke fruit sticker characters, dynamic liquid splash vectors, and pull-ring badges to give the identity endless flexibility across merchandise, packaging, and social campaigns.",
        keyActions: [
          "Illustrated expressive fruit mascot characters and splash motifs",
          "Engineered modular sticker kit for merchandise, apparel, and stickers",
          "Standardized vector icon set for web navigation and packaging stamps"
        ],
        deliverable: "Modular Brand Asset Vault & Sticker Library",
        metric: { value: "24+", label: "Modular Vector Assets" },
        image: "/images/Design Gallery/juice-pop/Artboard 6.jpg"
      },
      {
        number: "05",
        title: "Master Brand Guidelines Bible",
        duration: "Week 4",
        objective: "Standardize all visual rules to safeguard brand consistency across vendors.",
        description: "Compiled a definitive 50-page brand guidelines manual detailing clear space, misuse warnings, color formulas (RGB, CMYK, Pantone, HEX), co-branding guidelines, and art direction rules.",
        keyActions: [
          "Documented logo exclusion zones and minimum reproduction sizes",
          "Outlined print and digital color translation formulas",
          "Delivered organized vector asset vault for internal marketing teams"
        ],
        deliverable: "50-Page Master Brand Guidelines Manual & Vector Vault",
        metric: { value: "+38%", label: "Consumer Brand Recall" },
        image: "/images/Design Gallery/juice-pop/Artboard 7.jpg"
      }
    ]
  },

  "juice-pop-packaging": {
    id: "juice-pop-packaging",
    title: "JUICE POP",
    subtitle: "360° Cylindrical Packaging System & Flavour Architecture",
    category: "Packaging",
    categoryLabel: "Packaging Design",
    tag: "360° Can Graphics & Flavour Architecture",
    client: "Juice Pop Beverages Co.",
    role: "Lead Packaging & Production Designer",
    timeframe: "6 Weeks End-to-End",
    scope: "5 SKUs, 330ml Can Dielines, Spot UV Finishes, Prepress Production",
    overview: "An end-to-end packaging system covering five vibrant fruit soda SKUs. Engineered for seamless 360-degree cylindrical visual flow, tactile matte/gloss finishes, and flawless prepress print production on high-speed factory lines.",
    heroImage: "/images/Design Gallery/juice-pop/Artboard 2.jpg",
    gallery: [
      "/images/Design Gallery/juice-pop/Artboard 2.jpg",
      "/images/Design Gallery/juice-pop/Artboard 3.jpg",
      "/images/Design Gallery/juice-pop/Artboard 4.jpg",
      "/images/Design Gallery/juice-pop/Artboard 8.jpg",
      "/images/Design Gallery/juice-pop/Artboard 9.jpg",
      "/images/Design Gallery/juice-pop/Artboard 13.jpg",
      "/images/Design Gallery/juice-pop/Artboard 14.jpg"
    ],
    phases: [
      {
        number: "01",
        title: "Flavour Architecture & Chromatic Coding",
        duration: "Week 1 - 2",
        objective: "Establish instant flavor identification visible across retail aisles.",
        description: "Assigned distinct high-saturation chromatic codes to each SKU: Mango Splash (Yellow), Berry Blast (Crimson), Green Apple (Chartreuse), and Orange Fizz (Tangerine).",
        keyActions: [
          "Flavour profile chromatic mapping for 5 SKUs",
          "Illustrated individual fruit personalities and splash dynamics",
          "Designed standardized flavour badge system maintaining visual balance"
        ],
        deliverable: "Chromatic Flavour Architecture Blueprint",
        metric: { value: "5 SKUs", label: "Distinct Flavour Identifiers" },
        image: "/images/Design Gallery/juice-pop/Artboard 2.jpg"
      },
      {
        number: "02",
        title: "360° Cylindrical Vector Artwork",
        duration: "Week 3",
        objective: "Eliminate visual dead spots on curved aluminium surfaces.",
        description: "Engineered artwork that flows continuously around the 330ml can body. No matter how the retailer stocks the shelf, the brand name and flavour cues remain unmistakably visible.",
        keyActions: [
          "360-degree cylinder layout optimization eliminating dead angles",
          "Balanced front-facing wordmark with regulatory nutritional facts",
          "Integrated dynamic fruit splashes wrapping around the can seam"
        ],
        deliverable: "Continuous 360° Aluminium Can Artwork",
        metric: { value: "360°", label: "Zero Dead-Spot Flow" },
        image: "/images/Design Gallery/juice-pop/Artboard 3.jpg"
      },
      {
        number: "03",
        title: "Prepress Dielines & Print Proofing",
        duration: "Week 4",
        objective: "Ensure 100% vector accuracy for high-speed manufacturing lines.",
        description: "Created factory-ready dielines with exact bleed, overlap, barcode specifications, and nutritional information compliance according to FSSAI/FDA standards.",
        keyActions: [
          "Engineered 330ml sleek dielines with print margins and registration marks",
          "Integrated barcodes, QR codes, and nutritional panels",
          "Verified plate separations for CMYK + 2 Spot Pantones"
        ],
        deliverable: "Factory-Ready Vector Dielines with Prepress Proofs",
        metric: { value: "0 Errors", label: "Factory Run Accuracy" },
        image: "/images/Design Gallery/juice-pop/Artboard 4.jpg"
      },
      {
        number: "04",
        title: "Tactile Finishes & Spot UV Textures",
        duration: "Week 5",
        objective: "Elevate sensory touchpoint beyond visual appeal.",
        description: "Specified tactile matte finish on the can body with selective spot UV gloss on fruit illustrations and condensation drops to generate a crisp, cold sensory feel in consumers' hands.",
        keyActions: [
          "Created UV varnish separation masks in vector layers",
          "Specified cold-touch aluminium substrate coat",
          "Supervised physical sample print runs with manufacturing partner"
        ],
        deliverable: "Substrate & Coating Specification Sheets",
        metric: { value: "Dual Finish", label: "Matte Body + Gloss Accents" },
        image: "/images/Design Gallery/juice-pop/Artboard 8.jpg"
      },
      {
        number: "05",
        title: "Secondary Packaging & Shipper Trays",
        duration: "Week 6",
        objective: "Extend the brand into multi-packs and retail supermarket shippers.",
        description: "Designed 4-can cluster packs and corrugated supermarket display shipper trays that transform retail bulk stacks into eye-catching billboards.",
        keyActions: [
          "Corrugated shipper box graphics for wholesale delivery",
          "4-pack paperboard sleeve dielines with easy-carry handles",
          "Supermarket pallet stack optimization visual guides"
        ],
        deliverable: "Multi-Pack Sleeves & Corrugated Display Trays",
        metric: { value: "+45%", label: "Q1 Retail Sell-Through Rate" },
        image: "/images/Design Gallery/juice-pop/Artboard 9.jpg"
      }
    ]
  },

  "kus-organic": {
    id: "kus-organic",
    title: "KUS Organic",
    subtitle: "Beverage Packaging & 3D Photorealistic Visualization",
    category: "Packaging",
    categoryLabel: "Packaging Design",
    tag: "Beverage Packaging & Art Direction",
    client: "KUS Organic Beverages",
    role: "Packaging Designer & 3D Visualizer",
    timeframe: "3 Weeks",
    scope: "Bottle Label Architecture, 3D Dynamic Splash Modeling, Lighting & Rendering",
    overview: "A premium organic beverage line requiring fresh, mouth-watering shelf appeal. Blended delicate botanical fruit illustrations with dynamic 3D liquid splash modeling to capture the pure organic essence of real litchi and lemonade.",
    heroImage: imgPackaging,
    externalLink: "https://www.behance.net/ansarisaquib3",
    phases: [
      {
        number: "01",
        title: "Organic Market Positioning & Shelf Audit",
        duration: "Week 1",
        objective: "Position the product as an unadulterated luxury fruit beverage.",
        description: "Analyzed organic beverage competitors in gourmet retail stores. Focused on clean minimalism, transparent glass aesthetics, and highlighting zero artificial preservatives.",
        keyActions: [
          "Analyzed organic beverage shelves & luxury retail trends",
          "Defined botanical color palette & gold foil stamping accents",
          "Selected bottle shape and label substrate for moisture resistance"
        ],
        deliverable: "Visual Direction & Packaging Substrate Guide",
        metric: { value: "Top Tier", label: "Organic Shelf Benchmark" },
        image: imgPackaging
      },
      {
        number: "02",
        title: "Label Architecture & Botanical Artwork",
        duration: "Week 2",
        objective: "Design an elegant label with gold foil accents and organic cues.",
        description: "Crafted delicate litchi fruit and botanical leaf illustrations paired with refined editorial serif typography, creating an artisanal, handcrafted look.",
        keyActions: [
          "Illustrated handcrafted botanical fruit elements",
          "Formatted dual-language ingredient declarations",
          "Engineered foil stamping & emboss plates for luxury finish"
        ],
        deliverable: "Master Label Vector Artwork & Foil Plates",
        metric: { value: "Gold Foil", label: "Embossed Finish" },
        image: imgPackaging
      },
      {
        number: "03",
        title: "3D Splash Modeling & Fluid Simulation",
        duration: "Week 2 - 3",
        objective: "Render dynamic liquid splashes that evoke sensory thirst.",
        description: "Simulated realistic water and juice droplets in 3D, creating an energetic splash that wraps around the bottle with photorealistic light refraction and caustics.",
        keyActions: [
          "Simulated high-velocity liquid droplet splashes in 3D space",
          "Configured studio lighting setup with softbox caustics",
          "Rendered 8K print-resolution hero product stills"
        ],
        deliverable: "8K Photorealistic 3D Liquid Splash Renders",
        metric: { value: "8K UHD", label: "CGI Splash Resolution" },
        image: imgPackaging
      },
      {
        number: "04",
        title: "Prepress & Label Production",
        duration: "Week 3",
        objective: "Deliver error-free print files on waterproof textured stock.",
        description: "Prepared print separations with white ink underlays for transparent labels, ensuring maximum contrast against the chilled liquid inside the bottle.",
        keyActions: [
          "White underlay mask generation for transparent substrate",
          "Barcodes & regulatory compliance approvals",
          "Supervised print proofs on textured substrate"
        ],
        deliverable: "Production-Ready Prepress Master Files",
        metric: { value: "100%", label: "Moisture-Resistant Proof" },
        image: imgPackaging
      },
      {
        number: "05",
        title: "Retail Merchandising & Marketing Assets",
        duration: "Week 3",
        objective: "Support retail launch with standout merchandising graphics.",
        description: "Created counter displays, shelf talkers, and social media launch imagery that highlighted the freshness and premium taste of KUS Organic.",
        keyActions: [
          "Shelf-talker cards for organic gourmet grocery stores",
          "Social media product launch banners and teasers",
          "Wholesale sell sheet for distributors and retailers"
        ],
        deliverable: "Retail Point-Of-Sale Kit & Wholesale Sell Sheet",
        metric: { value: "2.4x", label: "Store Conversion Rate" },
        image: imgPackaging
      }
    ]
  },

  "display-ads-campaign": {
    id: "display-ads-campaign",
    title: "Omnichannel Ads Campaign",
    subtitle: "High-Conversion Performance Banners & Digital Advertising",
    category: "Ads Campaign Creatives",
    categoryLabel: "Ads Campaign",
    tag: "High-Conversion Performance Banners",
    client: "Multi-Brand Performance Growth Agency",
    role: "Creative Director & Lead Performance Designer",
    timeframe: "3 Weeks",
    scope: "Display Banners (IAB Standards), Social Ads, Multi-Ratio Variations, Retargeting",
    overview: "A high-performance advertising creative suite developed to optimize commercial conversion rates and click-through metrics across Google Display Network, Meta, and Programmatic advertising channels.",
    heroImage: "/images/Design Gallery/Display Banners/Artboard 4.png",
    externalLink: "https://www.behance.net/ansarisaquib3",
    gallery: [
      "/images/Design Gallery/Display Banners/Artboard 1.png",
      "/images/Design Gallery/Display Banners/Artboard 2.png",
      "/images/Design Gallery/Display Banners/Artboard 3.png",
      "/images/Design Gallery/Display Banners/Artboard 4.png",
      "/images/Design Gallery/Display Banners/Artboard 5.png",
      "/images/Design Gallery/Display Banners/Artboard 6.png",
      "/images/Design Gallery/Display Banners/Artboard 7.png"
    ],
    phases: [
      {
        number: "01",
        title: "Audience Persona & Creative Hook Research",
        duration: "Week 1",
        objective: "Identify psychological visual triggers that stop the scroll.",
        description: "Analyzed competitor ad fatigue and CTR benchmarks across consumer verticals. Pinpointed high-contrast focal points and provocative benefit-first typography.",
        keyActions: [
          "CTR performance audit across 50+ competitor display ads",
          "Identified 4 primary emotional hooks (Urgency, Social Proof, Curiosity, Value)",
          "Mapped typography scales for mobile micro-screens"
        ],
        deliverable: "Creative Hook Strategy & Banner Frameworks",
        metric: { value: "+28%", label: "Projected CTR Lift" },
        image: "/images/Design Gallery/Display Banners/Artboard 1.png"
      },
      {
        number: "02",
        title: "Visual Hierarchy & Value Proposition",
        duration: "Week 1 - 2",
        objective: "Craft zero-friction visual journeys from headline to CTA button.",
        description: "Designed bold, legible typographic lockups with contrasting call-to-action buttons that guide the viewer's eyes in milliseconds.",
        keyActions: [
          "Engineered 3-step eye-flow structure (Hook → Product → CTA)",
          "Designed vibrant contrast CTA buttons with micro-shadows",
          "Formulated headline typography that renders crisply at 300x250 scale"
        ],
        deliverable: "Core Banner Visual Architecture & Design System",
        metric: { value: "<1.2s", label: "Viewer Hook Time" },
        image: "/images/Design Gallery/Display Banners/Artboard 2.png"
      },
      {
        number: "03",
        title: "Multi-Ratio Format Adaptations",
        duration: "Week 2",
        objective: "Scale seamlessly across standard IAB & social dimensions.",
        description: "Adapted the master visual identity across 8 standard ratios including 300x250 Medium Rectangle, 728x90 Leaderboard, 160x600 Skyscraper, and 1080x1920 Story format.",
        keyActions: [
          "Pixel-perfect grid adaptation across 8 IAB dimensions",
          "Maintained headline hierarchy regardless of aspect ratio",
          "Optimized file sizes under 150KB for fast ad network load"
        ],
        deliverable: "Complete 8-Ratio Production Display Ad Suite",
        metric: { value: "<150KB", label: "Ad Network Load Optimized" },
        image: "/images/Design Gallery/Display Banners/Artboard 3.png"
      },
      {
        number: "04",
        title: "A/B Multivariate Variation Matrix",
        duration: "Week 3",
        objective: "Create testing variations to pinpoint top-performing combinations.",
        description: "Generated matrix of visual variations testing different color backgrounds, headline copy lengths, product angles, and CTA button text to empower media buyers.",
        keyActions: [
          "Rendered 12 multivariate ad variations",
          "Tested light vs dark background contrast ratios",
          "Engineered distinct CTA button triggers ('Order Now' vs 'Claim 20% Off')"
        ],
        deliverable: "Multivariate A/B Testing Asset Matrix",
        metric: { value: "12 Sets", label: "Multivariate Creative Variations" },
        image: "/images/Design Gallery/Display Banners/Artboard 4.png"
      },
      {
        number: "05",
        title: "Performance Analytics & Campaign Scaling",
        duration: "Week 3",
        objective: "Analyze real-world campaign data and double down on winning creatives.",
        description: "Monitored campaign launch performance. The top-performing banner variation delivered a 3.8x return on ad spend and significantly lowered cost-per-acquisition.",
        keyActions: [
          "Performance data review with media buying team",
          "Refined winning creative variations for retargeting pools",
          "Prepared final campaign recap and scaling recommendations"
        ],
        deliverable: "Campaign Performance Report & Scale Assets",
        metric: { value: "3.8x", label: "Campaign ROAS Multiplier" },
        image: "/images/Design Gallery/Display Banners/Artboard 5.png"
      }
    ]
  },

  "social-launch-kit": {
    id: "social-launch-kit",
    title: "Dynamic Social Creative System",
    subtitle: "Thumb-Stopping Carousels & Product Launch Storyboards",
    category: "Social Media Creative",
    categoryLabel: "Social Creative",
    tag: "Instagram Carousels & Launch Creatives",
    client: "D2C Lifestyle & Consumer Brands",
    role: "Social Media Strategist & Visual Designer",
    timeframe: "2 Weeks",
    scope: "Instagram Carousels, Stories, Promotional Kits, Editable Figma Templates",
    overview: "A modular, high-impact social media creative system designed to build anticipation, explain complex product benefits through visual storytelling, and maximize engagement metrics.",
    heroImage: imgSocial,
    externalLink: "https://www.behance.net/ansarisaquib3",
    phases: [
      {
        number: "01",
        title: "Content Strategy & Storyboard Pillars",
        duration: "Week 1",
        objective: "Structure educational, entertaining, and promotional content pillars.",
        description: "Developed a holistic social roadmap that balances brand aesthetics with viral retention hooks, ensuring every post drives audience interaction and saves.",
        keyActions: [
          "Audience retention benchmarking across lifestyle feeds",
          "Pillar framework (Value, Entertainment, Promotion, Community)",
          "Slide-by-slide storyboard mapping for high dwell time"
        ],
        deliverable: "Content Strategy & Carousel Storyboard Blueprints",
        metric: { value: "4 Pillars", label: "Strategic Content Buckets" },
        image: imgSocial
      },
      {
        number: "02",
        title: "Seamless Carousel Transitions",
        duration: "Week 1 - 2",
        objective: "Design visual flow that encourages swiping to the final slide.",
        description: "Engineered continuous artwork that bleeds seamlessly from one carousel slide to the next, creating curiosity and increasing dwell time.",
        keyActions: [
          "Designed continuous graphic elements crossing slide cuts",
          "Embedded curiosity micro-copy at slide edges",
          "Structured punchy key takeaways on each card"
        ],
        deliverable: "Seamless Multi-Slide Carousel Architecture",
        metric: { value: "92%", label: "Swipe-Through Completion" },
        image: imgSocial
      },
      {
        number: "03",
        title: "Motion & Teaser Graphics",
        duration: "Week 2",
        objective: "Bring static brand assets to life for Stories and Reels.",
        description: "Crafted kinetic typography teasers and animated launch countdowns that commanded attention on mobile screens and drove link clicks.",
        keyActions: [
          "Story sticker overlays and countdown templates",
          "Dynamic kinetic typography video presets",
          "Sound-synced transition templates"
        ],
        deliverable: "Animated Story Teasers & Reel Cover Sets",
        metric: { value: "+180%", label: "Story Link Taps" },
        image: imgSocial
      },
      {
        number: "04",
        title: "Modular Figma Design System",
        duration: "Week 2",
        objective: "Empower marketing teams to produce on-brand creatives in minutes.",
        description: "Built an easy-to-use template kit with auto-layout components, color styles, and text styles so the client's internal team can publish content effortlessly.",
        keyActions: [
          "Organized Figma component library with variants",
          "Set up responsive auto-layout text boxes",
          "Authored a quick-start visual usage guide"
        ],
        deliverable: "Figma Social Media Master Component Kit",
        metric: { value: "10 Min", label: "Production Time Per Post" },
        image: imgSocial
      },
      {
        number: "05",
        title: "Launch Campaign Rollout & Impact",
        duration: "Week 2",
        objective: "Execute coordinated brand launch across social channels.",
        description: "Rolled out the launch series resulting in a 320% increase in organic reach and over 4x increase in profile saves and community shares.",
        keyActions: [
          "Coordinated launch day asset drop",
          "Community engagement monitoring and story reposting",
          "Performance recap and template iteration"
        ],
        deliverable: "Launch Execution Analytics & Campaign Deck",
        metric: { value: "+320%", label: "Organic Reach Surge" },
        image: imgSocial
      }
    ]
  },

  "vismora-identity": {
    id: "vismora-identity",
    title: "Vismora Studio",
    subtitle: "Strategic Brand Identity Architecture & Comprehensive Guidelines",
    category: "Branding",
    categoryLabel: "Brand Identity",
    tag: "Comprehensive Visual Guidelines",
    client: "Enterprise & Modern Tech Scale-Ups",
    role: "Brand Identity Architect & Visual Strategist",
    timeframe: "5 Weeks",
    scope: "Core Positioning, Responsive Logomark, Design Tokens, Stationeries, 80-Page Bible",
    overview: "A complete corporate identity system designed for longevity and adaptability. Built to scale across print, digital products, enterprise merchandise, and global marketing touchpoints.",
    heroImage: imgBranding,
    externalLink: "https://www.behance.net/ansarisaquib3",
    phases: [
      {
        number: "01",
        title: "Brand Strategy & Core Values Alignment",
        duration: "Week 1",
        objective: "Define company purpose, voice, and market differentiator.",
        description: "Conducted stakeholder interviews and competitor audits to distill the brand's core essence into three foundational pillars: Precision, Innovation, and Human Warmth.",
        keyActions: [
          "Stakeholder discovery workshops & leadership interviews",
          "Competitor brand matrix mapping across tech verticals",
          "Formulated brand positioning statement & voice archetype"
        ],
        deliverable: "Brand Strategy & Positioning Foundation Document",
        metric: { value: "3 Pillars", label: "Core Strategic Foundations" },
        image: imgBranding
      },
      {
        number: "02",
        title: "Responsive Vector Logomark & Monogram",
        duration: "Week 2 - 3",
        objective: "Craft an iconic, timeless symbol that commands authority.",
        description: "Designed an interconnected geometric monogram that symbolizes synergy and velocity. Rigorously tested at 16px favicon scale and 50ft architectural signage.",
        keyActions: [
          "Explored 60+ conceptual vector sketches and geometry grids",
          "Engineered mathematical grid geometry for the logomark",
          "Created responsive variations (Horizontal, Stacked, Monogram, Favicon)"
        ],
        deliverable: "Master Responsive Vector Logomark Suite",
        metric: { value: "16px to 50ft", label: "Flawless Scaling Range" },
        image: imgBranding
      },
      {
        number: "03",
        title: "Design Tokens: Typography & Color Hierarchy",
        duration: "Week 3 - 4",
        objective: "Establish cohesive design rules across all touchpoints.",
        description: "Selected an authoritative grotesque typeface paired with an editorial serif. Built an accessible color system tested for WCAG AAA contrast compliance.",
        keyActions: [
          "Typographic hierarchy definitions (Display, Headings, Body, Mono)",
          "WCAG AAA compliant color contrast testing",
          "Exported cross-platform design tokens (CSS, Figma, iOS/Android)"
        ],
        deliverable: "Comprehensive Design Tokens & Style System",
        metric: { value: "AAA", label: "WCAG Accessibility Score" },
        image: imgBranding
      },
      {
        number: "04",
        title: "Corporate Collaterals & Merchandise",
        duration: "Week 4",
        objective: "Translate the identity into physical and digital touchpoints.",
        description: "Applied the visual identity to business cards, executive stationery, presentation decks, ID badges, and premium embroidered apparel.",
        keyActions: [
          "Textured foil-stamped business card dielines and papers",
          "Executive Keynote & Google Slides deck templates",
          "Custom merchandise & corporate architectural signage specs"
        ],
        deliverable: "Executive Stationery Suite & Presentation Templates",
        metric: { value: "15+", label: "Corporate Touchpoint Collaterals" },
        image: imgBranding
      },
      {
        number: "05",
        title: "80-Page Master Brand Guidelines Bible",
        duration: "Week 5",
        objective: "Provide a definitive source of truth for all global brand executions.",
        description: "Compiled a meticulous 80-page manual documenting clear space, incorrect usage, photography art direction, iconography, and vendor printing standards.",
        keyActions: [
          "Detailed visual do's and don'ts with real-world examples",
          "Photography art direction & color tone guides",
          "Packaged complete vector asset library for internal teams"
        ],
        deliverable: "80-Page Master Brand Guidelines Bible & Vector Vault",
        metric: { value: "8 Touchpoints", label: "Unified Global Brand System" },
        image: imgBranding
      }
    ]
  }
};

interface ProjectProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

const phaseIcons = [Layers, Sparkles, Palette, Box, Megaphone];

export function ProjectProcessModal({ isOpen, onClose, projectId }: ProjectProcessModalProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  const project = projectId ? (allProjectsCaseStudies[projectId] || allProjectsCaseStudies["juice-pop-brand"]) : null;

  // Reset phase when switching projects
  useEffect(() => {
    setActivePhaseIndex(0);
    setSelectedGalleryImg(null);
  }, [projectId]);

  // Handle ESC key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        if (project) {
          setActivePhaseIndex((prev) => (prev + 1) % project.phases.length);
        }
      } else if (e.key === "ArrowLeft") {
        if (project) {
          setActivePhaseIndex((prev) => (prev - 1 + project.phases.length) % project.phases.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const currentPhase = project.phases[activePhaseIndex] || project.phases[0];
  const CurrentIcon = phaseIcons[activePhaseIndex % phaseIcons.length] || Layers;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[92vh] bg-card border border-border/90 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="p-6 md:p-8 border-b border-border/80 bg-card/95 backdrop-blur-md flex items-start justify-between gap-6 flex-shrink-0">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  CASE STUDY / WORKING PROCESS
                </span>
                <span className="px-3 py-1 bg-muted/60 border border-border rounded-full text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {project.categoryLabel}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                {project.title}{" "}
                <span className="font-editorial italic font-normal text-foreground/90 block sm:inline">
                  — {project.subtitle}
                </span>
              </h2>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 sm:p-3 rounded-full bg-muted/60 hover:bg-foreground hover:text-background text-foreground transition-all duration-200 border border-border/80 flex-shrink-0 cursor-pointer shadow-sm group"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-200" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8 scrollbar-thin">
            
            {/* Project Metadata Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 p-5 md:p-6 bg-muted/30 rounded-2xl border border-border/70 text-xs">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Client</p>
                <p className="font-bold text-foreground">{project.client}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">My Role</p>
                <p className="font-bold text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Timeframe</p>
                <p className="font-bold text-foreground">{project.timeframe}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Impact Benchmark</p>
                <p className="font-bold text-accent">{currentPhase.metric.value} — {currentPhase.metric.label}</p>
              </div>
            </div>

            {/* Process Phase Tabs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold">
                  Working Methodology Phases ({activePhaseIndex + 1}/{project.phases.length})
                </span>
                <span className="hidden sm:inline text-[11px] font-mono text-muted-foreground">
                  Use ← → arrows to navigate
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {project.phases.map((phase, idx) => {
                  const isActive = activePhaseIndex === idx;
                  const IconComponent = phaseIcons[idx % phaseIcons.length];
                  return (
                    <button
                      key={phase.number}
                      onClick={() => {
                        setActivePhaseIndex(idx);
                        setSelectedGalleryImg(null);
                      }}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                        isActive
                          ? "bg-foreground text-background border-foreground font-bold shadow-md"
                          : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isActive ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                      }`}>
                        {phase.number}
                      </span>
                      <span className="font-sans font-medium text-xs">
                        {phase.title}
                      </span>
                      <IconComponent className="w-3.5 h-3.5 opacity-70" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Phase Deep Dive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-card rounded-2xl border border-border/80 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-sm"
              >
                {/* Left Column: Details & Execution */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        Phase {currentPhase.number}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {currentPhase.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight mb-3">
                      {currentPhase.title}
                    </h3>

                    <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed font-light mb-6">
                      {currentPhase.description}
                    </p>

                    {/* Key Actions List */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                        Key Execution Steps:
                      </p>
                      {currentPhase.keyActions.map((action, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-sans text-foreground/85 leading-snug">
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable & Metric Ribbon */}
                  <div className="pt-5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">Key Deliverable</p>
                      <p className="text-xs font-bold text-foreground font-mono">{currentPhase.deliverable}</p>
                    </div>
                    <div className="bg-muted/50 px-3.5 py-1.5 rounded-xl border border-border flex items-center gap-2">
                      <span className="text-base font-display font-bold text-accent">
                        {currentPhase.metric.value}
                      </span>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase">{currentPhase.metric.label}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: High-Res Visual Preview */}
                <div className="lg:col-span-6 relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-muted/40 border border-border/80 shadow-md">
                  <Image
                    src={selectedGalleryImg || currentPhase.image}
                    alt={currentPhase.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-500 hover:scale-102"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-mono uppercase tracking-widest border border-white/20">
                    {selectedGalleryImg ? "Gallery Inspection" : `Artwork: Phase ${currentPhase.number}`}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Additional Project Artboards Gallery Strip (if available) */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold mb-3">
                  Project Artboards & Production Assets ({project.gallery.length} Sheets)
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
                  {project.gallery.map((artboard, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGalleryImg(artboard)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border cursor-pointer transition-all hover:scale-105 ${
                        (selectedGalleryImg || currentPhase.image) === artboard
                          ? "border-accent ring-2 ring-accent/30 shadow-md"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <Image
                        src={artboard}
                        alt={`Artboard ${idx + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Sticky Bottom Actions Bar */}
          <div className="p-4 sm:p-6 border-t border-border/80 bg-card/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePhaseIndex((prev) => (prev - 1 + project.phases.length) % project.phases.length)}
                className="px-3 py-2 rounded-xl border border-border text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Phase</span>
              </button>
              <button
                onClick={() => setActivePhaseIndex((prev) => (prev + 1) % project.phases.length)}
                className="px-3 py-2 rounded-xl border border-border text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next Phase</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-xs font-mono uppercase tracking-wider text-foreground transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View on Behance</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href="#contact"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Inquire About A Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
