import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CodeBracketIcon, 
  CpuChipIcon, 
  CommandLineIcon,
  LockClosedIcon,
  EyeIcon,
  BugAntIcon,
  ServerIcon,
  GlobeAltIcon,
  KeyIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

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

const cyberSecurityTools = [
  {
    id: 'tool1',
    name: 'Wireshark',
    category: 'Network Analysis',
    icon: <GlobeAltIcon className="h-8 w-8" />,
    description: 'Network protocol analyzer for deep packet inspection',
    color: 'text-terminal-green',
    bgColor: 'bg-terminal-green/10',
    borderColor: 'border-terminal-green/30',
    proficiency: 85
  },
  {
    id: 'tool2',
    name: 'Splunk',
    category: 'SIEM',
    icon: <ServerIcon className="h-8 w-8" />,
    description: 'Security Information and Event Management platform',
    color: 'text-electric-blue',
    bgColor: 'bg-electric-blue/10',
    borderColor: 'border-electric-blue/30',
    proficiency: 90
  },
  {
    id: 'tool3',
    name: 'Burp Suite',
    category: 'Web Security',
    icon: <BugAntIcon className="h-8 w-8" />,
    description: 'Web application security testing platform',
    color: 'text-terminal-red',
    bgColor: 'bg-terminal-red/10',
    borderColor: 'border-terminal-red/30',
    proficiency: 88
  },
  {
    id: 'tool4',
    name: 'Kali Linux',
    category: 'Penetration Testing',
    icon: <CommandLineIcon className="h-8 w-8" />,
    description: 'Advanced penetration testing distribution',
    color: 'text-electric-purple',
    bgColor: 'bg-electric-purple/10',
    borderColor: 'border-electric-purple/30',
    proficiency: 92
  },
  {
    id: 'tool5',
    name: 'Python',
    category: 'Scripting',
    icon: <CodeBracketIcon className="h-8 w-8" />,
    description: 'Automation and security tool development',
    color: 'text-terminal-yellow',
    bgColor: 'bg-terminal-yellow/10',
    borderColor: 'border-terminal-yellow/30',
    proficiency: 80
  },
  {
    id: 'tool6',
    name: 'Cortex XDR',
    category: 'Security Monitoring',
    icon: <EyeIcon className="h-8 w-8" />,
    description: 'Extended Detection and Response platform',
    color: 'text-terminal-green',
    bgColor: 'bg-terminal-green/10',
    borderColor: 'border-terminal-green/30',
    proficiency: 95
  },
  {
    id: 'tool7',
    name: 'Firewalls',
    category: 'Network Security',
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    description: 'Network perimeter protection and filtering',
    color: 'text-electric-blue',
    bgColor: 'bg-electric-blue/10',
    borderColor: 'border-electric-blue/30',
    proficiency: 87
  },
  {
    id: 'tool8',
    name: 'Nmap',
    category: 'Network Discovery',
    icon: <CpuChipIcon className="h-8 w-8" />,
    description: 'Network mapper and port scanner',
    color: 'text-terminal-green',
    bgColor: 'bg-terminal-green/10',
    borderColor: 'border-terminal-green/30',
    proficiency: 90
  },
  {
    id: 'tool9',
    name: 'Metasploit',
    category: 'Exploitation',
    icon: <FireIcon className="h-8 w-8" />,
    description: 'Penetration testing framework',
    color: 'text-terminal-red',
    bgColor: 'bg-terminal-red/10',
    borderColor: 'border-terminal-red/30',
    proficiency: 85
  },
  {
    id: 'tool10',
    name: 'OWASP ZAP',
    category: 'Web Security',
    icon: <LockClosedIcon className="h-8 w-8" />,
    description: 'Web application security scanner',
    color: 'text-electric-purple',
    bgColor: 'bg-electric-purple/10',
    borderColor: 'border-electric-purple/30',
    proficiency: 82
  },
  {
    id: 'tool11',
    name: 'PowerShell',
    category: 'Automation',
    icon: <KeyIcon className="h-8 w-8" />,
    description: 'Windows automation and scripting',
    color: 'text-electric-blue',
    bgColor: 'bg-electric-blue/10',
    borderColor: 'border-electric-blue/30',
    proficiency: 78
  },
  {
    id: 'tool12',
    name: 'Nessus',
    category: 'Vulnerability Assessment',
    icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
    description: 'Vulnerability scanner and assessment tool',
    color: 'text-terminal-yellow',
    bgColor: 'bg-terminal-yellow/10',
    borderColor: 'border-terminal-yellow/30',
    proficiency: 88
  },
  {
    id: 'tool13',
    name: 'CrowdStrike XDR',
    category: 'Security Monitoring',
    icon: <EyeIcon className="h-8 w-8" />,
    description: 'Extended Detection and Response platform',
    color: 'text-terminal-green',
    bgColor: 'bg-terminal-green/10',
    borderColor: 'border-terminal-green/30',
    proficiency: 93
  },
  {
    id: 'tool14',
    name: 'Microsoft Defender',
    category: 'Security Monitoring',
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    description: 'Microsoft endpoint security and threat protection',
    color: 'text-electric-blue',
    bgColor: 'bg-electric-blue/10',
    borderColor: 'border-electric-blue/30',
    proficiency: 90
  },
  {
    id: 'tool15',
    name: 'Entra ID',
    category: 'Identity Management',
    icon: <KeyIcon className="h-8 w-8" />,
    description: 'Microsoft identity and access management',
    color: 'text-electric-blue',
    bgColor: 'bg-electric-blue/10',
    borderColor: 'border-electric-blue/30',
    proficiency: 85
  },
  {
    id: 'tool16',
    name: 'Mimecast',
    category: 'Email Security',
    icon: <EnvelopeIcon className="h-8 w-8" />,
    description: 'Email security and threat protection platform',
    color: 'text-terminal-red',
    bgColor: 'bg-terminal-red/10',
    borderColor: 'border-terminal-red/30',
    proficiency: 87
  },
  {
    id: 'tool17',
    name: 'GitHub',
    category: 'Development',
    icon: <CodeBracketIcon className="h-8 w-8" />,
    description: 'Version control and collaborative development platform',
    color: 'text-terminal-yellow',
    bgColor: 'bg-terminal-yellow/10',
    borderColor: 'border-terminal-yellow/30',
    proficiency: 82
  },
  {
    id: 'tool18',
    name: 'Prisma Access',
    category: 'Network Security',
    icon: <GlobeAltIcon className="h-8 w-8" />,
    description: 'Cloud-delivered security service edge',
    color: 'text-electric-purple',
    bgColor: 'bg-electric-purple/10',
    borderColor: 'border-electric-purple/30',
    proficiency: 89
  }
];

