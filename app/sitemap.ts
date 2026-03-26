import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coberturapolicarbonato.com.br';
  const now = new Date();
  
  // Páginas principais (prioridade máxima)
  const mainPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Páginas de serviços (alta prioridade - páginas de venda)
  const servicePages = [
    'cobertura-abre-e-fecha',
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
  ].map(slug => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  // Páginas de produtos
  const productPages = [
    {
      url: `${baseUrl}/produtos`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produtos/cobertura-retratil`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/produtos/cobertura-fixa`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/produtos/cobertura-retratil/policarbonato-compacto-2mm`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produtos/cobertura-retratil/policarbonato-alveolar`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produtos/cobertura-retratil/automacao-inteligente`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produtos/cobertura-fixa/fixa-compacto`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produtos/cobertura-fixa/fixa-alveolar`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Páginas de localização (SEO local)
  const locationPages = [
    'sao-paulo',
    'zona-leste',
    'zona-sul',
    'zona-oeste',
    'zona-norte',
    'abc',
    'guarulhos',
    'santo-andre',
    'sao-bernardo',
    'campinas',
    'sorocaba',
  ].map(slug => ({
    url: `${baseUrl}/localizacao/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Artigos do blog
  const blogArticles = [
    'cobertura-retratil-guia-completo',
    'cobertura-abre-fecha-vantagens',
    'cobertura-policarbonato-preco-tipos',
    'cobertura-retratil-churrasqueira',
    'automacao-alexa-sensor-chuva',
    'pergolado-vs-cobertura-retratil',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Páginas secundárias
  const secondaryPages = [
    {
      url: `${baseUrl}/sobre`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  return [
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/imprensa`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    ...mainPages,
    ...servicePages,
    ...productPages,
    ...locationPages,
    ...blogArticles,
    ...secondaryPages,
  ];
}

