/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fff4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        secondary: {
          50: '#f7fee7',
          100: '#ecfccb',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
        },
        neon: {
          50: '#f7fee7',
          100: '#ecfccb',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
        },
        dark: {
          800: '#2a2a2f',
          850: '#232328',
          900: '#1a1a1f',
          950: '#0f0f11',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #84cc16 0%, #a3e635 100%)',
        'gradient-neon': 'linear-gradient(135deg, #84cc16 0%, #a3e635 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1f 0%, #232328 100%)',
        'gradient-neon-bright': 'linear-gradient(135deg, #a3e635 0%, #bef264 50%, #fde047 100%)',
        'gradient-neon-subtle': 'linear-gradient(45deg, #84cc16 0%, #a3e635 100%)',
        'gradient-card-hover': 'linear-gradient(135deg, #232328 0%, #2a2a2f 100%)',
      }
    },
  },
  plugins: [],
}