import React from 'react'; // Removed useState, useEffect
// Removed motion, AnimatePresence, SunIcon, MoonIcon as they were for the toggle button

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
  // Dark mode state and useEffect for class toggling have been moved to Navbar.tsx

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Dark Mode Toggle Button has been moved to Navbar.tsx */}

      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
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
      <Footer />
    </div>
  );
}

export default App;
