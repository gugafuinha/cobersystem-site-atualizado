import type { Metadata } from 'next';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import CoberturaRetratilServicoExpandedSections from './CoberturaRetratilServicoExpandedSections';

export const metadata: Metadata = {
  title: 'Cobertura Retrátil | Telhado Abre e Fecha | Automação Alexa | Cobersystem',
  description:
    'Cobertura retrátil e telhado abre e fecha em policarbonato com automação via Alexa e sensor de chuva. Controle 0 a 90° sem perder ventilação. Orçamento gratuito em SP.',
  keywords: [
    'cobertura retratil',
    'telhado retratil',
    'cobertura abre e fecha',
    'telhado abre e fecha',
    'policarbonato',
    'automacao Alexa',
    'sensor chuva',
    'cobertura retratil preco SP',
  ],
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-retratil',
  },
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
  offers: {
    '@type': 'Offer',
    priceRange: 'R$ 800 - R$ 1.500 por m²',
    availability: 'https://schema.org/InStock',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil',
  },
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
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instalação de Cobertura Retrátil Automática
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Projeto completo + instalação profissional + automação via Alexa
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">48-72h</div>
                <div className="text-sm text-blue-200">Prazo instalação</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">2 anos</div>
                <div className="text-sm text-blue-200">Garantia total</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">Alexa</div>
                <div className="text-sm text-blue-200">Automação inclusa</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">Grande SP</div>
                <div className="text-sm text-blue-200">Área atendida</div>
              </div>
            </div>
          </div>
        </section>

        <CoberturaRetratilServicoExpandedSections />

        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Solicite Seu Projeto Personalizado
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Visita técnica grátis + projeto em até 48h
            </p>
            <a
              href="https://wa.me/5511943615079?text=Olá!%20Quero%20um%20projeto%20de%20cobertura%20retrátil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              💬 Solicitar Projeto Grátis
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
