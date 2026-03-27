import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura Abre e Fecha Preço | Automatizada com Alexa | Cobersystem",
  description: "Cobertura abre e fecha em policarbonato com automação via Alexa e sensor de chuva. Preço por m², modelos e orçamento. Sistema retrátil que abre de 0 a 90 graus. Controle total do clima sem perder ventilação.",
  keywords: "cobertura abre e fecha preço, cobertura abre e fecha SP, cobertura retrátil automatizada, cobertura abre e fecha policarbonato, cobertura automática preço, cobertura retrátil policarbonato",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-abre-e-fecha',
  },
  openGraph: {
    title: "Cobertura Abre e Fecha | Preço e Automação | Cobersystem",
    description: "Cobertura retrátil que abre e fecha com automação via Alexa. Controle total do clima sem perder ventilação.",
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-abre-e-fecha',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura Abre e Fecha Automatizada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Abre e Fecha Automatizada',
  description: 'Cobertura retrátil em policarbonato com sistema abre e fecha automatizado via Alexa e sensor de chuva. Abertura de 0 a 90 graus.',
  image: [
    'https://coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
  ],
  brand: {
    '@type': 'Brand',
    name: 'Cobersystem',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-abre-e-fecha',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura abre e fecha?',
    answer: 'O preço de uma cobertura abre e fecha varia conforme o tamanho, material escolhido (policarbonato compacto ou alveolar) e sistema de automação. Em média, o investimento fica entre R$ 200 e R$ 400 por m², incluindo estrutura de alumínio, telhas e automação. Solicite um orçamento personalizado para seu projeto.',
  },
  {
    question: 'Como funciona a automação da cobertura abre e fecha?',
    answer: 'A cobertura abre e fecha pode ser controlada de três formas: via Alexa (comando de voz), controle remoto ou sensor de chuva automático. O sensor detecta chuva e fecha a cobertura automaticamente, protegendo o ambiente. A abertura varia de 0 a 90 graus, permitindo controle total da ventilação.',
  },
  {
    question: 'A cobertura abre e fecha perde ventilação?',
    answer: 'Não! Essa é a principal vantagem da cobertura abre e fecha. Quando aberta, permite ventilação total. Quando fechada, protege contra chuva e sol. Funciona como uma persiana horizontal, dando controle total sobre o clima do ambiente.',
  },
  {
    question: 'Qual a diferença entre cobertura abre e fecha e cobertura fixa?',
    answer: 'A cobertura fixa é permanente e não se move. A cobertura abre e fecha permite abrir totalmente para ventilação ou fechar para proteção. É ideal para quem quer flexibilidade e controle do ambiente, especialmente em áreas gourmet, varandas e churrasqueiras.',
  },
  {
    question: 'A cobertura abre e fecha funciona com chuva?',
    answer: 'Sim! A cobertura abre e fecha possui sensor de chuva que fecha automaticamente quando detecta precipitação. Você também pode fechar manualmente via Alexa ou controle remoto. Quando fechada, oferece proteção total contra chuva.',
  },
];

