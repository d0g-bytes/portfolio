import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Allow external connections (needed for Docker)
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for file watching in Docker
      interval: 1000, // Check for file changes every second
    },
    hmr: {
      port: 5173, // Hot Module Replacement port
    },
  },
});
