import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume Optimizing Tool | Disamina AI',
  description: "Get an instant score and feedback on your resume with Disamina’s AI-powered resume evaluator.",
  keywords:"resume optimizer, resume rating tool, CV evaluator AI"
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
