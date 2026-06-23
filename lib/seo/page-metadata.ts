import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    images?: string[];
  };
}

export const pageMetadata: Record<string, PageMetadata> = {
  // PRODUTOS
  'cobertura-retratil': {
    title: 'Cobertura Retrátil de Policarbonato: Preço/m² e Modelos | SP',
    description: 'Cobertura retrátil que abre e fecha com Alexa e sensor de chuva automático. De R$ 800 a R$ 1.500/m². Instalação em 48h. Garantia 2 anos. Orçamento grátis ☎ (11) 94361-5079',
    keywords: ['cobertura retrátil', 'cobertura automática', 'cobertura alexa', 'cobertura sensor chuva', 'cobertura abre fecha'],
    openGraph: {
      title: 'Cobertura Retrátil com Automação via Alexa | Cobersystem',
      description: 'Sistema inteligente que abre e fecha sozinho. Sensor de chuva automático. A partir de R$ 800/m².',
      images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg']
    }
  },

  'cobertura-policarbonato': {
    title: 'Coberturas em Policarbonato SP | Preço/m² e Modelos | Cobersystem',
    description: 'Coberturas em policarbonato alveolar e compacto para garagem, área gourmet e piscina em SP. A partir de R$ 450/m². Proteção UV 99%, instalação em 2 dias. Orçamento grátis!',
    keywords: ['coberturas em policarbonato', 'cobertura policarbonato', 'cobertura fixa', 'policarbonato alveolar', 'policarbonato compacto', 'cobertura garagem'],
    openGraph: {
      title: 'Coberturas em Policarbonato SP | Cobersystem',
      description: 'Alveolar ou compacto, sob medida. A partir de R$ 450/m² com garantia de 2 anos.',
      images: ['https://www.coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg']
    }
  },

  'cobertura-termoacustica': {
    title: 'Cobertura Termoacústica | Reduz 95% Ruído e 10°C Calor | SP',
    description: 'Telha termoacústica sanduíche que bloqueia 95% do ruído da chuva e reduz até 10°C. Ideal para área gourmet e varanda. De R$ 650 a R$ 1.100/m². Garantia 2 anos.',
    keywords: ['cobertura termoacustica', 'telha sanduiche', 'telha termoacustica', 'cobertura sem barulho', 'isolamento termico'],
    openGraph: {
      title: 'Cobertura Termoacústica | Sem Barulho e Calor | Cobersystem',
      description: 'Máximo conforto térmico e acústico. Perfeita para áreas gourmet.',
      images: ['https://www.coberturapolicarbonato.com.br/images/produtos/termoacustica.jpg']
    }
  },

  'veneziana-policarbonato': {
    title: 'Veneziana em Policarbonato | Controle Total de Luz | SP',
    description: 'Sistema de veneziana com lâminas móveis em policarbonato. Controle preciso de luminosidade e ventilação. De R$ 550 a R$ 950/m². Instalação rápida. Orçamento grátis!',
    keywords: ['veneziana policarbonato', 'veneziana movel', 'controle luminosidade', 'veneziana aluminio'],
    openGraph: {
      title: 'Veneziana em Policarbonato Móvel | Cobersystem',
      description: 'Lâminas ajustáveis para controle total de luz e ar.',
      images: ['https://www.coberturapolicarbonato.com.br/images/produtos/veneziana.jpg']
    }
  },

  // SERVIÇOS
  'cobertura-area-gourmet': {
    title: 'Cobertura para Área Gourmet | Projeto Completo | SP',
    description: 'Cobertura completa para área gourmet em policarbonato ou termoacústica. De R$ 12.000 a R$ 25.000 (15-30m²). Projeto grátis, instalação em 3 dias. ☎ (11) 94361-5079',
    keywords: ['cobertura area gourmet', 'cobertura churrasqueira', 'teto area gourmet', 'cobertura externa'],
    openGraph: {
      title: 'Cobertura para Área Gourmet Completa | Cobersystem',
      description: 'Transforme sua área externa. Projeto personalizado + garantia 2 anos.',
      images: ['https://www.coberturapolicarbonato.com.br/images/servicos/area-gourmet.jpg']
    }
  },

  'cobertura-piscina': {
    title: 'Cobertura para Piscina | Retrátil ou Fixa | SP',
    description: 'Cobertura retrátil ou fixa para piscina. Proteção UV 99%, mantém água limpa, uso em qualquer clima. De R$ 15.000 a R$ 35.000. Automação opcional. Orçamento grátis!',
    keywords: ['cobertura piscina', 'cobertura piscina retratil', 'teto piscina', 'protecao piscina'],
    openGraph: {
      title: 'Cobertura para Piscina Retrátil | Cobersystem SP',
      description: 'Use sua piscina o ano todo. Proteção total + economia com aquecimento.',
      images: ['https://www.coberturapolicarbonato.com.br/images/servicos/piscina.jpg']
    }
  }
};

const SERVICOS_SLUGS = new Set(['cobertura-area-gourmet', 'cobertura-piscina']);

// Função helper para gerar metadata
export function generatePageMetadata(pageKey: string): Metadata {
  const meta = pageMetadata[pageKey];
  
  if (!meta) {
    return {
      title: 'Cobersystem - Coberturas em Policarbonato',
      description: 'Coberturas retráteis e fixas em policarbonato com automação inteligente.'
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: meta.openGraph ? {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: meta.openGraph.images,
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Cobersystem'
    } : undefined,
    twitter: {
      card: 'summary_large_image',
      title: meta.openGraph?.title || meta.title,
      description: meta.openGraph?.description || meta.description,
      images: meta.openGraph?.images
    },
    alternates: {
      canonical: `https://www.coberturapolicarbonato.com.br/${
        pageKey === 'home'
          ? ''
          : `${SERVICOS_SLUGS.has(pageKey) ? 'servicos' : 'produtos'}/${pageKey}`
      }`
    }
  };
}
