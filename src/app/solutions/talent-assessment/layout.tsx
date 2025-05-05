import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comprehensive Talent Assessment Platform | Disamina AI',
  description: "Empower your team to assess skills and potential with AI-powered, customizable, role-based assessments covering technical and soft skills.",
  keywords: "talent assessment, skills evaluation, candidate testing, pre-employment testing, skill verification, hiring assessment",
  openGraph: {
    title: 'Comprehensive Talent Assessment Platform | Disamina AI',
    description: "Empower your team to assess skills and potential with AI-powered, customizable, role-based assessments covering technical and soft skills.",
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
