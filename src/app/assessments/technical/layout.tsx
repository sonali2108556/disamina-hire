import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Assessment Tests for Hiring | Disamina AI',
  description: 'Validate technical expertise with role-specific coding, engineering, and IT skill assessments powered by AI.',
  keywords: "technical tests, IT skill assessment, engineering test",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Technical Assessment Tests for Hiring | Disamina AI',
    description: 'Validate technical expertise with role-specific coding, engineering, and IT skill assessments powered by AI.',
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
