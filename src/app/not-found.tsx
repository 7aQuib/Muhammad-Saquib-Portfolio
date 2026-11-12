import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Mohammad Saquib",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center py-32 relative">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-accent mb-6">
              Error 404 / Page Not Found
            </span>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-foreground tracking-tighter leading-none mb-6">
              Lost in <span className="text-accent font-serif italic font-normal">the Grid.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-sans font-light leading-relaxed mb-10 max-w-lg mx-auto">
              The page you are looking for has been moved, renamed, or no longer exists. Explore my selected works or head back home.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-hard transition-all"
              >
                Return to Home
              </Link>
              <Link
                href="/#projects"
                className="px-6 py-3 rounded-full border-2 border-border bg-card text-foreground font-mono text-xs font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
