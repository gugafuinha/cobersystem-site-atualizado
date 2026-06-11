import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/sao-bernardo`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil São Bernardo do Campo | Rudge Ramos, Assunção | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha em São Bernardo do Campo — polo industrial do ABC. Rudge Ramos, Assunção, Nova Petrópolis. Visita técnica gratuita. Orçamento em 24 h.',
  keywords:
    'cobertura São Bernardo do Campo, cobertura retrátil São Bernardo, cobertura Rudge Ramos, cobertura Assunção, cobertura ABC Paulista',
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
    q: 'Vocês atendem São Bernardo do Campo?',
    a: 'Sim! A Cobersystem atende toda São Bernardo do Campo — maior cidade do ABC Paulista e importante polo industrial do Estado de SP. Visita técnica gratuita e orçamento em até 24 horas.',
  },
  {
    q: 'Fazem instalação em Rudge Ramos e Assunção?',
    a: 'Sim! Rudge Ramos e Assunção são bairros nobres de São Bernardo com alta demanda por coberturas de alto padrão. Atendemos estes e todos os bairros da cidade.',
  },
  {
    q: 'Qual o prazo de instalação em São Bernardo?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m², sem obras ou quebra de paredes. Nossa equipe agenda o início em até 7 dias após a aprovação do projeto. Garantia de 2 anos.',
  },
  {
    q: 'Quanto custa cobertura retrátil em São Bernardo do Campo?',
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
  geo: { '@type': 'GeoCoordinates', latitude: -23.6939, longitude: -46.5650 },
  areaServed: { '@type': 'City', name: 'São Bernardo do Campo', addressRegion: 'SP', addressCountry: 'BR' },
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'São Bernardo', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function SaoBernardoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'São Bernardo', href: '/localizacao/sao-bernardo' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil em São Bernardo do Campo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende toda São Bernardo do Campo — o maior município do ABC Paulista e
          principal polo industrial do Estado de São Paulo. Coberturas retráteis em policarbonato
          com automação via Alexa, sensor de chuva e garantia de 2 anos. Atendemos Rudge Ramos,
          Assunção, Nova Petrópolis e toda a cidade.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Bairros atendidos em São Bernardo do Campo
          </h2>
          <p className="mb-6 text-gray-600">
            São Bernardo combina forte tradição industrial com bairros residenciais de alto padrão.
            Nossa equipe atende projetos em condomínios, casas e sobrados em toda a cidade.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { bairro: 'Rudge Ramos', desc: 'Bairro nobre e residencial de alto padrão com forte demanda por coberturas automatizadas.' },
              { bairro: 'Assunção', desc: 'Região residencial consolidada com projetos em cobertura retrátil para piscina e área gourmet.' },
              { bairro: 'Nova Petrópolis', desc: 'Bairro com alta concentração de condomínios e sobrados — coberturas fixas e retráteis.' },
              { bairro: 'Toda São Bernardo', desc: 'Atendemos todos os bairros da cidade. Confirme seu endereço pelo WhatsApp.' },
            ].map(({ bairro, desc }) => (
              <div key={bairro} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-1 font-semibold text-gray-800">{bairro}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/localizacao/abc" className="text-sm font-semibold text-blue-600 hover:underline">
              Ver hub ABC Paulista (Santo André + São Bernardo + São Caetano) →
            </Link>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos disponíveis em São Bernardo do Campo
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS.map(({ segment, label, desc }) => (
              <Link key={segment} href={`/produtos/${segment}/em/sao-bernardo-do-campo`}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md">
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — São Bernardo do Campo
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento em São Bernardo</h2>
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
