import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SaoPauloBairroProdutoLayout from '@/components/SaoPauloBairroProdutoLayout';
import { getBairroSaoPaulo } from '@/lib/sao-paulo-bairros';
import {
  getBairroPergolado,
  getSlugsBairrosPergolado,
  CONTEUDO_BAIRROS_PERGOLADO,
  type SpBairroPergoladoSlug,
} from '@/lib/cobertura-pergolado-cidades';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const SEGMENT = 'cobertura-pergolado';
const OG_IMAGE = `${BASE}/images/blog/pergolado-vs-cobertura.jpg`;

const TIPOS_PERGOLADO = [
  {
    href: '/servicos/cobertura-pergolado',
    titulo: 'Pergolado Bioclimático',
    texto:
      'Lâminas orientáveis motorizadas para controle de luz, ventilação e proteção contra chuva.',
  },
  {
    href: '/produtos/cobertura-retratil',
    titulo: 'Cobertura Retrátil',
    texto:
      'Sistema abre e fecha com automação Alexa e sensor de chuva para áreas externas de alto padrão.',
  },
  {
    href: '/produtos/cobertura-policarbonato',
    titulo: 'Cobertura em Policarbonato',
    texto:
      'Cobertura fixa translúcida com excelente proteção UV e custo-benefício para varandas e terraços.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsBairrosPergolado().map((bairro) => ({ bairro }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bairro: string }>;
}): Promise<Metadata> {
  const { bairro: slug } = await params;
  const bairroInfo = getBairroPergolado(slug);
  const seo = CONTEUDO_BAIRROS_PERGOLADO[slug as SpBairroPergoladoSlug];

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
          alt: `Pergolado bioclimático — ${bairroInfo.nome}, São Paulo`,
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

export default async function PergoladoSaoPauloBairroPage({
  params,
}: {
  params: Promise<{ bairro: string }>;
}) {
  const { bairro: slug } = await params;
  const bairroInfo = getBairroPergolado(slug);
  const seo = CONTEUDO_BAIRROS_PERGOLADO[slug as SpBairroPergoladoSlug];

  if (!bairroInfo || !seo) {
    notFound();
  }

  const bairroSP = getBairroSaoPaulo(slug);
  if (!bairroSP) {
    notFound();
  }

  const modelosSection = (
    <div className="grid gap-6 sm:grid-cols-3">
      {TIPOS_PERGOLADO.map((item) => (
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
      hubLabel="Pergolado Bioclimático"
      h1={`Pergolado Bioclimático ${bairroInfo.nome}`}
      seo={seo}
      imageSrc="/images/blog/pergolado-vs-cobertura.jpg"
      imageWidth={1200}
      imageHeight={675}
      modelosHeading="Sistemas de cobertura para área externa"
      modelosIntro={`Conheça os sistemas disponíveis para pergolado e cobertura no ${bairroInfo.nome}.`}
      modelosSection={modelosSection}
      vejaTambem="retratil"
      theme="blue"
      ctaTitle={`Orçamento no ${bairroInfo.nome}`}
      ctaDescription="Entre em contato e solicite um orçamento personalizado para pergolado bioclimático."
    />
  );
}
