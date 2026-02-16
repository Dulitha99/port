import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
