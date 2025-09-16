import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/your-username", name: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/your-username", name: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://twitter.com/your-username", name: "Twitter" },
    { icon: <Mail size={24} />, href: "mailto:your-email@example.com", name: "Email" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-4">Contact Terminal</h2>
        <p className="text-center text-muted-foreground mb-12">Open a secure channel for communication.</p>

        <Card className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            {/* Left Side: Info & Socials */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Direct Lines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For inquiries, collaborations, or urgent security matters, use the form or connect via the links below.
                </p>
                <div className="flex items-center gap-4 pt-4">
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
              </CardContent>
            </div>

            {/* Right Side: Form */}
            <div className="p-8">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="font-mono">Name</Label>
                      <Input id="name" name="name" type="text" placeholder="Operator Name" required />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="font-mono">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="operator@domain.com" required />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="subject" className="font-mono">Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Message Subject" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message" className="font-mono">Message</Label>
                    <Textarea id="message" name="message" placeholder="Type your secure message here..." required />
                  </div>
                  <Button type="submit" className="w-full font-mono">
                    <Send className="mr-2 h-4 w-4" /> Transmit Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactPage;
