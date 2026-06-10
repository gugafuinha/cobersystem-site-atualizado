import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SaoPauloBairroProdutoLayout from '@/components/SaoPauloBairroProdutoLayout';
import { getBairroSaoPaulo } from '@/lib/sao-paulo-bairros';
import {
  getBairroPiscina,
  getSlugsBairrosPiscina,
  CONTEUDO_BAIRROS_PISCINA,
  type SpBairroPiscinaSlug,
} from '@/lib/cobertura-piscina-cidades';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const SEGMENT = 'cobertura-piscina';
const OG_IMAGE = `${BASE}/images/blog/cobertura-piscina-retratil.jpg`;

const TIPOS_COBERTURA = [
  {
    href: '/produtos/cobertura-retratil',
    titulo: 'Cobertura Retrátil',
    texto:
      'Sistema abre e fecha ideal para piscinas — abre totalmente em dias de sol, fecha com automação na chuva.',
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
      'Galeria, especificações técnicas e comparativo entre sistemas de cobertura para piscina.',
  },
] as const;

export async function generateStaticParams() {
  return getSlugsBairrosPiscina().map((bairro) => ({ bairro }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bairro: string }>;
}): Promise<Metadata> {
  const { bairro: slug } = await params;
  const bairroInfo = getBairroPiscina(slug);
  const seo = CONTEUDO_BAIRROS_PISCINA[slug as SpBairroPiscinaSlug];

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
          alt: `Cobertura para piscina — ${bairroInfo.nome}, São Paulo`,
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

export default async function PiscinaSaoPauloBairroPage({
  params,
}: {
  params: Promise<{ bairro: string }>;
}) {
  const { bairro: slug } = await params;
  const bairroInfo = getBairroPiscina(slug);
  const seo = CONTEUDO_BAIRROS_PISCINA[slug as SpBairroPiscinaSlug];

  if (!bairroInfo || !seo) {
    notFound();
  }

  const bairroSP = getBairroSaoPaulo(slug);
  if (!bairroSP) {
    notFound();
  }

  const modelosSection = (
    <div className="grid gap-6 sm:grid-cols-3">
      {TIPOS_COBERTURA.map((item) => (
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
      hubLabel="Cobertura para Piscina"
      h1={`Cobertura para Piscina ${bairroInfo.nome}`}
      seo={seo}
      imageSrc="/images/blog/cobertura-piscina-retratil.jpg"
      imageWidth={1200}
      imageHeight={675}
      modelosHeading="Tipos de cobertura para piscina"
      modelosIntro={`Conheça os sistemas disponíveis para cobertura de piscina no ${bairroInfo.nome}.`}
      modelosSection={modelosSection}
      vejaTambem="retratil"
      theme="blue"
      ctaTitle={`Orçamento no ${bairroInfo.nome}`}
      ctaDescription="Entre em contato e solicite um orçamento personalizado para cobertura de piscina."
    />
  );
}
