"use client";
import Script from "next/script";
import { CaseStudyData } from "@/data/caseStudyData";

interface ProjectJsonLdProps {
  projectSlug: string;
}

export default function ProjectJsonLd({ projectSlug }: ProjectJsonLdProps) {
  const project = CaseStudyData.find((p) => p.slug === projectSlug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ericandtheweb.com";
  
  if (!project) {
    return null;
  }
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "datePublished": `${project.year}-01-01`,
    "image": `${baseUrl}/${project.slug}/${project.src}`,
    "author": {
      "@type": "Person",
      "name": "Eric and the Web"
    },
    "creator": {
      "@type": "Person",
      "name": "Eric and the Web"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eric and the Web",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "genre": project.service,
    "url": `${baseUrl}/portfolio/${project.slug}`
  };

  return (
    <Script
      id={`jsonld-${project.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 