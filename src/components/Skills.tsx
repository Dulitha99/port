import React from 'react';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

// Animation Variants
const sectionIntroVariants = { // Already implicitly used by section header, formalizing
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // Default for left card
  visible: (i:number) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } }) // Stagger based on index i
};

const categoryTitleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } } // Slight delay after card
};

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.2 } // Faster, subtle delay for each badge
  })
};

const technicalSkillsData = [
  {
    id: 'techCat1',
    category: 'Cybersecurity',
    skills: [
      { id: 'sk1', name: 'SOC Operations' },
      { id: 'sk2', name: 'Threat Hunting' },
      { id: 'sk3', name: 'Endpoint Security (Palo Alto Cortex XDR, Microsoft Defender XDR)' },
      { id: 'sk4', name: 'Identity & Access Management (Entra ID, Identity Protection)' },
      { id: 'sk5', name: 'Email Security (Microsoft Defender for Office 365)' },
      { id: 'sk6', name: 'Security Awareness Training & Phishing Simulation (KnowBe4)' }
    ]
  },
  {
    id: 'techCat2',
    category: 'Programming & Development',
    skills: [
      { id: 'sk7', name: 'Python' }, { id: 'sk8', name: 'PowerShell' }, { id: 'sk9', name: 'Bash' },
      { id: 'sk10', name: 'C++' }, { id: 'sk11', name: 'C' }, { id: 'sk12', name: 'React' },
      { id: 'sk13', name: 'Node.js' }, { id: 'sk14', name: 'HTML' }, { id: 'sk15', name: 'CSS' },
      { id: 'sk16', name: 'Bootstrap' }, { id: 'sk17', name: 'Tailwind CSS' }, { id: 'sk18', name: 'MongoDB' },
      { id: 'sk19', name: 'PHP' }, { id: 'sk20', name: 'Figma' }, { id: 'sk21', name: 'JavaScript' }
    ]
  },
  {
    id: 'techCat3',
    category: 'Tools & Platforms',
    skills: [
      { id: 'sk22', name: 'OWASP ZAP' }, { id: 'sk23', name: 'Postman' }, { id: 'sk24', name: 'Microsoft Intune' },
      { id: 'sk25', name: 'Nessus' }, { id: 'sk26', name: 'Burp Suite' }, { id: 'sk27', name: 'Any.Run' } // Corrected Anyrun to Any.Run
    ]
  }
];

const nonTechnicalSkillsData = [ // Added ids
  { id: 'nts1', name: 'Strong Communication & Leadership' },
  { id: 'nts2', name: 'Critical Thinking & Problem Solving' },
  { id: 'nts3', name: 'Team Collaboration & Decision Making' },
  { id: 'nts4', name: 'Stress Management' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark"> {/* Added bg color */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} // Standardized duration
          viewport={{ once: true, amount: 0.3 }} // Standardized viewport
          className="text-center mb-16" // Centered title, more margin
        >
          <div className="inline-flex items-center justify-center mb-4">
            <WrenchScrewdriverIcon className="h-10 w-10 text-accent-light dark:text-accent-dark mr-3" /> {/* Larger icon */}
            <h2 className="text-4xl font-bold text-primary-light dark:text-primary-dark">Skills</h2> {/* Updated title style */}
          </div>
          <p className="text-lg text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            A showcase of my technical abilities and professional strengths.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills Card */}
          <motion.div
            custom={0} // For cardVariants stagger (left card)
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="card p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-6 text-center md:text-left">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {technicalSkillsData.map((category, catIndex) => (
                <motion.div 
                  key={category.id}
                  // No specific animation variant for category div, elements inside will animate
                >
                  <motion.h4 
                    variants={categoryTitleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-lg font-semibold text-accent-light dark:text-accent-dark mb-4"
                  >
                    {category.category}
                  </motion.h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.id}
                        custom={skillIndex}
                        variants={skillBadgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }} // Animate badge when it's almost fully visible
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark font-medium px-4 py-2 rounded-lg text-sm shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Non-Technical Skills Card */}
          <motion.div
            custom={1} // For cardVariants stagger (right card, x starts from 50)
            variants={{ ...cardVariants, hidden: { opacity: 0, x: 50 } }} // Override x for right card
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="card p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-6 text-center md:text-left">
              Professional Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {nonTechnicalSkillsData.map((skill, skillIndex) => (
                <motion.span
                  key={skill.id}
                  custom={skillIndex}
                  variants={skillBadgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark font-medium px-4 py-2 rounded-lg text-sm shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 