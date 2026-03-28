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
const SEGMENT = 'cobertura-policarbonato';
const OG_IMAGE = `${BASE}/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg`;

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
  const seo = getConteudoBairroLinha(slug, 'policarbonato');

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
          alt: `Cobertura fixa em policarbonato — ${bairro.nome}, São Paulo`,
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

export default async function PolicarbonatoSaoPauloBairroPage({
  params,
}: {
  params: Promise<{ bairro: string }>;
}) {
  const { bairro: slug } = await params;
  const bairro = getBairroSaoPaulo(slug);
  const seo = getConteudoBairroLinha(slug, 'policarbonato');

  if (!bairro || !seo) {
    notFound();
  }

  const modelosSection = (
    <div className="grid gap-6 md:grid-cols-2">
      <Link
        href="/produtos/cobertura-policarbonato/fixa-compacto"
        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
      >
        <h3 className="mb-2 text-xl font-bold text-gray-800">
          Policarbonato compacto
        </h3>
        <p className="text-gray-600">
          Transparência e proteção permanente — ver página completa com galeria e
          especificações.
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
          Isolamento térmico e acústico superior — ver página completa com galeria
          e especificações.
        </p>
        <span className="mt-4 inline-block font-semibold text-blue-600">
          Ver detalhes →
        </span>
      </Link>
    </div>
  );

  return (
    <SaoPauloBairroProdutoLayout
      bairro={bairro}
      produtoSegment={SEGMENT}
      hubLabel="Cobertura Fixa em Policarbonato"
      h1={`Cobertura em Policarbonato ${bairro.nome}`}
      seo={seo}
      imageSrc="/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg"
      imageWidth={1200}
      imageHeight={900}
      modelosHeading="Modelos da linha"
      modelosIntro={`Conheça os detalhes técnicos de cada solução para o seu projeto no ${bairro.nome}.`}
      modelosSection={modelosSection}
      vejaTambem="policarbonato"
      theme="blue"
      ctaTitle={`Orçamento no ${bairro.nome}`}
      ctaDescription="Entre em contato e solicite um orçamento personalizado para cobertura em policarbonato."
    />
  );
}
