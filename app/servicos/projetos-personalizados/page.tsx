import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { COBERSYSTEM_PRICING, formatPricePerM2, getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import ProjetosPersonalizadosExpandedSections from './ProjetosPersonalizadosExpandedSections';

const HERO_IMAGE = '/images/blog/cobertura-retratil-area-gourmet.jpg';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20consultoria%20para%20projeto%20personalizado%20de%20cobertura.';
const PRICE_FROM = `A partir de ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}`;

export const metadata: Metadata = {
  title: 'Projetos Personalizados | Consultoria Engenharia | Cobersystem SP',
  description:
    'Projetos personalizados de cobertura com consultoria de engenharia, cálculo estrutural e memorial descritivo. Soluções sob medida em SP.',
  keywords:
    'projetos personalizados cobertura, consultoria engenharia cobertura, projeto técnico cobertura, cobertura sob medida',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/projetos-personalizados',
  },
  openGraph: {
    title: 'Projetos Personalizados de Cobertura | Cobersystem',
    description:
      'Projetos personalizados de coberturas retráteis e fixas com engenharia sob medida e atendimento técnico especializado.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/projetos-personalizados',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg',
        width: 1200,
        height: 800,
        alt: 'Projetos Personalizados de Cobertura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Projetos Personalizados de Cobertura',
  name: 'Projetos Personalizados de Cobertura',
  description: 'Projetos personalizados de cobertura com consultoria de engenharia e soluções sob medida.',
  image: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
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
    'https://www.coberturapolicarbonato.com.br/servicos/projetos-personalizados',
    getServiceSchemaMinPrice('projetos-personalizados'),
  ),
};

const faqs = [
  {
    question: 'O que inclui um projeto personalizado?',
    answer:
      'Visita técnica, análise estrutural, projeto técnico com plantas e cortes, cálculo estrutural quando necessário, especificação de materiais, cronograma e acompanhamento da obra.',
  },
  {
    question: 'Preciso de projeto técnico para cobertura?',
    answer:
      'Para vãos grandes, condomínios ou integrações complexas, o projeto técnico com memorial descritivo e ART é recomendado para segurança e aprovação.',
  },
  {
    question: 'Quanto custa um projeto personalizado?',
    answer: getFaqPriceAnswer('fixaAlveolar'),
  },
  {
    question: 'Quanto tempo leva um projeto personalizado de cobertura?',
    answer:
      'Após a visita técnica, o projeto fica pronto em 5 a 10 dias úteis. Obras simples iniciam em 2 semanas após aprovação. Projetos com cálculo estrutural podem levar até 15 dias.',
  },
  {
    question: 'A Cobersystem faz projetos para condomínios e empresas?',
    answer:
      'Sim. Atendemos condomínios, escolas, restaurantes e empresas com memorial descritivo, ART e documentação para assembleia ou licitação.',
  },
  {
    question: 'Qual a garantia em projetos personalizados?',
    answer:
      'Garantia de 2 anos na estrutura, materiais e instalação executada pela Cobersystem, conforme contrato.',
  },
];

export default function ProjetosPersonalizados() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Projetos Personalizados', href: '/servicos/projetos-personalizados' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Projeto personalizado de cobertura retrátil — consultoria de engenharia Cobersystem SP"
                  title="Projetos Personalizados de Cobertura"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </figure>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Projetos Personalizados e Consultoria de Engenharia
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Engenharia sob medida para coberturas complexas: memorial descritivo, cálculo estrutural,
                  integração com automação e acompanhamento da obra. Para casos que exigem documentação técnica
                  completa.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '2 anos', l: 'Garantia' },
                    { v: PRICE_FROM.replace('A partir de ', ''), l: 'Referência base' },
                    { v: '5–10 dias', l: 'Projeto técnico' },
                    { v: 'Grande SP', l: 'Atendimento' },
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
                    'Visita técnica e levantamento completo',
                    'Projeto com plantas, cortes e memorial',
                    'Cálculo estrutural assinado',
                    'Especificação de materiais certificados',
                    'Acompanhamento profissional da obra',
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
                    Solicitar Consultoria
                  </Link>
                  <WhatsAppLink
                    href={WHATSAPP_URL}
                    location="hero"
                    serviceSlug="projetos-personalizados"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          <ProjetosPersonalizadosExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="projetos-personalizados" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Solicite Sua Consultoria</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + proposta em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Consultoria
              </Link>
              <WhatsAppLink
                href={WHATSAPP_URL}
                location="footer-cta"
                serviceSlug="projetos-personalizados"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                WhatsApp Agora
              </WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
