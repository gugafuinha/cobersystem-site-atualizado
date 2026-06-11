/**
 * Cidades com páginas locais da linha cobertura para garagem
 * (rota: /produtos/cobertura-garagem/em/[cidade])
 */
export type CidadeGaragemSlug =
  | 'guarulhos'
  | 'sao-paulo'
  | 'santo-andre'
  | 'osasco';

export interface CidadeGaragemData {
  slug: CidadeGaragemSlug;
  nome: string;
  paragrafos: string[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_COBERTURA_GARAGEM: CidadeGaragemData[] = [
  {
    slug: 'guarulhos',
    nome: 'Guarulhos',
    paragrafos: [
      'Em Guarulhos, cidade com intensa atividade logística e residencial, a cobertura para garagem em policarbonato resolve a proteção de 1 a 2 carros com praticidade e durabilidade — sem obras pesadas nem estrutura de concreto.',
      'O policarbonato compacto UV é a escolha mais indicada para garagens em Guarulhos: leve, translúcido, resistente ao calor e às chuvas volumosas da região, protegendo o veículo contra raios UV, pássaros e detritos sem criar ambiente escuro.',
      'A Cobersystem atende Guarulhos com medição gratuita, projeto de cobertura sob medida para garagem individual ou coletiva e instalação em estrutura de alumínio ou aço galvanizado, com acabamento profissional.',
    ],
    metaDescription:
      'Cobertura para garagem em Guarulhos: policarbonato para 1 ou 2 carros, alumínio anodizado, proteção UV. Projeto sob medida. Orçamento grátis.',
    keywords:
      'cobertura garagem Guarulhos, cobertura 2 carros Guarulhos, policarbonato garagem Guarulhos, telhado garagem Guarulhos SP',
  },
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Em São Paulo, onde garagens em casas e condomínios enfrentam sol intenso, chuvas pesadas e limitação de espaço, a cobertura em policarbonato para garagem oferece proteção eficiente sem comprometer a estética da fachada.',
      'A solução para 1 ou 2 carros utiliza policarbonato compacto ou alveolar com estrutura em alumínio anodizado, garantindo translucidez, proteção UV e resistência ao impacto — com modelos que atendem de garagens simples a entradas cobertas de condomínio.',
      'A Cobersystem projeta e instala coberturas para garagem em toda São Paulo, com atendimento especializado nos bairros Tatuapé, Brooklin e Vila Mariana, adaptando cada projeto ao espaço disponível e ao perfil da fachada do imóvel.',
    ],
    metaDescription:
      'Cobertura para garagem em São Paulo: policarbonato para 1 ou 2 carros, alumínio anodizado. Projeto sob medida e visita técnica grátis na capital.',
    keywords:
      'cobertura garagem São Paulo, cobertura 2 carros SP, policarbonato garagem São Paulo, telhado garagem SP cobertura',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André e no ABC Paulista, a cobertura para garagem em policarbonato se destaca pela relação custo-benefício: instalação rápida, manutenção mínima e proteção completa do veículo contra sol, chuva e umidade.',
      'Para garagens de 1 ou 2 carros, o policarbonato compacto UV translúcido é a opção favorita — mantém a área iluminada naturalmente, protege contra raios UV que oxidam a pintura e suporta carga de chuva sem deformação.',
      'Nossa equipe visita o imóvel em Santo André para dimensionar a cobertura de acordo com o tamanho da garagem, o recuo de frente e as exigências da prefeitura, garantindo projeto aprovado e esteticamente harmonioso.',
    ],
    metaDescription:
      'Cobertura para garagem em Santo André: policarbonato 1 ou 2 carros, alumínio, proteção UV. Projeto sob medida no ABC Paulista. Orçamento grátis.',
    keywords:
      'cobertura garagem Santo André, cobertura 2 carros ABC Paulista, policarbonato garagem Santo André, telhado garagem ABC SP',
  },
  {
    slug: 'osasco',
    nome: 'Osasco',
    paragrafos: [
      'Em Osasco, onde o dinamismo urbano combina residências compactas com alto fluxo de veículos, a cobertura para garagem em policarbonato é a alternativa prática para proteger o carro sem aumentar excessivamente o custo da obra.',
      'O sistema com policarbonato compacto de 4mm ou 6mm e perfis em alumínio anodizado resolve garagens de 1 a 2 carros com instalação limpa, sem fundações pesadas ou vigas de concreto, mantendo a leveza visual necessária em lotes urbanos.',
      'A Cobersystem realiza medição e orçamento gratuitos em Osasco, propondo coberturas para garagem com perfis de alumínio e policarbonato alinhados às normas municipais e ao padrão de acabamento de cada residência.',
    ],
    metaDescription:
      'Cobertura para garagem em Osasco: policarbonato para 1 ou 2 carros, alumínio anodizado, instalação rápida. Projeto sob medida. Orçamento grátis.',
    keywords:
      'cobertura garagem Osasco, cobertura 2 carros Osasco SP, policarbonato garagem Osasco, telhado garagem Osasco',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_GARAGEM.map((c) => [c.slug, c]),
) as Record<CidadeGaragemSlug, CidadeGaragemData>;

