export const metadata = {
  title: 'Case Studies',
  description: 'Explore my product design case studies featuring work with fintech companies, AI travel apps, and digital platforms. See how I approach user-centered design challenges and deliver impactful digital products.',
  openGraph: {
    title: 'Design Case Studies | Eric Manasse',
    description: 'Explore my product design case studies featuring work with fintech companies, AI travel apps, and digital platforms.',
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
    title: 'Design Case Studies | Eric Manasse',
    description: 'Explore my product design case studies featuring work with fintech companies, AI travel apps, and digital platforms.',
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}