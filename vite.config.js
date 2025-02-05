import { defineConfig } from 'vite';

export default defineConfig({
  // Remove the root config since your index.html is in src/
  base: '/', // Change this to '/' for production builds
  build: {
    outDir: '../dist', // Path is relative to root, so we need to go up one level
    emptyOutDir: true,
  },
});