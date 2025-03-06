import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Render busca la carpeta "build" en lugar de "dist"
    chunkSizeWarningLimit: 1000, // Aumenta el límite de tamaño de chunk
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Agrupa dependencias en un solo archivo para optimizar carga
          }
        },
      },
    },
  },
});
