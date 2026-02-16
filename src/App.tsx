import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import TerminalLoader from './components/ui/TerminalLoader';
import ErrorBoundary from './components/layout/ErrorBoundary';
import SEO from './components/layout/SEO';
import AdminLogin from './components/admin/AdminLogin';
import ProtectedAdminRoute from './components/layout/ProtectedAdminRoute';

// Components
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SecurityFocusAreas from './components/sections/SecurityFocusAreas';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import BlogsPage from './components/sections/BlogsPage';
import ContactPage from './components/sections/ContactPage';
import Footer from './components/layout/Footer';
import NotFound from './components/ui/NotFound';
import AdminDashboard from './components/admin/AdminDashboard';
import MatrixBackground from './components/ui/MatrixBackground';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import CustomCursor from './components/ui/CustomCursor';
import FloatingContact from './components/ui/FloatingContact';

// Matrix background component removed - imported instead

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
              <ScrollProgressBar />
              <CustomCursor />
              <FloatingContact />

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
                        <SecurityFocusAreas />
                        <Experience />
                        <Education />
                        <Certifications />
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
