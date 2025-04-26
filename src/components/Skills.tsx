import React from 'react';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const technicalSkills = [
  {
    category: 'Cybersecurity',
    skills: [
      'SOC Operations',
      'Threat Hunting',
      'Endpoint Security (Palo Alto Cortex XDR, Microsoft Defender XDR)',
      'Identity & Access Management (Entra ID, Identity Protection)',
      'Email Security (Microsoft Defender for Office 365)',
      'Security Awareness Training and Phishing Stimulation (KnowBe4)'
    ]
  },
  {
    category: 'Programming & Development',
    skills: [
      'Python',
      'PowerShell',
      'Bash',
      'C++',
      'C',
      'React',
      'Node.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'Tailwind',
      'MongoDB',
      'PHP',
      'Figma',
      'JavaScript'
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'OWASP ZAP',
      'Postman',
      'Microsoft Intune',
      'Nessus',
      'Burpsuite',
      'Anyrun'
    ]
  }
];

const nonTechnicalSkills = [
  'Strong Communication & Leadership',
  'Critical Thinking & Problem Solving',
  'Team Collaboration & Decision Making',
  'Stress Management'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <WrenchScrewdriverIcon className="h-8 w-8 text-accent-light dark:text-accent-dark" />
            <h2 className="section-title">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold text-accent-light dark:text-accent-dark mb-4">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-secondary-light dark:text-secondary-dark mb-2">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Non-Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold text-accent-light dark:text-accent-dark mb-4">
                Non-Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {nonTechnicalSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 