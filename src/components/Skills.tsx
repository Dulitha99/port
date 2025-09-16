import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Shield, Network, Terminal, Lock, Server, Code, Bot } from 'lucide-react';

const skillsData = [
  { name: 'Wireshark', icon: <Network size={40} /> },
  { name: 'Splunk', icon: <Server size={40} /> },
  { name: 'Burp Suite', icon: <Shield size={40} /> },
  { name: 'Kali Linux', icon: <Terminal size={40} /> },
  { name: 'Python', icon: <Code size={40} /> },
  { name: 'SIEM Tools', icon: <Bot size={40} /> },
  { name: 'Firewalls', icon: <Lock size={40} /> },
  { name: 'Threat Hunting', icon: <Network size={40} /> },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-12">My Arsenal</h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skillsData.map((skill) => (
            <motion.div key={skill.name} variants={cardVariants}>
              <Card
                className="bg-card/50 text-center p-6 h-full transition-all duration-300
                           border-border/50 hover:border-primary hover:shadow-lg
                           hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="flex justify-center text-primary mb-4">
                  {skill.icon}
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">{skill.name}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
