import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

const educationData = [
  {
    id: 1,
    degree: 'BSc (Hons) in Information Technology',
    specialization: 'Specializing in Cyber Security',
    institution: 'SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY (SLIIT)',
    period: '2021 – 2025',
  },
  {
    id: 2,
    degree: 'GCE Advanced Level Examination',
    specialization: 'Combined Mathematics Stream',
    institution: 'KINGSWOOD COLLEGE, KANDY',
    period: '2017 – 2020',
  },
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

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-12">Education</h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {educationData.map((edu) => (
            <motion.div key={edu.id} variants={cardVariants}>
              <Card className="bg-card/60 backdrop-blur-sm h-full flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <GraduationCap className="w-10 h-10 text-primary" />
                  <div>
                    <CardTitle className="text-xl font-heading">{edu.degree}</CardTitle>
                    <p className="text-sm font-mono text-muted-foreground">{edu.institution}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-md text-secondary mb-2">{edu.specialization}</p>
                  <p className="text-sm font-mono text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
