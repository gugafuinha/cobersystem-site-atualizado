import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/zona-norte`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Zona Norte SP | Santana, Tucuruvi, Vila Guilherme | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha na Zona Norte de São Paulo. Santana, Tucuruvi, Vila Guilherme, Casa Verde. Visita técnica gratuita. Orçamento em 24 h.',
  keywords:
    'cobertura zona norte SP, cobertura Santana, cobertura Tucuruvi, cobertura Vila Guilherme, cobertura Casa Verde SP',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS_SP = [
  { segment: 'cobertura-retratil', label: 'Cobertura Retrátil', desc: 'Sistema abre e fecha com automação Alexa e sensor de chuva' },
  { segment: 'cobertura-abre-e-fecha', label: 'Cobertura Abre e Fecha', desc: 'Abertura graduada com motor silencioso' },
  { segment: 'cobertura-policarbonato', label: 'Cobertura em Policarbonato', desc: 'Cobertura fixa compacto ou alveolar com proteção UV' },
  { segment: 'cobertura-termoacustica', label: 'Cobertura Termoacústica', desc: 'Painel sanduíche com isolamento térmico e acústico' },
];

const FAQS = [
  {
    q: 'Atendem Santana, Tucuruvi e Vila Guilherme?',
    a: 'Sim! A Cobersystem atende toda a Zona Norte de SP — Santana, Tucuruvi, Vila Guilherme, Casa Verde, Jaçanã e toda a região. Visita técnica gratuita e orçamento em até 24 horas.',
  },
  {
    q: 'Fazem visita técnica gratuita na Zona Norte?',
    a: 'Sim! A visita técnica é totalmente gratuita em toda a Zona Norte. Nossa equipe vai ao local, faz as medições e apresenta o projeto com orçamento detalhado — sem compromisso.',
  },
  {
    q: 'Qual o prazo de instalação na Zona Norte?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m². Não é necessário quebrar paredes ou fazer grandes obras. Garantia de 2 anos para estrutura e sistema.',
  },
  {
    q: 'Quanto custa cobertura abre e fecha na Zona Norte?',
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
  areaServed: { '@type': 'AdministrativeArea', name: 'Zona Norte de São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Zona Norte', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function ZonaNortePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Zona Norte', href: '/localizacao/zona-norte' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil na Zona Norte de São Paulo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende Santana, Tucuruvi, Vila Guilherme, Casa Verde, Jaçanã e toda a
          Zona Norte de São Paulo. Coberturas retráteis em policarbonato com automação via Alexa
          e sensor de chuva. Visita técnica gratuita.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Bairros atendidos na Zona Norte</h2>
          <p className="mb-6 text-gray-600">
            A Zona Norte tem mix de bairros tradicionais e residenciais com crescente demanda por
            coberturas modernas para áreas externas e garagens.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { bairro: 'Santana', desc: 'Bairro tradicional com alta demanda por coberturas retráteis para varandas e áreas gourmet.' },
              { bairro: 'Tucuruvi', desc: 'Coberturas fixas e retráteis para residências e condomínios em toda a região.' },
              { bairro: 'Vila Guilherme', desc: 'Cobertura para garagem e área de lazer com automação via Alexa.' },
              { bairro: 'Casa Verde e Jaçanã', desc: 'Atendemos toda a extensão da Zona Norte com projetos sob medida.' },
            ].map(({ bairro, desc }) => (
              <div key={bairro} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-1 font-semibold text-gray-800">{bairro}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Produtos disponíveis na Zona Norte</h2>
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
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Perguntas frequentes — Zona Norte</h2>
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento na Zona Norte</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita e orçamento em até 24 h</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contato" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">Solicitar Orçamento</Link>
            <Link href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">WhatsApp</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
