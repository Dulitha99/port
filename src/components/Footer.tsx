import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, ShieldCheckIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cyber Security Professional */}
          <div className="text-center md:text-left"> 
            <div className="flex items-center justify-center md:justify-start mb-6">
              <ShieldCheckIcon className="h-8 w-8 text-terminal-green mr-3" />
              <h3 className="text-2xl font-cyber font-bold text-terminal-green">CYBER SECURITY ANALYST</h3>
            </div>
            <p className="text-primary-dark mb-6 leading-relaxed">
              Specialized in SOC operations, threat hunting, and penetration testing. 
              Protecting digital assets through innovative security strategies.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 text-electric-blue" />
                <p className="text-primary-dark font-mono">+94753766162</p>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <EnvelopeIcon className="h-5 w-5 text-electric-blue" />
                <p className="text-primary-dark font-mono">dulithawickramasinghe@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="text-center md:text-left"> 
            <div className="flex items-center justify-center md:justify-start mb-6">
              <CodeBracketIcon className="h-8 w-8 text-electric-blue mr-3" />
              <h3 className="text-2xl font-cyber font-bold text-electric-blue">CONNECT</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-center md:justify-start"> 
              <motion.a
                href="https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-dark hover:text-terminal-green transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-5 w-5 group-hover:text-terminal-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-mono">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/Dulitha99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-dark hover:text-terminal-green transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-5 w-5 group-hover:text-terminal-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-mono">GitHub</span>
              </motion.a>
              <motion.a
                href="https://tryhackme.com/p/dulithawickramas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-dark hover:text-electric-purple transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-5 w-5 group-hover:text-electric-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
                </svg>
                <span className="text-sm font-mono">TryHackMe</span>
              </motion.a>
              <motion.a
                href="https://medium.com/@dulithawickramasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-dark hover:text-electric-blue transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-5 w-5 group-hover:text-electric-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span className="text-sm font-mono">Medium</span>
              </motion.a>
            </div>
          </div>

          {/* Security Focus */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-cyber font-bold text-electric-purple mb-6">SECURITY FOCUS</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <span className="text-terminal-green text-sm">▸</span>
                <span className="text-primary-dark text-sm font-mono">SOC Operations</span>
              </div>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <span className="text-terminal-green text-sm">▸</span>
                <span className="text-primary-dark text-sm font-mono">Threat Hunting</span>
              </div>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <span className="text-electric-purple text-sm">▸</span>
                <span className="text-primary-dark text-sm font-mono">Penetration Testing</span>
              </div>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <span className="text-terminal-green text-sm">▸</span>
                <span className="text-primary-dark text-sm font-mono">Endpoint Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-terminal-green/20 text-center">
          <p className="text-primary-dark font-mono">
            © {currentYear} DULITHA WICKRAMASINGHE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-secondary-dark text-sm font-mono mt-2">
            PROTECTING DIGITAL ASSETS THROUGH INNOVATIVE SECURITY STRATEGIES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 