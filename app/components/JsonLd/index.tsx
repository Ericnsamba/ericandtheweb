"use client";
import Script from "next/script";

export default function JsonLdScripts() {
  // JSON-LD structured data for the website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eric and the Web",
    "url": "https://ericandtheweb.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ericandtheweb.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // JSON-LD structured data for the person/brand
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eric and the Web",
    "url": "https://ericandtheweb.com",
    "jobTitle": "UI/UX Product Designer and Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Eric and the Web"
    },
    "sameAs": [
      "https://twitter.com/ericandtheweb",
      "https://www.linkedin.com/in/ericandtheweb",
      "https://github.com/ericandtheweb"
    ]
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
} 