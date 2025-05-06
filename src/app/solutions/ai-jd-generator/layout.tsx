import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Job Description Generator | Disamina AI',
  description: "Create optimized, role-specific job descriptions in seconds using Disamina AI’s intelligent JD generator.",
  keywords: "AI job description tool, JD generator, job posting automation",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'AI Job Description Generator | Disamina AI',
    description: "Create optimized, role-specific job descriptions in seconds using Disamina AI’s intelligent JD generator.",
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
