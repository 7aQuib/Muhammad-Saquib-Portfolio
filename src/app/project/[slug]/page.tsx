import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import caseStudies from "@/data/caseStudies.json";
import Container from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative z-10">
      <Container>
        {/* Back button */}
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors font-mono uppercase text-sm tracking-widest mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-24">
          <div className="lg:col-span-8">
            <span className="text-accent font-mono font-bold uppercase tracking-widest mb-4 block">
              {study.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold text-foreground leading-[0.9] tracking-tighter uppercase">
              {study.title}
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xl md:text-2xl font-sans font-light text-muted-foreground leading-relaxed border-l-2 border-accent pl-6 py-2">
              {study.outcome}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] bg-muted overflow-hidden rounded-[2.5rem] mb-24">
          <Image 
            src={study.image} 
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Services
              </h3>
              <p className="text-lg font-sans text-foreground">{study.category}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 border border-border rounded-full text-sm font-sans">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <MagneticButton>
                <Link 
                  href="/gallery"
                  className="bg-foreground text-background px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 border-transparent hover:border-border shadow-hard transition-all whitespace-nowrap inline-block text-center w-full"
                >
                  View More in Gallery
                </Link>
              </MagneticButton>
            </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">The Challenge</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {study.overview}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">The Approach</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {study.process}
              </p>
            </div>
          </div>
        </div>

      </Container>
    </main>
  );
}
