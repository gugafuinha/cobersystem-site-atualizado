import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import CoberturaAluminioExpandedSections from './CoberturaAluminioExpandedSections';

const HERO_IMAGE = '/images/produtos/cobertura-retratil/aluminio/IMG_6324.jpg';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20de%20alum%C3%ADnio.';

export const metadata: Metadata = {
  title: 'Cobertura de Alumínio | Telhas, Cores RAL e Pintura Eletrostática | Cobersystem SP',
  description:
    'Cobertura em alumínio com telhas trapezoidais e intercaladas. Pintura eletrostática personalizada, zero ferrugem. Ideal para área gourmet, espaço kids e playground. Orçamento grátis em SP.',
  keywords:
    'cobertura de alumínio, telhas de alumínio, cobertura alumínio preço, pintura eletrostática cobertura, cobertura alumínio área gourmet, cobertura playground alumínio SP',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-aluminio',
  },
  openGraph: {
    title: 'Cobertura de Alumínio | Telhas e Cores Personalizadas | Cobersystem SP',
    description:
      'Cobertura de alumínio com pintura eletrostática, telhas trapezoidais e intercaladas. Projeto e instalação completos.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-aluminio',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6324.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura de Alumínio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6324.jpg'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura de Alumínio',
  name: 'Cobertura de Alumínio',
  description:
    'Cobertura em alumínio com telhas trapezoidais ou intercaladas, pintura eletrostática personalizada e estrutura dimensionada.',
  image: [
    'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6324.jpg',
    'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Alum%C3%ADnio%20Espa%C3%A7o%20Kids.png',
  ],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Cobersystem',
    telephone: '+5511943615079',
    url: 'https://www.coberturapolicarbonato.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
  areaServed: { '@type': 'City', name: 'São Paulo' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-aluminio',
    getServiceSchemaMinPrice('cobertura-aluminio'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura de alumínio?',
    answer: getFaqPriceAnswer('fixaCompacto'),
  },
  {
    question: 'Quais tipos de telha em alumínio a Cobersystem oferece?',
    answer:
      'Trabalhamos com telha trapezoidal (maior rigidez para vãos amplos), telha intercalada (combina sombra e luz) e telha sanduíche termoacústica em alumínio para máximo conforto. A escolha depende do uso e da estética desejada.',
  },
  {
    question: 'Posso escolher a cor da cobertura de alumínio?',
    answer:
      'Sim. A pintura eletrostática está disponível em cores RAL padrão (branco, preto, cinza, bronze, verde, azul) e cores especiais sob consulta. A tinta em pó é curada em estufa para máxima aderência e durabilidade.',
  },
  {
    question: 'Cobertura de alumínio ou policarbonato: qual escolher?',
    answer:
      'O alumínio oferece opacidade total, acabamento metálico e zero ferrugem — ideal para área gourmet, espaço kids e playground. O policarbonato deixa passar luz natural e é mais indicado para piscinas, varandas e jardins de inverno.',
  },
  {
    question: 'Cobertura de alumínio precisa de manutenção?',
    answer:
      'Manutenção mínima: limpeza com água e sabão neutro a cada 6 meses. Não enferruja e a pintura eletrostática não exige repintura periódica como estruturas de ferro.',
  },
  {
    question: 'Qual a garantia da cobertura de alumínio?',
    answer:
      'Garantia de 2 anos na estrutura, telhas e pintura eletrostática aplicada pela Cobersystem, conforme contrato. Atendemos São Paulo e Grande SP.',
  },
];

export default function CoberturaAluminio() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura de Alumínio', href: '/servicos/cobertura-aluminio' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura de alumínio com telhas e pintura eletrostática — Cobersystem SP"
                  title="Cobertura de Alumínio"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura de Alumínio
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Telhas trapezoidais e intercaladas com <strong>pintura eletrostática</strong> na cor
                  de sua escolha. Estrutura leve, sem ferrugem, durabilidade superior a 20 anos.
                  Projeto e instalação completos em SP.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '20+ anos', l: 'Durabilidade' },
                    { v: '0%', l: 'Ferrugem' },
                    { v: 'RAL', l: 'Cores personalizadas' },
                    { v: '2 anos', l: 'Garantia total' },
                  ].map(({ v, l }) => (
                    <div
                      key={l}
                      className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-700">{v}</div>
                      <div className="text-xs text-gray-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  {[
                    'Pintura eletrostática em cores RAL',
                    'Telhas trapezoidais, intercaladas e sanduíche',
                    'Ideal para gourmet, kids, playground e garagem',
                    'Estrutura dimensionada conforme normas',
                    'Visita técnica gratuita em Grande SP',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    href="/orcamento"
                    className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition"
                  >
                    Solicitar Orçamento
                  </Link>
                  <WhatsAppLink href={WHATSAPP_URL} location="hero" serviceSlug="cobertura-aluminio" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">WhatsApp</WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          <CoberturaAluminioExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="aluminio" />

          {/* Artigos Relacionados */}
          <section className="mb-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Artigos Relacionados</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/blog/cobertura-aluminio-preco-vantagens"
                className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Cobertura de Alumínio: Preço por m², Vantagens e Quando Vale a Pena</span>
                <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
              </a>
              <a
                href="/blog/cobertura-acustica-reduzir-barulho-chuva"
                className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Cobertura Acústica: Como Reduzir o Barulho da Chuva [2026]</span>
                <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
              </a>
            </div>
          </section>

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Projeto em Alumínio</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink href={WHATSAPP_URL} location="footer-cta" serviceSlug="cobertura-aluminio" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">WhatsApp Agora</WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
