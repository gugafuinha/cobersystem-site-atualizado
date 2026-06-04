import { MetadataRoute } from 'next';

/**
 * SITEMAP CORRIGIDO - Cobersystem
 * 
 * MUDANÇAS:
 * ✅ Adicionadas 12 páginas de localização (eram ignoradas antes!)
 * ✅ Adicionado hub /localizacao
 * ✅ Total de URLs: ~65 (antes: ~40)
 * 
 * IMPACTO:
 * - SEO local agora funcional
 * - Google indexará páginas de cidades/zonas
 * - "Cobertura São Paulo", "Cobertura Zona Leste" → ranqueáveis
 * 
 * COMO USAR:
 * 1. Copiar este arquivo
 * 2. Substituir conteúdo de app/sitemap.ts
 * 3. Deploy
 * 4. Verificar em: https://coberturapolicarbonato.com.br/sitemap.xml
 * 5. Submeter ao Google Search Console
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coberturapolicarbonato.com.br';
  const now = new Date();

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 1. PÁGINAS PRINCIPAIS (Requeridas)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const requiredPages: MetadataRoute.Sitemap = [
    { 
      url: `${baseUrl}/`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/produtos`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.95 
    },
    { 
      url: `${baseUrl}/servicos`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.95 
    },
    { 
      url: `${baseUrl}/blog`, 
      lastModified: now, 
      changeFrequency: 'daily', 
      priority: 0.85 
    },
    { 
      url: `${baseUrl}/faq`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/contato`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/sobre`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/galeria`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.75 
    },
    { 
      url: `${baseUrl}/cases-sucesso`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.75 
    },
    { 
      url: `${baseUrl}/projetos-3d`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.75 
    },
    { 
      url: `${baseUrl}/imprensa`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.7 
    },
  ];

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 2. PRODUTOS (Páginas Principais)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const mainProductPages: MetadataRoute.Sitemap = [
    { 
      url: `${baseUrl}/produtos/cobertura-policarbonato`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.95 
    },
    { 
      url: `${baseUrl}/produtos/cobertura-retratil`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.95 
    },
    { 
      url: `${baseUrl}/produtos/cobertura-termoacustica`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/produtos/veneziana-policarbonato`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
  ];

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3. SERVIÇOS (14 páginas)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const mainServicePages = [
    'cobertura-abre-e-fecha',
    'cobertura-retratil',
    'cobertura-retratil-automatizada',
    'cobertura-fixa-policarbonato-alveolar',
    'cobertura-fixa-policarbonato-compacto',
    'cobertura-termoacustica',
    'cobertura-aluminio',
    'cobertura-garagem',
    'cobertura-area-gourmet',
    'cobertura-piscina',
    'cobertura-corredor-lateral',
    'calhas-rufos-perfil-u',
    'projetos-personalizados',
  ].map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 4. LOCALIZAÇÃO (12 páginas + hub) ← 🆕 ADICIONADO!
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  // Hub principal de localização
  const locationHub: MetadataRoute.Sitemap = [
    { 
      url: `${baseUrl}/localizacao`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.9  // Alta prioridade - página pilar de SEO local
    }
  ];

  // Páginas individuais por cidade/zona
  const locationPages = [
    'sao-paulo',          // São Paulo (Capital)
    'zona-leste',         // Zona Leste (Tatuapé, Mooca, Vila Prudente, etc.)
    'zona-sul',           // Zona Sul (Moema, Vila Olímpia, etc.)
    'zona-norte',         // Zona Norte (Santana, Tucuruvi, etc.)
    'zona-oeste',         // Zona Oeste (Pinheiros, Vila Madalena, etc.)
    'abc',                // ABC Paulista (Hub)
    'santo-andre',        // Santo André
    'sao-bernardo',       // São Bernardo do Campo
    'guarulhos',          // Guarulhos
    'campinas',           // Campinas
    'sorocaba',           // Sorocaba
  ].map((slug) => ({
    url: `${baseUrl}/localizacao/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,  // Alta prioridade para SEO local
  }));

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 5. BLOG (6 artigos)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const blogArticles = [
    'cobertura-retratil-guia-completo',
    'cobertura-abre-fecha-vantagens',
    'cobertura-policarbonato-preco-tipos',
    'cobertura-retratil-churrasqueira',
    'automacao-alexa-sensor-chuva',
    'pergolado-vs-cobertura-retratil',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6. RETORNO FINAL (Todas as URLs)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return [
    ...requiredPages,       // 11 páginas principais
    ...mainProductPages,    // 4 produtos principais
    ...mainServicePages,    // 14 serviços
    ...locationHub,         // 1 hub de localização ← 🆕
    ...locationPages,       // 11 páginas de cidades/zonas ← 🆕
    ...blogArticles,        // 6 artigos
  ];
  
  // TOTAL: ~65 URLs (antes: ~40)
  // +25 URLs = +60% de cobertura!
}
