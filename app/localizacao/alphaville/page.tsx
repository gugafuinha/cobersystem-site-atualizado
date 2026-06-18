import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer, getPolicarbonatoFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/alphaville`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Alphaville | Condomínios e Alto Padrão | Cobersystem',
  description:
    'Cobertura retrátil e policarbonato para condomínios e residências de alto padrão em Alphaville — Barueri e Santana de Parnaíba. Visita técnica gratuita. Orçamento em 24h.',
  keywords:
    'cobertura Alphaville, cobertura retrátil Alphaville, cobertura piscina Alphaville, cobertura área gourmet Alphaville, cobertura condomínio Alphaville',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS = [
  { slug: 'cobertura-retratil', label: 'Cobertura Retrátil', desc: 'Abre e fecha com automação Alexa e sensor de chuva — ideal para área gourmet premium', link: '/produtos/cobertura-retratil/em/barueri' },
  { slug: 'cobertura-abre-e-fecha', label: 'Cobertura Abre e Fecha', desc: 'Sistema retrátil manual ou motorizado para varandas e pergolados', link: '/produtos/cobertura-abre-e-fecha/em/barueri' },
  { slug: 'cobertura-piscina', label: 'Cobertura para Piscina', desc: 'Cobertura retrátil ou fixa sobre piscinas — proteção, aquecimento e segurança', link: '/servicos/cobertura-piscina' },
  { slug: 'cobertura-policarbonato', label: 'Cobertura em Policarbonato', desc: 'Cobertura fixa alveolar ou compacto com proteção UV — garagens e corredores', link: '/produtos/cobertura-policarbonato/em/barueri' },
];

const FAQS = [
  {
    q: 'A Cobersystem atende em Alphaville (Barueri/Santana de Parnaíba)?',
    a: 'Sim! A Cobersystem atende toda a região de Alphaville — incluindo os condomínios de Barueri e Santana de Parnaíba. Nossa equipe realiza visita técnica gratuita no local e entrega o orçamento em até 24 horas.',
  },
  {
    q: 'Quais produtos são mais usados em condomínios de Alphaville?',
    a: 'Em Alphaville, os projetos mais frequentes são cobertura retrátil para área gourmet e churrasqueira (com automação Alexa e sensor de chuva), cobertura para piscina retrátil ou fixa, e cobertura de policarbonato para garagem coberta. Todos os projetos são customizados para o padrão dos condomínios fechados da região.',
  },
  {
    q: 'Quanto custa cobertura retrátil em Alphaville?',
    a: getRetratilFaqPriceAnswer(),
  },
  {
    q: 'A Cobersystem instala em condomínios fechados de Alphaville?',
    a: 'Sim. Nossa equipe está habituada a trabalhar em condomínios fechados de alto padrão como os de Alphaville. Coordenamos o acesso com a portaria, cumprimos as normas do condomínio e entregamos o projeto limpo e no prazo combinado.',
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
  geo: { '@type': 'GeoCoordinates', latitude: -23.5027, longitude: -46.8503 },
  areaServed: [
    { '@type': 'City', name: 'Barueri', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'Santana de Parnaíba', addressRegion: 'SP', addressCountry: 'BR' },
  ],
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Alphaville', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function AlphavillePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Alphaville', href: '/localizacao/alphaville' },
        ]} />

        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil em Alphaville
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende toda a região de <strong>Alphaville — Barueri e Santana de Parnaíba</strong>.
          Instalamos coberturas retráteis, fixas em policarbonato e coberturas para piscina em condomínios
          fechados, casas de alto padrão e residências com piscina, área gourmet e pergolado.
          Visita técnica gratuita e orçamento em até 24 horas.
        </p>

        {/* Perfil do cliente Alphaville */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Por que Alphaville é uma das nossas regiões mais ativas
          </h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Alphaville reúne alguns dos condomínios fechados mais valorizados do Brasil — Alphaville 1 a 13,
            Tamboré, Residencial e Empresarial. As residências de alto padrão da região têm áreas externas
            amplas: piscina, área gourmet, pergolado e jardim. Por isso, a demanda por coberturas é constante
            e o padrão de acabamento exige materiais premium.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nossa equipe instala coberturas retráteis em policarbonato com automação Alexa, coberturas para
            piscina de alto padrão e coberturas fixas — tudo dentro das normas dos condomínios fechados,
            com apresentação de ART (Anotação de Responsabilidade Técnica) quando solicitada.
          </p>
        </section>

        {/* Produtos */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos disponíveis em Alphaville
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS.map(({ label, desc, link }) => (
              <Link
                key={label}
                href={link}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md"
              >
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Links para páginas de bairro SP próximas */}
        <section className="mb-12 rounded-lg bg-blue-50 border border-blue-200 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Bairros nobres próximos a Alphaville</h2>
          <p className="text-gray-600 text-sm mb-4">
            Também atendemos residências de alto padrão nos bairros de São Paulo mais próximos da região:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/produtos/cobertura-retratil/em/sao-paulo/morumbi', label: 'Morumbi' },
              { href: '/produtos/cobertura-piscina/em/sao-paulo/morumbi', label: 'Cobertura Piscina Morumbi' },
              { href: '/produtos/cobertura-retratil/em/barueri', label: 'Barueri' },
              { href: '/localizacao/guarulhos', label: 'Guarulhos' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full bg-white border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — Alphaville
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

        {/* CTA */}
        <section className="rounded-lg bg-[#D4AF37] p-12 text-center text-black">
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento em Alphaville</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita e orçamento em até 24 h</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/orcamento" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">
              Solicitar Orçamento
            </Link>
            <Link href="https://wa.me/5511943615079?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20Alphaville." target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
              WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
