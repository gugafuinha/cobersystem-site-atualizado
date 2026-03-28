import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import {
  getCidadeRetratil,
  getSlugsCidadesRetratil,
} from '@/lib/cobertura-retratil-cidades';
import { SAO_PAULO_BAIRROS } from '@/lib/sao-paulo-bairros';

const BASE = 'https://coberturapolicarbonato.com.br';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg`;

const MODELOS_LINHA = [
  {
    slug: 'telhas-aluminio',
    titulo: 'Telhas em alumínio',
    texto:
      'Sistema abre e fecha com telhas em alumínio — detalhes, galeria e especificações.',
  },
  {
    slug: 'telhas-intercaladas',
    titulo: 'Telhas intercaladas',
    texto:
      'Acabamento intercalado com abertura controlada — página completa do modelo.',
  },
  {
    slug: 'policarbonato-alveolar',
    titulo: 'Policarbonato alveolar',
    texto:
      'Retrátil com alveolar para conforto térmico — veja galeria e características.',
  },
  {
    slug: 'policarbonato-compacto',
    titulo: 'Policarbonato compacto',
    texto:
      'Transparência e proteção com abertura graduada — página técnica completa.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsCidadesRetratil().map((cidade) => ({ cidade }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadeRetratil(cidadeParam);

  if (!cidade) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/cobertura-retratil/em/${cidade.slug}`;
  const url = `${BASE}${path}`;
  const title = `Cobertura Retrátil em ${cidade.nome} | Cobersystem`;

  return {
    title,
    description: cidade.metaDescription,
    keywords: cidade.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: cidade.metaDescription,
      url,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 900,
          alt: `Cobertura retrátil em ${cidade.nome}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: cidade.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function CoberturaRetratilEmCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadeRetratil(cidadeParam);

  if (!cidade) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            {
              label: 'Cobertura Retrátil em Policarbonato',
              href: '/produtos/cobertura-retratil',
            },
            {
              label: cidade.nome,
              href: `/produtos/cobertura-retratil/em/${cidade.slug}`,
            },
          ]}
        />

        <section className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src="/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg"
                alt={`Cobertura retrátil em ${cidade.nome} - Cobersystem`}
                title={`Cobertura retrátil - ${cidade.nome}`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Cobertura Retrátil em {cidade.nome}
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                {cidade.paragrafos.map((p, i) => (
                  <p key={i} className="mb-4 leading-relaxed last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href="/contato"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </section>

        {cidade.slug === 'sao-paulo' && (
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
            <h2 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
              Atendimento por bairro
            </h2>
            <p className="mb-4 text-gray-600">
              Cobertura retrátil na capital, por região:
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {SAO_PAULO_BAIRROS.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/produtos/cobertura-retratil/em/sao-paulo/${b.slug}`}
                    className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:ring-blue-200"
                  >
                    {b.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Modelos da linha
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Escolha o tipo de cobertura retrátil ideal para o seu projeto em{' '}
            {cidade.nome}.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {MODELOS_LINHA.map((item) => (
              <Link
                key={item.slug}
                href={`/produtos/cobertura-retratil/${item.slug}`}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">{item.texto}</p>
                <span className="mt-4 inline-block font-semibold text-blue-600">
                  Ver detalhes →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <ProductVejaTambem current="retratil" />

        <section className="rounded-lg bg-blue-600 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Orçamento em {cidade.nome}
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Entre em contato e solicite um orçamento personalizado para cobertura
            retrátil abre e fecha.
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
