import { TypeAnimation } from 'react-type-animation';
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-background"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '2rem 2rem',
          }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4">
          <span className="text-primary">SYSTEM:</span> SECURE
        </h1>

        <TypeAnimation
          sequence={[
            '// Defending the digital frontier...',
            2000,
            '// Analyzing threats in real-time.',
            2000,
            '// Engineering resilient security architectures.',
            2000,
            '// Hunting for vulnerabilities, so you don\'t have to.',
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-8"
        />

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#blogs">
              Read Blog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
