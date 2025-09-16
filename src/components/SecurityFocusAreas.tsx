import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, CodeBracketIcon, TrophyIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const SecurityFocusAreas = () => {
  const focusAreas = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'SOC Operations',
      description: '24/7 security monitoring, incident response, and threat detection'
    },
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: 'Threat Hunting',
      description: 'Proactive threat detection and analysis using advanced techniques'
    },
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: 'Penetration Testing',
      description: 'Vulnerability assessment and security testing of systems'
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: 'Security Training',
      description: 'Educating teams on cybersecurity best practices and awareness'
    }
  ];

  return (
    <section id="security-focus" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Security Focus Areas</h2>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Core areas of expertise in cybersecurity, focusing on proactive defense and comprehensive security strategies.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-terminal-green mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {area.icon}
                </div>
                <h4 className="text-lg font-cyber text-terminal-green mb-3">{area.title}</h4>
                <p className="text-sm text-primary-dark">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityFocusAreas;
