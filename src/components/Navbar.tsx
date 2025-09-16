import { useState, useEffect } from 'react';
import { ModeToggle } from '~/components/theme-toggle';
import { Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';

// Declare netlifyIdentity at the top level
declare const netlifyIdentity: any;

const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Set initial user state
    setUser(netlifyIdentity.currentUser());

    const handleAuthChange = (loggedInUser: any) => {
      setUser(loggedInUser);
    };

    // Listen for login/logout events
    netlifyIdentity.on('login', handleAuthChange);
    netlifyIdentity.on('logout', () => setUser(null));

    // Cleanup listeners
    return () => {
      netlifyIdentity.off('login', handleAuthChange);
      netlifyIdentity.off('logout', () => {});
    };
  }, []);

  const handleLogin = () => {
    netlifyIdentity.open();
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-heading font-bold text-primary">
            CYBER.SEC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-sm hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            {user ? (
              <Button asChild variant="outline" size="sm">
                <Link to="/admin/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button onClick={handleLogin} variant="outline" size="sm">
                Admin Login
              </Button>
            )}
            <ModeToggle />
          </div>

          {/* Mobile Navigation (to be implemented later) */}
          <div className="md:hidden flex items-center gap-2">
             <ModeToggle />
             {/* Mobile menu button will be added later */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
