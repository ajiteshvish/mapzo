import sharp from 'sharp';
import fs from 'fs';

async function generateFavicons() {
    console.log('Starting favicon generation...\n');

    const svgBuffer = fs.readFileSync('public/favicon.svg');

    // Standard PNG sizes
    const sizes = [
        { size: 16, name: 'favicon-16x16.png' },
        { size: 32, name: 'favicon-32x32.png' },
        { size: 48, name: 'favicon-48x48.png' },
        { size: 192, name: 'favicon-192x192.png' },
        { size: 512, name: 'favicon-512x512.png' },
        { size: 180, name: 'apple-touch-icon.png' }
    ];

    // Generate standard PNGs
    for (const { size, name } of sizes) {
        try {
            await sharp(svgBuffer)
                .resize(size, size)
                .png({ quality: 100, compressionLevel: 9 })
                .toFile(`public/${name}`);

            const stats = fs.statSync(`public/${name}`);
            console.log(`✓ Generated ${name} (${(stats.size / 1024).toFixed(2)} KB)`);
        } catch (error) {
            console.error(`✗ Failed to generate ${name}:`, error.message);
        }
    }

    // Generate maskable icons with padding
    const maskableSizes = [192, 512];

    for (const size of maskableSizes) {
        try {
            // Create a canvas with padding (20% safe zone)
            const paddedSize = Math.round(size * 0.8);
            const padding = Math.round((size - paddedSize) / 2);

            await sharp(svgBuffer)
                .resize(paddedSize, paddedSize)
                .extend({
                    top: padding,
                    bottom: padding,
                    left: padding,
                    right: padding,
                    background: { r: 59, g: 130, b: 246, alpha: 1 }
                })
                .png({ quality: 100, compressionLevel: 9 })
                .toFile(`public/favicon-maskable-${size}x${size}.png`);

            const stats = fs.statSync(`public/favicon-maskable-${size}x${size}.png`);
            console.log(`✓ Generated favicon-maskable-${size}x${size}.png (${(stats.size / 1024).toFixed(2)} KB)`);
        } catch (error) {
            console.error(`✗ Failed to generate maskable ${size}x${size}:`, error.message);
        }
    }

    // Generate ICO file (using 32x32 as base)
    try {
        await sharp(svgBuffer)
            .resize(32, 32)
            .png({ quality: 100, compressionLevel: 9 })
            .toFile('public/favicon.ico');

        const stats = fs.statSync('public/favicon.ico');
        console.log(`✓ Generated favicon.ico (${(stats.size / 1024).toFixed(2)} KB)`);
    } catch (error) {
        console.error('✗ Failed to generate favicon.ico:', error.message);
    }

    console.log('\n✓ Favicon generation complete!');
}

generateFavicons().catch(console.error);
