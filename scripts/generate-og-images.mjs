/**
 * Generate OG images for social sharing (1200×630 PNG).
 * Usage: node scripts/generate-og-images.mjs
 *
 * Requires: sharp (included via astro)
 */
import sharp from "sharp";

const SITE_URL = "https://saludevolutiva.cl";

const templates = [
  {
    name: "og-default",
    title: "Centro de Salud Holística",
    subtitle: "Odontología biológica en Santiago de Chile",
    filename: "og-default.png",
  },
  {
    name: "og-blog",
    title: "Blog",
    subtitle: "Artículos de salud bucal integral",
    filename: "og-blog.png",
  },
  {
    name: "og-servicios",
    title: "Servicios",
    subtitle: "Tratamientos biocompatibles para tu salud",
    filename: "og-servicios.png",
  },
  {
    name: "og-libro",
    title: "Salud Evolutiva",
    subtitle: "Libro gratuito del Dr. Joaquín Ipinza",
    filename: "og-libro.png",
  },
  {
    name: "og-aprende",
    title: "Aprende",
    subtitle: "Guías de salud bucal y bienestar",
    filename: "og-aprende.png",
  },
  {
    name: "og-recursos",
    title: "Recursos",
    subtitle: "Checklists y herramientas para tu salud",
    filename: "og-recursos.png",
  },
];

async function createOGImage({ title, subtitle, filename }) {
  const width = 1200;
  const height = 630;

  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="${width}" y2="${height}">
        <stop offset="0%" stop-color="#047857"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="${width}" y2="0">
        <stop offset="0%" stop-color="#14B8A6"/>
        <stop offset="100%" stop-color="#F59E0B"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)"/>

    <!-- Subtle pattern overlay -->
    <rect width="${width}" height="${height}" fill="url(#bg)" opacity="0.15"/>
    <circle cx="1000" cy="100" r="300" fill="white" opacity="0.03"/>
    <circle cx="200" cy="500" r="200" fill="white" opacity="0.02"/>

    <!-- Top accent line -->
    <rect x="0" y="0" width="${width}" height="4" fill="url(#accent)"/>

    <!-- Logo area (left side) -->
    <rect x="60" y="80" width="4" height="80" rx="2" fill="#14B8A6"/>

    <!-- Title -->
    <text x="85" y="125" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="56" font-weight="800" fill="white">
      ${title.length > 30 ? title.slice(0, 30) + "…" : title}
    </text>

    <!-- Subtitle -->
    <text x="85" y="170" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="24" font-weight="400" fill="rgba(255,255,255,0.7)">
      ${subtitle}
    </text>

    <!-- Bottom bar -->
    <rect x="0" y="${height - 80}" width="${width}" height="80" fill="rgba(0,0,0,0.2)"/>
    <text x="60" y="${height - 40}" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.8)">
      saludevolutiva.cl
    </text>
    <text x="${width - 60}" y="${height - 40}" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="16" font-weight="400" fill="rgba(255,255,255,0.5)" text-anchor="end">
      Dr. Joaquín Ipinza · Santiago, Chile
    </text>

    <!-- Decorative leaf/dot pattern (bottom right) -->
    <circle cx="${width - 120}" cy="${height - 180}" r="3" fill="#14B8A6" opacity="0.4"/>
    <circle cx="${width - 90}" cy="${height - 160}" r="2" fill="#14B8A6" opacity="0.3"/>
    <circle cx="${width - 140}" cy="${height - 150}" r="2.5" fill="#F59E0B" opacity="0.3"/>
    <circle cx="${width - 100}" cy="${height - 130}" r="2" fill="#14B8A6" opacity="0.2"/>
    <circle cx="${width - 60}" cy="${height - 140}" r="3" fill="#F59E0B" opacity="0.25"/>
  </svg>`;

  await sharp(Buffer.from(svg)).png().toFile(`public/images/${filename}`);
  console.log(`✅ Generated ${filename} (${width}×${height})`);
}

async function main() {
  console.log("Generating OG images...\n");
  for (const t of templates) {
    await createOGImage(t);
  }
  console.log("\nDone! Files saved to public/images/");
}

main().catch(console.error);
