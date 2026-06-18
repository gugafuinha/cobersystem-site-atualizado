import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/zona-leste`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Zona Leste SP | Tatuapé, Mooca, Penha | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha na Zona Leste de São Paulo. Tatuapé, Mooca, Vila Prudente, Penha, Itaquera. Visita técnica gratuita. Orçamento em 24 h.',
  keywords:
    'cobertura zona leste SP, cobertura Tatuapé, cobertura Mooca, cobertura Vila Prudente, cobertura Penha, cobertura Itaquera',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS_SP = [
  { segment: 'cobertura-retratil', label: 'Cobertura Retrátil', desc: 'Sistema abre e fecha com automação Alexa e sensor de chuva' },
  { segment: 'cobertura-abre-e-fecha', label: 'Cobertura Abre e Fecha', desc: 'Abertura graduada com motor silencioso' },
  { segment: 'cobertura-policarbonato', label: 'Cobertura em Policarbonato', desc: 'Cobertura fixa compacto ou alveolar com proteção UV' },
  { segment: 'cobertura-termoacustica', label: 'Cobertura Termoacústica', desc: 'Painel sanduíche com isolamento térmico e acústico' },
];

const BAIRROS_LINKS = [
  { slug: 'tatuape', nome: 'Tatuapé' },
  { slug: 'mooca', nome: 'Mooca' },
];

const FAQS = [
  {
    q: 'Vocês atendem na Zona Leste de São Paulo?',
    a: 'Sim! A Cobersystem atende toda a Zona Leste de SP, incluindo Tatuapé, Mooca, Vila Prudente, Penha, Itaquera e toda a região. Nossa equipe realiza medição gratuita no local e entrega o orçamento em até 24 horas.',
  },
  {
    q: 'Quais bairros da Zona Leste são atendidos?',
    a: 'Atendemos Tatuapé, Mooca, Vila Prudente, Penha, Itaquera, Belém, Brás e toda a Zona Leste. Para Tatuapé e Mooca, temos páginas específicas com preços, FAQ e projetos da região.',
  },
  {
    q: 'Qual o prazo de instalação na Zona Leste?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m², sem necessidade de obras. Nossa equipe na Zona Leste agenda o início em até 7 dias após aprovação do projeto.',
  },
  {
    q: 'Quanto custa cobertura retrátil na Zona Leste?',
    a: getRetratilFaqPriceAnswer(),
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#business`,
  name: 'Cobersystem',
  url: BASE,
  telephone: '+55-11-94361-5079',
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Zona Leste de São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Zona Leste', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function ZonaLestePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Zona Leste', href: '/localizacao/zona-leste' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil na Zona Leste de São Paulo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende toda a Zona Leste de São Paulo — Tatuapé, Mooca, Vila Prudente,
          Penha, Itaquera e toda a região. Coberturas retráteis em policarbonato com automação
          via Alexa, sensor de chuva e garantia de 2 anos. Visita técnica gratuita.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Bairros atendidos na Zona Leste</h2>
          <p className="mb-6 text-gray-600">
            A Zona Leste concentra bairros com alto crescimento residencial. Atendemos projetos
            em condomínios, casas e sobrados em toda a região.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { bairro: 'Tatuapé', desc: 'Bairro nobre da Zona Leste com alta demanda por coberturas para áreas gourmet e piscinas.' },
              { bairro: 'Mooca', desc: 'Tradicional bairro com mix de residências e sobrados — coberturas retráteis e fixas.' },
              { bairro: 'Vila Prudente', desc: 'Atendemos toda Vila Prudente com coberturas com automação via Alexa.' },
              { bairro: 'Penha e Itaquera', desc: 'Cobertura retrátil e policarbonato para residências e condomínios em toda a região leste.' },
            ].map(({ bairro, desc }) => (
              <div key={bairro} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-1 font-semibold text-gray-800">{bairro}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          {BAIRROS_LINKS.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 font-semibold text-gray-700">Páginas específicas por bairro:</p>
              <div className="flex flex-wrap gap-3">
                {BAIRROS_LINKS.map(({ slug, nome }) => (
                  <Link
                    key={slug}
                    href={`/produtos/cobertura-retratil/em/sao-paulo/${slug}`}
                    className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Cobertura Retrátil — {nome}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos disponíveis na Zona Leste
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS_SP.map(({ segment, label, desc }) => (
              <Link
                key={segment}
                href={`/produtos/${segment}/em/sao-paulo`}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md"
              >
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — Zona Leste
          </h2>
          <div className="divide-y divide-gray-200 rounded-lg border border-blue-200">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group px-6 py-4">
                <summary className="cursor-pointer list-none font-semibold text-gray-800">{q}</summary>
                <p className="mt-3 leading-relaxed text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-[#D4AF37] p-12 text-center text-black">
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento na Zona Leste</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita e orçamento em até 24 h</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/orcamento" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">
              Solicitar Orçamento
            </Link>
            <Link href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
              WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
