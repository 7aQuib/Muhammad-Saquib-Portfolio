export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "lumina-organics",
    title: "Lumina Organics",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
    client: "Lumina Skincare Co.",
    year: "2023",
    overview: "Lumina Organics came to us looking for a complete packaging overhaul for their new line of sustainable skincare products.",
    challenge: "The brand needed to stand out on crowded retail shelves while communicating their core values of sustainability, organic ingredients, and premium quality without using single-use plastics.",
    solution: "We developed a structural packaging system using mushroom mycelium and post-consumer recycled paper. The visual language utilizes a minimalist typographic approach with vibrant, nature-inspired gradients that reflect the active botanical ingredients in each product.",
    results: [
      "150% increase in retail shelf pickup rate",
      "Featured in Vogue Beauty and Dieline",
      "Reduced packaging carbon footprint by 65%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571781564287-19d2bba328e1?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "fintech-startup",
    title: "Fintech Startup",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    client: "Velocity Pay",
    year: "2024",
    overview: "A modern visual identity for a disruptive financial technology startup aiming to make cross-border payments accessible to freelancers.",
    challenge: "Financial brands often look cold and strictly corporate. Velocity Pay wanted to build trust but also appeal to young, creative freelancers and digital nomads.",
    solution: "We crafted a dynamic, brutalist-inspired identity that breaks traditional fintech molds. Using high-contrast colors, playful typography, and custom 3D iconography, we created a brand that feels more like a creative tool than a bank.",
    results: [
      "Waitlist grew to 50,000+ users pre-launch",
      "Successfully secured Series A funding",
      "Won 'Best Brand Identity' at the Fintech Design Awards"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "aura-creative",
    title: "Aura Creative Agency",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
    client: "Aura Creative",
    year: "2023",
    overview: "Designing a stunning, high-performance digital portfolio for a boutique creative agency in London.",
    challenge: "The agency needed a website that could act as a blank canvas for their highly colorful and diverse work, without being boring or purely minimal.",
    solution: "We designed a dark-mode first experience with fluid, WebGL-powered transitions. The interface gets out of the way, letting the case studies shine, while micro-interactions provide a premium, tactile feel.",
    results: [
      "Awwwards Site of the Day",
      "40% increase in inbound client leads",
      "Reduced bounce rate by 25%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "botanical-wonders",
    title: "Botanical Wonders",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1579762715111-a6e19c405494?q=80&w=1000&auto=format&fit=crop",
    client: "National Botanical Society",
    year: "2024",
    overview: "A series of custom, hand-painted digital illustrations for an educational campaign about endangered flora.",
    challenge: "The illustrations needed to be scientifically accurate while retaining an artistic, engaging style that would appeal to younger demographics on social media.",
    solution: "We combined traditional watercolor techniques with digital finishing to create a series of 20 unique botanical illustrations. The color palette was slightly saturated to pop on digital screens while maintaining natural authenticity.",
    results: [
      "Over 2M impressions on Instagram",
      "Adopted into educational curriculum across 50 schools",
      "Campaign raised $150k for conservation efforts"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];
