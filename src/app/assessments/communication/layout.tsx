import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Communication Skills Assessment | Disamina AI',
  description: 'Evaluate verbal and written communication skills of candidates using AI-based tests tailored to job roles.',
  keywords: "communication test, verbal skills assessment, soft skills evaluation"
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
