/**
 * Cidades do interior de SP com páginas ricas de cobertura retrátil
 * Rota: /produtos/cobertura-retratil/em/[cidade]
 * Diferente de lib/cobertura-retratil-cidades.ts (Grande SP — páginas simples)
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface CidadeInteriorRetratil {
  slug: string;
  nome: string;
  regiao: string;
  distancia_sp_km: number;
  tempo_deslocamento: string;
  referencia_local: string;
  cidades_vizinhas: string[];
  cidades_vizinhas_slugs: string[];
  bairros_nobres: string[];
  populacao: number;
  /** Aplicação mais demandada nessa cidade — aparece em destaque no hero */
  aplicacao_principal: 'piscina' | 'area-gourmet' | 'garagem' | 'varanda';
  /** 3 parágrafos únicos da introdução */
  intro: [string, string, string];
  /** 3 perguntas geo-locais (com nome da cidade) + adicionadas às FAQs genéricas */
  faq_geo: FaqItem[];
  metaDescription: string;
  keywords: string;
}

export const CIDADES_INTERIOR_RETRATIL: CidadeInteriorRetratil[] = [
  // ─────────────────────────────────────────────────────────────────────
  // 1. JUNDIAÍ — Tier 1, 60 km de SP, Serra do Japi
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'jundiai',
    nome: 'Jundiaí',
    regiao: 'Região Metropolitana de Jundiaí',
    distancia_sp_km: 60,
    tempo_deslocamento: '50 minutos',
    referencia_local: 'Serra do Japi',
    cidades_vizinhas: ['Itupeva', 'Cabreúva', 'Vinhedo', 'Várzea Paulista'],
    cidades_vizinhas_slugs: ['cabreuva', 'vinhedo'],
    bairros_nobres: ['Malota', 'Anhangabaú', 'Engordadouro'],
    populacao: 422000,
    aplicacao_principal: 'piscina',
    intro: [
      'Em Jundiaí, cidade referência em qualidade de vida às margens da Serra do Japi, o perfil das residências — grandes lotes com piscinas, áreas gourmet e jardins cuidados — cria a demanda ideal para coberturas retráteis de alto padrão. A Cobersystem atende Jundiaí e toda a Região Metropolitana com equipe própria deslocada de São Paulo, a apenas 60 km pela Rodovia Anhanguera.',
      'Nos bairros do Malota, Anhangabaú e Engordadouro, instalamos coberturas retráteis abre e fecha para piscinas, churrasqueiras e varandas de residências que exigem acabamento premium. O sistema em policarbonato UV ou telhas de alumínio é dimensionado sob medida, com motorização elétrica e sensor de chuva opcional — perfeito para os períodos de chuvas intensas que marcam as tardes de verão na região da Serra do Japi.',
      'Nossa equipe realiza a visita técnica em Jundiaí, elabora o projeto 3D e executa a instalação completa sem necessidade de terceiros ou fornecedores locais. Da medição à entrega com garantia escrita, tudo pela Cobersystem — sem intermediários e sem surpresas no orçamento.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem realmente atende Jundiaí?',
        a: 'Sim. Nossa equipe técnica se desloca de São Paulo até Jundiaí regularmente — são 60 km pela Anhanguera, cerca de 50 minutos de viagem. Já instalamos coberturas retráteis em residências no Malota, Anhangabaú e Engordadouro, e atendemos também cidades vizinhas como Cabreúva, Vinhedo, Itupeva e Várzea Paulista.',
      },
      {
        q: 'A cobertura retrátil aguenta o clima da Região Metropolitana de Jundiaí?',
        a: 'Sim. Os perfis são em alumínio anodizado (não enferruja), e os painéis em policarbonato têm proteção UV dupla face co-extrudada com garantia de 10 anos. O sistema é projetado para suportar as chuvas intensas e os ventos da região da Serra do Japi conforme NBR 6123, com estrutura dimensionada em alumínio de alta resistência.',
      },
      {
        q: 'Atendem cidades próximas a Jundiaí como Vinhedo, Cabreúva e Itupeva?',
        a: 'Sim. Toda a Região Metropolitana de Jundiaí está em nossa rota de atendimento. Vinhedo, Cabreúva, Itupeva e Várzea Paulista são atendidas pela mesma equipe que visita Jundiaí, geralmente no mesmo agendamento ou em datas próximas.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Jundiaí: sistema abre e fecha para piscina, área gourmet e garagem. Projeto sob medida, motorização e sensor de chuva. Orçamento grátis.',
    keywords:
      'cobertura retrátil Jundiaí, cobertura abre e fecha Jundiaí, cobertura retrátil piscina Jundiaí, cobertura policarbonato Jundiaí SP, automação cobertura Jundiaí',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 2. INDAIATUBA — Tier 1, 95 km de SP, Parque Ecológico
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'indaiatuba',
    nome: 'Indaiatuba',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 95,
    tempo_deslocamento: '1 hora e 10 minutos',
    referencia_local: 'Parque Ecológico de Indaiatuba',
    cidades_vizinhas: ['Itu', 'Salto', 'Campinas', 'Monte Mor'],
    cidades_vizinhas_slugs: ['itu', 'salto'],
    bairros_nobres: ['Jardim Morada do Sol', 'Residencial Paris', 'Jardim Tropical'],
    populacao: 246000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Indaiatuba, uma das cidades de maior crescimento residencial da Região Metropolitana de Campinas, concentra condomínios fechados e residências com áreas de lazer completas — piscinas, churrasqueiras integradas e espaços gourmet em expansão. Para esse perfil, a cobertura retrátil abre e fecha é a solução que une proteção e praticidade sem comprometer a estética do projeto original.',
      'A Cobersystem chega a Indaiatuba por meio da Rodovia Santos Dumont (SP-075) e Anhanguera, percorrendo 95 km de São Paulo em cerca de 1 hora e 10 minutos. Realizamos medição in loco no Jardim Morada do Sol, Residencial Paris, Jardim Tropical e demais bairros, com projeto 3D entregue em até 5 dias úteis após a visita técnica gratuita.',
      'Cidades vizinhas como Itu, Salto, Campinas e Monte Mor também fazem parte da nossa rota de atendimento regular a partir de Indaiatuba. Se você mora nessa região e quer proteger sua área gourmet ou piscina com uma cobertura retrátil de alto padrão, entre em contato pelo WhatsApp para uma estimativa gratuita.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem faz instalação de cobertura retrátil em Indaiatuba?',
        a: 'Sim. Nossa equipe se desloca de São Paulo (95 km, aproximadamente 1h10 pela SP-075 e Anhanguera) para medição técnica e instalação completa em Indaiatuba. Atendemos o Jardim Morada do Sol, Residencial Paris, Jardim Tropical e todos os condomínios fechados da cidade.',
      },
      {
        q: 'Quanto tempo demora para instalar em Indaiatuba após aprovar o projeto?',
        a: 'Após aprovação do projeto 3D, o prazo médio é de 25 a 35 dias úteis: 5 dias para elaboração do projeto, 18 a 28 dias para fabricação em nossa unidade em SP, e 1 a 2 dias para instalação in loco em Indaiatuba. Trabalhamos com cronograma contratual e data de instalação confirmada.',
      },
      {
        q: 'Atendem condomínios fechados de Indaiatuba como o Residencial Paris?',
        a: 'Sim. Temos experiência com instalações em condomínios fechados que exigem documentação de entrada e aprovação prévia da administração. Nossa equipe auxilia no processo de credenciamento e fornece toda a documentação técnica (ART, seguro de responsabilidade civil) necessária para aprovação.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Indaiatuba: abre e fecha para área gourmet, piscina e churrasqueira em condomínios fechados. Orçamento grátis. Equipe técnica de SP.',
    keywords:
      'cobertura retrátil Indaiatuba, cobertura abre e fecha Indaiatuba, cobertura área gourmet Indaiatuba, cobertura policarbonato Indaiatuba, telhado retrátil Indaiatuba SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 3. AMERICANA — Tier 1, 120 km de SP, Lago do Corumbataí
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'americana',
    nome: 'Americana',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 120,
    tempo_deslocamento: '1 hora e 20 minutos',
    referencia_local: 'Lago do Corumbataí',
    cidades_vizinhas: ['Santa Bárbara d\'Oeste', 'Nova Odessa', 'Sumaré', 'Hortolândia'],
    cidades_vizinhas_slugs: ['santa-barbara-d-oeste', 'sumare'],
    bairros_nobres: ['Jardim São Paulo', 'Chácara Cneo', 'Parque Gramado'],
    populacao: 241000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Americana, às margens do Rio Piracicaba e com forte influência da Região Metropolitana de Campinas, tem um perfil residencial consolidado — casas de médio e alto padrão com varandas amplas, áreas gourmet integradas e espaços de lazer ao ar livre próximos ao Lago do Corumbataí. Esse é o cenário ideal para a cobertura retrátil abre e fecha: proteção quando chove, abertura total quando o clima ajuda.',
      'A Cobersystem chega a Americana pela Rodovia Anhanguera (SP-330), percorrendo 120 km de São Paulo em aproximadamente 1 hora e 20 minutos. Nos bairros do Jardim São Paulo, Chácara Cneo e Parque Gramado, instalamos coberturas retráteis para piscinas, churrasqueiras e varandas, com estrutura em alumínio anodizado e painéis em policarbonato alveolar ou telhas intercaladas.',
      'O sistema inclui motorização elétrica silenciosa, com opção de sensor de chuva que fecha automaticamente a cobertura em 30 segundos. Moradores de Americana têm vizinhos atendidos em Santa Bárbara d\'Oeste, Nova Odessa e Sumaré — o que nos traz à região com frequência e agiliza o agendamento da visita técnica.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem instala cobertura retrátil em Americana SP?',
        a: 'Sim. Nossa equipe se desloca de São Paulo até Americana (120 km pela Anhanguera, ~1h20) para medição técnica, projeto e instalação completa. Atendemos Jardim São Paulo, Chácara Cneo, Parque Gramado e toda a cidade, além das cidades vizinhas Santa Bárbara d\'Oeste, Nova Odessa, Sumaré e Hortolândia.',
      },
      {
        q: 'Em Americana o frete de instalação tem custo adicional?',
        a: 'Não. Para projetos com valor acima de R$15.000, o deslocamento de nossa equipe de SP até Americana está incluído no preço. Para projetos menores, verificamos o custo de deslocamento na hora do orçamento — geralmente sem custo adicional quando agendamos mais de uma visita na região em um mesmo período.',
      },
      {
        q: 'Atendem Santa Bárbara d\'Oeste e Nova Odessa que ficam perto de Americana?',
        a: 'Sim. Santa Bárbara d\'Oeste, Nova Odessa, Sumaré e Hortolândia fazem parte da mesma rota de atendimento que Americana na Região Metropolitana de Campinas. Nossa equipe visita essas cidades com a mesma frequência e nos mesmos agendamentos.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Americana SP: abre e fecha para área gourmet, piscina e varanda. Alumínio e policarbonato sob medida. Equipe de SP com orçamento grátis.',
    keywords:
      'cobertura retrátil Americana SP, cobertura abre e fecha Americana, cobertura área gourmet Americana, cobertura piscina policarbonato Americana, telhado retrátil Americana',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 4. SUMARÉ — Tier 1, 110 km de SP, Parque Estadual de Sumaré
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'sumare',
    nome: 'Sumaré',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 110,
    tempo_deslocamento: '1 hora e 15 minutos',
    referencia_local: 'Parque Estadual de Sumaré',
    cidades_vizinhas: ['Campinas', 'Hortolândia', 'Nova Odessa', 'Americana'],
    cidades_vizinhas_slugs: ['americana'],
    bairros_nobres: ['Nova Veneza', 'Jardim São Judas Tadeu', 'Residencial Manacás'],
    populacao: 285000,
    aplicacao_principal: 'garagem',
    intro: [
      'Sumaré, uma das cidades mais populosas da Região Metropolitana de Campinas, combina bairros residenciais consolidados e condomínios horizontais modernos onde a demanda por coberturas retráteis cresce junto com o aproveitamento de espaços externos. Em Nova Veneza, no Residencial Manacás e no Jardim São Judas Tadeu, instalamos sistemas abre e fecha para garagens, churrasqueiras e áreas gourmet com motorização elétrica e sensor de chuva.',
      'A Cobersystem atende Sumaré pelo acesso da Rodovia dos Bandeirantes (SP-348) e Anhanguera, percorrendo 110 km de São Paulo em cerca de 1 hora e 15 minutos. Por ser parte de uma rota de atendimento que inclui Campinas, Americana e Hortolândia, nossa equipe visita a região com frequência — o que agiliza significativamente o agendamento da visita técnica e reduz o prazo total de entrega.',
      'Os projetos mais comuns em Sumaré incluem cobertura retrátil para garagem em condomínios fechados, cobertura abre e fecha sobre churrasqueira integrada e proteção de piscinas com policarbonato alveolar UV. Cada instalação é precedida de visita técnica, projeto 3D e aprovação formal do cliente antes de qualquer fabricação.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem faz serviço de cobertura retrátil em Sumaré?',
        a: 'Sim. Atendemos Sumaré com equipe técnica deslocada de São Paulo (110 km pela Bandeirantes e Anhanguera, ~1h15). Nova Veneza, Residencial Manacás, Jardim São Judas Tadeu e toda a cidade são cobertos. A região de Campinas — que inclui Sumaré, Americana e Hortolândia — é uma de nossas rotas mais frequentes no interior.',
      },
      {
        q: 'Qual o prazo para orçamento e instalação de cobertura retrátil em Sumaré?',
        a: 'Orçamento inicial via WhatsApp com fotos: em até 24h. Visita técnica presencial em Sumaré: agendamos em até 7 dias úteis. Projeto 3D: 5 dias após a visita. Fabricação: 18 a 28 dias. Instalação in loco em Sumaré: 1 a 2 dias. Prazo total médio: 30 a 42 dias após aprovação.',
      },
      {
        q: 'Atendem condomínios e residências em Nova Veneza e Residencial Manacás em Sumaré?',
        a: 'Sim. Temos instalações realizadas em condomínios fechados de Sumaré, incluindo bairros como Nova Veneza e Residencial Manacás. Para condomínios que exigem documentação de entrada, fornecemos ART, seguro de RC e demais documentos exigidos pela administração.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Sumaré SP: abre e fecha para garagem, área gourmet e piscina em condomínios. Projeto técnico e instalação pela Cobersystem. Orçamento grátis.',
    keywords:
      'cobertura retrátil Sumaré SP, cobertura abre e fecha Sumaré, cobertura garagem Sumaré, cobertura policarbonato Sumaré, telhado retrátil Sumaré Campinas',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 5. VALINHOS — Tier 1, 90 km de SP, Festa do Figo / Swiss Park
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'valinhos',
    nome: 'Valinhos',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 90,
    tempo_deslocamento: '1 hora',
    referencia_local: 'Condomínio Swiss Park e Festa do Figo',
    cidades_vizinhas: ['Campinas', 'Vinhedo', 'Jundiaí', 'Itatiba'],
    cidades_vizinhas_slugs: ['vinhedo', 'jundiai'],
    bairros_nobres: ['Jardim Paiquerê', 'Bosque das Figueiras', 'Condomínio Swiss Park'],
    populacao: 125000,
    aplicacao_principal: 'piscina',
    intro: [
      'Valinhos é referência em qualidade de vida na Região Metropolitana de Campinas: com o Condomínio Swiss Park, o Bosque das Figueiras e o Jardim Paiquerê entre os endereços mais valorizados, a cidade concentra residências de alto padrão que demandam coberturas retráteis sofisticadas para piscinas, áreas gourmet e jardins de inverno. A Cobersystem atende Valinhos com o mesmo nível de qualidade e atenção técnica dos projetos na Grande SP.',
      'A Cobersystem chega a Valinhos pela Rodovia Dom Pedro I (SP-065), percorrendo 90 km de São Paulo em exatos 1 hora — um dos melhores acessos para cidades do interior paulista. O tempo de deslocamento curto permite visitas técnicas no período da manhã com retorno no mesmo dia, o que agiliza o processo de medição e entrega de projeto.',
      'Vizinha de Campinas, Vinhedo, Jundiaí e Itatiba, Valinhos integra uma rota de atendimento consolidada da Cobersystem no interior de SP. Para instalações em condomínios fechados como o Swiss Park — que exigem documentação específica e aprovação prévia da administração — nossa equipe oferece suporte completo no processo de credenciamento.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Valinhos para instalar cobertura retrátil?',
        a: 'Sim. Valinhos está a apenas 90 km de SP pela Dom Pedro I (1 hora de viagem), e nossa equipe visita a cidade com frequência, especialmente em rotas que incluem Campinas, Vinhedo e Jundiaí. Atendemos o Swiss Park, Bosque das Figueiras, Jardim Paiquerê e toda a cidade de Valinhos.',
      },
      {
        q: 'A cobertura retrátil em Valinhos pode ser instalada em condomínios fechados como o Swiss Park?',
        a: 'Sim. Temos experiência com instalações em condomínios de alto padrão em Valinhos. Fornecemos toda a documentação exigida pela administração condominial: ART de responsabilidade técnica, seguro de responsabilidade civil, certificado de instalação e memorial descritivo do projeto. Nossa equipe auxilia no processo de aprovação prévia.',
      },
      {
        q: 'Qual cobertura retrátil é mais indicada para piscinas em Valinhos?',
        a: 'Para piscinas em Valinhos, recomendamos o policarbonato compacto cristal (máxima translucidez) ou o alveolar UV (melhor isolamento térmico). Os dois materiais têm proteção UV dupla face com garantia de 10 anos e são ideais para o clima da Região Metropolitana de Campinas. A estrutura é em alumínio anodizado — sem ferrugem e sem manutenção de pintura.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Valinhos SP: piscina, área gourmet e condomínios fechados. Policarbonato premium, motorização e sensor de chuva. Orçamento grátis pela Cobersystem.',
    keywords:
      'cobertura retrátil Valinhos SP, cobertura abre e fecha Valinhos, cobertura piscina Valinhos, cobertura Swiss Park Valinhos, telhado retrátil Valinhos Campinas',
  },
];

// ─────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────

const mapaInterior = new Map(
  CIDADES_INTERIOR_RETRATIL.map((c) => [c.slug, c]),
);

export function getCidadeInteriorRetratil(slug: string): CidadeInteriorRetratil | undefined {
  return mapaInterior.get(slug);
}

export function getSlugsCidadesInteriorRetratil(): string[] {
  return CIDADES_INTERIOR_RETRATIL.map((c) => c.slug);
}
