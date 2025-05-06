import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skill Assessments for Hiring | Disamina AI',
  description: 'Assess candidates with job-specific skill tests designed by experts and powered by AI to ensure accurate evaluation.',
  keywords: "role-based assessments, skill testing, job-specific evaluations",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Skill Assessments for Hiring | Disamina AI',
    description: 'Assess candidates with job-specific skill tests designed by experts and powered by AI to ensure accurate evaluation.',
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
