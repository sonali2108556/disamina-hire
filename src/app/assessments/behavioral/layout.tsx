import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Behavioral Assessments for Hiring | Disamina AII',
  description: 'Identify workplace behavior, soft skills, and emotional intelligence with AI-driven behavioral assessments.',
  keywords: "behavioral tests, workplace behavior assessment, emotional intelligence test"
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
