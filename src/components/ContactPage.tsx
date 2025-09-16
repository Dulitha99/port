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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Removed async as native submission handles it
    if (!validateForm()) {
      e.preventDefault(); // Prevent submission ONLY if validation fails
      setFormStatus('error');
      return;
    }
    // If validation passes, set status and allow native form submission
    setFormStatus('submitting');
    // Native form submission will occur now because e.preventDefault() was not called.
    // Web3Forms will handle the redirect to a success/error page.
    // So, explicit success message and form clearing here are removed.
    // Consider clearing form data after a short delay if Web3Forms submission is quick and doesn't redirect,
    // but typically for non-AJAX, this isn't needed.
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-16 bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <ChatBubbleLeftEllipsisIcon className="h-10 w-10 text-terminal-green mr-3" />
            <h1 className="text-4xl sm:text-5xl font-cyber font-bold cyber-text">
              CONTACT_PROTOCOL
            </h1>
          </div>
          <p className="text-lg text-secondary-dark mb-12 max-w-2xl mx-auto font-mono">
            [INFO] Establishing secure communication channel...
          </p>
        </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 cyber-card p-6 sm:p-8"
        >
          {/* Redundant "Contact Information" h2 removed */}
          <div className="flex items-start space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-terminal-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-mono font-medium text-terminal-green">EMAIL_ADDRESS</h3>
              <a href="mailto:dulithawickramasinghe@gmail.com" className="text-electric-blue hover:text-terminal-green transition-colors font-mono">
                dulithawickramasinghe@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <PhoneIcon className="h-6 w-6 text-terminal-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-mono font-medium text-terminal-green">PHONE_NUMBER</h3>
              <a href="tel:+94753766162" className="text-electric-blue hover:text-terminal-green transition-colors font-mono">
                +94 75 376 6162
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPinIcon className="h-6 w-6 text-terminal-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-mono font-medium text-terminal-green">LOCATION</h3>
              <p className="text-secondary-dark font-mono">
                Colombo, Sri Lanka (Remote Open to Worldwide)
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-terminal-green/30">
            <h3 className="text-lg font-mono font-medium text-terminal-green mb-2">GPS_COORDINATES</h3>
            <div className="aspect-video rounded-md overflow-hidden border border-terminal-green/30"> 
              <iframe
                src="https://maps.google.com/maps?q=Colombo%2C%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                style={{ border: 0, filter: 'hue-rotate(90deg) contrast(1.2) saturate(1.3)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Colombo, Sri Lanka" 
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="cyber-card p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-cyber font-semibold text-terminal-green mb-6">
            MESSAGE_TRANSMISSION
          </h2>
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="access_key" value="387385f0-622c-4391-862d-696b4c4483b0" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <div>
              <label htmlFor="name" className="block text-sm font-mono font-medium text-terminal-green mb-1">enter name:</label>
              <input 
                type="text" name="name" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm sm:text-sm font-mono bg-background-dark text-primary-dark placeholder-secondary-dark ${errors.name ? 'border-terminal-red focus:ring-terminal-red focus:border-terminal-red' : 'border-terminal-green/30 focus:ring-terminal-green focus:border-terminal-green'}`}
                placeholder="[__________]"
              />
              {errors.name && <p className="mt-1 text-xs text-terminal-red font-mono">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono font-medium text-terminal-green mb-1">enter email:</label>
              <input 
                type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm sm:text-sm font-mono bg-background-dark text-primary-dark placeholder-secondary-dark ${errors.email ? 'border-terminal-red focus:ring-terminal-red focus:border-terminal-red' : 'border-terminal-green/30 focus:ring-terminal-green focus:border-terminal-green'}`}
                placeholder="[__________]"
              />
              {errors.email && <p className="mt-1 text-xs text-terminal-red font-mono">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-mono font-medium text-electric-blue mb-1">subject (optional):</label>
              <input 
                type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-terminal-green/30 rounded-md shadow-sm focus:ring-terminal-green focus:border-terminal-green sm:text-sm font-mono bg-background-dark text-primary-dark placeholder-secondary-dark"
                placeholder="[__________]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono font-medium text-terminal-green mb-1">enter message:</label>
              <textarea 
                name="message" id="message" rows={5} value={formData.message} onChange={handleChange} onBlur={handleBlur}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm sm:text-sm font-mono bg-background-dark text-primary-dark placeholder-secondary-dark ${errors.message ? 'border-terminal-red focus:ring-terminal-red focus:border-terminal-red' : 'border-terminal-green/30 focus:ring-terminal-green focus:border-terminal-green'}`}
                placeholder="[__________]"
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-terminal-red font-mono">{errors.message}</p>}
            </div>
            <div>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full bg-terminal-green/20 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background-dark font-mono font-semibold py-3 px-6 text-base disabled:opacity-70 transition-all duration-300"
              >
                {formStatus === 'submitting' ? 'transmitting data...' : '[ TRANSMIT ]'}
              </button>
            </div>
            {formStatus === 'success' && (
              <p className="mt-4 text-sm text-terminal-green text-center font-mono">success.</p>
            )}
            {formStatus === 'error' && Object.keys(errors).length > 0 && (
              <p className="mt-4 text-sm text-terminal-red text-center font-mono">error: validation failed.</p>
            )}
             {formStatus === 'error' && Object.keys(errors).length === 0 && (
              <p className="mt-4 text-sm text-terminal-red text-center font-mono">error: transmission failed.</p>
            )}
          </form>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
