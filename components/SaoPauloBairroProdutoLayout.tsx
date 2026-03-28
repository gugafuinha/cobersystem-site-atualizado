import type { ReactNode } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import type { ProductVejaTambemCurrent } from '@/components/ProductVejaTambem';
import type { BairroSaoPauloInfo } from '@/lib/sao-paulo-bairros';
import type { SeoBairroLinha } from '@/lib/sao-paulo-bairros-conteudo';

export type SaoPauloBairroTheme = 'blue' | 'orange';

export interface SaoPauloBairroProdutoLayoutProps {
  bairro: BairroSaoPauloInfo;
  produtoSegment: string;
  hubLabel: string;
  h1: string;
  seo: SeoBairroLinha;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  modelosHeading: string;
  modelosIntro: string;
  modelosSection: ReactNode;
  vejaTambem: ProductVejaTambemCurrent;
  theme: SaoPauloBairroTheme;
  ctaTitle: string;
  ctaDescription: string;
}

const themeClasses = {
  blue: {
    btn: 'bg-blue-600 hover:bg-blue-700',
    link: 'text-blue-600',
    ctaBg: 'bg-blue-600',
    ctaMuted: 'text-blue-100',
    ctaBtn: 'text-blue-600 hover:bg-blue-50',
  },
  orange: {
    btn: 'bg-orange-600 hover:bg-orange-700',
    link: 'text-orange-600',
    ctaBg: 'bg-orange-600',
    ctaMuted: 'text-orange-100',
    ctaBtn: 'text-orange-600 hover:bg-orange-50',
  },
} as const;

export default function SaoPauloBairroProdutoLayout({
  bairro,
  produtoSegment,
  hubLabel,
  h1,
  seo,
  imageSrc,
  imageWidth,
  imageHeight,
  modelosHeading,
  modelosIntro,
  modelosSection,
  vejaTambem,
  theme,
  ctaTitle,
  ctaDescription,
}: SaoPauloBairroProdutoLayoutProps) {
  const t = themeClasses[theme];
  const base = `/produtos/${produtoSegment}`;
  const pathBairro = `${base}/em/sao-paulo/${bairro.slug}`;

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            { label: hubLabel, href: base },
            {
              label: 'São Paulo',
              href: `${base}/em/sao-paulo`,
            },
            { label: bairro.nome, href: pathBairro },
          ]}
        />

        <section className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src={imageSrc}
                alt={`${h1} - Cobersystem`}
                title={h1}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                {h1}
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                {seo.paragrafos.map((p, i) => (
                  <p key={i} className="mb-4 leading-relaxed last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href="/contato"
                className={`mt-6 inline-block rounded-lg px-8 py-3 font-semibold text-white transition ${t.btn}`}
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            {modelosHeading}
          </h2>
          <p className="mb-6 text-lg text-gray-600">{modelosIntro}</p>
          {modelosSection}
        </section>

        <ProductVejaTambem current={vejaTambem} />

        <section
          className={`rounded-lg p-12 text-center text-white ${t.ctaBg}`}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{ctaTitle}</h2>
          <p className={`mb-8 text-xl ${t.ctaMuted}`}>{ctaDescription}</p>
          <Link
            href="/contato"
            className={`inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold shadow-lg transition ${t.ctaBtn}`}
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
