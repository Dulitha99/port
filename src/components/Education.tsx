import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline'; // Keeping the main section icon

const educationData = [ // Renamed and added id/logo
  {
    id: 1,
    degree: 'BSc (Hons) in Information Technology Specializing in Cyber Security', // Standardized capitalization
    institution: 'SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY (SLIIT)', // Standardized name
    logo: '/sliit.png', 
    period: 'OCT 2021 – PRESENT', // Standardized date format
    details: [
      'Relevant Coursework: Web Security, Cryptography, Mobile Security, Network Security, Secure Economic Analysis, Systems and Network Programming, Database Management Systems for Security, Secure Operating Systems, Enterprise Standards for Information Security, Secure Software Systems, Cyber Forensics and Incident Response, Information Security Policy and Management, Information Security Risk Management.'
    ],
  },
  {
    id: 2,
    degree: 'GCE Advanced Level Examination',
    institution: 'KINGSWOOD COLLEGE, KANDY, SRI LANKA', // Standardized name
    logo: '/kingswood.png',
    period: 'MAY 2017 – NOV 2020',
    details: [
      'Subjects: Combined Mathematics (S), Physics (S), Information Technology (C), General English (A).'
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-background-light dark:bg-background-dark"> {/* Adjusted padding */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} // Slightly longer duration
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
          className="text-center mb-16" // Centered title area, more bottom margin
        >
          <div className="inline-flex items-center justify-center mb-4"> {/* Wrapper for icon and title */}
            <AcademicCapIcon className="h-10 w-10 text-accent-light dark:text-accent-dark mr-3" /> {/* Larger icon, margin right */}
            <h2 className="text-4xl font-bold text-primary-light dark:text-primary-dark">Education</h2> {/* Updated h2 style */}
          </div>
          <p className="text-lg text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto"> {/* Subtitle */}
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto"> {/* Timeline container */}
          {/* The vertical timeline bar */}
          <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 bg-accent-light/30 dark:bg-accent-dark/30 rounded-full"></div>

            {educationData.map((edu, index) => ( 
            {educationData.map((edu, index) => ( 
              <motion.div
                key={edu.id}
                className="relative mb-12 group" // Removed pl-16/sm:pl-20 from here
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Timeline Node (Circle with Logo) - Positioned relative to the line */}
                <div 
                  className="absolute left-6 sm:left-8 top-1 transform -translate-x-1/2 
                             w-12 h-12 sm:w-16 sm:h-16 bg-card-light dark:bg-card-dark rounded-full 
                             border-4 border-accent-light dark:border-accent-dark 
                             flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-10" // Added z-10 and updated left positioning
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} Logo`} 
                    className="h-6 w-6 sm:h-8 sm:h-8 object-contain rounded-sm"
                  />
                </div>

                {/* Content Card - Now needs its own left margin/padding to clear the node */}
                <div className="ml-16 sm:ml-20 bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-accent-light dark:text-accent-dark mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-md sm:text-lg font-medium text-primary-light dark:text-primary-dark mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-secondary-light dark:text-secondary-dark mb-4">
                    {edu.period}
                  </p>
                  {edu.details && edu.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-primary-light dark:text-primary-dark text-opacity-90 dark:text-opacity-90">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        {/* </motion.div> // This motion.div was for the whole section, items will animate individually */}
      </div>
    </section>
  );
};

export default Education; 