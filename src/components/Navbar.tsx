import React, { useState, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Added SunIcon, MoonIcon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // useEffect for theme toggling
  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModePreferred);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

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
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SunIcon className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.75 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MoonIcon className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation Button & Theme Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors mr-2"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="sun-mobile" initial={{ opacity: 0, scale:0.8 }} animate={{ opacity: 1, scale:1 }} exit={{ opacity: 0, scale:0.8 }} transition={{duration:0.2}}>
                    <SunIcon className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div key="moon-mobile" initial={{ opacity: 0, scale:0.8 }} animate={{ opacity: 1, scale:1 }} exit={{ opacity: 0, scale:0.8 }} transition={{duration:0.2}}>
                    <MoonIcon className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
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