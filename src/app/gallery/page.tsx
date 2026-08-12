import fs from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery | Mohammad Saquib",
  description: "A curated collection of static Instagram posts and web banner designs.",
};

// Force dynamic rendering so the page re-reads the filesystem on every request.
// This is essential so new images appear immediately without a full rebuild.
export const dynamic = 'force-dynamic';

// Next.js Server Component that reads the file system directly.
// This allows us to dynamically load all images uploaded to the folder.
export default async function GalleryPage() {
  // Define the path to the images folder
  const galleryDirectory = path.join(process.cwd(), "public", "images", "Design Gallery");
  
  let imageFiles: string[] = [];

  try {
    // Read all files in the directory
    const files = fs.readdirSync(galleryDirectory);
    
    // Filter out only valid image formats (png, jpg, jpeg, webp)
    imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return [".png", ".jpg", ".jpeg", ".webp"].includes(ext);
    });
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  // Map the filenames to the GalleryItem format expected by the frontend
  const galleryItems = imageFiles.map((filename, index) => {
    // We must encode the URI to handle spaces and special characters in filenames
    const encodedPath = encodeURI(`/images/Design Gallery/${filename}`);
    
    // Format the title by removing the extension and some cleanup
    const cleanTitle = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

    return {
      id: index + 1,
      title: cleanTitle,
      category: "Design Portfolio", // Generic category since we don't know the exact context automatically
      imgUrl: encodedPath,
    };
  });

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6">
          Design <span className="text-brand-gradient font-hand-alt block sm:inline">Gallery</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light">
          A curated collection of static Instagram posts, dynamic web banners, and visual identity snippets designed to capture attention and drive engagement.
        </p>
      </div>

      {/* Render the Client Component Grid with Infinite Scroll */}
      <GalleryGrid initialItems={galleryItems} />
      
      {/* Call to Action Footer */}
      <div className="max-w-7xl mx-auto mt-32 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Want something similar?</h2>
        <Link 
          href="/#services" 
          className="inline-block bg-brand-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-widest border-2 border-border shadow-hard hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-border)] transition-all"
        >
          View My Services
        </Link>
      </div>
    </main>
  );
}
