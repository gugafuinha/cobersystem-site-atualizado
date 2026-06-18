import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { formatPriceFrom, getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import CoberturaRetratilAutomatizadaExpandedSections from './CoberturaRetratilAutomatizadaExpandedSections';

const RETRATIL_AUTO_PRICE_FROM = formatPriceFrom('retratilAutomatizada');
const HERO_IMAGE = '/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20retr%C3%A1til%20automatizada.';

export const metadata: Metadata = {
  title: 'Cobertura Automática Retrátil | Alexa, Sensor de Chuva e App | Cobersystem SP',
  description: `Cobertura retrátil automatizada que fecha sozinha na chuva. Motor, Alexa, controle remoto e app. ${RETRATIL_AUTO_PRICE_FROM}. Projeto e instalação em SP. Orçamento grátis.`,
  keywords:
    'cobertura automática, cobertura automatizada, cobertura retrátil automatizada, cobertura automática Alexa, sensor de chuva cobertura, cobertura retrátil inteligente, automação residencial cobertura',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil-automatizada',
  },
  openGraph: {
    title: 'Cobertura Automática Retrátil | Alexa, Sensor de Chuva e App | Cobersystem SP',
    description:
      'Cobertura automática que fecha sozinha na chuva e abre por voz (Alexa) ou celular. Preços 2026 e orçamento grátis.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil-automatizada',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura Retrátil Automatizada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura Retrátil Automatizada',
  name: 'Cobertura Retrátil Automatizada',
  description:
    'Cobertura retrátil com automação inteligente via Alexa, controle remoto e sensor de chuva automático.',
  image: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg'],
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-retratil-automatizada',
    getServiceSchemaMinPrice('cobertura-retratil-automatizada'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura retrátil automatizada?',
    answer: getFaqPriceAnswer('retratilAutomatizada'),
  },
  {
    question: 'Qual a diferença entre cobertura retrátil automatizada e abre e fecha?',
    answer:
      'A versão automatizada inclui motor, sensor de chuva e controles inteligentes no pacote — fecha sozinha quando chove. O abre e fecha pode ser manual ou receber automação como opcional, com faixa de preço menor. A automatizada é indicada para quem prioriza conforto e casa inteligente.',
  },
  {
    question: 'A cobertura fecha sozinha quando chove?',
    answer:
      'Sim. O sensor de chuva detecta precipitação e aciona o motor para fechar a cobertura em segundos, sem intervenção manual. Você pode reabrir depois pelo controle remoto, app ou Alexa.',
  },
  {
    question: 'Preciso ter Alexa para usar a automação?',
    answer:
      'Não. O sistema funciona com controle remoto e sensor de chuva automático. A integração com Alexa é opcional e permite comandos de voz como "Alexa, feche a cobertura".',
  },
  {
    question: 'Qual a diferença entre esta página e /servicos/cobertura-retratil?',
    answer:
      'Esta página é focada no pacote premium com automação completa (motor + sensores inclusos). A página de cobertura retrátil descreve o serviço geral de instalação retrátil, que pode incluir ou não automação conforme o orçamento.',
  },
  {
    question: 'Qual a garantia da cobertura retrátil automatizada?',
    answer:
      'Garantia de 2 anos em estrutura, policarbonato, motor, sensores e instalação executada pela Cobersystem. Atendemos São Paulo e Grande SP com suporte pós-venda.',
  },
];

export default function CoberturaRetratilAutomatizada() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              {
                label: 'Cobertura Retrátil Automatizada',
                href: '/servicos/cobertura-retratil-automatizada',
              },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura retrátil automatizada com Alexa e sensor de chuva — projeto Cobersystem SP"
                  title="Cobertura Automática Retrátil com Alexa — Cobersystem SP"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Automática Retrátil com Alexa e Sensor de Chuva
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Sistema premium que fecha sozinho na chuva e abre por voz, app ou controle remoto.
                  Motor silencioso, abertura 0 a 90° e projeto completo com garantia de 2 anos em SP.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '48–72h', l: 'Prazo instalação' },
                    { v: '2 anos', l: 'Garantia total' },
                    { v: 'Alexa', l: 'Comando por voz' },
                    { v: 'Sensor', l: 'Fecha na chuva' },
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
                    'Fecha automaticamente ao detectar chuva',
                    'Controle por Alexa, app ou controle remoto',
                    'Abertura de 0 a 90° para ventilação graduada',
                    'Motor e sensores inclusos no pacote automatizado',
                    'Diferente do abre e fecha manual — conforto total',
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
                  <WhatsAppLink href={WHATSAPP_URL} location="hero" serviceSlug="cobertura-retratil-automatizada" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">WhatsApp</WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          <CoberturaRetratilAutomatizadaExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="retratil-automatizada" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Solicite Sua Cobertura Automatizada</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink href={WHATSAPP_URL} location="footer-cta" serviceSlug="cobertura-retratil-automatizada" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">WhatsApp Agora</WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
