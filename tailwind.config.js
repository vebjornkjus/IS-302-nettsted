/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        capgemini: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0070f3',
          600: '#0d4f8c',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e2757',
        },
        accent: {
          50: '#fef3c7',
          100: '#fef3c7',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
        },
        tech: {
          50: '#ecfdf5',
          100: '#d1fae5',
          400: '#4ade80',
          500: '#10b981',
          600: '#059669',
        },
        light: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-capgemini': 'linear-gradient(135deg, #0070f3 0%, #60a5fa 100%)',
        'gradient-capgemini-bright': 'linear-gradient(135deg, #0070f3 0%, #60a5fa 70%, #60a5fa 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-bright-yellow': 'linear-gradient(135deg, #fde047 0%, #facc15 50%, #eab308 100%)',
        'gradient-tech': 'linear-gradient(135deg, #10b981 0%, #4ade80 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'gradient-card-hover': 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      }
    },
  },
  plugins: [],
}