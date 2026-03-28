/**
 * Cidades com páginas locais da linha cobertura abre e fecha
 * (rota: /produtos/cobertura-abre-e-fecha/em/[cidade])
 */
export type CidadeAbreEFechaSlug =
  | 'sao-paulo'
  | 'sao-bernardo-do-campo'
  | 'campinas'
  | 'santo-andre'
  | 'sao-caetano-do-sul'
  | 'osasco';

export interface CidadeAbreEFechaData {
  slug: CidadeAbreEFechaSlug;
  nome: string;
  paragrafos: string[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_COBERTURA_ABRE_E_FECHA: CidadeAbreEFechaData[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Em São Paulo, a cobertura abre e fecha atende quem precisa alternar entre céu aberto e proteção total em varandas, áreas gourmet e espaços comerciais sem reforma estrutural invasiva.',
      'O sistema permite abertura gradual até 90 graus, integrando-se a automação residencial com Alexa, controle remoto ou acionamento por sensor de chuva, conforme o projeto.',
      'A Cobersystem realiza levantamento técnico na capital e região metropolitana para dimensionar motor, trilhos e acabamentos compatíveis com cada vão.',
    ],
    metaDescription:
      'Cobertura abre e fecha em São Paulo: sistema retrátil com automação Alexa e sensor de chuva. Orçamento e visita técnica na capital e RM.',
    keywords:
      'cobertura abre e fecha São Paulo, cobertura automatizada SP, Alexa cobertura São Paulo, sensor chuva cobertura SP',
  },
  {
    slug: 'sao-bernardo-do-campo',
    nome: 'São Bernardo do Campo',
    paragrafos: [
      'No ABC, moradores e empresas adotam a cobertura abre e fecha para aproveitar quintais e terraços em dias claros e fechar com segurança quando o tempo muda.',
      'As opções em telha de alumínio, intercalada ou policarbonato permitem alinhar estética, peso estrutural e transmissão de luz ao ambiente.',
      'Oferecemos projeto e instalação em São Bernardo do Campo, com especificação clara de motores, comandos e opcionais de sensor para chuva.',
    ],
    metaDescription:
      'Cobertura abre e fecha em São Bernardo do Campo: retrátil com telhas ou policarbonato, automação opcional. Orçamento no ABC Paulista.',
    keywords:
      'cobertura abre e fecha São Bernardo, cobertura retrátil ABC, automação cobertura SBC, sensor chuva cobertura ABC',
  },
  {
    slug: 'campinas',
    nome: 'Campinas',
    paragrafos: [
      'Na região de Campinas, chuvas rápidas e períodos de sol forte tornam valioso um sistema que abre para ventilar e fecha em poucos instantes para proteger móveis e equipamentos.',
      'A cobertura abre e fecha combina com churrasqueiras cobertas, decks e fachadas que precisam de flexibilidade ao longo do dia.',
      'Agende visita técnica em Campinas e redondezas para definir o modelo ideal e a automação mais adequada ao seu uso.',
    ],
    metaDescription:
      'Cobertura abre e fecha em Campinas: controle do clima com abertura graduada, policarbonato ou telhas. Visita técnica e orçamento na região.',
    keywords:
      'cobertura abre e fecha Campinas, cobertura retrátil Campinas, automação cobertura Campinas, sensor chuva Campinas',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André, projetos em lotes com garagem e área de lazer integrada se beneficiam da cobertura que se recolhe, liberando o espaço para eventos e circulação.',
      'Motorização silenciosa e trilhos bem calibrados garantem operação diária sem esforço manual, inclusive em vãos amplos.',
      'Trabalhamos com orçamento detalhado para Santo André e cidades vizinhas, respeitando normas técnicas e condições de fixação da obra.',
    ],
    metaDescription:
      'Cobertura abre e fecha em Santo André: sistema motorizado, telhas ou policarbonato. Projeto sob medida e orçamento no ABC.',
    keywords:
      'cobertura abre e fecha Santo André, cobertura retrátil Santo André, motor cobertura ABC, cobertura automatizada Santo André',
  },
  {
    slug: 'sao-caetano-do-sul',
    nome: 'São Caetano do Sul',
    paragrafos: [
      'São Caetano do Sul concentra imóveis com alto aproveitamento de área externa, onde a cobertura abre e fecha maximiza o uso do terraço ou da varanda gourmet.',
      'A integração com automação residencial permite programar fechamento por chuva ou comando de voz, somando conforto à rotina urbana.',
      'A Cobersystem atende residências e negócios em São Caetano com engenharia e instalação especializada na linha abre e fecha.',
    ],
    metaDescription:
      'Cobertura abre e fecha em São Caetano do Sul: retrátil com automação opcional, telhas ou policarbonato. Orçamento no ABC.',
    keywords:
      'cobertura abre e fecha São Caetano, cobertura retrátil São Caetano, Alexa cobertura ABC, cobertura motorizada São Caetano',
  },
  {
    slug: 'osasco',
    nome: 'Osasco',
    paragrafos: [
      'Em Osasco, a proximidade de corredores de tráfego e comércio faz muitos clientes priorizarem fechamento rápido da cobertura para proteger o ambiente externo.',
      'O sistema abre e fecha pode ser combinado com policarbonato para luz natural ou telhas metálicas para acabamento contemporâneo.',
      'Solicite orçamento com visita em Osasco: avaliamos vão, cargas e pontos de energia para motor e sensores.',
    ],
    metaDescription:
      'Cobertura abre e fecha em Osasco: sistema retrátil com policarbonato ou telhas, automação e sensor de chuva. Visita técnica na Grande SP.',
    keywords:
      'cobertura abre e fecha Osasco, cobertura retrátil Osasco, automação cobertura Grande SP, sensor chuva Osasco',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_ABRE_E_FECHA.map((c) => [c.slug, c]),
) as Record<CidadeAbreEFechaSlug, CidadeAbreEFechaData>;

export function getCidadeAbreEFecha(
  slug: string,
): CidadeAbreEFechaData | undefined {
  return mapaPorSlug[slug as CidadeAbreEFechaSlug];
}

export function getSlugsCidadesAbreEFecha(): CidadeAbreEFechaSlug[] {
  return CIDADES_COBERTURA_ABRE_E_FECHA.map((c) => c.slug);
}
