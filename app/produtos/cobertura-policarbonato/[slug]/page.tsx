import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import path from 'path';
import { readdir } from 'fs/promises';
import OptimizedImage from '@/components/OptimizedImage';
import ProductSchema from '@/components/ProductSchema';

const foldersPorSlug: Record<string, { folder: string }> = {
  'fixa-alveolar': { folder: 'alveolar' },
  'fixa-compacto': { folder: 'compacto' },
};

async function getGalleryImagesForSlug(slug: string, capaSrc: string) {
  const mapping = foldersPorSlug[slug];
  if (!mapping) return [];

  const dirFsPath = path.join(
    process.cwd(),
    'public',
    'images',
    'produtos',
    'cobertura-policarbonato',
    mapping.folder,
  );

  try {
    const entries = await readdir(dirFsPath, { withFileTypes: true });
    const allowedExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

    const imageFiles = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => allowedExts.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    const imageBaseUrl = `/images/produtos/cobertura-policarbonato/${mapping.folder}`;
    const allUrls = imageFiles.map((file) => `${imageBaseUrl}/${file}`);

    return allUrls.filter((url) => url !== capaSrc);
  } catch {
    return [];
  }
}

const produtos: Record<string, {
  nome: string;
  descricao: string;
  descricaoLonga: string[];
  caracteristicas: string[];
  aplicacoes: string[];
  vantagens: string[];
  imagem: string;
  preco: string;
}> = {
  'fixa-compacto': {
    nome: 'Cobertura Fixa em Policarbonato Compacto',
    descricao: 'Cobertura permanente em policarbonato compacto. Transparência total ou cores personalizadas. Proteção constante contra chuva e sol.',
    descricaoLonga: [
      'A cobertura fixa em policarbonato compacto oferece proteção permanente com máxima transparência. Ideal para áreas que precisam de cobertura constante, como estacionamentos, entradas e áreas de serviço.',
      'Disponível em diversas espessuras (2mm a 10mm) e em versão transparente ou colorida, permite personalização completa do projeto. A proteção UV integrada garante durabilidade e resistência aos raios solares.',
      'A estrutura de alumínio é robusta e personalizada, garantindo segurança e durabilidade por muitos anos. A pintura eletrostática pode ser feita na cor de sua escolha, harmonizando com o ambiente.',
      'Diferente da cobertura retrátil, a fixa oferece proteção permanente sem a possibilidade de abertura. É a escolha ideal para quem busca proteção constante e investimento mais acessível.',
    ],
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Espessuras: 2mm, 4mm, 6mm, 8mm, 10mm',
      'Proteção UV integrada',
      'Resistente a impactos',
      'Proteção permanente',
      'Estrutura de alumínio robusta',
      'Pintura eletrostática personalizada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de estacionamento',
      'Entrada de residência',
      'Área de serviço',
      'Cobertura permanente',
      'Garagem coberta',
      'Área externa fixa',
    ],
    vantagens: [
      'Proteção permanente',
      'Investimento mais acessível',
      'Instalação mais simples',
      'Baixa manutenção',
      'Alta durabilidade',
      'Máxima transparência',
    ],
    imagem:
      '/images/produtos/cobertura-policarbonato/compacto/IMG_2017.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'fixa-alveolar': {
    nome: 'Cobertura Fixa em Policarbonato Alveolar',
    descricao: 'Cobertura fixa com excelente isolamento térmico e acústico. Perfeita para áreas que precisam de proteção constante e conforto.',
    descricaoLonga: [
      'A cobertura fixa em policarbonato alveolar oferece isolamento térmico e acústico superior, sendo ideal para áreas que precisam de proteção permanente com maior conforto.',
      'A estrutura em favo de mel do policarbonato alveolar cria uma barreira natural contra o calor e o frio, mantendo a temperatura do ambiente mais estável. Isso resulta em maior economia de energia.',
      'Além do isolamento térmico, o material também reduz significativamente o ruído externo, criando um ambiente mais tranquilo. Perfeito para áreas próximas a ruas movimentadas.',
      'Disponível em diversas espessuras (4mm a 12mm), oferece diferentes níveis de isolamento conforme a necessidade do projeto. A estrutura de alumínio robusta garante segurança e durabilidade.',
    ],
    caracteristicas: [
      'Isolamento térmico superior',
      'Redução de ruído',
      'Alta resistência',
      'Espessuras: 4mm, 6mm, 8mm, 10mm, 12mm',
      'Proteção permanente',
      'Estrutura de alumínio robusta',
      'Proteção UV integrada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de lazer permanente',
      'Garagem coberta',
      'Área de convivência',
      'Cobertura industrial',
      'Área externa fixa',
      'Entrada coberta',
    ],
    vantagens: [
      'Isolamento térmico superior',
      'Redução de ruído externo',
      'Maior conforto térmico',
      'Economia de energia',
      'Proteção permanente',
      'Investimento acessível',
    ],
    imagem: '/images/produtos/cobertura-policarbonato/fixa-alveolar.jpg',
    preco: 'Solicite orçamento personalizado',
  },
};

export async function generateStaticParams() {
  return Object.keys(produtos).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
    keywords: `cobertura fixa, ${produto.nome.toLowerCase()}, policarbonato, cobertura permanente`,
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
    },
  };
}

export default async function ProdutoFixaDetalhe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const produto = produtos[slug];

  if (!produto) {
    notFound();
  }

  const galleryImages = await getGalleryImagesForSlug(slug, produto.imagem);

  return (
    <>
      <ProductSchema
        name={produto.nome}
        description={produto.descricao}
        image={produto.imagem}
        price={produto.preco}
        url={`https://coberturapolicarbonato.com.br/produtos/cobertura-policarbonato/${slug}`}
      />
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Início</Link>
          {' / '}
          <Link href="/produtos" className="text-blue-600 hover:underline">Produtos</Link>
          {' / '}
          <Link href="/produtos/cobertura-policarbonato" className="text-blue-600 hover:underline">Cobertura em Policarbonato</Link>
          {' / '}
          <span className="text-gray-600">{produto.nome}</span>
        </nav>

        {/* Hero */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <OptimizedImage
                src={produto.imagem}
                alt={`${produto.nome} - Cobertura Fixa em Policarbonato Permanente - Cobersystem`}
                title={`${produto.nome} - Cobersystem`}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {produto.nome}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {produto.descricao}
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {produto.preco}
                </p>
                <Link
                  href="/contato"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Descrição Longa */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sobre o Produto
          </h2>
          <div className="prose prose-lg max-w-none">
            {produto.descricaoLonga.map((paragrafo, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
                {paragrafo}
              </p>
            ))}
          </div>
        </section>

        {galleryImages.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Galeria de Projetos
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {galleryImages.map((src) => {
                const filename = src.split('/').pop() || 'imagem';
                const alt = `${produto.nome} - ${filename}`;

                return (
                  <div
                    key={src}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100"
                  >
                    <OptimizedImage
                      src={src}
                      alt={alt}
                      title={alt}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Características e Aplicações */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Características
              </h3>
              <ul className="space-y-3">
                {produto.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Aplicações
              </h3>
              <ul className="space-y-3">
                {produto.aplicacoes.map((aplicacao, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <span className="text-gray-700 text-lg">{aplicacao}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Principais Vantagens
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {produto.vantagens.map((vantagem, index) => (
              <div key={index} className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">★</span>
                <span className="text-gray-700 text-lg">{vantagem}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre este produto?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
    </>
  );
}

