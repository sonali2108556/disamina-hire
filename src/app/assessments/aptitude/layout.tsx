import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aptitude Tests for Recruitment | Disamina AI',
  description: 'Assess logical reasoning, problem-solving, and numerical ability using AI-based aptitude tests.',
  keywords: "aptitude test, cognitive ability test, recruitment assessment",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Aptitude Tests for Recruitment | Disamina AI',
    description: 'Assess logical reasoning, problem-solving, and numerical ability using AI-based aptitude tests.',
    images: "/favicon.ico",
    type: "website",
  }
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}
