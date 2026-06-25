import Script from 'next/script';

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  '@id': string;
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
  alternateName?: string;
  description?: string;
  image?: string;
  '@id': string;
  url: string;
  telephone: string;
  email?: string;
  priceRange: string;
  currenciesAccepted?: string;
  paymentAccepted?: string;
  /** Omitir para Service Area Business sem endereço físico */
  address?: {
    '@type': string;
    addressRegion?: string;
    addressCountry?: string;
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
  hasOfferCatalog?: {
    '@type': string;
    name: string;
    itemListElement: {
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
        url: string;
      };
    }[];
  };
  sameAs?: string[];
}

interface MerchantReturnPolicy {
  '@type': 'MerchantReturnPolicy';
  applicableCountry: string;
  returnPolicyCategory: string;
  merchantReturnDays: number;
}

interface OfferShippingDetails {
  '@type': 'OfferShippingDetails';
  shippingRate: { '@type': 'MonetaryAmount'; value: string; currency: string };
  shippingDestination: { '@type': 'DefinedRegion'; addressCountry: string; addressRegion?: string };
  deliveryTime: {
    '@type': 'ShippingDeliveryTime';
    handlingTime: { '@type': 'QuantitativeValue'; minValue: number; maxValue: number; unitCode: string };
    transitTime: { '@type': 'QuantitativeValue'; minValue: number; maxValue: number; unitCode: string };
  };
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
    /** Valor numérico obrigatório pelo Google Merchant Listings */
    price: string;
    priceValidUntil?: string;
    availability: string;
    url: string;
    hasMerchantReturnPolicy?: MerchantReturnPolicy;
    shippingDetails?: OfferShippingDetails;
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

interface WebSiteSchema {
  '@context': string;
  '@type': string;
  '@id': string;
  name: string;
  alternateName?: string;
  url: string;
  description?: string;
  inLanguage: string;
  publisher: { '@id': string };
}

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'product' | 'faq' | 'breadcrumb' | 'website';
  data: OrganizationSchema | LocalBusinessSchema | ProductSchema | FAQSchema | BreadcrumbSchema | WebSiteSchema | any;
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
  '@id': 'https://www.coberturapolicarbonato.com.br/#organization',
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
  '@id': 'https://www.coberturapolicarbonato.com.br/#localbusiness',
  name: 'Cobersystem',
  alternateName: 'Cobersystem Soluções em Coberturas de Policarbonato',
  description: 'Especialista em coberturas retráteis e abre e fecha em policarbonato e alumínio em São Paulo e interior paulista. Coberturas motorizadas, telhados retráteis e pergolados bioclimáticos sob medida.',
  url: 'https://www.coberturapolicarbonato.com.br',
  telephone: '+5511943615079',
  email: 'vendas@cobersystem.com.br',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Pix, Cartão de Crédito, Transferência Bancária',
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
    { '@type': 'City', name: 'Campinas' },
    { '@type': 'City', name: 'Santo André' },
    { '@type': 'City', name: 'São Bernardo do Campo' },
    { '@type': 'City', name: 'Osasco' },
    { '@type': 'City', name: 'Sorocaba' },
    { '@type': 'City', name: 'Jundiaí' },
    { '@type': 'City', name: 'Americana' },
    { '@type': 'City', name: 'São José dos Campos' },
    { '@type': 'City', name: 'Ribeirão Preto' },
    { '@type': 'City', name: 'Bauru' },
    { '@type': 'City', name: 'São Carlos' },
    { '@type': 'City', name: 'Indaiatuba' },
    { '@type': 'City', name: 'Valinhos' },
    { '@type': 'City', name: 'Vinhedo' },
    { '@type': 'City', name: 'Sumaré' },
    { '@type': 'City', name: 'Atibaia' },
    { '@type': 'City', name: 'Bragança Paulista' },
    { '@type': 'City', name: 'Mogi das Cruzes' },
    { '@type': 'City', name: 'Jandira' },
    { '@type': 'City', name: 'Itatiba' },
    { '@type': 'City', name: 'Paulínia' },
    { '@type': 'City', name: 'Salto' },
    { '@type': 'City', name: 'Itu' },
    { '@type': 'City', name: 'Limeira' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Coberturas em Policarbonato',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cobertura Retrátil de Policarbonato',
          url: 'https://www.coberturapolicarbonato.com.br/produtos/cobertura-retratil',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cobertura Abre e Fecha',
          url: 'https://www.coberturapolicarbonato.com.br/produtos/cobertura-abre-e-fecha',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cobertura Fixa em Policarbonato',
          url: 'https://www.coberturapolicarbonato.com.br/produtos/cobertura-policarbonato',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pergolado Bioclimático',
          url: 'https://www.coberturapolicarbonato.com.br/servicos/pergolado-bioclimatico',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100083596136158',
    'https://www.instagram.com/cobersystem',
  ],
};

export const websiteSchema: WebSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.coberturapolicarbonato.com.br/#website',
  name: 'Cobersystem — Soluções em Coberturas',
  alternateName: 'Cobersystem Coberturas',
  url: 'https://www.coberturapolicarbonato.com.br',
  description:
    'Site oficial da Cobersystem — especialista em coberturas retráteis em policarbonato com automação via Alexa e sensor de chuva. Atendemos toda a Grande São Paulo.',
  inLanguage: 'pt-BR',
  publisher: { '@id': 'https://www.coberturapolicarbonato.com.br/#organization' },
};

