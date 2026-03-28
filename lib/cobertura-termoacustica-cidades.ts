/**
 * Cidades com páginas locais da linha cobertura termoacústica
 * (rota: /produtos/cobertura-termoacustica/em/[cidade])
 */
export type CidadeTermoacusticaSlug =
  | 'sao-paulo'
  | 'sao-bernardo-do-campo'
  | 'campinas'
  | 'santo-andre'
  | 'sao-caetano-do-sul'
  | 'osasco';

export interface CidadeTermoacusticaData {
  slug: CidadeTermoacusticaSlug;
  nome: string;
  paragrafos: string[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_COBERTURA_TERMOACUSTICA: CidadeTermoacusticaData[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Em São Paulo, galpões, lojas e ampliações residenciais ganham desempenho com cobertura termoacústica sanduíche, que reduz calor no telhado e abafa ruído de trânsito e vizinhança na capital.',
      'O núcleo em EPS, PU ou lã de rocha é dimensionado conforme espessura e normas do projeto, equilibrando custo, isolamento térmico e exigências acústicas ou de fogo.',
      'A Cobersystem atende a Grande São Paulo com visita técnica para medir vãos, definir fixações e indicar o painel sanduíche mais adequado a cada obra.',
    ],
    metaDescription:
      'Cobertura termoacústica em São Paulo: painel sanduíche EPS, PU ou lã de rocha. Isolamento térmico e acústico. Orçamento e visita técnica na capital e RM.',
    keywords:
      'cobertura termoacústica São Paulo, cobertura sanduíche SP, isolamento térmico cobertura SP, painel sanduíche SP, cobertura acústica São Paulo',
  },
  {
    slug: 'sao-bernardo-do-campo',
    nome: 'São Bernardo do Campo',
    paragrafos: [
      'No ABC Paulista, indústrias leves e comércios utilizam cobertura termoacústica para manter o interior mais estável em dias de calor e diminuir o impacto de máquinas e chuva na laje.',
      'Painéis sanduíche aceleram a montagem em relação a soluções convencionais, o que interessa a prazos apertados em expansões e retrofit de telhados.',
      'Oferecemos especificação e instalação em São Bernardo do Campo, com foco em vedação, calhas e continuidade do isolamento nas emendas.',
    ],
    metaDescription:
      'Cobertura termoacústica em São Bernardo do Campo: sanduíche com isolamento térmico e acústico. EPS, PU ou lã de rocha. Orçamento no ABC.',
    keywords:
      'cobertura termoacústica São Bernardo, cobertura sanduíche ABC, isolamento galpão SBC, painel sanduíche ABC Paulista',
  },
  {
    slug: 'campinas',
    nome: 'Campinas',
    paragrafos: [
      'Na região de Campinas, variações térmicas marcantes favorecem coberturas sanduíche que diminuem a carga do ar-condicionado e melhoram o conforto em escritórios e áreas de produção.',
      'Projetos com câmaras frias ou alto padrão residencial costumam priorizar núcleo em PU; já galpões e residências com orçamento equilibrado frequentemente adotam EPS na espessura certa.',
      'Agende levantamento em Campinas e cidades próximas para cruzar vento, insolação e tipo de uso com a solução termoacústica ideal.',
    ],
    metaDescription:
      'Cobertura termoacústica em Campinas: painéis sanduíche para conforto térmico e acústico. EPS, PU e lã de rocha. Visita técnica na região.',
    keywords:
      'cobertura termoacústica Campinas, cobertura sanduíche Campinas, isolamento térmico Campinas, painel sanduíche interior Paulista',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André, telhados antigos ou mal isolados podem ser substituídos ou complementados com sistema sanduíche que unifica cobertura e isolante em um só elemento.',
      'A redução de ruído aéreo e de impacto da chuva melhora ambientes de trabalho e moradia próximos a vias movimentadas.',
      'Trabalhamos com orçamento detalhado para Santo André e entorno, alinhando peso, vão entre terças e resistência à corrosão da face externa do painel.',
    ],
    metaDescription:
      'Cobertura termoacústica em Santo André: sanduíche EPS, PU ou lã de rocha. Menos ruído e mais conforto térmico. Orçamento no ABC.',
    keywords:
      'cobertura termoacústica Santo André, isolamento acústico telhado ABC, painel sanduíche Santo André, cobertura industrial ABC',
  },
  {
    slug: 'sao-caetano-do-sul',
    nome: 'São Caetano do Sul',
    paragrafos: [
      'São Caetano do Sul concentra empreendimentos que valorizam eficiência energética; a cobertura termoacústica contribui para envelope mais controlado e menor desperdício em climatização.',
      'Quando há exigência de reação ao fogo, a opção com lã de rocha reforça segurança sem abrir mão de desempenho acústico.',
      'A Cobersystem projeta e executa coberturas sanduíche em São Caetano para uso comercial e industrial, com acabamento metálico conforme a identidade da edificação.',
    ],
    metaDescription:
      'Cobertura termoacústica em São Caetano do Sul: painéis sanduíche com isolamento superior. EPS, PU ou lã de rocha. Engenharia e instalação no ABC.',
    keywords:
      'cobertura termoacústica São Caetano, cobertura sanduíche SCS, isolamento térmico ABC, lã de rocha cobertura São Caetano',
  },
  {
    slug: 'osasco',
    nome: 'Osasco',
    paragrafos: [
      'Em Osasco e na Grande SP, logística e comércio demandam galpões confortáveis; o painel sanduíche entrega vedação e isolamento em grandes vãos com montagem organizada.',
      'A camada isolante entre chapas metálicas evita pontes térmicas típicas de telhas simples sobre estrutura exposta, melhorando o desempenho ao longo dos anos.',
      'Solicite visita técnica para dimensionar cobertura termoacústica em Osasco, com definição de espessuras e tipo de núcleo conforme seu segmento.',
    ],
    metaDescription:
      'Cobertura termoacústica em Osasco: sanduíche para galpões e edificações comerciais. Isolamento térmico e acústico. Orçamento na Grande São Paulo.',
    keywords:
      'cobertura termoacústica Osasco, painel sanduíche Osasco, galpão isolado Grande SP, cobertura acústica Osasco',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_TERMOACUSTICA.map((c) => [c.slug, c]),
) as Record<CidadeTermoacusticaSlug, CidadeTermoacusticaData>;

export function getCidadeTermoacustica(
  slug: string,
): CidadeTermoacusticaData | undefined {
  return mapaPorSlug[slug as CidadeTermoacusticaSlug];
}

export function getSlugsCidadesTermoacustica(): CidadeTermoacusticaSlug[] {
  return CIDADES_COBERTURA_TERMOACUSTICA.map((c) => c.slug);
}
