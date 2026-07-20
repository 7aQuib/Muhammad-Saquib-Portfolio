import Link from "next/link";

export function Footer({ variant = "default" }: { variant?: "default" | "service" }) {
  const baseClasses = "bg-background pt-20 pb-10 border-t-2 border-border";
  const isService = variant === "service";

  return (
    <footer className={`${baseClasses} ${isService ? 'footer--service' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${isService ? 'footer-grid' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'}`}>
          <div className={isService ? 'footer-logo' : 'col-span-1 md:col-span-1'}>
            <Link href="/" className="font-display text-3xl tracking-tight flex items-center">
              ★ Vismora<span className="text-brand-gradient ml-1 font-hand-alt text-4xl">.studio</span>
            </Link>
            <p className="mt-6 font-hand text-xl text-muted-foreground">
              Premium branding, packaging, social media, and visual design for bold brands.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="https://www.instagram.com/vismora.studio/" target="_blank" rel="noopener noreferrer" className={`bg-background text-foreground p-3 rounded-full border-2 border-border shadow-hard shadow-hard-hover hover:bg-brand-gradient hover:text-accent-foreground transition-all ${isService ? 'opacity-60 hover:opacity-100' : ''}`}>
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://dribbble.com/muhammad-saquib-ansari" target="_blank" rel="noopener noreferrer" className={`bg-background text-foreground p-3 rounded-full border-2 border-border shadow-hard shadow-hard-hover hover:bg-brand-gradient hover:text-accent-foreground transition-all ${isService ? 'opacity-60 hover:opacity-100' : ''}`}>
                <span className="sr-only">Dribbble</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
              </a>
              <a href="https://x.com/Ansarisaquib19" target="_blank" rel="noopener noreferrer" className={`bg-background text-foreground p-3 rounded-full border-2 border-border shadow-hard shadow-hard-hover hover:bg-brand-gradient hover:text-accent-foreground transition-all ${isService ? 'opacity-60 hover:opacity-100' : ''}`}>
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-saquib-ansari-823621381/" target="_blank" rel="noopener noreferrer" className={`bg-background text-foreground p-3 rounded-full border-2 border-border shadow-hard shadow-hard-hover hover:bg-brand-gradient hover:text-accent-foreground transition-all ${isService ? 'opacity-60 hover:opacity-100' : ''}`}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div className={isService ? 'footer-col' : ''}>
            <h3 className={`font-display text-2xl ${isService ? 'mb-svc-sm' : 'mb-6'}`}>Services & Store</h3>
            <ul className={`font-hand text-xl ${isService ? 'space-y-svc-sm text-muted-foreground' : 'space-y-3 text-muted-foreground'}`}>
              <li><Link href="/service/branding-identity" className="hover:text-accent hover:underline decoration-2 transition-colors">Branding Identity</Link></li>
              <li><Link href="/service/packaging-design" className="hover:text-accent hover:underline decoration-2 transition-colors">Packaging Design</Link></li>
              <li><Link href="/service/social-media-kits" className="hover:text-accent hover:underline decoration-2 transition-colors">Social Media Kits</Link></li>
              <li><Link href="/service/printing-design" className="hover:text-accent hover:underline decoration-2 transition-colors">Printing Design</Link></li>
            </ul>
          </div>
          
          <div className={`${isService ? 'footer-col mt-6' : ''}`}>
            <h3 className={`font-display text-2xl ${isService ? 'mb-svc-sm' : 'mb-6'}`}>Quick Links</h3>
            <ul className={`font-hand text-xl ${isService ? 'space-y-svc-sm text-muted-foreground' : 'space-y-3 text-muted-foreground'}`}>
              <li><Link href="/" className="hover:text-accent hover:underline decoration-2 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent hover:underline decoration-2 transition-colors">About Me</Link></li>
              <li><Link href="/#portfolio" className="hover:text-accent hover:underline decoration-2 transition-colors">Portfolio</Link></li>
              <li><Link href="/#testimonials" className="hover:text-accent hover:underline decoration-2 transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div className={isService ? 'footer-col' : ''}>
            <h3 className={`font-display text-2xl ${isService ? 'mb-svc-sm' : 'mb-6'}`}>Get in Touch</h3>
            <ul className={`font-hand text-xl ${isService ? 'space-y-svc-sm text-muted-foreground' : 'space-y-3 text-muted-foreground'}`}>
              <li><a href="mailto:mohammadsaquib693@gmail.com" className="hover:text-accent hover:underline decoration-2 transition-colors">mohammadsaquib693@gmail.com</a></li>
              <li><Link href="/#contact" className="hover:text-accent hover:underline decoration-2 transition-colors">Book a Project</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t-2 border-border border-dashed text-center font-mono text-sm font-bold text-muted-foreground uppercase tracking-wider flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} VISMORA.STUDIO. ALL RIGHTS RESERVED.</p>
          <p className="font-mono text-xs text-muted-foreground tracking-widest flex items-center">
            CRAFTED INDEPENDENTLY <span className="mx-3 text-accent text-lg leading-none">✦</span> DESIGNED IN INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
