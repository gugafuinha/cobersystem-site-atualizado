import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer, getPolicarbonatoFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/jardins`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Jardins SP | Casas de Alto Padrão | Cobersystem',
  description:
    'Cobertura retrátil e policarbonato para casas de alto padrão nos Jardins — Jardim Paulista, Jardim Europa, Jardim América e Jardim Paulistano. Visita técnica gratuita em SP.',
  keywords:
    'cobertura Jardins SP, cobertura retrátil Jardins, cobertura Jardim Paulista, cobertura Jardim Europa, cobertura varanda Jardins, cobertura piscina Jardins',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS_BAIRRO = [
  { label: 'Cobertura Retrátil nos Jardins', href: '/produtos/cobertura-retratil/em/sao-paulo/jardins' },
  { label: 'Cobertura Abre e Fecha nos Jardins', href: '/produtos/cobertura-abre-e-fecha/em/sao-paulo/jardins' },
  { label: 'Cobertura em Policarbonato nos Jardins', href: '/produtos/cobertura-policarbonato/em/sao-paulo/jardins' },
  { label: 'Cobertura Termoacústica nos Jardins', href: '/produtos/cobertura-termoacustica/em/sao-paulo/jardins' },
  { label: 'Cobertura para Pergolado nos Jardins', href: '/produtos/cobertura-pergolado/em/sao-paulo/jardins' },
  { label: 'Cobertura para Piscina nos Jardins', href: '/produtos/cobertura-piscina/em/sao-paulo/jardins' },
];

const FAQS = [
  {
    q: 'A Cobersystem atende nos Jardins (Jardim Paulista, Jardim Europa, Jardim América)?',
    a: 'Sim! Atendemos toda a região dos Jardins em São Paulo — Jardim Paulista, Jardim Europa, Jardim América, Jardim Paulistano, Jardim Paulistano e bairros vizinhos como Itaim Bibi e Pinheiros. Visita técnica gratuita e orçamento em até 24 horas.',
  },
  {
    q: 'Quais projetos são mais frequentes nos Jardins?',
    a: 'Nos Jardins, a maioria dos projetos envolve casas de alto padrão com varanda, jardim de inverno e área gourmet. Os produtos mais instalados são cobertura retrátil abre e fecha para varanda e área gourmet, cobertura de jardim de inverno em policarbonato compacto cristal e cobertura retrátil automatizada com Alexa para casas com pergolado.',
  },
  {
    q: 'Quanto custa cobertura retrátil nos Jardins?',
    a: getRetratilFaqPriceAnswer(),
  },
  {
    q: 'Qual a melhor cobertura para jardim de inverno nos Jardins?',
    a: `Policarbonato compacto cristal oferece transparência de até 90% — visual elegante para jardins de inverno nos Jardins SP. ${getPolicarbonatoFaqPriceAnswer()}. Para quem deseja vidro ou espaço mais sofisticado, também realizamos projetos premium com estrutura de alumínio anodizado.`,
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
  geo: { '@type': 'GeoCoordinates', latitude: -23.5727, longitude: -46.6680 },
  areaServed: [
    { '@type': 'City', name: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  ],
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Jardins SP', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function JardinsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Jardins SP', href: '/localizacao/jardins' },
        ]} />

        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil nos Jardins — São Paulo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem instala coberturas retráteis e em policarbonato em casas e apartamentos de alto
          padrão nos Jardins — <strong>Jardim Paulista, Jardim Europa, Jardim América e Jardim Paulistano</strong>.
          Projetos sob medida para varandas, jardins de inverno, áreas gourmet e espaços com pergolado.
          Visita técnica gratuita com orçamento em até 24 horas.
        </p>

        {/* Sobre a região */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Coberturas para as casas dos Jardins
          </h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Os Jardins formam um dos bairros mais nobres de São Paulo — casas amplas com jardim, varanda e
            espaço gourmet. A maioria dos projetos que instalamos na região envolve varandas cobertas
            para integrar o interior da casa ao jardim, mantendo proteção contra chuva e sol.
          </p>
          <p className="text-gray-600 leading-relaxed">
            O policarbonato compacto cristal e o sistema retrátil abre e fecha são os mais escolhidos
            nos Jardins: permitem manter a luminosidade natural da área externa sem abrir mão do conforto
            em qualquer clima.
          </p>
        </section>

        {/* Produtos com links de bairro */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos disponíveis nos Jardins
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS_BAIRRO.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md"
              >
                <span className="text-[#D4AF37]">→</span>
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — Jardins SP
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento nos Jardins</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita — orçamento em até 24 h</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/orcamento" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">
              Solicitar Orçamento
            </Link>
            <Link href="https://wa.me/5511943615079?text=Ol%C3%A1!%20Quero%20or%C3%A7amento%20para%20os%20Jardins%20SP." target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
              WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
