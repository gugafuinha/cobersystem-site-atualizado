import Script from 'next/script';

const BASE_URL = 'https://www.coberturapolicarbonato.com.br';

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
  brand = 'Cobersystem',
  sku,
  price,
  priceCurrency = 'BRL',
  availability = 'https://schema.org/InStock',
  url,
}: ProductSchemaProps) {
  const absoluteImage =
    image && image.trim()
      ? image.startsWith('http')
        ? image
        : `${BASE_URL}${image}`
      : `${BASE_URL}/images/blog/cobertura-abre-fecha.jpg`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: [absoluteImage],
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    sku: sku || name.replace(/\s+/g, '-').toLowerCase(),
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency,
      price: price || '1000',
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      availability,
      seller: {
        '@type': 'Organization',
        name: 'Cobersystem',
        url: BASE_URL,
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'BR',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
        merchantReturnDays: 0,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'BRL',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'BR',
          addressRegion: 'SP',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 7,
            maxValue: 30,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Cobersystem',
      url: BASE_URL,
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
