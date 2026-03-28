import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SaoPauloBairroProdutoLayout from '@/components/SaoPauloBairroProdutoLayout';
import {
  getBairroSaoPaulo,
  getSlugsBairrosSaoPaulo,
} from '@/lib/sao-paulo-bairros';
import { getConteudoBairroLinha } from '@/lib/sao-paulo-bairros-conteudo';

const BASE = 'https://coberturapolicarbonato.com.br';
const SEGMENT = 'cobertura-termoacustica';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-termoacustica/b54559ed-ffaf-43eb-a738-e9d347954f5a.jpg`;

const MODELOS = [
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
  return getSlugsBairrosSaoPaulo().map((bairro) => ({ bairro }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bairro: string }>;
}): Promise<Metadata> {
  const { bairro: slug } = await params;
  const bairro = getBairroSaoPaulo(slug);
  const seo = getConteudoBairroLinha(slug, 'termoacustica');

  if (!bairro || !seo) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/${SEGMENT}/em/sao-paulo/${bairro.slug}`;
  const url = `${BASE}${path}`;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 800,
          alt: `Cobertura termoacústica — ${bairro.nome}, São Paulo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function TermoacusticaSaoPauloBairroPage({
  params,
}: {
  params: Promise<{ bairro: string }>;
}) {
  const { bairro: slug } = await params;
  const bairro = getBairroSaoPaulo(slug);
  const seo = getConteudoBairroLinha(slug, 'termoacustica');

  if (!bairro || !seo) {
    notFound();
  }

  const modelosSection = (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {MODELOS.map((item) => (
        <Link
          key={item.slug}
          href={`/produtos/cobertura-termoacustica/${item.slug}`}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-md"
        >
          <h3 className="mb-2 text-xl font-bold text-gray-800">{item.titulo}</h3>
          <p className="text-gray-600">{item.texto}</p>
          <span className="mt-4 inline-block font-semibold text-orange-600">
            Ver detalhes →
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <SaoPauloBairroProdutoLayout
      bairro={bairro}
      produtoSegment={SEGMENT}
      hubLabel="Cobertura Termoacústica"
      h1={`Cobertura Termoacústica ${bairro.nome}`}
      seo={seo}
      imageSrc="/images/produtos/cobertura-termoacustica/b54559ed-ffaf-43eb-a738-e9d347954f5a.jpg"
      imageWidth={1200}
      imageHeight={800}
      modelosHeading="Tipos de cobertura sanduíche"
      modelosIntro={`Conheça as variantes de painel termoacústico para o seu projeto no ${bairro.nome}.`}
      modelosSection={modelosSection}
      vejaTambem="termoacustica"
      theme="orange"
      ctaTitle={`Orçamento no ${bairro.nome}`}
      ctaDescription="Entre em contato e solicite um orçamento personalizado para cobertura termoacústica sanduíche."
    />
  );
}
