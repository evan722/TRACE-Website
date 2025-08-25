import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Use a relative base during local development but ensure assets are
// referenced with the repository path when deployed to GitHub Pages.
export default defineConfig(({ mode }) => ({
  // Use a relative base in production so the site works whether it's
  // served from the repository root or a subfolder like GitHub Pages
  // project's `/docs` directory.
  base: mode === 'production' ? './' : '/',

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Emit the production build to `docs` so GitHub Pages can serve it
    // directly from the repository without additional configuration.
    outDir: 'docs',
    emptyOutDir: true,
  },
}));