export default function CoberturaAbreEFecha() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura Abre e Fecha', href: '/servicos/cobertura-abre-e-fecha' },
            ]}
          />

          {/* Hero Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg"
                  alt="Cobertura abre e fecha automatizada em policarbonato - Cobersystem"
                  title="Cobertura Abre e Fecha Automatizada"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Abre e Fecha Automatizada
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Sistema retrátil inteligente que abre e fecha com automação via Alexa e sensor de chuva.
                  Controle total do clima com abertura de 0 a 90 graus. Sem perder ventilação, com proteção
                  completa contra chuva e sol. Ideal para áreas gourmet, varandas, churrasqueiras e piscinas.
                </p>
              </div>
            </div>
          </section>

          {/* O que é */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              O que é uma Cobertura Abre e Fecha?
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                A cobertura abre e fecha é um sistema retrátil em policarbonato que funciona como uma 
                persiana horizontal. As lâminas podem ser abertas de 0 a 90 graus, permitindo controle 
                total sobre a ventilação e iluminação do ambiente.
              </p>
              <p className="mb-4">
                Diferente das coberturas fixas tradicionais, a cobertura abre e fecha oferece flexibilidade 
                total: nos dias quentes, você abre para máxima ventilação; nos dias frios ou chuvosos, 
                fecha para proteção completa.
              </p>
              <p>
                O sistema é automatizado e pode ser controlado via Alexa (comando de voz), controle remoto 
                ou sensor de chuva automático. Quando o sensor detecta chuva, a cobertura fecha sozinha, 
                protegendo automaticamente o ambiente.
              </p>
            </div>
          </section>

          {/* Vantagens */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Vantagens da Cobertura Abre e Fecha
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">✓ Controle Total do Clima</h3>
                <p className="text-gray-600">
                  Abra nos dias quentes para ventilação máxima ou feche quando chover ou esfriar. 
                  Você decide o clima ideal para cada momento.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">✓ Automação Inteligente</h3>
                <p className="text-gray-600">
                  Controle via Alexa, controle remoto ou sensor de chuva automático. 
                  Sua cobertura fecha sozinha quando detecta chuva!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">✓ Sem Perder Ventilação</h3>
                <p className="text-gray-600">
                  Única cobertura que permite cobrir sem perder a ventilação natural. 
                  Funciona como uma persiana horizontal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">✓ Proteção UV</h3>
                <p className="text-gray-600">
                  Policarbonato com proteção UV, bloqueando até 99% dos raios solares nocivos, 
                  protegendo móveis e pessoas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">✓ Resistência e Durabilidade</h3>
                <p className="text-gray-600">
                  Estrutura em alumínio com pintura eletrostática e telhas de policarbonato 
                  de alta qualidade. Durabilidade superior a 15 anos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">✓ Valorização do Imóvel</h3>
                <p className="text-gray-600">
                  Uma cobertura abre e fecha valoriza significativamente seu imóvel, 
                  criando um espaço versátil e moderno.
                </p>
              </div>
            </div>
          </section>

          {/* Aplicações */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Aplicações Práticas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Área Gourmet</h3>
                <p className="text-gray-600">
                  Crie um ambiente perfeito para receber amigos e família, com controle total 
                  do clima e proteção contra chuva.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Churrasqueira</h3>
                <p className="text-gray-600">
                  Proteja sua churrasqueira da chuva sem perder a ventilação necessária 
                  para o churrasco perfeito.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Varanda</h3>
                <p className="text-gray-600">
                  Transforme sua varanda em um espaço versátil, protegido quando necessário 
                  e aberto para aproveitar o sol.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Piscina</h3>
                <p className="text-gray-600">
                  Cobertura retrátil para piscina permite usar o espaço mesmo em dias chuvosos, 
                  com ventilação quando necessário.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Apartamento</h3>
                <p className="text-gray-600">
                  Ideal para áreas de lazer em apartamentos, criando um espaço externo 
                  protegido e versátil.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Garagem</h3>
                <p className="text-gray-600">
                  Cobertura abre e fecha para garagem oferece proteção para veículos 
                  com ventilação quando necessário.
                </p>
              </div>
            </div>
          </section>

          {/* Modelos e Materiais */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Modelos e Materiais
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Policarbonato Compacto 2mm
                </h3>
                <p className="text-gray-600 mb-2">
                  Totalmente transparente ou colorido. Ideal para máxima luminosidade e proteção visual. 
                  Transparência de até 90%, permitindo entrada de luz natural.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Transparência total ou cores personalizadas</li>
                  <li>Resistente a impactos</li>
                  <li>Proteção UV 99%</li>
                  <li>Espessura: 2mm</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Policarbonato Alveolar
                </h3>
                <p className="text-gray-600 mb-2">
                  Excelente isolamento térmico e acústico. Perfeito para áreas que precisam 
                  de maior conforto térmico.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Isolamento térmico superior</li>
                  <li>Redução de ruído</li>
                  <li>Alta resistência</li>
                  <li>Espessuras: 4mm, 6mm, 10mm</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Estrutura de Alumínio
                </h3>
                <p className="text-gray-600 mb-2">
                  Estrutura em alumínio com pintura eletrostática na cor de sua escolha. 
                  Resistente à corrosão e intempéries.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Alumínio de alta qualidade</li>
                  <li>Pintura eletrostática personalizada</li>
                  <li>Resistente à corrosão</li>
                  <li>Durabilidade superior a 20 anos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Por que Cobersystem */}
          <section className="mb-12 bg-gradient-to-br from-gray-900 to-black text-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">
              Por que escolher a Cobersystem
            </h2>
            <div className="space-y-4 text-gray-200">
              <p className="text-gray-300">
                Em relação a outras opções do mercado e soluções tradicionais, a Cobersystem prioriza
                qualidade, automação e atendimento próximo ao cliente.
              </p>
              <p>
                <strong className="text-[#D4AF37]">Tecnologia de Ponta:</strong> Utilizamos os melhores 
                sistemas de automação do mercado, com integração Alexa e sensores de chuva de última geração.
              </p>
              <p>
                <strong className="text-[#D4AF37]">Materiais Premium:</strong> Trabalhamos apenas com 
                policarbonato de alta qualidade e estruturas de alumínio certificadas, garantindo durabilidade 
                superior.
              </p>
              <p>
                <strong className="text-[#D4AF37]">Atendimento Personalizado:</strong> Cada projeto é 
                único. Nossa equipe de engenheiros desenvolve soluções personalizadas para suas necessidades.
              </p>
              <p>
                <strong className="text-[#D4AF37]">Preço Justo:</strong> Oferecemos o melhor custo-benefício 
                do mercado, sem comprometer a qualidade. Orçamento transparente e sem surpresas.
              </p>
              <p>
                <strong className="text-[#D4AF37]">Garantia Completa:</strong> Oferecemos garantia estendida 
                em todos os nossos produtos e serviços, com suporte técnico especializado.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <FAQSchema faqs={faqs} />

          {/* CTA */}
          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Solicite Seu Orçamento Grátis
            </h2>
            <p className="text-xl mb-8 text-gray-900">
              Entre em contato e descubra o preço da sua cobertura abre e fecha personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="https://wa.me/5511943615079"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                WhatsApp
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

