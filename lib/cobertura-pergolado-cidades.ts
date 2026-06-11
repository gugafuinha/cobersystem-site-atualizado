/**
 * Cidades com páginas locais da linha cobertura pergolado
 * (rota: /produtos/cobertura-pergolado/em/[cidade])
 */
export type CidadePergoladoSlug =
  | 'barueri'
  | 'sao-paulo'
  | 'campinas'
  | 'santo-andre';

export interface CidadePergoladoData {
  slug: CidadePergoladoSlug;
  nome: string;
  paragrafos: string[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_COBERTURA_PERGOLADO: CidadePergoladoData[] = [
  {
    slug: 'barueri',
    nome: 'Barueri',
    paragrafos: [
      'Em Barueri e Alphaville, onde residências de alto padrão valorizam cada detalhe do projeto paisagístico, o pergolado bioclimático se tornou o elemento de destaque nas áreas externas — combinando design sofisticado com controle inteligente de ventilação e luz.',
      'O sistema com lâminas orientáveis em alumínio anodizado permite regular a abertura conforme a posição do sol e a intensidade do vento, criando um microclima agradável na varanda ou área gourmet sem comprometer a estética arquitetônica do imóvel.',
      'A Cobersystem projeta e instala pergolados bioclimáticos em Barueri e toda a região de Alphaville com visita técnica, personalização de acabamentos e integração com automação residencial — Alexa, Google Home ou KNX.',
    ],
    metaDescription:
      'Pergolado bioclimático em Barueri e Alphaville: lâminas orientáveis alumínio, automação Alexa, alto padrão. Projeto sob medida. Orçamento grátis.',
    keywords:
      'pergolado bioclimático Barueri, pergolado Alphaville, cobertura pergolado Barueri, pergolado alumínio Alphaville SP',
  },
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Em São Paulo, varandas de apartamentos de alto padrão e áreas externas de casas em condomínios fechados pedem coberturas que unam funcionalidade climática e sofisticação visual — e o pergolado bioclimático responde a essa demanda com excelência.',
      'O sistema de lâminas motorizadas adapta a cobertura em tempo real: fecha para proteger da chuva, abre parcialmente para ventilação ou cria sombra controlada nos dias de sol intenso da capital, sem abrir mão do visual limpo e contemporâneo.',
      'A Cobersystem atende toda São Paulo com projeto e instalação de pergolados bioclimáticos em residências, terraços e áreas comuns de empreendimentos, com atendimento especializado nos bairros Jardins, Morumbi e Pinheiros.',
    ],
    metaDescription:
      'Pergolado bioclimático em São Paulo: lâminas orientáveis para varandas e áreas externas de alto padrão. Automação residencial. Visita técnica grátis SP.',
    keywords:
      'pergolado bioclimático São Paulo, pergolado lâminas São Paulo, cobertura pergolado SP, pergolado alto padrão São Paulo',
  },
  {
    slug: 'campinas',
    nome: 'Campinas',
    paragrafos: [
      'Em Campinas, onde o clima apresenta invernos frios e verões quentes e úmidos, o pergolado bioclimático oferece controle térmico e proteção solar que nenhuma cobertura fixa tradicional consegue proporcionar.',
      'As lâminas orientáveis permitem capturar o vento predominante da região nos períodos quentes, criando ventilação natural que reduz a sensação térmica sem o custo energético de climatizadores artificiais.',
      'Atendemos residências e empreendimentos corporativos em Campinas e na região metropolitana com projetos personalizados de pergolado bioclimático, incluindo integração com iluminação LED e fechamento automático para chuva.',
    ],
    metaDescription:
      'Pergolado bioclimático em Campinas: controle térmico, lâminas orientáveis e proteção chuva. Projeto personalizado para residências e empresas. Orçamento.',
    keywords:
      'pergolado bioclimático Campinas, pergolado lâminas Campinas SP, cobertura pergolado Campinas, pergolado alumínio interior SP',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André e no ABC Paulista, o pergolado bioclimático é a solução que valoriza áreas externas de casas e coberturas de edifícios, transformando espaços descobertos em ambientes confortáveis para uso durante todo o ano.',
      'Com estrutura em alumínio anodizado de alta resistência e lâminas com regulagem eletrônica, o sistema garante proteção total em dias de chuva e ventilação ideal nos dias quentes, sem necessidade de manutenção frequente.',
      'Nossa equipe realiza visita técnica em Santo André para dimensionar o projeto de acordo com a orientação solar, vento predominante e integração com a arquitetura do imóvel, com acabamentos personalizados para alto padrão.',
    ],
    metaDescription:
      'Pergolado bioclimático em Santo André: alumínio anodizado, lâminas motorizadas, resistente e elegante. Projeto sob medida no ABC Paulista. Orçamento grátis.',
    keywords:
      'pergolado bioclimático Santo André, pergolado alumínio ABC Paulista, cobertura pergolado Santo André, pergolado motorizado ABC SP',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_PERGOLADO.map((c) => [c.slug, c]),
) as Record<CidadePergoladoSlug, CidadePergoladoData>;