const nonTechnicalSkillsData = [ // Added ids
  { id: 'nts1', name: 'Strong Communication & Leadership' },
  { id: 'nts2', name: 'Critical Thinking & Problem Solving' },
  { id: 'nts3', name: 'Team Collaboration & Decision Making' },
  { id: 'nts4', name: 'Stress Management' }
];

const Skills = () => {

  // Group tools by category
  const groupedTools = cyberSecurityTools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof cyberSecurityTools>);

  const categoryColors = {
    'Network Analysis': 'text-terminal-green',
    'SIEM': 'text-electric-blue',
    'Web Security': 'text-terminal-red',
    'Penetration Testing': 'text-electric-purple',
    'Scripting': 'text-terminal-yellow',
    'Security Monitoring': 'text-terminal-green',
    'Network Security': 'text-electric-blue',
    'Network Discovery': 'text-terminal-green',
    'Exploitation': 'text-terminal-red',
    'Automation': 'text-electric-blue',
    'Vulnerability Assessment': 'text-terminal-yellow',
    'Identity Management': 'text-electric-blue',
    'Email Security': 'text-terminal-red',
    'Development': 'text-terminal-yellow'
  };

  return (
    <section id="skills" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={sectionIntroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-terminal-green mr-4" />
            <h2 className="section-title">Cybersecurity Arsenal</h2>
          </div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            A comprehensive collection of security tools and technologies I use to protect digital assets and identify vulnerabilities.
          </p>
        </motion.div>

        {/* Cybersecurity Tools - All Categories Combined */}
        <div className="max-w-7xl mx-auto">
          {/* Category Headers */}
          <div className="mb-8">
            {Object.entries(groupedTools).map(([category, tools], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="inline-block mr-8 mb-4"
              >
                <h3 className={`text-lg font-cyber ${categoryColors[category as keyof typeof categoryColors]} mb-1`}>
                  {category}
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-terminal-green via-electric-blue to-electric-purple w-24"></div>
              </motion.div>
            ))}
          </div>

          {/* All Tools in One Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {cyberSecurityTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className={`cyber-card p-4 text-center cursor-pointer group relative overflow-hidden h-full flex flex-col ${tool.bgColor} ${tool.borderColor} border-2`}
              >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 ${tool.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  background: `radial-gradient(circle at center, ${tool.color.replace('text-', '')} 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow">
                  <motion.div
                    className={`${tool.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="h-6 w-6 mx-auto">
                      {tool.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-sm font-cyber text-primary-dark mb-1 group-hover:text-terminal-green transition-colors duration-300">
                    {tool.name}
                  </h3>
                  
                  <p className="text-xs text-electric-blue font-semibold mb-2">
                    {tool.category}
                  </p>
                  
                  {/* Skill Level Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-terminal-green font-mono mb-1">
                      <span>SKILL</span>
                      <span>{tool.proficiency}%</span>
                    </div>
                    <div className="w-full bg-background-dark/50 rounded-full h-1.5 border border-terminal-green/30">
                      <motion.div
                        className="h-full bg-gradient-to-r from-terminal-green to-electric-blue rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
            ))}
          </div>
        </div>

        {/* Spacing between sections */}
        <div className="mb-16"></div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-cyber text-terminal-green mb-2">Professional Strengths</h3>
            <p className="text-sm text-primary-dark">
              Core competencies that drive my success in cybersecurity roles
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {nonTechnicalSkillsData.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="cyber-card p-4 text-center group relative overflow-hidden h-full flex flex-col bg-terminal-green/10 border-terminal-green/20 border-2"
              >
                <div className="flex-grow flex flex-col justify-center">
                  <div className="text-terminal-green mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    <ShieldCheckIcon className="h-5 w-5 mx-auto" />
                  </div>
                  <p className="text-xs font-medium text-primary-dark group-hover:text-terminal-green transition-colors duration-300 leading-tight">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 