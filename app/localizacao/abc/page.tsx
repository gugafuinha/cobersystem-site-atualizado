import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/abc`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil ABC Paulista | Santo André, São Bernardo, São Caetano | Cobersystem',
  description:
    'Cobertura retrátil e abre e fecha no ABC Paulista. Santo André, São Bernardo do Campo, São Caetano do Sul. Visita técnica gratuita em todas as cidades do ABC. Orçamento em 24 h.',
  keywords:
    'cobertura ABC Paulista, cobertura Santo André, cobertura São Bernardo, cobertura São Caetano, cobertura ABC SP',
  alternates: { canonical: PAGE_URL },
};

const CIDADES_ABC = [
  {
    nome: 'Santo André',
    slug: 'santo-andre',
    desc: 'Principal cidade do ABC, com forte crescimento residencial de alto padrão. Bairros nobres como Vila Bastos e Campestre.',
    produtos: [
      { segment: 'cobertura-retratil', slug: 'santo-andre' },
      { segment: 'cobertura-policarbonato', slug: 'santo-andre' },
    ],
  },
  {
    nome: 'São Bernardo do Campo',
    slug: 'sao-bernardo',
    desc: 'Maior município do ABC e polo industrial do Estado. Bairros nobres como Rudge Ramos e Assunção.',
    produtos: [
      { segment: 'cobertura-retratil', slug: 'sao-bernardo-do-campo' },
      { segment: 'cobertura-policarbonato', slug: 'sao-bernardo-do-campo' },
    ],
  },
  {
    nome: 'São Caetano do Sul',
    slug: null,
    desc: 'Menor município do ABC e um dos melhores IDH do Brasil. Alta densidade residencial com projetos em coberturas para varandas.',
    produtos: [],
  },
];

const FAQS = [
  {
    q: 'Atendem Santo André, São Bernardo e São Caetano?',
    a: 'Sim! A Cobersystem atende toda a região do ABC Paulista — Santo André, São Bernardo do Campo e São Caetano do Sul. Para cada cidade, temos equipe dedicada com visita técnica gratuita e orçamento em até 24 horas.',
  },
  {
    q: 'Qual o prazo de instalação no ABC Paulista?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m², sem necessidade de obras ou quebra de paredes. Trabalhamos com estrutura de alumínio naval fixada em alvenaria. Garantia de 2 anos.',
  },
  {
    q: 'Fazem visita técnica gratuita no ABC?',
    a: 'Sim! A visita técnica é gratuita em todas as cidades do ABC. Nossa equipe vai ao local, faz as medições e apresenta o projeto com orçamento detalhado — sem compromisso. Agendamento em até 48 horas.',
  },
  {
    q: 'Quanto custa cobertura retrátil no ABC Paulista?',
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
  areaServed: [
    { '@type': 'City', name: 'Santo André', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'São Bernardo do Campo', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'São Caetano do Sul', addressRegion: 'SP', addressCountry: 'BR' },
  ],
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: `${BASE}/localizacao` },
    { '@type': 'ListItem', position: 3, name: 'ABC Paulista', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function ABCPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'ABC Paulista', href: '/localizacao/abc' },
        ]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil no ABC Paulista
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende todo o ABC Paulista — Santo André, São Bernardo do Campo e
          São Caetano do Sul. A região é um dos maiores polos industriais e residenciais do
          Estado de São Paulo, com forte crescimento em condomínios de médio e alto padrão.
          Visita técnica gratuita e orçamento em até 24 horas.
        </p>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Cidades atendidas no ABC</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CIDADES_ABC.map(({ nome, slug, desc, produtos }) => (
              <div key={nome} className="rounded-lg border border-gray-200 p-5">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{nome}</h3>
                <p className="mb-4 text-sm text-gray-600">{desc}</p>
                {slug && (
                  <Link
                    href={`/localizacao/${slug}`}
                    className="text-sm font-semibold text-[#D4AF37] hover:underline"
                  >
                    Ver página de {nome} →
                  </Link>
                )}
                {produtos.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {produtos.map(({ segment, slug: cidadeSlug }) => (
                      <Link
                        key={segment}
                        href={`/produtos/${segment}/em/${cidadeSlug}`}
                        className="rounded border border-blue-200 bg-white px-2 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-50"
                      >
                        {segment.replace('cobertura-', '').replace('-', ' ')}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos por cidade no ABC Paulista
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: '/produtos/cobertura-retratil/em/santo-andre', label: 'Cobertura Retrátil — Santo André', desc: 'Sistema abre e fecha com automação' },
              { href: '/produtos/cobertura-policarbonato/em/santo-andre', label: 'Cobertura Policarbonato — Santo André', desc: 'Cobertura fixa com proteção UV' },
              { href: '/produtos/cobertura-retratil/em/sao-bernardo-do-campo', label: 'Cobertura Retrátil — São Bernardo', desc: 'Sistema abre e fecha com automação' },
              { href: '/produtos/cobertura-abre-e-fecha/em/sao-bernardo-do-campo', label: 'Cobertura Abre e Fecha — São Bernardo', desc: 'Motor silencioso com integração Alexa' },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-4 transition hover:border-[#D4AF37] hover:shadow-md">
                <span className="font-semibold text-gray-900 transition group-hover:text-[#D4AF37]">{label}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — ABC Paulista
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento no ABC</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita em toda a região do ABC Paulista</p>
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
