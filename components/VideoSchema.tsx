import Script from 'next/script';

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // Format: PT#M#S (e.g., PT2M30S for 2 minutes 30 seconds)
  contentUrl?: string;
  embedUrl?: string;
}

export default function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration = "PT1M",
  contentUrl,
  embedUrl,
}: VideoSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: thumbnailUrl.startsWith('http') 
      ? thumbnailUrl 
      : `https://coberturapolicarbonato.com.br${thumbnailUrl}`,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
    publisher: {
      "@type": "Organization",
      name: "Cobersystem",
      logo: {
        "@type": "ImageObject",
        url: "https://coberturapolicarbonato.com.br/images/logo.png",
      },
    },
  };

  return (
    <Script
      id={`video-schema-${name.replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}
