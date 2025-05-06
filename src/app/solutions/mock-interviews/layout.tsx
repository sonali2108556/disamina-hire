import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Mock Interviews | Disamina AI',
  description: "Prepare candidates with realistic, AI-powered practice interviews that simulate real hiring scenarios and deliver detailed feedback.",
  keywords: "mock interviews, interview practice, AI interviewer, practice questions, interview preparation, interview simulation",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'AI-Powered Mock Interviews | Disamina AI',
    description: "Prepare candidates with realistic, AI-powered practice interviews that simulate real hiring scenarios and deliver detailed feedback.",
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
