import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import { generatePageMetadata } from '@/lib/seo/page-metadata';
import CoberturaAreaGourmetExpandedSections from './CoberturaAreaGourmetExpandedSections';

export const metadata = generatePageMetadata('cobertura-area-gourmet');

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura para Área Gourmet',
  name: 'Cobertura para Área Gourmet',
  description: 'Cobertura retrátil em policarbonato para área gourmet com automação via Alexa e sensor de chuva.',
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-area-gourmet',
    getServiceSchemaMinPrice('cobertura-area-gourmet'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para área gourmet?',
    answer: getFaqPriceAnswer('abreEFecha'),
  },
  {
    question: 'Qual o melhor tipo de cobertura para área gourmet?',
    answer: 'A cobertura retrátil é ideal para área gourmet, pois permite abrir totalmente para ventilação durante churrascos e fechar quando chover ou esfriar. O sistema abre e fecha oferece flexibilidade total, diferente das coberturas fixas que não permitem controle do clima.',
  },
  {
    question: 'A cobertura para área gourmet precisa de ventilação?',
    answer: 'Sim! A ventilação é essencial em áreas gourmet, especialmente durante churrascos. A cobertura retrátil permite abrir totalmente para máxima ventilação, evitando acúmulo de fumaça e mantendo o ambiente agradável. Quando fechada, protege contra chuva e sol.',
  },
  {
    question: 'Posso automatizar a cobertura da área gourmet?',
    answer: 'Sim! A cobertura para área gourmet pode ser automatizada com Alexa, controle remoto ou sensor de chuva. Isso permite controle total sem precisar sair de casa, e o sensor fecha automaticamente quando detecta chuva, protegendo móveis e equipamentos.',
  },
];

export default function CoberturaAreaGourmet() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <Breadcrumb />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Área Gourmet', href: '/servicos/cobertura-area-gourmet' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/blog/churrasqueira.jpg"
                  alt="Cobertura área gourmet com churrasqueira e policarbonato retrátil instalado"
                  title="Cobertura para área gourmet — Cobersystem"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Área Gourmet
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cobertura retrátil em policarbonato perfeita para área gourmet e churrasqueira. Sistema abre e fecha
                  com automação via Alexa e sensor de chuva. Controle total do clima sem perder ventilação.
                  Ideal para quem ama receber e fazer churrascos.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Ventilação total quando aberta para churrascos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Proteção contra chuva e sol sem perder conforto</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Automação opcional via Alexa, controle remoto e sensor de chuva</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Ajuda a manter o ambiente agradável durante eventos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Estrutura em policarbonato para uso no dia a dia</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <CoberturaAreaGourmetExpandedSections />

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura Retrátil para Área Gourmet?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                A área gourmet é um dos espaços mais importantes da casa moderna. É onde você recebe amigos, 
                faz churrascos e cria memórias. Por isso, precisa de uma cobertura que ofereça flexibilidade: 
                aberta para ventilação durante eventos e fechada para proteção quando necessário.
              </p>
              <p className="mb-4">
                A cobertura retrátil é a solução perfeita porque permite abrir totalmente para máxima ventilação 
                (essencial durante churrascos) e fechar quando chover ou esfriar, protegendo móveis, equipamentos 
                e pessoas. Diferente das coberturas fixas, você tem controle total sobre o ambiente.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens para Área Gourmet</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🔥 Ventilação Total</h3>
                <p className="text-gray-600">Abra totalmente durante churrascos para evitar acúmulo de fumaça e manter o ambiente agradável.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🌧️ Proteção Automática</h3>
                <p className="text-gray-600">Sensor de chuva fecha automaticamente, protegendo móveis, churrasqueira e equipamentos.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Controle de Sol</h3>
                <p className="text-gray-600">Feche nos dias muito quentes para sombra ou abra para aproveitar o sol quando quiser.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🤖 Automação Inteligente</h3>
                <p className="text-gray-600">Controle via Alexa ou controle remoto. Abra ou feche sem sair de casa.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ideias e Modelos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Área Gourmet Completa</h3>
                <p className="text-gray-600">Cobertura retrátil cobrindo toda a área gourmet, incluindo churrasqueira, mesa e área de estar.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Apenas Churrasqueira</h3>
                <p className="text-gray-600">Cobertura focada na churrasqueira, protegendo equipamentos e permitindo uso mesmo com chuva.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrada com Varanda</h3>
                <p className="text-gray-600">Cobertura que integra área gourmet com varanda, criando um espaço único e versátil.</p>
              </div>
            </div>
          </section>

          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="area-gourmet" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura perfeita para sua área gourmet</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orcamento" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Quero+um+or%C3%A7amento+de+cobertura+para+%C3%A1rea+gourmet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

