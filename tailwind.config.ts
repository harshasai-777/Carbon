import type { Config } from 'tailwindcss';

/**
 * Design tokens for EcoSync — Modern gradient-based, Sustainability/ESG palette.
 * Teal, Cyan, and Emerald colors with enhanced contrast and modern aesthetics.
 * Keep these in sync with the CSS custom properties in src/app/globals.css.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891b2',
          light: '#06b6d4',
          dark: '#0369a1',
        },
        secondary: '#06b6d4',
        accent: '#10b981',
        surface: '#f0f9ff',
        ink: '#0c2f44',
        warning: '#f59e0b',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
