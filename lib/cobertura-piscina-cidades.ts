/**
 * Cidades com páginas locais da linha cobertura para piscina
 * (rota: /produtos/cobertura-piscina/em/[cidade])
 */
export type CidadePiscinaSlug =
  | 'barueri'
  | 'sao-paulo'
  | 'campinas'
  | 'santo-andre';

export interface CidadePiscinaData {
  slug: CidadePiscinaSlug;
  nome: string;
  paragrafos: string[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_COBERTURA_PISCINA: CidadePiscinaData[] = [
  {
    slug: 'barueri',
    nome: 'Barueri',
    paragrafos: [
      'Em Barueri e Alphaville, onde condomínios fechados de alto padrão são referência no estado, a cobertura para piscina passou a ser item obrigatório em projetos de lazer — tanto pelo conforto quanto pela valorização imobiliária.',
      'O sistema retrátil em policarbonato compacto cristal preserva a luminosidade da área de lazer, protege contra folhas e detritos e permite uso da piscina mesmo em dias de chuva leve, com fechamento automático via sensor ou Alexa.',
      'A Cobersystem atende Barueri e toda a região de Alphaville com visita técnica, projeto integrado ao paisagismo existente e instalação supervisionada por engenheiros especializados em coberturas de alto padrão.',
    ],
    metaDescription:
      'Cobertura para piscina em Barueri e Alphaville: sistema retrátil policarbonato premium, automação Alexa. Projetos de alto padrão. Orçamento grátis.',
    keywords:
      'cobertura piscina Barueri, cobertura piscina Alphaville, telhado piscina Barueri, cobertura retrátil piscina Alphaville SP',
  },
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Na capital paulista, piscinas em casas de condomínio fechado, coberturas de edifícios e mansões nos bairros nobres demandam proteção que una funcionalidade e estética sofisticada.',
      'A cobertura para piscina em policarbonato ou com estrutura em alumínio anodizado resolve a exposição prolongada ao sol, reduz perda de calor da água e mantém o espaço limpo e seguro para uso diário.',
      'A Cobersystem realiza medição, projeto e instalação de coberturas para piscina em toda São Paulo, com atendimento especializado nos bairros Morumbi, Moema e Brooklin.',
    ],
    metaDescription:
      'Cobertura para piscina em São Paulo: policarbonato ou alumínio, retrátil ou fixa. Projetos para casas e condomínios. Visita técnica grátis na capital.',
    keywords:
      'cobertura piscina São Paulo, cobertura para piscina SP, telhado piscina São Paulo, cobertura retrátil piscina capital',
  },
  {
    slug: 'campinas',
    nome: 'Campinas',
    paragrafos: [
      'Em Campinas, o clima com verões quentes e chuvas concentradas cria a necessidade de coberturas para piscina que protejam o espaço de detritos, prolonguem a temporada de banho e reduzam custo com tratamento de água.',
      'O sistema fixo em policarbonato alveolar é excelente para manter a temperatura da água nos meses mais frios da região, enquanto o modelo retrátil oferece flexibilidade total para dias de sol aberto.',
      'Atendemos residências e clubes em Campinas e cidades da região metropolitana com projeto sob medida, dimensionamento estrutural e instalação especializada em coberturas de piscina.',
    ],
    metaDescription:
      'Cobertura para piscina em Campinas: policarbonato alveolar ou retrátil para proteger e aquecer a água. Projeto sob medida e orçamento na região.',
    keywords:
      'cobertura piscina Campinas, cobertura para piscina Campinas SP, telhado piscina Campinas, cobertura retrátil piscina interior SP',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André, o aproveitamento intenso de lotes urbanos faz com que cada área de lazer seja projetada para uso máximo — e a cobertura para piscina garante que a água esteja limpa e utilizável o ano todo.',
      'O policarbonato compacto UV protege contra sol intenso sem escurecer a área; a versão retrátil permite abrir completamente o espaço em dias ideais e fechar quando o tempo fecha ou quando a piscina não está em uso.',
      'Nossa equipe realiza visita técnica em Santo André e no ABC Paulista para dimensionar a cobertura conforme o tamanho da piscina, orientação solar e integração com a área gourmet.',
    ],
    metaDescription:
      'Cobertura para piscina em Santo André: fixa ou retrátil em policarbonato, proteção UV e manutenção da água. Projeto e orçamento no ABC Paulista.',
    keywords:
      'cobertura piscina Santo André, cobertura para piscina ABC, telhado piscina Santo André, cobertura retrátil piscina ABC Paulista',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_PISCINA.map((c) => [c.slug, c]),
) as Record<CidadePiscinaSlug, CidadePiscinaData>;

