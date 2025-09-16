import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/90 backdrop-blur-md border-b border-terminal-green/20 shadow-cyber">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-cyber font-bold text-terminal-green hover:text-electric-blue transition-colors duration-300">
              DULITHA@CYBER:~$
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link relative text-sm font-mono font-medium group"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <span className="text-terminal-green">[</span>
                {item.name}
                <span className="text-terminal-green">]</span>
                <motion.div
                  variants={{
                    rest: { width: 0, opacity: 0 },
                    hover: { width: "100%", opacity: 1 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-terminal-green shadow-glow"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary-dark hover:bg-terminal-green/10 border border-terminal-green/20"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-terminal-green" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-terminal-green" />
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card-dark/50 border border-terminal-green/20 rounded-lg mt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-mono font-medium nav-link hover:bg-terminal-green/10 transition-colors duration-300"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <span className="text-terminal-green">$</span> {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 