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
        coffee: {
          50: '#fdfbf7',
          100: '#f8f3ed',
          200: '#ebdecb',
          300: '#d5be9b',
          400: '#b8966c',
          500: '#9d744a',
          600: '#845c38',
          700: '#69462a',
          800: '#4d321f',
          900: '#2d1f1a',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'coffee-drip': 'drip 2s ease-in-out infinite',
      },
      keyframes: {
        drip: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(8px) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}
