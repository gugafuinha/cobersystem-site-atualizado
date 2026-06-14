import { COBERSYSTEM_PRICING } from '@/lib/pricing';

const BASE_URL = 'https://www.coberturapolicarbonato.com.br';

// Blocos reutilizáveis exigidos pelo Google Merchant Listings
export const merchantReturnPolicy = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'BR',
  returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
  merchantReturnDays: 0,
};

export const shippingDetails = {
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
};

/** Offer para páginas de serviço — sem hasMerchantReturnPolicy nem shippingDetails,
 *  pois esses campos são exclusivos de Product/Merchant Listings e causam erros no GSC. */
export function buildServiceOffer(url: string, price: string) {
  return {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    price,
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url,
  };
}

export const productSchemas = {
  coberturaRetratilCompacto: {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Cobertura Retrátil Policarbonato Compacto 2mm',
    image: [
      `${BASE_URL}/images/produtos/cobertura-retratil/compacto/IMG_8096.jpg`,
      `${BASE_URL}/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg`,
      `${BASE_URL}/images/produtos/cobertura-retratil/compacto/capa.jpg`,
    ],
    description:
      'Cobertura retrátil em policarbonato compacto cristal 2mm, totalmente transparente. Sistema de abertura e fechamento com automação via Alexa e sensor de chuva. Ideal para máxima luminosidade sem perder proteção.',
    sku: 'COB-RET-COMP-2MM',
    brand: { '@type': 'Brand', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/produtos/cobertura-retratil/policarbonato-compacto-2mm`,
      priceCurrency: 'BRL',
      price: '1200',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Transmissão de Luz', value: '90%' },
      { '@type': 'PropertyValue', name: 'Proteção UV', value: '99%' },
      { '@type': 'PropertyValue', name: 'Automação', value: 'Alexa + Sensor de Chuva' },
    ],
  },

  coberturaRetratilGeral: {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Cobertura Retrátil em Policarbonato',
    image: [
      `${BASE_URL}/images/blog/cobertura-abre-fecha.jpg`,
      `${BASE_URL}/images/projetos/abre-fecha-alveolar-01.jpg`,
      `${BASE_URL}/images/projetos/abre-fecha-alveolar-02.jpg`,
      `${BASE_URL}/images/blog/cobertura-retratil-area-gourmet.jpg`,
    ],
    description:
      'Sistema de cobertura retrátil que abre e fecha com automação inteligente. Controle via Alexa, Google Home ou controle remoto. Sensor de chuva fecha automaticamente.',
    sku: 'COB-RET-GERAL',
    brand: { '@type': 'Brand', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/produtos/cobertura-retratil`,
      priceCurrency: 'BRL',
      price: '800',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },

  coberturaPolicarbonato: {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Cobertura Fixa em Policarbonato',
    image: [
      `${BASE_URL}/images/projetos/fixa-01.jpg`,
      `${BASE_URL}/images/projetos/fixa-02.jpg`,
      `${BASE_URL}/images/projetos/fixa-03.jpg`,
      `${BASE_URL}/images/projetos/fixa-04.jpg`,
    ],
    description:
      'Cobertura fixa em policarbonato alveolar ou compacto. Proteção permanente para garagens, áreas de serviço, varandas. Estrutura em alumínio com garantia de 10 anos.',
    sku: 'COB-FIXA-POLI',
    brand: { '@type': 'Brand', name: 'Cobersystem' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Cobertura Fixa Policarbonato Alveolar',
        url: `${BASE_URL}/servicos/cobertura-fixa-policarbonato-alveolar`,
        priceCurrency: 'BRL',
        price: String(COBERSYSTEM_PRICING.fixaAlveolar.min),
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        hasMerchantReturnPolicy: merchantReturnPolicy,
        shippingDetails,
      },
      {
        '@type': 'Offer',
        name: 'Cobertura Fixa Policarbonato Compacto',
        url: `${BASE_URL}/servicos/cobertura-fixa-policarbonato-compacto`,
        priceCurrency: 'BRL',
        price: String(COBERSYSTEM_PRICING.fixaCompacto.min),
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        hasMerchantReturnPolicy: merchantReturnPolicy,
        shippingDetails,
      },
    ],
  },

  coberturaTermoacustica: {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Cobertura Termoacústica',
    image: [
      `${BASE_URL}/images/produtos/cobertura-termoacustica/capa.jpg`,
      `${BASE_URL}/images/projetos/termoacustica-01.jpg`,
      `${BASE_URL}/images/projetos/termoacustica-02.jpg`,
      `${BASE_URL}/images/produtos/cobertura-termoacustica/IMG_8881.jpg`,
    ],
    description:
      'Telha sanduíche termoacústica. Reduz até 95% do ruído da chuva e mantém temperatura até 10°C mais baixa. Ideal para áreas gourmet.',
    sku: 'COB-TERMO',
    brand: { '@type': 'Brand', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/produtos/cobertura-termoacustica`,
      priceCurrency: 'BRL',
      price: '650',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },

  venezianaPolicarbonato: {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Veneziana em Policarbonato',
    image: [
      `${BASE_URL}/images/produtos/veneziana/veneziana.jpg`,
      `${BASE_URL}/images/projetos/veneziana-01.jpg`,
      `${BASE_URL}/images/produtos/veneziana/img_4740.jpg`,
      `${BASE_URL}/images/produtos/veneziana/img_4742.jpg`,
    ],
    description:
      'Sistema de veneziana em policarbonato para controle de luminosidade e ventilação. Lâminas móveis.',
    sku: 'VEN-POLI',
    brand: { '@type': 'Brand', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/produtos/veneziana-policarbonato`,
      priceCurrency: 'BRL',
      price: '550',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },

  coberturaAreaGourmet: {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Instalação de Cobertura para Área Gourmet',
    name: 'Cobertura para Área Gourmet',
    image: [
      `${BASE_URL}/images/blog/cobertura-retratil-area-gourmet.jpg`,
      `${BASE_URL}/images/projetos/abre-fecha-alveolar-01.jpg`,
      `${BASE_URL}/images/blog/churrasqueira.jpg`,
    ],
    description:
      'Instalação de cobertura em policarbonato para área gourmet. Proteção completa contra chuva e sol. Projeto personalizado com automação opcional.',
    provider: { '@type': 'LocalBusiness', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: '16000',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },

  coberturaPiscina: {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Instalação de Cobertura para Piscina',
    name: 'Cobertura para Piscina',
    image: [
      `${BASE_URL}/images/blog/cobertura-piscina-retratil.jpg`,
      `${BASE_URL}/images/projetos/abre-fecha-alveolar-02.jpg`,
      `${BASE_URL}/images/blog/cobertura-abre-fecha.jpg`,
    ],
    description:
      'Cobertura retrátil ou fixa para piscina em policarbonato. Proteção UV 99%, mantém água limpa. Sistema de abertura automatizado opcional.',
    provider: { '@type': 'LocalBusiness', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: '25000',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },

  coberturaPergolado: {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Instalação de Cobertura para Pergolado',
    name: 'Cobertura para Pergolado',
    image: [
      `${BASE_URL}/images/blog/pergolado-vs-cobertura.jpg`,
      `${BASE_URL}/images/projetos/abre-fecha-alveolar-03.jpg`,
      `${BASE_URL}/images/blog/cobertura-retratil-area-gourmet.jpg`,
    ],
    description:
      'Cobertura em policarbonato para pergolado. Sistema retrátil opcional com automação via Alexa. Proteção contra chuva sem perder luminosidade.',
    provider: { '@type': 'LocalBusiness', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: '12000',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },

  automacaoInteligente: {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Automação Inteligente para Cobertura',
    image: [
      `${BASE_URL}/images/blog/automacao-alexa.jpg`,
      `${BASE_URL}/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg`,
      `${BASE_URL}/images/blog/cobertura-abre-fecha.jpg`,
    ],
    description:
      'Sistema de automação para cobertura retrátil. Controle via Alexa, Google Home, controle remoto e sensor de chuva automático.',
    sku: 'AUTO-INT',
    brand: { '@type': 'Brand', name: 'Cobersystem' },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/produtos/cobertura-retratil/automacao-inteligente`,
      priceCurrency: 'BRL',
      price: '3500',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
    },
  },
};
