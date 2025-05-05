
import Head from "next/head";

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
  const fullTitle = title;
  const url = canonicalUrl ?? (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DisaminaAI" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SeoHead;
