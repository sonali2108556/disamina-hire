import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Video Interviews | Disamina AI',
  description: "Conduct seamless, automated video interviews with Disamina AI—screen candidates faster with structured questions and insights.",
  keywords:"AI video interview, one-way interviews, automated candidate screening"
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
