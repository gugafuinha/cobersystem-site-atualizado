import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import CoberturaGaragemExpandedSections from './CoberturaGaragemExpandedSections';

const HERO_IMAGE = '/images/projetos/Cobertura Garagem.png';
const HERO_IMAGE_OG =
  'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Garagem.png';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20de%20garagem.';

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
        url: HERO_IMAGE_OG,
        width: 1200,
        height: 900,
        alt: 'Cobertura para Garagem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [HERO_IMAGE_OG],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Garagem',
  description: 'Cobertura em policarbonato para garagem, protegendo veículos contra chuva, sol e granizo.',
  image: [HERO_IMAGE_OG],
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
    answer: 'O preço de uma cobertura para garagem varia conforme o tamanho, material e tipo (fixa ou retrátil). Em média, o investimento fica entre R$ 150 e R$ 420 por m². Para 1 carro (~18 m²), o valor fica entre R$ 2.700 e R$ 7.560.',
  },
  {
    question: 'Qual o melhor tipo de cobertura para garagem?',
    answer: 'Para garagem, você pode escolher entre cobertura fixa (mais econômica) ou retrátil (mais versátil). A fixa oferece proteção permanente, enquanto a retrátil permite abrir quando quiser ventilação ou fechar para proteção total.',
  },
  {
    question: 'A cobertura protege contra granizo?',
    answer: 'Sim! O policarbonato é altamente resistente a impactos, incluindo granizo de até 3 cm. Oferece proteção superior aos veículos contra granizo, chuva e sol — até 250 vezes mais resistente que vidro.',
  },
  {
    question: 'Qual o tamanho ideal para cobertura de 1 ou 2 carros?',
    answer: 'Para 1 carro, recomendamos área de 18–22 m² (3,5 x 5,5 m). Para 2 carros lado a lado, 36–40 m² (7 x 5,5 m). Medimos no local para ajustar conforme o veículo e espaço disponível.',
  },
  {
    question: 'Cobertura retrátil vale a pena para garagem?',
    answer: 'Sim, quando a garagem é integrada à área gourmet ou precisa de ventilação nos dias quentes. A retrátil automatizada fecha sozinha na chuva via sensor, protegendo o veículo sem intervenção manual.',
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

          <CoberturaGaragemExpandedSections />

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Proteção Total</h3>
                <p className="text-gray-600">Protege veículos contra chuva, sol, granizo e outras intempéries.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Resistência</h3>
                <p className="text-gray-600">Policarbonato altamente resistente a impactos, incluindo granizo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Iluminação Natural</h3>
                <p className="text-gray-600">Permite entrada de luz natural, mantendo a garagem iluminada.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fácil Manutenção</h3>
                <p className="text-gray-600">Material de fácil limpeza e manutenção, com longa durabilidade.</p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="garagem" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Proteção completa para sua garagem</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                WhatsApp Agora
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
