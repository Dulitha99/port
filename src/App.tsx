import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import TerminalLoader from './components/TerminalLoader';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import AdminLogin from './components/AdminLogin';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BlogsPage from './components/BlogsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import AdminDashboard from './components/AdminDashboard';

// Matrix background component
const MatrixBackground: React.FC = () => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixArray = Array.from({ length: 50 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(matrixArray);
  }, []);

  return (
    <div className="matrix-bg">
      {matrixChars.map((char, index) => (
        <motion.div
          key={index}
          className="absolute text-terminal-green/20 font-mono text-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Increased loading time for better effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-background transition-colors duration-300">
              <SEO />
              
              {/* Matrix Background */}
              <MatrixBackground />
              
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    key="loader"
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  >
                    <TerminalLoader />
                  </motion.div>
                )}
              </AnimatePresence>

              {!isLoading && (
                <motion.div
                  key="app-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative z-10"
                >
                  <Navbar />
                  
                  <Routes>
                    <Route path="/" element={
                      <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Education />
                        <Skills />
                        <Projects />
                        <div id="blogs">
                          <BlogsPage />
                        </div>
                        <div id="contact">
                          <ContactPage />
                        </div>
                      </main>
                    } />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/admin" element={
                      <ProtectedAdminRoute>
                        <AdminDashboard />
                      </ProtectedAdminRoute>
                    } />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  
                  <Footer />
                </motion.div>
              )}
            </div>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
// Re-trigger Netlify build - Timestamp: 2023-12-01T12:34:56Z
