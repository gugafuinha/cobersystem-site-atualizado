import Link from 'next/link';
import {
  getStandardPriceTableRows,
  PRICE_ESTIMATE_NOTE,
} from '@/lib/pricing';

export type BreadcrumbItem = { name: string; item: string };

export interface RegionalSeoBlockProps {
  nomeCidade: string;
  nomeProduto: string;
  pageUrl: string;
  breadcrumbs: BreadcrumbItem[];
  themeColor?: 'blue' | 'orange';
}

export default function RegionalSeoBlock({
  nomeCidade,
  nomeProduto,
  pageUrl,
  breadcrumbs,
  themeColor = 'blue',
}: RegionalSeoBlockProps) {
  const priceRows = getStandardPriceTableRows();
  const priceListText = priceRows
    .map((r) => `${r.tipo}: ${r.precoM2}`)
    .join('; ');

  const faqs = [
    {
      q: `Quanto custa ${nomeProduto} em ${nomeCidade}?`,
      a: `O investimento para ${nomeProduto} em ${nomeCidade} varia conforme o sistema: ${priceListText}. Valores estimados — o preço final é confirmado após medição gratuita no local.`,
    },
    {
      q: `A Cobersystem atende em ${nomeCidade}?`,
      a: `Sim! A Cobersystem atende ${nomeCidade} e toda a Grande São Paulo. Nossa equipe realiza medição gratuita no local e entrega o orçamento em até 24 horas.`,
    },
    {
      q: `Qual o prazo de instalação de ${nomeProduto} em ${nomeCidade}?`,
      a: `A instalação leva de 2 a 5 dias úteis para áreas de até 40 m², sem necessidade de obras ou quebra de paredes. Fornecemos garantia de 2 anos para estrutura e sistema.`,
    },
    {
      q: `Como solicitar orçamento de ${nomeProduto} em ${nomeCidade}?`,
      a: `Entre em contato pelo WhatsApp ou pelo formulário de contato. Nossa equipe agenda a visita técnica gratuita em ${nomeCidade} em até 48 horas e apresenta o projeto sem compromisso.`,
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${nomeProduto} em ${nomeCidade}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Cobersystem',
      '@id': 'https://www.coberturapolicarbonato.com.br/#business',
      telephone: '+55-11-4896-2373',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: nomeCidade,
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    url: pageUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map(({ name, item }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const accent =
    themeColor === 'orange' ? 'text-orange-600' : 'text-blue-600';
  const borderColor =
    themeColor === 'orange' ? 'border-orange-200' : 'border-blue-200';
  const linkClass =
    themeColor === 'orange'
      ? 'font-semibold underline text-orange-600'
      : 'font-semibold underline text-blue-600';

  return (
    <>
      {/* JSON-LD: Service + areaServed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD: FAQPage — idêntico ao FAQ visível abaixo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Prova social */}
      <section className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: '+200', label: 'projetos na Grande SP' },
            { value: '2 anos', label: 'de garantia' },
            { value: 'Grátis', label: 'medição no local' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className={`text-2xl font-bold ${accent}`}>{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabela de preços */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
          Preços em {nomeCidade}
        </h2>
        <p className="mb-4 text-gray-600">
          Referência de valores por sistema — preço final confirmado após visita
          técnica gratuita.
        </p>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  Tipo de cobertura
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">
                  Preço por m²
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {priceRows.map(({ tipo, precoM2 }) => (
                <tr key={tipo} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{tipo}</td>
                  <td
                    className={`px-4 py-3 text-right font-semibold ${accent}`}
                  >
                    {precoM2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-500">{PRICE_ESTIMATE_NOTE}</p>
      </section>

      {/* FAQ visível */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
          Perguntas frequentes — {nomeProduto} em {nomeCidade}
        </h2>
        <div
          className={`divide-y divide-gray-200 rounded-lg border ${borderColor}`}
        >
          {faqs.map(({ q, a }) => (
            <details key={q} className="group px-6 py-4">
              <summary className="cursor-pointer list-none font-semibold text-gray-800 group-open:text-inherit">
                {q}
              </summary>
              <p className="mt-3 leading-relaxed text-gray-600">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Ainda tem dúvidas?{' '}
          <Link href="/contato" className={linkClass}>
            Fale com nosso especialista
          </Link>
        </p>
      </section>
    </>
  );
}
