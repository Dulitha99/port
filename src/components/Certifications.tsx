import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
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

  return (
    <section id="certifications" className="py-20 bg-background-dark relative overflow-hidden">
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
          <h2 className="section-title">Certifications</h2>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cybersecurity and demonstrate my commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
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
      </div>
    </section>
  );
};

export default Certifications;
