import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

const experiencesData = [
  {
    id: 1,
    role: 'Senior Executive Cyber Security Analyst',
    company: 'EFL Global',
    period: 'AUG 2025 – PRESENT',
    responsibilities: [
      'Monitored and triaged security alerts from CrowdStrike XDR and Microsoft Defender.',
      'Analyzed and mitigated email-based threats such as phishing and malware.',
      'Provided Tier 1/2 support for Microsoft 365 services and endpoint protection.',
      'Contributed to the SOC helpdesk, ensuring timely incident response and resolution.',
    ],
  },
  {
    id: 2,
    role: 'Security Operations Center Analyst',
    company: 'MIDAS STRATEGIC IT',
    period: 'JAN 2025 – JUL 2025',
    responsibilities: [
      'Monitored and analyzed security incidents using Palo Alto Cortex XDR.',
      'Conducted threat hunting and forensic analysis.',
      'Managed identity protection and access security via Entra ID.',
      'Oversaw email security operations using Microsoft Defender for Office 365.',
    ],
  },
  {
    id: 3,
    role: 'Associate Cyber Security Analyst',
    company: 'IVEDHA INC',
    period: 'SEP 2024 – DEC 2024',
    responsibilities: [
      'Conducted penetration testing and vulnerability assessments.',
      'Managed endpoint security with Microsoft Defender XDR.',
      'Administered Entra ID and Microsoft Intune for security and compliance.',
      'Conducted security awareness training and phishing campaigns using KnowBe4.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-12">Career Trajectory</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />

          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-12 mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 top-1 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

              <Card className="bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-primary">{exp.role}</CardTitle>
                  <div className="flex justify-between items-baseline">
                    <p className="text-md font-sans text-muted-foreground">{exp.company}</p>
                    <p className="text-sm font-mono text-secondary">{exp.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 font-mono text-sm">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
