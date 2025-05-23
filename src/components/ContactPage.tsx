import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Assuming Heroicons are available

const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="container mx-auto px-4 py-16"> {/* Adjusted py for more top/bottom space */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-primary-light dark:text-primary-dark">
          Get In Touch
        </h1>
        <p className="text-lg text-center text-secondary-light dark:text-secondary-dark mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-accent-light dark:text-accent-dark mb-6">
            Contact Information
          </h2>
          
          <div className="flex items-start space-x-4">
            <EnvelopeIcon className="h-7 w-7 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark">Email</h3>
              <a href="mailto:dulithawickramasinghe@gmail.com" className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                dulithawickramasinghe@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <PhoneIcon className="h-7 w-7 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark">Phone</h3>
              <a href="tel:+94753766162" className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                +94 75 376 6162
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPinIcon className="h-7 w-7 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark">Address</h3>
              <p className="text-secondary-light dark:text-secondary-dark">
                Colombo, Sri Lanka (Remote Open to Worldwide)
              </p>
            </div>
          </div>
          
          {/* Optional: Embedded Map Placeholder */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
             <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark mb-2">My Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-md">
              {/* Replace with actual map embed iframe if needed */}
              <p className="flex items-center justify-center h-full text-secondary-light dark:text-secondary-dark">
                Map Placeholder
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-accent-light dark:text-accent-dark mb-6">
            Send Me a Message
          </h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark sm:text-sm bg-white dark:bg-gray-700 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark sm:text-sm bg-white dark:bg-gray-700 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark sm:text-sm bg-white dark:bg-gray-700 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="Regarding your project..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark sm:text-sm bg-white dark:bg-gray-700 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full btn btn-primary py-3 px-6 text-base" // Using .btn & .btn-primary from index.css
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
