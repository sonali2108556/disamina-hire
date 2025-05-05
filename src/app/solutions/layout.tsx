import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Hiring Solutions | Disamina AI',
  description: "Explore Disamina AI’s suite of smart hiring solutions including resume screening, assessments, proctoring, and automated interviews.",
  keywords: "hiring solutions, AI hiring tools, recruitment automation solutions"
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
