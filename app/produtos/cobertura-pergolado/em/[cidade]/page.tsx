import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import RegionalSeoBlock from '@/components/RegionalSeoBlock';
import {
  getCidadePergolado,
  getSlugsCidadesPergolado,
  SP_BAIRROS_PERGOLADO,
} from '@/lib/cobertura-pergolado-cidades';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const OG_IMAGE = `${BASE}/images/blog/pergolado-vs-cobertura.jpg`;

const TIPOS_PERGOLADO = [
  {
    href: '/servicos/cobertura-pergolado',
    titulo: 'Pergolado Bioclimático',
    texto:
      'Sistema com lâminas orientáveis que controlam luz, ventilação e proteção contra chuva de forma motorizada.',
  },
  {
    href: '/produtos/cobertura-retratil',
    titulo: 'Cobertura Retrátil',
    texto:
      'Sistema abre e fecha com automação — abre totalmente em dias de sol, fecha com sensor de chuva ou Alexa.',
  },
  {
    href: '/produtos/cobertura-policarbonato',
    titulo: 'Cobertura em Policarbonato',
    texto:
      'Cobertura fixa translúcida que mantém luminosidade, protege da chuva e oferece excelente custo-benefício.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsCidadesPergolado().map((cidade) => ({ cidade }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadePergolado(cidadeParam);

  if (!cidade) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/cobertura-pergolado/em/${cidade.slug}`;
  const url = `${BASE}${path}`;
  const title = `Pergolado Bioclimático em ${cidade.nome} | Cobersystem`;

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
          height: 675,
          alt: `Pergolado bioclimático em ${cidade.nome}`,
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

export default async function CoberturaPergoladadoEmCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadePergolado(cidadeParam);

  if (!cidade) {
    notFound();
  }

  const pageUrl = `${BASE}/produtos/cobertura-pergolado/em/${cidade.slug}`;
  const regionalBreadcrumbs = [
    { name: 'Início', item: `${BASE}/` },
    { name: 'Produtos', item: `${BASE}/produtos` },
    { name: 'Pergolado Bioclimático', item: `${BASE}/servicos/cobertura-pergolado` },
    { name: cidade.nome, item: pageUrl },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            {
              label: 'Pergolado Bioclimático',
              href: '/servicos/cobertura-pergolado',
            },
            {
              label: cidade.nome,
              href: `/produtos/cobertura-pergolado/em/${cidade.slug}`,
            },
          ]}
        />

        <section className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src="/images/blog/pergolado-vs-cobertura.jpg"
                alt={`Pergolado bioclimático em ${cidade.nome} - Cobersystem`}
                title={`Pergolado bioclimático - ${cidade.nome}`}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Pergolado Bioclimático em {cidade.nome}
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                {cidade.paragrafos.map((p, i) => (
                  <p key={i} className="mb-4 leading-relaxed last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href="/orcamento"
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
              Atendimento por bairro em São Paulo
            </h2>
            <p className="mb-4 text-gray-600">
              Pergolado bioclimático na capital, por região:
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {SP_BAIRROS_PERGOLADO.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/produtos/cobertura-pergolado/em/sao-paulo/${b.slug}`}
                    className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:ring-blue-200"
                  >
                    {b.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <RegionalSeoBlock
          nomeCidade={cidade.nome}
          nomeProduto="Pergolado Bioclimático"
          pageUrl={pageUrl}
          breadcrumbs={regionalBreadcrumbs}
        />

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Tipos de cobertura para área externa
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Escolha o sistema ideal para o seu espaço em {cidade.nome}.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {TIPOS_PERGOLADO.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
            Entre em contato e solicite um orçamento personalizado para
            pergolado bioclimático sob medida.
          </p>
          <Link
            href="/orcamento"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
