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

const HERO_IMAGE = '/images/produtos/cobertura-policarbonato/compacto/IMG_1762.jpg';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20fixa%20em%20policarbonato%20compacto.';

export const metadata: Metadata = {
  title: "Cobertura Fixa Policarbonato Compacto | Transparência Total | Cobersystem",
  description: "Cobertura fixa em policarbonato compacto 2mm. Totalmente transparente ou colorido. Máxima luminosidade e proteção visual. Preço por m² e orçamento.",
  keywords: "cobertura fixa policarbonato compacto, policarbonato compacto 2mm, cobertura transparente, cobertura fixa preço, policarbonato compacto SP",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-compacto',
  },
  openGraph: {
    title: "Cobertura Fixa Policarbonato Compacto | Transparência e Proteção | Cobersystem",
    description: "Cobertura fixa em policarbonato compacto com alta transparência, resistência e proteção permanente para diferentes ambientes.",
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-compacto',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-policarbonato/compacto/IMG_1762.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura Fixa em Policarbonato Compacto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-policarbonato/compacto/IMG_1762.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Fixa Policarbonato Compacto',
  description: 'Cobertura fixa em policarbonato compacto 2mm com transparência total ou cores personalizadas.',
  image: ['https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-policarbonato/compacto/IMG_1762.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-compacto',
    getServiceSchemaMinPrice('cobertura-fixa-policarbonato-compacto'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa cobertura fixa em policarbonato compacto?',
    answer: getFaqPriceAnswer('fixaCompacto'),
  },
  {
    question: 'O policarbonato compacto é totalmente transparente?',
    answer: 'Sim! O policarbonato compacto 2mm oferece transparência de até 90%, permitindo máxima entrada de luz natural. Também está disponível em cores como bronze, azul, verde e outras, para quem prefere menos transparência.',
  },
  {
    question: 'Qual a diferença entre policarbonato compacto e alveolar?',
    answer: 'O policarbonato compacto é totalmente sólido e transparente, oferecendo máxima luminosidade. O alveolar tem câmaras de ar internas e oferece melhor isolamento térmico. O compacto é ideal para quem quer máxima transparência, enquanto o alveolar é melhor para isolamento térmico.',
  },
  {
    question: 'Cobertura fixa compacto aguenta granizo?',
    answer: 'Sim. O policarbonato compacto 2mm suporta impactos de granizo muito superiores ao vidro. É uma das melhores opções para garagens e varandas em regiões com temporal frequente.',
  },
  {
    question: 'Quanto tempo dura uma cobertura fixa em policarbonato compacto?',
    answer: 'Com manutenção básica (limpeza semestral), a cobertura fixa em policarbonato compacto dura mais de 15 anos. A estrutura de alumínio anodizado não enferruja e mantém a estabilidade estrutural por décadas.',
  },
];

export default function CoberturaFixaCompacto() {
  return (
    <>
      <StructuredData data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura Fixa Policarbonato Compacto', href: '/servicos/cobertura-fixa-policarbonato-compacto' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura fixa em policarbonato compacto 2mm — projeto Cobersystem SP"
                  title="Cobertura Fixa Policarbonato Compacto"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura Fixa em Policarbonato Compacto 2mm
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cobertura fixa em policarbonato compacto com transparência total ou cores personalizadas.
                  Máxima luminosidade e proteção visual. Estrutura de alumínio resistente.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Transparência de até 90% — máxima entrada de luz natural</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Policarbonato compacto 2mm resistente a impactos e granizo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Cores personalizadas: transparente, bronze, azul, verde</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Proteção UV de 99% para pessoas e móveis</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Ideal para varandas, áreas gourmet e garagens</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é Policarbonato Compacto?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                O policarbonato compacto é um material totalmente sólido, sem câmaras de ar internas. 
                Oferece transparência de até 90%, permitindo máxima entrada de luz natural, similar ao vidro, 
                mas com muito mais resistência a impactos.
              </p>
              <p className="mb-4">
                Diferente do policarbonato alveolar (que tem isolamento térmico), o compacto oferece máxima 
                transparência e luminosidade. É ideal para áreas que precisam de muita luz natural, como 
                varandas, áreas gourmet e garagens.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Transparência Total</h3>
                <p className="text-gray-600">Até 90% de transparência, permitindo máxima entrada de luz natural.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🎨 Cores Personalizadas</h3>
                <p className="text-gray-600">Disponível em transparente, bronze, azul, verde e outras cores.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">💪 Alta Resistência</h3>
                <p className="text-gray-600">Resistente a impactos, granizo e intempéries, muito mais resistente que vidro.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Proteção UV</h3>
                <p className="text-gray-600">Bloqueia até 99% dos raios UV, protegendo pessoas e móveis.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fotos de Obras</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <OptimizedImage src="/images/blog/cobertura-retratil-area-gourmet.jpg" alt="Cobertura fixa policarbonato compacto transparente" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/blog/cobertura-policarbonato-tipos.jpg" alt="Policarbonato compacto varanda" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/projetos/abre-fecha-alveolar-01.jpg" alt="Estrutura alumínio policarbonato compacto" width={400} height={300} className="rounded-lg" />
            </div>
          </section>

          <PriceEstimateNote className="mb-8" />
          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="fixa-policarbonato-compacto" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura fixa com máxima transparência</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink href={WHATSAPP_URL} location="footer-cta" serviceSlug="cobertura-fixa-policarbonato-compacto" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">WhatsApp Agora</WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

