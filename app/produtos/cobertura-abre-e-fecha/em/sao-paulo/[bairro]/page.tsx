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
const SEGMENT = 'cobertura-abre-e-fecha';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg`;

const MODELOS = [
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
      'Abre e fecha com alveolar para conforto térmico — galeria e características.',
  },
  {
    slug: 'policarbonato-compacto',
    titulo: 'Policarbonato compacto',
    texto:
      'Transparência e abertura graduada — página técnica completa.',
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
  const seo = getConteudoBairroLinha(slug, 'abreEFecha');

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
          height: 900,
          alt: `Cobertura abre e fecha — ${bairro.nome}, São Paulo`,
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

export default async function AbreEFechaSaoPauloBairroPage({
  params,
}: {
  params: Promise<{ bairro: string }>;
}) {
  const { bairro: slug } = await params;
  const bairro = getBairroSaoPaulo(slug);
  const seo = getConteudoBairroLinha(slug, 'abreEFecha');

  if (!bairro || !seo) {
    notFound();
  }

  const modelosSection = (
    <div className="grid gap-6 sm:grid-cols-2">
      {MODELOS.map((item) => (
        <Link
          key={item.slug}
          href={`/produtos/cobertura-retratil/${item.slug}`}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
        >
          <h3 className="mb-2 text-xl font-bold text-gray-800">{item.titulo}</h3>
          <p className="text-gray-600">{item.texto}</p>
          <span className="mt-4 inline-block font-semibold text-blue-600">
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
      hubLabel="Cobertura Abre e Fecha"
      h1={`Cobertura Abre e Fecha ${bairro.nome}`}
      seo={seo}
      imageSrc="/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg"
      imageWidth={1200}
      imageHeight={900}
      modelosHeading="Modelos da linha"
      modelosIntro={`Conheça as variantes de cobertura abre e fecha para o seu projeto no ${bairro.nome}.`}
      modelosSection={modelosSection}
      vejaTambem="retratil"
      theme="blue"
      ctaTitle={`Orçamento no ${bairro.nome}`}
      ctaDescription="Entre em contato e solicite um orçamento personalizado para cobertura abre e fecha."
    />
  );
}
