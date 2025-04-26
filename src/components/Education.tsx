import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const education = [
  {
    degree: 'BSC (HONS) IN INFORMATION TECHNOLOGY SPECIALIZING IN CYBER SECURITY',
    school: 'SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY',
    period: 'OCT 18,2021 – PRESENT',
    details: [
      'COURSEWORK: Web Security, Cryptography, Mobile Security, Network Security, Secure Economic Analysis, Systems and Network Programming, Database Management Systems for Security, Secure Operating Systems, Enterprise Standards for Information Security, Secure Software Systems, Cyber Forensics and Incident Response, Information Security Policy and Management, Information Security Risk Management'
    ],
  },
  {
    degree: 'GCE ADVANCED LEVEL EXAMINATION',
    school: 'KINGSWOOD COLLEGE KANDY SRI LANKA',
    period: 'MAY 2017 – NOV 2020',
    details: [
      'SUBJECTS: Combined Mathematics (S), Physics (S), Information Technology(C), General English(A)'
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <AcademicCapIcon className="h-8 w-8 text-accent-light dark:text-accent-dark" />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  {edu.school.includes('KINGSWOOD') && (
                    <div className="flex-shrink-0">
                      <img 
                        src="/kingswood.png" 
                        alt="Kingswood College Logo" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  )}
                  {edu.school.includes('SRI LANKA INSTITUTE') && (
                    <div className="flex-shrink-0">
                      <img 
                        src="/sliit.png" 
                        alt="SLIIT Logo" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-accent-light dark:text-accent-dark">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-secondary-light dark:text-secondary-dark">
                      {edu.school}
                    </p>
                    <p className="text-sm text-secondary-light dark:text-secondary-dark mb-4">
                      {edu.period}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-primary-light dark:text-primary-dark">
                          {detail}
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

export default Education; 