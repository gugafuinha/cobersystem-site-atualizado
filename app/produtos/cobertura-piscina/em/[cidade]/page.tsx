import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import RegionalSeoBlock from '@/components/RegionalSeoBlock';
import {
  getCidadePiscina,
  getSlugsCidadesPiscina,
  SP_BAIRROS_PISCINA,
} from '@/lib/cobertura-piscina-cidades';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const OG_IMAGE = `${BASE}/images/blog/cobertura-piscina-retratil.jpg`;

const TIPOS_COBERTURA = [
  {
    href: '/produtos/cobertura-retratil',
    titulo: 'Cobertura Retrátil',
    texto:
      'Sistema abre e fecha ideal para piscinas — abre totalmente em dias de sol, fecha com automação quando necessário.',
  },
  {
    href: '/produtos/cobertura-policarbonato',
    titulo: 'Cobertura em Policarbonato',
    texto:
      'Cobertura fixa translúcida que mantém luminosidade, protege da chuva e reduz perda de calor da água.',
  },
  {
    href: '/servicos/cobertura-piscina',
    titulo: 'Ver todos os modelos',
    texto:
      'Consulte a página de serviço completa com galeria, especificações técnicas e comparativo entre sistemas.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsCidadesPiscina().map((cidade) => ({ cidade }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadePiscina(cidadeParam);

  if (!cidade) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/cobertura-piscina/em/${cidade.slug}`;
  const url = `${BASE}${path}`;
  const title = `Cobertura para Piscina em ${cidade.nome} | Cobersystem`;

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
          alt: `Cobertura para piscina em ${cidade.nome}`,
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

export default async function CoberturaPiscinaEmCidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade: cidadeParam } = await params;
  const cidade = getCidadePiscina(cidadeParam);

  if (!cidade) {
    notFound();
  }

  const pageUrl = `${BASE}/produtos/cobertura-piscina/em/${cidade.slug}`;
  const regionalBreadcrumbs = [
    { name: 'Início', item: `${BASE}/` },
    { name: 'Produtos', item: `${BASE}/produtos` },
    { name: 'Cobertura para Piscina', item: `${BASE}/servicos/cobertura-piscina` },
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
              label: 'Cobertura para Piscina',
              href: '/servicos/cobertura-piscina',
            },
            {
              label: cidade.nome,
              href: `/produtos/cobertura-piscina/em/${cidade.slug}`,
            },
          ]}
        />

        <section className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src="/images/blog/cobertura-piscina-retratil.jpg"
                alt={`Cobertura para piscina em ${cidade.nome} - Cobersystem`}
                title={`Cobertura para piscina - ${cidade.nome}`}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                Cobertura para Piscina em {cidade.nome}
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
              Cobertura para piscina na capital, por região:
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {SP_BAIRROS_PISCINA.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/produtos/cobertura-piscina/em/sao-paulo/${b.slug}`}
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
          nomeProduto="Cobertura para Piscina"
          pageUrl={pageUrl}
          breadcrumbs={regionalBreadcrumbs}
        />

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Tipos de cobertura para piscina
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Escolha o sistema ideal para a sua piscina em {cidade.nome}.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {TIPOS_COBERTURA.map((item) => (
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
            cobertura de piscina sob medida.
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
