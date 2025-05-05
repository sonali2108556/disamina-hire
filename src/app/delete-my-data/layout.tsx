import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request to Delete Your Data | Disamina AI',
  description: "Learn how to request deletion of your personal data from Disamina AI in accordance with privacy regulations.",
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
