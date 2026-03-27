import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ProductSchema from '@/components/ProductSchema';
import Breadcrumbs from '@/components/Breadcrumbs';

const produtos: Record<
  string,
  {
    nome: string;
    descricao: string;
    descricaoLonga: string[];
    caracteristicas: string[];
    aplicacoes: string[];
    espessuras: string[];
    vantagens: string[];
    imagem: string;
    preco: string;
  }
> = {
  'sanduiche-eps': {
    nome: 'Cobertura Termoacústica com EPS (Isopor)',
    descricao:
      'Sistema sanduíche com núcleo de EPS (isopor de alta densidade). Excelente custo-benefício com ótimo isolamento térmico e acústico.',
    descricaoLonga: [
      'A cobertura sanduíche com núcleo em EPS (poliestireno expandido) de alta densidade é uma das soluções mais econômicas para ganhar conforto térmico e reduzir ruído em galpões, residências e áreas de lazer.',
      'As chapas metálicas externas (alumínio ou aço) protegem o núcleo e dão acabamento industrial ou arquitetônico. O conjunto é leve, o que facilita transporte e montagem em obra.',
      'É indicada quando se busca equilíbrio entre investimento, isolamento térmico (até cerca de 10°C de diferença em cenários típicos) e redução de ruído de até cerca de 30 dB, conforme projeto e espessura.',
    ],
    caracteristicas: [
      'Núcleo em EPS (Poliestireno Expandido) de alta densidade',
      'Isolamento térmico de até 10°C de diferença',
      'Redução de ruído de até 30 dB',
      'Revestimento externo em alumínio ou aço',
      'Leve e resistente',
      'Instalação rápida e limpa',
    ],
    aplicacoes: [
      'Galpões industriais e comerciais',
      'Residências',
      'Áreas de lazer',
      'Coberturas residenciais',
    ],
    espessuras: ['30mm', '50mm', '100mm'],
    vantagens: [
      'Excelente custo-benefício',
      'Isolamento térmico e acústico equilibrados',
      'Leveza estrutural',
      'Instalação ágil',
    ],
    imagem: '/images/projetos/termoacustica-01.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'sanduiche-pu': {
    nome: 'Cobertura Termoacústica com PU (Poliuretano)',
    descricao:
      'Sistema sanduíche premium com núcleo de Poliuretano. Máxima eficiência em isolamento térmico e acústico.',
    descricaoLonga: [
      'O núcleo em poliuretano (PU) oferece maior eficiência isolante por espessura em comparação com muitas soluções convencionais, sendo preferido em projetos que exigem controle térmico rigoroso.',
      'É amplamente utilizado em câmaras frias, galpões, comércios e residências de alto padrão onde o conforto e a economia energética são prioridade. A redução de ruído pode alcançar até cerca de 40 dB, conforme especificação.',
      'O revestimento externo pode ser personalizado. A durabilidade e a resistência mecânica do sistema sanduíche com PU atendem exigências elevadas de desempenho.',
    ],
    caracteristicas: [
      'Núcleo em PU (Poliuretano) - maior eficiência',
      'Isolamento térmico superior - até 15°C de diferença',
      'Redução de ruído de até 40 dB',
      'Maior durabilidade e resistência',
      'Revestimento externo personalizado',
      'Ideal para ambientes que exigem controle térmico rigoroso',
    ],
    aplicacoes: [
      'Câmaras frias',
      'Galpões industriais',
      'Ambientes comerciais',
      'Residências de alto padrão',
    ],
    espessuras: ['30mm', '50mm', '100mm'],
    vantagens: [
      'Máximo desempenho térmico',
      'Isolamento acústico elevado',
      'Longa vida útil',
      'Ideal para uso intensivo',
    ],
    imagem: '/images/projetos/termoacustica-02.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'sanduiche-la-rocha': {
    nome: 'Cobertura Termoacústica com Lã de Rocha',
    descricao:
      'Sistema sanduíche com núcleo de Lã de Rocha. Máxima proteção acústica e térmica com propriedades anti-chama.',
    descricaoLonga: [
      'A lã de rocha é incombustível e amplamente utilizada quando há exigência de segurança contra fogo e isolamento acústico de alto nível, como em fábricas, galpões e áreas com maior risco.',
      'O desempenho acústico pode alcançar reduções de até cerca de 45 dB, dependendo do sistema completo e das espessuras. O conforto térmico também é elevado.',
      'É a escolha natural para indústrias, ambientes comerciais e qualquer obra em que normas de incêndio e isolamento sejam determinantes na especificação da cobertura.',
    ],
    caracteristicas: [
      'Núcleo em Lã de Rocha - material incombustível',
      'Isolamento acústico excepcional - até 45 dB',
      'Isolamento térmico de alta eficiência',
      'Proteção contra incêndio (material classe A)',
      'Resistente a altas temperaturas',
      'Ideal para ambientes com requisitos de segurança contra incêndio',
    ],
    aplicacoes: [
      'Galpões industriais',
      'Áreas com risco de incêndio',
      'Ambientes comerciais',
      'Fábricas e indústrias',
    ],
    espessuras: ['50mm', '100mm'],
    vantagens: [
      'Proteção anti-chama',
      'Isolamento acústico superior',
      'Alta performance térmica',
      'Conformidade com exigências rigorosas',
    ],
    imagem: '/images/projetos/termoacustica-03.jpg',
    preco: 'Solicite orçamento personalizado',
  },
};

