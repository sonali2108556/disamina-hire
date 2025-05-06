import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coding Assessment Platform for Developers | Disamina AI',
  description: "Evaluate developer skills with real-time coding assessments tailored to your tech hiring needs.",
  keywords: "coding assessments, developer evaluation, tech hiring tests",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Coding Assessment Platform for Developers | Disamina AI',
    description: "Evaluate developer skills with real-time coding assessments tailored to your tech hiring needs.",
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
