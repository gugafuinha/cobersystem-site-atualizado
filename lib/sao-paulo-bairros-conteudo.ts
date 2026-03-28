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
  santana: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Santana, SP | Cobersystem',
      metaDescription:
        'Policarbonato fixo em Santana, Zona Norte de SP: compacto e alveolar para residências e comércio. Orçamento e instalação.',
      keywords:
        'cobertura policarbonato Santana, policarbonato Zona Norte SP, cobertura fixa Santana, cobertura comércio Santana',
      paragrafos: [
        'Santana concentra comércio intenso e residências em ruas movimentadas, onde coberturas em policarbonato protegem calçadas e acessos sem fechar o ambiente.',
        'O perfil alveolar é frequente quando se busca amortecer calor; o compacto privilegia transparência e visão limpa da fachada.',
        'Atendemos Santana e entorno com projeto sob medida e fixação compatível com beirais e pilares existentes.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Santana, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil em Santana, SP: abertura graduada para terraços e áreas comerciais. Telhas ou policarbonato. Orçamento Zona Norte.',
      keywords:
        'cobertura retrátil Santana, cobertura Santana SP, telha retrátil Zona Norte, policarbonato retrátil Santana',
      paragrafos: [
        'Em Santana, lojas com área externa e apartamentos com terraço usam cobertura retrátil para flexibilizar o uso ao longo do dia.',
        'A combinação de materiais — alumínio ou policarbonato — responde a normas de condomínio e às preferências estéticas de cada cliente.',
        'Nossa equipe avalia vento predominante e sombreamento local antes de fixar o sistema, garantindo operação segura na Zona Norte.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Santana, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha em Santana: controle do clima com automação. Alexa, sensor de chuva e motor silencioso. Visita na Zona Norte.',
      keywords:
        'cobertura abre e fecha Santana, automação cobertura Zona Norte, sensor chuva Santana SP, cobertura motorizada Santana',
      paragrafos: [
        'Moradores e comerciantes em Santana adotam o sistema abre e fecha para ganhar conforto em varandas estreitas ou amplas, com fechamento rápido na garoa.',
        'Integração com sensor de chuva evita surpresas em dias de pancadas rápidas, comuns na capital.',
        'Dimensionamos o conjunto motor + trilhos para cada vão, respeitando recuos e alturas de peitoril típicos da região.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Santana, SP | Cobersystem',
      metaDescription:
        'Painel sanduíche termoacústico em Santana: telhados e ampliações com isolamento. EPS, PU ou lã de rocha. Orçamento na Zona Norte.',
      keywords:
        'cobertura termoacústica Santana, sanduíche Santana SP, isolamento térmico Zona Norte, cobertura industrial Santana',
      paragrafos: [
        'Reformas de telhado e novos pavimentos em Santana podem incorporar cobertura sanduíche para melhorar acústica em quartos próximos à rua.',
        'O desempenho térmico alivia o uso de climatização em dias muito quentes ou frios na Zona Norte.',
        'Especificamos espessura e tipo de núcleo conforme uso: residencial, comercial leve ou áreas que exigem lã de rocha por segurança.',
      ],
    },
  },
  tucuruvi: {
    policarbonato: {
      metaTitle: 'Cobertura em Policarbonato Tucuruvi, SP | Cobersystem',
      metaDescription:
        'Cobertura fixa em policarbonato no Tucuruvi, Zona Norte: garagens, corredores e quintais. Compacto e alveolar. Orçamento local.',
      keywords:
        'cobertura policarbonato Tucuruvi, policarbonato Zona Norte SP, cobertura fixa Tucuruvi, cobertura garagem Tucuruvi',
      paragrafos: [
        'No Tucuruvi, casas com garagem descoberta e corredores laterais ganham proteção permanente com policarbonato leve e resistente.',
        'A solução evita infiltrações em portas e janelas adjacentes, com escoamento planejado nas calhas.',
        'Atendemos o bairro com visitas para medir vãos irregulares e propor o perfil de chapa mais adequado.',
      ],
    },
    retratil: {
      metaTitle: 'Cobertura Retrátil Tucuruvi, São Paulo | Cobersystem',
      metaDescription:
        'Cobertura retrátil no Tucuruvi, SP: quintais e áreas de serviço com abertura total ou parcial. Orçamento na Zona Norte.',
      keywords:
        'cobertura retrátil Tucuruvi, cobertura Tucuruvi SP, telha retrátil Zona Norte, quintal coberto Tucuruvi',
      paragrafos: [
        'Famílias no Tucuruvi utilizam cobertura retrátil para cobrir lavanderias externas, oficinas e espaços de lazer sem perder ventilação quando aberta.',
        'O sistema desliza com baixo esforço quando motorizado, ideal para idosos ou uso diário frequente.',
        'Indicamos acabamentos que combinam com fachadas residenciais típicas da região norte da capital.',
      ],
    },
    abreEFecha: {
      metaTitle: 'Cobertura Abre e Fecha Tucuruvi, SP | Cobersystem',
      metaDescription:
        'Cobertura abre e fecha no Tucuruvi: proteção e ventilação com automação. Projetos para varanda e área gourmet na Zona Norte.',
      keywords:
        'cobertura abre e fecha Tucuruvi, cobertura motorizada Tucuruvi, automação Zona Norte SP, sensor chuva Tucuruvi',
      paragrafos: [
        'No Tucuruvi, a cobertura abre e fecha atende quem deseja aproveitar quintais amplos com controle fino de sol e chuva.',
        'A programação com sensor meteorológico é útil em dias de pancadas intercaladas com sol forte.',
        'Instalamos com atenção à estrutura de apoio e drenagem, evitando poças próximas à casa.',
      ],
    },
    termoacustica: {
      metaTitle: 'Cobertura Termoacústica Tucuruvi, SP | Cobersystem',
      metaDescription:
        'Cobertura sanduíche termoacústica no Tucuruvi: conforto térmico e acústico em ampliações. EPS, PU ou lã de rocha. Orçamento SP.',
      keywords:
        'cobertura termoacústica Tucuruvi, painel sanduíche Zona Norte, isolamento telhado Tucuruvi, cobertura sanduíche SP',
      paragrafos: [
        'Sobrados e comércios no Tucuruvi que ampliam o pavimento superior podem usar painel sanduíche para novo telhado com menos ruído de impacto da chuva.',
        'O isolamento térmico ajuda ambientes no último pavimento que sofrem mais com o sol direto.',
        'Oferecemos cálculo de cargas e sugestão de fixação junto ao engenheiro responsável pela obra.',
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
