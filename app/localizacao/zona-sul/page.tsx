import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/zona-sul`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Zona Sul SP | Moema, Vila Mariana, Brooklin | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha na Zona Sul de São Paulo. Moema, Vila Mariana, Brooklin, Vila Olímpia, Campo Belo, Jabaquara. Visita gratuita. Orçamento em 24 h.',
  keywords:
    'cobertura zona sul SP, cobertura Moema, cobertura Vila Mariana, cobertura Brooklin, cobertura Vila Olímpia, cobertura Campo Belo',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS_SP = [
  { segment: 'cobertura-retratil', label: 'Cobertura Retrátil', desc: 'Sistema abre e fecha com automação Alexa e sensor de chuva' },
  { segment: 'cobertura-abre-e-fecha', label: 'Cobertura Abre e Fecha', desc: 'Abertura graduada com motor silencioso' },
  { segment: 'cobertura-policarbonato', label: 'Cobertura em Policarbonato', desc: 'Cobertura fixa compacto ou alveolar com proteção UV' },
  { segment: 'cobertura-termoacustica', label: 'Cobertura Termoacústica', desc: 'Painel sanduíche com isolamento térmico e acústico' },
];

const BAIRROS_LINKS = [
  { slug: 'moema', nome: 'Moema' },
  { slug: 'vila-mariana', nome: 'Vila Mariana' },
  { slug: 'brooklin', nome: 'Brooklin' },
];

const FAQS = [
  {
    q: 'Atendem Moema, Vila Mariana e Brooklin?',
    a: 'Sim! A Cobersystem tem projetos realizados em Moema, Vila Mariana, Brooklin, Vila Olímpia e Campo Belo. Para Moema, Vila Mariana e Brooklin, temos páginas específicas com preços e FAQ da região.',
  },
  {
    q: 'Fazem instalação de cobertura para piscina na Zona Sul?',
    a: 'Sim! Moema e Vila Mariana têm alta demanda por coberturas para piscina e área gourmet. Instalamos sistemas retráteis automatizados com sensor de chuva e integração Alexa, com garantia de 2 anos.',
  },
  {
    q: 'Qual o prazo de instalação na Zona Sul?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m², sem obras ou quebra de paredes. Nossa equipe na Zona Sul agenda o início em até 7 dias após aprovação.',
  },
  {
    q: 'Quanto custa cobertura retrátil na Zona Sul?',
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
  areaServed: { '@type': 'AdministrativeArea', name: 'Zona Sul de São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Zona Sul', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function ZonaSulPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Zona Sul', href: '/localizacao/zona-sul' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil na Zona Sul de São Paulo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende Moema, Vila Mariana, Brooklin, Vila Olímpia, Campo Belo, Jabaquara
          e toda a Zona Sul de São Paulo. Alta concentração de coberturas para piscinas e áreas
          gourmet em condomínios nobres da região. Visita técnica gratuita.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Bairros atendidos na Zona Sul</h2>
          <p className="mb-6 text-gray-600">
            A Zona Sul concentra bairros nobres com alto padrão arquitetônico. Nossa equipe atende
            residências, coberturas de apartamentos e condomínios de alto padrão.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { bairro: 'Moema', desc: 'Alto padrão — coberturas para piscina, área gourmet e terraço com automação completa.' },
              { bairro: 'Vila Mariana', desc: 'Bairro residencial com demanda por coberturas para varandas e áreas externas.' },
              { bairro: 'Brooklin', desc: 'Mix corporativo e residencial — coberturas retráteis para áreas de lazer e condomínios.' },
              { bairro: 'Vila Olímpia e Campo Belo', desc: 'Região com forte crescimento de projetos em cobertura retrátil e abre e fecha.' },
            ].map(({ bairro, desc }) => (
              <div key={bairro} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-1 font-semibold text-gray-800">{bairro}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
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
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Produtos disponíveis na Zona Sul</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS_SP.map(({ segment, label, desc }) => (
              <Link key={segment} href={`/produtos/${segment}/em/sao-paulo`}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md">
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Perguntas frequentes — Zona Sul</h2>
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento na Zona Sul</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita e orçamento em até 24 h</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/orcamento" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">Solicitar Orçamento</Link>
            <Link href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">WhatsApp</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
