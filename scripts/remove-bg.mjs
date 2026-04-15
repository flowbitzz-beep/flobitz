import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const INPUT = "./public/Gemini_Generated_Image_i1elppi1elppi1el.png";
const OUTPUT = "./public/graphic-design-hero.png";

const image = sharp(INPUT);
const { width, height } = await image.metadata();

// Get raw RGBA pixel data
const { data } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data);
const total = width * height;

// Checkerboard colors: white (~255) and light gray (~204)
// The flower is purple/blue/teal — very different from these neutrals.
// We test: if R, G, B are all above threshold AND chroma (color difference) is low → background
const LIGHT_THRESHOLD = 180; // pixels brighter than this are candidate background
const CHROMA_THRESHOLD = 30; // if max(r,g,b) - min(r,g,b) < this, it's "gray enough"

for (let i = 0; i < total; i++) {
  const base = i * 4;
  const r = pixels[base];
  const g = pixels[base + 1];
  const b = pixels[base + 2];

  const brightness = (r + g + b) / 3;
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);

  // If light AND low chroma → it's white or gray checkerboard → make transparent
  if (brightness > LIGHT_THRESHOLD && chroma < CHROMA_THRESHOLD) {
    pixels[base + 3] = 0; // fully transparent
  }
}

// Re-compose and save with alpha
await sharp(Buffer.from(pixels), {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(OUTPUT);

console.log(`✅ Done → ${OUTPUT}`);
