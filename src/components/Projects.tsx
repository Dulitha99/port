import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { SkeletonCard } from '~/components/ui/skeleton-card'; // Import skeleton

const projectsData = [
  {
    id: 'proj1',
    title: 'Malware Sandbox Analysis',
    description: 'A custom sandbox environment to safely execute and analyze malware behavior, tracking file system changes, network activity, and registry modifications.',
    category: 'Malware Analysis',
    technologies: ['Python', 'Cuckoo Sandbox', 'Volatility'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj2',
    title: 'Threat Intel Feed Aggregator',
    description: 'Developed a system to aggregate and de-duplicate threat intelligence feeds from various sources, providing a unified view of active threats.',
    category: 'Threat Hunting',
    technologies: ['Python', 'Elasticsearch', 'MISP'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Web App Pen-Testing Suite',
    description: 'A series of penetration tests conducted on a vulnerable web application, identifying and documenting critical security flaws like XSS, SQLi, and CSRF.',
    category: 'Pentesting',
    technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj4',
    title: 'Ransomware Behavior Analysis',
    description: 'Reverse-engineered a sample ransomware to understand its encryption methods and communication with C2 servers.',
    category: 'Malware Analysis',
    technologies: ['IDA Pro', 'Ghidra', 'x64dbg'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const filterCategories = ['All', 'Malware Analysis', 'Threat Hunting', 'Pentesting'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate 1 second load time
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-4">Case Files</h2>
        <p className="text-center text-muted-foreground mb-8">A selection of my operational highlights.</p>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'secondary'}
              onClick={() => setActiveFilter(category)}
              className="font-mono"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={`skel-${i}`} />)
            ) : (
              filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card/60 backdrop-blur-sm h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary">{project.title}</CardTitle>
                      <p className="text-sm font-mono text-muted-foreground">{project.category}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
