'use client';

import Head from "next/head";
import { useEffect, useState } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
}

const SeoHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  image = "/images/favicon.ico",
}: SeoHeadProps) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (!canonicalUrl) {
      setCurrentUrl(window.location.href);
    }
  }, [canonicalUrl]);

  const fullTitle = title;
  const url = canonicalUrl || currentUrl;

  return (
    <Head>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DisaminaAI" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SeoHead;
