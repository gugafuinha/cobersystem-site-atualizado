import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

const HERO_IMAGE = '/images/produtos/cobertura-retratil/aluminio/IMG_3609.jpg';

export const metadata: Metadata = {
  title: "Cobertura para Garagem | Policarbonato | Cobersystem",
  description: "Cobertura para garagem em policarbonato. Proteção para veículos contra chuva, sol e granizo. Cobertura fixa ou retrátil. Preço e orçamento.",
  keywords: "cobertura para garagem, cobertura garagem policarbonato, cobertura garagem preço, cobertura carro, proteção veículo",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-garagem',
  },
  openGraph: {
    title: "Cobertura para Garagem | Proteção para Veículos | Cobersystem",
    description: "Cobertura para garagem com proteção contra chuva, sol e intempéries, com estrutura resistente e acabamento profissional.",
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-garagem',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_3609.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura para Garagem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_3609.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Garagem',
  description: 'Cobertura em policarbonato para garagem, protegendo veículos contra chuva, sol e granizo.',
  image: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_3609.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-garagem',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para garagem?',
    answer: 'O preço de uma cobertura para garagem varia conforme o tamanho, material e tipo (fixa ou retrátil). Em média, o investimento fica entre R$ 150 e R$ 350 por m². Coberturas fixas são mais econômicas, enquanto retráteis oferecem mais flexibilidade.',
  },
  {
    question: 'Qual o melhor tipo de cobertura para garagem?',
    answer: 'Para garagem, você pode escolher entre cobertura fixa (mais econômica) ou retrátil (mais versátil). A fixa oferece proteção permanente, enquanto a retrátil permite abrir quando quiser ventilação ou fechar para proteção total.',
  },
  {
    question: 'A cobertura protege contra granizo?',
    answer: 'Sim! O policarbonato é altamente resistente a impactos, incluindo granizo. Oferece proteção superior aos veículos contra granizo, chuva e sol.',
  },
];

export default function CoberturaGaragem() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Garagem', href: '/servicos/cobertura-garagem' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura para garagem em policarbonato com proteção contra chuva e sol — Cobersystem SP"
                  title="Cobertura para Garagem"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Garagem em Policarbonato
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Proteção completa para sua garagem e veículos. Cobertura em policarbonato fixa ou retrátil.
                  Protege contra chuva, sol, granizo e intempéries.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Proteção total contra chuva, sol e granizo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Policarbonato resistente a impactos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Opções fixa ou retrátil conforme necessidade</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Estrutura de alumínio resistente e durável</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Iluminação natural mantendo garagem clara</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura para Garagem?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Uma cobertura para garagem oferece proteção essencial para seus veículos contra chuva, sol, 
                granizo e outras intempéries. O policarbonato é ideal porque é altamente resistente a impactos, 
                oferece proteção UV e permite entrada de luz natural, mantendo a garagem iluminada.
              </p>
              <p className="mb-4">
                Você pode escolher entre cobertura fixa (proteção permanente) ou retrátil (flexibilidade para 
                abrir quando quiser ventilação). Ambas oferecem excelente proteção e durabilidade.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🚗 Proteção Total</h3>
                <p className="text-gray-600">Protege veículos contra chuva, sol, granizo e outras intempéries.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">💪 Resistência</h3>
                <p className="text-gray-600">Policarbonato altamente resistente a impactos, incluindo granizo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Iluminação Natural</h3>
                <p className="text-gray-600">Permite entrada de luz natural, mantendo a garagem iluminada.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🔧 Fácil Manutenção</h3>
                <p className="text-gray-600">Material de fácil limpeza e manutenção, com longa durabilidade.</p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Proteção completa para sua garagem</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

