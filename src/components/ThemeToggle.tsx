import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-card-light dark:bg-card-dark border border-terminal-green/20 hover:border-terminal-green/40 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="relative w-6 h-6"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <SunIcon className="w-6 h-6 text-terminal-yellow group-hover:text-terminal-green transition-colors duration-300" />
        ) : (
          <MoonIcon className="w-6 h-6 text-electric-blue group-hover:text-terminal-green transition-colors duration-300" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
