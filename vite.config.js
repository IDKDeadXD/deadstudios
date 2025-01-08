import { defineConfig } from 'vite';

export default defineConfig({
  root: './src/',
  base: './src/', // Ensures relative paths for assets
  build: {
    outDir: 'dist', // Or 'build' if you changed it for Vercel
    emptyOutDir: true,
  },
});
