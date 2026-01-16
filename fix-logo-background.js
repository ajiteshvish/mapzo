import sharp from 'sharp';
import fs from 'fs';

async function removeLogoBackground() {
    console.log('Removing white background from logo.png...\n');

    try {
        // Process the logo to remove white background
        const buffer = await sharp('public/originals/logo.png')
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const { data, info } = buffer;
        const { width, height, channels } = info;

        console.log(`Processing ${width}x${height} image with ${channels} channels`);

        // Make white/near-white pixels transparent
        let pixelsChanged = 0;
        for (let i = 0; i < data.length; i += channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // If pixel is white or very light (threshold 240)
            if (r > 240 && g > 240 && b > 240) {
                data[i + 3] = 0; // Set alpha to 0 (transparent)
                pixelsChanged++;
            }
        }

        console.log(`Made ${pixelsChanged} pixels transparent`);

        // Save the processed image
        await sharp(data, {
            raw: {
                width,
                height,
                channels
            }
        })
            .png({ quality: 100, compressionLevel: 9 })
            .toFile('public/logo.png');

        const stats = fs.statSync('public/logo.png');
        console.log(`✓ Background removed from logo.png`);
        console.log(`  New size: ${(stats.size / 1024).toFixed(2)} KB\n`);

    } catch (error) {
        console.error('✗ Error:', error.message);
    }
}

removeLogoBackground();
