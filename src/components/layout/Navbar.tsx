import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background-dark/95 backdrop-blur-md shadow-cyber border-b border-terminal-green/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-cyber font-bold text-terminal-green hover:text-electric-blue transition-colors duration-300">
              DULITHA<span className="text-electric-blue">@</span>CYBER<span className="text-terminal-green">:~$</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4"> {/* Reduced spacing for 7 items */}
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`nav-link relative text-sm font-mono font-medium px-3 py-2 rounded-md transition-colors duration-300 group
                  ${activeSection === item.href.substring(1) ? 'text-terminal-green bg-terminal-green/10' : 'text-primary-dark hover:text-terminal-green hover:bg-terminal-green/5'}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.href.substring(1))} // Immediate feedback
              >
                <span className={`${activeSection === item.href.substring(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity mr-1`}>&gt;</span>
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-terminal-green shadow-[0_0_8px_rgba(57,255,20,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.href.substring(1) ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-terminal-green hover:bg-terminal-green/10 border border-terminal-green/20"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-card-dark/95 backdrop-blur-xl border-t border-terminal-green/20"
            >
              <div className="px-2 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-3 rounded-md text-base font-mono font-medium transition-colors duration-300
                      ${activeSection === item.href.substring(1) ? 'text-terminal-green bg-terminal-green/10 border-l-4 border-terminal-green' : 'text-primary-dark hover:text-terminal-green hover:bg-terminal-green/5'}
                    `}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(item.href.substring(1));
                    }}
                  >
                    <span className="mr-2">{activeSection === item.href.substring(1) ? '●' : '○'}</span> {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
