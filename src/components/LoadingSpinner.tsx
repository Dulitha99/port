import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-accent-light dark:border-accent-dark rounded-full"
        style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }} // Make two segments transparent for a "C" shape
        animate={{ rotate: 360 }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 0.8,
        }}
      />
      <p className="text-sm text-secondary-light dark:text-secondary-dark">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
