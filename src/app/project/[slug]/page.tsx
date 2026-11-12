import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import caseStudies from "@/data/caseStudies.json";
import Container from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${study.title} — ${study.category} Case Study`;
  const description = `${study.overview} Outcome: ${study.outcome}. Tools used: ${study.tools.join(", ")}.`;
  const canonicalUrl = `/project/${slug}`;
  const absoluteImageUrl = study.image.startsWith("http")
    ? study.image
    : `https://muhammad-saquib-portfolio.vercel.app${study.image}`;

  return {
    title,
    description,
    keywords: [
      study.title,
      study.category,
      ...study.tools,
      "Mohammad Saquib",
      "Graphic Design Portfolio",
      "Case Study",
      "Vismora Studio",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Mohammad Saquib`,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${study.title} — ${study.category}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Mohammad Saquib`,
      description,
      images: [absoluteImageUrl],
      creator: "@Ansarisaquib19",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudies.filter((s) => s.slug !== slug);

  const absoluteImageUrl = study.image.startsWith("http")
    ? study.image
    : `https://muhammad-saquib-portfolio.vercel.app${study.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://muhammad-saquib-portfolio.vercel.app/project/${slug}#work`,
        "name": study.title,
        "headline": `${study.title} — ${study.category} Case Study`,
        "description": study.overview,
        "image": absoluteImageUrl,
        "author": {
          "@type": "Person",
          "name": "Mohammad Saquib",
          "url": "https://muhammad-saquib-portfolio.vercel.app",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vismora Studio",
          "url": "https://muhammad-saquib-portfolio.vercel.app",
        },
        "genre": study.category,
        "keywords": study.tools.join(", "),
        "mainEntityOfPage": `https://muhammad-saquib-portfolio.vercel.app/project/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://muhammad-saquib-portfolio.vercel.app/project/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://muhammad-saquib-portfolio.vercel.app",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://muhammad-saquib-portfolio.vercel.app/#projects",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": study.title,
            "item": `https://muhammad-saquib-portfolio.vercel.app/project/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-background pt-32 pb-24 relative z-10">
        <Container>
          {/* Breadcrumb & Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-between">
            <ol className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#projects" className="hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-bold">{study.title}</li>
            </ol>

            <Link 
              href="/#projects" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors font-mono uppercase text-xs tracking-widest"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5 mr-1.5" />
              All Projects
            </Link>
          </nav>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-accent mb-4">
                {study.category} Case Study
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-foreground leading-[0.95] tracking-tighter uppercase">
                {study.title}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg md:text-xl font-sans font-light text-muted-foreground leading-relaxed border-l-2 border-accent pl-5 py-2">
                {study.outcome}
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-[21/9] bg-muted overflow-hidden rounded-3xl md:rounded-[2.5rem] mb-16 md:mb-24 border border-border/80 shadow-md">
            <Image 
              src={study.image} 
              alt={`${study.title} showcase visual`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Case Study Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div className="bg-card p-6 rounded-2xl border border-border/80">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Category & Scope
                </h3>
                <p className="text-lg font-sans font-semibold text-foreground">{study.category}</p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border/80">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-muted/60 border border-border rounded-full text-xs font-mono text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border/80">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Impact Benchmark
                </h3>
                <p className="text-base font-sans font-bold text-accent">{study.outcome}</p>
              </div>

              <div className="pt-4">
                <MagneticButton>
                  <Link 
                    href="mailto:mohammadsaquib693@gmail.com"
                    className="bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-hard transition-all whitespace-nowrap inline-block text-center w-full font-mono text-xs hover:-translate-y-0.5"
                  >
                    Start a Similar Project
                  </Link>
                </MagneticButton>
              </div>
            </div>
            
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/80">
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  {study.overview}
                </p>
              </div>

              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/80">
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground mb-4">
                  The Strategic Approach
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  {study.process}
                </p>
              </div>
            </div>
          </div>

          {/* Project Gallery Assets (if present) */}
          {study.gallery && study.gallery.length > 0 && (
            <section className="mb-24">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Production Proofs & Deliverables
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-1">
                  Design Gallery & Assets
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {study.gallery.map((asset, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-sm group"
                  >
                    <Image
                      src={asset}
                      alt={`${study.title} production artwork ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* More Case Studies Cross-Links for Crawling & Engagement */}
          <section className="pt-16 border-t-2 border-border/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Portfolio Index
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-1">
                  Explore Other Case Studies
                </h2>
              </div>
              <Link 
                href="/#projects" 
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
              >
                View All Works â†’
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/project/${other.slug}`}
                  className="group bg-card rounded-2xl border border-border/80 overflow-hidden shadow-sm hover:border-accent/40 hover:shadow-hard transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-black/60 text-white backdrop-blur-md font-bold">
                        {other.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-xs font-sans text-muted-foreground mt-1 line-clamp-2">
                        {other.overview}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-bold mt-4 inline-flex items-center gap-1">
                      Read Case Study â†’
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </Container>
      </main>

      <Footer />
    </>
  );
}
