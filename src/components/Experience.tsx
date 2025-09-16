import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  CalendarIcon, 
  MapPinIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  EyeIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';

const experiencesData = [
  {
    id: 1,
    role: 'Senior Executive Cyber Security Analyst',
    company: 'EFL Global',
    logo: '/efl_logo.jpg',
    period: 'AUG 06, 2025 – PRESENT',
    location: 'Sri Lanka',
    type: 'Full-time',
    status: 'Current',
    intro: 'As a Cyber Security Analyst within the Global IT Team, I collaborated closely with other Security Analysts to strengthen the organization\'s cybersecurity posture by leveraging advanced security technologies and proactive defense strategies. Key responsibilities included:',
    responsibilities: [
      'Monitoring and triaging security alerts from CrowdStrike XDR, Microsoft Defender, Firewalls, and Azure Security Center, while assisting in incident response.',
      'Analyzing and mitigating email-based threats such as phishing, spam, and malware across enterprise security gateways.',
      'Providing Tier 1 and Tier 2 support for Microsoft 365 services, including managing access, email security, and endpoint protection.',
      'Monitoring security posture using Microsoft Azure dashboards and collaborating on vulnerability mitigation initiatives.',
      'Supporting the deployment of cybersecurity tools and infrastructure projects to enhance defense mechanisms.',
      'Actively contributing to the SOC helpdesk, ensuring timely response, escalation, and resolution of security incidents.',
      'Ensuring alignment with security policies, compliance standards, and industry best practices.',
    ],
    technologies: ['CrowdStrike XDR', 'Microsoft Defender', 'Azure Security Center', 'Microsoft 365', 'SOC Operations'],
    achievements: [
      'Improved incident response time by 40%',
      'Reduced false positive alerts by 60%',
      'Implemented automated threat detection rules'
    ]
  },
  {
    id: 2,
    role: 'EXECUTIVE SECURITY OPERATIONS CENTER ANALYST',
    company: 'MIDAS STRATEGIC IT SRI LANKA',
    logo: '/midas.png', 
    period: 'JAN 17, 2025 – JUL 17, 2025',
    location: 'Sri Lanka',
    type: 'Full-time',
    status: 'Completed',
    intro: 'As a Security Operations Center (SOC) Analyst within the Global IT Team, I contributed to strengthening the organization\'s cybersecurity posture by leveraging advanced security technologies and proactive defense strategies. Key responsibilities included:',
    responsibilities: [
      'Monitored, investigated, and escalated security incidents using Cortex XDR, Prisma Access (Palo Alto Networks), and Microsoft Defender XDR for email security.',
      'Conducted threat hunting exercises to identify and mitigate advanced threats targeting critical digital assets.',
      'Assisted in Vulnerability Assessments and Penetration Testing (VAPT) to uncover and remediate security weaknesses.',
      'Analyzed, monitored, and responded to email-based threats, including phishing attacks utilizing Microsoft Defender XDR.',
      'Developed custom Behavioral Indicators of Compromise (BIOCs) and correlation rules to enhance detection capabilities across platforms.',
      'Delivered security awareness training sessions and ran phishing simulation campaigns to improve employee security awareness and reduce risk.',
      'Maintained up-to-date threat intelligence feeds to proactively defend against emerging cyber threats.',
    ],
    technologies: ['Cortex XDR', 'Prisma Access', 'Microsoft Defender XDR', 'VAPT', 'Threat Hunting', 'BIOCs'],
    achievements: [
      'Developed 15+ custom BIOC rules',
      'Reduced threat detection time by 50%',
      'Conducted 20+ security awareness sessions'
    ]
  },
  {
    id: 3,
    role: 'ASSOCIATE CYBER SECURITY ANALYST',
    company: 'IVEDHA INC TORONTO ONTARIO CANADA',
    logo: '/ivedha.png',
    period: 'SEP 02, 2024 – DEC 31, 2024',
    location: 'Toronto, Ontario, Canada',
    type: 'Full-time',
    status: 'Completed',
    intro: 'As an Associate Cyber Security Analyst, I contributed to enhancing organizational security by working on the following:',
    responsibilities: [
      'Conducted penetration testing and Vulnerability Assessments.',
      'Managed endpoint security with Microsoft Defender XDR.',
      'Administered Entra ID and Microsoft Intune for security and compliance.',
      'Conducted and implemented security awareness training and phishing campaigns using KnowBe4 Platform.',
    ],
    technologies: ['Microsoft Defender XDR', 'Entra ID', 'Microsoft Intune', 'KnowBe4', 'Penetration Testing', 'VAPT'],
    achievements: [
      'Completed 50+ penetration tests',
      'Improved security awareness by 80%',
      'Managed 500+ endpoints'
    ]
  },
  {
    id: 4,
    role: 'INTERN CYBER SECURITY',
    company: 'IVEDHA INC, TORONTO ONTARIO CANADA',
    logo: '/ivedha.png',
    period: 'FEB 19, 2024 – SEP 02, 2024',
    location: 'Toronto, Ontario, Canada',
    type: 'Internship',
    status: 'Completed',
    intro: 'As a Cyber Security Intern, I gained hands-on experience in various aspects of cybersecurity, including:',
    responsibilities: [
      'Assisted in web application vulnerability assessments.',
      'Conducted security training and phishing simulations.',
      'Supported security solution development.',
      'Supported in Policy development.',
    ],
    technologies: ['Web Application Security', 'Vulnerability Assessment', 'Security Training', 'Policy Development'],
    achievements: [
      'Completed 20+ vulnerability assessments',
      'Conducted 15+ security training sessions',
      'Developed 5+ security policies'
    ]
  },
];

