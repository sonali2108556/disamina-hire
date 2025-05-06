import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Disamina AI | Get in Touch',
  description: "Reach out to Disamina AI for support, partnership inquiries, or product demos. We’re here to help you hire better.",
  keywords: "contact Disamina, hiring support, AI recruitment demo",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: 'Contact Disamina AI | Get in Touch',
    description: "Reach out to Disamina AI for support, partnership inquiries, or product demos. We’re here to help you hire better.",
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
