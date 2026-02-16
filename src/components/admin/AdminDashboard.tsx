import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  CogIcon,
  ArrowRightOnRectangleIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  ShieldCheckIcon,
  ServerIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [isLoading, setIsLoading] = useState(true);
  const [systemStatus, setSystemStatus] = useState({
    server: 'online',
    database: 'online',
    security: 'secure',
    performance: 'optimal'
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin-login');
      return;
    }

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin-login');
  };

  const tabs = [
    { id: 'analytics', name: 'ANALYTICS', icon: ChartBarIcon },
    { id: 'content', name: 'CONTENT_MGMT', icon: DocumentTextIcon },
    { id: 'users', name: 'USER_ADMIN', icon: UserGroupIcon },
    { id: 'security', name: 'SECURITY', icon: ShieldCheckIcon },
    { id: 'settings', name: 'SYSTEM_CFG', icon: CogIcon }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
      case 'secure':
      case 'optimal':
        return <CheckCircleIcon className="h-5 w-5 text-terminal-green" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-terminal-yellow" />;
      case 'offline':
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-terminal-red" />;
      default:
        return <ClockIcon className="h-5 w-5 text-electric-blue" />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-terminal-green border-t-transparent rounded-full mx-auto mb-6"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-cyber font-bold text-terminal-green">INITIALIZING_SYSTEM</h2>
              <p className="text-primary-dark font-mono">Loading admin dashboard...</p>
              <div className="flex items-center justify-center space-x-1 mt-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-terminal-green rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
