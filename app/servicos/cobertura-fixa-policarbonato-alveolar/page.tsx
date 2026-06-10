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
import CoberturaFixaAlveolarExpandedSections from './CoberturaFixaAlveolarExpandedSections';

const HERO_IMAGE = '/images/projetos/Cobertura Fixa Policarbonato Alveolar.png';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20fixa%20em%20policarbonato%20alveolar.';
const PRICE_FROM = `A partir de ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}`;

export const metadata: Metadata = {
  title: 'Cobertura Fixa Policarbonato Alveolar | Preço e Isolamento | Cobersystem SP',
  description:
    'Cobertura fixa em policarbonato alveolar com isolamento térmico e acústico. Preço por m², projeto e instalação em SP. Ideal para garagem, corredor e varanda.',
  keywords:
    'cobertura fixa policarbonato alveolar, policarbonato alveolar preço, cobertura termoacústica, isolamento térmico cobertura, cobertura fixa SP',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-alveolar',
  },
  openGraph: {
    title: 'Cobertura Fixa Policarbonato Alveolar | Preço e Isolamento | Cobersystem',
    description:
      'Cobertura fixa em policarbonato alveolar com excelente isolamento térmico e acústico. Proteção permanente e conforto.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-alveolar',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Fixa%20Policarbonato%20Alveolar.png',
        width: 1200,
        height: 900,
        alt: 'Cobertura Fixa em Policarbonato Alveolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Fixa%20Policarbonato%20Alveolar.png'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Fixa Policarbonato Alveolar',
  description: 'Cobertura fixa em policarbonato alveolar com excelente isolamento térmico e acústico.',
  image: ['https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Fixa%20Policarbonato%20Alveolar.png'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-alveolar',
    getServiceSchemaMinPrice('cobertura-fixa-policarbonato-alveolar'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa cobertura fixa em policarbonato alveolar?',
    answer: getFaqPriceAnswer('fixaAlveolar'),
  },
  {
    question: 'Qual a diferença entre policarbonato alveolar e compacto?',
    answer:
      'O alveolar tem câmaras de ar que isolam melhor calor e ruído. O compacto é mais transparente (efeito vidro). O alveolar é ideal para conforto térmico; o compacto para máxima luminosidade.',
  },
  {
    question: 'O policarbonato alveolar isola do calor?',
    answer:
      'Sim. As câmaras de ar reduzem significativamente a transferência de calor, deixando o ambiente coberto mais fresco em dias quentes.',
  },
  {
    question: 'Qual espessura escolher: 4mm, 6mm ou 10mm?',
    answer:
      '4mm para áreas menores e orçamento enxuto; 6mm para uso residencial padrão; 10mm para máximo isolamento em vãos maiores ou regiões muito quentes.',
  },
  {
    question: 'Cobertura fixa alveolar precisa de manutenção?',
    answer:
      'Pouca manutenção: limpeza trimestral com água e sabão neutro. Evite solventes. Inspecione calhas semestralmente.',
  },
  {
    question: 'Qual a garantia da cobertura fixa alveolar?',
    answer:
      'Garantia de 2 anos na estrutura, chapas, fixações e instalação executada pela Cobersystem em São Paulo e Grande SP.',
  },
];

export default function CoberturaFixaAlveolar() {
  return (
    <>
      <StructuredData data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura Fixa Policarbonato Alveolar', href: '/servicos/cobertura-fixa-policarbonato-alveolar' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura fixa em policarbonato alveolar — projeto Cobersystem SP"
                  title="Cobertura Fixa em Policarbonato Alveolar"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </figure>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Fixa em Policarbonato Alveolar
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Proteção permanente com isolamento térmico e acústico superior. Estrutura em alumínio,
                  chapas 4mm a 10mm e garantia de 2 anos. Ideal para garagem, corredor, varanda e áreas
                  que precisam de conforto sem abrir e fechar.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: '2 anos', l: 'Garantia total' },
                    { v: PRICE_FROM.replace('A partir de ', ''), l: 'Investimento' },
                    { v: '4–10mm', l: 'Espessuras' },
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
                    'Isolamento térmico com câmaras de ar',
                    'Redução de ruído de chuva',
                    'Proteção UV e impactos',
                    'Calhas e vedações dimensionadas',
                    'Projeto e instalação completos',
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
                  <WhatsAppLink
                    href={WHATSAPP_URL}
                    location="hero"
                    serviceSlug="cobertura-fixa-policarbonato-alveolar"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          <CoberturaFixaAlveolarExpandedSections />

          <div className="max-w-7xl mx-auto px-4">
            <PriceEstimateNote className="mb-8" />
            <ServiceAutomationSection />
          </div>

          <FAQSchema faqs={faqs} />
          <ServiceVejaTambem current="fixa-policarbonato-alveolar" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12 mx-4">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Visita técnica grátis + projeto em até 48h</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink
                href={WHATSAPP_URL}
                location="footer-cta"
                serviceSlug="cobertura-fixa-policarbonato-alveolar"
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
