import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual Campus Hiring Platform | Disamina AI',
  description: "Launch virtual campus drives and assess students at scale with Disamina’s end-to-end AI campus hiring platform.",
  keywords:"campus hiring, university recruitment, virtual campus drive"
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
