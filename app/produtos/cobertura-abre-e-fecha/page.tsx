import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import { CIDADES_COBERTURA_ABRE_E_FECHA } from '@/lib/cobertura-abre-e-fecha-cidades';

const BASE = 'https://coberturapolicarbonato.com.br';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg`;

export const metadata: Metadata = {
  title: 'Cobertura Abre e Fecha | Automação e Policarbonato | Cobersystem',
  description:
    'Cobertura abre e fecha com abertura de 0 a 90 graus. Telhas em alumínio, intercaladas ou policarbonato. Automação via Alexa e sensor de chuva. Solicite orçamento.',
  keywords:
    'cobertura abre e fecha, cobertura retrátil automatizada, Alexa cobertura, sensor chuva cobertura, policarbonato abre e fecha',
  alternates: {
    canonical: `${BASE}/produtos/cobertura-abre-e-fecha`,
  },
  openGraph: {
    title: 'Cobertura Abre e Fecha | Cobersystem',
    description:
      'Sistema abre e fecha com automação opcional. Controle total do clima.',
    url: `${BASE}/produtos/cobertura-abre-e-fecha`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 900,
        alt: 'Cobertura abre e fecha automatizada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
};

const cardsModelos = [
  {
    slug: 'telhas-aluminio',
    nome: 'Cobertura Abre e Fecha com Telhas em Alumínio',
    image: '/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg',
  },
  {
    slug: 'telhas-intercaladas',
    nome: 'Cobertura Abre e Fecha com Telhas Intercaladas',
    image:
      '/images/produtos/cobertura-retratil/intercalada/3c2fdde7-3430-4fed-900a-d69838b09493.jpg',
  },
  {
    slug: 'policarbonato-alveolar',
    nome: 'Cobertura Abre e Fecha com Policarbonato Alveolar',
    image:
      '/images/produtos/cobertura-retratil/alveolar/038c4743-0f19-4063-b8f6-57dc5802ffac.jpg',
  },
  {
    slug: 'policarbonato-compacto',
    nome: 'Cobertura Abre e Fecha com Policarbonato Compacto',
    image: '/images/produtos/cobertura-retratil/compacto/capa.jpg',
  },
] as const;

export default function CoberturaAbreEFechaHubPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            {
              label: 'Cobertura Abre e Fecha',
              href: '/produtos/cobertura-abre-e-fecha',
            },
          ]}
        />

        <section className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-800">
            Cobertura Abre e Fecha
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-600">
            Sistema retrátil com abertura de 0 a 90 graus. Controle do clima com
            ventilação quando aberto e proteção quando fechado. Automação opcional
            via Alexa, controle remoto ou sensor de chuva.
          </p>
          <p className="text-gray-600">
            <Link
              href="/servicos/cobertura-abre-e-fecha"
              className="font-semibold text-blue-600 hover:underline"
            >
              Ver página do serviço com FAQ e mais detalhes
            </Link>
          </p>
        </section>

        <section className="mb-16 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <h2 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
            Atendimento por região
          </h2>
          <p className="mb-4 text-gray-600">
            Cobertura abre e fecha na sua cidade:
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {CIDADES_COBERTURA_ABRE_E_FECHA.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/produtos/cobertura-abre-e-fecha/em/${c.slug}`}
                  className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:ring-blue-200"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Escolha o modelo
          </h2>
          <div className="mx-auto grid max-w-5xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
            {cardsModelos.map((item, index) => (
              <Link
                key={item.slug}
                href={`/produtos/cobertura-retratil/${item.slug}`}
                className="group flex h-full min-h-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200/80 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200/60">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-gray-100">
                    <OptimizedImage
                      src={item.image}
                      alt={item.nome}
                      title={item.nome}
                      width={800}
                      height={512}
                      priority={index === 0}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
                    <h3 className="text-lg font-bold leading-snug text-gray-800 transition group-hover:text-blue-600 md:text-xl">
                      {item.nome}
                    </h3>
                    <div className="mt-auto pt-4 text-center">
                      <span className="text-sm font-semibold text-blue-600">
                        Ver detalhes →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <ProductVejaTambem current="retratil" />

        <section className="rounded-lg bg-blue-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">
            Quer saber mais sobre cobertura abre e fecha?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link
            href="/contato"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
