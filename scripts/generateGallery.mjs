import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDirectory = path.join(process.cwd(), 'public', 'images', 'Design Gallery');
const outputDir = path.join(process.cwd(), 'src', 'data');
const outputFile = path.join(outputDir, 'galleryImages.json');

try {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Ensure gallery directory exists (to prevent build crashes if empty)
  if (!fs.existsSync(galleryDirectory)) {
    fs.mkdirSync(galleryDirectory, { recursive: true });
  }

  const files = fs.readdirSync(galleryDirectory);
  
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return [".png", ".jpg", ".jpeg", ".webp"].includes(ext);
  });

  const galleryItems = imageFiles.map((filename, index) => {
    const cleanTitle = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    return {
      id: index + 1,
      title: cleanTitle,
      category: "Design Portfolio",
      imgUrl: encodeURI(`/images/Design Gallery/${filename}`),
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(galleryItems, null, 2));
  console.log(`[Gallery Script] Successfully generated ${galleryItems.length} items in galleryImages.json`);
} catch (error) {
  console.error('[Gallery Script] Error generating gallery images:', error);
  // Create an empty array so the build doesn't fail
  if (fs.existsSync(outputDir)) {
    fs.writeFileSync(outputFile, JSON.stringify([]));
  }
}
