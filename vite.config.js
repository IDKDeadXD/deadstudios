import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set 'src' as the root
  build: {
    outDir: '../public', // Output the build to the 'public' folder
    emptyOutDir: true, // Clean the output directory before building
  },
});
