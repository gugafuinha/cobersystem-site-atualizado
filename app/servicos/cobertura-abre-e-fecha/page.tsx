import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import {
  COBERSYSTEM_PRICING,
  formatBRL,
  formatPricePerM2,
  getFaqPriceAnswer,
  getServiceSchemaMinPrice,
} from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import CoberturaAbreEFechaExpandedSections from './CoberturaAbreEFechaExpandedSections';

const HERO_IMAGE = '/images/projetos/Cobertura Abre e Fecha.png';
const HERO_IMAGE_OG =
  'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Abre%20e%20Fecha.png';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20abre%20e%20fecha.';

const ABRE_E_FECHA_PRICE_FROM = `A partir de ${formatBRL(COBERSYSTEM_PRICING.abreEFecha.min)}/m²`;

export const metadata: Metadata = {
  title: 'Cobertura Abre e Fecha | Acessos, Corredores e Varandas | Policarbonato Cobersystem SP',
  description: `Cobertura abre e fecha para acessos, corredores, varandas e área gourmet. Policarbonato ${ABRE_E_FECHA_PRICE_FROM}. Abertura 0 a 90°. Automação opcional. Orçamento grátis em SP.`,
  keywords:
    'cobertura abre e fecha, cobertura abre e fecha policarbonato, cobertura abre e fecha SP, cobertura abre e fecha preço, acessos corredores cobertura, sensor chuva cobertura, cobertura varanda',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-abre-e-fecha',
  },
  openGraph: {
    title: 'Cobertura Abre e Fecha | Acessos, Corredores e Varandas | Cobersystem SP',
    description: `Cobertura abre e fecha policarbonato para acessos e corredores, ${ABRE_E_FECHA_PRICE_FROM}. Abertura 0 a 90°. Orçamento grátis.`,
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-abre-e-fecha',
    images: [
      {
        url: HERO_IMAGE_OG,
        width: 1200,
        height: 900,
        alt: 'Cobertura Abre e Fecha',
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
  name: 'Cobertura Abre e Fecha',
  description:
    'Cobertura retrátil em policarbonato com sistema abre e fecha. Abertura de 0 a 90 graus. Automação opcional via Alexa e sensor de chuva.',
  image: [
    HERO_IMAGE_OG,
    'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
  ],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-abre-e-fecha',
    getServiceSchemaMinPrice('cobertura-abre-e-fecha'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura abre e fecha?',
    answer: getFaqPriceAnswer('abreEFecha'),
  },
  {
    question: 'Qual a diferença entre cobertura abre e fecha e cobertura fixa?',
    answer:
      'A cobertura fixa é permanente e não se move. O abre e fecha permite abrir de 0 a 90° para ventilação ou fechar para proteção total. É ideal para quem quer flexibilidade em varandas, corredores e áreas gourmet.',
  },
  {
    question: 'A cobertura abre e fecha perde ventilação?',
    answer:
      'Não. Quando aberta, permite ventilação total como uma persiana horizontal. Quando fechada, protege contra chuva e sol. Você controla o grau de abertura conforme o clima.',
  },
  {
    question: 'Posso automatizar a cobertura abre e fecha?',
    answer:
      'Sim. Motor, sensor de chuva, controle remoto e Alexa são opcionais e discriminados no orçamento. Se quiser automação inclusa no pacote, veja a página de cobertura retrátil automatizada.',
  },
  {
    question: 'Qual a diferença entre abre e fecha e cobertura retrátil automatizada?',
    answer: `O abre e fecha tem faixa de preço menor (${formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}) e pode ser manual. A retrátil automatizada (${formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}) inclui motor e sensores no pacote premium, fechando sozinha na chuva.`,
  },
  {
    question: 'Qual a garantia da cobertura abre e fecha?',
    answer:
      'Garantia de 2 anos em estrutura, policarbonato e instalação executada pela Cobersystem. Atendemos São Paulo e Grande SP com suporte pós-venda.',
  },
];

export default function CoberturaAbreEFecha() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura Abre e Fecha', href: '/servicos/cobertura-abre-e-fecha' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura abre e fecha em policarbonato — acessos, corredores e varandas — Cobersystem SP"
                  title="Cobertura Abre e Fecha — Cobersystem SP"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Abre e Fecha em Policarbonato
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Sistema retrátil que abre de 0 a 90° para ventilar e fecha para proteger da chuva.
                  Ideal para acessos, corredores, varandas e área gourmet — manual ou com automação
                  opcional. Projeto completo com garantia de 2 anos em SP.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '0–90°', l: 'Abertura lâminas' },
                    { v: '2 anos', l: 'Garantia total' },
                    { v: ABRE_E_FECHA_PRICE_FROM.replace('A partir de ', ''), l: 'Investimento' },
                    { v: 'Grande SP', l: 'Área de atuação' },
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
                    'Ventilação total quando aberta — sem perder o ar livre',
                    'Fecha para proteção contra chuva e sol',
                    'Manual ou com motor e sensor de chuva (opcional)',
                    'Policarbonato compacto ou alveolar sob medida',
                    'Menor investimento que retrátil automatizada premium',
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
                    href={WHATSAPP_URL}
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

          <CoberturaAbreEFechaExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="abre-e-fecha" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Solicite Sua Cobertura Abre e Fecha</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
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
