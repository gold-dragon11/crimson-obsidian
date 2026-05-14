import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// This config is used when running `vite build` directly from the client/ directory.
// The root-level vite.config.ts is used when running from the project root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "../shared"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "../dist/public"),
    emptyOutDir: true,
  },
});
