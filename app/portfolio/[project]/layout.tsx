import { CaseStudyData } from "@/data/caseStudyData";
import { Metadata, ResolvingMetadata } from "next";
import ProjectJsonLd from "@/components/ProjectJsonLd";

interface PageProps {
  params: {
    project: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Find the project data
  const project = CaseStudyData.find((p) => p.slug === params.project);
  
  // Fallback metadata if project not found
  if (!project) {
    return {
      title: "Project Not Found | Eric and the Web",
      description: "The requested project could not be found."
    };
  }

  // Get parent metadata (if any)
  const previousImages = (await parent).openGraph?.images || [];
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ericandtheweb.com";
  const imageUrl = `${baseUrl}/${project.slug}/${project.src}`;

  return {
    title: `${project.title} | Portfolio | Eric and the Web`,
    description: project.description || `Explore ${project.title} - ${project.service} project from ${project.year}`,
    keywords: [project.title, project.service, "portfolio", "web design", "development", project.year],
    openGraph: {
      title: `${project.title} | Portfolio Case Study`,
      description: project.description || `View this ${project.service} project by Eric and the Web, created in ${project.year}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title
        },
        ...previousImages
      ],
      type: 'article',
      publishedTime: `${project.year}-01-01T00:00:00.000Z`,
      url: `${baseUrl}/portfolio/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Portfolio Project`,
      description: project.description || `${project.service} project from ${project.year}`,
      images: [imageUrl],
      creator: '@ericandtheweb',
    },
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Eric and the Web' }],
  };
}

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { project: string };
}) {
  return (
    <>
      <ProjectJsonLd projectSlug={params.project} />
      {children}
    </>
  );
} 