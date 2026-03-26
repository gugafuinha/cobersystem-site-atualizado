import Script from 'next/script';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  brand?: string;
  sku?: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  url: string;
}

export default function ProductSchema({
  name,
  description,
  image,
  brand = "Cobersystem",
  sku,
  price,
  priceCurrency = "BRL",
  availability = "https://schema.org/InStock",
  url,
}: ProductSchemaProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://coberturapolicarbonato.com.br${image}`,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    sku: sku || name.replace(/\s+/g, '-').toLowerCase(),
    offers: {
      "@type": "AggregateOffer",
      url,
      priceCurrency,
      lowPrice: price || "1000",
      highPrice: price ? (parseFloat(price) * 3).toString() : "15000",
      availability,
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        "@type": "Organization",
        name: "Cobersystem",
        url: "https://coberturapolicarbonato.com.br",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Cobersystem",
      url: "https://coberturapolicarbonato.com.br",
    },
  };

  return (
    <Script
      id={`product-schema-${sku || name}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}
