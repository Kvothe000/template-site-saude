// Arquivo: postcss.config.mjs (A VERSÃO EXPLÍCITA)
export default {
  plugins: {
    '@tailwindcss/postcss': {
      // Diga explicitamente ao plugin onde está o config
      config: './tailwind.config.ts'
    },
  },
};