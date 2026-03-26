import Script from 'next/script';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
  keywords?: string[];
}

export default function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Equipe Cobersystem",
  url,
  keywords = [],
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image.startsWith('http') ? image : `https://coberturapolicarbonato.com.br${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://coberturapolicarbonato.com.br/sobre",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobersystem",
      logo: {
        "@type": "ImageObject",
        url: "https://coberturapolicarbonato.com.br/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: keywords.join(', '),
  };

  return (
    <Script
      id={`article-schema-${headline.replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}
