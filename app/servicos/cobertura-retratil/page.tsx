import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';

export const metadata: Metadata = {
  title: "Cobertura Retrátil | Abre e Fecha com Automação | Cobersystem",
  description:
    "Cobertura retrátil em policarbonato com sistema abre e fecha. Controle do clima com abertura de 0 a 90 graus e automação opcional. Solicite orçamento.",
  keywords:
    "cobertura retratil, cobertura abre e fecha, policarbonato, automação cobertura, sensor de chuva, Alexa, cobertura retrátil preço",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-retratil',
  },
  openGraph: {
    title: "Cobertura Retrátil | Abre e Fecha com Automação | Cobersystem",
    description: "Cobertura retrátil em policarbonato com sistema abre e fecha. Controle do clima com abertura de 0 a 90 graus e automação opcional.",
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-retratil',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
        width: 1200,
        height: 800,
        alt: 'Cobertura Retrátil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Retrátil',
  description:
    'Cobertura retrátil em policarbonato com sistema abre e fecha e controle do clima com abertura de 0 a 90 graus.',
  image: [
    'https://coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
  ],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-retratil',
  },
};

const faqs = [
  {
    question: 'O que é uma cobertura retrátil?',
    answer:
      'É um sistema de cobertura em que a estrutura abre e fecha, permitindo controlar ventilação, sombreamento e proteção contra chuva e sol. Ideal para quem quer flexibilidade de uso ao longo do ano.',
  },
  {
    question: 'Quais são os principais benefícios da cobertura retrátil?',
    answer:
      'Ela oferece controle do clima com abertura gradual, reduz a incidência de chuva quando fechada, melhora o conforto em dias quentes com ventilação e permite aproveitar o ambiente com mais praticidade.',
  },
  {
    question: 'A cobertura retrátil pode ser automatizada?',
    answer:
      'Sim. A automação pode incluir comando por voz, controle remoto e/ou sensor de chuva, ajustando automaticamente o fechamento para proteger o ambiente quando necessário.',
  },
  {
    question: 'A cobertura retrátil pode ser usada em diferentes ambientes?',
    answer:
      'Sim. É indicada para áreas como área gourmet, varanda, garagem e outros espaços externos onde você deseja proteção com flexibilidade de abertura.',
  },
];

export default function CoberturaRetratil() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              {
                label: 'Cobertura Retrátil',
                href: '/servicos/cobertura-retratil',
              },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg"
                  alt="Cobertura retrátil em alumínio"
                  title="Cobertura Retrátil em alumínio"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura Retrátil
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cobertura retrátil em policarbonato com sistema abre e fecha para
                  controlar o clima com abertura de 0 a 90 graus. Projetos que
                  protegem do tempo sem abrir mão da ventilação e do conforto no uso
                  diário.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              O que é Cobertura Retrátil?
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                A cobertura retrátil é uma solução pensada para flexibilidade:
                ela pode abrir para ventilação e fechamento para proteção. Com o
                sistema abre e fecha, você ajusta a cobertura de acordo com a
                necessidade do ambiente.
              </p>
              <p className="mb-4">
                Dependendo do projeto, o sistema pode contar com automação
                para facilitar o controle, como comando por voz, controle
                remoto e/ou sensor de chuva.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🌦️ Controle do Clima
                </h3>
                <p className="text-gray-600">
                  Abertura gradual para equilibrar ventilação, incidência de
                  luz e proteção contra intempéries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🛡️ Proteção Quando Precisa
                </h3>
                <p className="text-gray-600">
                  Fechamento para ajudar a proteger contra chuva e sol, mantendo
                  o ambiente mais confortável.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🤖 Automação Opcional
                </h3>
                <p className="text-gray-600">
                  Recursos para facilitar o controle, com foco em praticidade
                  no dia a dia.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  💨 Ventilação Preservada
                </h3>
                <p className="text-gray-600">
                  Solução para aproveitar o espaço com ventilação controlada,
                  sem perder conforto.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Aplicações
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Área Gourmet
                </h3>
                <p className="text-gray-600">
                  Proteção e ventilação para receber com conforto em diferentes
                  condições climáticas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Varanda
                </h3>
                <p className="text-gray-600">
                  Mais conforto no uso da varanda, com controle do clima e do
                  sombreamento.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Garagem
                </h3>
                <p className="text-gray-600">
                  Proteção do espaço com flexibilidade para melhor aproveitamento
                  ao longo do dia.
                </p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="retratil" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-xl mb-8 text-gray-900">
              Cobertura retrátil para transformar seu espaço
            </p>
            <Link
              href="/contato"
              className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
            >
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

