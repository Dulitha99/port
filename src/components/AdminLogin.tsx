import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [accessAttempts, setAccessAttempts] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple authentication check
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      localStorage.setItem('adminLoginTime', Date.now().toString());
      navigate('/admin');
    } else {
      setAccessAttempts(prev => prev + 1);
      setError(`ACCESS DENIED - Invalid credentials (Attempt ${accessAttempts + 1}/3)`);
      
      if (accessAttempts >= 2) {
        setError('SYSTEM LOCKED - Too many failed attempts. Please try again later.');
        setTimeout(() => {
          setAccessAttempts(0);
          setError('');
        }, 30000); // 30 second lockout
      }
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Matrix-style falling code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-green/5 font-mono text-xs"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 3) % 100}%`,
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 15 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear"
            }}
          >
            {i % 2 === 0 ? '01' : '10'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="cyber-card max-w-md w-full p-8 relative"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <ShieldCheckIcon className="h-8 w-8 text-terminal-green" />
              <div>
                <h1 className="text-2xl font-cyber font-bold text-terminal-green">
                  ADMIN_ACCESS
                </h1>
                <p className="text-sm text-electric-blue font-mono">
                  [SECURE_LOGIN_PROTOCOL]
                </p>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="mb-6 p-3 bg-terminal-green/10 border border-terminal-green/30 rounded-lg">
            <div className="flex items-center space-x-2 text-sm font-mono">
              <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
              <span className="text-terminal-green">SECURE_CONNECTION_ESTABLISHED</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-mono font-medium text-terminal-green mb-2">
                USER_ID:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full px-4 py-3 bg-background-dark border border-terminal-green/30 rounded-lg text-primary-dark font-mono focus:border-terminal-green focus:outline-none focus:ring-2 focus:ring-terminal-green/20 transition-all duration-300"
                  placeholder="[ENTER_USERNAME]"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-terminal-green font-mono text-sm">$</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-mono font-medium text-terminal-green mb-2">
                ACCESS_KEY:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 bg-background-dark border border-terminal-green/30 rounded-lg text-primary-dark font-mono focus:border-terminal-green focus:outline-none focus:ring-2 focus:ring-terminal-green/20 transition-all duration-300"
                  placeholder="[ENTER_PASSWORD]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-terminal-green hover:text-electric-blue transition-colors"
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-3 bg-terminal-red/10 border border-terminal-red/30 rounded-lg"
              >
                <div className="flex items-center space-x-2 text-sm font-mono">
                  <div className="w-2 h-2 bg-terminal-red rounded-full"></div>
                  <span className="text-terminal-red">{error}</span>
                </div>
              </motion.div>
            )}
            
            <motion.button
              type="submit"
              disabled={isLoading || accessAttempts >= 3}
              className="w-full bg-terminal-green/20 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background-dark font-mono font-semibold py-3 px-6 text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-terminal-green border-t-transparent rounded-full"
                  />
                  <span>INITIALIZING_ACCESS...</span>
                </>
              ) : (
                <>
                  <LockClosedIcon className="h-5 w-5" />
                  <span>[ AUTHENTICATE ]</span>
                </>
              )}
            </motion.button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-terminal-green/20">
            <div className="text-center space-y-2">
              <button
                onClick={() => navigate('/')}
                className="text-electric-blue hover:text-terminal-green transition-colors font-mono text-sm flex items-center justify-center space-x-2 mx-auto"
              >
                <span>←</span>
                <span>RETURN_TO_PORTFOLIO</span>
              </button>
              
              <div className="text-xs text-secondary-dark font-mono">
                [SECURITY_PROTOCOL_ACTIVE]
              </div>
            </div>
          </div>

          {/* Glitch Effect Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-terminal-red/5 via-electric-blue/5 to-electric-purple/5 opacity-0 pointer-events-none"
            animate={{
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
