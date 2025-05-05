import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coding Assessment Platform for Developers | Disamina AI',
  description: "Evaluate developer skills with real-time coding assessments tailored to your tech hiring needs.",
  keywords:"coding assessments, developer evaluation, tech hiring tests"
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
