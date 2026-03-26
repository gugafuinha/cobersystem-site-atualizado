import Script from 'next/script';

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
    email?: string;
  };
  sameAs: string[];
}

interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  '@id': string;
  url: string;
  telephone: string;
  priceRange: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification: {
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  areaServed: {
    '@type': string;
    name: string;
  }[];
}

interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image: string[];
  brand: {
    '@type': string;
    name: string;
  };
  offers: {
    '@type': string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
}

interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: {
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }[];
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item: string;
  }[];
}

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'product' | 'faq' | 'breadcrumb';
  data: OrganizationSchema | LocalBusinessSchema | ProductSchema | FAQSchema | BreadcrumbSchema | any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schemas pré-configurados
export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cobersystem – Soluções em Coberturas',
  url: 'https://coberturapolicarbonato.com.br',
  logo: 'https://coberturapolicarbonato.com.br/logo-horizontal.svg',
  description: 'Empresa especializada em coberturas retráteis em policarbonato com automação via Alexa e sensor de chuva. Coberturas que abrem e fecham com controle total do clima.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'São Paulo',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '00000-000',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-11-94361-5079',
    contactType: 'Vendas',
    areaServed: 'BR',
    availableLanguage: 'pt-BR',
    email: 'vendas@cobersystem.com.br',
  },
  sameAs: [
    'https://www.instagram.com/cobersystem',
  ],
};

export const localBusinessSchema: LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cobersystem – Soluções em Coberturas',
  image: 'https://coberturapolicarbonato.com.br/logo-horizontal.svg',
  '@id': 'https://coberturapolicarbonato.com.br',
  url: 'https://coberturapolicarbonato.com.br',
  telephone: '+55-11-94361-5079',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'São Paulo',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '00000-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-23.5505',
    longitude: '-46.6333',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'São Paulo' },
    { '@type': 'City', name: 'Guarulhos' },
    { '@type': 'City', name: 'Santo André' },
    { '@type': 'City', name: 'São Bernardo do Campo' },
    { '@type': 'City', name: 'Campinas' },
    { '@type': 'City', name: 'Sorocaba' },
  ],
};

