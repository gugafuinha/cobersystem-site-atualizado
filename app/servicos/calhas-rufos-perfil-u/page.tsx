import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import CoberturaPlaygroundExpandedSections from './CoberturaPlaygroundExpandedSections';

const HERO_IMAGE = '/images/projetos/Cobertura Playground.png';

export const metadata: Metadata = {
  title: 'Cobertura para Playground | Abre e Fecha e Retrátil | Escolas e Condomínios | Cobersystem SP',
  description:
    'Cobertura para playground em policarbonato: abre e fecha, retrátil automatizada e fixa. Proteção UV, sensor de chuva. Projetos para escolas e condomínios em SP. Orçamento grátis.',
  keywords:
    'cobertura para playground, cobertura abre e fecha, cobertura retrátil, cobertura para escolas, cobertura para condomínios, cobertura playground policarbonato, cobertura área de lazer',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/calhas-rufos-perfil-u',
  },
  openGraph: {
    title: 'Cobertura para Playground | Abre e Fecha | Cobersystem SP',
    description:
      'Cobertura para playground com sistema abre e fecha e retrátil automatizada. Proteção UV, sensor de chuva. Projetos para escolas e condomínios.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/calhas-rufos-perfil-u',
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
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/calhas-rufos-perfil-u',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para playground?',
    answer:
      'O preço de uma cobertura para playground varia conforme tamanho, tipo (fixa, abre e fecha ou retrátil automatizada) e complexidade do projeto. Em média, coberturas fixas ficam entre R$ 350 e R$ 600/m²; abre e fecha entre R$ 800 e R$ 1.400/m²; e retrátil automatizada entre R$ 1.200 e R$ 1.800/m². Solicite orçamento personalizado com visita técnica gratuita.',
  },
  {
    question: 'Qual cobertura é melhor para playground de escola?',
    answer:
      'Para escolas, recomendamos cobertura abre e fecha ou retrátil automatizada com sensor de chuva. O sistema fecha automaticamente na chuva, protegendo crianças e brinquedos. O policarbonato com proteção UV é essencial para uso diário prolongado. Projetos incluem ART de engenheiro e documentação para licitações.',
  },
  {
    question: 'A cobertura retrátil funciona em condomínios?',
    answer:
      'Sim! A cobertura retrátil é ideal para condomínios: abre para brincadeiras ao sol e fecha na chuva automaticamente. Integração com Alexa e controle remoto disponível. Elaboramos memorial descritivo para aprovação em assembleia e projetos que respeitam a estética da área comum.',
  },
  {
    question: 'A cobertura protege contra raios UV no playground?',
    answer:
      'Sim! Nossas coberturas em policarbonato possuem proteção UV de 99%, bloqueando raios prejudiciais e reduzindo a temperatura do piso e brinquedos em até 40%. Isso permite uso seguro do playground mesmo nos horários de maior incidência solar.',
  },
  {
    question: 'Qual a diferença entre cobertura abre e fecha e retrátil para playground?',
    answer:
      'Ambas permitem abrir e fechar, mas a retrátil automatizada inclui motor, sensor de chuva e controle remoto/Alexa como padrão. A abre e fecha pode ser manual ou motorizada conforme o projeto. Para escolas e condomínios com alto fluxo, a automatizada oferece mais praticidade e segurança operacional.',
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
              { label: 'Cobertura para Playground', href: '/servicos/calhas-rufos-perfil-u' },
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
                  Projetos para escolas e condomínios.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Cobertura abre e fecha com abertura de 0 a 90 graus</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Cobertura retrátil com automação e sensor de chuva</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Proteção UV 99% — piso e brinquedos mais frescos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Projetos para escolas, condomínios e áreas residenciais</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Automação opcional (Alexa, controle remoto, sensor de chuva)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <CoberturaPlaygroundExpandedSections />

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Por que Cobertura para Playground?
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Playgrounds descobertos ficam inutilizáveis em dias de chuva e perigosos no sol
                forte. Uma <strong>cobertura para playground</strong> transforma a área em espaço
                seguro e confortável 365 dias por ano. Com <strong>cobertura abre e fecha</strong>,
                você controla sol e ventilação; com <strong>cobertura retrátil</strong> automatizada,
                o sistema fecha sozinho na chuva.
              </p>
              <p className="mb-4">
                Para <strong>cobertura para escolas</strong>, entregamos projetos com ART, normas de
                segurança e materiais certificados. Para <strong>cobertura para condomínios</strong>,
                elaboramos documentação para assembleia e acabamentos que integram à área comum.
              </p>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="retratil-automatizada" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">
              Cobertura segura para seu playground — escolas e condomínios
            </p>
            <Link
              href="/contato"
              className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
            >
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
