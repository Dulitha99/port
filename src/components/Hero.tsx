import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-accent-light dark:text-accent-dark">
              DULITHA WICKRAMASINGHE
            </h1>
            <p className="text-xl text-secondary-light dark:text-secondary-dark">
              Cybersecurity Professional
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Dulitha99"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://tryhackme.com/p/dulithawickramas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TryHackMe
              </motion.a>
              <motion.a
                href="https://medium.com/@dulithawickramasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Medium
              </motion.a>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4">Professional Summary</h2>
              <p className="text-secondary-light dark:text-secondary-dark leading-relaxed">
                I am a cybersecurity professional with expertise in SOC operations, threat hunting, endpoint security, penetration testing, 
                and security awareness training. Skilled in Palo Alto Cortex XDR, Entra ID, Identity Protection, and email security. 
                Passionate about safeguarding digital assets through innovative security strategies. Strong team player with excellent 
                problem-solving and communication skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden">
              <img
                src="/dulitha.JPEG.jpg"
                alt="Dulitha Wickramasinghe"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-4 border-2 border-accent-light dark:border-accent-dark rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 