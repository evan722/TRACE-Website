import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Use a relative base during local development but ensure assets are
// referenced with the repository path when deployed to GitHub Pages.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/TRACE-Website/' : '/',

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    outDir: 'dist',
  },
}));

