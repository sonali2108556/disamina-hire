import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Career Pages for Employers | Disamina AI',
  description: "Build a personalized career page with Disamina AI to showcase your brand and attract top talent effortlessly.",
  keywords:"custom career page, branded job portal, employer branding"
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
