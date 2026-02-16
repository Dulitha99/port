import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootMessage {
  text: string;
  delay: number;
  type: 'info' | 'success' | 'warning' | 'error';
}

const TerminalLoader: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  const bootMessages: BootMessage[] = [
    { text: "Initializing cyber security protocols...", delay: 1000, type: 'info' },
    { text: "Loading threat detection modules...", delay: 1200, type: 'info' },
    { text: "Establishing secure connections...", delay: 1000, type: 'info' },
    { text: "Scanning for vulnerabilities...", delay: 1500, type: 'warning' },
    { text: "Deploying defense mechanisms...", delay: 1000, type: 'info' },
    { text: "Access granted.", delay: 800, type: 'success' },
    { text: "Welcome to the matrix.", delay: 1000, type: 'success' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < bootMessages.length - 1) {
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, bootMessages[currentMessageIndex]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  useEffect(() => {
    const caretTimer = setInterval(() => {
      setShowCaret(prev => !prev);
    }, 500);

    return () => clearInterval(caretTimer);
  }, []);

  const getMessageColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-terminal-green';
      case 'warning':
        return 'text-terminal-yellow';
      case 'error':
        return 'text-terminal-red';
      default:
        return 'text-electric-blue';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background-dark">
      {/* Matrix background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-green/10 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </motion.div>
        ))}
      </div>

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl mx-4"
      >
        <div className="terminal">
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-mono text-terminal-green">
                system@cybersecurity:~$ boot_sequence
              </span>
            </div>
          </div>

          {/* Terminal content */}
          <div className="terminal-text space-y-2 min-h-[200px]">
            {bootMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-2"
              >
                <span className="text-terminal-green font-mono">$</span>
                <span className={`font-mono ${getMessageColor(message.type)}`}>
                  {message.text}
                </span>
                {index === currentMessageIndex && !isComplete && (
                  <motion.span
                    animate={{ opacity: showCaret ? 1 : 0 }}
                    className="text-terminal-green font-mono"
                  >
                    █
                  </motion.span>
                )}
              </motion.div>
            ))}

            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 text-center"
              >
                <div className="text-terminal-green font-cyber text-lg mb-2">
                  SYSTEM READY
                </div>
                <div className="text-electric-blue font-mono text-sm">
                  Press any key to continue...
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalLoader;
