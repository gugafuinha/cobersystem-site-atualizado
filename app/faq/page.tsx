import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ - Perguntas Frequentes sobre Cobertura em Policarbonato | Cobersystem",
  description: "Tire todas suas dúvidas sobre cobertura retrátil, cobertura em policarbonato, automação, instalação, preços, manutenção e garantia. Perguntas e respostas completas.",
  keywords: "faq cobertura policarbonato, dúvidas cobertura retrátil, quanto custa cobertura, instalação cobertura, garantia policarbonato, manutenção cobertura, cobertura abre fecha dúvidas",
  openGraph: {
    title: "FAQ - Perguntas Frequentes | Cobersystem",
    description: "Tire suas dúvidas sobre cobertura em policarbonato retrátil e fixa",
  },
};

const faqCategories = [
  {
    categoria: "Produtos e Tipos",
    perguntas: [
      {
        pergunta: "Qual a diferença entre cobertura retrátil e cobertura fixa em policarbonato?",
        resposta: "A cobertura retrátil possui sistema abre e fecha com abertura de 0 a 90 graus, permitindo ventilação controlada. Já a cobertura fixa é permanente, ideal para proteção total. A retrátil é perfeita para áreas gourmet que precisam de ventilação, enquanto a fixa é melhor para garagens e proteção constante."
      },
      {
        pergunta: "O que é policarbonato alveolar e policarbonato compacto?",
        resposta: "Policarbonato alveolar possui câmaras de ar internas (ocas) que proporcionam isolamento térmico e acústico superior. O policarbonato compacto é maciço, 100% transparente e mais resistente a impactos. O alveolar é ideal para conforto térmico, o compacto para máxima luminosidade."
      },
      {
        pergunta: "O que é cobertura termoacústica (sanduíche)?",
        resposta: "É uma cobertura com duas chapas metálicas e recheio isolante (EPS, PU ou Lã de Rocha) no meio. Reduz temperatura interna em até 15°C e ruído em até 45 dB. Ideal para galpões industriais, estabelecimentos comerciais e locais que precisam de isolamento térmico e acústico."
      },
      {
        pergunta: "Veneziana em policarbonato é diferente de persiana?",
        resposta: "Sim! A veneziana em policarbonato é um fechamento lateral fixo com lâminas inclinadas que permitem ventilação natural enquanto protegem contra chuva lateral. É usada em galpões, quadras e áreas externas. Persiana é móvel e vai em janelas."
      }
    ]
  },
  {
    categoria: "Automação e Tecnologia",
    perguntas: [
      {
        pergunta: "Como funciona a automação da cobertura retrátil?",
        resposta: "Oferecemos 3 opções: 1) Controle remoto manual, 2) Sensor de chuva automático (fecha sozinho quando detecta chuva), 3) Integração com Alexa para comando de voz. Você pode combinar as três opções e também controlar pelo app no celular."
      },
      {
        pergunta: "O sensor de chuva é confiável? Quanto tempo demora para fechar?",
        resposta: "Sim, é altamente confiável! O sensor detecta as primeiras gotas em 3-5 segundos e aciona o fechamento automático. A cobertura fecha completamente em 15-30 segundos dependendo do tamanho. Possui bateria de backup para funcionar mesmo sem energia elétrica."
      },
      {
        pergunta: "Posso integrar com Google Home ou Apple HomeKit?",
        resposta: "Atualmente oferecemos integração nativa com Alexa (Amazon). Para Google Home e HomeKit é possível através de hubs intermediários como SmartThings ou Home Assistant. Nossa equipe técnica pode auxiliar na configuração."
      },
      {
        pergunta: "A automação funciona durante falta de energia?",
        resposta: "O sensor de chuva possui bateria interna de backup que dura até 8 horas. O motor pode ser equipado com bateria opcional para funcionamento durante quedas de energia. Também é possível abrir/fechar manualmente em caso de emergência."
      }
    ]
  },
  {
    categoria: "Instalação e Obra",
    perguntas: [
      {
        pergunta: "Quanto tempo demora a instalação?",
        resposta: "Instalação padrão (até 20m²): 1-2 dias. Projetos maiores (20-50m²): 3-5 dias. Inclui: fixação da estrutura, instalação do policarbonato, testes e configuração de automação. Fazemos tudo sem sujeira e com equipe especializada."
      },
      {
        pergunta: "Precisa quebrar ou fazer muita obra?",
        resposta: "Não! A instalação é limpa e rápida. Fixamos a estrutura de alumínio nas paredes/pilares existentes com buchas químicas de alta resistência. Não precisa quebrar piso, parede ou teto. Apenas furos pequenos para fixação."
      },
      {
        pergunta: "Posso instalar em apartamento?",
        resposta: "Sim! Instalamos em varandas e coberturas de apartamentos. Verificamos estrutura e cargas com laudo técnico. Muitos condomínios já aprovam por melhorar a estética. Fornecemos toda documentação para apresentar ao síndico."
      },
      {
        pergunta: "Precisa de aprovação da prefeitura ou condomínio?",
        resposta: "Depende. Casas térreas normalmente não precisam. Apartamentos: verificar regras do condomínio (fornecemos projeto para aprovar). Áreas comerciais grandes podem precisar de ART/RRT. Nossa equipe auxilia com toda documentação necessária."
      }
    ]
  },
  {
    categoria: "Preços e Orçamento",
    perguntas: [
      {
        pergunta: "Quanto custa uma cobertura retrátil em policarbonato?",
        resposta: "Varia conforme tamanho, tipo de policarbonato e automação. Valores médios: Cobertura básica (12m²): R$ 8.000-12.000. Com automação (15m²): R$ 15.000-22.000. Projetos especiais: orçamento personalizado. Fazemos visita técnica gratuita e orçamento detalhado sem compromisso."
      },
      {
        pergunta: "O que está incluso no orçamento?",
        resposta: "Inclui: estrutura de alumínio completa, policarbonato especificado, perfis e acessórios, mão de obra de instalação, automação (se contratada), testes e garantia. NÃO inclui: eventuais reforços estruturais necessários, pintura, acabamentos extras."
      },
      {
        pergunta: "Tem desconto para pagamento à vista?",
        resposta: "Sim! Oferecemos até 10% de desconto para pagamento à vista. Também parcelamos em até 12x no cartão de crédito ou financiamos em até 48x via bancos parceiros (consulte condições). Aceitamos PIX, transferência, cartão e cheque."
      },
      {
        pergunta: "O que encarece mais o projeto?",
        resposta: "Principais fatores: 1) Tamanho/área (quanto maior, maior o custo), 2) Tipo de policarbonato (compacto é 30-40% mais caro que alveolar), 3) Automação completa (Alexa + sensor), 4) Estrutura reforçada para vãos grandes, 5) Cores/acabamentos especiais."
      }
    ]
  },
  {
    categoria: "Manutenção e Durabilidade",
    perguntas: [
      {
        pergunta: "Quanto tempo dura uma cobertura de policarbonato?",
        resposta: "Com manutenção adequada: 15-25 anos. O policarbonato com proteção UV mantém transparência por 10+ anos. A estrutura de alumínio é praticamente eterna (não enferruja). Motor da automação: 8-12 anos. Oferecemos planos de manutenção preventiva."
      },
      {
        pergunta: "O policarbonato amarela com o tempo?",
        resposta: "Policarbonato DE QUALIDADE com proteção UV dos dois lados NÃO amarela. O nosso possui camada anti-UV que garante transparência por 10+ anos. Evite policarbonatos baratos sem proteção UV que amarelarão em 2-3 anos. Fornecemos certificado de garantia contra amarelamento."
      },
      {
        pergunta: "Que tipo de manutenção precisa fazer?",
        resposta: "Limpeza: água + sabão neutro a cada 6 meses. Lubrificação: trilhos e motor anualmente. Verificação: parafusos e vedações a cada 12 meses. Oferecemos pacotes de manutenção preventiva com visitas programadas. Manutenção é simples e rápida."
      },
      {
        pergunta: "E se quebrar uma chapa de policarbonato? É caro trocar?",
        resposta: "Policarbonato é 200x mais resistente que vidro, dificilmente quebra. Se ocorrer dano (queda de galho, granizo extremo), a troca é simples. Custo: R$ 300-800 dependendo do tamanho da chapa. Nossa garantia cobre defeitos de fabricação por 5 anos."
      }
    ]
  },
  {
    categoria: "Garantias e Segurança",
    perguntas: [
      {
        pergunta: "Qual a garantia da cobertura?",
        resposta: "5 anos de garantia total contra defeitos de fabricação e instalação. Inclui: estrutura de alumínio, policarbonato (contra amarelamento e quebra por defeito), automação, e mão de obra. Garantia estendida de até 10 anos disponível."
      },
      {
        pergunta: "A cobertura aguenta chuva forte e vento?",
        resposta: "Sim! Projetamos para suportar ventos de até 120 km/h e chuvas torrenciais. Testamos todas as instalações. O policarbonato é flexível e absorve impactos. A estrutura de alumínio é super resistente. Garantimos segurança total em condições climáticas extremas."
      },
      {
        pergunta: "É seguro para crianças e pets?",
        resposta: "Totalmente seguro! Não tem vidro (que pode quebrar e cortar). Motor possui sensores de obstáculo que param ao detectar resistência. Botões podem ter trava para crianças. Estrutura não tem pontas ou arestas cortantes. Certificado de segurança incluso."
      },
      {
        pergunta: "O que acontece se esquecer a cobertura aberta e vier chuva?",
        resposta: "Com sensor de chuva automático: fecha sozinho nos primeiros pingos! Sem sensor: você pode fechar pelo celular de qualquer lugar (se tiver automação via app). Caso esqueça aberta, a água escorre normalmente - não acumula. Sem riscos de alagamento."
      }
    ]
  },
  {
    categoria: "Comparações",
    perguntas: [
      {
        pergunta: "Cobertura de policarbonato ou vidro? Qual é melhor?",
        resposta: "Policarbonato é MUITO superior: 200x mais resistente, 60% mais leve, filtra 99% dos raios UV, não quebra, não amarela (com qualidade), mais barato e mais fácil de instalar. Vidro só vence em resistência a riscos superficiais. Para coberturas, policarbonato é a escolha profissional."
      },
      {
        pergunta: "Policarbonato ou toldo? O que vale mais a pena?",
        resposta: "Toldo: mais barato inicialmente, mas rasgam com vento, mofam, precisam troca a cada 2-3 anos. Policarbonato: investimento maior, dura 15+ anos, não rasga, não mofa, não desbota, mantém valor. No longo prazo, policarbonato sai mais barato e valoriza o imóvel."
      },
      {
        pergunta: "Pergolado de madeira ou cobertura retrátil? Qual escolher?",
        resposta: "Pergolado: estética rústica, requer manutenção constante (verniz, cupim), não protege de chuva, estrutura pesada. Cobertura retrátil: protege de chuva, ventila quando quiser, sem manutenção da madeira, mais leve, moderna. Se quer estética de madeira + função, oferecemos estrutura tipo pergolado com cobertura retrátil."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-xl text-gray-600">
            Tire todas suas dúvidas sobre cobertura em policarbonato, instalação, preços e manutenção
          </p>
        </div>

        {/* CTA rápido */}
        <div className="bg-blue-600 text-white p-6 rounded-lg mb-12 text-center">
          <p className="text-lg mb-4">
            <strong>Não encontrou sua dúvida?</strong> Fale com nossos especialistas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511943615079?text=Olá!%20Tenho%20dúvidas%20sobre%20cobertura%20em%20policarbonato"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp: (11) 94361-5079
            </a>
            <a 
              href="/contato"
              className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition"
            >
              📧 Solicitar Orçamento Grátis
            </a>
          </div>
        </div>

        {/* FAQ por categoria */}
        {faqCategories.map((cat, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-[#D4AF37] pl-4">
              {cat.categoria}
            </h2>
            <div className="space-y-4">
              {cat.perguntas.map((faq, faqIndex) => (
                <details 
                  key={faqIndex}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-start">
                    <span className="text-[#D4AF37] mr-3 text-2xl">❓</span>
                    <span className="flex-1">{faq.pergunta}</span>
                    <span className="text-gray-400 ml-2">▼</span>
                  </summary>
                  <div className="mt-4 pl-11 text-gray-700 leading-relaxed">
                    {faq.resposta}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* CTA final */}
        <div className="bg-gradient-to-r from-gray-800 to-black text-white p-8 rounded-lg text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Pronto para transformar seu espaço?</h3>
          <p className="text-lg mb-6">
            Faça um orçamento gratuito e sem compromisso com nossos especialistas
          </p>
          <a 
            href="/contato"
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition"
          >
            Solicitar Orçamento Agora →
          </a>
        </div>

        {/* Schema.org FAQ markup para SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqCategories.flatMap(cat => 
                cat.perguntas.map(faq => ({
                  "@type": "Question",
                  "name": faq.pergunta,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.resposta
                  }
                }))
              )
            })
          }}
        />
      </div>
    </main>
  );
}
