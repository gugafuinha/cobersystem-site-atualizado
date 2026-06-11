import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/campinas`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Campinas | Barão Geraldo, Alphaville | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha em Campinas. Polo tecnológico de SP. Alphaville Campinas, Barão Geraldo, Cambuí. Visita técnica gratuita. Orçamento em 24 h.',
  keywords:
    'cobertura Campinas, cobertura retrátil Campinas, cobertura Alphaville Campinas, cobertura Barão Geraldo, cobertura interior SP',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS = [
  { segment: 'cobertura-retratil', label: 'Cobertura Retrátil', desc: 'Sistema abre e fecha com automação Alexa e sensor de chuva' },
  { segment: 'cobertura-abre-e-fecha', label: 'Cobertura Abre e Fecha', desc: 'Abertura graduada com motor silencioso' },
  { segment: 'cobertura-policarbonato', label: 'Cobertura em Policarbonato', desc: 'Cobertura fixa compacto ou alveolar com proteção UV' },
  { segment: 'cobertura-termoacustica', label: 'Cobertura Termoacústica', desc: 'Painel sanduíche com isolamento térmico e acústico' },
];

const FAQS = [
  {
    q: 'Vocês fazem instalação em Campinas?',
    a: 'Sim! A Cobersystem atende Campinas e região. Campinas é o maior polo tecnológico e universitário do interior de SP. Nossa equipe realiza medição gratuita no local e entrega o orçamento em até 24 horas.',
  },
  {
    q: 'Atendem Barão Geraldo e Alphaville Campinas?',
    a: 'Sim! Atendemos Barão Geraldo — bairro universitário com alta demanda por coberturas modernas — e Alphaville Campinas, com projetos em residências de alto padrão. Toda Campinas é atendida.',
  },
  {
    q: 'Qual o prazo de instalação em Campinas?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m². Nossa equipe em Campinas agenda o início em até 10 dias após aprovação do projeto. Garantia de 2 anos.',
  },
  {
    q: 'Quanto custa cobertura retrátil em Campinas?',
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
  geo: { '@type': 'GeoCoordinates', latitude: -22.9056, longitude: -47.0608 },
  areaServed: { '@type': 'City', name: 'Campinas', addressRegion: 'SP', addressCountry: 'BR' },
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Campinas', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function CampinasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Campinas', href: '/localizacao/campinas' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil em Campinas
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende Campinas — maior polo tecnológico e universitário do interior de
          São Paulo. Coberturas retráteis em policarbonato com automação via Alexa, sensor de
          chuva e garantia de 2 anos. Atendemos Alphaville Campinas, Barão Geraldo, Cambuí e
          toda a cidade.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Bairros atendidos em Campinas</h2>
          <p className="mb-6 text-gray-600">
            Campinas tem forte crescimento imobiliário de alto padrão impulsionado pelo polo
            tecnológico e pelas universidades. Nossa equipe atende projetos em toda a cidade.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { bairro: 'Alphaville Campinas', desc: 'Condomínio fechado de altíssimo padrão — coberturas retráteis automatizadas para áreas de lazer e piscinas.' },
              { bairro: 'Barão Geraldo', desc: 'Bairro universitário e residencial com crescente demanda por coberturas modernas para casas e sobrados.' },
              { bairro: 'Cambuí e Campolim', desc: 'Bairros nobres com projetos de coberturas para área gourmet e pergolados bioclimáticos.' },
              { bairro: 'Toda Campinas', desc: 'Atendemos todos os bairros de Campinas. Solicite confirmação e agendamento pelo WhatsApp.' },
            ].map(({ bairro, desc }) => (
              <div key={bairro} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-1 font-semibold text-gray-800">{bairro}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Produtos disponíveis em Campinas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS.map(({ segment, label, desc }) => (
              <Link key={segment} href={`/produtos/${segment}/em/campinas`}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md">
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Perguntas frequentes — Campinas</h2>
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento em Campinas</h2>
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
