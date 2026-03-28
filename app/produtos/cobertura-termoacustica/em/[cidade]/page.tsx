import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import {
  getCidadeTermoacustica,
  getSlugsCidadesTermoacustica,
} from '@/lib/cobertura-termoacustica-cidades';
import { SAO_PAULO_BAIRROS } from '@/lib/sao-paulo-bairros';

const BASE = 'https://coberturapolicarbonato.com.br';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-termoacustica/b54559ed-ffaf-43eb-a738-e9d347954f5a.jpg`;

const MODELOS_LINHA = [
  {
    slug: 'sanduiche-eps',
    titulo: 'Sanduíche com EPS (Isopor)',
    texto:
      'Custo-benefício e bom isolamento — página completa com especificações e galeria.',
  },
  {
    slug: 'sanduiche-pu',
    titulo: 'Sanduíche com PU (Poliuretano)',
    texto:
      'Máximo desempenho térmico e acústico — ideal para projetos exigentes.',
  },
  {
    slug: 'sanduiche-la-rocha',
    titulo: 'Sanduíche com Lã de Rocha',
    texto:
      'Proteção acústica superior e reação ao fogo — detalhes técnicos na página do modelo.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsCidadesTermoacustica().map((cidade) => ({ cidade }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadeTermoacustica(cidadeParam);

  if (!cidade) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/cobertura-termoacustica/em/${cidade.slug}`;
  const url = `${BASE}${path}`;
  const title = `Cobertura Termoacústica em ${cidade.nome} | Cobersystem`;

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
          height: 800,
          alt: `Cobertura termoacústica em ${cidade.nome}`,
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

export default async function CoberturaTermoacusticaEmCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadeTermoacustica(cidadeParam);

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
              label: 'Cobertura Termoacústica',
              href: '/produtos/cobertura-termoacustica',
            },
            {
              label: cidade.nome,
              href: `/produtos/cobertura-termoacustica/em/${cidade.slug}`,
            },
          ]}
        />

        <section className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src="/images/produtos/cobertura-termoacustica/b54559ed-ffaf-43eb-a738-e9d347954f5a.jpg"
                alt={`Cobertura termoacústica em ${cidade.nome} - Cobersystem`}
                title={`Cobertura termoacústica - ${cidade.nome}`}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Cobertura Termoacústica em {cidade.nome}
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
                className="mt-6 inline-block rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700"
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
              Cobertura termoacústica na capital, por região:
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {SAO_PAULO_BAIRROS.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/produtos/cobertura-termoacustica/em/sao-paulo/${b.slug}`}
                    className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-gray-200 transition hover:bg-orange-50 hover:ring-orange-200"
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
            Tipos de cobertura sanduíche
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Conheça as variantes de painel termoacústico para o seu projeto em{' '}
            {cidade.nome}.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MODELOS_LINHA.map((item) => (
              <Link
                key={item.slug}
                href={`/produtos/cobertura-termoacustica/${item.slug}`}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">{item.texto}</p>
                <span className="mt-4 inline-block font-semibold text-orange-600">
                  Ver detalhes →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <ProductVejaTambem current="termoacustica" />

        <section className="rounded-lg bg-orange-600 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Orçamento em {cidade.nome}
          </h2>
          <p className="mb-8 text-xl text-orange-100">
            Entre em contato e solicite um orçamento personalizado para cobertura
            termoacústica sanduíche.
          </p>
          <Link
            href="/contato"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
