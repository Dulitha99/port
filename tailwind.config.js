/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cyberpunk colors only
        'primary-dark': '#E0E0E0',      // Light gray
        'secondary-dark': '#BDBDBD',    // Medium gray
        'accent-dark': '#39FF14',       // Neon green
        'background-dark': '#0A0A0A',   // Pure black
        'card-dark': '#1A1A1A',         // Dark charcoal
        
        // Cyberpunk accent colors
        'terminal-green': '#39FF14',    // Neon green
        'terminal-red': '#FF3131',      // Alert red
        'terminal-yellow': '#FFD700',   // Terminal yellow
        'terminal-blue': '#00FFFF',     // Terminal blue
        'electric-blue': '#00FFFF',     // Electric blue
        'electric-purple': '#8A2BE2',   // Deep purple
        
        // Semantic colors (dark mode only)
        primary: '#E0E0E0',
        secondary: '#BDBDBD',
        accent: '#39FF14',
        background: '#0A0A0A',
        card: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        cyber: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
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
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
            textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14'
          },
          '100%': { 
            boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
            textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14'
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#39FF14' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
            transform: 'scale(1.05)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      backgroundImage: {
        'matrix': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text y=\".9em\" font-size=\"10\" fill=\"%2339FF14\">01</text></svg>')",
        'cyber-grid': "linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)",
        'cyber-grid-light': "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.1)',
        'cyber-lg': '0 0 30px rgba(57, 255, 20, 0.4), 0 0 60px rgba(57, 255, 20, 0.2)',
        'cyber-blue': '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1)',
        'cyber-purple': '0 0 20px rgba(138, 43, 226, 0.3), 0 0 40px rgba(138, 43, 226, 0.1)',
        'glow': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'glow-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      },
      textShadow: {
        'cyber': '0 0 5px currentColor, 0 0 10px currentColor',
        'cyber-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      }
    },
  },
  plugins: [],
}
