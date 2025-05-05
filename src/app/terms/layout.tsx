import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Disamina AI',
  description: "Read Disamina’s terms of use to understand how we collect, use, and protect your personal data. We are committed to safeguarding your privacy while delivering AI-driven assessment and proctoring solutions.",
  keywords: "Disamina terms of use, Data Protection, User Privacy, AI Assessment Privacy, Online Proctoring Security, Data Usage Policy, Personal Information, Disamina AI, Privacy Commitment, User Data Security"
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
