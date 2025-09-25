export const metadata = {
  title: 'Freelance UI/UX Designer Portfolio | Case Studies by Eric Manasse',
  description: 'Freelance UI/UX designer portfolio showcasing web design, product design, and fintech UX projects. Real client case studies with detailed process and results.',
  openGraph: {
    title: 'Freelance UI/UX Designer Portfolio | Case Studies by Eric Manasse',
    description: 'Freelance UI/UX designer portfolio showcasing web design, product design, and fintech UX projects with detailed case studies.',
    images: [
      {
        url: '/trail-images/img1.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric Manasse Design Case Studies',
      },
    ],
  },
  twitter: {
    title: 'Freelance UI/UX Designer Portfolio | Eric Manasse',
    description: 'Freelance UI/UX designer portfolio showcasing web design, product design, and fintech UX projects.',
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}