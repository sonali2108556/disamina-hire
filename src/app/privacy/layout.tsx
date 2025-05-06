import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Disamina AI',
  description: "Read Disamina’s Privacy Policy to understand how we collect, use, and protect your personal data. We are committed to safeguarding your privacy while delivering AI-driven assessment and proctoring solutions.",
  keywords: "Disamina Privacy Policy, Data Protection, User Privacy, AI Assessment Privacy, Online Proctoring Security, Data Usage Policy, Personal Information, Disamina AI, Privacy Commitment, User Data Security",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Privacy Policy | Disamina AI',
    description: "Read Disamina’s Privacy Policy to understand how we collect, use, and protect your personal data. We are committed to safeguarding your privacy while delivering AI-driven assessment and proctoring solutions.",
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
