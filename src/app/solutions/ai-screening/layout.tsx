import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume Screening Software | Disamina AI',
  description: "Automatically screen and rank candidates with Disamina AI’s smart resume screening tool—faster and bias-free.",
  keywords: "AI resume screening, automated candidate shortlisting, resume parser",
  icons:{
    icon:"/favicon.ico"
  },
  openGraph: {
    title: 'AI Resume Screening Software | Disamina AI',
    description: "Automatically screen and rank candidates with Disamina AI’s smart resume screening tool—faster and bias-free.",
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
