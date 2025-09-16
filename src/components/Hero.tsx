import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, CodeBracketIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import TypingAnimation from './TypingAnimation';

// Animation variants for text elements
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Hero = () => {
  const typingTexts = [
    "Cybersecurity Analyst",
    "SOC Operations Specialist", 
    "Threat Hunter",
    "Penetration Tester",
    "Security Researcher"
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 md:pt-24 bg-gradient-to-br from-background-light via-background-light/95 to-background-light/90 dark:from-background-dark dark:via-gray-900/50 dark:to-background-dark/80 relative overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid dark:opacity-20 opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10"> 
        <div className="max-w-6xl mx-auto">
          
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="terminal max-w-4xl mx-auto mb-8"
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-mono text-terminal-green">dulitha@cybersecurity:~$</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="terminal-text space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center space-x-2"
              >
                <span className="text-terminal-green">$</span>
                <span className="text-electric-blue">whoami</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center space-x-2"
              >
                <span className="text-terminal-green">$</span>
                <span className="text-electric-blue">cat profile.txt</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-bold cyber-text mb-4"
            >
              DULITHA WICKRAMASINGHE
            </motion.h1>

            {/* Role Title in Glowing Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="bg-electric-blue/10 border-2 border-electric-blue rounded-lg px-6 py-3 shadow-cyber-blue">
                <span className="text-2xl sm:text-3xl font-cyber font-bold text-electric-blue">
                  CYBER SECURITY ANALYST
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
              className="text-lg text-primary-light dark:text-primary-dark leading-relaxed mb-8 max-w-4xl mx-auto"
            >
              Specialized in <span className="text-terminal-green font-semibold">SOC operations</span>, 
              <span className="text-terminal-green font-semibold"> threat hunting</span>, and 
              <span className="text-electric-purple font-semibold"> penetration testing</span>. 
              Protecting digital assets through innovative security strategies and cutting-edge technology.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <motion.a
                href="#projects"
                className="group relative"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-terminal-green/10 border-2 border-terminal-green rounded-lg px-6 py-3 shadow-cyber group-hover:shadow-cyber-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CodeBracketIcon className="w-5 h-5 text-terminal-green group-hover:animate-pulse" />
                    <span className="text-terminal-green font-cyber font-semibold">View Projects</span>
                  </div>
                </div>
              </motion.a>
              
              <motion.a
                href="#blogs"
                className="group relative"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-electric-blue/10 border-2 border-electric-blue rounded-lg px-6 py-3 shadow-cyber-blue group-hover:shadow-cyber-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <ShieldCheckIcon className="w-5 h-5 text-electric-blue group-hover:animate-pulse" />
                    <span className="text-electric-blue font-cyber font-semibold">Read Blog</span>
                  </div>
                </div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-electric-blue/10 border-2 border-electric-blue rounded-lg px-6 py-3 shadow-cyber-blue group-hover:shadow-cyber-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <LockClosedIcon className="w-5 h-5 text-electric-blue group-hover:animate-pulse" />
                    <span className="text-electric-blue font-cyber font-semibold">Get In Touch</span>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textVariants}
              className="flex justify-center space-x-6"
            >
              <motion.a
                href="https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-green hover:text-electric-blue transition-colors duration-300 group"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://github.com/Dulitha99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-green hover:text-electric-blue transition-colors duration-300 group"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="mailto:your-email@example.com"
                className="text-terminal-green hover:text-electric-blue transition-colors duration-300 group"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