export function getCidadePiscina(slug: string): CidadePiscinaData | undefined {
  return mapaPorSlug[slug as CidadePiscinaSlug];
}

export function getSlugsCidadesPiscina(): CidadePiscinaSlug[] {
  return CIDADES_COBERTURA_PISCINA.map((c) => c.slug);
}

/** Bairros de São Paulo com páginas locais para cobertura de piscina */
export const SP_BAIRROS_PISCINA = [
  { slug: 'morumbi', nome: 'Morumbi' },
  { slug: 'moema', nome: 'Moema' },
  { slug: 'brooklin', nome: 'Brooklin' },
] as const;

export type SpBairroPiscinaSlug = (typeof SP_BAIRROS_PISCINA)[number]['slug'];

export function getSlugsBairrosPiscina(): SpBairroPiscinaSlug[] {
  return SP_BAIRROS_PISCINA.map((b) => b.slug);
}

export function getBairroPiscina(
  slug: string,
): { slug: SpBairroPiscinaSlug; nome: string } | undefined {
  const b = SP_BAIRROS_PISCINA.find((x) => x.slug === slug);
  return b ? { slug: b.slug, nome: b.nome } : undefined;
}

export interface SeoBairroPiscina {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  paragrafos: [string, string, string];
}

export const CONTEUDO_BAIRROS_PISCINA: Record<
  SpBairroPiscinaSlug,
  SeoBairroPiscina
> = {
  morumbi: {
    metaTitle: 'Cobertura para Piscina Morumbi, SP | Cobersystem',
    metaDescription:
      'Cobertura para piscina no Morumbi: sistema retrátil ou fixo em policarbonato para casas e condomínios de alto padrão. Automação Alexa. Orçamento SP.',
    keywords:
      'cobertura piscina Morumbi, telhado piscina Morumbi SP, cobertura retrátil piscina Morumbi, cobertura alto padrão piscina Morumbi',
    paragrafos: [
      'No Morumbi, mansões e casas em condomínios fechados investem em coberturas para piscina que integram design arquitetônico e tecnologia de automação, elevando o padrão do espaço de lazer.',
      'O sistema retrátil em policarbonato compacto cristal mantém a luminosidade da área e protege a piscina de folhas e detritos, com fechamento automático por sensor de chuva ou comando via Alexa.',
      'A Cobersystem projeta e instala coberturas de piscina no Morumbi com materiais premium, estrutura em alumínio anodizado e acabamentos alinhados ao nível arquitetônico das residências da região.',
    ],
  },
  moema: {
    metaTitle: 'Cobertura para Piscina Moema, SP | Cobersystem',
    metaDescription:
      'Cobertura para piscina em Moema: policarbonato ou retrátil para casas de alto padrão na Zona Sul. Visita técnica e orçamento gratuitos.',
    keywords:
      'cobertura piscina Moema, telhado piscina Moema SP, cobertura retrátil piscina Zona Sul, policarbonato piscina Moema',
    paragrafos: [
      'Em Moema, residências com jardins arborizados e piscinas bem integradas ao paisagismo exigem coberturas que respeitem a estética do projeto sem bloquear a ventilação natural do espaço.',
      'O policarbonato compacto UV translúcido é a escolha favorita na região, pois preserva a claridade característica das áreas externas de Moema enquanto protege a água e reduz o consumo de produtos químicos.',
      'Oferecemos visita técnica gratuita em Moema com apresentação de amostras de materiais e simulação do fechamento, garantindo que a solução final agrade esteticamente e atenda à funcionalidade desejada.',
    ],
  },
  brooklin: {
    metaTitle: 'Cobertura para Piscina Brooklin, SP | Cobersystem',
    metaDescription:
      'Cobertura para piscina no Brooklin: sistema retrátil ou fixo para residências e condomínios na Zona Sul. Projeto sob medida. Orçamento SP.',
    keywords:
      'cobertura piscina Brooklin, telhado piscina Brooklin SP, cobertura retrátil piscina Zona Sul, cobertura piscina condomínio Brooklin',
    paragrafos: [
      'No Brooklin, empreendimentos residenciais de alto padrão e casas de condomínio utilizam coberturas para piscina para aumentar o período de uso da área de lazer e reduzir custo de manutenção da água.',
      'O sistema retrátil motorizado permite alternar entre piscina aberta para dias de sol intenso e proteção completa durante à noite ou em dias de chuva, com controle remoto ou automação integrada.',
      'A Cobersystem atende o Brooklin e adjacências com projeto integrado ao layout da área gourmet, escolha de estrutura e acabamentos que harmonizam com a arquitetura dos empreendimentos da Zona Sul.',
    ],
  },
};
