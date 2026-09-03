/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#0c1017',
          850: '#111723',
          800: '#161f2e',
          700: '#1e2b40',
          600: '#2d3f5d',
        },
        accent: {
          blue: '#38bdf8',
          cyan: '#22d3ee',
          sky: '#0284c7',
          glow: 'rgba(56, 189, 248, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 30px -5px rgba(56, 189, 248, 0.35)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
