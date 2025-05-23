import React from 'react';
import { motion } from 'framer-motion'; // Added for potential animations

const placeholderPosts = [
  {
    id: 1,
    title: 'Understanding XDR: The Next Leap in Cybersecurity',
    date: 'October 26, 2023',
    summary: 'Extended Detection and Response (XDR) is revolutionizing how we approach threat detection. Dive into what XDR is and why it matters.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Cybersecurity+Concept', // Placeholder image
  },
  {
    id: 2,
    title: 'The Art of Phishing: How to Spot and Avoid Attacks',
    date: 'November 5, 2023',
    summary: 'Phishing attacks are becoming more sophisticated. Learn the common tactics used by attackers and how to protect yourself and your organization.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Phishing+Awareness', // Placeholder image
  },
  {
    id: 3,
    title: 'Securing Your Remote Workforce: Best Practices',
    date: 'November 18, 2023',
    summary: 'With remote work becoming the norm, ensuring the security of your distributed team is crucial. Explore essential strategies and tools.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Remote+Work+Security', // Placeholder image
  },
  {
    id: 4,
    title: 'Introduction to Threat Hunting with MITRE ATT&CK',
    date: 'December 2, 2023',
    summary: 'Proactive threat hunting can significantly improve your security posture. Learn how to leverage the MITRE ATT&CK framework for effective hunting.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Threat+Hunting', // Placeholder image
  }
];

const BlogsPage: React.FC = () => {
  return (
    <div id="blogs" className="container mx-auto px-4 py-16"> {/* Adjusted py for more top/bottom space */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-primary-light dark:text-primary-dark">
          Insights & Articles
        </h1>
        <p className="text-lg text-center text-secondary-light dark:text-secondary-dark mb-12">
          Explore my latest thoughts and findings in the world of cybersecurity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl"
            // Using shadow-xl and hover:shadow-2xl for more pronounced effect
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {/* If using actual images, replace this div with an img tag: 
                 <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" /> 
              */}
              <span className="text-gray-500 dark:text-gray-400 text-sm">Image Placeholder</span>
            </div>

            <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow for consistent card height if summaries vary */}
              <h2 className="text-2xl font-semibold mb-3 text-accent-light dark:text-accent-dark">
                {post.title}
              </h2>
              <p className="text-sm text-secondary-light dark:text-secondary-dark mb-4">
                {post.date}
              </p>
              <p className="text-primary-light dark:text-primary-dark mb-6 flex-grow"> {/* Added flex-grow to summary */}
                {post.summary}
              </p>
              <a
                href="#" // Placeholder link
                className="inline-block mt-auto text-accent-light dark:text-accent-dark font-semibold hover:underline self-start"
                // mt-auto to push to bottom, self-start to prevent stretching if card is flex container
              >
                Read More &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
