import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import DeliverablesTree from "@/components/DeliverablesTree";
import MagneticButton from "@/components/motion/MagneticButton";

// Mock database of services
const servicesData = {
  "branding-identity": {
    title: "Brand Identity",
    basePrice: "₹14,999",
    maxPrice: "₹45,000+",
    description: "Complete visual identity systems including logos, typography, color palettes, and brand guidelines to make you unforgettable.",
    folderTree: {
      rootName: "Brand Logo Suite",
      topLevelFolders: [
        {
          name: "Primary Logo",
          type: "folder",
          children: [
            {
              name: "Digital (RGB)",
              type: "folder",
              children: [
                { name: "01 Color Background", type: "folder", formats: ["EPS", "JPG", "PDF", "PNG", "SVG"] },
                { name: "02 No Background", type: "folder", formats: ["EPS", "PDF", "PNG", "SVG"] },
                { name: "03 Black & White", type: "folder", formats: ["EPS", "JPG", "PDF", "PNG", "SVG"] }
              ]
            },
            {
              name: "Print (CMYK)",
              type: "folder",
              children: [
                { name: "01 Color Background", type: "folder", formats: ["EPS", "PDF"] },
                { name: "02 No Background", type: "folder", formats: ["EPS", "PDF"] },
                { name: "03 Black & White", type: "folder", formats: ["EPS", "PDF"] }
              ]
            }
          ]
        },
        {
          name: "Secondary Logo",
          type: "folder",
          children: [
            { name: "Digital (RGB)", type: "folder", formats: ["EPS", "JPG", "PNG", "SVG"] },
            { name: "Print (CMYK)", type: "folder", formats: ["EPS", "PDF"] }
          ]
        },
        {
          name: "Wordmark",
          type: "folder",
          children: [
            { name: "Digital (RGB)", type: "folder", formats: ["EPS", "JPG", "PNG", "SVG"] },
            { name: "Print (CMYK)", type: "folder", formats: ["EPS", "PDF"] }
          ]
        },
        {
          name: "Logomark / Favicon",
          type: "folder",
          children: [
            { name: "Favicon 16x16", type: "folder", formats: ["ICO", "PNG"] },
            { name: "Favicon 32x32", type: "folder", formats: ["ICO", "PNG"] },
            { name: "App Icon 512x512", type: "folder", formats: ["PNG", "SVG"] }
          ]
        },
        {
          name: "Brand Guidelines",
          type: "folder",
          children: [
            { name: "Digital Guideline", type: "folder", formats: ["PDF"] },
            { name: "Print Guideline", type: "folder", formats: ["PDF"] },
            { name: "Source File", type: "folder", formats: ["INDD", "AI"] }
          ]
        }
      ]
    }
  },
  "packaging-design": {
    title: "Packaging Design",
    basePrice: "₹11,999",
    maxPrice: "₹35,000+",
    description: "Premium, shelf-ready packaging that tells your product's story and creates a memorable unboxing experience.",
    folderTree: {
      rootName: "Packaging Delivery",
      topLevelFolders: [
        { 
          name: "Dielines", 
          type: "folder",
          children: [
            { name: "Primary Box", type: "folder", formats: ["PDF", "AI", "DXF"] },
            { name: "Insert/Tray", type: "folder", formats: ["PDF", "AI"] }
          ]
        },
        { 
          name: "Label Graphics", 
          type: "folder",
          children: [
            { name: "Front Label", type: "folder", formats: ["PDF", "AI", "EPS"] },
            { name: "Back/Info Label", type: "folder", formats: ["PDF", "AI"] }
          ]
        },
        {
          name: "3D Renderings",
          type: "folder",
          children: [
            { name: "Studio Lighting", type: "folder", formats: ["JPG", "PNG"] },
            { name: "Transparent BG", type: "folder", formats: ["PNG"] },
            { name: "Lifestyle Mockup", type: "folder", formats: ["JPG", "PSD"] }
          ]
        },
        {
          name: "Print-Ready Files",
          type: "folder",
          children: [
            { name: "Box Structure (CMYK)", type: "folder", formats: ["PDF", "EPS"] },
            { name: "Foil/Emboss Masks", type: "folder", formats: ["PDF"] }
          ]
        }
      ]
    }
  },
  "social-media-kits": {
    title: "Social Media Kits",
    basePrice: "₹9,999",
    maxPrice: "₹25,000/mo",
    description: "Cohesive, scroll-stopping templates and assets designed specifically for Instagram, LinkedIn, and TikTok.",
    folderTree: {
      rootName: "Social Media Arsenal",
      topLevelFolders: [
        { 
          name: "Profile Optimization", 
          type: "folder",
          children: [
            { name: "Profile Pictures", type: "folder", formats: ["JPG", "PNG"] },
            { name: "Cover Banners (LinkedIn/FB)", type: "folder", formats: ["JPG", "PNG"] },
            { name: "Highlight Covers (IG)", type: "folder", formats: ["JPG", "PNG"] }
          ]
        },
        {
          name: "Post Templates",
          type: "folder",
          children: [
            { name: "Instagram Feed (1080x1080)", type: "folder", formats: ["PSD", "Canva"] },
            { name: "Portrait Feed (1080x1350)", type: "folder", formats: ["PSD", "Canva"] },
            { name: "Stories / Reels (1080x1920)", type: "folder", formats: ["PSD", "Canva"] }
          ]
        },
        {
          name: "Ad Creatives",
          type: "folder",
          children: [
            { name: "Static Ads", type: "folder", formats: ["PSD", "Canva", "JPG"] },
            { name: "Carousel Templates", type: "folder", formats: ["PSD", "Canva"] }
          ]
        }
      ]
    }
  },
  "printing-design": {
    title: "Printing Design",
    basePrice: "₹7,999",
    maxPrice: "₹20,000+",
    description: "High-quality print designs including brochures, banners, hoardings, and business stationery.",
    folderTree: {
      rootName: "Print Ready Files",
      topLevelFolders: [
        {
          name: "Brochures",
          type: "folder",
          children: [
            { name: "Web Quality (RGB)", type: "folder", formats: ["PDF"] },
            { name: "Print Quality (CMYK)", type: "folder", formats: ["PDF", "INDD"] }
          ]
        },
        { 
          name: "Banners & Hoardings", 
          type: "folder",
          children: [
            { name: "Large Format (Bleed)", type: "folder", formats: ["PDF", "EPS", "TIFF"] },
            { name: "Source Files", type: "folder", formats: ["AI", "PSB"] }
          ]
        },
        {
          name: "Stationery",
          type: "folder",
          children: [
            { name: "Business Cards", type: "folder", formats: ["PDF", "AI"] },
            { name: "Letterheads", type: "folder", formats: ["PDF", "DOCX"] },
            { name: "Envelopes", type: "folder", formats: ["PDF", "AI"] }
          ]
        }
      ]
    }
  }
};

