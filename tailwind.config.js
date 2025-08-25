import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './main.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
