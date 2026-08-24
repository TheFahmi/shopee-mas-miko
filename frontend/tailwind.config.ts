import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        shopee: {
          50: '#fff5f1',
          100: '#ffe8e0',
          200: '#ffd4c7',
          300: '#ffb5a0',
          400: '#ff8266',
          500: '#ee4d2d', // Official Shopee Orange
          600: '#db3818',
          700: '#b8290f',
          800: '#942310',
          900: '#7a2213',
          dark: '#1a1d24',
        },
        studio: {
          live: '#ef4444',
          idle: '#64748b',
          prep: '#f59e0b',
          bg: '#0f172a',
          card: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'live-glow': 'liveGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        liveGlow: {
          '0%': { boxShadow: '0 0 5px rgba(239, 68, 68, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
