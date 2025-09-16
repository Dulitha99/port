import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, AcademicCapIcon, TrophyIcon, CodeBracketIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import FlipCard from './FlipCard';

const About = () => {
  const certifications = [
    {
      id: 'cert1',
      name: 'Jr Penetration Tester Certificate',
      issuer: 'TryHackMe',
      year: '2023',
      description: 'Validates foundational penetration testing skills and methodologies',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Application Security'],
      image: '/JrPenetrationTester.png',
      verificationUrl: 'https://tryhackme.com/certificate/verify/',
      credentialId: 'THM-XXXXXXX'
    },
    {
      id: 'cert2',
      name: 'IBM Cybersecurity Analyst',
      issuer: 'IBM',
      year: '2023',
      description: 'Demonstrates expertise in cybersecurity analysis and threat detection',
      skills: ['Threat Analysis', 'Incident Response', 'Security Monitoring', 'Risk Assessment'],
      image: '/IBMCyberSecurityAnalyst.png',
      verificationUrl: 'https://www.credly.com/badges/',
      credentialId: 'IBM-CYB-XXXX'
    },
    {
      id: 'cert3',
      name: 'Fortinet Network Security Expert Level 1: Certified Associate',
      issuer: 'Fortinet',
      year: '2023',
      description: 'Validates knowledge of Fortinet security technologies and network security',
      skills: ['Network Security', 'Firewall Management', 'Threat Prevention', 'Security Architecture'],
      image: '/NSE_1_Certification_page-0001.jpg',
      verificationUrl: 'https://training.fortinet.com/',
      credentialId: 'NSE1-XXXXXX'
    }
  ];

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
    <section id="about" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="terminal max-w-6xl mx-auto mb-16"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-mono text-terminal-green">dulitha@cybersecurity:~$ whoami</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="terminal-text space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <span className="text-terminal-green">$</span>
              <span className="text-electric-blue">whoami</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              viewport={{ once: true }}
              className="ml-4 text-terminal-green font-mono"
            >
              Cyber Security Analyst | Ethical Hacker | Threat Hunter
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mt-6"
            >
              <span className="text-terminal-green">$</span>
              <span className="text-electric-blue">cat profile.txt</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              viewport={{ once: true }}
              className="ml-4 space-y-2 text-primary-dark font-mono text-sm"
            >
              <div>I am a cybersecurity professional with expertise in:</div>
              <div className="ml-4">
                <div>• <span className="text-terminal-green">SOC operations</span> - 24/7 security monitoring</div>
                <div>• <span className="text-electric-blue">Threat hunting</span> - Proactive threat detection</div>
                <div>• <span className="text-electric-purple">Penetration testing</span> - Vulnerability assessment</div>
                <div>• <span className="text-terminal-green">Endpoint security</span> - Palo Alto Cortex XDR</div>
              </div>
              <div className="mt-4">
                Passionate about safeguarding digital assets through innovative security strategies.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="terminal max-w-6xl mx-auto">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-mono text-terminal-green">dulitha@cybersecurity:~$ ls -la certificates/</span>
              </div>
            </div>
            <div className="terminal-text">
              <div className="text-terminal-green font-mono mb-4">Available Certifications:</div>
              <div className="space-y-2 text-primary-dark font-mono text-sm">
                {certifications.map((cert, index) => (
                  <div key={cert.id} className="flex items-center space-x-4">
                    <span className="text-terminal-green">-rw-r--r--</span>
                    <span className="text-electric-blue">{cert.year}</span>
                    <span className="text-terminal-green">{cert.name}</span>
                    <span className="text-electric-purple">({cert.issuer})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-cyber text-terminal-green text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="cyber-card p-6 text-center h-full flex flex-col justify-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-terminal-green/30 shadow-cyber group-hover:shadow-cyber-lg transition-all duration-300">
                  <img 
                    src={cert.image} 
                    alt={`${cert.name} Certificate`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-cyber text-terminal-green mb-2">{cert.name}</h4>
                <p className="text-electric-blue font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-xs text-secondary-dark mb-3">{cert.year}</p>
                <p className="text-sm text-primary-dark mb-4">{cert.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-electric-blue">Key Skills:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-terminal-green/20 text-terminal-green text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <motion.a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs text-electric-blue hover:text-terminal-green transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Verify Certificate</span>
                    <span>→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cyber text-terminal-green text-center mb-8">Security Focus Areas</h3>
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

export default About; 