import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '~/components/theme-provider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import Hero from '~/components/Hero';
import Experience from '~/components/Experience';
import Education from '~/components/Education';
import Skills from '~/components/Skills';
import Projects from '~/components/Projects';
import BlogsPage from '~/components/BlogsPage';
import ContactPage from '~/components/ContactPage';
import About from '~/components/About';
import BlogPostPage from '~/components/BlogPostPage';
import AdminDashboard from '~/components/AdminDashboard';
import ProtectedRoute from '~/components/ProtectedRoute';
import NotFound from '~/components/NotFound';

// Declare netlifyIdentity
declare const netlifyIdentity: any;

// Main Layout Component
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Cyber Security Analyst Portfolio | Home</title>
        <meta name="description" content="The personal portfolio of a passionate Cyber Security Analyst, showcasing skills, projects, and experience in the field of digital defense." />
      </Helmet>
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
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Layout><AdminDashboard /></Layout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      netlifyIdentity.init();
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