export async function generateStaticParams() {
  return Object.keys(produtos).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const produto = produtos[slug];

  if (!produto) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: `${produto.nome} | Cobersystem`,
    description: produto.descricao,
    keywords: `cobertura termoacústica, cobertura sanduíche, ${produto.nome.toLowerCase()}, isolamento`,
    alternates: {
      canonical: `https://coberturapolicarbonato.com.br/produtos/cobertura-termoacustica/${slug}`,
    },
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
      url: `https://coberturapolicarbonato.com.br/produtos/cobertura-termoacustica/${slug}`,
      images: [
        {
          url: `https://coberturapolicarbonato.com.br${produto.imagem}`,
          width: 1200,
          height: 800,
          alt: produto.nome,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: produto.nome,
      description: produto.descricao,
      images: [`https://coberturapolicarbonato.com.br${produto.imagem}`],
    },
  };
}

export default async function ProdutoTermoacusticaDetalhe({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const produto = produtos[slug];

  if (!produto) {
    notFound();
  }

  return (
    <>
      <ProductSchema
        name={produto.nome}
        description={produto.descricao}
        image={produto.imagem}
        price={produto.preco}
        url={`https://coberturapolicarbonato.com.br/produtos/cobertura-termoacustica/${slug}`}
      />
      <main className="min-h-screen py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Produtos', href: '/produtos' },
              { label: 'Cobertura Termoacústica', href: '/produtos/cobertura-termoacustica' },
              { label: produto.nome, href: `/produtos/cobertura-termoacustica/${slug}` },
            ]}
          />

          <section className="mb-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <OptimizedImage
                  src={produto.imagem}
                  alt={`${produto.nome} - Cobertura termoacústica sanduíche - Cobersystem`}
                  title={`${produto.nome} - Cobersystem`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="mb-4 text-4xl font-bold text-gray-800">
                  {produto.nome}
                </h1>
                <p className="mb-6 text-xl text-gray-600">{produto.descricao}</p>
                <div className="mb-6 rounded-lg bg-orange-50 p-6">
                  <p className="mb-2 text-2xl font-bold text-orange-600">
                    {produto.preco}
                  </p>
                  <Link
                    href="/contato"
                    className="inline-block rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Sobre o Produto
            </h2>
            <div className="prose prose-lg max-w-none">
              {produto.descricaoLonga.map((paragrafo, index) => (
                <p
                  key={index}
                  className="mb-4 text-lg leading-relaxed text-gray-700"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  Características
                </h3>
                <ul className="space-y-3">
                  {produto.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-xl text-orange-600">✓</span>
                      <span className="text-lg text-gray-700">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  Aplicações
                </h3>
                <ul className="mb-6 space-y-3">
                  {produto.aplicacoes.map((aplicacao, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-xl text-orange-600">•</span>
                      <span className="text-lg text-gray-700">{aplicacao}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  Espessuras disponíveis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {produto.espessuras.map((esp) => (
                    <span
                      key={esp}
                      className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700"
                    >
                      {esp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 rounded-lg bg-orange-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              Principais vantagens
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {produto.vantagens.map((vantagem, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-3 text-2xl text-orange-600">★</span>
                  <span className="text-lg text-gray-700">{vantagem}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg bg-orange-600 p-12 text-center text-white">
            <h2 className="mb-4 text-4xl font-bold">
              Quer saber mais sobre este produto?
            </h2>
            <p className="mb-8 text-xl text-orange-100">
              Entre em contato e solicite um orçamento personalizado
            </p>
            <Link
              href="/contato"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50"
            >
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
