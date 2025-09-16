import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Matrix-style falling code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-green/5 font-mono text-xs"
            style={{
              left: `${(i * 4) % 100}%`,
              top: `${(i * 4) % 100}%`,
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 12 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
            }}
          >
            {i % 3 === 0 ? '404' : i % 3 === 1 ? 'ERROR' : 'NULL'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <ExclamationTriangleIcon className="h-32 w-32 text-terminal-red mx-auto" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-terminal-red/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-8xl md:text-9xl font-cyber font-bold text-terminal-red mb-4">
              404
            </h1>
            <div className="flex items-center justify-center space-x-2 text-terminal-green font-mono text-lg">
              <span>[</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ERROR_CODE_NOT_FOUND
              </motion.span>
              <span>]</span>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-cyber font-bold text-terminal-green mb-4">
              PAGE_NOT_FOUND
            </h2>
            <p className="text-primary-dark font-mono text-lg mb-2">
              The requested resource could not be located.
            </p>
            <p className="text-secondary-dark font-mono text-sm">
              [SYSTEM_ERROR: HTTP_404_RESPONSE]
            </p>
          </motion.div>

          {/* Glitch Effect */}
          <motion.div
            className="mb-8 p-4 bg-terminal-red/10 border border-terminal-red/30 rounded-lg"
            animate={{
              opacity: [0.8, 1, 0.8],
              borderColor: ['rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0.6)', 'rgba(239, 68, 68, 0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-terminal-red font-mono text-sm">
              <div>ERROR: Cannot resolve path</div>
              <div>STATUS: 404 Not Found</div>
              <div>TIME: {new Date().toISOString()}</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-6 py-3 bg-terminal-green/20 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background-dark font-mono font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HomeIcon className="h-5 w-5" />
              <span>[RETURN_HOME]</span>
            </motion.button>
            
            <motion.button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 px-6 py-3 bg-electric-blue/20 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background-dark font-mono font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>[GO_BACK]</span>
            </motion.button>
          </motion.div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-terminal-green/20"
          >
            <div className="text-xs text-secondary-dark font-mono space-y-1">
              <div>SYSTEM: Portfolio v1.0</div>
              <div>STATUS: Operational</div>
              <div>LAST_UPDATE: {new Date().toLocaleDateString()}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Glitch Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-terminal-red/5 via-electric-blue/5 to-terminal-green/5 opacity-0 pointer-events-none"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 8
        }}
      />
    </div>
  );
};

export default NotFound;