/**
 * Cidades com páginas locais da linha cobertura em policarbonato
 * (rota: /produtos/cobertura-policarbonato/em/[cidade])
 */
export type CidadePolicarbonatoSlug =
  | 'sao-paulo'
  | 'sao-bernardo-do-campo'
  | 'campinas'
  | 'santo-andre'
  | 'sao-caetano-do-sul'
  | 'osasco'
  | 'guarulhos'
  | 'barueri';

export interface CidadePolicarbonatoData {
  slug: CidadePolicarbonatoSlug;
  /** Nome para títulos e breadcrumbs */
  nome: string;
  /** Frases exclusivas para SEO (corpo da página) */
  paragrafos: string[];
  /** Meta description única (≤ ~160 caracteres recomendado) */
  metaDescription: string;
  /** Palavras-chave auxiliares para metadata */
  keywords: string;
}

export const CIDADES_COBERTURA_POLICARBONATO: CidadePolicarbonatoData[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    paragrafos: [
      'Na capital paulista, projetos residenciais e comerciais exigem soluções que combinem durabilidade com acabamento alinhado ao padrão urbano da cidade.',
      'A linha de cobertura fixa em policarbonato compacto ou alveolar atende fachadas, garagens e áreas externas com proteção permanente contra chuva e radiação UV.',
      'Atendemos orçamentos e visitas técnicas em São Paulo e região metropolitana, com instalação realizada por equipe especializada.',
    ],
    metaDescription:
      'Cobertura fixa em policarbonato em São Paulo: compacto e alveolar, proteção permanente e orçamento sob medida. Cobersystem atende a capital e região.',
    keywords:
      'cobertura policarbonato São Paulo, cobertura fixa policarbonato SP, policarbonato compacto São Paulo, policarbonato alveolar São Paulo',
  },
  {
    slug: 'sao-bernardo-do-campo',
    nome: 'São Bernardo do Campo',
    paragrafos: [
      'No ABC paulista, muitas residências e comércios buscam fechamentos e coberturas que otimizem espaço sem sacrificar luminosidade.',
      'A cobertura em policarbonato oferece resistência a impactos e isolamento térmico ou acústico conforme o modelo escolhido, ideal para varandas e áreas de circulação.',
      'A Cobersystem realiza projetos sob medida em São Bernardo do Campo, com estrutura em alumínio e especificação técnica alinhada às normas de cada obra.',
    ],
    metaDescription:
      'Cobertura em policarbonato em São Bernardo do Campo: linha fixa compacta ou alveolar, projeto sob medida e instalação no ABC. Solicite orçamento.',
    keywords:
      'cobertura policarbonato São Bernardo do Campo, cobertura fixa ABC, policarbonato alveolar SBC, policarbonato compacto ABC Paulista',
  },
  {
    slug: 'campinas',
    nome: 'Campinas',
    paragrafos: [
      'Na região de Campinas, o clima com alternância de sol e chuva reforça a necessidade de coberturas permanentes que protejam áreas externas o ano inteiro.',
      'O policarbonato compacto privilegia transparência e entrada de luz; o modelo alveolar agrega isolamento térmico e acústico para maior conforto.',
      'Oferecemos visita técnica e proposta detalhada para residências e empresas em Campinas e cidades vizinhas, mantendo o mesmo padrão de qualidade da linha nacional Cobersystem.',
    ],
    metaDescription:
      'Cobertura fixa em policarbonato em Campinas: compacto ou alveolar para áreas externas, visita técnica e orçamento. Atendimento na região metropolitana.',
    keywords:
      'cobertura policarbonato Campinas, cobertura fixa policarbonato Campinas, policarbonato alveolar Campinas, policarbonato compacto interior SP',
  },
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    paragrafos: [
      'Em Santo André, imóveis com varandas estreitas e áreas de serviço externas costumam precisar de coberturas leves que não sobrecarreguem a estrutura existente.',
      'O policarbonato compacto entrega transparência e proteção contínua; o alveolar é indicado quando o objetivo é reduzir calor e ruído em ambientes de convivência.',
      'A Cobersystem elabora medição e proposta para obras em Santo André e entorno do ABC, respeitando as particularidades de cada fachada ou fundos de terreno.',
    ],
    metaDescription:
      'Cobertura em policarbonato em Santo André: fixa compacto ou alveolar, medição e orçamento no ABC. Proteção permanente para áreas externas.',
    keywords:
      'cobertura policarbonato Santo André, cobertura fixa ABC Santo André, policarbonato alveolar Santo André, policarbonato compacto Santo André',
  },
  {
    slug: 'sao-caetano-do-sul',
    nome: 'São Caetano do Sul',
    paragrafos: [
      'São Caetano do Sul concentra edificações com aproveitamento intenso do lote, onde cada metro de área coberta precisa ser bem planejado.',
      'A linha fixa em policarbonato integra-se a pergolados e estruturas metálicas, oferecendo vedação superior sem abrir mão da entrada de luz natural.',
      'Realizamos projetos sob medida para residências e estabelecimentos em São Caetano, com foco em durabilidade, proteção UV e acabamento da estrutura em alumínio.',
    ],
    metaDescription:
      'Cobertura fixa em policarbonato em São Caetano do Sul: compacto e alveolar para varandas e áreas externas. Orçamento e projeto sob medida no ABC.',
    keywords:
      'cobertura policarbonato São Caetano do Sul, cobertura fixa São Caetano, policarbonato alveolar ABC, policarbonato compacto São Caetano',
  },
  {
    slug: 'osasco',
    nome: 'Osasco',
    paragrafos: [
      'Em Osasco, a proximidade com corredores comerciais e vias movimentadas torna comum a busca por soluções que isolem ruído e reduzam calor em terraços e entradas.',
      'O policarbonato alveolar se destaca nesses cenários pelo conforto térmico e acústico; o compacto continua sendo a escolha clássica para quem prioriza visibilidade e luminosidade.',
      'Atendemos orçamentos com visita técnica em Osasco e região, alinhando espessura, cor e fixação às necessidades reais de cada projeto.',
    ],
    metaDescription:
      'Cobertura em policarbonato em Osasco: policarbonato compacto ou alveolar, visita técnica e orçamento. Proteção fixa para residências e comércio.',
    keywords:
      'cobertura policarbonato Osasco, cobertura fixa Osasco, policarbonato alveolar Osasco, policarbonato compacto Grande SP',
  },
  {
    slug: 'guarulhos',
    nome: 'Guarulhos',
    paragrafos: [
      'Guarulhos concentra uma grande diversidade de construções — de residências unifamiliares a condomínios —, todas com demanda por coberturas de policarbonato duráveis e com custo-benefício atrativo.',
      'O policarbonato alveolar de 6mm é o mais escolhido em Guarulhos para coberturas fixas de varandas e áreas de serviço, pela combinação de leveza, translucidez e bom isolamento térmico.',
      'Realizamos orçamento com visita técnica em Guarulhos, incluindo dimensionamento estrutural, escolha do perfil de alumínio e definição do tipo de policarbonato mais adequado.',
    ],
    metaDescription:
      'Cobertura em policarbonato em Guarulhos: compacto ou alveolar, fixo ou retrátil, estrutura alumínio. Visita técnica e orçamento grátis em Guarulhos SP.',
    keywords:
      'cobertura policarbonato Guarulhos, cobertura em policarbonato Guarulhos, cobertura fixa Guarulhos, policarbonato alveolar Guarulhos SP',
  },
  {
    slug: 'barueri',
    nome: 'Barueri',
    paragrafos: [
      'Em Barueri e Alphaville, a cobertura em policarbonato é muito procurada para proyetos de alto padrão que exigem transparência, leveza e acabamento premium.',
      'O policarbonato compacto cristal de 6mm é o preferido da região por preservar a estética contemporânea das construções, permitindo entrada de luz natural sem esquentar o ambiente.',
      'A Cobersystem atende Barueri e Alphaville com projeto arquitetonicamente integrado, perfis de alumínio anodizado em diferentes cores e instalação supervisionada.',
    ],
    metaDescription:
      'Cobertura em policarbonato em Barueri e Alphaville: compacto cristal, projetos premium, estrutura alumínio. Orçamento grátis.',
    keywords:
      'cobertura policarbonato Barueri, cobertura policarbonato Alphaville, cobertura em policarbonato Barueri, policarbonato compacto Alphaville SP',
  },
];

const mapaPorSlug = Object.fromEntries(
  CIDADES_COBERTURA_POLICARBONATO.map((c) => [c.slug, c]),
) as Record<CidadePolicarbonatoSlug, CidadePolicarbonatoData>;

export function getCidadePolicarbonato(
  slug: string,
): CidadePolicarbonatoData | undefined {
  return mapaPorSlug[slug as CidadePolicarbonatoSlug];
}

export function getSlugsCidadesPolicarbonato(): CidadePolicarbonatoSlug[] {
  return CIDADES_COBERTURA_POLICARBONATO.map((c) => c.slug);
}