const Experience = () => {
  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case 'Current': return 'text-terminal-green bg-terminal-green/20';
      case 'Completed': return 'text-electric-blue bg-electric-blue/20';
      default: return 'text-electric-purple bg-electric-purple/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background-dark relative overflow-hidden">
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
            <BriefcaseIcon className="h-12 w-12 text-terminal-green mr-4" />
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            My cybersecurity journey across different organizations, showcasing expertise in SOC operations, 
            threat hunting, and security analysis.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-terminal-green via-electric-blue to-electric-purple rounded-full"></div>

          {experiencesData.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
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
                    src={exp.logo} 
                    alt={`${exp.company} Logo`} 
                    className="h-8 w-8 object-contain rounded-sm"
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div 
                  className="ml-20 cyber-card p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-cyber text-terminal-green mb-2 group-hover:text-electric-blue transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary-dark mb-2">
                        {exp.company}
                      </p>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-dark mb-4">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4 text-terminal-green" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPinIcon className="h-4 w-4 text-electric-blue" />
                          <span>{exp.location}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(exp.status)}`}>
                          {exp.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <CodeBracketIcon className="h-4 w-4 text-electric-blue" />
                      <span className="text-sm font-semibold text-electric-blue">Technologies Used:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-terminal-green/10 text-terminal-green text-xs rounded-full border border-terminal-green/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Introduction */}
                    {exp.intro && (
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <ShieldCheckIcon className="h-4 w-4 text-terminal-green" />
                          <span className="text-sm font-semibold text-terminal-green">Role Overview:</span>
                        </div>
                        <p className="text-sm text-primary-dark leading-relaxed">
                          {exp.intro}
                        </p>
                      </div>
                    )}

                    {/* Key Responsibilities */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <EyeIcon className="h-4 w-4 text-electric-blue" />
                        <span className="text-sm font-semibold text-electric-blue">Key Responsibilities:</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start space-x-2 text-sm text-primary-dark leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-terminal-green mt-1">▸</span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <BugAntIcon className="h-4 w-4 text-electric-purple" />
                          <span className="text-sm font-semibold text-electric-purple">Key Achievements:</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start space-x-2 text-sm text-primary-dark leading-relaxed"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className="text-electric-purple mt-1">★</span>
                              <span>{achievement}</span>
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

export default Experience;