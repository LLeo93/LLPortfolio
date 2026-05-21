import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, image, url }) => {
  const baseUrl = 'https://portfolio-psi-lilac-74.vercel.app';

  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}

      {url && <link rel="canonical" href={fullUrl} />}

      <meta property="og:title" content={title} />

      {description && <meta property="og:description" content={description} />}

      {url && <meta property="og:url" content={fullUrl} />}

      {image && <meta property="og:image" content={image} />}

      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;
