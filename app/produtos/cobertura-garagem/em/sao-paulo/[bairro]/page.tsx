import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SaoPauloBairroProdutoLayout from '@/components/SaoPauloBairroProdutoLayout';
import { getBairroSaoPaulo } from '@/lib/sao-paulo-bairros';
import {
  getBairroGaragem,
  getSlugsBairrosGaragem,
  CONTEUDO_BAIRROS_GARAGEM,
  type SpBairroGaragemSlug,
} from '@/lib/cobertura-garagem-cidades';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const SEGMENT = 'cobertura-garagem';
const OG_IMAGE = `${BASE}/images/blog/cobertura-policarbonato-guia.png`;

const TIPOS_GARAGEM = [
  {
    href: '/servicos/cobertura-garagem',
    titulo: 'Cobertura para Garagem',
    texto:
      'Solução em policarbonato para 1 ou 2 carros com estrutura alumínio anodizado e proteção UV completa.',
  },
  {
    href: '/produtos/cobertura-policarbonato',
    titulo: 'Cobertura em Policarbonato',
    texto:
      'Cobertura fixa translúcida resistente ao impacto, calor e intempéries — ideal para garagens abertas.',
  },
  {
    href: '/produtos/cobertura-retratil',
    titulo: 'Cobertura Retrátil',
    texto:
      'Sistema abre e fecha para garagens multiuso com automação Alexa e sensor de chuva.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsBairrosGaragem().map((bairro) => ({ bairro }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bairro: string }>;
}): Promise<Metadata> {
  const { bairro: slug } = await params;
  const bairroInfo = getBairroGaragem(slug);
  const seo = CONTEUDO_BAIRROS_GARAGEM[slug as SpBairroGaragemSlug];

  if (!bairroInfo || !seo) {
    return { title: 'Página não encontrada' };
  }

  const path = `/produtos/${SEGMENT}/em/sao-paulo/${bairroInfo.slug}`;
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
          height: 675,
          alt: `Cobertura para garagem — ${bairroInfo.nome}, São Paulo`,
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

export default async function GaragemSaoPauloBairroPage({
  params,
}: {
  params: Promise<{ bairro: string }>;
}) {
  const { bairro: slug } = await params;
  const bairroInfo = getBairroGaragem(slug);
  const seo = CONTEUDO_BAIRROS_GARAGEM[slug as SpBairroGaragemSlug];

  if (!bairroInfo || !seo) {
    notFound();
  }

  const bairroSP = getBairroSaoPaulo(slug);
  if (!bairroSP) {
    notFound();
  }

  const modelosSection = (
    <div className="grid gap-6 sm:grid-cols-3">
      {TIPOS_GARAGEM.map((item) => (
        <Link
          key={item.href}
          href={item.href}
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
      bairro={bairroSP}
      produtoSegment={SEGMENT}
      hubLabel="Cobertura para Garagem"
      h1={`Cobertura para Garagem ${bairroInfo.nome}`}
      seo={seo}
      imageSrc="/images/blog/cobertura-policarbonato-guia.png"
      imageWidth={1200}
      imageHeight={675}
      modelosHeading="Tipos de cobertura para garagem"
      modelosIntro={`Conheça os sistemas disponíveis para garagem no ${bairroInfo.nome}.`}
      modelosSection={modelosSection}
      vejaTambem="policarbonato"
      theme="blue"
      ctaTitle={`Orçamento no ${bairroInfo.nome}`}
      ctaDescription="Entre em contato e solicite um orçamento personalizado para cobertura de garagem."
    />
  );
}
