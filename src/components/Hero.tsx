import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for text elements
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ // Custom property 'i' for stagger delay
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger by 0.2s for each item
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Animation for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5, // Delay slightly after text
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 md:pt-24 bg-gradient-to-br from-background-light via-blue-50 to-indigo-100 dark:from-background-dark dark:via-gray-900 dark:to-accent-dark/5" // Updated background, pt
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> {/* Added more vertical padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"> {/* Increased gap */}
          
          {/* Text Content Column */}
          <div className="space-y-6 text-center md:text-left">
            <motion.h1 
              custom={0} // Stagger index
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-light dark:text-primary-dark tracking-tight"
            >
              DULITHA WICKRAMASINGHE
            </motion.h1>
            <motion.p 
              custom={1} // Stagger index
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-2xl sm:text-3xl font-medium text-accent-light dark:text-accent-dark mb-6"
            >
              Cybersecurity Professional
            </motion.p>
            {/* Social Links / CTAs */}
            <motion.div 
              custom={3} // Stagger index (summary is 2)
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base px-6 py-3" 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Dulitha99"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base px-6 py-3" 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
            
            <motion.p 
              custom={2} // Stagger index
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="pt-6 max-w-xl mx-auto md:mx-0 text-lg text-secondary-light dark:text-secondary-dark leading-relaxed"
            >
              I am a cybersecurity professional with expertise in SOC operations, threat hunting, endpoint security, penetration testing, 
              and security awareness training. Skilled in Palo Alto Cortex XDR, Entra ID, Identity Protection, and email security. 
              Passionate about safeguarding digital assets through innovative security strategies. Strong team player with excellent 
              problem-solving and communication skills.
            </motion.p>
          </div>

          {/* Image Column */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-72 sm:w-80 md:w-96 lg:w-[26rem]"
          >
            <div 
              className="aspect-square rounded-full overflow-hidden shadow-2xl 
                         ring-4 ring-card-light dark:ring-gray-700 
                         ring-offset-4 ring-offset-background-light dark:ring-offset-background-dark"
            >
              <img
                src="/dulitha.JPEG.jpg" 
                alt="Dulitha Wickramasinghe"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Old animated border removed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 