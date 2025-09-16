import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../contexts/ThemeContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Dulitha Wickramasinghe - Cybersecurity Professional",
  description = "Cybersecurity professional with expertise in SOC operations, threat hunting, endpoint security, and penetration testing. Skilled in Palo Alto Cortex XDR, Entra ID, and security awareness training.",
  keywords = "cybersecurity, SOC analyst, threat hunting, penetration testing, endpoint security, Palo Alto Cortex XDR, Entra ID, security awareness, vulnerability assessment, incident response, security monitoring, risk assessment, network security, firewall management, threat prevention, security architecture, TryHackMe, IBM, Fortinet, NSE1, cybersecurity certifications",
  image = "https://dulitha-wickramasinghe.netlify.app/og-image.jpg",
  url = "https://dulitha-wickramasinghe.netlify.app/",
  type = "website"
}) => {
  const { theme } = useTheme();
  const themeColor = theme === 'dark' ? '#0A0A0A' : '#F8F9FA';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dulitha Wickramasinghe" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dulitha Wickramasinghe Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@dulitha_cyber" />
      <meta property="twitter:site" content="@dulitha_cyber" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dulitha Wickramasinghe" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.linkedin.com" />
      <link rel="preconnect" href="https://github.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dulitha Wickramasinghe",
          "jobTitle": "Cybersecurity Professional",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/",
            "https://github.com/Dulitha99"
          ],
          "knowsAbout": [
            "Cybersecurity",
            "SOC Operations",
            "Threat Hunting",
            "Penetration Testing",
            "Endpoint Security",
            "Network Security",
            "Incident Response",
            "Security Awareness Training"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Jr Penetration Tester Certificate",
              "credentialCategory": "certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "TryHackMe"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "IBM Cybersecurity Analyst",
              "credentialCategory": "certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "IBM"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Fortinet Network Security Expert Level 1: Certified Associate",
              "credentialCategory": "certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Fortinet"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
