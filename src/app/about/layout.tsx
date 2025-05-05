import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Disamina AI | Transforming Hiring with Smart Technology',
  description: 'Learn about Disamina AI’s mission to simplify recruitment through AI-driven assessments, resume screening, and intelligent hiring tools.',
  keywords: "about Disamina AI, AI hiring company, recruitment tech startup",
  openGraph: {
    title: ' About Disamina AI | Transforming Hiring with Smart Technology',
    description: ' Learn about Disamina AI’s mission to simplify recruitment through AI-driven assessments, resume screening, and intelligent hiring tools.',
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
