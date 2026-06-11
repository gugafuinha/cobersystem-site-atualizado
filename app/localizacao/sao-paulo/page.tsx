import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SAO_PAULO_BAIRROS } from '@/lib/sao-paulo-bairros';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/sao-paulo`;

export const metadata: Metadata = {
  title:
    'Cobertura Retrátil São Paulo | Abre e Fecha SP | Cobersystem',
  description:
    'Cobersystem atende toda São Paulo com cobertura retrátil, abre e fecha e policarbonato. Visita técnica gratuita, orçamento em 24 h. Brooklin, Jardins, Mooca, Morumbi e mais.',
  keywords:
    'cobertura retrátil São Paulo, cobertura abre e fecha SP, cobertura policarbonato São Paulo, cobertura SP orçamento, cobertura zona leste, cobertura zona sul SP',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Cobertura Retrátil São Paulo | Cobersystem',
    description:
      'Cobersystem atende toda São Paulo. Cobertura abre e fecha com automação Alexa. Visita gratuita.',
    url: PAGE_URL,
  },
};

// ─── dados ────────────────────────────────────────────────────────────────────

const PRODUTO_HUBS = [
  {
    segment: 'cobertura-retratil',
    label: 'Cobertura Retrátil',
    desc: 'Sistema abre e fecha com automação e sensor de chuva',
  },
  {
    segment: 'cobertura-abre-e-fecha',
    label: 'Cobertura Abre e Fecha',
    desc: 'Abertura graduada com motor silencioso e integração Alexa',
  },
  {
    segment: 'cobertura-policarbonato',
    label: 'Cobertura em Policarbonato',
    desc: 'Cobertura fixa compacto ou alveolar com proteção UV',
  },
  {
    segment: 'cobertura-termoacustica',
    label: 'Cobertura Termoacústica',
    desc: 'Painel sanduíche com isolamento térmico e acústico',
  },
  {
    segment: 'cobertura-piscina',
    label: 'Cobertura para Piscina',
    desc: 'Retrátil ou fixa — protege e mantém a temperatura da água',
  },
  {
    segment: 'cobertura-pergolado',
    label: 'Pergolado Bioclimático',
    desc: 'Lâminas orientáveis para controle de luz e ventilação',
  },
  {
    segment: 'cobertura-garagem',
    label: 'Cobertura para Garagem',
    desc: 'Policarbonato compacto ou alveolar para 1 ou 2 carros',
  },
] as const;

const BAIRRO_PRODUTOS = [
  { segment: 'cobertura-retratil', label: 'Retrátil' },
  { segment: 'cobertura-abre-e-fecha', label: 'Abre e Fecha' },
  { segment: 'cobertura-policarbonato', label: 'Policarbonato' },
  { segment: 'cobertura-termoacustica', label: 'Termoacústica' },
] as const;

const FAQS = [
  {
    q: 'Vocês atendem em toda São Paulo?',
    a: 'Sim! A Cobersystem atende toda a cidade de São Paulo — Zona Leste, Sul, Oeste e Norte — além de toda a Grande SP. Realizamos a medição gratuita no local e entregamos o orçamento em até 24 horas.',
  },
  {
    q: 'Qual o prazo de instalação em São Paulo?',
    a: 'A instalação leva de 2 a 5 dias úteis para áreas de até 40 m², sem necessidade de obras ou quebra de paredes. Nossa equipe em SP agenda o início em até 7 dias após a aprovação do projeto.',
  },
  {
    q: 'Fazem visita técnica gratuita em São Paulo?',
    a: 'Sim, a visita técnica é totalmente gratuita em toda São Paulo. Nossa equipe vai ao local, faz as medições, avalia as condições de instalação e entrega projeto com orçamento detalhado — sem compromisso.',
  },
  {
    q: 'Quais bairros de São Paulo vocês atendem?',
    a: `Atendemos toda São Paulo, com projetos registrados em Brooklin, Jardins, Mooca, Morumbi, Pinheiros, Moema, Tatuapé e Vila Mariana, além de toda a Grande SP (Guarulhos, Santo André, Campinas, Barueri e mais).`,
  },
  {
    q: 'Quanto custa cobertura retrátil em São Paulo?',
    a: getRetratilFaqPriceAnswer(),
  },
];

// ─── schemas JSON-LD ──────────────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#business`,
  name: 'Cobersystem',
  url: BASE,
  telephone: '+55-11-94361-5079',
  description:
    'Empresa especializada em coberturas retráteis, abre e fecha em policarbonato, pergolado bioclimático e coberturas termoacústicas para residências e comércios em São Paulo e Grande SP.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5505,
    longitude: -46.6333,
  },
  areaServed: [
    { '@type': 'City', name: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'AdministrativeArea', name: 'Grande São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/cobersystem',
    'https://www.youtube.com/@cobersystem',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'São Paulo', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

// ─── componente ───────────────────────────────────────────────────────────────

export default function SaoPauloPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Localização', href: '/localizacao' },
            { label: 'São Paulo', href: '/localizacao/sao-paulo' },
          ]}
        />

        {/* Hero */}
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil em São Paulo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende toda a Grande São Paulo com coberturas retráteis
          em policarbonato que abrem e fecham com automação via Alexa. Atendemos
          Zona Leste, Sul, Oeste, Norte e região metropolitana. Visita técnica
          e orçamento gratuitos.
        </p>

        {/* Prova social */}
        <div className="mb-10 grid grid-cols-3 gap-4 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
          {[
            { value: '+200', label: 'projetos em SP' },
            { value: '2 anos', label: 'de garantia' },
            { value: 'Grátis', label: 'visita técnica' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-blue-600">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Seção 4: Produtos que atendemos em SP ── */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos que atendemos em São Paulo
          </h2>
          <p className="mb-6 text-gray-600">
            Cada link leva à página dedicada para projetos em SP, com preços,
            FAQ e fotos de instalações reais na cidade.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUTO_HUBS.map(({ segment, label, desc }) => (
              <Link
                key={segment}
                href={`/produtos/${segment}/em/sao-paulo`}
                className="group flex flex-col gap-1 rounded-lg border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <span className="font-semibold text-gray-900 transition group-hover:text-blue-600">
                  {label}
                </span>
                <span className="text-sm text-gray-600">{desc}</span>
                <span className="mt-2 text-sm font-semibold text-blue-600">
                  Ver em SP →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Seção 3: Atendimento por bairro ── */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
            Atendimento por bairro em São Paulo
          </h2>
          <p className="mb-6 text-gray-600">
            Selecione seu bairro e o tipo de cobertura para ver projetos, preços
            e FAQ específicos para a sua região.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAO_PAULO_BAIRROS.map((bairro) => (
              <div
                key={bairro.slug}
                className="rounded-lg border border-gray-200 p-4"
              >
                <p className="mb-3 font-bold text-gray-800">{bairro.nome}</p>
                <ul className="flex flex-col gap-2">
                  {BAIRRO_PRODUTOS.map(({ segment, label }) => (
                    <li key={segment}>
                      <Link
                        href={`/produtos/${segment}/em/sao-paulo/${bairro.slug}`}
                        className="text-sm font-medium text-blue-600 transition hover:underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Zonas de SP (conteúdo original preservado) */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Atendemos todas as zonas de São Paulo
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                zona: 'Zona Leste',
                desc: 'Vila Prudente, Mooca, Tatuapé, Penha, Itaquera e toda Zona Leste de SP.',
                href: '/localizacao/zona-leste',
              },
              {
                zona: 'Zona Sul',
                desc: 'Moema, Vila Olímpia, Campo Belo, Jabaquara e toda Zona Sul de SP.',
                href: '/localizacao/zona-sul',
              },
              {
                zona: 'Zona Oeste',
                desc: 'Pinheiros, Vila Madalena, Butantã, Lapa e toda Zona Oeste de SP.',
                href: '/localizacao/zona-oeste',
              },
              {
                zona: 'Zona Norte',
                desc: 'Santana, Tucuruvi, Vila Guilherme e toda Zona Norte de SP.',
                href: '/localizacao/zona-norte',
              },
            ].map(({ zona, desc, href }) => (
              <div key={zona}>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {zona}
                </h3>
                <p className="mb-3 text-gray-600">{desc}</p>
                <Link href={href} className="text-[#D4AF37] hover:underline">
                  Ver mais sobre {zona} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Serviços (conteúdo original preservado) */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Nossos serviços em São Paulo
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                href: '/servicos/cobertura-abre-e-fecha',
                titulo: 'Cobertura Abre e Fecha',
                desc: 'Sistema retrátil automatizado com Alexa e sensor de chuva.',
              },
              {
                href: '/servicos/cobertura-area-gourmet',
                titulo: 'Cobertura para Área Gourmet',
                desc: 'Ideal para áreas gourmet e churrasqueiras em SP.',
              },
              {
                href: '/servicos/cobertura-piscina',
                titulo: 'Cobertura para Piscina',
                desc: 'Cobertura retrátil para piscinas em São Paulo.',
              },
            ].map(({ href, titulo, desc }) => (
              <Link key={href} href={href} className="group">
                <div className="rounded-lg bg-gray-50 p-6 transition hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800 transition group-hover:text-[#D4AF37]">
                    {titulo}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Seção 2: FAQ ── */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — Cobersystem em São Paulo
          </h2>
          <div className="divide-y divide-gray-200 rounded-lg border border-blue-200">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group px-6 py-4">
                <summary className="cursor-pointer list-none font-semibold text-gray-800">
                  {q}
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Ainda tem dúvidas?{' '}
            <Link
              href="/contato"
              className="font-semibold underline text-blue-600"
            >
              Fale com nosso especialista
            </Link>
          </p>
        </section>

        {/* CTA (preservado) */}
        <section className="rounded-lg bg-[#D4AF37] p-12 text-center text-black">
          <h2 className="mb-4 text-4xl font-bold">
            Solicite seu orçamento em São Paulo
          </h2>
          <p className="mb-8 text-xl text-gray-900">
            Atendemos toda Grande São Paulo com visita técnica e orçamento
            gratuitos, sem compromisso
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900"
            >
              Solicitar Orçamento
            </Link>
            <Link
              href="https://wa.me/5511943615079"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
