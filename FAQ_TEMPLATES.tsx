/**
 * FAQ TEMPLATES - Cobersystem
 * 
 * Templates prontos para implementar FAQ Schema nas páginas de serviços e produtos.
 * 
 * IMPACTO:
 * - FAQ Rich Snippets nos resultados do Google
 * - CTR +30-50%
 * - Ocupa 2-3x mais espaço nas SERPs
 * - Responde dúvidas antes do clique
 * 
 * COMO USAR:
 * 1. Copiar o template relevante
 * 2. Adicionar ao final da página (antes do CTA)
 * 3. Importar: import FAQSchema from '@/components/FAQSchema';
 * 4. Adicionar no JSX: <FAQSchema faqs={faqs} />
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. FAQ PADRÃO (Serviços de Cobertura)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Usar em: /servicos/*

export const faqsPadraoCobertura = [
  {
    question: "Quanto custa uma cobertura retrátil?",
    answer: "O preço de uma cobertura retrátil varia de R$ 12.000 a R$ 25.000, dependendo do tamanho (área em m²), material escolhido (alumínio, policarbonato alveolar ou compacto) e nível de automação (manual, motorizada ou com Alexa). Oferecemos orçamento grátis e personalizado. Entre em contato pelo WhatsApp (11) 94361-5079 ou pelo formulário."
  },
  {
    question: "Qual o prazo de instalação de uma cobertura retrátil?",
    answer: "A instalação completa leva de 7 a 15 dias úteis após aprovação do projeto e pagamento do sinal. Projetos mais complexos ou com customizações especiais podem levar até 30 dias. O processo inclui: medição técnica, fabricação sob medida, transporte e instalação com equipe especializada."
  },
  {
    question: "A cobertura retrátil tem garantia?",
    answer: "Sim! Oferecemos 5 anos de garantia na estrutura de alumínio contra defeitos de fabricação e oxidação. O policarbonato (alveolar ou compacto) possui 10 anos de garantia do fabricante contra amarelamento e perda de transparência. A automação (motor + controle) tem 1 ano de garantia."
  },
  {
    question: "A cobertura retrátil funciona em dias de chuva forte?",
    answer: "Sim! Nossa cobertura retrátil é 100% impermeável e suporta chuvas intensas. O sistema de drenagem embutido direciona a água para fora da estrutura. Além disso, o sensor de chuva fecha automaticamente a cobertura em caso de precipitação, protegendo sua área e os móveis. Suporta ventos de até 80 km/h."
  },
  {
    question: "Posso instalar uma cobertura retrátil em apartamento?",
    answer: "Sim, é possível instalar em apartamentos, desde que a varanda/sacada suporte o peso da estrutura (verificamos com laudo estrutural). Instalamos regularmente em apartamentos de médio e alto padrão em toda São Paulo. É importante verificar as normas do condomínio antes da instalação. Nosso time auxilia com toda a documentação necessária."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. FAQ - Cobertura Abre e Fecha
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Usar em: /servicos/cobertura-abre-e-fecha

export const faqsCoberturaAbreFecha = [
  {
    question: "Como funciona a cobertura abre e fecha?",
    answer: "A cobertura abre e fecha possui um sistema de lâminas móveis em policarbonato ou alumínio que deslizam sobre trilhos, permitindo abertura de 0 a 90 graus. O controle pode ser manual (manivela), motorizado (controle remoto) ou automatizado (Alexa + sensor de chuva). Você escolhe o nível de ventilação e proteção desejado a qualquer momento."
  },
  {
    question: "Quanto custa uma cobertura abre e fecha?",
    answer: "Preço varia de R$ 15.000 (básica, manual, 15m²) a R$ 35.000 (premium, automação Alexa, 40m²). Fatores que influenciam: tamanho, material (alumínio ou policarbonato), tipo de automação e acabamento. Solicite orçamento grátis pelo WhatsApp (11) 94361-5079."
  },
  {
    question: "Preciso de manutenção na cobertura abre e fecha?",
    answer: "Manutenção é mínima: limpeza semestral com água e sabão neutro, lubrificação anual dos trilhos e verificação dos parafusos. Coberturas motorizadas requerem revisão do motor a cada 2 anos. Oferecemos plano de manutenção preventiva opcional."
  },
  {
    question: "A cobertura abre e fecha pode ser automatizada?",
    answer: "Sim! Oferecemos 3 níveis de automação: (1) Motorização básica com controle remoto, (2) Automação com sensor de chuva (fecha automaticamente), (3) Integração com Alexa/Google Home para controle por voz. A automação pode ser instalada posteriormente se você começar com o modelo manual."
  },
  {
    question: "Qual a diferença entre cobertura abre e fecha e cobertura retrátil?",
    answer: "Cobertura abre e fecha: Lâminas fixas que abrem/fecham como persiana, controle parcial de ventilação. Cobertura retrátil: Teto desliza completamente para fora, abrindo 100% da área. Ambas são motorizáveis. Retrátil é ideal para quem quer céu aberto total; abre-fecha para controle gradual de sol/sombra."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. FAQ - Cobertura Área Gourmet
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Usar em: /servicos/cobertura-area-gourmet

export const faqsCoberturaAreaGourmet = [
  {
    question: "Qual a melhor cobertura para área gourmet?",
    answer: "A cobertura retrátil (abre e fecha) é ideal para área gourmet, pois permite controlar ventilação e clima conforme a ocasião. Para churrasqueiras, recomendamos policarbonato compacto 8mm (suporta calor) com sistema de abertura. Se preferir cobertura fixa, policarbonato alveolar 10mm oferece isolamento térmico superior."
  },
  {
    question: "Cobertura de policarbonato esquenta a área gourmet?",
    answer: "Não! Nosso policarbonato possui proteção UV de 99,9% que bloqueia o calor do sol. Policarbonato alveolar (com câmaras de ar) reduz temperatura em até 8°C comparado a telhas tradicionais. Combinado com cobertura abre-fecha, você tem ventilação natural e controle total do clima."
  },
  {
    question: "Preciso de projeto aprovado para cobertura em área gourmet?",
    answer: "Depende da localização e tamanho. Em casas residenciais (até 40m²), geralmente não é necessário. Em apartamentos, é obrigatório verificar normas do condomínio. Em áreas comerciais, pode exigir aprovação da prefeitura. Nossa equipe auxilia com toda documentação e orientações técnicas."
  },
  {
    question: "Cobertura para churrasqueira: qual material suporta calor?",
    answer: "Policarbonato compacto 8-10mm é ideal para churrasqueiras, pois suporta até 120°C e não amarela com o calor. Estrutura de alumínio (não ferro) resiste à corrosão causada por fumaça e umidade. Recomendamos sistema abre-fecha para liberar fumaça quando necessário. Mantemos 1,5m de distância mínima entre cobertura e churrasqueira."
  },
  {
    question: "Quanto custa uma cobertura para área gourmet?",
    answer: "Área gourmet típica (20-30m²): R$ 16.000 a R$ 28.000. Inclui: estrutura de alumínio, policarbonato (alveolar ou compacto), instalação completa e garantia. Automação adiciona R$ 3.000-5.000. Preço varia conforme tamanho, acabamento e complexidade. Orçamento grátis pelo WhatsApp (11) 94361-5079."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. FAQ - Cobertura Piscina
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Usar em: /servicos/cobertura-piscina

export const faqsCoberturaRiscina = [
  {
    question: "Qual a melhor cobertura para piscina?",
    answer: "Cobertura retrátil é a melhor opção para piscinas, pois permite: (1) Fechar em dias frios/chuvosos, mantendo água limpa; (2) Abrir totalmente em dias quentes para banho de sol; (3) Reduzir evaporação de água em até 70%; (4) Diminuir uso de cloro/produtos químicos. Policarbonato compacto cristal mantém iluminação natural."
  },
  {
    question: "Cobertura de piscina reduz manutenção?",
    answer: "Sim! Cobertura reduz: (1) Sujeira (folhas, insetos) em até 90%; (2) Evaporação de água em 70%; (3) Uso de cloro/algicida em 40%; (4) Limpeza manual (robô/aspiração) em 60%. Economia de tempo e dinheiro significativa. Retorno de investimento em 2-3 anos."
  },
  {
    question: "Cobertura de piscina esquenta a água?",
    answer: "Sim! Policarbonato cria efeito estufa que aquece água naturalmente em 3-5°C (depende de exposição solar). Em dias frios, você pode nadar confortavelmente. Se preferir água mais fria, basta abrir a cobertura. Sistema retrátil oferece flexibilidade total."
  },
  {
    question: "Quanto custa uma cobertura para piscina?",
    answer: "Piscina típica (6x3m = 18m²): R$ 14.000 a R$ 22.000. Piscina grande (10x5m = 50m²): R$ 35.000 a R$ 55.000. Inclui: estrutura alumínio, policarbonato compacto cristal, sistema retrátil, instalação e garantia. Automação com sensor de chuva: +R$ 4.000. Orçamento grátis pelo WhatsApp."
  },
  {
    question: "Cobertura de piscina pode ser baixa (rente à água)?",
    answer: "Não recomendamos coberturas muito baixas (< 1,5m) por questões de segurança e ventilação. Altura ideal: 2,0-2,5m, permitindo circulação, uso da piscina coberta e evitando condensação. Para coberturas baixas (tipo cúpula), oferecemos modelos telescópicos específicos."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. FAQ - Produto Cobertura Retrátil
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Usar em: /produtos/cobertura-retratil

export const faqsProdutoCoberturaRetratil = [
  {
    question: "O que é uma cobertura retrátil?",
    answer: "Cobertura retrátil é um sistema que permite abrir e fechar o teto deslizando as lâminas de policarbonato ou alumínio sobre trilhos. Diferente de coberturas fixas, você controla quando quer sombra/proteção ou céu aberto. Pode ser manual, motorizada ou automatizada (Alexa + sensor de chuva)."
  },
  {
    question: "Cobertura retrátil vale a pena?",
    answer: "Sim! Benefícios: (1) Flexibilidade total (abrir/fechar quando quiser); (2) Valoriza imóvel em 5-10%; (3) Economia de energia (controle natural de temperatura); (4) Durabilidade 20+ anos; (5) Proteção 100% contra chuva/sol. Retorno de investimento em conforto e valorização imobiliária é excelente."
  },
  {
    question: "Qual a diferença entre cobertura retrátil manual e automática?",
    answer: "Manual: Abertura/fechamento via manivela manual. Custo menor. Esforço físico leve. Ideal para áreas pequenas (até 20m²). Automática: Abertura por controle remoto, Alexa ou app. Sensor de chuva fecha sozinho. Custo +R$ 3.000-5.000. Ideal para áreas grandes ou quem prioriza conveniência. Ambas têm mesma durabilidade."
  },
  {
    question: "Cobertura retrátil com sensor de chuva: como funciona?",
    answer: "Sensor detecta primeiras gotas de chuva e envia sinal ao motor para fechar cobertura automaticamente em 30-60 segundos. Protege móveis, eletrônicos e evita que você precise correr para fechar. Pode ser desligado manualmente se quiser manter aberto durante chuva leve. Funciona 24/7, mesmo quando você não está em casa."
  },
  {
    question: "Posso controlar a cobertura retrátil pelo celular?",
    answer: "Sim! Oferecemos integração com Alexa e Google Home. Comandos de voz: 'Alexa, abrir cobertura', 'Alexa, fechar cobertura'. Também disponível app para controle remoto via WiFi de qualquer lugar. Recebe notificações quando cobertura abre/fecha (útil quando você está fora). Automação residencial completa."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. FAQ - Página /faq (Geral)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Usar em: /faq

export const faqsGeral = [
  {
    question: "Quanto custa uma cobertura de policarbonato?",
    answer: "Cobertura fixa: R$ 250-450/m². Cobertura retrátil: R$ 600-1.200/m². Preço varia conforme material (alveolar ou compacto), estrutura (alumínio ou ferro), automação e acabamento. Projetos típicos: Garagem 15m² (R$ 4.500), Área gourmet 25m² (R$ 18.000), Piscina 40m² (R$ 28.000). Orçamento grátis!"
  },
  {
    question: "Coberturas de policarbonato duram quanto tempo?",
    answer: "Estrutura de alumínio: 30+ anos (não enferruja). Policarbonato: 15-20 anos mantendo qualidade (garantia 10 anos contra amarelamento). Manutenção mínima: limpeza semestral. Coberturas da Cobersystem instaladas há 10+ anos ainda estão perfeitas. Investimento de longo prazo."
  },
  {
    question: "Vocês atendem em quais cidades?",
    answer: "Atendemos toda Grande São Paulo: Capital (todas zonas), ABC (Santo André, São Bernardo, São Caetano), Guarulhos, Osasco, Barueri, Cotia, Taboão da Serra. Também atendemos Campinas, Sorocaba e região. Para outras localidades, consulte-nos pelo WhatsApp (11) 94361-5079."
  },
  {
    question: "Como solicitar um orçamento?",
    answer: "3 formas: (1) WhatsApp (11) 94361-5079 - resposta rápida; (2) Formulário de contato no site; (3) E-mail vendas@cobersystem.com.br. Precisamos: fotos do local, medidas aproximadas (largura x comprimento) e tipo de cobertura desejada. Agendamos visita técnica grátis para medição precisa e apresentação de projeto."
  },
  {
    question: "Qual a forma de pagamento?",
    answer: "Parcelamos em até 10x sem juros (cartão de crédito). Pagamento: 50% sinal (aprovação do projeto), 40% na entrega do material, 10% após instalação. Aceitamos PIX, transferência e boleto. Consulte condições especiais para projetos acima de R$ 30.000."
  },
  {
    question: "Vocês fazem projeto 3D antes da instalação?",
    answer: "Sim! Todo projeto inclui: (1) Visita técnica com medição profissional; (2) Projeto 3D realista mostrando resultado final; (3) Especificações técnicas (materiais, cores, acabamento); (4) Prazo e cronograma de instalação; (5) Orçamento detalhado. Você visualiza exatamente como ficará antes de aprovar."
  },
  {
    question: "Preciso tirar alguma licença para instalar cobertura?",
    answer: "Casas residenciais (até 40m²): Geralmente não precisa. Apartamentos: Verificar regras do condomínio. Áreas comerciais: Pode exigir aprovação da prefeitura. Nossa equipe auxilia com: laudo estrutural (se necessário), documentação para condomínio, orientação sobre legislação local. Cuidamos de toda burocracia."
  },
  {
    question: "Cobertura de policarbonato faz barulho na chuva?",
    answer: "Não! Policarbonato alveolar (com câmaras de ar) tem isolamento acústico que reduz ruído de chuva em 70% comparado a telhas metálicas. Você ouve chuva levemente, mas nada incômodo. Para isolamento máximo, oferecemos policarbonato termoacústico (95% de redução de ruído)."
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXEMPLO DE IMPLEMENTAÇÃO EM UMA PÁGINA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/*
// app/servicos/cobertura-abre-e-fecha/page.tsx

import FAQSchema from '@/components/FAQSchema';
import { faqsCoberturaAbreFecha } from '@/FAQ_TEMPLATES';

export default function CoberturaAbreFechaPage() {
  return (
    <main>
      {/* Conteúdo da página * /}
      <section>
        <h1>Cobertura Abre e Fecha</h1>
        {/* ... * /}
      </section>

      {/* Seção de FAQs (Visual) * /}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqsCoberturaAbreFecha.map((faq, index) => (
              <details 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <summary className="font-semibold text-lg cursor-pointer text-gray-800 hover:text-[#D4AF37]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema (Invisível - para o Google) * /}
      <FAQSchema faqs={faqsCoberturaAbreFecha} />

      {/* CTA * /}
      <section>
        {/* ... * /}
      </section>
    </main>
  );
}
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PÁGINAS PRIORITÁRIAS PARA IMPLEMENTAÇÃO (Ordem de impacto)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/*
1. /servicos/cobertura-abre-e-fecha       → faqsCoberturaAbreFecha
2. /servicos/cobertura-area-gourmet       → faqsCoberturaAreaGourmet
3. /servicos/cobertura-piscina            → faqsCoberturaRiscina
4. /produtos/cobertura-retratil           → faqsProdutoCoberturaRetratil
5. /faq                                   → faqsGeral
6. /servicos/cobertura-retratil           → faqsPadraoCobertura
7. /servicos/cobertura-retratil-automatizada → faqsProdutoCoberturaRetratil
8. Homepage (/)                           → faqsGeral (5 perguntas principais)

RESULTADO ESPERADO:
✅ FAQ Rich Snippets em 8 páginas
✅ CTR +30-50%
✅ Posicionamento #0 (Featured Snippet) para algumas perguntas
✅ Ocupa 2-3x mais espaço nos resultados do Google
*/
