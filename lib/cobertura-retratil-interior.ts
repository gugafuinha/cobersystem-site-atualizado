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
  /** Override opcional do meta title completo (padrão Lote 1/2 é usado se ausente) */
  metaTitle?: string;
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
    cidades_vizinhas_slugs: ['vinhedo'],
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
    cidades_vizinhas_slugs: ['sumare', 'santa-barbara-d-oeste'],
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

  // ─────────────────────────────────────────────────────────────────────
  // 6. VINHEDO — Tier 1, 80 km de SP, Festa da Uva
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'vinhedo',
    nome: 'Vinhedo',
    regiao: 'Região Metropolitana de Jundiaí',
    distancia_sp_km: 80,
    tempo_deslocamento: '55 minutos',
    referencia_local: 'Festa da Uva de Vinhedo',
    cidades_vizinhas: ['Valinhos', 'Campinas', 'Jundiaí', 'Itatiba'],
    cidades_vizinhas_slugs: ['valinhos', 'jundiai', 'itatiba'],
    bairros_nobres: ['Jardim Europa', 'Morada das Vinhas', 'Condomínio Terras de Vinhedo'],
    populacao: 75000,
    aplicacao_principal: 'piscina',
    intro: [
      'Vinhedo é uma das cidades com melhor qualidade de vida do Estado de São Paulo — pequena em população, mas com alta concentração de residências de alto padrão em condomínios horizontais com piscinas, jardins e áreas gourmet elaboradas. No Jardim Europa, Morada das Vinhas e no Condomínio Terras de Vinhedo, a demanda por coberturas retráteis de alto padrão cresceu junto com o perfil do morador que exige sofisticação e funcionalidade nos espaços externos.',
      'A Cobersystem chega a Vinhedo pela Rodovia Dom Pedro I (SP-065) e Anhanguera, percorrendo 80 km de São Paulo em 55 minutos — um dos trajetos mais rápidos para qualquer cidade do interior paulista. Por fazer parte da mesma rota que Valinhos, Jundiaí e Campinas, nossa equipe atende Vinhedo com frequência, o que reduz o prazo de agendamento e de entrega do projeto 3D.',
      'A aplicação mais solicitada em Vinhedo é a cobertura retrátil para piscina em policarbonato compacto cristal — que preserva a luminosidade do espaço sem abrir mão da proteção contra chuva e folhas. Instalamos o sistema com motorização elétrica silenciosa e sensor de chuva que fecha automaticamente em 30 segundos, ideal para residências com rotina agitada onde nem sempre há alguém para fechar manualmente.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Vinhedo para instalação de cobertura retrátil?',
        a: 'Sim. Vinhedo está a 80 km de SP pela Dom Pedro I (55 minutos), e nossa equipe visita a cidade regularmente em rotas que incluem Valinhos, Jundiaí e Campinas. Atendemos o Jardim Europa, Morada das Vinhas, Condomínio Terras de Vinhedo e toda a cidade.',
      },
      {
        q: 'Qual cobertura retrátil é mais indicada para piscinas em Vinhedo?',
        a: 'Para piscinas em Vinhedo, recomendamos o policarbonato compacto cristal (máxima transparência e luz) ou o alveolar UV (melhor isolamento térmico e menor aquecimento da água). Os dois têm proteção UV dupla face com 10 anos de garantia. A visita técnica define o melhor material para o seu projeto específico.',
      },
      {
        q: 'Atendem condomínios fechados de Vinhedo como o Terras de Vinhedo?',
        a: 'Sim. Temos experiência com instalações em condomínios de alto padrão que exigem documentação de entrada. Fornecemos ART, seguro de responsabilidade civil e memorial descritivo do projeto para aprovação da administração condominial — sem burocracia adicional para o morador.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Vinhedo SP: piscina, área gourmet e condomínios de alto padrão. Policarbonato premium com sensor de chuva. Orçamento grátis pela Cobersystem.',
    keywords:
      'cobertura retrátil Vinhedo SP, cobertura abre e fecha Vinhedo, cobertura piscina Vinhedo, cobertura retrátil Terras de Vinhedo, telhado retrátil Vinhedo Jundiaí',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 7. ITATIBA — Tier 1, 80 km de SP, Parque das Águas
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'itatiba',
    nome: 'Itatiba',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 80,
    tempo_deslocamento: '1 hora',
    referencia_local: 'Parque das Águas de Itatiba',
    cidades_vizinhas: ['Jundiaí', 'Várzea Paulista', 'Bragança Paulista', 'Vinhedo'],
    cidades_vizinhas_slugs: ['jundiai', 'vinhedo'],
    bairros_nobres: ['Jardim América', 'Jardim Nova Itatiba', 'Condomínio Bela Vista'],
    populacao: 120000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Itatiba combina o charme de cidade de médio porte com um perfil residencial crescente — condomínios horizontais e casas com lotes amplos que pedem coberturas retráteis para transformar churrasqueiras, varandas e piscinas em espaços protegidos durante todo o ano. Próximo ao Parque das Águas de Itatiba, os bairros do Jardim América, Jardim Nova Itatiba e Condomínio Bela Vista concentram as solicitações mais frequentes de cobertura retrátil na cidade.',
      'A Cobersystem chega a Itatiba pela Rodovia Dom Pedro I (SP-065) a partir de Jundiaí ou pela SP-360 via Bragança Paulista, percorrendo 80 km de São Paulo em aproximadamente 1 hora. Por integrar a rota de atendimento de Jundiaí e Vinhedo, nossa equipe visita Itatiba com frequência — o que reduz o prazo médio de agendamento de visita técnica para até 7 dias úteis.',
      'Os projetos mais comuns em Itatiba incluem cobertura retrátil para área gourmet com churrasqueira integrada e cobertura abre e fecha para varanda de sobrado. O sistema é instalado em alumínio anodizado com painel em policarbonato alveolar ou telhas intercaladas, motorizado e com sensor de chuva opcional — sem obra pesada, sem necessidade de nova fundação.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem faz instalação de cobertura retrátil em Itatiba?',
        a: 'Sim. Itatiba está a 80 km de SP e faz parte da rota de atendimento que inclui Jundiaí, Vinhedo e Várzea Paulista. Nossa equipe realiza visita técnica nos bairros Jardim América, Jardim Nova Itatiba, Condomínio Bela Vista e em toda a cidade.',
      },
      {
        q: 'Vocês atendem condomínios e residências em Itatiba próximas ao Parque das Águas?',
        a: 'Sim. A região do Parque das Águas e os condomínios horizontais de Itatiba estão dentro da nossa área de atendimento regular. Para instalações em condomínios que exigem documentação, fornecemos ART e seguro de responsabilidade civil sem custo adicional.',
      },
      {
        q: 'Qual o prazo para instalação de cobertura retrátil em Itatiba?',
        a: 'O prazo médio é de 28 a 40 dias após aprovação do projeto: orçamento online em até 24h, visita técnica em até 7 dias, projeto 3D em 5 dias, fabricação de 18 a 28 dias e instalação em 1 a 2 dias em Itatiba. Prazo contratual com data confirmada.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Itatiba SP: área gourmet, varanda e piscina sob medida. Alumínio e policarbonato com motorização. Equipe de SP. Orçamento grátis.',
    keywords:
      'cobertura retrátil Itatiba SP, cobertura abre e fecha Itatiba, cobertura área gourmet Itatiba, cobertura policarbonato Itatiba, telhado retrátil Itatiba Jundiaí',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 8. PAULÍNIA — Tier 1, 115 km de SP, Hopi Hari
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'paulinia',
    nome: 'Paulínia',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 115,
    tempo_deslocamento: '1 hora e 15 minutos',
    referencia_local: 'Hopi Hari e Wet\'n Wild',
    cidades_vizinhas: ['Campinas', 'Cosmópolis', 'Artur Nogueira', 'Sumaré'],
    cidades_vizinhas_slugs: ['sumare', 'americana'],
    bairros_nobres: ['Jardim São Paulo', 'Residencial Cosmos', 'Condomínio Terras de São Francisco'],
    populacao: 110000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Paulínia se destaca no cenário do interior paulista pelo alto índice de desenvolvimento humano e pela presença de grandes empresas petroquímicas que elevaram a renda média da população — o que se reflete diretamente no perfil residencial: casas e condomínios com piscinas, áreas gourmet completas e varandas que pedem proteção de qualidade. No Residencial Cosmos, no Condomínio Terras de São Francisco e no Jardim São Paulo, a cobertura retrátil é a solução mais procurada para os espaços externos.',
      'A Cobersystem chega a Paulínia pela Rodovia Anhanguera (SP-330) e SP-101, percorrendo 115 km de São Paulo em cerca de 1 hora e 15 minutos. Por estar dentro da rota de Campinas e Sumaré — cidades que atendemos com frequência — o agendamento de visita técnica em Paulínia é feito geralmente com prazo menor do que a média para o interior.',
      'Além da tradicional cobertura para área gourmet e piscina, Paulínia concentra projetos de coberturas retráteis para jardim de inverno em residências de médio e alto padrão — aplicação que cresce em cidades com clima ameno onde o uso de espaços internos integrados ao jardim é muito valorizado.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem instala cobertura retrátil em Paulínia SP?',
        a: 'Sim. Paulínia está a 115 km de SP pela Anhanguera e SP-101 (1h15), dentro da rota de Campinas e Sumaré. Atendemos o Residencial Cosmos, Terras de São Francisco, Jardim São Paulo e toda a cidade com equipe técnica própria.',
      },
      {
        q: 'Qual tipo de cobertura retrátil é mais comum em Paulínia?',
        a: 'Em Paulínia, os projetos mais frequentes são cobertura retrátil para área gourmet com churrasqueira e para piscina. O sistema mais instalado usa policarbonato alveolar na cobertura e estrutura em alumínio anodizado — durável, leve e sem manutenção de pintura.',
      },
      {
        q: 'Há custo adicional de deslocamento para Paulínia?',
        a: 'Não. Para projetos acima de R$15.000, o deslocamento de nossa equipe de SP até Paulínia (115 km) está incluso no preço. Por atendermos Campinas e Sumaré regularmente, frequentemente agrupamos visitas da região no mesmo agendamento.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Paulínia SP: área gourmet, piscina e jardim de inverno em condomínios. Motorização e sensor de chuva. Orçamento grátis pela Cobersystem.',
    keywords:
      'cobertura retrátil Paulínia SP, cobertura abre e fecha Paulínia, cobertura área gourmet Paulínia, cobertura piscina Paulínia, telhado retrátil Paulínia Campinas',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 9. JANDIRA — Tier 1, 30 km de SP, Grande SP Oeste
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'jandira',
    nome: 'Jandira',
    regiao: 'Região Metropolitana de São Paulo',
    distancia_sp_km: 30,
    tempo_deslocamento: '35 minutos',
    referencia_local: 'Parque Linear Tanque Grande',
    cidades_vizinhas: ['Barueri', 'Itapevi', 'Carapicuíba', 'Osasco'],
    cidades_vizinhas_slugs: [],
    bairros_nobres: ['Jardim das Oliveiras', 'Alto da Colina', 'Jardim Nova Europa'],
    populacao: 135000,
    aplicacao_principal: 'garagem',
    intro: [
      'Jandira, localizada a apenas 30 km de São Paulo pela Rodovia Castello Branco (SP-280), é parte da Região Metropolitana de SP e concentra bairros residenciais que cresceram com a expansão do eixo oeste da Grande São Paulo. No Jardim das Oliveiras, Alto da Colina e Jardim Nova Europa, os projetos de cobertura retrátil mais comuns atendem garagens de casas de dois andares, varandas e pequenas churrasqueiras integradas à área de lazer.',
      'A Cobersystem atende Jandira com uma das menores distâncias do portfólio do interior: 30 km pela Castello Branco, chegando em 35 minutos. Essa proximidade permite visitas técnicas no período da manhã com retorno antes do meio-dia, além de facilitar o suporte pós-instalação e eventuais revisões. Cidades vizinhas como Barueri, Itapevi e Carapicuíba são atendidas no mesmo roteiro.',
      'Por ser uma cidade da Região Metropolitana, Jandira segue o perfil urbano da Grande SP: lotes menores, mas projetos que exploram ao máximo o espaço disponível — coberturas retráteis para garagem com fechamento frontal automático, toldos retráteis para varandas de sobrado e proteções para áreas de serviço são as aplicações mais solicitadas.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Jandira para cobertura retrátil?',
        a: 'Sim. Jandira está a apenas 30 km de São Paulo pela Castello Branco (35 minutos). Nossa equipe atende o Jardim das Oliveiras, Alto da Colina, Jardim Nova Europa e toda a cidade — incluindo cidades vizinhas como Barueri, Itapevi e Carapicuíba.',
      },
      {
        q: 'Qual tipo de cobertura retrátil é mais indicado para Jandira?',
        a: 'Em Jandira, os projetos mais comuns são cobertura retrátil para garagem (proteção veicular sem bloquear ventilação), para varanda de sobrado e para área de serviço. O sistema em alumínio anodizado com motorização elétrica é o mais instalado — silencioso, durável e sem manutenção de pintura.',
      },
      {
        q: 'É possível instalar cobertura retrátil em casas de lote pequeno em Jandira?',
        a: 'Sim. O sistema retrátil é sob medida e se adapta a lotes de qualquer tamanho — inclusive os lotes compactos mais comuns em Jandira. A estrutura em alumínio slim e os perfis de 60 mm de espessura permitem instalações em vãos de 2 m a 20 m de largura sem comprometer o espaço útil.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Jandira SP: garagem, varanda e área de serviço sob medida. 30 km de SP, motorização elétrica. Orçamento grátis pela Cobersystem.',
    keywords:
      'cobertura retrátil Jandira SP, cobertura abre e fecha Jandira, cobertura garagem Jandira, cobertura retrátil Grande SP oeste, telhado retrátil Jandira Barueri',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 10. SÃO JOSÉ DOS CAMPOS — Tier 2, 98 km de SP, Vale do Paraíba
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'sao-jose-dos-campos',
    nome: 'São José dos Campos',
    regiao: 'Vale do Paraíba Paulista',
    distancia_sp_km: 98,
    tempo_deslocamento: '1 hora',
    referencia_local: 'Parque da Cidade',
    cidades_vizinhas: ['Jacareí', 'Taubaté', 'Caçapava', 'Pindamonhangaba'],
    cidades_vizinhas_slugs: ['jacarei', 'taubate'],
    bairros_nobres: ['Jardim Aquarius', 'Urbanova', 'Vila Adyana'],
    populacao: 730000,
    aplicacao_principal: 'piscina',
    intro: [
      'São José dos Campos é o maior polo tecnológico e aeroespacial do Brasil — sede da Embraer, do Instituto Nacional de Pesquisas Espaciais (INPE) e de dezenas de empresas de alta tecnologia que atraem um perfil de morador com alta renda e exigência por qualidade em todos os aspectos da residência. No Jardim Aquarius, Urbanova e Vila Adyana — alguns dos bairros mais valorizados do Vale do Paraíba — coberturas retráteis de alto padrão para piscinas e áreas gourmet são projetos frequentes.',
      'A Cobersystem atende São José dos Campos pela Rodovia Presidente Dutra (BR-116), percorrendo 98 km de São Paulo em exatamente 1 hora — um dos melhores acessos do estado. Nossa equipe realiza visita técnica nos principais condomínios horizontais e verticais da cidade, com projeto 3D entregue em até 5 dias úteis e instalação completa sem necessidade de terceiros locais.',
      'O perfil climático do Vale do Paraíba — verões úmidos com chuvas intensas e invernos secos e frios — cria a demanda ideal para coberturas retráteis com sensor de chuva: proteção total nos dias de temporal, abertura completa nos dias de sol. Para residências próximas ao Parque da Cidade e às margens do Rio Paraíba do Sul, instalamos sistemas com motorização silenciosa e integração com automação residencial via Alexa e Google Home.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem instala cobertura retrátil em São José dos Campos?',
        a: 'Sim. São José dos Campos está a 98 km de SP pela Dutra (1 hora), e nossa equipe realiza visitas técnicas regulares na cidade. Atendemos o Jardim Aquarius, Urbanova, Vila Adyana e todos os bairros, além de cidades vizinhas como Jacareí, Taubaté e Caçapava.',
      },
      {
        q: 'A cobertura retrátil aguenta o clima do Vale do Paraíba?',
        a: 'Sim. O sistema é projetado para suportar as chuvas intensas do Vale do Paraíba (especialmente nos verões) e o vento de até 90 km/h conforme NBR 6123. Os perfis em alumínio anodizado não enferrujam e o policarbonato tem proteção UV dupla face com garantia de 10 anos do fabricante.',
      },
      {
        q: 'Atendem condomínios de alto padrão em São José dos Campos como o Jardim Aquarius?',
        a: 'Sim. Temos experiência com instalações em condomínios horizontais e verticais de São José dos Campos que exigem documentação técnica. Fornecemos ART de responsabilidade técnica, seguro de RC e memorial descritivo para aprovação da administração condominial.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em São José dos Campos: piscina, área gourmet e varanda sob medida no Vale do Paraíba. Motorização e sensor de chuva. Orçamento grátis.',
    keywords:
      'cobertura retrátil São José dos Campos, cobertura abre e fecha SJC, cobertura piscina São José dos Campos, cobertura Jardim Aquarius, telhado retrátil Vale do Paraíba',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 11. ATIBAIA — Tier 2, 70 km de SP, Região Bragantina
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'atibaia',
    nome: 'Atibaia',
    regiao: 'Região Bragantina',
    distancia_sp_km: 70,
    tempo_deslocamento: '1 hora',
    referencia_local: 'Parque Municipal das Andorinhas',
    cidades_vizinhas: ['Bragança Paulista', 'Piracaia', 'Nazaré Paulista', 'Mairiporã'],
    cidades_vizinhas_slugs: ['braganca-paulista'],
    bairros_nobres: ['Jardim Maristela', 'Condomínio Atibaia Park', 'Caetetuba'],
    populacao: 145000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Atibaia é conhecida como a "Cidade das Flores" e um dos principais destinos de turismo rural e residencial do Estado de São Paulo — a apenas 70 km da capital, combina clima ameno, baixa densidade urbana e perfil de segunda residência com alto padrão. No Condomínio Atibaia Park, no Jardim Maristela e nos sítios da região de Caetetuba, as coberturas retráteis para área gourmet e piscina são os projetos mais frequentes da Cobersystem na cidade.',
      'A Cobersystem chega a Atibaia pela Rodovia Dom Pedro I (SP-065), percorrendo 70 km de São Paulo em 1 hora. A cidade funciona como hub de atendimento para toda a Região Bragantina: a partir de Atibaia, nossa equipe estende o atendimento para Bragança Paulista, Piracaia, Nazaré Paulista e Mairiporã — geralmente no mesmo roteiro de visitas.',
      'O clima de Atibaia — invernos frios e secos, verões úmidos com chuvas frequentes — é o argumento definitivo para uma cobertura retrátil com sensor de chuva automático. Para os proprietários de chácaras, sítios e casas de campo que passam os fins de semana na cidade sem ninguém para fechar a cobertura manualmente durante a semana, o sensor oferece proteção total sem depender de presença no local.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Atibaia para instalação de cobertura retrátil?',
        a: 'Sim. Atibaia está a 70 km de SP pela Dom Pedro I (1 hora) e nossa equipe visita a cidade regularmente. Atendemos o Condomínio Atibaia Park, Jardim Maristela, a região de Caetetuba e toda a cidade — incluindo chácaras e sítios fora do perímetro urbano.',
      },
      {
        q: 'É possível instalar cobertura retrátil em sítios e chácaras em Atibaia?',
        a: 'Sim. Temos instalações realizadas em propriedades rurais da região de Atibaia, incluindo áreas descobertas de grandes dimensões e instalações sobre estruturas de madeira ou alvenaria existentes. O projeto considera as especificidades do terreno e da estrutura disponível.',
      },
      {
        q: 'Por que o sensor de chuva é especialmente útil em Atibaia?',
        a: 'Porque muitos proprietários em Atibaia usam a cidade como segunda residência — passando apenas fins de semana e não ficando durante a semana. O sensor de chuva detecta precipitação e fecha a cobertura automaticamente em 30 segundos, protegendo o espaço interno mesmo quando o proprietário está em São Paulo.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Atibaia SP: chácaras, sítios e condomínios. Sensor de chuva automático, policarbonato premium. Região Bragantina. Orçamento grátis.',
    keywords:
      'cobertura retrátil Atibaia SP, cobertura abre e fecha Atibaia, cobertura sítio chácara Atibaia, cobertura policarbonato Atibaia, telhado retrátil Atibaia Bragança Paulista',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 12. MOGI DAS CRUZES — Tier 2, 60 km de SP, Alto Tietê
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'mogi-das-cruzes',
    nome: 'Mogi das Cruzes',
    regiao: 'Região do Alto Tietê',
    distancia_sp_km: 60,
    tempo_deslocamento: '1 hora',
    referencia_local: 'Serra do Itapeti',
    cidades_vizinhas: ['Suzano', 'Poá', 'Itaquaquecetuba', 'Guararema'],
    cidades_vizinhas_slugs: [],
    bairros_nobres: ['Chácara Pouso Alegre', 'Jardim Camargo', 'Condomínio Reserva da Serra'],
    populacao: 440000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Mogi das Cruzes, maior cidade da Região do Alto Tietê, tem crescido com o desenvolvimento de condomínios horizontais de médio e alto padrão nos limites com a Serra do Itapeti — áreas que combinam residências amplas, espaços de lazer ao ar livre e uma proximidade com a natureza que cria demanda por coberturas retráteis para piscinas e áreas gourmet. No Condomínio Reserva da Serra, na Chácara Pouso Alegre e no Jardim Camargo, a Cobersystem tem projetos realizados nos últimos 24 meses.',
      'A Cobersystem chega a Mogi das Cruzes pela Rodovia Governador Carvalho Pinto (SP-070), percorrendo 60 km de São Paulo em cerca de 1 hora. Por estar relativamente próxima à capital, Mogi integra uma rota de atendimento ágil com possibilidade de visita técnica em menos de 48 horas após o contato inicial — especialmente quando combinada com outros projetos da Região do Alto Tietê.',
      'Cidades vizinhas como Suzano, Poá e Itaquaquecetuba também são atendidas pela mesma equipe, o que torna Mogi das Cruzes um hub natural de atendimento para o leste metropolitano. Os projetos mais frequentes na cidade incluem cobertura retrátil para área gourmet com churrasqueira, proteção de piscinas em condomínios e coberturas de varandas em sobrados de médio padrão.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Mogi das Cruzes para instalação de cobertura retrátil?',
        a: 'Sim. Mogi das Cruzes está a 60 km de SP pela Carvalho Pinto (1 hora). Atendemos o Condomínio Reserva da Serra, Chácara Pouso Alegre, Jardim Camargo e toda a cidade, além das vizinhas Suzano, Poá e Itaquaquecetuba.',
      },
      {
        q: 'Qual é o prazo para instalação em Mogi das Cruzes?',
        a: 'Pela proximidade com SP (60 km), o prazo médio em Mogi das Cruzes é ligeiramente menor: orçamento em 24h, visita técnica em até 5 dias, projeto 3D em 5 dias, fabricação de 18 a 25 dias e instalação de 1 a 2 dias. Total médio: 30 a 38 dias após aprovação.',
      },
      {
        q: 'A cobertura retrátil funciona bem no clima úmido próximo à Serra do Itapeti?',
        a: 'Sim. O alumínio anodizado não enferruja mesmo em ambientes úmidos com névoa. Os parafusos são em aço inox e os painéis de policarbonato têm proteção UV co-extrudada. O sistema é dimensionado conforme a norma NBR 6123 para a região de Mogi das Cruzes.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Mogi das Cruzes SP: área gourmet, piscina e varanda. Alto Tietê, 60 km de SP. Alumínio e policarbonato sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Mogi das Cruzes SP, cobertura abre e fecha Mogi das Cruzes, cobertura área gourmet Mogi das Cruzes, telhado retrátil Alto Tietê, cobertura policarbonato Mogi',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 13. ITU — Tier 2, 100 km de SP, Museu Republicano
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'itu',
    nome: 'Itu',
    regiao: 'Região de Sorocaba',
    distancia_sp_km: 100,
    tempo_deslocamento: '1 hora e 10 minutos',
    referencia_local: 'Museu Republicano Convenção de Itu',
    cidades_vizinhas: ['Salto', 'Porto Feliz', 'Sorocaba', 'Indaiatuba'],
    cidades_vizinhas_slugs: ['salto', 'indaiatuba', 'porto-feliz'],
    bairros_nobres: ['Jardim São Paulo', 'Jardim Alvorada', 'Bairro do Engenho'],
    populacao: 185000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Itu é uma das cidades mais históricas do Estado de São Paulo — berço da Convenção de Itu de 1873 e referência cultural na Região de Sorocaba. Sua arquitetura colonial e o charme das ruas históricas convivem com bairros modernos como o Jardim São Paulo e o Jardim Alvorada, onde residências de médio e alto padrão com áreas gourmet integradas, varandas amplas e piscinas criaram demanda crescente por coberturas retráteis de qualidade.',
      'A Cobersystem chega a Itu pela Rodovia Castello Branco (SP-280) e Rodovia SP-312, percorrendo 100 km de São Paulo em 1 hora e 10 minutos. Itu faz parte de uma rota de atendimento que inclui Salto e Indaiatuba, o que permite visitas técnicas em dias consecutivos na mesma semana e reduz o prazo médio de agendamento para até 7 dias úteis.',
      'Os projetos mais comuns em Itu incluem cobertura retrátil para área gourmet com churrasqueira coberta — o espaço de lazer mais valorizado nas residências da região — e coberturas para varandas frontais de sobrados no Bairro do Engenho. A estrutura em alumínio anodizado é escolhida pela compatibilidade estética com as construções de estilo colonial da cidade.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem faz instalação de cobertura retrátil em Itu SP?',
        a: 'Sim. Itu está a 100 km de SP pela Castello Branco (1h10) e faz parte da rota que inclui Salto e Indaiatuba. Nossa equipe atende o Jardim São Paulo, Jardim Alvorada, Bairro do Engenho e toda a cidade.',
      },
      {
        q: 'A cobertura retrátil pode ser instalada em imóveis históricos de Itu?',
        a: 'Depende da situação. Para imóveis tombados, é necessário consultar o órgão de preservação antes da instalação. Para imóveis históricos não tombados, a estrutura em alumínio anodizado slim (perfis de 60 mm) pode ser instalada com impacto visual mínimo na fachada. Nossa equipe avalia na visita técnica.',
      },
      {
        q: 'Atendem cidades próximas a Itu como Salto e Porto Feliz?',
        a: 'Sim. Salto, Porto Feliz e Indaiatuba fazem parte da mesma rota de atendimento que Itu. Nossa equipe visita essas cidades geralmente nos mesmos agendamentos, o que reduz o prazo de entrega e facilita o suporte pós-instalação.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Itu SP: área gourmet, varanda e piscina sob medida. Região de Sorocaba, 100 km de SP. Alumínio e policarbonato. Orçamento grátis.',
    keywords:
      'cobertura retrátil Itu SP, cobertura abre e fecha Itu, cobertura área gourmet Itu, cobertura policarbonato Itu Sorocaba, telhado retrátil Itu Salto',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 14. SALTO — Tier 2, 100 km de SP, Cachoeira do Tietê
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'salto',
    nome: 'Salto',
    regiao: 'Região de Sorocaba',
    distancia_sp_km: 100,
    tempo_deslocamento: '1 hora e 10 minutos',
    referencia_local: 'Cachoeira de Salto do Rio Tietê',
    cidades_vizinhas: ['Itu', 'Indaiatuba', 'Elias Fausto', 'Porto Feliz'],
    cidades_vizinhas_slugs: ['itu', 'indaiatuba', 'porto-feliz'],
    bairros_nobres: ['Jardim Esmeralda', 'Jardim Panorama', 'Altos de Salto'],
    populacao: 112000,
    aplicacao_principal: 'garagem',
    intro: [
      'Salto, às margens do Rio Tietê e famosa pela cachoeira que dá nome à cidade, tem um perfil residencial marcado por casas de médio padrão em bairros bem estruturados como o Jardim Esmeralda, Jardim Panorama e Altos de Salto — onde garagens cobertas, varandas e churrasqueiras são espaços centrais da vida familiar. A cobertura retrátil abre e fecha é a solução mais procurada para esses ambientes: proteção quando chove, abertura total quando o tempo ajuda.',
      'A Cobersystem chega a Salto pela Rodovia Castello Branco (SP-280) e SP-312, percorrendo 100 km de São Paulo em 1 hora e 10 minutos — exatamente o mesmo trajeto de Itu. Por isso, Itu e Salto são atendidas em conjunto pela nossa equipe, o que reduz o tempo médio de agendamento de visita técnica e de entrega do projeto em ambas as cidades.',
      'Nas residências dos Altos de Salto — bairro em altitude com visão panorâmica para o vale do Tietê — os projetos de cobertura retrátil para varanda são especialmente valorizados: o sistema permite aproveitar a vista durante os dias de sol e proteger o espaço nas tardes de chuva da região, que chegam com frequência entre outubro e março.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem instala cobertura retrátil em Salto SP?',
        a: 'Sim. Salto está a 100 km de SP (1h10 pela Castello Branco) e faz parte da mesma rota que Itu e Indaiatuba. Nossa equipe atende o Jardim Esmeralda, Jardim Panorama, Altos de Salto e toda a cidade.',
      },
      {
        q: 'Qual é o tipo de cobertura mais pedido em Salto?',
        a: 'Em Salto, os projetos mais comuns são cobertura retrátil para garagem (proteção de veículos sem bloquear ventilação) e para varanda de sobrado. A estrutura em alumínio anodizado com painel em policarbonato alveolar é a configuração mais instalada — durável, leve e com proteção UV garantida pelo fabricante.',
      },
      {
        q: 'Vocês atendem Itu e outras cidades próximas a Salto?',
        a: 'Sim. Itu, Indaiatuba e Porto Feliz fazem parte da mesma rota de atendimento que Salto. Frequentemente agendamos visitas técnicas em Salto e Itu no mesmo dia, o que reduz o prazo de entrega do orçamento e do projeto 3D para ambas as cidades.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Salto SP: garagem, varanda e área gourmet sob medida. Região de Sorocaba, 100 km de SP. Alumínio e policarbonato. Orçamento grátis.',
    keywords:
      'cobertura retrátil Salto SP, cobertura abre e fecha Salto, cobertura garagem Salto, cobertura policarbonato Salto Itu, telhado retrátil Salto Sorocaba',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 15. LIMEIRA — Tier 1, 153 km de SP, RM Campinas
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'limeira',
    nome: 'Limeira',
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 153,
    tempo_deslocamento: '1 hora e 40 minutos',
    referencia_local: 'Museu de Arte Sacra de Limeira',
    cidades_vizinhas: ['Araras', 'Rio Claro', 'Piracicaba', 'Santa Gertrudes'],
    cidades_vizinhas_slugs: ['americana', 'araras'],
    bairros_nobres: ['Jardim Éden', 'Jardim Residencial Santa Clara', 'Parque Santa Júlia'],
    populacao: 307000,
    aplicacao_principal: 'piscina',
    intro: [
      'Limeira, conhecida como a "Capital Mundial das Joias Folheadas" e polo nacional de bijuterias, tem um setor comercial pujante que impulsionou o crescimento residencial de médio e alto padrão nos últimos anos. No Jardim Éden, Jardim Residencial Santa Clara e Parque Santa Júlia, residências com piscinas, áreas gourmet estruturadas e jardins amplos criam a demanda perfeita para coberturas retráteis com automação — a solução que protege o espaço externo sem comprometer o estilo da construção.',
      'A Cobersystem atende Limeira pela Rodovia Anhanguera (SP-330), percorrendo 153 km de São Paulo em 1 hora e 40 minutos. Por ser parte da Região Metropolitana de Campinas, Limeira integra a rota de atendimento que inclui Americana, Sumaré e Rio Claro — o que torna o agendamento mais ágil e permite ao técnico realizar múltiplas visitas na região em um mesmo período.',
      'O clima de Limeira — verões quentes com chuvas intensas e invernos secos — reforça a utilidade da cobertura retrátil com sensor de chuva: o sistema fecha automaticamente quando a precipitação é detectada, protegendo móveis, churrasqueiras e piscinas mesmo durante ausências prolongadas. Para as piscinas, o policarbonato alveolar é a opção mais recomendada: protege contra detritos e folhas sem bloquear a luz solar, reduzindo o tratamento químico necessário.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Limeira para instalação de cobertura retrátil?',
        a: 'Sim. Limeira está a 153 km de SP pela Anhanguera (1h40) e faz parte da rota de Campinas e Americana. Nossa equipe atende o Jardim Éden, Residencial Santa Clara, Parque Santa Júlia e toda a cidade — incluindo cidades vizinhas como Araras, Rio Claro e Piracicaba.',
      },
      {
        q: 'Há custo extra de deslocamento para Limeira?',
        a: 'Não. Para projetos acima de R$15.000, o deslocamento de nossa equipe de SP até Limeira (153 km) está incluído no preço. Para projetos menores, verificamos o custo de frete na hora do orçamento — frequentemente sem custo adicional quando agendamos mais de uma visita na região da RM Campinas na mesma semana.',
      },
      {
        q: 'Qual cobertura é mais indicada para piscinas em Limeira?',
        a: 'Para piscinas em Limeira, o policarbonato alveolar UV é a opção mais instalada: protege contra chuva, folhas e detritos, mantém a translucidez para a luz solar e reduz o aquecimento excessivo da água. Com sensor de chuva, o sistema fecha automaticamente nas tardes de temporal típicas dos verões de Limeira.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Limeira SP: piscina, área gourmet e varanda sob medida. RM Campinas, 153 km de SP. Policarbonato e alumínio. Orçamento grátis.',
    keywords:
      'cobertura retrátil Limeira SP, cobertura abre e fecha Limeira, cobertura piscina Limeira, cobertura policarbonato Limeira Campinas, telhado retrátil Limeira SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // LOTE 3 — 10 cidades Tier 1-2 do interior de SP (atibaia já existia)
  // ─────────────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────
  // 16. BRAGANÇA PAULISTA — Tier 2, 85 km de SP, Região Bragantina
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'braganca-paulista',
    nome: 'Bragança Paulista',
    regiao: 'Região Bragantina',
    distancia_sp_km: 85,
    tempo_deslocamento: '1 hora e 15 minutos',
    referencia_local: 'Santuário de Nossa Senhora Aparecida do Anhanguera',
    cidades_vizinhas: ['Atibaia', 'Piracaia', 'Morungaba', 'Tuiuti'],
    cidades_vizinhas_slugs: ['atibaia'],
    bairros_nobres: ['Jardim Paulista', 'Jardim América', 'Alto do Cardoso'],
    populacao: 165000,
    aplicacao_principal: 'piscina',
    intro: [
      'Bragança Paulista é a principal cidade da Região Bragantina — polo de peregrinação no Santuário de Nossa Senhora Aparecida do Anhanguera e destino de quem busca chácaras e casas de campo para fugir da rotina da capital. Esse perfil de segunda residência, com terrenos amplos e piscinas de uso frequente aos fins de semana, é exatamente onde a cobertura retrátil abre e fecha mais se destaca: protege a água e a área de lazer durante a semana, sem exigir a presença do proprietário.',
      'A Cobersystem chega a Bragança Paulista pela Rodovia Fernão Dias (BR-381), percorrendo 85 km de São Paulo em cerca de 1 hora e 15 minutos. Realizamos visita técnica nos bairros do Jardim Paulista, Jardim América e Alto do Cardoso, além de propriedades rurais na região, com projeto 3D entregue em até 5 dias úteis após a medição in loco.',
      'Bragança Paulista funciona como hub natural para o atendimento de toda a Região Bragantina: a partir daqui, nossa equipe segue para Atibaia, Piracaia, Morungaba e Tuiuti no mesmo roteiro de visitas. O clima de altitude da região — noites frias e tardes de chuva repentina no verão — reforça a utilidade do sensor de chuva automático, que fecha a cobertura em 30 segundos mesmo sem ninguém na propriedade.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Bragança Paulista para instalação de cobertura retrátil?',
        a: 'Sim. Bragança Paulista está a 85 km de SP pela Fernão Dias (1h15) e nossa equipe visita a cidade regularmente, no mesmo roteiro que inclui Atibaia. Atendemos o Jardim Paulista, Jardim América, Alto do Cardoso e chácaras da região.',
      },
      {
        q: 'Cobertura retrátil para piscina funciona bem em casas de fim de semana em Bragança Paulista?',
        a: 'Sim, e é justamente a aplicação mais procurada na cidade. Com o sensor de chuva, a cobertura fecha automaticamente durante a semana quando não há ninguém na propriedade, mantendo a piscina limpa e protegida até o próximo fim de semana — sem precipitação, folhas ou detritos acumulados.',
      },
      {
        q: 'Atendem Atibaia e outras cidades da Região Bragantina a partir de Bragança Paulista?',
        a: 'Sim. Atibaia, Piracaia, Morungaba e Tuiuti fazem parte da mesma rota de atendimento que Bragança Paulista. Frequentemente agendamos visitas técnicas nas duas cidades — Bragança e Atibaia — na mesma semana, o que agiliza o orçamento e a instalação.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Bragança Paulista para piscina, área gourmet e garagem. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Bragança Paulista, cobertura abre e fecha Bragança Paulista, cobertura piscina Bragança Paulista, cobertura policarbonato Região Bragantina, telhado retrátil Bragança Paulista Atibaia',
    metaTitle: 'Cobertura Retrátil em Bragança Paulista | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 17. SÃO ROQUE — Tier 2, 65 km de SP, Rota dos Vinhos
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'sao-roque',
    nome: 'São Roque',
    regiao: 'Região Metropolitana de Sorocaba',
    distancia_sp_km: 65,
    tempo_deslocamento: '55 minutos',
    referencia_local: 'Rota dos Vinhos do Estado de SP',
    cidades_vizinhas: ['Mairinque', 'Araçariguama', 'Itu', 'Sorocaba'],
    cidades_vizinhas_slugs: ['itu'],
    bairros_nobres: ['Centro', 'Jardim Nova São Roque', 'Condomínio Portal das Laranjeiras'],
    populacao: 90000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'São Roque é a capital paulista do vinho — parte da Rota dos Vinhos do Estado de SP, com vinícolas, restaurantes e chácaras que recebem visitantes o ano todo. Esse turismo constante criou demanda por áreas gourmet cobertas de grande porte: espaços para degustação, eventos e recepção de grupos que precisam funcionar tanto em dias de sol quanto durante as chuvas típicas da Serra de São Roque.',
      'A Cobersystem chega a São Roque pela Rodovia Raposo Tavares (SP-270), percorrendo 65 km de São Paulo em apenas 55 minutos — um dos acessos mais rápidos do nosso portfólio no interior. Atendemos o Centro, o Jardim Nova São Roque e o Condomínio Portal das Laranjeiras, além de propriedades rurais junto às vinícolas, com projeto técnico que considera o layout de eventos e a circulação de visitantes.',
      'Vizinha de Mairinque, Araçariguama, Itu e Sorocaba, São Roque integra uma rota de atendimento consolidada da Cobersystem na Região Metropolitana de Sorocaba. O sensor de chuva é um diferencial valorizado pelos proprietários de vinícolas e pousadas da região: fecha automaticamente a cobertura da área gourmet mesmo durante um evento em andamento, sem interromper a recepção dos convidados.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem instala cobertura retrátil em São Roque?',
        a: 'Sim. São Roque está a 65 km de SP pela Raposo Tavares (55 minutos), um dos acessos mais rápidos do nosso portfólio no interior. Atendemos o Centro, Jardim Nova São Roque, Condomínio Portal das Laranjeiras e propriedades rurais da região.',
      },
      {
        q: 'A cobertura retrátil para área gourmet serve para vinícolas e espaços de eventos em São Roque?',
        a: 'Sim. É a aplicação mais comum na cidade. Projetamos coberturas de maior vão para acomodar mesas de degustação, buffet e circulação de visitantes, com estrutura reforçada e sensor de chuva que protege o evento sem necessidade de intervenção manual.',
      },
      {
        q: 'Atendem Itu e outras cidades da Rota dos Vinhos próximas a São Roque?',
        a: 'Sim. Itu faz parte da mesma rota de atendimento que São Roque, e nossa equipe também visita Mairinque, Araçariguama e Sorocaba com frequência. O agendamento costuma ser mais rápido quando há mais de um projeto na região da Serra de São Roque.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em São Roque para área gourmet, piscina e varanda. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil São Roque, cobertura abre e fecha São Roque, cobertura área gourmet São Roque, cobertura vinícola São Roque, telhado retrátil São Roque Rota dos Vinhos',
    metaTitle: 'Cobertura Retrátil em São Roque | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 18. JACAREÍ — Tier 2, 90 km de SP, Vale do Paraíba Paulista
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'jacarei',
    nome: 'Jacareí',
    regiao: 'Vale do Paraíba Paulista',
    distancia_sp_km: 90,
    tempo_deslocamento: '1 hora',
    referencia_local: 'Rio Paraíba do Sul',
    cidades_vizinhas: ['São José dos Campos', 'Santa Branca', 'Paraibuna', 'Igaratá'],
    cidades_vizinhas_slugs: ['sao-jose-dos-campos'],
    bairros_nobres: ['Jardim California', 'Altos de Jacareí', 'Monte Castelo'],
    populacao: 240000,
    aplicacao_principal: 'garagem',
    intro: [
      'Jacareí, às margens do Rio Paraíba do Sul, é um dos polos industriais e logísticos do Vale do Paraíba — perfil que se reflete em bairros residenciais consolidados como Jardim California, Altos de Jacareí e Monte Castelo, onde casas com duas ou mais vagas de garagem buscam proteção veicular sem abrir mão da ventilação. A cobertura retrátil para garagem é a aplicação mais solicitada pelos moradores da cidade.',
      'A Cobersystem atende Jacareí pela Rodovia Presidente Dutra (BR-116), percorrendo 90 km de São Paulo em cerca de 1 hora. Por integrar o mesmo corredor de São José dos Campos, um dos nossos destinos mais frequentes no Vale do Paraíba, o agendamento de visita técnica em Jacareí costuma ser resolvido em poucos dias úteis.',
      'Cidades vizinhas como São José dos Campos, Santa Branca, Paraibuna e Igaratá também recebem nossa equipe com regularidade. Em condomínios fechados de Jacareí, a cobertura retrátil para garagem é frequentemente combinada com portão retrátil frontal, formando um sistema completo de proteção veicular compatível com as normas da administração condominial.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Jacareí para instalação de cobertura retrátil?',
        a: 'Sim. Jacareí está a 90 km de SP pela Dutra (1 hora), no mesmo corredor de São José dos Campos. Atendemos o Jardim California, Altos de Jacareí, Monte Castelo e condomínios fechados de toda a cidade.',
      },
      {
        q: 'Cobertura retrátil para garagem em Jacareí pode ser combinada com portão automático?',
        a: 'Sim. É a configuração mais instalada na cidade: cobertura retrátil sobre a garagem combinada com fechamento frontal por portão retrátil, formando proteção completa contra chuva e poeira sem bloquear a ventilação do veículo.',
      },
      {
        q: 'Atendem São José dos Campos e outras cidades vizinhas de Jacareí no mesmo agendamento?',
        a: 'Sim. São José dos Campos, Santa Branca, Paraibuna e Igaratá fazem parte da mesma rota do Vale do Paraíba. Frequentemente agrupamos visitas técnicas em Jacareí e São José dos Campos na mesma semana, reduzindo o prazo total de entrega.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Jacareí para garagem, área gourmet e piscina. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Jacareí, cobertura abre e fecha Jacareí, cobertura garagem Jacareí, cobertura policarbonato Vale do Paraíba, telhado retrátil Jacareí São José dos Campos',
    metaTitle: 'Cobertura Retrátil em Jacareí | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 19. TAUBATÉ — Tier 2, 130 km de SP, Vale do Paraíba Paulista
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'taubate',
    nome: 'Taubaté',
    regiao: 'Vale do Paraíba Paulista',
    distancia_sp_km: 130,
    tempo_deslocamento: '1 hora e 30 minutos',
    referencia_local: 'Centro Histórico de Taubaté',
    cidades_vizinhas: ['Pindamonhangaba', 'Tremembé', 'Caçapava', 'Guaratinguetá'],
    cidades_vizinhas_slugs: ['jacarei', 'sao-jose-dos-campos'],
    bairros_nobres: ['Jardim das Nações', 'Parque Bela Vista', 'Nova Taubaté'],
    populacao: 320000,
    aplicacao_principal: 'varanda',
    intro: [
      'Taubaté, terra natal de Monteiro Lobato e um dos centros culturais mais tradicionais do Vale do Paraíba, tem no seu Centro Histórico e nos bairros como Jardim das Nações, Parque Bela Vista e Nova Taubaté um estilo arquitetônico de sobrados com varandas amplas — espaços de convivência que os moradores querem preservar sem abrir mão de proteção contra chuva.',
      'A Cobersystem chega a Taubaté pela Rodovia Presidente Dutra (BR-116), percorrendo 130 km de São Paulo em 1 hora e 30 minutos. Por integrar o mesmo corredor de Jacareí e São José dos Campos, cidades que atendemos com frequência no Vale do Paraíba, conseguimos agendar visitas técnicas em Taubaté com prazo reduzido em relação a cidades isoladas de distância similar.',
      'Para as varandas de sobrado em Taubaté, o material mais recomendado é o alumínio intercalado — que preserva parte da opacidade e combina com fachadas de estilo mais tradicional — ou o policarbonato, para quem prioriza luz natural. Vizinhas como Pindamonhangaba, Tremembé, Caçapava e Guaratinguetá também fazem parte da nossa rota regular no Vale do Paraíba.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Taubaté para instalação de cobertura retrátil?',
        a: 'Sim. Taubaté está a 130 km de SP pela Dutra (1h30), no mesmo corredor de Jacareí e São José dos Campos. Atendemos o Centro Histórico, Jardim das Nações, Parque Bela Vista, Nova Taubaté e toda a cidade.',
      },
      {
        q: 'Qual material de cobertura retrátil combina melhor com as varandas tradicionais de Taubaté?',
        a: 'Para sobrados de estilo mais tradicional no Centro Histórico e bairros próximos, o alumínio intercalado costuma harmonizar melhor com a fachada. Para quem prioriza luz natural na varanda, o policarbonato alveolar é a opção mais indicada. A visita técnica ajuda a definir a melhor escolha.',
      },
      {
        q: 'Atendem Jacareí e São José dos Campos no mesmo roteiro de visita a Taubaté?',
        a: 'Sim. Jacareí e São José dos Campos ficam no mesmo corredor da Dutra que Taubaté, e frequentemente agendamos as três cidades na mesma semana — o que agiliza o orçamento e reduz o prazo de instalação para quem mora na região.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Taubaté para varanda, área gourmet e piscina. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Taubaté, cobertura abre e fecha Taubaté, cobertura varanda Taubaté, cobertura policarbonato Vale do Paraíba, telhado retrátil Taubaté Jacareí',
    metaTitle: 'Cobertura Retrátil em Taubaté | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 20. SANTA BÁRBARA D'OESTE — Tier 1, 130 km de SP, RM Campinas
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'santa-barbara-d-oeste',
    nome: "Santa Bárbara d'Oeste",
    regiao: 'Região Metropolitana de Campinas',
    distancia_sp_km: 130,
    tempo_deslocamento: '1 hora e 25 minutos',
    referencia_local: 'Museu da Imigração Americana',
    cidades_vizinhas: ['Americana', 'Nova Odessa', 'Sumaré', 'Hortolândia'],
    cidades_vizinhas_slugs: ['americana', 'sumare'],
    bairros_nobres: ['Jardim Europa', 'Jardim São Fernando', 'Vila Mollon IV'],
    populacao: 195000,
    aplicacao_principal: 'garagem',
    intro: [
      "Santa Bárbara d'Oeste carrega a herança dos imigrantes norte-americanos que se instalaram na região após a Guerra de Secessão, preservada até hoje no Museu da Imigração Americana. O perfil residencial da cidade, com casas térreas e sobrados nos bairros Jardim Europa, Jardim São Fernando e Vila Mollon IV, tem forte demanda por cobertura retrátil para garagens — a aplicação mais procurada pelos moradores locais.",
      "A Cobersystem chega a Santa Bárbara d'Oeste pela Rodovia Anhanguera (SP-330) e Bandeirantes, percorrendo 130 km de São Paulo em 1 hora e 25 minutos. Por fazer parte da mesma rota de atendimento que Americana e Sumaré — cidades que já atendemos regularmente na Região Metropolitana de Campinas — o agendamento de visita técnica costuma ser resolvido com agilidade.",
      "Vizinha direta de Americana, Nova Odessa, Sumaré e Hortolândia, Santa Bárbara d'Oeste integra um dos trechos mais atendidos do nosso portfólio no interior. Para as garagens da cidade, a estrutura em alumínio anodizado com fechamento frontal opcional é a configuração mais instalada, sempre com motorização elétrica silenciosa e possibilidade de sensor de chuva.",
    ],
    faq_geo: [
      {
        q: "A Cobersystem atende Santa Bárbara d'Oeste para instalação de cobertura retrátil?",
        a: "Sim. Santa Bárbara d'Oeste está a 130 km de SP pela Anhanguera (1h25), na mesma rota de Americana e Sumaré. Atendemos o Jardim Europa, Jardim São Fernando, Vila Mollon IV e toda a cidade.",
      },
      {
        q: "Qual a configuração de cobertura retrátil mais instalada em garagens em Santa Bárbara d'Oeste?",
        a: 'A estrutura em alumínio anodizado com motorização elétrica é a mais comum, muitas vezes combinada com fechamento frontal para proteção completa do veículo. O sistema não bloqueia a ventilação e dispensa manutenção de pintura ao longo dos anos.',
      },
      {
        q: "Atendem Americana e Sumaré no mesmo agendamento de Santa Bárbara d'Oeste?",
        a: "Sim. Americana, Nova Odessa, Sumaré e Hortolândia fazem parte da mesma rota de atendimento que Santa Bárbara d'Oeste na Região Metropolitana de Campinas, o que agiliza o orçamento e a instalação para quem mora nessas cidades.",
      },
    ],
    metaDescription:
      "Cobertura retrátil em Santa Bárbara d'Oeste para garagem, área gourmet e piscina. Instalação por equipe própria, sob medida. Orçamento grátis.",
    keywords:
      "cobertura retrátil Santa Bárbara d'Oeste, cobertura abre e fecha Santa Bárbara d'Oeste, cobertura garagem Santa Bárbara d'Oeste, cobertura policarbonato RM Campinas, telhado retrátil Santa Bárbara d'Oeste Americana",
    metaTitle: "Cobertura Retrátil em Santa Bárbara d'Oeste | Cobersystem",
  },

  // ─────────────────────────────────────────────────────────────────────
  // 21. ARARAS — Tier 3, 160 km de SP, Região de Piracicaba
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'araras',
    nome: 'Araras',
    regiao: 'Região de Piracicaba',
    distancia_sp_km: 160,
    tempo_deslocamento: '1 hora e 45 minutos',
    referencia_local: 'Parque Municipal das Araras',
    cidades_vizinhas: ['Leme', 'Limeira', 'Pirassununga', 'Rio Claro'],
    cidades_vizinhas_slugs: ['limeira'],
    bairros_nobres: ['Jardim Sônia', 'Jardim Brasil', 'Vila Bela Vista'],
    populacao: 120000,
    aplicacao_principal: 'piscina',
    intro: [
      'Araras, cidade de forte tradição agrícola na Região de Piracicaba, tem no clima quente do interior paulista um motivo direto para o crescimento das piscinas residenciais — presentes em boa parte das casas dos bairros Jardim Sônia, Jardim Brasil e Vila Bela Vista. A cobertura retrátil para piscina é a aplicação mais procurada pelos moradores de Araras, que buscam reduzir o trabalho de limpeza sem perder a luminosidade do espaço.',
      'A Cobersystem atende Araras pela Rodovia Anhanguera (SP-330), percorrendo 160 km de São Paulo em 1 hora e 45 minutos. Por integrar a mesma rota de Limeira, cidade vizinha que já atendemos regularmente na Região de Piracicaba, o agendamento de visita técnica em Araras costuma ocorrer em conjunto com projetos da região.',
      'Vizinha de Leme, Limeira, Pirassununga e Rio Claro, Araras se beneficia do clima quente do interior — que favorece o uso intenso da piscina praticamente o ano todo — mas também das chuvas de verão que exigem proteção. O policarbonato alveolar UV, com sensor de chuva automático, é o material mais indicado para as instalações da cidade.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Araras para instalação de cobertura retrátil?',
        a: 'Sim. Araras está a 160 km de SP pela Anhanguera (1h45), na mesma rota de atendimento de Limeira. Atendemos o Jardim Sônia, Jardim Brasil, Vila Bela Vista e toda a cidade.',
      },
      {
        q: 'Cobertura retrátil para piscina compensa em uma cidade quente como Araras?',
        a: 'Sim, e é a aplicação mais procurada na cidade. O policarbonato alveolar UV protege a piscina de folhas e detritos sem bloquear a luz solar, reduzindo o trabalho de limpeza e o consumo de produtos químicos, mesmo com o uso intenso típico do clima de Araras.',
      },
      {
        q: 'Atendem Limeira e outras cidades vizinhas de Araras no mesmo período?',
        a: 'Sim. Limeira, Leme, Pirassununga e Rio Claro fazem parte da mesma região de atendimento que Araras. Frequentemente agendamos visitas técnicas em Araras e Limeira na mesma semana, o que reduz o prazo de orçamento e instalação.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Araras para piscina, área gourmet e garagem. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Araras SP, cobertura abre e fecha Araras, cobertura piscina Araras, cobertura policarbonato Região de Piracicaba, telhado retrátil Araras Limeira',
    metaTitle: 'Cobertura Retrátil em Araras | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 22. PORTO FELIZ — Tier 3, 120 km de SP, Região de Sorocaba
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'porto-feliz',
    nome: 'Porto Feliz',
    regiao: 'Região de Sorocaba',
    distancia_sp_km: 120,
    tempo_deslocamento: '1 hora e 20 minutos',
    referencia_local: 'Rio Tietê e Rota dos Bandeirantes',
    cidades_vizinhas: ['Boituva', 'Tietê', 'Salto', 'Itu'],
    cidades_vizinhas_slugs: ['boituva', 'salto', 'itu'],
    bairros_nobres: ['Jardim São José', 'Vila Antunes', 'Parque Residencial Beira Rio'],
    populacao: 57000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Porto Feliz, ponto de partida histórico da Rota dos Bandeirantes às margens do Rio Tietê, tem um perfil residencial que valoriza o convívio ao ar livre — chácaras e casas no Parque Residencial Beira Rio, Jardim São José e Vila Antunes com áreas gourmet voltadas para o rio e para receber família e amigos nos fins de semana. A cobertura retrátil é a solução para aproveitar esses espaços mesmo nos dias de chuva.',
      'A Cobersystem chega a Porto Feliz pela Rodovia Castello Branco (SP-280), percorrendo 120 km de São Paulo em 1 hora e 20 minutos. A cidade integra a mesma rota de atendimento de Boituva, Salto e Itu, o que permite à nossa equipe realizar visitas técnicas consecutivas na região e reduzir o prazo médio de agendamento.',
      'Nas propriedades às margens do Rio Tietê, a área gourmet coberta é frequentemente combinada com deck e churrasqueira voltados para a vista do rio. O sensor de chuva é um diferencial valorizado pelos moradores de Porto Feliz: protege o mobiliário e a churrasqueira automaticamente, mesmo durante as tardes de temporal comuns na Região de Sorocaba entre outubro e março.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem instala cobertura retrátil em Porto Feliz?',
        a: 'Sim. Porto Feliz está a 120 km de SP pela Castello Branco (1h20), na mesma rota de Boituva, Salto e Itu. Atendemos o Parque Residencial Beira Rio, Jardim São José, Vila Antunes e toda a cidade, incluindo chácaras às margens do Rio Tietê.',
      },
      {
        q: 'A cobertura retrátil para área gourmet funciona bem em propriedades às margens do rio em Porto Feliz?',
        a: 'Sim. É a aplicação mais comum na cidade. Projetamos a cobertura considerando a vista para o Rio Tietê, com estrutura em alumínio anodizado resistente à umidade e sensor de chuva que protege deck, churrasqueira e mobiliário automaticamente.',
      },
      {
        q: 'Atendem Boituva, Salto e Itu no mesmo roteiro de visita a Porto Feliz?',
        a: 'Sim. Boituva, Salto e Itu fazem parte da mesma rota de atendimento que Porto Feliz na Região de Sorocaba. Frequentemente agrupamos visitas técnicas nessas cidades na mesma semana, o que agiliza o orçamento e a instalação.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Porto Feliz para área gourmet, piscina e varanda. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Porto Feliz, cobertura abre e fecha Porto Feliz, cobertura área gourmet Porto Feliz, cobertura policarbonato Rio Tietê, telhado retrátil Porto Feliz Itu',
    metaTitle: 'Cobertura Retrátil em Porto Feliz | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 23. BOITUVA — Tier 2, 115 km de SP, Região de Sorocaba
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'boituva',
    nome: 'Boituva',
    regiao: 'Região de Sorocaba',
    distancia_sp_km: 115,
    tempo_deslocamento: '1 hora e 20 minutos',
    referencia_local: 'Capital Nacional do Paraquedismo',
    cidades_vizinhas: ['Tatuí', 'Porto Feliz', 'Cerquilho', 'Tietê'],
    cidades_vizinhas_slugs: ['tatui', 'porto-feliz'],
    bairros_nobres: ['Jardim Alvorada', 'Parque das Orquídeas', 'Jardim São Jorge'],
    populacao: 65000,
    aplicacao_principal: 'area-gourmet',
    intro: [
      'Boituva é conhecida como a Capital Nacional do Paraquedismo, atraindo praticantes e turistas o ano todo para as zonas de salto da cidade. Esse fluxo constante de visitantes impulsionou pousadas, chácaras e residências nos bairros Jardim Alvorada, Parque das Orquídeas e Jardim São Jorge a investirem em áreas gourmet cobertas — espaços para receber grupos após os saltos, seja para uma confraternização ao ar livre, seja durante a chuva.',
      'A Cobersystem chega a Boituva pela Rodovia Castello Branco (SP-280), percorrendo 115 km de São Paulo em 1 hora e 20 minutos. Por integrar a mesma rota de Tatuí e Porto Feliz, cidades vizinhas que também atendemos, o agendamento de visita técnica em Boituva costuma ser resolvido de forma ágil, muitas vezes na mesma semana das visitas à região.',
      'Para pousadas e propriedades que recebem grupos regularmente, o projeto de cobertura retrátil considera vãos maiores e estrutura reforçada, sempre com motorização elétrica e sensor de chuva — recurso especialmente valorizado por quem administra hospedagem e não pode depender de alguém disponível para fechar manualmente a cobertura a qualquer hora do dia.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Boituva para instalação de cobertura retrátil?',
        a: 'Sim. Boituva está a 115 km de SP pela Castello Branco (1h20), na mesma rota de Tatuí e Porto Feliz. Atendemos o Jardim Alvorada, Parque das Orquídeas, Jardim São Jorge e pousadas de toda a cidade.',
      },
      {
        q: 'Cobertura retrátil para área gourmet é indicada para pousadas em Boituva?',
        a: 'Sim. É a aplicação mais frequente na cidade, dado o fluxo constante de visitantes do paraquedismo. Projetamos coberturas com vão maior e estrutura reforçada, com sensor de chuva que garante proteção automática mesmo quando não há ninguém disponível para fechar manualmente.',
      },
      {
        q: 'Atendem Tatuí e Porto Feliz no mesmo agendamento de Boituva?',
        a: 'Sim. Tatuí, Porto Feliz, Cerquilho e Tietê fazem parte da mesma rota de atendimento que Boituva na Região de Sorocaba, o que reduz o prazo de orçamento e instalação para quem está nessas cidades vizinhas.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Boituva para área gourmet, piscina e varanda. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Boituva, cobertura abre e fecha Boituva, cobertura área gourmet Boituva, cobertura policarbonato Boituva Sorocaba, telhado retrátil Boituva Tatuí',
    metaTitle: 'Cobertura Retrátil em Boituva | Cobersystem SP',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 24. TATUÍ — Tier 2, 145 km de SP, Região de Sorocaba
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'tatui',
    nome: 'Tatuí',
    regiao: 'Região de Sorocaba',
    distancia_sp_km: 145,
    tempo_deslocamento: '1 hora e 40 minutos',
    referencia_local: 'Conservatório Dramático e Musical de Tatuí',
    cidades_vizinhas: ['Boituva', 'Porto Feliz', 'Cerquilho', 'Iperó'],
    cidades_vizinhas_slugs: ['boituva', 'porto-feliz'],
    bairros_nobres: ['Jardim Boa Vista', 'Parque São Bento', 'Jardim Paulistano'],
    populacao: 120000,
    aplicacao_principal: 'varanda',
    intro: [
      'Tatuí é reconhecida como polo cultural e musical do interior paulista, sede do tradicional Conservatório Dramático e Musical de Tatuí. Essa identidade cultural se reflete em bairros com casas de arquitetura mais tradicional, como o Jardim Boa Vista, Parque São Bento e Jardim Paulistano, onde varandas amplas são um espaço valorizado de convivência — e é essa a aplicação mais procurada pelos moradores da cidade.',
      'A Cobersystem chega a Tatuí pela Rodovia Castello Branco (SP-280), percorrendo 145 km de São Paulo em 1 hora e 40 minutos. Por integrar a mesma rota de Boituva e Porto Feliz, cidades vizinhas que atendemos com regularidade na Região de Sorocaba, conseguimos agendar visitas técnicas em Tatuí em prazo reduzido.',
      'Para as varandas de Tatuí, oferecemos tanto o policarbonato — que preserva a luminosidade natural — quanto o alumínio intercalado, mais discreto e compatível com fachadas de estilo mais tradicional. O sensor de chuva automático é recomendado especialmente para quem viaja com frequência: fecha a cobertura em 30 segundos assim que detecta precipitação, protegendo móveis e plantas da varanda.',
    ],
    faq_geo: [
      {
        q: 'A Cobersystem atende Tatuí para instalação de cobertura retrátil?',
        a: 'Sim. Tatuí está a 145 km de SP pela Castello Branco (1h40), na mesma rota de Boituva e Porto Feliz. Atendemos o Jardim Boa Vista, Parque São Bento, Jardim Paulistano e toda a cidade.',
      },
      {
        q: 'Qual material de cobertura retrátil é mais indicado para varandas em Tatuí?',
        a: 'Depende do estilo da fachada: para casas de arquitetura mais tradicional, o alumínio intercalado costuma harmonizar melhor; para quem prioriza luz natural, o policarbonato alveolar é a opção mais indicada. A visita técnica ajuda a definir a melhor escolha para o seu projeto.',
      },
      {
        q: 'Atendem Boituva e Porto Feliz no mesmo roteiro de visita a Tatuí?',
        a: 'Sim. Boituva, Porto Feliz, Cerquilho e Iperó fazem parte da mesma rota de atendimento que Tatuí na Região de Sorocaba, o que reduz o prazo de orçamento e instalação para quem mora nessas cidades vizinhas.',
      },
    ],
    metaDescription:
      'Cobertura retrátil em Tatuí para varanda, área gourmet e piscina. Instalação por equipe própria, sob medida. Orçamento grátis.',
    keywords:
      'cobertura retrátil Tatuí, cobertura abre e fecha Tatuí, cobertura varanda Tatuí, cobertura policarbonato Tatuí Sorocaba, telhado retrátil Tatuí Boituva',
    metaTitle: 'Cobertura Retrátil em Tatuí | Cobersystem SP',
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
