import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Projects | Mohammad Saquib`,
      description: project.overview,
      images: [{ url: project.image }],
    },
    alternates: {
      canonical: `/project/${id}`,
    }
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/#portfolio" className="inline-flex items-center text-foreground font-bold hover:text-accent transition-colors mb-10 font-mono text-sm uppercase tracking-wider">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          <header className="mb-16">
            <div className="inline-block px-4 py-1 bg-white border-2 border-border shadow-hard rounded-full text-sm font-mono font-bold text-accent uppercase mb-6 wobble">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-8 leading-tight">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y-2 border-border border-dashed">
              <div>
                <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-1">Client</span>
                <span className="font-hand text-xl">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-1">Year</span>
                <span className="font-hand text-xl">{project.year}</span>
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-1">Role</span>
                <span className="font-hand text-xl">Lead Designer</span>
              </div>
            </div>
          </header>

          <figure className="mb-16 rounded-2xl overflow-hidden border-2 border-border shadow-hard bg-white">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </figure>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:font-hand prose-p:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground mb-16">
            <h2 className="text-3xl mb-6 border-b-2 border-border pb-2 inline-block">Overview</h2>
            <p className="mb-10">{project.overview}</p>

            <h2 className="text-3xl mb-6 border-b-2 border-border pb-2 inline-block">The Challenge</h2>
            <p className="mb-10">{project.challenge}</p>

            <h2 className="text-3xl mb-6 border-b-2 border-border pb-2 inline-block">The Solution</h2>
            <p className="mb-10">{project.solution}</p>
          </div>

          <div className="bg-secondary border-2 border-border shadow-hard rounded-2xl p-8 md:p-12 mb-16 wobble">
            <h3 className="text-3xl font-display mb-6">Key Results</h3>
            <ul className="space-y-4">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-white border-2 border-border shadow-hard flex items-center justify-center mr-4 text-accent font-bold">✓</span>
                  <span className="font-hand text-2xl text-foreground mt-1">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-display mb-8">Gallery</h3>
            {project.gallery.map((img, i) => (
              <figure key={i} className="rounded-2xl overflow-hidden border-2 border-border shadow-hard bg-white">
                <img 
                  src={img} 
                  alt={`${project.title} gallery image ${i + 1}`} 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </figure>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t-2 border-border text-center">
            <h3 className="text-4xl font-display mb-6">Ready to build something similar?</h3>
            <Link href="/#contact" className="inline-block bg-brand-gradient text-white px-8 py-4 rounded-xl border-2 border-border shadow-hard shadow-hard-hover font-bold text-lg transition-all wobble">
              Start a Project Together
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