const workflowSteps = [
  {
    step: "01",
    title: "Discovery Call & Discussion",
    desc: "We start with a detailed 1-on-1 call to understand your brand's vision, target audience, and specific market requirements."
  },
  {
    step: "02",
    title: "Research & Strategy",
    desc: "I conduct deep competitive research and formulate a visual strategy tailored to outshine your competitors in the Indian and global markets."
  },
  {
    step: "03",
    title: "Concept Development",
    desc: "Initial mood boards and design concepts are crafted and presented. We align on the core creative direction."
  },
  {
    step: "04",
    title: "Refinement & Revisions",
    desc: "Based on your feedback, we iterate and polish the chosen concept until it perfectly aligns with your expectations."
  },
  {
    step: "05",
    title: "Final Delivery & Handoff",
    desc: "All source files, exported assets, and comprehensive guidelines are delivered securely, ready for immediate use."
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Services | Mohammad Saquib`,
      description: service.description,
    },
    alternates: {
      canonical: `/service/${slug}`,
    }
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <section className="svc-hero mb-svc-4xl">
            <div className="grid grid-cols-12 gap-8">
              
              {/* Title Block */}
              <div className="col-span-12 md:col-span-7">
                <Link href="/#services" className="inline-flex items-center text-foreground font-bold hover:text-accent transition-colors mb-svc-md font-mono text-sm uppercase tracking-wider">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
                <h1 className="text-5xl md:text-7xl font-display max-w-[12ch]">
                  {service.title}
                </h1>
                <p className="font-hand text-2xl text-muted-foreground mt-svc-sm max-w-[40ch]">
                  {service.description}
                </p>
              </div>
          
              {/* Meta Block */}
              <div className="col-span-12 md:col-span-4 md:col-start-9 mt-svc-2xl flex flex-col items-start md:items-end">
                <div className="bg-black/5 dark:bg-white/5 border border-border p-6 rounded-[2rem] w-full max-w-sm relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-sm">
                    Freelance Advantage
                  </div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1 mt-2">
                    Your Investment
                  </div>
                  <div className="text-4xl font-bold font-display text-foreground mb-2">
                    {service.basePrice}
                  </div>
                  {service.maxPrice !== "Variable" && (
                    <div className="text-sm font-sans text-muted-foreground flex items-center gap-2">
                      <span>Agency Equivalent:</span>
                      <span className="line-through opacity-60 font-mono text-foreground">{service.maxPrice}</span>
                    </div>
                  )}
                </div>
                <p className="font-sans text-sm text-muted-foreground mt-4 text-left md:text-right w-full max-w-sm">
                  *Transparent pricing. Get premium agency-level quality without the massive agency overheads.
                </p>
              </div>
          
            </div>
          </section>
        </div>

        {/* Workflow (Roadmap Timeline) */}
        <ProcessRoadmap steps={workflowSteps} />

        {/* Deliverables Tree (Broken out to full width/wider container) */}
        <section className="mt-svc-4xl mb-svc-4xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 max-w-4xl mx-auto md:mx-0">
              <div>
                <h2 className="text-4xl md:text-5xl font-display">What <span className="text-accent">You Get</span></h2>
                <p className="text-muted-foreground font-hand text-xl mt-2">The exact file structures and formats delivered to you.</p>
              </div>
            </div>
            
            <DeliverablesTree data={service.folderTree as any} />
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA */}
          <section className="svc-cta py-svc-4xl border-t-2 border-dashed border-border">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-6">
                <h3 className="text-4xl font-display mb-svc-sm">Ready to elevate your {service.title.toLowerCase()}?</h3>
                <p className="font-hand text-xl text-muted-foreground">Let's discuss how we can build a strong foundation for your brand.</p>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-8 flex md:justify-end">
                <MagneticButton>
                  <Link href="mailto:mohammadsaquib693@gmail.com" className="svc-btn !bg-accent !text-accent-foreground">
                    Schedule a Discovery Call
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer variant="service" />
    </>
  );
}
