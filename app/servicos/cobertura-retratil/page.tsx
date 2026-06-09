import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import CoberturaRetratilServicoExpandedSections from './CoberturaRetratilServicoExpandedSections';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Policarbonato | Telhado Abre e Fecha | Alexa | Cobersystem SP',
  description:
    'Cobertura retrátil em policarbonato que abre e fecha automaticamente. Automação Alexa, sensor de chuva e controle 0 a 90°. Cobertura de policarbonato retrátil para varanda, área gourmet e acesso. Orçamento grátis em SP.',
  keywords: [
    'cobertura retratil',
    'cobertura de policarbonato retratil',
    'cobertura retratil policarbonato',
    'telhado retratil',
    'cobertura abre e fecha',
    'telhado abre e fecha',
    'policarbonato',
    'automacao Alexa',
    'sensor chuva',
    'cobertura retratil preco SP',
  ],
  openGraph: {
    title: 'Instalação de Cobertura Retrátil | Cobersystem SP',
    description: 'Projeto + instalação + automação. Serviço completo com garantia.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
        width: 1200,
        height: 800,
        alt: 'Instalação de cobertura retrátil Cobersystem',
      },
    ],
  },
  alternates: {
    canonical:
      'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instalação de Cobertura Retrátil | Cobersystem SP',
    description:
      'Projeto + instalação + automação. Serviço completo com garantia.',
    images: [
      'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Instalação de Cobertura Retrátil Automática',
  serviceType: 'Instalação e automação de coberturas retráteis',
  url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil',
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
  areaServed: {
    '@type': 'City',
    name: 'São Paulo',
  },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil',
    '800',
  ),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa uma cobertura retrátil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O valor de uma cobertura retrátil varia entre R$ 800 e R$ 1.500 por m², dependendo do tamanho, tipo de policarbonato e automação. Solicite um orçamento gratuito pelo WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'A cobertura retrátil funciona com chuva forte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Nossa cobertura possui sensor de chuva automático que fecha a cobertura assim que detecta precipitação, protegendo seu espaço automaticamente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de instalação de uma cobertura retrátil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo de instalação é de 48 a 72 horas após a aprovação do projeto. Realizamos visita técnica gratuita e entregamos o projeto em até 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'A cobertura retrátil pode ser controlada pelo celular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Nossa cobertura é compatível com Alexa e pode ser controlada por voz ou pelo celular. Também possui controle remoto e sensor de chuva automático.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a garantia da cobertura retrátil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos 2 anos de garantia total, cobrindo estrutura, mecanismo de abertura, automação e policarbonato. Atendemos toda a Grande São Paulo.',
      },
    },
  ],
};

export default function CoberturaRetratilServicoPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <Breadcrumb />

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura Retrátil', href: '/servicos/cobertura-retratil' },
          ]} />

          {/* Hero — foto esquerda, texto direita */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/projetos/abre-fecha-alveolar-01.jpg"
                  alt="Cobertura retrátil instalada em área gourmet — projeto Cobersystem SP"
                  title="Cobertura Retrátil Policarbonato — Cobersystem SP"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 40%' }}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Retrátil em Policarbonato
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Sistema retrátil que abre e fecha de 0 a 90° com automação via Alexa e sensor de chuva.
                  Policarbonato compacto, alveolar ou telhas de alumínio intercaladas. Projeto, engenharia
                  e instalação completos em SP. Garantia de 2 anos.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '48–72h', l: 'Prazo instalação' },
                    { v: '2 anos', l: 'Garantia total' },
                    { v: 'Alexa', l: 'Automação via voz' },
                    { v: 'Grande SP', l: 'Área atendida' },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-700">{v}</div>
                      <div className="text-xs text-gray-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  {[
                    'Abertura de 0 a 90° sem perder ventilação',
                    'Fecha sozinha com sensor de chuva automático',
                    'Controle por Alexa, remoto ou aplicativo',
                    'Estrutura em alumínio anodizado sem manutenção',
                    'Policarbonato compacto, alveolar ou telhas intercaladas',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    href="/contato"
                    className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition"
                  >
                    Solicitar Orçamento
                  </Link>
                  <a
                    href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Gostaria+de+or%C3%A7amento+para+cobertura+retr%C3%A1til."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <CoberturaRetratilServicoExpandedSections />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Projeto Personalizado</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Quero+um+projeto+de+cobertura+retr%C3%A1til"
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
