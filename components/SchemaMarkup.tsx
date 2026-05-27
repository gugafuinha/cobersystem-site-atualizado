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
    addressLocality: string;
    addressRegion: string;
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
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
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
  hasMap?: string;
  sameAs?: string[];
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
  url: 'https://www.coberturapolicarbonato.com.br',
  logo: 'https://www.coberturapolicarbonato.com.br/logo-horizontal-new.svg',
  description: 'Empresa especializada em coberturas retráteis em policarbonato com automação via Alexa e sensor de chuva. Coberturas que abrem e fecham com controle total do clima.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
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
    'https://www.youtube.com/@cobersystem',
    'https://share.google/Mqi0TYJoGCN7QGDo6',
  ],
};

export const localBusinessSchema: LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cobersystem – Soluções em Coberturas',
  image: 'https://www.coberturapolicarbonato.com.br/logo-horizontal-new.svg',
  '@id': 'https://www.coberturapolicarbonato.com.br',
  url: 'https://www.coberturapolicarbonato.com.br',
  telephone: '+55-11-94361-5079',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
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
    { '@type': 'City', name: 'Osasco' },
    { '@type': 'City', name: 'Barueri' },
    { '@type': 'City', name: 'São Caetano do Sul' },
    { '@type': 'City', name: 'Diadema' },
    { '@type': 'City', name: 'Taboão da Serra' },
  ],
  hasMap: 'https://share.google/Mqi0TYJoGCN7QGDo6',
  sameAs: [
    'https://www.instagram.com/cobersystem',
    'https://www.youtube.com/@cobersystem',
    'https://share.google/Mqi0TYJoGCN7QGDo6',
  ],
};

