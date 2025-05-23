import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    setFormStatus('idle'); // Reset status on change
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    // Basic validation on blur for specific fields if needed, or rely on submit
    if (name === "name" && !formData.name.trim()) {
        setErrors(prev => ({ ...prev, name: 'Full name is required.' }));
    } else if (name === "email") {
        if(!formData.email.trim()) setErrors(prev => ({ ...prev, email: 'Email is required.' }));
        else if (!/\S+@\S+\.\S+/.test(formData.email)) setErrors(prev => ({ ...prev, email: 'Email address is invalid.' }));
    } else if (name === "message" && !formData.message.trim()) {
        setErrors(prev => ({ ...prev, message: 'Message is required.' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }
    setFormStatus('submitting');
    // Simulate API call
    console.log('Form data submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    // setErrors({}); // Clear errors
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center mb-4">
            <ChatBubbleLeftEllipsisIcon className="h-10 w-10 text-accent-light dark:text-accent-dark mr-3" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-light dark:text-primary-dark">
              Contact Me
            </h1>
        </div>
        <p className="text-lg text-secondary-light dark:text-secondary-dark mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 bg-card-light dark:bg-card-dark p-6 sm:p-8 rounded-xl shadow-xl" // Using card styles
        >
          {/* Redundant "Contact Information" h2 removed */}
          <div className="flex items-start space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark">Email</h3>
              <a href="mailto:dulithawickramasinghe@gmail.com" className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                dulithawickramasinghe@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <PhoneIcon className="h-6 w-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark">Phone</h3>
              <a href="tel:+94753766162" className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                +94 75 376 6162
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPinIcon className="h-6 w-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark">Address</h3>
              <p className="text-secondary-light dark:text-secondary-dark">
                Colombo, Sri Lanka (Remote Open to Worldwide)
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
             <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark mb-2">My Location</h3>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md">
              <p className="flex items-center justify-center h-full text-secondary-light dark:text-secondary-dark">
                Map Placeholder
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-card-light dark:bg-card-dark p-6 sm:p-8 rounded-xl shadow-xl" // Using card styles
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-light dark:text-primary-dark mb-6">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Full Name</label>
              <input 
                type="text" name="name" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm sm:text-sm placeholder-secondary-light dark:placeholder-secondary-dark bg-background-light dark:bg-gray-700 text-primary-light dark:text-primary-dark ${errors.name ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark'}`}
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Email Address</label>
              <input 
                type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm sm:text-sm placeholder-secondary-light dark:placeholder-secondary-dark bg-background-light dark:bg-gray-700 text-primary-light dark:text-primary-dark ${errors.email ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark'}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Subject (Optional)</label>
              <input 
                type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark sm:text-sm bg-background-light dark:bg-gray-700 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="Regarding your project..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-light dark:text-primary-dark mb-1">Message</label>
              <textarea 
                name="message" id="message" rows={5} value={formData.message} onChange={handleChange} onBlur={handleBlur}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm sm:text-sm placeholder-secondary-light dark:placeholder-secondary-dark bg-background-light dark:bg-gray-700 text-primary-light dark:text-primary-dark ${errors.message ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-accent-light dark:focus:border-accent-dark'}`}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message}</p>}
            </div>
            <div>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full btn btn-primary py-3 px-6 text-base disabled:opacity-70"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {formStatus === 'success' && (
              <p className="mt-4 text-sm text-green-600 dark:text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
            )}
            {formStatus === 'error' && Object.keys(errors).length > 0 && (
              <p className="mt-4 text-sm text-red-500 dark:text-red-400 text-center">Please correct the errors above.</p>
            )}
             {formStatus === 'error' && Object.keys(errors).length === 0 && ( // General error if submit fails for other reasons
              <p className="mt-4 text-sm text-red-500 dark:text-red-400 text-center">Could not send message. Please try again later.</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
