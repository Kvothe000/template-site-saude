// Arquivo: tailwind.config.ts (A VERSÃO CORRETA)
import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Nossas cores, de volta ao lugar certo
      colors: {
        'brand-primary': '#5B21B6',
        'brand-secondary': '#1F2937',
        'brand-accent': '#D2B48C',
      },
    },
  },
  plugins: [],
} satisfies Config; // Usando a sintaxe 'satisfies'

export default config;