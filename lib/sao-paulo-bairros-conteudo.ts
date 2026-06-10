import type { SpBairroSlug } from '@/lib/sao-paulo-bairros';

/** Linha de produto para páginas em /produtos/.../em/sao-paulo/[bairro] */
export type LinhaProdutoSpBairro =
  | 'policarbonato'
  | 'retratil'
  | 'abreEFecha'
  | 'termoacustica';

export interface SeoBairroLinha {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  paragrafos: [string, string, string];
}

type MapaConteudo = Record<
  SpBairroSlug,
  Record<LinhaProdutoSpBairro, SeoBairroLinha>
>;

export const CONTEUDO_SP_BAIRROS: MapaConteudo = {
  brooklin: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Brooklin, SP | Cobersystem',
      metaDescription:
        'Cobertura fixa em policarbonato no Brooklin, Zona Sul de SP: compacto e alveolar para fachadas e áreas comuns. Orçamento e visita técnica.',
      keywords:
        'cobertura policarbonato Brooklin, policarbonato Zona Sul SP, cobertura fixa Brooklin, policarbonato compacto Brooklin',
      paragrafos: [
        'No Brooklin, a concentração de empreendimentos corporativos e residenciais de alto padrão pede soluções que unam estética e durabilidade nas áreas externas.',
        'A cobertura fixa em policarbonato compacto ou alveolar permite controlar a entrada de luz natural em terraços, entradas sociais e passagens cobertas sem peso visual excessivo.',
        'A Cobersystem realiza levantamento no Brooklin e adjacências, com fixação em alumínio e especificação alinhada às exigências de cada fachada ou condomínio.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Brooklin, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil no Brooklin, SP: telhas ou policarbonato com abertura graduada. Projeto sob medida na Zona Sul. Solicite orçamento.',
      keywords:
        'cobertura retrátil Brooklin, cobertura abre fecha Brooklin SP, telha retrátil Zona Sul, policarbonato retrátil Brooklin',
      paragrafos: [
        'Empresas e residências no Brooklin utilizam cobertura retrátil para alternar entre ambiente aberto para eventos e proteção total em dias de chuva.',
        'Modelos em telha de alumínio, intercalada ou policarbonato adaptam-se a vãos amplos típicos de lobbies e áreas gourmet em edifícios da região.',
        'Oferecemos motorização opcional e integração com automação, com instalação planejada para minimizar interferência na rotina do condomínio ou escritório.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Brooklin, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha no Brooklin: sistema retrátil com automação Alexa e sensor de chuva. Visita técnica na Zona Sul de São Paulo.',
      keywords:
        'cobertura abre e fecha Brooklin, automação cobertura Brooklin, Alexa cobertura Zona Sul, sensor chuva Brooklin SP',
      paragrafos: [
        'No Brooklin, a cobertura abre e fecha é escolhida para varandas gourmet e espaços multifuncionais que precisam de controle fino de ventilação e fechamento rápido.',
        'A abertura de 0 a 90 graus combina com projetos que priorizam conforto térmico e integração com controle remoto ou assistentes de voz.',
        'Dimensionamos motores, trilhos e acabamentos conforme o vão real da obra na Zona Sul, com suporte técnico pós-instalação.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Brooklin, SP | Cobersystem',
      metaDescription:
        'Painel sanduíche termoacústico no Brooklin: EPS, PU ou lã de rocha para isolamento térmico e acústico. Orçamento na Zona Sul.',
      keywords:
        'cobertura termoacústica Brooklin, painel sanduíche Brooklin SP, isolamento telhado Zona Sul, galpão sanduíche Brooklin',
      paragrafos: [
        'Ampliações comerciais e retrofit de coberturas no Brooklin se beneficiam do painel sanduíche, que reduz ruído urbano e estabiliza temperatura interna.',
        'O núcleo em EPS, poliuretano ou lã de rocha é definido conforme norma de reação ao fogo e meta de desempenho acústico do projeto.',
        'Executamos especificação e montagem com atenção a emendas e calhas, preservando a continuidade do isolamento em toda a superfície.',
      ],
    },
  },
  mooca: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Mooca, SP | Cobersystem',
      metaDescription:
        'Cobertura fixa em policarbonato na Mooca: proteção para varandas, garagens e comércio. Compacto e alveolar. Orçamento na Zona Leste.',
      keywords:
        'cobertura policarbonato Mooca, policarbonato Zona Leste SP, cobertura fixa Mooca, varanda coberta Mooca',
      paragrafos: [
        'Na Mooca, casarões reformados e comércio de rua buscam coberturas leves que preservem luminosidade e resistam ao uso diário da vizinhança.',
        'O policarbonato compacto ou alveolar fecha passagens, quintais e vitrines com proteção UV e impacto, sem escurecer demais o ambiente.',
        'Atendemos a região com medição em obra e fixações adequadas a alvenaria, estrutura metálica ou madeira conforme cada imóvel.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Mooca, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil na Mooca, SP: telhas ou policarbonato para quintais e áreas de churrasco. Projeto sob medida na Zona Leste.',
      keywords:
        'cobertura retrátil Mooca, cobertura Mooca Zona Leste, telha retrátil Mooca, área gourmet Mooca',
      paragrafos: [
        'Moradores da Mooca valorizam quintais e edículas onde a cobertura retrátil libera o céu em dias claros e fecha com segurança quando o tempo fecha.',
        'A linha com telhas ou policarbonato atende desde vãos compactos até áreas de festa maiores, com trilhos e motores dimensionados corretamente.',
        'A Cobersystem elabora orçamento detalhado com prazos de instalação compatíveis com a rotina de quem mora na região.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Mooca, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha na Mooca: ventilação e proteção com automação opcional. Sensor de chuva e controle remoto. Visita na Zona Leste.',
      keywords:
        'cobertura abre e fecha Mooca, automação cobertura Mooca, sensor chuva Mooca SP, cobertura retrátil Mooca',
      paragrafos: [
        'Na Mooca, famílias que ampliaram a casa com varanda gourmet encontram na cobertura abre e fecha o equilíbrio entre convivência ao ar livre e abrigo na chuva.',
        'O sistema permite regular a abertura conforme sol e vento, reduzindo sensação de estufa sem perder a praticidade do fechamento motorizado.',
        'Realizamos visita técnica no bairro para alinhar estrutura existente, beiral e escoamento de água ao projeto retrátil.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Mooca, SP | Cobersystem',
      metaDescription:
        'Cobertura sanduíche termoacústica na Mooca: isolamento para galpões, sobrelojas e residências. EPS, PU e lã de rocha. Orçamento Zona Leste.',
      keywords:
        'cobertura termoacústica Mooca, painel sanduíche Mooca, isolamento acústico Zona Leste SP, telhado sanduíche Mooca',
      paragrafos: [
        'Pequenos galpões e comércios na Mooca ganham conforto com painéis sanduíche que diminuem calor no teto e abafam ruído de chuva e trânsito.',
        'A escolha entre EPS, PU ou lã de rocha depende do orçamento, exigência de fogo e nível de isolamento acústico desejado.',
        'Montagem modular agiliza obras na região, com vedação contínua entre painéis para evitar pontes térmicas.',
      ],
    },
  },
  morumbi: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Morumbi, SP | Cobersystem',
      metaDescription:
        'Cobertura fixa em policarbonato no Morumbi: residências de alto padrão, mansões e condomínios fechados. Visita técnica e orçamento.',
      keywords:
        'cobertura policarbonato Morumbi, policarbonato Morumbi SP, cobertura fixa Morumbi, cobertura condomínio Morumbi',
      paragrafos: [
        'No Morumbi, casas com grandes áreas externas e condomínios fechados de alto padrão demandam coberturas que respeitem a estética do projeto arquitetônico original.',
        'O policarbonato compacto UV garante claridade e proteção sem comprometer a leveza visual de terraços, piscinas e corredores de lazer.',
        'A Cobersystem realiza visita técnica e projeto sob medida no Morumbi, com especificação de perfis e acabamentos integrados ao paisagismo.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Morumbi, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil no Morumbi: sistema abre e fecha para áreas gourmet e piscinas em casas e condomínios de alto padrão. Orçamento SP.',
      keywords:
        'cobertura retrátil Morumbi, cobertura abre fecha Morumbi, cobertura área gourmet Morumbi, telhado retrátil Morumbi SP',
      paragrafos: [
        'Residências de alto padrão no Morumbi utilizam cobertura retrátil para transformar áreas externas em ambientes versáteis ao longo do dia.',
        'O sistema em telha intercalada ou policarbonato combina com projetos que exigem acabamento premium e integração com automação residencial avançada.',
        'Oferecemos motorização silenciosa, sensor de chuva e integração com Alexa para proporcionar conforto e praticidade compatíveis com o padrão do bairro.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Morumbi, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha no Morumbi: automação Alexa, sensor de chuva e motor silencioso para casas de alto padrão. Visita técnica grátis.',
      keywords:
        'cobertura abre e fecha Morumbi, automação cobertura Morumbi, Alexa cobertura Morumbi SP, sensor chuva Morumbi',
      paragrafos: [
        'No Morumbi, a cobertura abre e fecha é a escolha de quem busca máximo conforto em áreas gourmet e piscinas com controle total pelo smartphone ou Alexa.',
        'A abertura graduada permite regular sombreamento, ventilação e proteção de forma independente em cada seção do espaço coberto.',
        'Instalamos com rigor de acabamento e testes completos de automação antes da entrega, garantindo operação silenciosa e confiável.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Morumbi, SP | Cobersystem',
      metaDescription:
        'Painel sanduíche termoacústico no Morumbi: conforto térmico e acústico para ampliações em residências de alto padrão. Orçamento SP.',
      keywords:
        'cobertura termoacústica Morumbi, painel sanduíche Morumbi SP, isolamento telhado Morumbi, cobertura alto padrão Morumbi',
      paragrafos: [
        'Ampliações e coberturas novas no Morumbi podem usar painel sanduíche para garantir conforto térmico no verão e acústico em relação ao ruído externo.',
        'O núcleo em poliuretano oferece o melhor desempenho por espessura, adequado a projetos premium com restrição de altura disponível.',
        'Realizamos montagem limpa e alinhada ao projeto do arquiteto, com calhas e arremates em alumínio que mantêm o padrão estético do imóvel.',
      ],
    },
  },
  pinheiros: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Pinheiros, SP | Cobersystem',
      metaDescription:
        'Cobertura fixa em policarbonato em Pinheiros: residências, estabelecimentos e fachadas criativas. Compacto e alveolar. Orçamento SP.',
      keywords:
        'cobertura policarbonato Pinheiros, policarbonato Pinheiros SP, cobertura fixa Pinheiros, cobertura comercial Pinheiros',
      paragrafos: [
        'Pinheiros reúne residências de alto padrão, bares, restaurantes e ateliês onde a cobertura em policarbonato resolve entradas, terraços e pátios com leveza e design.',
        'O compacto UV protege de sol e chuva mantendo visibilidade e luminosidade; o alveolar é ideal onde o isolamento térmico pesa mais.',
        'A Cobersystem atende Pinheiros com projeto personalizado e execução rápida, alinhada ao ritmo intenso do bairro.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Pinheiros, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil em Pinheiros, SP: para residências e estabelecimentos que precisam de flexibilidade climática. Projeto sob medida.',
      keywords:
        'cobertura retrátil Pinheiros, cobertura abre fecha Pinheiros, telha retrátil Pinheiros SP, área gourmet Pinheiros',
      paragrafos: [
        'Em Pinheiros, residências com quintais e estabelecimentos gastronômicos usam cobertura retrátil para adaptar o espaço entre uso interno e externo conforme clima e movimento.',
        'A linha com telhas de alumínio ou policarbonato entrega acabamento contemporâneo que dialoga com o perfil arquitetônico eclético do bairro.',
        'Realizamos orçamento detalhado para Pinheiros com especificação de motor, guias e revestimento alinhados ao projeto de cada cliente.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Pinheiros, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha em Pinheiros: controle climático com automação Alexa e sensor de chuva. Visita técnica gratuita na Zona Oeste.',
      keywords:
        'cobertura abre e fecha Pinheiros, automação cobertura Pinheiros, sensor chuva Pinheiros SP, cobertura retrátil Zona Oeste',
      paragrafos: [
        'O perfil de alto uso de áreas externas em Pinheiros — desde happy hours a jantares — faz da cobertura abre e fecha a solução mais versátil para bares e casas da região.',
        'A automação via Alexa e sensor de chuva elimina a preocupação de fechar manualmente quando há risco de precipitação.',
        'Atendemos Pinheiros e Alto de Pinheiros com instalação cuidadosa em imóveis que frequentemente têm tombamento ou restrições de fachada.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Pinheiros, SP | Cobersystem',
      metaDescription:
        'Painel sanduíche termoacústico em Pinheiros: conforto em reformas e coberturas novas para residências e comércio. EPS, PU ou lã de rocha.',
      keywords:
        'cobertura termoacústica Pinheiros, painel sanduíche Pinheiros SP, isolamento acústico Zona Oeste, telhado sanduíche Pinheiros',
      paragrafos: [
        'Reformas em sobrados e comércios em Pinheiros se beneficiam do painel sanduíche para reduzir calor no último pavimento e barulho de chuva intensa.',
        'O perfil EPS reduz custo; o PU entrega mais isolamento por centímetro, útil em reformas com pouco pé-direito disponível.',
        'Entregamos projeto executivo com calhas, fixações e emendas detalhadas para aprovação do arquiteto ou responsável técnico da obra.',
      ],
    },
  },
  moema: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Moema, SP | Cobersystem',
      metaDescription:
        'Cobertura fixa em policarbonato em Moema: casas e condomínios de alto padrão próximos ao Ibirapuera. Compacto e alveolar. Orçamento SP.',
      keywords:
        'cobertura policarbonato Moema, policarbonato Moema SP, cobertura fixa Moema, cobertura condomínio Moema',
      paragrafos: [
        'Moema concentra casas com amplos jardins e condomínios de alto padrão próximos ao Parque Ibirapuera, onde a cobertura fixa em policarbonato valoriza pátios e circulações externas.',
        'A translucidez do policarbonato compacto mantém a conexão visual com a arborização do entorno, preservando o caráter residencial nobre do bairro.',
        'Atendemos Moema com levantamento técnico, especificação de perfis e execução alinhada às normas de condomínio e ao projeto paisagístico.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Moema, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil em Moema: sistema abre e fecha para áreas gourmet e piscinas em casas de alto padrão. Automação e projeto sob medida.',
      keywords:
        'cobertura retrátil Moema, cobertura abre fecha Moema, cobertura piscina Moema SP, telha retrátil Zona Sul',
      paragrafos: [
        'Em Moema, casas com piscina e área gourmet adotam cobertura retrátil para usufruir do espaço externo nos dias ensolarados e fechar com agilidade na chuva.',
        'O sistema em policarbonato compacto preserva a luminosidade das áreas de lazer enquanto oferece proteção total quando necessário.',
        'Projetamos e instalamos em Moema com atenção ao índice de vegetação do bairro, mantendo o caráter arborizado mesmo após a cobertura instalada.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Moema, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha em Moema: automação Alexa e sensor de chuva para casas de alto padrão na Zona Sul. Orçamento e visita técnica grátis.',
      keywords:
        'cobertura abre e fecha Moema, automação cobertura Moema, sensor chuva Moema SP, cobertura motorizada Zona Sul',
      paragrafos: [
        'A cobertura abre e fecha em Moema atende residências onde o conforto e a automação são prioridades, com integração a ecossistemas Alexa e Google Home.',
        'A programação com sensor de chuva fecha automaticamente a cobertura quando detecta precipitação, ideal para quem viaja frequentemente ou usa o espaço à noite.',
        'Oferecemos visita técnica gratuita em Moema com apresentação de amostras de materiais e simulação de fechamento para validação do projeto.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Moema, SP | Cobersystem',
      metaDescription:
        'Painel sanduíche termoacústico em Moema: conforto térmico e acústico para residências de alto padrão. EPS, PU ou lã de rocha. Orçamento SP.',
      keywords:
        'cobertura termoacústica Moema, painel sanduíche Moema SP, isolamento telhado Zona Sul, cobertura alto padrão Moema',
      paragrafos: [
        'Reformas em coberturas de casas em Moema podem incluir painel sanduíche para estabilizar temperatura no último andar e reduzir o barulho de chuvas pesadas.',
        'O núcleo em poliuretano entrega desempenho de isolamento superior em menor espessura, adequado a ampliações com altura disponível limitada.',
        'Realizamos montagem técnica em Moema com calhas e arremates em alumínio, preservando o padrão de acabamento das residências de alto padrão.',
      ],
    },
  },
  tatuape: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Tatuapé, SP | Cobersystem',
      metaDescription:
        'Policarbonato fixo no Tatuapé, Zona Leste: comércio e residências. Proteção UV e translucidez. Orçamento no bairro.',
      keywords:
        'cobertura policarbonato Tatuapé, policarbonato Zona Leste SP, cobertura fixa Tatuapé, toldo policarbonato Tatuapé',
      paragrafos: [
        'O Tatuapé mistura corredores comerciais e ruas residenciais densas, onde coberturas em policarbonato protegem fluxo de pedestres e entradas de lojas.',
        'Em casas, o material fecha claraboias laterais e passagens entre blocos sem abrir mão de luz natural.',
        'A Cobersystem projeta recortes e apoios para aproveitar cada centímetro útil em terrenos estreitos típicos da região.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Tatuapé, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil no Tatuapé, SP: para áreas gourmet e comércio com fachada envidraçada. Telhas ou policarbonato.',
      keywords:
        'cobertura retrátil Tatuapé, cobertura Zona Leste SP, telha retrátil Tatuapé, comércio cobertura retrátil',
      paragrafos: [
        'No Tatuapé, bares e restaurantes com área externa utilizam cobertura retrátil para cumprir horários e climas variados sem perder a vista da rua.',
        'Em residências, o mesmo conceito valoriza churrasqueiras e terraços em condomínios e casas geminadas.',
        'Trabalhamos com prazos e logística adequados à movimentação da Zona Leste.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Tatuapé, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha no Tatuapé: automação, Alexa e sensor de chuva. Ideal para varandas e espaços comerciais na Zona Leste.',
      keywords:
        'cobertura abre e fecha Tatuapé, automação cobertura Tatuapé, Alexa cobertura Zona Leste, sensor chuva Tatuapé',
      paragrafos: [
        'A intensidade do comércio no Tatuapé faz da cobertura abre e fecha uma solução prática para quem precisa adaptar o espaço entre almoço, happy hour e noite.',
        'Em apartamentos, o sistema traz conforto para varandas envidraçadas que esquentam demais com fechamento fixo.',
        'Configuramos comandos e opcionais de automação conforme o perfil de uso de cada cliente no bairro.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Tatuapé, SP | Cobersystem',
      metaDescription:
        'Painel sanduíche termoacústico no Tatuapé: galpões, lojas e coberturas residenciais. EPS, PU ou lã de rocha na Zona Leste.',
      keywords:
        'cobertura termoacústica Tatuapé, sanduíche Zona Leste SP, isolamento galpão Tatuapé, painel sanduíche Tatuapé',
      paragrafos: [
        'Galpões logísticos e lojas com mezanino no Tatuapé reduzem custo operacional com telhado sanduíche que estabiliza temperatura interna.',
        'Para edificações próximas a vias barulhentas, o ganho acústico melhora ambiente de trabalho e atendimento.',
        'Entregamos especificação completa de painéis e fixações para aprovação junto ao projeto estrutural.',
      ],
    },
  },
  'vila-mariana': {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Vila Mariana, SP | Cobersystem',
      metaDescription:
        'Policarbonato fixo na Vila Mariana: edifícios e casas na Zona Sul. Compacto e alveolar. Orçamento próximo ao metrô e hospitais.',
      keywords:
        'cobertura policarbonato Vila Mariana, policarbonato Zona Sul SP, cobertura fixa Vila Mariana, cobertura residencial Vila Mariana',
      paragrafos: [
        'A Vila Mariana combina edifícios compactos e ruas arborizadas; coberturas em policarbonato resolvem passagens entre torres e áreas comuns sem escurecer corredores.',
        'Clínicas e escritórios na região valorizam entradas cobertas com boa transmissão de luz e resistência a intempéries.',
        'Realizamos obras com logística planejada para ruas de fluxo intenso e acesso a garagens subterrâneas.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Vila Mariana, SP | Cobersystem',
      metaDescription:
        'Cobertura retrátil na Vila Mariana, São Paulo: telhas ou policarbonato para coberturas de varanda e lazer. Projeto sob medida Zona Sul.',
      keywords:
        'cobertura retrátil Vila Mariana, cobertura Zona Sul SP, telha retrátil Vila Mariana, varanda retrátil SP',
      paragrafos: [
        'Na Vila Mariana, moradores em apartamentos e casas estreitas usam cobertura retrátil para maximizar espaço de estar ao ar livre.',
        'O policarbonato na linha retrátil mantém privacidade visual em alguns ângulos sem eliminar a claridade.',
        'Adaptamos o projeto às convenções de cada condomínio, inclusive horários e normas de fachada.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Vila Mariana, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha na Vila Mariana: automação e conforto para varandas. Sensor de chuva e integração Alexa na Zona Sul.',
      keywords:
        'cobertura abre e fecha Vila Mariana, automação varanda SP, sensor chuva Vila Mariana, cobertura retrátil Zona Sul',
      paragrafos: [
        'A Vila Mariana concentra perfis que buscam tecnologia em casa; a cobertura abre e fecha integra-se a ecossistemas de automação residencial.',
        'O controle gradual da abertura melhora o conforto em dias de sol forte sobre a varanda.',
        'Visitamos o imóvel para checar interferências com vizinhos, beirais e tubulações antes de fechar o projeto.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Vila Mariana, SP | Cobersystem',
      metaDescription:
        'Cobertura sanduíche termoacústica na Vila Mariana: reformas e coberturas novas com isolamento. EPS, PU ou lã de rocha.',
      keywords:
        'cobertura termoacústica Vila Mariana, painel sanduíche Zona Sul SP, isolamento telhado Vila Mariana, sanduíche SP',
      paragrafos: [
        'Reformas no teto de casas antigas na Vila Mariana podem substituir telhas frágeis por sanduíche, reduzindo barulho de chuva no andar superior.',
        'Edifícios com cobertura técnica e casa de máquinas também se beneficiam do controle térmico do painel.',
        'Indicamos o núcleo isolante mais adequado a cada norma de ocupação e orçamento do empreendimento.',
      ],
    },
  },
};

export function getConteudoBairroLinha(
  bairroSlug: string,
  linha: LinhaProdutoSpBairro,
): SeoBairroLinha | undefined {
  const b = bairroSlug as SpBairroSlug;
  const bloco = CONTEUDO_SP_BAIRROS[b];
  return bloco ? bloco[linha] : undefined;
}
