import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/sorocaba`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Sorocaba | Campolim, Wanel Ville | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha em Sorocaba. Polo industrial em expansão. Campolim, Wanel Ville, Vila Hortência. Visita técnica gratuita. Orçamento em 24 h.',
  keywords:
    'cobertura Sorocaba, cobertura retrátil Sorocaba, cobertura Campolim, cobertura Wanel Ville, cobertura interior SP Sorocaba',
  alternates: { canonical: PAGE_URL },
};

// Sorocaba não possui product pages dedicadas (/em/sorocaba) — links apontam para o serviço geral
const PRODUTOS = [
  { href: '/servicos/cobertura-retratil', label: 'Cobertura Retrátil', desc: 'Sistema abre e fecha com automação Alexa e sensor de chuva' },
  { href: '/servicos/cobertura-abre-e-fecha', label: 'Cobertura Abre e Fecha', desc: 'Abertura graduada com motor silencioso' },
  { href: '/servicos/cobertura-policarbonato', label: 'Cobertura em Policarbonato', desc: 'Cobertura fixa compacto ou alveolar com proteção UV' },
  { href: '/servicos/cobertura-termoacustica', label: 'Cobertura Termoacústica', desc: 'Painel sanduíche com isolamento térmico e acústico' },
];

const FAQS = [
  {
    q: 'Vocês atendem em Sorocaba?',
    a: 'Sim! A Cobersystem atende Sorocaba — uma das cidades com maior expansão industrial e imobiliária do Estado de SP. Solicite orçamento pelo WhatsApp e nossa equipe confirma disponibilidade e agenda a visita técnica gratuita.',
  },
  {
    q: 'Quais bairros de Sorocaba são atendidos?',
    a: 'Atendemos Campolim, Wanel Ville, Vila Hortência, Jardim Vera Cruz e demais bairros de Sorocaba. Campolim e Wanel Ville têm projetos de condomínios fechados de alto padrão com alta demanda por coberturas automatizadas.',
  },
  {
    q: 'Fazem visita técnica gratuita em Sorocaba?',
    a: 'Sim! A visita técnica é gratuita em Sorocaba. Nossa equipe vai ao local, faz as medições e apresenta o projeto com orçamento detalhado. O agendamento é feito em até 48 horas após o contato.',
  },
  {
    q: 'Quanto custa cobertura retrátil em Sorocaba?',
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
  geo: { '@type': 'GeoCoordinates', latitude: -23.5015, longitude: -47.4526 },
  areaServed: { '@type': 'City', name: 'Sorocaba', addressRegion: 'SP', addressCountry: 'BR' },
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'Sorocaba', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function SorocabaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Sorocaba', href: '/localizacao/sorocaba' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil em Sorocaba
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende Sorocaba — uma das cidades com maior expansão industrial e
          imobiliária do Estado de São Paulo. Coberturas retráteis em policarbonato com
          automação via Alexa, sensor de chuva e garantia de 2 anos. Atendemos Campolim,
          Wanel Ville, Vila Hortência e toda a cidade.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Bairros atendidos em Sorocaba</h2>
          <p className="mb-6 text-gray-600">
            Sorocaba vive um forte crescimento em loteamentos e condomínios fechados de médio
            e alto padrão, com crescente demanda por coberturas modernas e automatizadas.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { bairro: 'Campolim', desc: 'Bairro nobre com condomínios fechados de alto padrão — alta demanda por coberturas automatizadas para áreas de lazer.' },
              { bairro: 'Wanel Ville', desc: 'Loteamento residencial em expansão com forte procura por coberturas retráteis e pergolados.' },
              { bairro: 'Vila Hortência', desc: 'Bairro tradicional com casas e sobrados — coberturas fixas e retráteis sob medida.' },
              { bairro: 'Toda Sorocaba', desc: 'Nossa equipe atende qualquer bairro de Sorocaba. Confirme disponibilidade pelo WhatsApp.' },
            ].map(({ bairro, desc }) => (
              <div key={bairro} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-1 font-semibold text-gray-800">{bairro}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Coberturas disponíveis em Sorocaba</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUTOS.map(({ href, label, desc }) => (
              <Link key={href} href={href}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md">
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Todos os projetos em Sorocaba são feitos sob medida. Entre em contato para confirmar disponibilidade e agenda.
          </p>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Perguntas frequentes — Sorocaba</h2>
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento em Sorocaba</h2>
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
