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
  title = "Dulitha Wickramasinghe - Expert Cybersecurity Analyst & Penetration Tester",
  description = "Experienced cybersecurity professional specializing in SOC operations, threat hunting, and penetration testing. Certified in IBM Cybersecurity, TryHackMe, and Fortinet NSE1. Expert in Palo Alto Cortex XDR, vulnerability assessment, and security awareness training. Available for cybersecurity consulting and remote security services.",
  keywords = "cybersecurity analyst, SOC operations specialist, threat hunter, penetration tester, cybersecurity consultant, security analyst, incident response, vulnerability assessment, Palo Alto Cortex XDR, Entra ID, network security, endpoint security, security awareness training, cybersecurity certifications, IBM cybersecurity, TryHackMe, Fortinet NSE1, security monitoring, risk assessment, firewall management, threat prevention, security architecture, cybersecurity portfolio, security professional, cyber defense, security consultant, remote cybersecurity, Sri Lanka cybersecurity expert, cybersecurity services, security assessment, penetration testing services, threat detection, security operations center, cyber threat intelligence, security compliance, cybersecurity training, security audit, cyber risk management, information security, cybersecurity career, security engineer, cyber analyst, security specialist, cybersecurity expert, digital security, cyber protection, security solutions, cybersecurity professional services",
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
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="geo.region" content="LK" />
      <meta name="geo.placename" content="Colombo, Sri Lanka" />
      <meta name="geo.position" content="6.9271;79.8612" />
      <meta name="ICBM" content="6.9271, 79.8612" />
      <meta name="DC.title" content={title} />
      <meta name="DC.creator" content="Dulitha Wickramasinghe" />
      <meta name="DC.subject" content="Cybersecurity, Information Security, Penetration Testing, SOC Operations" />
      <meta name="DC.description" content={description} />
      <meta name="DC.publisher" content="Dulitha Wickramasinghe" />
      <meta name="DC.contributor" content="Dulitha Wickramasinghe" />
      <meta name="DC.date" content="2024" />
      <meta name="DC.type" content="Text" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={url} />
      <meta name="DC.language" content="en" />
      <meta name="DC.rights" content="Copyright Dulitha Wickramasinghe" />
      
      {/* Professional Network Meta Tags */}
      <meta name="profession" content="Cybersecurity Professional" />
      <meta name="specialization" content="SOC Operations, Threat Hunting, Penetration Testing" />
      <meta name="certifications" content="IBM Cybersecurity Analyst, TryHackMe Jr Penetration Tester, Fortinet NSE1" />
      <meta name="availability" content="Available for remote cybersecurity consulting" />
      <meta name="location" content="Colombo, Sri Lanka - Remote Worldwide" />
      
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
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dulitha Wickramasinghe",
          "alternateName": "Dulitha Cyber",
          "jobTitle": ["Cybersecurity Analyst", "Penetration Tester", "SOC Operations Specialist", "Threat Hunter"],
          "description": description,
          "url": url,
          "image": image,
          "nationality": "Sri Lankan",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Colombo",
            "addressCountry": "Sri Lanka"
          },
          "email": "dulithawickramasinghe@gmail.com",
          "telephone": "+94753766162",
          "sameAs": [
            "https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/",
            "https://github.com/Dulitha99",
            "https://tryhackme.com/p/dulithawickramas",
            "https://medium.com/@dulithawickramasinghe"
          ],
          "knowsAbout": [
            "Cybersecurity",
            "SOC Operations",
            "Threat Hunting",
            "Penetration Testing",
            "Endpoint Security",
            "Network Security",
            "Incident Response",
            "Security Awareness Training",
            "Vulnerability Assessment",
            "Risk Assessment",
            "Security Monitoring",
            "Firewall Management",
            "Threat Prevention",
            "Security Architecture",
            "Palo Alto Cortex XDR",
            "Entra ID",
            "Security Compliance",
            "Cyber Threat Intelligence"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Cybersecurity Professional",
            "occupationLocation": {
              "@type": "Country",
              "name": "Sri Lanka"
            },
            "skills": [
              "SOC Operations",
              "Threat Hunting",
              "Penetration Testing",
              "Endpoint Security",
              "Network Security",
              "Incident Response",
              "Vulnerability Assessment"
            ]
          },
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Jr Penetration Tester Certificate",
              "credentialCategory": "certification",
              "dateCreated": "2023",
              "recognizedBy": {
                "@type": "Organization",
                "name": "TryHackMe",
                "url": "https://tryhackme.com"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "IBM Cybersecurity Analyst",
              "credentialCategory": "certification",
              "dateCreated": "2023",
              "recognizedBy": {
                "@type": "Organization",
                "name": "IBM",
                "url": "https://www.ibm.com"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Fortinet Network Security Expert Level 1: Certified Associate",
              "credentialCategory": "certification",
              "dateCreated": "2023",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Fortinet",
                "url": "https://www.fortinet.com"
              }
            }
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Sri Lanka Institute of Information Technology (SLIIT)",
            "description": "BSc (Hons) in Information Technology Specializing in Cyber Security"
          },
          "offers": {
            "@type": "Service",
            "name": "Cybersecurity Consulting Services",
            "description": "Professional cybersecurity services including penetration testing, vulnerability assessment, security awareness training, and SOC operations consulting",
            "provider": {
              "@type": "Person",
              "name": "Dulitha Wickramasinghe"
            },
            "areaServed": "Worldwide",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": url,
              "serviceSmsNumber": "+94753766162",
              "serviceEmail": "dulithawickramasinghe@gmail.com"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
