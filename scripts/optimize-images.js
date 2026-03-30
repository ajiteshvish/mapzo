import sharp from 'sharp';
import fs from 'fs';
import { execSync } from 'child_process';

async function optimizeImages() {
    console.log('Starting image optimization...\n');

    const images = [
        { input: 'public/logo.png', type: 'png' },
        { input: 'public/site.png', type: 'png' },
        { input: 'public/main_site.jpeg', type: 'jpeg' }
    ];

    for (const { input, type } of images) {
        try {
            const originalStats = fs.statSync(input);
            const originalSize = originalStats.size;

            console.log(`Processing ${input}...`);
            console.log(`  Original size: ${(originalSize / 1024).toFixed(2)} KB`);

            // Optimize based on type
            if (type === 'png') {
                await sharp(input)
                    .png({ quality: 90, compressionLevel: 9, effort: 10 })
                    .toFile(input + '.tmp');
            } else if (type === 'jpeg') {
                await sharp(input)
                    .jpeg({ quality: 85, mozjpeg: true })
                    .toFile(input + '.tmp');
            }

            const optimizedStats = fs.statSync(input + '.tmp');
            const optimizedSize = optimizedStats.size;
            const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

            // Replace original with optimized
            fs.renameSync(input + '.tmp', input);

            console.log(`  Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB`);
            console.log(`  Reduction: ${reduction}%`);

            // Generate WebP version
            const webpOutput = input.replace(/\.(png|jpeg|jpg)$/, '.webp');
            await sharp(input)
                .webp({ quality: 85, effort: 6 })
                .toFile(webpOutput);

            const webpStats = fs.statSync(webpOutput);
            const webpReduction = ((originalSize - webpStats.size) / originalSize * 100).toFixed(1);

            console.log(`  WebP size: ${(webpStats.size / 1024).toFixed(2)} KB (${webpReduction}% reduction)`);
            console.log(`  ✓ Generated ${webpOutput}\n`);

        } catch (error) {
            console.error(`✗ Failed to optimize ${input}:`, error.message);
        }
    }

    // Optimize placeholder.svg
    try {
        console.log('Optimizing placeholder.svg...');
        const originalStats = fs.statSync('public/placeholder.svg');
        const originalSize = originalStats.size;
        console.log(`  Original size: ${(originalSize / 1024).toFixed(2)} KB`);

        execSync('npx svgo public/placeholder.svg -o public/placeholder.svg', { stdio: 'pipe' });

        const optimizedStats = fs.statSync('public/placeholder.svg');
        const optimizedSize = optimizedStats.size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

        console.log(`  Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB`);
        console.log(`  Reduction: ${reduction}%`);
        console.log('  ✓ Optimized placeholder.svg\n');
    } catch (error) {
        console.error('✗ Failed to optimize placeholder.svg:', error.message);
    }

    console.log('✓ Image optimization complete!');
}

optimizeImages().catch(console.error);
