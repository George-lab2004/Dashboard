import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    compression({ algorithm: "gzip" }), // Enable Gzip compression
    compression({ algorithm: "brotliCompress" }), // Enable Brotli compression
  ],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
