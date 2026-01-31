/**
 * Image Optimization Script
 * Mengkonversi gambar ke WebP dan resize untuk thumbnail & full size
 * 
 * Cara pakai:
 * 1. npm install sharp glob
 * 2. node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Konfigurasi
const CONFIG = {
  inputDir: './public/images',
  outputDir: './public/images/optimized',
  
  // Ukuran output
  sizes: {
    thumbnail: { width: 400, height: 300 },  // Untuk grid preview
    medium: { width: 800, height: 600 },     // Untuk card
    full: { width: 1920, height: 1440 }      // Untuk modal/full view
  },
  
  // WebP quality (0-100)
  quality: 85,
  
  // Format input yang didukung
  supportedFormats: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff']
};

// Warna untuk console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log(`📁 Created directory: ${dir}`, 'blue');
  }
}

async function getImageFiles() {
  const patterns = CONFIG.supportedFormats.map(ext => 
    `${CONFIG.inputDir}/**/*.${ext}`
  );
  
  let files = [];
  for (const pattern of patterns) {
    const matches = await glob(pattern, { nocase: true });
    files = files.concat(matches);
  }
  
  // Filter out already optimized files
  return files.filter(f => !f.includes('/optimized/'));
}

async function optimizeImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const relativePath = path.relative(CONFIG.inputDir, path.dirname(inputPath));
  const outputSubDir = path.join(CONFIG.outputDir, relativePath);
  
  await ensureDir(outputSubDir);
  
  const results = [];
  
  for (const [sizeName, dimensions] of Object.entries(CONFIG.sizes)) {
    const outputFilename = `${filename}-${sizeName}.webp`;
    const outputPath = path.join(outputSubDir, outputFilename);
    
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      // Hitung resize dengan mempertahankan aspect ratio
      let resizeOptions = {
        width: dimensions.width,
        height: dimensions.height,
        fit: 'inside',           // Muat dalam batas, pertahankan aspect ratio
        withoutEnlargement: true // Jangan perbesar gambar kecil
      };
      
      await image
        .resize(resizeOptions)
        .webp({ quality: CONFIG.quality })
        .toFile(outputPath);
      
      const outputStats = fs.statSync(outputPath);
      const inputStats = fs.statSync(inputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      
      results.push({
        size: sizeName,
        output: outputPath,
        originalSize: (inputStats.size / 1024).toFixed(1) + ' KB',
        newSize: (outputStats.size / 1024).toFixed(1) + ' KB',
        savings: savings + '%'
      });
      
    } catch (err) {
      log(`  ❌ Error creating ${sizeName}: ${err.message}`, 'red');
    }
  }
  
  return results;
}

async function generatePathMapping(processedFiles) {
  const mappingPath = path.join(CONFIG.outputDir, 'image-paths.json');
  const mapping = {};
  
  for (const file of processedFiles) {
    const originalName = path.basename(file.original, path.extname(file.original));
    const relativePath = path.relative(CONFIG.inputDir, path.dirname(file.original));
    
    mapping[file.original] = {
      thumbnail: `/images/optimized/${relativePath}/${originalName}-thumbnail.webp`.replace(/\\/g, '/'),
      medium: `/images/optimized/${relativePath}/${originalName}-medium.webp`.replace(/\\/g, '/'),
      full: `/images/optimized/${relativePath}/${originalName}-full.webp`.replace(/\\/g, '/'),
    };
  }
  
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  log(`\n📄 Path mapping saved to: ${mappingPath}`, 'cyan');
  
  return mapping;
}

async function main() {
  console.log('\n');
  log('🖼️  IMAGE OPTIMIZATION SCRIPT', 'cyan');
  log('================================', 'cyan');
  
  // Ensure output directory exists
  await ensureDir(CONFIG.outputDir);
  
  // Get all image files
  const imageFiles = await getImageFiles();
  
  if (imageFiles.length === 0) {
    log(`\n⚠️  No images found in ${CONFIG.inputDir}`, 'yellow');
    log('Supported formats: ' + CONFIG.supportedFormats.join(', '), 'yellow');
    return;
  }
  
  log(`\n📷 Found ${imageFiles.length} images to optimize\n`, 'green');
  
  const processedFiles = [];
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (const imagePath of imageFiles) {
    const relativePath = path.relative(CONFIG.inputDir, imagePath);
    log(`\n🔄 Processing: ${relativePath}`, 'blue');
    
    const results = await optimizeImage(imagePath);
    
    processedFiles.push({
      original: imagePath,
      outputs: results
    });
    
    for (const result of results) {
      log(`  ✅ ${result.size}: ${result.originalSize} → ${result.newSize} (saved ${result.savings})`, 'green');
      totalOriginalSize += parseFloat(result.originalSize);
      totalNewSize += parseFloat(result.newSize);
    }
  }
  
  // Generate path mapping
  const mapping = await generatePathMapping(processedFiles);
  
  // Summary
  console.log('\n');
  log('================================', 'cyan');
  log('📊 OPTIMIZATION SUMMARY', 'cyan');
  log('================================', 'cyan');
  log(`Total images processed: ${imageFiles.length}`, 'green');
  log(`Total variants created: ${imageFiles.length * Object.keys(CONFIG.sizes).length}`, 'green');
  log(`Total size reduction: ${((1 - totalNewSize / totalOriginalSize) * 100).toFixed(1)}%`, 'green');
  
  console.log('\n');
  log('📝 NEXT STEPS:', 'yellow');
  log('1. Update portfolioData.js to use optimized image paths', 'yellow');
  log('2. Example path: /images/optimized/smtp-arrival-thumbnail.webp', 'yellow');
  log('3. Use -thumbnail for grid, -medium for cards, -full for modal', 'yellow');
  console.log('\n');
}

main().catch(err => {
  log(`\n❌ Error: ${err.message}`, 'red');
  process.exit(1);
});
