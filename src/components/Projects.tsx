import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'; // Main section icon & link icon

const projectsData = [ // Updated data structure
  {
    id: 'proj1',
    title: 'Automated Vulnerability Scanning Solution',
    description: 'Development of automation tools for vulnerability scanning using Python and Bash Scripting. Associated with Ivedha Inc.',
    imageUrl: '', // Placeholder for now
    technologies: ['Python', 'Bash', 'Security Automation', 'Vulnerability Assessment'],
    liveUrl: '#', 
    repoUrl: '#', 
  },
  {
    id: 'proj2',
    title: 'Security Awareness & Phishing Simulations',
    description: 'Conducted security awareness training and simulated phishing attacks for multiple clients using the KnowBe4 platform to improve organizational security posture. Associated with Ivedha Inc.',
    imageUrl: '',
    technologies: ['KnowBe4', 'Security Training', 'Phishing Simulation', 'Cyber Hygiene'], // Corrected typo
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Vulnerability Assessments & Penetration Testing',
    description: 'Performed in-depth vulnerability assessments and penetration testing for enterprise clients, identifying security weaknesses and recommending mitigation strategies. Associated with Ivedha Inc.',
    imageUrl: '',
    technologies: ['Penetration Testing', 'Vulnerability Assessment', 'Nessus', 'Burp Suite'],
    liveUrl: '#',
    repoUrl: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background-light dark:bg-background-dark"> {/* Added bg color */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} // Standardized duration
          viewport={{ once: true, amount: 0.3 }} // Standardized viewport
          className="text-center mb-16" // Centered title, more margin
        >
          <div className="inline-flex items-center justify-center mb-4">
            <CodeBracketIcon className="h-10 w-10 text-accent-light dark:text-accent-dark mr-3" /> {/* Larger icon */}
            <h2 className="text-4xl font-bold text-primary-light dark:text-primary-dark">Projects</h2> {/* Updated title style */}
          </div>
          <p className="text-lg text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto"> {/* Subtitle */}
            A selection of projects that showcase my skills and passion for creating impactful solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }} // Updated animation initial state
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}

                viewport={{ once: true, amount: 0.2 }} // Updated viewport amount
                className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl" // New card styling
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-secondary-light dark:text-secondary-dark">Image Placeholder</span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-accent-light dark:text-accent-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-light dark:text-primary-dark text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold uppercase text-secondary-light dark:text-secondary-dark mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 text-xs bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center space-x-4">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors group/link"
                      >
                        View Site
                        <ArrowTopRightOnSquareIcon className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.repoUrl && project.repoUrl !== '#' && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors group/link"
                      >
                        <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22l.005 3.29c0 .315.19.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        {/* </motion.div> // This was the outer motion div for the whole section, individual cards animate now */}
      </div>
    </section>
  );
};

export default Projects; 