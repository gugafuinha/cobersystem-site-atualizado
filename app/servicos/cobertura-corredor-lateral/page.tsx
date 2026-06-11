import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import CoberturaCorredorLateralExpandedSections from './CoberturaCorredorLateralExpandedSections';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';

const HERO_IMAGE = '/images/blog/cobertura-abre-fecha.jpg';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20de%20corredor%20lateral.';

export const metadata: Metadata = {
  title: "Cobertura para Corredor Lateral | Policarbonato | Cobersystem",
  description: "Cobertura para corredor lateral em policarbonato. Proteção para passagem lateral da casa. Fixa ou retrátil. Preço e orçamento.",
  keywords: "cobertura corredor lateral, cobertura lateral casa, cobertura passagem lateral, cobertura corredor preço",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-corredor-lateral',
  },
  openGraph: {
    title: "Cobertura para Corredor Lateral | Proteção e Iluminação | Cobersystem",
    description: "Cobertura para corredor lateral com proteção contra intempéries, mantendo ventilação e iluminação natural no ambiente.",
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-corredor-lateral',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura para Corredor Lateral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura para Corredor Lateral',
  name: 'Cobertura para Corredor Lateral',
  description: 'Cobertura em policarbonato para corredor lateral, protegendo passagem lateral da casa.',
  image: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg'],
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-corredor-lateral',
    getServiceSchemaMinPrice('cobertura-corredor-lateral'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para corredor lateral?',
    answer: getFaqPriceAnswer('fixaAlveolar'),
  },
  {
    question: 'Qual o melhor tipo de cobertura para corredor lateral?',
    answer: 'Para corredor lateral, você pode escolher entre cobertura fixa (mais econômica) ou retrátil (mais versátil). A fixa oferece proteção permanente, enquanto a retrátil permite abrir quando quiser ventilação.',
  },
  {
    question: 'Cobertura fixa ou retrátil para lavanderia no corredor?',
    answer: 'Para lavanderia em corredor lateral, a cobertura fixa em policarbonato alveolar é a opção mais econômica e eficiente. Se o corredor fica muito quente, a retrátil permite abrir para ventilar nos dias de calor.',
  },
  {
    question: 'Precisa de alvará para cobertura no corredor lateral?',
    answer: 'Em geral, coberturas leves em policarbonato sobre corredor lateral não exigem alvará, pois não alteram a estrutura do imóvel. Em condomínios, recomendamos consultar a convenção. A Cobersystem fornece memorial descritivo quando necessário.',
  },
  {
    question: 'Qual a largura mínima para instalar cobertura no corredor?',
    answer: 'Instalamos coberturas em corredores a partir de 0,6 m de largura. Corredores entre 0,8 e 1,2 m são os mais comuns em residências paulistanas. A inclinação mínima garante escoamento sem reduzir a altura de passagem.',
  },
];

export default function CoberturaCorredorLateral() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Corredor Lateral', href: '/servicos/cobertura-corredor-lateral' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura para corredor lateral em policarbonato — projeto Cobersystem SP"
                  title="Cobertura para Corredor Lateral"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Corredor Lateral
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cobertura em policarbonato para corredor lateral da casa. Proteção contra chuva e sol na passagem lateral.
                  Fixa ou retrátil. Estrutura de alumínio resistente.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Proteção permanente contra chuva e sol na passagem lateral</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Opções fixa ou retrátil conforme necessidade</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Policarbonato com proteção UV e boa luminosidade</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Estrutura de alumínio resistente à corrosão</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Uso confortável do corredor em qualquer clima</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <CoberturaCorredorLateralExpandedSections />

          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="corredor-lateral" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura para corredor lateral — visita técnica gratuita</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink href={WHATSAPP_URL} location="footer-cta" serviceSlug="cobertura-corredor-lateral" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">WhatsApp Agora</WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
