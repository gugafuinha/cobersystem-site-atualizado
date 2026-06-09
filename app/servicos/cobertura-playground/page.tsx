import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import CoberturaPlaygroundExpandedSections from './CoberturaPlaygroundExpandedSections';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';

const HERO_IMAGE = '/images/projetos/Cobertura Playground.png';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20de%20playground.';

export const metadata: Metadata = {
  title: 'Cobertura para Playground | Abre e Fecha e Retrátil | Escolas e Condomínios | Cobersystem SP',
  description:
    'Cobertura para playground em policarbonato: abre e fecha, retrátil automatizada e fixa. Proteção UV, sensor de chuva. Projetos para escolas e condomínios em SP. Orçamento grátis.',
  keywords:
    'cobertura para playground, cobertura abre e fecha, cobertura retrátil, cobertura para escolas, cobertura para condomínios, cobertura playground policarbonato, cobertura área de lazer',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-playground',
  },
  openGraph: {
    title: 'Cobertura para Playground | Abre e Fecha | Cobersystem SP',
    description:
      'Cobertura para playground com sistema abre e fecha e retrátil automatizada. Proteção UV, sensor de chuva. Projetos para escolas e condomínios.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-playground',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Playground.png',
        width: 1200,
        height: 900,
        alt: 'Cobertura para Playground com sistema abre e fecha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Playground.png'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Playground',
  description:
    'Cobertura para playground em policarbonato com sistema abre e fecha ou retrátil automatizada. Proteção UV, sensor de chuva. Ideal para escolas e condomínios.',
  image: ['https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Playground.png'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-playground',
    '350',
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para playground?',
    answer:
      'O preço varia conforme tamanho e tipo: fixa R$ 350–600/m²; abre e fecha R$ 800–1.400/m²; retrátil automatizada R$ 1.200–1.800/m². Solicite orçamento com visita técnica gratuita.',
  },
  {
    question: 'Qual cobertura é melhor para playground de escola?',
    answer:
      'Recomendamos abre e fecha ou retrátil automatizada com sensor de chuva. Inclui ART de engenheiro e documentação para licitações. Proteção UV essencial para uso diário.',
  },
  {
    question: 'A cobertura retrátil funciona em condomínios?',
    answer:
      'Sim! Abre para brincadeiras ao sol e fecha na chuva automaticamente. Elaboramos memorial descritivo para assembleia com acabamentos personalizados.',
  },
  {
    question: 'A cobertura protege contra raios UV no playground?',
    answer:
      'Sim! Policarbonato com proteção UV de 99%, reduzindo temperatura do piso e brinquedos em até 40%. Uso seguro mesmo no sol forte.',
  },
  {
    question: 'Qual a diferença entre cobertura abre e fecha e retrátil para playground?',
    answer:
      'A retrátil automatizada inclui motor, sensor de chuva e controle remoto/Alexa. A abre e fecha pode ser manual ou motorizada. Para alto fluxo em escolas, a automatizada é mais prática.',
  },
];

export default function CoberturaPlayground() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura para Playground', href: '/servicos/cobertura-playground' },
            ]}
          />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura para playground com sistema abre e fecha em policarbonato — projeto Cobersystem SP"
                  title="Cobertura para Playground"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Playground
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sistema em policarbonato com <strong>cobertura abre e fecha</strong> ou{' '}
                  <strong>cobertura retrátil</strong> automatizada: protege crianças do sol e
                  chuva, reduz temperatura do piso e permite brincadeiras seguras o ano todo.
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Cobertura abre e fecha com abertura de 0 a 90 graus',
                    'Cobertura retrátil com automação e sensor de chuva',
                    'Proteção UV 99% — piso e brinquedos mais frescos',
                    'Projetos para escolas, condomínios e áreas residenciais',
                    'Automação opcional (Alexa, controle remoto)',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <CoberturaPlaygroundExpandedSections />

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura para Playground?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Playgrounds descobertos ficam inutilizáveis na chuva e perigosos no sol forte.
                Uma <strong>cobertura para playground</strong> transforma a área em espaço seguro
                365 dias por ano. Para <strong>cobertura para escolas</strong>, entregamos ART e
                documentação completa. Para <strong>cobertura para condomínios</strong>, memorial
                descritivo para assembleia.
              </p>
            </div>
          </section>

          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="playground" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura segura para playground — escolas e condomínios</p>
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
