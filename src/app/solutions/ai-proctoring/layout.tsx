import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Proctoring Software for Online Exams | Disamina AI',
  description: "Ensure secure and fair assessments with Disamina’s AI-powered online proctoring system for remote hiring and exams.",
  keywords: "AI proctoring, secure assessments, online exam monitoring",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'AI Proctoring Software for Online Exams | Disamina AI',
    description: "Ensure secure and fair assessments with Disamina’s AI-powered online proctoring system for remote hiring and exams.",
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