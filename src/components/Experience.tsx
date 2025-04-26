import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'EXECUTIVE SECURITY OPERATIONS CENTER ANALYST',
    company: 'MIDAS STRATEGIC IT SRI LANKA',
    period: 'JAN 17, 2025 – PRESENT',
    responsibilities: [
      'Monitor and analyze security incidents using Palo Alto Cortex XDR.',
      'Conduct threat hunting and forensic analysis.',
      'Manage identity protection and access security via Entra ID.',
      'Oversee email security operations using Microsoft Defender for Office 365.',
      'Provide security awareness training.',
    ],
  },
  {
    title: 'ASSOCIATE CYBER SECURITY ANALYST',
    company: 'IVEDHA INC TORONTO ONTARIO CANADA',
    period: 'SEP 02, 2024 – DEC 31, 2024',
    responsibilities: [
      'Conducted penetration testing and Vulnerability Assessments.',
      'Managed endpoint security with Microsoft Defender XDR.',
      'Administered Entra ID and Microsoft Intune for security and compliance.',
      'Conducted and implemented security awareness training and phishing campaigns using KnowBe4 Platform.',
    ],
  },
  {
    title: 'INTERN CYBER SECURITY',
    company: 'IVEDHA INC, TORONTO ONTARIO CANADA',
    period: 'FEB 19, 2024 – SEP 02, 2024',
    responsibilities: [
      'Assisted in web application vulnerability assessments.',
      'Conducted security training and phishing simulations.',
      'Supported security solution development.',
      'Supported in Policy development.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <BriefcaseIcon className="h-8 w-8 text-accent-light dark:text-accent-dark" />
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  {exp.company.includes('IVEDHA') && (
                    <div className="flex-shrink-0">
                      <img 
                        src="/ivedha.png" 
                        alt="IVEDHA INC Logo" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  )}
                  {exp.company.includes('MIDAS') && (
                    <div className="flex-shrink-0">
                      <img 
                        src="/midas.png" 
                        alt="MIDAS STRATEGIC IT Logo" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-accent-light dark:text-accent-dark">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-secondary-light dark:text-secondary-dark">
                      {exp.company}
                    </p>
                    <p className="text-sm text-secondary-light dark:text-secondary-dark mb-4">
                      {exp.period}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-primary-light dark:text-primary-dark">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 