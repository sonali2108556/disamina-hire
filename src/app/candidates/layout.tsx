import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Career Tools for Job Seekers | Disamina AI',
  description: 'Get resume insights, mock interviews, and career tools powered by AI to improve your job prospects.',
  keywords: "tools for job seekers, resume feedback, career booster"
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
