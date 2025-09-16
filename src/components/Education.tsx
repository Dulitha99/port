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
      'Relevant Coursework: Web Security, Cryptography, Mobile Security, Network Security, Secure Economic Analysis, Systems and Network Programming, Database Management Systems for Security, Secure Operating Systems, Enterprise Standards for Information Security, Secure Software Systems, Cyber Forensics and Incident Response, Information Security Policy and Management, Information Security Risk Management.',
    ],
    nonAcademic: [
      'Member of SLIIT Cricket Team 2022 and 2023'
    ]
  },
  {
    id: 2,
    degree: 'GCE Advanced Level Examination',
    institution: 'KINGSWOOD COLLEGE, KANDY, SRI LANKA', // Standardized name
    logo: '/kingswood.png',
    period: 'MAY 2017 – NOV 2020',
    details: [
      'Subjects: Combined Mathematics (S), Physics (S), Information Technology (C), General English (A).',
    ],
    nonAcademic: [
      'Member of 1 st XI and 2 nd XI cricket teams 2017/2018 and 2018/2019',
      'Member of Interact Club',
      'Commitee member of IT Society'
    ]
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <AcademicCapIcon className="h-10 w-10 text-terminal-green mr-3" />
            <h2 className="text-4xl font-cyber font-bold cyber-text">Education</h2>
          </div>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto"> {/* Timeline container */}
          {/* The vertical timeline bar */}
          <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-terminal-green via-electric-blue to-electric-purple rounded-full"></div>

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
                             w-12 h-12 sm:w-16 sm:h-16 bg-card-dark rounded-full 
                             border-4 border-terminal-green 
                             flex items-center justify-center shadow-cyber group-hover:scale-110 transition-transform duration-300 z-10"
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} Logo`} 
                    className="h-6 w-6 sm:h-8 sm:h-8 object-contain rounded-sm"
                  />
                </div>

                {/* Content Card - Now needs its own left margin/padding to clear the node */}
                <div className="ml-16 sm:ml-20 cyber-card p-6">
                  <h3 className="text-xl sm:text-2xl font-cyber font-semibold text-terminal-green mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-md sm:text-lg font-medium text-primary-dark mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-secondary-dark mb-4">
                    {edu.period}
                  </p>
                  {edu.details && edu.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-primary-dark">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  )}
                  {edu.nonAcademic && edu.nonAcademic.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-electric-blue mb-2">Non Academic</h4>
                      <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-primary-dark">
                        {edu.nonAcademic.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
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
