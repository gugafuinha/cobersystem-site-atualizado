import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import {
  getCidadePolicarbonato,
  getSlugsCidadesPolicarbonato,
} from '@/lib/cobertura-policarbonato-cidades';

const BASE = 'https://coberturapolicarbonato.com.br';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg`;

export async function generateStaticParams() {
  return getSlugsCidadesPolicarbonato().map((cidade) => ({ cidade }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadePolicarbonato(cidadeParam);

  if (!cidade) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/cobertura-policarbonato/em/${cidade.slug}`;
  const url = `${BASE}${path}`;
  const title = `Cobertura em Policarbonato em ${cidade.nome} | Cobersystem`;

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
          alt: `Cobertura fixa em policarbonato em ${cidade.nome}`,
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

export default async function CoberturaPolicarbonatoEmCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadePolicarbonato(cidadeParam);

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
              label: 'Cobertura Fixa em Policarbonato',
              href: '/produtos/cobertura-policarbonato',
            },
            {
              label: cidade.nome,
              href: `/produtos/cobertura-policarbonato/em/${cidade.slug}`,
            },
          ]}
        />

        <section className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src="/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg"
                alt={`Cobertura fixa em policarbonato em ${cidade.nome} - Cobersystem`}
                title={`Cobertura em policarbonato - ${cidade.nome}`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Cobertura em Policarbonato em {cidade.nome}
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

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Modelos da linha
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Conheça os detalhes técnicos de cada solução e escolha o perfil ideal
            para o seu projeto em {cidade.nome}.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/produtos/cobertura-policarbonato/fixa-compacto"
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Policarbonato compacto
              </h3>
              <p className="text-gray-600">
                Transparência e proteção permanente — ver página completa com
                galeria e especificações.
              </p>
              <span className="mt-4 inline-block font-semibold text-blue-600">
                Ver detalhes →
              </span>
            </Link>
            <Link
              href="/produtos/cobertura-policarbonato/fixa-alveolar"
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Policarbonato alveolar
              </h3>
              <p className="text-gray-600">
                Isolamento térmico e acústico superior — ver página completa com
                galeria e especificações.
              </p>
              <span className="mt-4 inline-block font-semibold text-blue-600">
                Ver detalhes →
              </span>
            </Link>
          </div>
        </section>

        <ProductVejaTambem current="policarbonato" />

        <section className="bg-blue-600 rounded-lg p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Orçamento em {cidade.nome}
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Entre em contato e solicite um orçamento personalizado para sua
            cobertura em policarbonato.
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
