import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-6">
            <ShieldCheckIcon className="h-8 w-8 text-accent-light dark:text-accent-dark" />
            <h2 className="section-title">Professional Summary</h2>
          </div>
          <div className="bg-background-light/50 dark:bg-background-dark/50 p-6 rounded-lg shadow-sm">
            <p className="text-lg leading-relaxed text-primary-light dark:text-primary-dark">
              I am a cybersecurity professional with expertise in SOC operations, threat hunting, endpoint security, penetration testing, 
              and security awareness training. Skilled in Palo Alto Cortex XDR, Entra ID, Identity Protection, and email security. 
              Passionate about safeguarding digital assets through innovative security strategies. Strong team player with excellent 
              problem-solving and communication skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 