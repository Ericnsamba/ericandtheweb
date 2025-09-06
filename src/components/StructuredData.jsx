export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eric Manasse",
    "jobTitle": "Product Designer & Design Engineer",
    "description": "London-based Product Designer and Design Engineer with 8+ years of experience creating digital products across fintech, mobility, and consumer apps.",
    "url": "https://ericandtheweb.com",
    "image": "https://ericandtheweb.com/trail-images/img1.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/ericmanasse/",
      "https://instagram.com/ericandtheweb",
      "https://dribbble.com/ericandtheweb",
      "https://twitter.com/ericandtheweb"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "email": "hello@ericandtheweb.com",
    "knowsAbout": [
      "Product Design",
      "User Experience Design",
      "User Interface Design",
      "Design Systems",
      "Frontend Development",
      "React",
      "Next.js",
      "Figma",
      "Fintech Design",
      "Mobile App Design"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Projiro",
      "description": "Digital design studio focused on financial products",
      "url": "https://projiro.com"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Kurtosys System",
        "description": "Product Designer (2018-2022)"
      },
      {
        "@type": "Organization", 
        "name": "TheBang",
        "description": "Product Designer (2023-2024)"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "8+ Years Product Design Experience"
      }
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eric Manasse Design",
    "url": "https://ericandtheweb.com",
    "logo": "https://ericandtheweb.com/trail-images/img1.jpg",
    "founder": {
      "@type": "Person",
      "name": "Eric Manasse"
    },
    "description": "Professional product design and development services specializing in fintech, mobility, and consumer applications.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@ericandtheweb.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/in/ericmanasse/",
      "https://instagram.com/ericandtheweb",
      "https://dribbble.com/ericandtheweb"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eric Manasse Portfolio",
    "url": "https://ericandtheweb.com",
    "description": "Portfolio showcasing product design and development work by Eric Manasse",
    "author": {
      "@type": "Person",
      "name": "Eric Manasse"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ericandtheweb.com/case-studies",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}