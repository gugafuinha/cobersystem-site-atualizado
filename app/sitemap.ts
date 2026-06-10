import { MetadataRoute } from 'next';
import { getSlugsCidadesAbreEFecha } from '@/lib/cobertura-abre-e-fecha-cidades';
import { getSlugsCidadesPolicarbonato } from '@/lib/cobertura-policarbonato-cidades';
import { getSlugsCidadesRetratil } from '@/lib/cobertura-retratil-cidades';
import { getSlugsCidadesTermoacustica } from '@/lib/cobertura-termoacustica-cidades';
import { getSlugsBairrosSaoPaulo } from '@/lib/sao-paulo-bairros';
import { getImageUrls } from '@/lib/seo/image-sitemap';

// Pré-carrega imagens uma vez por build
const IMG = {
  retratil:       getImageUrls('images/produtos/cobertura-retratil'),
  policarbonato:  getImageUrls('images/produtos/cobertura-policarbonato'),
  termoacustica:  getImageUrls('images/produtos/cobertura-termoacustica'),
  veneziana:      getImageUrls('images/produtos/veneziana'),
  cases:          getImageUrls('images/cases-antes-depois'),
  projetos:       getImageUrls('images/projetos'),
  blog:           getImageUrls('images/blog'),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.coberturapolicarbonato.com.br';
  const now = new Date();

  const requiredPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,             lastModified: now, changeFrequency: 'weekly',  priority: 1.0,  images: [...IMG.retratil.slice(0, 10), ...IMG.policarbonato.slice(0, 5)] },
    { url: `${baseUrl}/produtos`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/servicos`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/blog`,         lastModified: now, changeFrequency: 'daily',   priority: 0.85, images: IMG.blog },
    { url: `${baseUrl}/faq`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contato`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sobre`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/orcamento`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cases-sucesso`,lastModified: now, changeFrequency: 'monthly', priority: 0.8,  images: IMG.cases },
    { url: `${baseUrl}/galeria`,      lastModified: now, changeFrequency: 'monthly', priority: 0.75, images: [...IMG.projetos, ...IMG.retratil.slice(0, 20)] },
  ];

  const localizacaoPages: MetadataRoute.Sitemap = [
    'sao-paulo',
    'zona-leste',
    'zona-sul',
    'zona-norte',
    'zona-oeste',
    'guarulhos',
    'campinas',
    'santo-andre',
    'sao-bernardo',
    'sorocaba',
    'abc',
  ].map((slug) => ({
    url: `${baseUrl}/localizacao/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: slug === 'sao-paulo' ? 0.85 : 0.8,
  }));

  const coberturaPolicarbonatoLocal: MetadataRoute.Sitemap =
    getSlugsCidadesPolicarbonato().map((cidade) => ({
      url: `${baseUrl}/produtos/cobertura-policarbonato/em/${cidade}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  const coberturaRetratilLocal: MetadataRoute.Sitemap =
    getSlugsCidadesRetratil().map((cidade) => ({
      url: `${baseUrl}/produtos/cobertura-retratil/em/${cidade}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  const coberturaAbreEFechaLocal: MetadataRoute.Sitemap =
    getSlugsCidadesAbreEFecha().map((cidade) => ({
      url: `${baseUrl}/produtos/cobertura-abre-e-fecha/em/${cidade}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  const coberturaTermoacusticaLocal: MetadataRoute.Sitemap =
    getSlugsCidadesTermoacustica().map((cidade) => ({
      url: `${baseUrl}/produtos/cobertura-termoacustica/em/${cidade}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  const spBairrosProdutoPaths = [
    'cobertura-policarbonato',
    'cobertura-retratil',
    'cobertura-abre-e-fecha',
    'cobertura-termoacustica',
  ] as const;

  const saoPauloBairrosLocal: MetadataRoute.Sitemap = spBairrosProdutoPaths.flatMap(
    (produto) =>
      getSlugsBairrosSaoPaulo().map((bairro) => ({
        url: `${baseUrl}/produtos/${produto}/em/sao-paulo/${bairro}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      })),
  );

  const mainProductPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/produtos/cobertura-policarbonato`, lastModified: now, changeFrequency: 'weekly', priority: 0.95, images: IMG.policarbonato },
    { url: `${baseUrl}/produtos/cobertura-retratil`,      lastModified: now, changeFrequency: 'weekly', priority: 0.95, images: IMG.retratil },
    { url: `${baseUrl}/produtos/cobertura-abre-e-fecha`,  lastModified: now, changeFrequency: 'weekly', priority: 0.95, images: [...IMG.retratil, ...IMG.policarbonato] },
    { url: `${baseUrl}/produtos/cobertura-termoacustica`, lastModified: now, changeFrequency: 'weekly', priority: 0.9,  images: IMG.termoacustica },
    { url: `${baseUrl}/produtos/veneziana-policarbonato`, lastModified: now, changeFrequency: 'weekly', priority: 0.9,  images: IMG.veneziana },
  ];

  const mainServicePages = [
    'cobertura-abre-e-fecha',
    'cobertura-retratil',
    'cobertura-retratil-automatizada',
    'cobertura-policarbonato',
    'cobertura-fixa-policarbonato-alveolar',
    'cobertura-fixa-policarbonato-compacto',
    'cobertura-termoacustica',
    'cobertura-aluminio',
    'cobertura-garagem',
    'cobertura-area-gourmet',
    'cobertura-piscina',
    'cobertura-corredor-lateral',
    'cobertura-playground',
    'cobertura-jardim-de-inverno',
    'cobertura-pergolado',
    'projetos-personalizados',
    'cobertura-varanda-apartamento',
  ].map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogImageMap: Record<string, string> = {
    'cobertura-retratil-guia-completo':                       `${baseUrl}/images/blog/cobertura-retratil-area-gourmet.jpg`,
    'cobertura-abre-fecha-vantagens':                         `${baseUrl}/images/blog/cobertura-abre-fecha.jpg`,
    'cobertura-policarbonato-preco-tipos':                    `${baseUrl}/images/blog/cobertura-policarbonato-tipos.jpg`,
    'cobertura-retratil-churrasqueira':                       `${baseUrl}/images/blog/churrasqueira.jpg`,
    'automacao-alexa-sensor-chuva':                           `${baseUrl}/images/blog/automacao-alexa.jpg`,
    'pergolado-vs-cobertura-retratil':                        `${baseUrl}/images/blog/pergolado-vs-cobertura.jpg`,
    'cobertura-para-piscina-tipos-precos-guia':               `${baseUrl}/images/blog/cobertura-piscina-retratil.jpg`,
    'cobertura-area-gourmet-tipos-precos-guia':               `${baseUrl}/images/produtos/cobertura-retratil/intercalada/IMG_8455.jpg`,
    'teto-retratil-automatico-como-funciona-precos':          `${baseUrl}/images/blog/cobertura-retratil-area-gourmet.jpg`,
    'fechamento-de-varanda-tipos-precos':                     `${baseUrl}/images/blog/cobertura-abre-fecha.jpg`,
    'pergolado-bioclimatico-o-que-e-vale-a-pena-precos':      `${baseUrl}/images/blog/pergolado-vs-cobertura.jpg`,
    'toldo-retratil-vs-cobertura-retratil-qual-escolher':     `${baseUrl}/images/blog/cobertura-retratil-area-gourmet.jpg`,
  };

  const blogArticles = Object.entries(blogImageMap).map(([slug, img]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
    images: [img],
  }));

  return [
    ...requiredPages,
    ...localizacaoPages,
    ...mainProductPages,
    ...coberturaPolicarbonatoLocal,
    ...coberturaRetratilLocal,
    ...coberturaAbreEFechaLocal,
    ...coberturaTermoacusticaLocal,
    ...saoPauloBairrosLocal,
    ...mainServicePages,
    ...blogArticles,
  ];
}

