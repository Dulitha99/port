import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin-login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
          className="cyber-card"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-cyber text-terminal-green">
              Admin Dashboard
              </h1>
            <button
              onClick={handleLogout}
              className="btn btn-secondary"
            >
              Logout
            </button>
                  </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-terminal-green mb-4">
                Blog Management
              </h3>
              <p className="text-secondary mb-4">
                Manage blog posts and content.
              </p>
              <button className="btn btn-primary w-full">
                Manage Blogs
                  </button>
                </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-terminal-green mb-4">
                Analytics
            </h3>
              <p className="text-secondary mb-4">
                View site analytics and performance.
              </p>
              <button className="btn btn-primary w-full">
                View Analytics
              </button>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-terminal-green mb-4">
                Settings
                  </h3>
              <p className="text-secondary mb-4">
                Configure site settings.
              </p>
              <button className="btn btn-primary w-full">
                Settings
            </button>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
