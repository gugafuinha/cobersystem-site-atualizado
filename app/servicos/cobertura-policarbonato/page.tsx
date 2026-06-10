import type { Metadata } from 'next';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import CoberturaPolicarbonatoServicoExpandedSections from './CoberturaPolicarbonatoServicoExpandedSections';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { getPolicarbonatoFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';

const HERO_IMAGE = '/images/projetos/Cobertura em Policarbonato.png';

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
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20em%20Policarbonato.png',
        width: 1200,
        height: 900,
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
      'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20em%20Policarbonato.png',
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-policarbonato',
    getServiceSchemaMinPrice('cobertura-policarbonato'),
  ),
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
        text: getPolicarbonatoFaqPriceAnswer(),
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
        <section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src={HERO_IMAGE}
                alt="Instalação de cobertura fixa em policarbonato — projeto Cobersystem SP"
                title="Instalação de Cobertura em Policarbonato"
                width={1200}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Instalação de Cobertura em Policarbonato
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Projeto completo + instalação profissional + garantia 2 anos
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">2-4 dias</div>
                  <div className="text-sm text-gray-600">Prazo instalação</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">2 anos</div>
                  <div className="text-sm text-gray-600">Garantia total</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">99% UV</div>
                  <div className="text-sm text-gray-600">Proteção solar</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">Grande SP</div>
                  <div className="text-sm text-gray-600">Área atendida</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CoberturaPolicarbonatoServicoExpandedSections />

        <div className="container mx-auto px-4">
          <PriceEstimateNote className="mb-8" />
          <ServiceAutomationSection />
        </div>

        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Solicite Seu Projeto Personalizado
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Visita técnica grátis + projeto em até 48h
            </p>
            <WhatsAppLink
              href="https://wa.me/5511943615079?text=Olá!%20Quero%20um%20projeto%20de%20cobertura%20em%20policarbonato"
              location="footer-cta"
              serviceSlug="cobertura-policarbonato"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              💬 Solicitar Projeto Grátis
            </WhatsAppLink>
          </div>
        </section>
      </main>
    </>
  );
}
