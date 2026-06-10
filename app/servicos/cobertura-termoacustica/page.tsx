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
import CoberturaTermoacusticaExpandedSections from './CoberturaTermoacusticaExpandedSections';

const HERO_IMAGE = '/images/projetos/Cobertura Termoacustica.png';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20termoac%C3%BAstica.';

export const metadata: Metadata = {
  title: 'Cobertura Termoacústica para Área Gourmet e Galpão em SP | Cobersystem',
  description:
    'Instalação de cobertura termoacústica em SP para área gourmet, varanda, galpão e comércios. Policarbonato alveolar e painéis sanduíche. Redução de até 30dB e 10°C. Visita técnica grátis.',
  keywords:
    'cobertura termoacústica área gourmet SP, cobertura termoacústica galpão industrial SP, cobertura para varanda termoacústica, instalação cobertura termoacústica são paulo, isolamento térmico cobertura SP, cobertura para comércio SP',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
  },
  openGraph: {
    title: 'Cobertura Termoacústica em SP | Área Gourmet e Galpão | Cobersystem',
    description:
      'Instalação de cobertura termoacústica em SP. Área gourmet, varanda, galpão e comércios. Redução de até 30dB e 10°C.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Termoacustica.png',
        width: 1200,
        height: 900,
        alt: 'Cobertura Termoacústica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Termoacustica.png'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Instalação de Cobertura Termoacústica em SP',
  description:
    'Serviço de instalação de cobertura termoacústica em policarbonato alveolar e painéis sanduíche. Área gourmet, varanda, galpão e comércios. Redução de até 30dB e 10°C. São Paulo e Grande SP.',
  serviceType: 'Instalação de cobertura termoacústica',
  image: [
    'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Termoacustica.png',
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
    getServiceSchemaMinPrice('cobertura-termoacustica'),
  ),
};

const faqs = [
  {
    question: 'O que é cobertura termoacústica?',
    answer:
      'É um sistema de cobertura projetado para reduzir simultaneamente calor e ruído externo. Utiliza policarbonato alveolar de alta espessura (6mm ou 10mm) ou painéis sanduíche com núcleo isolante, criando barreira térmica e acústica eficiente.',
  },
  {
    question: 'Quanto a cobertura termoacústica reduz ruído e temperatura?',
    answer:
      'Em projetos com painéis sanduíche termoacústicos, a redução de ruído pode chegar a até 30 dB. O isolamento térmico pode diminuir a sensação de calor em até 10 °C no ambiente coberto, comparado à área sem proteção.',
  },
  {
    question: 'Qual a diferença entre sanduíche e policarbonato alveolar?',
    answer:
      'O sanduíche oferece máximo isolamento acústico (até ~30 dB) e bloqueio térmico superior, porém sem luz natural. O alveolar 10mm equilibra custo, translucidez e bom isolamento — ideal quando se quer luz filtrada com conforto.',
  },
  {
    question: 'Quanto custa uma cobertura termoacústica?',
    answer: getFaqPriceAnswer('fixaAlveolar'),
  },
  {
    question: 'Onde a cobertura termoacústica é mais indicada?',
    answer:
      'Residências próximas a avenidas, áreas gourmet com churrasqueira, varandas de apartamento, escritórios, clínicas e coberturas de piscina em regiões quentes ou ruidosas. Também atendemos condomínios e comércios.',
  },
  {
    question: 'Qual a garantia da cobertura termoacústica?',
    answer:
      'Oferecemos 2 anos de garantia total na estrutura, painéis e instalação executada pela Cobersystem, conforme condições contratuais. Atendemos toda a Grande São Paulo.',
  },
];

export default function CoberturaTermoacustica() {
  return (
    <>
      <StructuredData data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura Termoacústica', href: '/servicos/cobertura-termoacustica' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura termoacústica em policarbonato — projeto Cobersystem SP"
                  title="Cobertura Acústica Termoacústica — Cobersystem SP"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Termoacústica: Proteção Térmica e Acústica para o Seu Espaço
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Instalamos coberturas termoacústicas em área gourmet, varandas, galpões e comércios
                  em SP. Redução de até <strong>30 dB de ruído</strong> e até{' '}
                  <strong>10 °C de temperatura</strong>. Policarbonato alveolar ou painéis sanduíche
                  com garantia de 2 anos.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '30 dB', l: 'Redução de ruído' },
                    { v: '10 °C', l: 'Menos calor' },
                    { v: '2 anos', l: 'Garantia total' },
                    { v: 'Grande SP', l: 'Área atendida' },
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
                    'Bloqueia ruído de trânsito, chuva e vizinhos',
                    'Conforto térmico em área gourmet e varanda',
                    'Policarbonato alveolar ou painel sanduíche',
                    'Estrutura em alumínio — sem ferrugem',
                    'Visita técnica gratuita e projeto em 48h',
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
                  <WhatsAppLink href={WHATSAPP_URL} location="hero" serviceSlug="cobertura-termoacustica" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">WhatsApp</WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          {/* Eixo vertical: link para catálogo de modelos em /produtos */}
          <section className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-800 mb-1">Conheça os modelos disponíveis</p>
              <p className="text-sm text-gray-600">
                Compare painéis sanduíche EPS, PU e policarbonato alveolar — especificações,
                espessuras e aplicações no catálogo completo da linha termoacústica.
              </p>
            </div>
            <Link
              href="/produtos/cobertura-termoacustica"
              className="shrink-0 inline-block rounded-lg bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-700 transition"
            >
              Ver catálogo de modelos →
            </Link>
          </section>

          <CoberturaTermoacusticaExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="termoacustica" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Projeto Termoacústico</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink href={WHATSAPP_URL} location="footer-cta" serviceSlug="cobertura-termoacustica" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">WhatsApp Agora</WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
