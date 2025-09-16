import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { ShieldCheck, Target, Code } from 'lucide-react';
import { useState } from 'react';

// Reusable FlipCard component
const FlipCard = ({ cert }: { cert: { name: string; issuer: string; details: string; icon: React.ReactNode } }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full h-48" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="w-full h-full flex flex-col items-center justify-center text-center p-4">
            <div className="text-primary mb-2">{cert.icon}</div>
            <h3 className="font-heading text-lg">{cert.name}</h3>
            <p className="text-muted-foreground text-sm">{cert.issuer}</p>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden transform-rotate-y-180">
          <Card className="w-full h-full flex flex-col items-center justify-center p-4">
            <p className="text-sm text-center">{cert.details}</p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const focusAreas = [
    { icon: <ShieldCheck className="h-8 w-8 text-secondary" />, title: "Threat Intelligence", description: "Analyzing and mitigating advanced persistent threats." },
    { icon: <Target className="h-8 w-8 text-secondary" />, title: "Penetration Testing", description: "Identifying and exploiting vulnerabilities in systems." },
    { icon: <Code className="h-8 w-8 text-secondary" />, title: "Secure Development", description: "Integrating security into the software development lifecycle." },
  ];

  const certifications = [
    { name: "Certified Ethical Hacker", issuer: "EC-Council", details: "Demonstrates knowledge of assessing the security of computer systems.", icon: <ShieldCheck size={40} /> },
    { name: "CompTIA Security+", issuer: "CompTIA", details: "A global certification that validates the baseline skills necessary to perform core security functions.", icon: <Target size={40} /> },
    { name: "OSCP", issuer: "Offensive Security", details: "Offensive Security Certified Professional is a hands-on penetration testing certification.", icon: <Code size={40} /> },
  ];

  return (
    <section id="about" className="py-20">
      <style>
        {`
          .perspective-1000 { perspective: 1000px; }
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .transform-rotate-y-180 { transform: rotateY(180deg); }
        `}
      </style>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-12">About Me</h2>

        {/* Professional Bio */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A passionate and results-driven Cyber Security Analyst with a knack for defending digital ecosystems. My expertise lies in threat detection, vulnerability management, and security architecture. I thrive on the challenge of staying one step ahead of malicious actors and building resilient, secure environments.
          </p>
        </div>

        {/* Security Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {focusAreas.map((area) => (
            <Card key={area.title} className="text-center p-6 bg-card/50">
              <div className="flex justify-center mb-4">{area.icon}</div>
              <CardTitle className="font-heading text-xl mb-2">{area.title}</CardTitle>
              <CardContent className="text-muted-foreground">{area.description}</CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading">Certifications</h3>
          <p className="text-muted-foreground">(Click cards to flip)</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <FlipCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
