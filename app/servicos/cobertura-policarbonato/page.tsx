import type { Metadata } from 'next';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import CoberturaPolicarbonatoServicoExpandedSections from './CoberturaPolicarbonatoServicoExpandedSections';

export const metadata: Metadata = {
  title: 'Serviço de Instalação de Cobertura em Policarbonato | Projeto Completo | SP',
  description:
    'Serviço completo de instalação de cobertura fixa em policarbonato. Projeto personalizado, instalação profissional, garantia 2 anos. Atendemos toda Grande SP.',
  keywords: [
    'cobertura policarbonato',
    'instalação cobertura fixa',
    'projeto cobertura',
    'telhado policarbonato',
    'instalação cobertura policarbonato',
    'projeto cobertura fixa',
    'montagem cobertura',
  ],
  openGraph: {
    title: 'Instalação de Cobertura em Policarbonato | Cobersystem SP',
    description: 'Projeto + instalação + materiais premium. Serviço completo com garantia.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-policarbonato',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg',
        width: 1200,
        height: 800,
        alt: 'Instalação de cobertura fixa em policarbonato Cobersystem',
      },
    ],
  },
  alternates: {
    canonical:
      'https://www.coberturapolicarbonato.com.br/servicos/cobertura-policarbonato',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instalação de Cobertura em Policarbonato | Cobersystem SP',
    description:
      'Projeto + instalação + materiais premium. Serviço completo com garantia.',
    images: [
      'https://www.coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Instalação de Cobertura em Policarbonato',
  serviceType: 'Instalação de coberturas fixas em policarbonato',
  url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-policarbonato',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Cobersystem',
    telephone: '+5511943615079',
    url: 'https://www.coberturapolicarbonato.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Frei Diogo das Chagas, 160',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '03985-060',
      addressCountry: 'BR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'São Paulo',
  },
  offers: {
    '@type': 'Offer',
    priceRange: 'R$ 450 - R$ 900 por m²',
    availability: 'https://schema.org/InStock',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-policarbonato',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa uma cobertura em policarbonato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O valor de uma cobertura em policarbonato varia entre R$ 450 e R$ 900 por m², dependendo do tipo de chapa (alveolar ou compacto) e tamanho do projeto. Solicite um orçamento gratuito pelo WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre policarbonato alveolar e compacto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O policarbonato alveolar é mais leve e possui melhor isolamento térmico, ideal para grandes áreas. O compacto é mais resistente a impactos e transparente, indicado para coberturas onde a claridade é importante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de instalação de cobertura em policarbonato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo de instalação é de 2 a 4 dias úteis após aprovação do projeto, dependendo do tamanho da área. Realizamos visita técnica gratuita e entregamos o projeto em até 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'O policarbonato protege contra raios UV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Nossas chapas de policarbonato possuem proteção UV de 99%, bloqueando os raios ultravioleta prejudiciais e mantendo o ambiente fresco e protegido.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a garantia da cobertura em policarbonato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos 2 anos de garantia total na estrutura e nos materiais. Atendemos toda a Grande São Paulo com instalação profissional.',
      },
    },
  ],
};

export default function CoberturaPolicarbonatoServicoPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <Breadcrumb />

      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instalação de Cobertura em Policarbonato
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Projeto completo + instalação profissional + garantia 2 anos
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">2-4 dias</div>
                <div className="text-sm text-blue-200">Prazo instalação</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">2 anos</div>
                <div className="text-sm text-blue-200">Garantia total</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">99% UV</div>
                <div className="text-sm text-blue-200">Proteção solar</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">Grande SP</div>
                <div className="text-sm text-blue-200">Área atendida</div>
              </div>
            </div>
          </div>
        </section>

        <CoberturaPolicarbonatoServicoExpandedSections />

        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Solicite Seu Projeto Personalizado
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Visita técnica grátis + projeto em até 48h
            </p>
            <a
              href="https://wa.me/5511943615079?text=Olá!%20Quero%20um%20projeto%20de%20cobertura%20em%20policarbonato"
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
