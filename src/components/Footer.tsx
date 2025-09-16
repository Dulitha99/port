import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/your-username", name: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/your-username", name: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/your-username", name: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:your-email@example.com", name: "Email" },
  ];

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-heading font-bold text-primary">
              CYBER.SEC
            </Link>
            <p className="text-sm text-muted-foreground font-mono mt-1">
              © {currentYear} All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
