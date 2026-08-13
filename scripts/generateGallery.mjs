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

  const validExts = [".png", ".jpg", ".jpeg", ".webp"];
  
  function walkDir(currentPath) {
    let results = [];
    const files = fs.readdirSync(currentPath);
    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        results = results.concat(walkDir(fullPath));
      } else {
        const ext = path.extname(file).toLowerCase();
        if (validExts.includes(ext)) {
          results.push(fullPath);
        }
      }
    }
    return results;
  }

  const allImageFiles = walkDir(galleryDirectory);

  const galleryItems = allImageFiles.map((fullPath, index) => {
    const relativePath = path.relative(galleryDirectory, fullPath);
    // e.g. "Banners\my_image.png" -> folder="Banners", file="my_image.png"
    // or just "my_image.png" -> no folder
    const parts = relativePath.split(path.sep);
    
    let category = "Post"; // Default for root images
    let filename = parts[parts.length - 1];

    if (parts.length > 1) {
      // Use the immediate parent folder name as the category
      category = parts[parts.length - 2];
    }

    const cleanTitle = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    
    // Construct URL friendly path
    const urlPath = parts.join('/');

    return {
      id: index + 1,
      title: cleanTitle,
      category: category,
      imgUrl: encodeURI(`/images/Design Gallery/${urlPath}`),
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
