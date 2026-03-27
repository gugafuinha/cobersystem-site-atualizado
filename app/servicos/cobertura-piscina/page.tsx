import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura para Piscina | Retrátil Policarbonato | Cobersystem",
  description: "Cobertura retrátil para piscina em policarbonato. Proteção contra chuva, folhas e sol. Sistema abre e fecha com automação. Mantém temperatura da água. Preço e orçamento.",
  keywords: "cobertura para piscina, cobertura piscina policarbonato, cobertura retrátil piscina, cobertura piscina preço, cobertura piscina SP",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-piscina',
  },
  openGraph: {
    title: "Cobertura para Piscina | Retrátil Policarbonato | Cobersystem",
    description: "Cobertura retrátil para piscina em policarbonato. Proteção contra chuva, folhas e sol. Sistema abre e fecha com automação.",
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-piscina',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura para Piscina Retrátil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Piscina Retrátil',
  description: 'Cobertura retrátil em policarbonato para piscina com automação e proteção contra chuva e folhas.',
  image: [
    'https://coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg',
  ],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-piscina',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para piscina?',
    answer: 'O preço de uma cobertura para piscina varia conforme o tamanho da piscina, material escolhido e sistema de automação. Em média, o investimento fica entre R$ 300 e R$ 500 por m². Para piscinas maiores, o valor por m² tende a diminuir. Solicite um orçamento personalizado.',
  },
  {
    question: 'A cobertura para piscina mantém a água aquecida?',
    answer: 'Sim! A cobertura retrátil para piscina ajuda a manter a temperatura da água, especialmente quando fechada. O policarbonato cria um efeito estufa, aquecendo a água naturalmente. Isso reduz o consumo de energia do aquecedor.',
  },
  {
    question: 'A cobertura protege contra folhas e sujeira?',
    answer: 'Sim! Quando fechada, a cobertura protege completamente a piscina contra folhas, galhos, insetos e outras sujeiras. Isso reduz significativamente a necessidade de limpeza e manutenção da piscina.',
  },
  {
    question: 'Posso usar a piscina com a cobertura fechada?',
    answer: 'A cobertura retrátil permite abrir totalmente quando você quiser usar a piscina, e fechar quando não estiver em uso. Isso oferece proteção quando necessário e acesso total quando quiser nadar.',
  },
];

export default function CoberturaPiscina() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Piscina', href: '/servicos/cobertura-piscina' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg"
                  alt="Cobertura retrátil para piscina em policarbonato - Cobersystem"
                  title="Cobertura para Piscina"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Piscina Retrátil
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sistema em policarbonato com abertura controlada: protege a água, reduz sujeira e ajuda a manter o
                  conforto térmico, com opção de automação.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Policarbonato com proteção UV e boa resistência a impactos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Abertura e fechamento para adaptar ao clima e ao uso da piscina</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Menos folhas e sujeira na água quando fechada</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Ajuda a reduzir evaporação e perda de calor da água</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Automação opcional (Alexa, controle remoto, sensor de chuva)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura Retrátil para Piscina?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Uma cobertura para piscina oferece inúmeros benefícios: protege contra folhas e sujeira, mantém a 
                temperatura da água, reduz evaporação e permite uso mesmo em dias chuvosos. A cobertura retrátil 
                é ideal porque permite abrir totalmente quando você quiser usar a piscina e fechar quando não estiver 
                em uso, oferecendo proteção sem comprometer o acesso.
              </p>
              <p className="mb-4">
                Diferente das coberturas fixas, a retrátil oferece flexibilidade total: abra para nadar ao sol ou 
                feche para proteger e aquecer a água. Com automação, você pode controlar tudo via Alexa ou sensor 
                de chuva automático.
              </p>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura perfeita para sua piscina</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

