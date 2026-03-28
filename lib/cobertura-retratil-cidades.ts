/**
 * Cidades com páginas locais da linha cobertura retrátil
 * (rota: /produtos/cobertura-retratil/em/[cidade])
 */
export type CidadeRetratilSlug =
  | 'sao-paulo'
  | 'sao-bernardo-do-campo'
  | 'campinas'
  | 'santo-andre'
  | 'sao-caetano-do-sul'
  | 'osasco';

export interface CidadeRetratilData {
  slug: CidadeRetratilSlug;
  nome: string;
  paragrafos: string[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_COBERTURA_RETRATIL: CidadeRetratilData[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Na capital, áreas gourmet, varandas e espaços comerciais ganham versatilidade com cobertura retrátil que abre e fecha conforme o clima e o uso do ambiente.',
      'A linha inclui telhas em alumínio, telhas intercaladas e policarbonato compacto ou alveolar, com possibilidade de automação via Alexa, controle remoto ou sensor de chuva.',
      'A Cobersystem atende projetos em São Paulo e região metropolitana com medição, engenharia e instalação especializada no sistema retrátil.',
    ],
    metaDescription:
      'Cobertura retrátil em São Paulo: abre e fecha com policarbonato ou alumínio, automação opcional. Orçamento e visita técnica na capital e RM.',
    keywords:
      'cobertura retrátil São Paulo, cobertura abre e fecha SP, cobertura retrátil policarbonato São Paulo, automação cobertura SP',
  },
  {
    slug: 'sao-bernardo-do-campo',
    nome: 'São Bernardo do Campo',
    paragrafos: [
      'No ABC, residências e negócios valorizam a cobertura retrátil para aproveitar dias ensolarados e fechar com segurança quando chove, sem obra pesada de alvenaria.',
      'Cada configuração — alumínio, intercalada ou policarbonato — pode ser dimensionada para vãos retangulares e integrações com churrasqueiras e pergolados existentes.',
      'Realizamos orçamentos detalhados em São Bernardo do Campo, com especificação de motores, sensores e acabamentos alinhados ao seu projeto.',
    ],
    metaDescription:
      'Cobertura retrátil em São Bernardo do Campo: sistema abre e fecha, telhas ou policarbonato. Automação opcional. Orçamento no ABC Paulista.',
    keywords:
      'cobertura retrátil São Bernardo do Campo, cobertura abre e fecha ABC, cobertura retrátil SBC, sensor chuva cobertura ABC',
  },
  {
    slug: 'campinas',
    nome: 'Campinas',
    paragrafos: [
      'Na região de Campinas, a alternância entre períodos de sol intenso e chuvas rápidas favorece soluções que permitam abrir a cobertura totalmente ou proteger o espaço em minutos.',
      'O sistema retrátil com abertura graduada oferece controle de ventilação e sombreamento, ideal para áreas de lazer e fachadas com uso intensivo ao longo do dia.',
      'Oferecemos visita técnica em Campinas e cidades próximas para definir o modelo mais adequado entre as opções de alumínio, intercalada e policarbonato.',
    ],
    metaDescription:
      'Cobertura retrátil em Campinas: abre e fecha em policarbonato ou telhas, controle do clima e automação. Visita técnica e orçamento na região.',
    keywords:
      'cobertura retrátil Campinas, cobertura abre e fecha Campinas, cobertura retrátil policarbonato Campinas, automação cobertura Campinas',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André, lotes com garagem e quintal integrados costumam usar cobertura retrátil para unir proteção veicular com área social ao ar livre quando desejado.',
      'As versões em policarbonato preservam luminosidade; as em telha de alumínio ou intercalada reforçam estética contemporânea e durabilidade em intempéries.',
      'Nossa equipe elabora projeto sob medida para Santo André e entorno, incluindo definição de trilhos, motorização e integração com automação residencial.',
    ],
    metaDescription:
      'Cobertura retrátil em Santo André: sistema retrátil abre e fecha, alumínio ou policarbonato. Projeto sob medida e orçamento no ABC.',
    keywords:
      'cobertura retrátil Santo André, cobertura abre e fecha Santo André, cobertura retrátil ABC, Alexa cobertura Santo André',
  },
  {
    slug: 'sao-caetano-do-sul',
    nome: 'São Caetano do Sul',
    paragrafos: [
      'São Caetano do Sul exige aproveitamento inteligente de terraços e coberturas, onde cada centímetro útil conta para o conforto da família ou do cliente final.',
      'A cobertura retrátil substitui ou complementa estruturas fixas, permitindo eventos ao ar livre com opção de fechamento hermético quando o tempo fecha.',
      'Atendemos residências e empresas em São Caetano com a mesma linha nacional Cobersystem: engenharia, materiais certificados e instalação acompanhada.',
    ],
    metaDescription:
      'Cobertura retrátil em São Caetano do Sul: abre e fecha com telhas ou policarbonato, automação opcional. Orçamento e projeto no ABC.',
    keywords:
      'cobertura retrátil São Caetano do Sul, cobertura abre e fecha São Caetano, cobertura retrátil policarbonato ABC',
  },
  {
    slug: 'osasco',
    nome: 'Osasco',
    paragrafos: [
      'Em Osasco, a densidade urbana e o tráfego intenso levam muitos moradores a buscarem áreas externas protegidas, mas ainda arejadas, com cobertura que se adapta ao dia a dia.',
      'O sistema abre e fecha reduz ruído percetível quando fechado (conforme o acabamento escolhido) e protege móveis e equipamentos de chuva súbita típica da Grande São Paulo.',
      'Solicite orçamento com visita técnica em Osasco: dimensionamos vão, carga estrutural e opcionais de motor e sensor para encaixar na sua realidade.',
    ],
    metaDescription:
      'Cobertura retrátil em Osasco: sistema retrátil policarbonato ou alumínio, proteção e ventilação. Visita técnica e orçamento na Grande SP.',
    keywords:
      'cobertura retrátil Osasco, cobertura abre e fecha Osasco, cobertura retrátil Grande SP, sensor chuva cobertura Osasco',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_RETRATIL.map((c) => [c.slug, c]),
) as Record<CidadeRetratilSlug, CidadeRetratilData>;

export function getCidadeRetratil(slug: string): CidadeRetratilData | undefined {
  return mapaPorSlug[slug as CidadeRetratilSlug];
}

export function getSlugsCidadesRetratil(): CidadeRetratilSlug[] {
  return CIDADES_COBERTURA_RETRATIL.map((c) => c.slug);
}
