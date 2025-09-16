import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple authentication check
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="cyber-card max-w-md w-full mx-4"
      >
        <h1 className="text-3xl font-cyber text-terminal-green text-center mb-8">
          Admin Login
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-primary mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-terminal-green/30 rounded-lg text-primary focus:border-terminal-green focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-primary mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-terminal-green/30 rounded-lg text-primary focus:border-terminal-green focus:outline-none"
              required
            />
          </div>
          
          {error && (
            <div className="text-terminal-red text-center">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn btn-primary py-3"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-electric-blue hover:text-terminal-green transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
