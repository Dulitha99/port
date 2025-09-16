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
    imageUrl: '/nmap.jfif', // Updated image URL
    slug: generateSlug('Nmap Basics'),
  },
  {
    id: 'article2',
    title: 'Blockchain Technology',
    articleUrl: 'https://medium.com/@dulithawickramasinghe/blockchain-technology-a34588b30d91',
    summary: "An insightful article discussing Blockchain Technology. Click 'Read More' to delve into the details on Medium.",
    imageUrl: '/blockchain.jfif', // Updated image URL
    slug: generateSlug('Blockchain Technology'),
  },
  {
    id: 'article3',
    title: 'Onboarding Microsoft Sentinel',
    articleUrl: 'https://medium.com/@dulithawickramasinghe/onboarding-microsoft-sentinel-fe91602dbd4a',
    summary: "An insightful article discussing Onboarding Microsoft Sentinel. Click 'Read More' to delve into the details on Medium.",
    imageUrl: '/Sentinel.jpg', // Updated image URL
    slug: generateSlug('Onboarding Microsoft Sentinel'),
  }
];

const BlogsPage: React.FC = () => {
  return (
    <div id="blogs" className="container mx-auto px-4 py-16 bg-background-dark relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl font-cyber font-bold text-center mb-4 cyber-text">
            BLOG_FEED
          </h1>
          <p className="text-lg text-center text-secondary-dark mb-12 font-mono">
            [INFO] Latest cybersecurity insights and technical articles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="cyber-card rounded-xl overflow-hidden flex flex-col group relative"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)',
                border: '1px solid rgba(57, 255, 20, 0.3)',
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
              }}
            >
              {/* Terminal Log Header */}
              <div className="bg-terminal-green/10 border-b border-terminal-green/30 p-3">
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-terminal-green">[2025-01-16 10:45:22]</span>
                  <span className="text-electric-blue">[INFO]</span>
                  <span className="text-terminal-green">Blog Entry:</span>
                  <span className="text-primary-dark">{article.title}</span>
                </div>
              </div>

              <div className="w-full h-48 bg-gradient-to-br from-terminal-green/10 to-electric-blue/10 flex items-center justify-center overflow-hidden relative">
                {article.imageUrl ? (
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-terminal-green font-mono text-sm">[ARTICLE_PREVIEW]</span>
                )}
                
                {/* Scan lines effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/10 to-transparent opacity-50 animate-pulse"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-cyber font-semibold mb-3 text-terminal-green group-hover:text-electric-blue transition-colors duration-300">
                  {article.title}
                </h2>
                
                <p className="text-primary-dark mb-6 flex-grow text-sm leading-relaxed font-mono">
                  {article.summary}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-terminal-green font-mono mb-2">
                    <span>STATUS: PUBLISHED</span>
                    <span>PLATFORM: MEDIUM</span>
                  </div>
                  
                  <a
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-electric-blue hover:text-terminal-green font-mono font-semibold transition-colors duration-300 group/link"
                  >
                    <span>TRANSMIT_TO_MEDIUM</span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
