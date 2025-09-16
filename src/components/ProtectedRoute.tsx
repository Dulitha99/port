import { useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Declare netlifyIdentity at the top level
declare const netlifyIdentity: any;

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [user, setUser] = useState(netlifyIdentity.currentUser());
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = (loggedInUser: any) => {
      setUser(loggedInUser);
      // If login happens and they are still on a non-admin page,
      // you might want to navigate them to the dashboard.
      // Or simply let them continue where they were.
      // For now, just updating state is fine.
    };

    // Listen for login events
    netlifyIdentity.on('login', handleAuth);
    // Listen for logout events
    netlifyIdentity.on('logout', () => {
      setUser(null);
      navigate('/'); // Redirect to home on logout
    });

    if (!user) {
      // If no user, open the login modal
      netlifyIdentity.open();
    }

    // Cleanup listeners
    return () => {
      netlifyIdentity.off('login', handleAuth);
      netlifyIdentity.off('logout', () => {});
    };
  }, [user, navigate]);

  // Render children only if the user is authenticated
  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
