import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online Psychometric Tests for Hiring | Disamina AI',
  description: 'Measure personality, behavior, and cognitive traits of candidates with AI-driven psychometric tests.',
  keywords: "psychometric testing, candidate behavior test, personality assessment",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Online Psychometric Tests for Hiring | Disamina AI',
    description: 'Measure personality, behavior, and cognitive traits of candidates with AI-driven psychometric tests.',
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
