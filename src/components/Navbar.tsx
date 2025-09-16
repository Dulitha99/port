import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm"> {/* Updated z-index, blur, shadow */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold text-accent-light dark:text-accent-dark"> {/* Increased font size slightly */}
              DULITHA {/* Updated brand text */}
            </a>
          </motion.div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6"> {/* Reduced space-x */}
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link relative text-sm font-medium" // Added relative for underline, text-sm
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {item.name}
                <motion.div
                  variants={{
                    rest: { width: 0, opacity: 0 },
                    hover: { width: "100%", opacity: 1 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-accent-light dark:bg-accent-dark"
                />
              </motion.a>
            ))}
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary-light dark:text-primary-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-3`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: 'hidden' }} 
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium nav-link"
                onClick={() => {
                  setIsOpen(false);
                  // Optional: Smooth scroll to section after menu closes
                  // const element = document.querySelector(item.href);
                  // if (element) {
                  //  setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 300); // Adjust delay if needed
                  // }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 