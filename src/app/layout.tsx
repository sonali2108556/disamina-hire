import './globals.css';
import Script from 'next/script';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Hiring Platform for Employers | Disamina AI',
  description: 'Discover Disamina AI—an all-in-one hiring solution for employers. Post jobs, screen resumes, conduct assessments, and interview candidates faster with AI."',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        
        {/* Calendly Widget */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        
        {/* fw-cdn */}
        <Script
          src="https://fw-cdn.com/12191739/4678027.js"
          strategy="afterInteractive"
          data-chat="false"
        />
        
        {/* Tawk.to live chat */}
        <Script id="tawk-init" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/672c35972480f5b4f599e374/1ic2b2n0v';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
