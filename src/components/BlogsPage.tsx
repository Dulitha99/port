import React from 'react';
import { motion } from 'framer-motion';

// Function to generate a URL-friendly slug from a title (can be kept for keys or future use)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, '') 
    .replace(/--+/g, '-'); 
};

const articlesData = [
  {
    id: 'article1',
    title: 'Nmap Basics',
    articleUrl: 'https://medium.com/@dulithawickramasinghe/nmap-basics-90b024940014',
    summary: "An insightful article discussing Nmap Basics. Click 'Read More' to delve into the details on Medium.",
    imageUrl: '', // No image, placeholder will be used
    slug: generateSlug('Nmap Basics'),
  },
  {
    id: 'article2',
    title: 'Blockchain Technology',
    articleUrl: 'https://medium.com/@dulithawickramasinghe/blockchain-technology-a34588b30d91',
    summary: "An insightful article discussing Blockchain Technology. Click 'Read More' to delve into the details on Medium.",
    imageUrl: '',
    slug: generateSlug('Blockchain Technology'),
  },
  {
    id: 'article3',
    title: 'Onboarding Microsoft Sentinel',
    articleUrl: 'https://medium.com/@dulithawickramasinghe/onboarding-microsoft-sentinel-fe91602dbd4a',
    summary: "An insightful article discussing Onboarding Microsoft Sentinel. Click 'Read More' to delve into the details on Medium.",
    imageUrl: '',
    slug: generateSlug('Onboarding Microsoft Sentinel'),
  }
];

const BlogsPage: React.FC = () => {
  return (
    <div id="blogs" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Consistent with previous animations
        viewport={{ once: true, amount: 0.3 }} // Consistent viewport
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-primary-light dark:text-primary-dark">
          Insights & Articles
        </h1>
        <p className="text-lg text-center text-secondary-light dark:text-secondary-dark mb-12">
          Explore my latest thoughts and findings in the world of cybersecurity, shared on Medium.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articlesData.map((article, index) => (
          <motion.div
            key={article.id} // Using new id
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }} // Consistent with project cards
            className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl" // Using card styles
          >
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {/* Image Placeholder - imageUrl is empty, so this will show */}
              <span className="text-secondary-light dark:text-secondary-dark">Article Preview</span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-3 text-accent-light dark:text-accent-dark">
                {article.title}
              </h2>
              {/* Date removed as it's not in the new data */}
              <p className="text-primary-light dark:text-primary-dark mb-6 flex-grow text-sm leading-relaxed"> {/* Added text-sm and leading-relaxed */}
                {article.summary}
              </p>
              <a
                href={article.articleUrl} // Using actual article URL
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security for new tab
                className="inline-block mt-auto text-accent-light dark:text-accent-dark font-semibold hover:underline self-start"
              >
                Read More on Medium &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
