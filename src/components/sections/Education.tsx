import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  CalendarIcon, 
  MapPinIcon,
  BookOpenIcon,
  CodeBracketIcon,
  EyeIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const educationData = [
  {
    id: 1,
    degree: 'BSc (Hons) in Information Technology Specializing in Cyber Security',
    institution: 'SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY (SLIIT)',
    logo: '/sliit.png', 
    period: 'OCT 2021 – PRESENT',
    location: 'Sri Lanka',
    type: 'Undergraduate',
    status: 'Current',
    intro: 'Pursuing a comprehensive degree in Information Technology with specialization in Cyber Security, focusing on advanced security concepts and practical applications.',
    coursework: [
      'Web Security, Cryptography, Mobile Security, Network Security',
      'Secure Economic Analysis, Systems and Network Programming',
      'Database Management Systems for Security, Secure Operating Systems',
      'Enterprise Standards for Information Security, Secure Software Systems',
      'Cyber Forensics and Incident Response, Information Security Policy and Management',
      'Information Security Risk Management'
    ],
    activities: [
      'Member of SLIIT Cricket Team 2022 and 2023'
    ]
  },
  {
    id: 2,
    degree: 'GCE Advanced Level Examination',
    institution: 'KINGSWOOD COLLEGE, KANDY, SRI LANKA',
    logo: '/kingswood.png',
    period: 'MAY 2017 – NOV 2020',
    location: 'Kandy, Sri Lanka',
    type: 'Secondary Education',
    status: 'Completed',
    intro: 'Completed Advanced Level education with focus on Mathematics, Physics, and Information Technology.',
    subjects: [
      'Combined Mathematics (S), Physics (S), Information Technology (C), General English (A)'
    ],
    activities: [
      'Member of 1st XI and 2nd XI cricket teams 2017/2018 and 2018/2019',
      'Member of Interact Club',
      'Committee member of IT Society'
    ]
  },
];

const Education = () => {
  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case 'Current': return 'text-terminal-green bg-terminal-green/20';
      case 'Completed': return 'text-electric-blue bg-electric-blue/20';
      default: return 'text-electric-purple bg-electric-purple/20';
    }
  };

  return (
    <section id="education" className="py-20 bg-background-dark relative overflow-hidden">
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
          <div className="inline-flex items-center justify-center mb-6">
            <AcademicCapIcon className="h-12 w-12 text-terminal-green mr-4" />
            <h2 className="section-title">Education</h2>
          </div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            My academic journey and educational qualifications, showcasing my foundation in 
            Information Technology and Cyber Security.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-terminal-green via-electric-blue to-electric-purple rounded-full"></div>

          {educationData.map((edu, index) => {
            return (
              <motion.div
                key={edu.id}
                className="relative mb-8 group"
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Timeline Node */}
                <motion.div 
                  className="absolute left-8 top-6 transform -translate-x-1/2 
                           w-16 h-16 bg-card-dark rounded-full 
                             border-4 border-terminal-green 
                           flex items-center justify-center shadow-cyber group-hover:scale-110 transition-all duration-300 z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} Logo`} 
                    className="h-8 w-8 object-contain rounded-sm"
                  />
                </motion.div>

                {/* Education Card */}
                <motion.div 
                  className="ml-20 cyber-card p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-cyber text-terminal-green mb-2 group-hover:text-electric-blue transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-primary-dark mb-2">
                        {edu.institution}
                      </p>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-dark mb-4">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4 text-terminal-green" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPinIcon className="h-4 w-4 text-electric-blue" />
                          <span>{edu.location}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(edu.status)}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Introduction */}
                    {edu.intro && (
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <BookOpenIcon className="h-4 w-4 text-terminal-green" />
                          <span className="text-sm font-semibold text-terminal-green">Program Overview:</span>
                        </div>
                        <p className="text-sm text-primary-dark leading-relaxed">
                          {edu.intro}
                        </p>
                      </div>
                    )}

                    {/* Coursework/Subjects */}
                    {(edu.coursework || edu.subjects) && (
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <CodeBracketIcon className="h-4 w-4 text-electric-blue" />
                          <span className="text-sm font-semibold text-electric-blue">
                            {edu.coursework ? 'Relevant Coursework:' : 'Subjects:'}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {(edu.coursework || edu.subjects)?.map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start space-x-2 text-sm text-primary-dark leading-relaxed"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className="text-terminal-green mt-1">▸</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Activities */}
                    {edu.activities && edu.activities.length > 0 && (
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <TrophyIcon className="h-4 w-4 text-electric-purple" />
                          <span className="text-sm font-semibold text-electric-purple">Activities & Involvement:</span>
                        </div>
                        <ul className="space-y-2">
                          {edu.activities.map((activity, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start space-x-2 text-sm text-primary-dark leading-relaxed"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className="text-electric-purple mt-1">★</span>
                              <span>{activity}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
