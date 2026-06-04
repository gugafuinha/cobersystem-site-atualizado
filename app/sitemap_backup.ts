import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coberturapolicarbonato.com.br';
  const now = new Date();

  const requiredPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/produtos`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/servicos`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const mainProductPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/produtos/cobertura-policarbonato`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/produtos/cobertura-retratil`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/produtos/cobertura-termoacustica`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/produtos/veneziana-policarbonato`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

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

  return [...requiredPages, ...mainProductPages, ...mainServicePages, ...blogArticles];
}

