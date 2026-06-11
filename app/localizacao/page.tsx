import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao`;

export const metadata: Metadata = {
  title: 'Onde Atendemos | Coberturas em São Paulo e Região | Cobersystem',
  description:
    'Atendemos toda Grande São Paulo, ABC, Guarulhos, Campinas, Sorocaba e região. Coberturas retráteis em policarbonato com automação. Visita técnica gratuita. Solicite seu orçamento!',
  keywords:
    'cobertura São Paulo, cobertura ABC, cobertura Guarulhos, cobertura Campinas, cobertura Sorocaba, onde atendemos',
  alternates: { canonical: PAGE_URL },
};

const LOCALIZACOES = [
  { slug: 'sao-paulo', title: 'São Paulo', desc: 'Toda Grande SP — todas as zonas e principais bairros.' },
  { slug: 'zona-leste', title: 'Zona Leste', desc: 'Vila Prudente, Mooca, Tatuapé, Penha, Itaquera.' },
  { slug: 'zona-sul', title: 'Zona Sul', desc: 'Moema, Vila Olímpia, Campo Belo, Jabaquara.' },
  { slug: 'zona-oeste', title: 'Zona Oeste', desc: 'Pinheiros, Vila Madalena, Butantã, Lapa, Jardins.' },
  { slug: 'zona-norte', title: 'Zona Norte', desc: 'Santana, Tucuruvi, Vila Guilherme.' },
  { slug: 'abc', title: 'ABC Paulista', desc: 'Santo André, São Bernardo do Campo, São Caetano.' },
  { slug: 'guarulhos', title: 'Guarulhos', desc: 'Toda Guarulhos e região metropolitana.' },
  { slug: 'campinas', title: 'Campinas', desc: 'Campinas, Barão Geraldo, Alphaville Campinas.' },
  { slug: 'sorocaba', title: 'Sorocaba', desc: 'Sorocaba, Campolim, Wanel Ville e região.' },
];

const FAQS = [
  {
    q: 'Em quais cidades a Cobersystem atende?',
    a: 'Atendemos toda a Grande São Paulo (todas as zonas), ABC Paulista (Santo André, São Bernardo, São Caetano), Guarulhos, Campinas, Sorocaba e cidades da região metropolitana. Para outras cidades do interior, consulte disponibilidade pelo WhatsApp.',
  },
  {
    q: 'Atendem toda a Grande São Paulo?',
    a: 'Sim! Cobrimos todas as zonas da capital (Leste, Sul, Oeste e Norte) e mais de 30 municípios da Grande SP. Nossa equipe realiza visita técnica gratuita no local e entrega orçamento em até 24 horas.',
  },
  {
    q: 'Como solicitar orçamento na minha cidade?',
    a: 'Entre em contato pelo WhatsApp ou pelo formulário de contato. Informe seu endereço e o tipo de cobertura desejada. Agendamos a visita técnica gratuita em até 48 horas e entregamos o projeto sem compromisso.',
  },
  {
    q: 'Quanto custa cobertura retrátil na Grande São Paulo?',
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
  description:
    'Empresa especializada em coberturas retráteis, abre e fecha, pergolado bioclimático e termoacústicas para SP e Grande SP.',
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  areaServed: [
    { '@type': 'City', name: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'AdministrativeArea', name: 'Grande São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'Guarulhos', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'Campinas', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'Sorocaba', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'Santo André', addressRegion: 'SP', addressCountry: 'BR' },
    { '@type': 'City', name: 'São Bernardo do Campo', addressRegion: 'SP', addressCountry: 'BR' },
  ],
  sameAs: ['https://www.instagram.com/cobersystem', 'https://www.youtube.com/@cobersystem'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Localização', item: PAGE_URL },
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

export default function LocalizacaoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Localização', href: '/localizacao' }]} />

        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Onde Atendemos</h1>
        <p className="mb-10 text-xl leading-relaxed text-gray-700">
          A Cobersystem atende toda a Grande São Paulo, ABC Paulista, Guarulhos, Campinas, Sorocaba e região.
          Visita técnica gratuita e orçamento em até 24 horas.
        </p>

        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {LOCALIZACOES.map(({ slug, title, desc }) => (
              <Link
                key={slug}
                href={`/localizacao/${slug}`}
                className="group rounded-lg bg-white p-6 shadow-md transition hover:shadow-xl"
              >
                <h2 className="mb-3 text-2xl font-bold text-gray-800 transition group-hover:text-[#D4AF37]">
                  {title}
                </h2>
                <p className="mb-4 text-gray-600">{desc}</p>
                <span className="font-semibold text-[#D4AF37] group-hover:underline">Ver mais →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Perguntas frequentes — atendimento na Grande SP
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica e orçamento gratuitos em toda a Grande SP</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contato" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">
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
