import React, { useState, useEffect } from 'react'; // Added useState, useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Added motion, AnimatePresence
import LoadingSpinner from './components/LoadingSpinner'; // Import the new spinner


// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BlogsPage from './components/BlogsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <> {/* Use React Fragment to allow AnimatePresence and motion.div at the root level */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background-light dark:bg-background-dark"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main application content with fade-in animation */}
      {/* We only want to mount the main app content when isLoading is false to prevent premature rendering */}
      {!isLoading && (
        <motion.div
          key="app-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Slight delay after loader potentially exits
          // The existing classes from the original root div are applied here
          className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300"
        >
          <Navbar />
          <main className="bg-background-light dark:bg-background-dark">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <div id="blogs" className="bg-background-light dark:bg-background-dark">
              <BlogsPage />
            </div>
            <div id="contact" className="bg-background-light dark:bg-background-dark">
              <ContactPage />
            </div>
          </main>
          <Footer />
        </motion.div>
      )}
    </>

  );
}

export default App;
