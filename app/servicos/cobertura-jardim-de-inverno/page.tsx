import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import {
  COBERSYSTEM_PRICING,
  formatBRL,
  getJardimInvernoFaqPriceAnswer,
  getServiceSchemaMinPrice,
} from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import StructuredData from '@/components/seo/StructuredData';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import CoberturaJardimDeInvernoExpandedSections from './CoberturaJardimDeInvernoExpandedSections';

const HERO_IMAGE = '/images/projetos/jardim-de-inverno-02.png';
const HERO_IMAGE_OG =
  'https://www.coberturapolicarbonato.com.br/images/projetos/jardim-de-inverno-02.png';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20de%20jardim%20de%20inverno.';

const PRICE_FROM = `A partir de ${formatBRL(COBERSYSTEM_PRICING.fixaCompacto.min)}/m²`;

export const metadata: Metadata = {
  title: 'Cobertura Jardim de Inverno em SP: Preço e Modelos 2026',
  description: 'Cobertura retrátil ou fixa para jardim de inverno com luz natural e proteção da chuva. Instalação própria em SP. Visita técnica grátis.',
  keywords:
    'cobertura jardim de inverno, cobertura para jardim de inverno, jardim de inverno policarbonato, cobertura transparente jardim, telhado jardim de inverno, cobertura vidro jardim inverno SP',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-jardim-de-inverno',
  },
  openGraph: {
    title: 'Cobertura para Jardim de Inverno | Policarbonato Transparente | Cobersystem SP',
    description:
      'Cobertura em policarbonato para jardim de inverno. Luz natural preservada, proteção contra chuva e conforto térmico para plantas.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-jardim-de-inverno',
    images: [
      {
        url: HERO_IMAGE_OG,
        width: 1200,
        height: 900,
        alt: 'Cobertura para Jardim de Inverno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [HERO_IMAGE_OG],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura para Jardim de Inverno',
  name: 'Cobertura para Jardim de Inverno',
  image: [HERO_IMAGE_OG],
  description:
    'Cobertura em policarbonato compacto transparente para jardim de inverno. Preserva luz natural para plantas, com proteção contra chuva, vento e variações de temperatura.',
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-jardim-de-inverno',
    getServiceSchemaMinPrice('cobertura-jardim-de-inverno'),
  ),
};

const faqs = [
  {
    question: 'Qual policarbonato é melhor para jardim de inverno?',
    answer:
      'Para jardim de inverno, o policarbonato compacto transparente de 4mm ou 6mm é a melhor escolha. Ele transmite até 88% da luz solar (essencial para plantas), é resistente a impactos, filtra raios UV e mantém temperatura mais estável que o vidro. O policarbonato alveolar também é usado, mas com menor transparência.',
  },
  {
    question: 'O policarbonato deixa luz suficiente para as plantas?',
    answer:
      'Sim. O policarbonato compacto transparente transmite 82–88% da luz solar, o que é suficiente para a maioria das plantas de interior e jardim de inverno. Ele também filtra raios UV excessivos, o que pode ser benéfico para espécies sensíveis.',
  },
  {
    question: 'Quanto custa uma cobertura para jardim de inverno?',
    answer: getJardimInvernoFaqPriceAnswer(),
  },
  {
    question: 'Como a cobertura ajuda no controle de umidade e temperatura?',
    answer:
      'A cobertura reduz variação térmica entre sol e sombra, evita encharcamento das folhas na chuva e, com vedação lateral opcional, ajuda a manter umidade estável para orquídeas e tropicais. Calhas dimensionadas impedem gotejamento direto sobre as plantas.',
  },
  {
    question: 'Posso fechar o jardim de inverno completamente?',
    answer:
      'Sim. A cobertura pode ser combinada com vedação lateral em policarbonato ou vidro, criando um espaço totalmente fechado que regula temperatura, umidade e protege as plantas durante todo o ano. A Cobersystem elabora projetos completos com fechamento total.',
  },
  {
    question: 'Qual a garantia da cobertura para jardim de inverno?',
    answer:
      'Garantia de 2 anos em estrutura, policarbonato e instalação executada pela Cobersystem. O material possui garantia de fábrica contra defeitos. Atendemos São Paulo e Grande SP.',
  },
];

export default function CoberturaJardimDeInverno() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura Jardim de Inverno', href: '/servicos/cobertura-jardim-de-inverno' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <figure className="relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[3/4]">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Jardim de inverno integrado à cozinha com cobertura em policarbonato compacto — projeto Cobersystem SP"
                  title="Cobertura para Jardim de Inverno com Policarbonato Compacto — Cobersystem"
                  width={900}
                  height={1200}
                  priority
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 50%' }}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-2 px-3">
                  Cobertura para Jardim de Inverno — luz natural para plantas
                </figcaption>
              </figure>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura para Jardim de Inverno
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Policarbonato compacto transparente projetado para preservar luz natural, controlar
                  temperatura e proteger suas plantas da chuva o ano todo. Estrutura em alumínio anodizado
                  com garantia de 2 anos em SP.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '88%', l: 'Luz para plantas' },
                    { v: '2 anos', l: 'Garantia total' },
                    { v: PRICE_FROM.replace('A partir de ', ''), l: 'Investimento' },
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
                    'Até 88% de luz solar — fotossíntese preservada',
                    'Filtro UV protege folhas de queimaduras',
                    'Menos variação térmica que vidro simples',
                    'Calhas que não gotejam sobre as plantas',
                    'Vedação lateral opcional para microclima',
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
                  <WhatsAppLink href={WHATSAPP_URL} location="hero" serviceSlug="cobertura-jardim-de-inverno" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">WhatsApp</WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          <CoberturaJardimDeInvernoExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="jardim-de-inverno" />

          {/* Artigos Relacionados */}
          <section className="mb-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Artigos Relacionados</h2>
            <div className="grid sm:grid-cols-1 gap-4">
              <a
                href="/blog/jardim-de-inverno-o-que-e-precos"
                className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Jardim de Inverno: O Que É, Tipos e Quanto Custa</span>
                <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
              </a>
            </div>
          </section>

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Orçamento para Jardim de Inverno</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink href={WHATSAPP_URL} location="footer-cta" serviceSlug="cobertura-jardim-de-inverno" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">WhatsApp Agora</WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
