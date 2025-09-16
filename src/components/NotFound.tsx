import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExclamationTriangleIcon, 
  HomeIcon, 
  ArrowPathIcon,
  BugAntIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';

const NotFound: React.FC = () => {
  const [glitchText, setGlitchText] = useState('404');
  const [errorCode, setErrorCode] = useState('ACCESS_DENIED');

  const glitchVariants = [
    '404',
    '4Ø4',
    '4O4',
    '4o4',
    '4@4',
    '4#4',
    '4$4',
    '4%4',
    '4^4',
    '4&4'
  ];

  const errorCodes = [
    'ACCESS_DENIED',
    'FILE_NOT_FOUND',
    'PERMISSION_DENIED',
    'ROUTE_NOT_FOUND',
    'UNAUTHORIZED_ACCESS',
    'INVALID_REQUEST',
    'SYSTEM_ERROR',
    'NETWORK_TIMEOUT'
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const randomVariant = glitchVariants[Math.floor(Math.random() * glitchVariants.length)];
      setGlitchText(randomVariant);
      
      setTimeout(() => {
        setGlitchText('404');
      }, 100);
    }, 2000);

    const errorInterval = setInterval(() => {
      const randomError = errorCodes[Math.floor(Math.random() * errorCodes.length)];
      setErrorCode(randomError);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(errorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 cyber-grid dark:opacity-20 opacity-10"></div>
      
      {/* Floating Error Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-red/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <BugAntIcon className="h-8 w-8" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="terminal max-w-2xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-mono text-terminal-red">error@system:~$</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="terminal-text space-y-6">
            {/* Error Code */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="text-terminal-red">$</span>
              <span className="text-electric-blue">cat error.log</span>
            </motion.div>

            {/* Glitch 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
              className="text-center"
            >
              <motion.h1 
                className="text-8xl sm:text-9xl font-cyber font-bold text-terminal-red mb-4 glitch"
                data-text={glitchText}
                animate={{ 
                  textShadow: [
                    '0 0 10px #FF073A',
                    '2px 0 0 #FF073A, -2px 0 0 #00FFFF',
                    '0 0 10px #FF073A'
                  ]
                }}
                transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
              >
                {glitchText}
              </motion.h1>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center space-x-2">
                <ShieldExclamationIcon className="h-6 w-6 text-terminal-yellow" />
                <span className="text-terminal-yellow font-mono text-lg">{errorCode}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-cyber text-terminal-green mb-4">
                SECURITY BREACH DETECTED
              </h2>
              
              <p className="text-lg text-primary-light dark:text-primary-dark leading-relaxed max-w-2xl mx-auto">
                The requested resource has been <span className="text-terminal-red font-semibold">quarantined</span> or 
                <span className="text-electric-blue font-semibold"> relocated</span> for security purposes. 
                This could be due to unauthorized access attempts or system maintenance.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="btn btn-primary group"
                >
                  <HomeIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Return to Base
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-secondary group"
                >
                  <ArrowPathIcon className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Go Back
                </button>
              </motion.div>
            </motion.div>

            {/* System Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="pt-6 border-t border-terminal-green/20"
            >
              <div className="flex items-center justify-center space-x-2 text-sm text-secondary-light dark:text-secondary-dark">
                <span className="text-terminal-green">$</span>
                <span className="text-electric-blue">system_status</span>
                <span className="text-terminal-green">--check</span>
              </div>
              <p className="text-xs text-secondary-light dark:text-secondary-dark mt-2 font-mono">
                System: Online | Security: Active | Last Scan: {new Date().toLocaleTimeString()}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
