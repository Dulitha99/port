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
          light: '#2D3748', // Updated
          dark: '#E2E8F0',    // Updated
        },
        secondary: {
          light: '#718096', // Updated
          dark: '#A0AEC0',   // Updated
        },
        accent: {
          light: '#2B6CB0', // Updated
          dark: '#3182CE',   // Updated
        },
        background: {
          light: '#FFFFFF', // Remains the same
          dark: '#1A202C',   // Updated
        },
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