export function getCidadePergolado(
  slug: string,
): CidadePergoladoData | undefined {
  return mapaPorSlug[slug as CidadePergoladoSlug];
}

export function getSlugsCidadesPergolado(): CidadePergoladoSlug[] {
  return CIDADES_COBERTURA_PERGOLADO.map((c) => c.slug);
}

/** Bairros de São Paulo com páginas locais para cobertura pergolado */
export const SP_BAIRROS_PERGOLADO = [
  { slug: 'jardins', nome: 'Jardins' },
  { slug: 'morumbi', nome: 'Morumbi' },
  { slug: 'pinheiros', nome: 'Pinheiros' },
] as const;

export type SpBairroPergoladoSlug =
  (typeof SP_BAIRROS_PERGOLADO)[number]['slug'];

export function getSlugsBairrosPergolado(): SpBairroPergoladoSlug[] {
  return SP_BAIRROS_PERGOLADO.map((b) => b.slug);
}

export function getBairroPergolado(
  slug: string,
): { slug: SpBairroPergoladoSlug; nome: string } | undefined {
  const b = SP_BAIRROS_PERGOLADO.find((x) => x.slug === slug);
  return b ? { slug: b.slug, nome: b.nome } : undefined;
}

export interface SeoBairroPergolado {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  paragrafos: [string, string, string];
}

export const CONTEUDO_BAIRROS_PERGOLADO: Record<
  SpBairroPergoladoSlug,
  SeoBairroPergolado
> = {
  jardins: {
    metaTitle: 'Pergolado Bioclimático Jardins, SP | Cobersystem',
    metaDescription:
      'Pergolado bioclimático nos Jardins: lâminas orientáveis em alumínio premium para residências de alto padrão. Automação Alexa. Projeto e orçamento SP.',
    keywords:
      'pergolado bioclimático Jardins, pergolado Jardins SP, cobertura pergolado Jardins São Paulo, pergolado alumínio Jardins',
    paragrafos: [
      'Nos Jardins, bairro símbolo do alto padrão residencial de São Paulo, o pergolado bioclimático integra-se ao projeto arquitetônico com naturalidade, elevando o padrão estético das varandas e jardins sem comprometer o visual clean das residências.',
      'O sistema de lâminas orientáveis em alumínio anodizado, disponível em acabamentos que harmonizam com qualquer paleta de cores, oferece controle preciso de luz e ventilação — transformando a área externa em ambiente de uso pleno durante todo o ano.',
      'A Cobersystem atende os Jardins com consultoria técnica especializada, apresentação de amostras e projeto 3D para aprovação visual antes da instalação, garantindo resultado alinhado ao padrão arquitetônico da região.',
    ],
  },
  morumbi: {
    metaTitle: 'Pergolado Bioclimático Morumbi, SP | Cobersystem',
    metaDescription:
      'Pergolado bioclimático no Morumbi: alumínio premium, lâminas motorizadas para mansões e condomínios de alto padrão. Automação integrada. Orçamento SP.',
    keywords:
      'pergolado bioclimático Morumbi, pergolado Morumbi SP, cobertura pergolado Morumbi São Paulo, pergolado alto padrão Morumbi',
    paragrafos: [
      'No Morumbi, mansões e condomínios fechados de alto padrão optam pelo pergolado bioclimático como solução definitiva para coberturas de varandas e áreas externas — pela sofisticação do sistema e pela durabilidade do alumínio anodizado.',
      'As lâminas motorizadas se adaptam automaticamente às condições climáticas com sensor de chuva e vento, ou podem ser controladas via aplicativo ou Alexa, oferecendo conforto total sem necessidade de intervenção manual.',
      'Instalamos pergolados bioclimáticos no Morumbi com projeto personalizado ao nível arquitetônico dos imóveis da região, incluindo integração com iluminação embutida, aquecedores e sistemas de automação já existentes.',
    ],
  },
  pinheiros: {
    metaTitle: 'Pergolado Bioclimático Pinheiros, SP | Cobersystem',
    metaDescription:
      'Pergolado bioclimático em Pinheiros: design contemporâneo com lâminas orientáveis para varandas e terraços. Projeto sob medida na Zona Oeste SP.',
    keywords:
      'pergolado bioclimático Pinheiros, pergolado Pinheiros SP, cobertura pergolado Pinheiros São Paulo, pergolado contemporâneo Zona Oeste',
    paragrafos: [
      'Em Pinheiros, bairro que combina arquitetura contemporânea com alto padrão residencial, o pergolado bioclimático atende à demanda por coberturas funcionais e esteticamente sofisticadas para varandas, terraços e jardins.',
      'O design minimalista do sistema, com perfis estreitos e lâminas em alumínio de acabamento fosco ou brilhante, harmoniza-se com a estética moderna das residências de Pinheiros, criando espaços externos de alto valor visual.',
      'A Cobersystem realiza visita técnica em Pinheiros para avaliar orientação solar, incidência de vento e dimensões do espaço, propondo o sistema de pergolado ideal com integração a automação residencial e acabamentos personalizados.',
    ],
  },
};
