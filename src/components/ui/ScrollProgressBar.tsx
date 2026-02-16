import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-terminal-green origin-left z-50 shadow-[0_0_10px_rgba(57,255,20,0.7)]"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgressBar;