export function getCidadeGaragem(slug: string): CidadeGaragemData | undefined {
  return mapaPorSlug[slug as CidadeGaragemSlug];
}

export function getSlugsCidadesGaragem(): CidadeGaragemSlug[] {
  return CIDADES_COBERTURA_GARAGEM.map((c) => c.slug);
}

/** Bairros de São Paulo com páginas locais para cobertura de garagem */
export const SP_BAIRROS_GARAGEM = [
  { slug: 'tatuape', nome: 'Tatuapé' },
  { slug: 'brooklin', nome: 'Brooklin' },
  { slug: 'vila-mariana', nome: 'Vila Mariana' },
] as const;

export type SpBairroGaragemSlug = (typeof SP_BAIRROS_GARAGEM)[number]['slug'];

export function getSlugsBairrosGaragem(): SpBairroGaragemSlug[] {
  return SP_BAIRROS_GARAGEM.map((b) => b.slug);
}

export function getBairroGaragem(
  slug: string,
): { slug: SpBairroGaragemSlug; nome: string } | undefined {
  const b = SP_BAIRROS_GARAGEM.find((x) => x.slug === slug);
  return b ? { slug: b.slug, nome: b.nome } : undefined;
}

export interface SeoBairroGaragem {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  paragrafos: [string, string, string];
}

export const CONTEUDO_BAIRROS_GARAGEM: Record<
  SpBairroGaragemSlug,
  SeoBairroGaragem
> = {
  tatuape: {
    metaTitle: 'Cobertura para Garagem Tatuapé, SP | Cobersystem',
    metaDescription:
      'Cobertura para garagem no Tatuapé: policarbonato para 1 ou 2 carros, alumínio anodizado, instalação rápida. Projeto sob medida na Zona Leste SP.',
    keywords:
      'cobertura garagem Tatuapé, policarbonato garagem Tatuapé SP, cobertura 2 carros Tatuapé, telhado garagem Zona Leste',
    paragrafos: [
      'No Tatuapé, bairro com alta densidade de casas, sobrados e pequenos comércios na Zona Leste de São Paulo, a cobertura para garagem em policarbonato é solução rápida e eficiente para proteger 1 ou 2 carros sem grandes reformas estruturais.',
      'O sistema com policarbonato compacto UV e perfis em alumínio anodizado adapta-se a lotes estreitos típicos do Tatuapé, com inclinação adequada para escoamento de chuva e visual clean que não compromete a fachada do imóvel.',
      'A Cobersystem atende o Tatuapé e a Zona Leste com medição no local, projeto detalhado e instalação profissional em 1 a 2 dias úteis, incluindo calhas e acabamentos em alumínio para resultado durável e esteticamente aprovado.',
    ],
  },
  brooklin: {
    metaTitle: 'Cobertura para Garagem Brooklin, SP | Cobersystem',
    metaDescription:
      'Cobertura para garagem no Brooklin: policarbonato cristal premium para 1 ou 2 carros. Acabamento alumínio anodizado de alto padrão. Orçamento SP.',
    keywords:
      'cobertura garagem Brooklin, policarbonato garagem Brooklin SP, cobertura 2 carros Brooklin, telhado garagem Zona Sul',
    paragrafos: [
      'No Brooklin, bairro de perfil corporativo e residencial de alto padrão na Zona Sul de São Paulo, coberturas para garagem em policarbonato são especificadas com acabamento premium — perfis em alumínio anodizado e policarbonato compacto cristal de alta transmissão de luz.',
      'A solução para 1 ou 2 carros no Brooklin prioriza estética e funcionalidade: proteção UV completa, resistência a chuvas intensas e visual integrado à arquitetura contemporânea dos imóveis da região, sem comprometer a fachada social.',
      'Projetamos e instalamos coberturas para garagem no Brooklin com visita técnica prévia, escolha de espessura e tonalidade do policarbonato de acordo com a orientação solar e as preferências do cliente, com garantia de instalação.',
    ],
  },
  'vila-mariana': {
    metaTitle: 'Cobertura para Garagem Vila Mariana, SP | Cobersystem',
    metaDescription:
      'Cobertura para garagem na Vila Mariana: policarbonato para 1 ou 2 carros, alumínio anodizado. Projeto sob medida na Zona Sul SP. Orçamento grátis.',
    keywords:
      'cobertura garagem Vila Mariana, policarbonato garagem Vila Mariana SP, cobertura 2 carros Zona Sul, telhado garagem Vila Mariana',
    paragrafos: [
      'Na Vila Mariana, bairro residencial e comercial bem localizado na Zona Sul de São Paulo, garagens em casas e condomínios horizontais se beneficiam de coberturas em policarbonato que protegem o veículo com baixo custo de instalação e manutenção.',
      'O policarbonato compacto UV, combinado com estrutura em alumínio, oferece proteção durável contra sol e chuva, com translucidez que mantém a área de garagem bem iluminada — ideal para imóveis com recuo frontal limitado.',
      'A Cobersystem atende a Vila Mariana e adjacências com medição, projeto personalizado e instalação de cobertura para garagem adequada às normas de cada condomínio ou às exigências da prefeitura para lotes urbanos.',
    ],
  },
};
