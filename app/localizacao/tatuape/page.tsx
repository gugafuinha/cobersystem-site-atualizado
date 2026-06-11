import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getRetratilFaqPriceAnswer } from '@/lib/pricing';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/localizacao/tatuape`;

export const metadata: Metadata = {
  title: 'Cobertura Retrátil Tatuapé SP | Área Gourmet e Quintal | Cobersystem',
  description:
    'Cobertura retrátil e policarbonato no Tatuapé — São Paulo Zona Leste. Projetos para quintais, áreas gourmet e garagens. Visita técnica gratuita. Orçamento em 24h.',
  keywords:
    'cobertura Tatuapé, cobertura retrátil Tatuapé, cobertura quintal Tatuapé, cobertura área gourmet Tatuapé, cobertura Tatuapé SP',
  alternates: { canonical: PAGE_URL },
};

const PRODUTOS_BAIRRO = [
  { label: 'Cobertura Retrátil no Tatuapé', href: '/produtos/cobertura-retratil/em/sao-paulo/tatuape' },
  { label: 'Cobertura Abre e Fecha no Tatuapé', href: '/produtos/cobertura-abre-e-fecha/em/sao-paulo/tatuape' },
  { label: 'Cobertura em Policarbonato no Tatuapé', href: '/produtos/cobertura-policarbonato/em/sao-paulo/tatuape' },
  { label: 'Cobertura Termoacústica no Tatuapé', href: '/produtos/cobertura-termoacustica/em/sao-paulo/tatuape' },
  { label: 'Cobertura para Pergolado no Tatuapé', href: '/produtos/cobertura-pergolado/em/sao-paulo/tatuape' },
  { label: 'Cobertura para Piscina no Tatuapé', href: '/produtos/cobertura-piscina/em/sao-paulo/tatuape' },
];

const FAQS = [
  {
    q: 'A Cobersystem atende no Tatuapé?',
    a: 'Sim! A Cobersystem atende o Tatuapé e toda a Zona Leste de São Paulo — incluindo Vila Formosa, Penha, Mooca, Belém, Brás e regiões vizinhas. Visita técnica gratuita com orçamento em até 24 horas.',
  },
  {
    q: 'Quais projetos são mais comuns no Tatuapé?',
    a: 'No Tatuapé, a maioria dos projetos envolve coberturas para quintais e áreas gourmet em casas que passaram por reforma. As coberturas retráteis e fixas em policarbonato alveolar são as mais escolhidas — protegem o quintal sem escurecer o ambiente. Também instalamos coberturas para garagem descoberta e áreas de churrasqueira.',
  },
  {
    q: 'Quanto custa cobertura retrátil no Tatuapé?',
    a: getRetratilFaqPriceAnswer(),
  },
  {
    q: 'A Cobersystem instala em casas com quintal pequeno no Tatuapé?',
    a: 'Sim. Fazemos projetos para qualquer tamanho de quintal — desde coberturas de 8 m² em corredores e acessos até grandes áreas gourmet. A estrutura de alumínio é fabricada sob medida para o seu espaço. O orçamento é gratuito e sem compromisso.',
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
  geo: { '@type': 'GeoCoordinates', latitude: -23.5406, longitude: -46.5745 },
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
    { '@type': 'ListItem', position: 3, name: 'Tatuapé', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function TatuapePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Tatuapé', href: '/localizacao/tatuape' },
        ]} />

        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Cobertura Retrátil no Tatuapé — São Paulo
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          A Cobersystem instala coberturas retráteis e fixas em policarbonato no <strong>Tatuapé</strong>,
          um dos bairros que mais cresce na Zona Leste de São Paulo. Projetos para quintal, área gourmet,
          garagem e pergolado — tudo sob medida, com visita técnica gratuita e orçamento em até 24 horas.
        </p>

        {/* Sobre o Tatuapé */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Renovação urbana e coberturas no Tatuapé
          </h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            O Tatuapé vive um momento de renovação urbana: muitas casas antigas estão sendo reformadas
            e expandidas, com quintais e áreas externas valorizadas. A cobertura é frequentemente
            o último passo da reforma — transforma o quintal em área gourmet funcional, protegida
            do sol e da chuva, sem perder a luminosidade natural.
          </p>
          <p className="text-gray-600 leading-relaxed">
            O policarbonato alveolar é a escolha mais popular no Tatuapé: filtra o sol, reduz o calor
            e dura 15–20 anos com manutenção mínima. Para quintal de casas renovadas, o sistema
            retrátil (abre e fecha) adiciona praticidade e eleva o valor do imóvel.
          </p>
        </section>

        {/* Produtos com links de bairro */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Produtos disponíveis no Tatuapé
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

        {/* Bairros vizinhos */}
        <section className="mb-12 rounded-lg bg-blue-50 border border-blue-200 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Outros bairros da Zona Leste atendidos</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/localizacao/zona-leste', label: 'Hub Zona Leste' },
              { href: '/produtos/cobertura-retratil/em/sao-paulo/mooca', label: 'Mooca' },
              { href: '/localizacao/sao-paulo', label: 'São Paulo (geral)' },
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
            Perguntas frequentes — Tatuapé
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
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento no Tatuapé</h2>
          <p className="mb-8 text-xl text-gray-900">Visita técnica gratuita — orçamento em até 24 h</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contato" className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900">
              Solicitar Orçamento
            </Link>
            <Link href="https://wa.me/5511943615079?text=Ol%C3%A1!%20Quero%20or%C3%A7amento%20no%20Tatuap%C3%A9%20SP." target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
              WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
