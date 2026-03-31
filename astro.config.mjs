import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://saludevolutiva.cl",
  integrations: [react(), sitemap(), icon()],
  // output: "static"  // default in Astro 5 — Cloudflare Functions run separately via functions/
  vite: {
    plugins: [tailwindcss()],
  },
});
