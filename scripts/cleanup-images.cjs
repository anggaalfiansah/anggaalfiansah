/**
 * Cleanup non-optimized images from dist folder
 * Removes original jpg/jpeg/png files, keeps only optimized webp
 */

const fs = require('fs');
const path = require('path');

const distImagesPath = path.join(__dirname, '..', 'dist', 'images');

function cleanupImages() {
  if (!fs.existsSync(distImagesPath)) {
    console.log('📁 dist/images folder not found, skipping cleanup');
    return;
  }

  const files = fs.readdirSync(distImagesPath);
  let deletedCount = 0;
  let savedBytes = 0;

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    // Delete non-webp image files (original unoptimized)
    if (['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(ext)) {
      const filePath = path.join(distImagesPath, file);
      const stats = fs.statSync(filePath);
      savedBytes += stats.size;
      fs.unlinkSync(filePath);
      deletedCount++;
      console.log(`🗑️  Deleted: ${file}`);
    }
  });

  if (deletedCount > 0) {
    const savedMB = (savedBytes / 1024 / 1024).toFixed(2);
    console.log(`\n✅ Cleanup complete! Deleted ${deletedCount} files, saved ${savedMB} MB`);
  } else {
    console.log('✅ No non-optimized images to cleanup');
  }
}

cleanupImages();
