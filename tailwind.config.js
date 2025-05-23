/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#212121', // New
          dark: '#E0E0E0',   // New
        },
        secondary: {
          light: '#757575', // New
          dark: '#BDBDBD',   // New
        },
        accent: {
          light: '#1976D2', // New
          dark: '#64B5F6',   // New
        },
        background: {
          light: '#F7FAFC', // New
          dark: '#0A192F',   // New
        },
        card: { // New card color object
          light: '#FFFFFF',
          dark: '#1E293B',
        }
      },
      fontFamily: { // New font family
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
