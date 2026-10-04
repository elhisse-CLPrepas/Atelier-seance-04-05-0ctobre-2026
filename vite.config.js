import { defineConfig } from 'vite';

// Hash navigation and relative assets support any GitHub Pages repository name.
export default defineConfig({
  base: './',
  build: { target: 'es2022', sourcemap: false },
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true }
});
