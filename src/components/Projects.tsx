import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Automated Vulnerability Scanning Solution',
    company: 'Associated with Ivedha Inc.',
    description: 'Development of automation tools for vulnerability scanning Python and Bash Scripting.',
    technologies: ['Python', 'Bash', 'Security Automation', 'Vulnerability Assessment']
  },
  {
    title: 'Security Awareness & Phishing Simulations',
    company: 'Associated with Ivedha Inc.',
    description: 'Conducted security awareness training and simulated phishing attacks for multiple clients using the KnowBe4 platform to improve organizational security posture.',
    technologies: ['KnowBe4', 'Security Training', 'Phishing Simulation', 'Security Awareness']
  },
  {
    title: 'Vulnerability Assessments & Penetration Testing',
    company: 'Associated with Ivedha Inc.',
    description: 'Performed in-depth vulnerability assessments and penetration testing for enterprise clients, identifying security weaknesses and recommending mitigation strategies.',
    technologies: ['Penetration Testing', 'Vulnerability Assessment', 'Security Analysis', 'Risk Management']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <CodeBracketIcon className="h-8 w-8 text-accent-light dark:text-accent-dark" />
            <h2 className="section-title">Notable Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:border-accent-light dark:hover:border-accent-dark border-2 border-transparent p-4 sm:p-6" // Overriding padding
              >
                <h3 className="text-xl font-bold text-accent-light dark:text-accent-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary-light dark:text-secondary-dark mb-2">
                  {project.company}
                </p>
                <p className="text-primary-light dark:text-primary-dark mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-secondary-light/10 dark:bg-secondary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 