import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ProductSchema from '@/components/ProductSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import path from 'path';
import { readdir } from 'fs/promises';

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
  'telhas-aluminio': {
    nome: 'Cobertura Abre e Fecha - Telhas em Alumínio',
    descricao:
      'Sistema abre e fecha com telhas em alumínio de alta resistência. Pintura eletrostática personalizada na cor que o cliente preferir para atender as exigências e seguir a estética da casa.',
    descricaoLonga: [
      'A cobertura abre e fecha com telhas em alumínio une resistência estrutural e acabamento sob medida. A pintura eletrostática em qualquer cor permite integrar o projeto à fachada, à área gourmet ou à varanda.',
      'O alumínio de alta qualidade oferece longa vida útil, baixa oxidação em uso correto e manutenção simples. O mecanismo permite abertura de 0 a 90 graus para controlar ventilação, sol e conforto térmico.',
      'O sistema pode receber automação opcional (motor, controle remoto ou integração com casa inteligente), conforme especificação do projeto. É indicado para quem busca telhas opacas, vedação eficiente contra chuva e visual uniforme.',
    ],
    caracteristicas: [
      'Telhas em alumínio de alta qualidade',
      'Pintura eletrostática personalizada em qualquer cor',
      'Abertura de 0 a 90 graus para controle total de ventilação',
      'Estrutura de alumínio reforçada',
      'Sistema abre e fecha automatizado opcional',
      'Proteção completa contra chuva e sol',
    ],
    aplicacoes: [
      'Área de churrasqueira e área gourmet',
      'Varanda de apartamento',
      'Pergolado residencial',
      'Garagem coberta',
    ],
    vantagens: [
      'Personalização de cores',
      'Alta durabilidade do alumínio',
      'Controle fino de ventilação',
      'Proteção contra intempéries',
      'Automação disponível sob consulta',
    ],
    imagem: '/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'telhas-intercaladas': {
    nome: 'Cobertura Abre e Fecha com Telhas Intercaladas',
    descricao:
      'Sistema inovador com telhas intercaladas em Policarbonato e Alumínio. Combina transparência e proteção, permitindo entrada de luz natural com áreas opacas.',
    descricaoLonga: [
      'Este sistema combina telhas em policarbonato transparente e alumínio em um mesmo plano, alternando faixas de luz natural com zonas opacas. O resultado é equilíbrio entre iluminação, privacidade e proteção.',
      'O alumínio pode ser pintado eletrostaticamente na cor desejada; o policarbonato conta com proteção UV. A abertura de 0 a 90 graus mantém o controle de clima típico da cobertura retrátil Cobersystem.',
      'É uma solução indicada para áreas gourmet, varandas e pergolados em que se deseja luminosidade sem abrir mão de trechos com sombreamento ou acabamento metálico.',
    ],
    caracteristicas: [
      'Telhas intercaladas: Policarbonato transparente + Alumínio',
      'Equilíbrio perfeito entre luz natural e proteção',
      'Abertura de 0 a 90 graus',
      'Pintura eletrostática personalizada no alumínio',
      'Policarbonato com proteção UV',
      'Estrutura de alumínio de alta resistência',
    ],
    aplicacoes: [
      'Área gourmet com iluminação natural',
      'Varanda que precisa de luz controlada',
      'Pergolado moderno',
      'Área de lazer',
    ],
    vantagens: [
      'Luz natural e zonas opacas no mesmo sistema',
      'Design contemporâneo',
      'Controle de abertura total',
      'Materiais de alta performance',
    ],
    imagem:
      '/images/produtos/cobertura-retratil/intercalada/3c2fdde7-3430-4fed-900a-d69838b09493.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'policarbonato-compacto': {
    nome: 'Cobertura Abre e Fecha com Policarbonato Compacto',
    descricao:
      'Telhas em policarbonato compacto, totalmente transparentes ou coloridas. Alta luminosidade, resistência a impactos e abertura de 0 a 90 graus.',
    descricaoLonga: [
      'A cobertura abre e fecha com policarbonato compacto é ideal para quem prioriza transparência, entrada de luz e visão do céu, com opção de versões coloridas conforme o projeto.',
      'O material compacto oferece boa resistência mecânica e pode ser especificado em diferentes espessuras (por exemplo 2 mm em projetos residenciais típicos). A proteção UV integrada ajuda a preservar o aspecto e a durabilidade das telhas.',
      'O sistema mantém abertura de 0 a 90 graus para ventilação e controle de sol e chuva. A estrutura em alumínio é dimensionada para cada obra, com pintura eletrostática opcional na cor desejada.',
    ],
    caracteristicas: [
      'Policarbonato compacto de alta qualidade',
      'Transparência total ou cores personalizadas',
      'Proteção UV integrada',
      'Resistente a impactos',
      'Abertura de 0 a 90 graus',
      'Estrutura de alumínio personalizada',
      'Pintura eletrostática na cor desejada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de churrasqueira e área gourmet',
      'Varanda de apartamento',
      'Pergolado residencial',
      'Quintal e jardim',
      'Espaço de convivência',
    ],
    vantagens: [
      'Máxima entrada de luz natural',
      'Controle total do clima',
      'Proteção contra chuva e sol',
      'Ventilação quando aberto',
      'Automação disponível (Alexa + sensor de chuva)',
      'Alta durabilidade',
    ],
    imagem: '/images/produtos/cobertura-retratil/compacto/capa.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'policarbonato-compacto-2mm': {
    nome: 'Cobertura Retrátil em Policarbonato Compacto 2mm',
    descricao: 'Totalmente transparente ou colorido. Ideal para máxima luminosidade e proteção visual.',
    descricaoLonga: [
      'A cobertura retrátil em policarbonato compacto 2mm é a solução ideal para quem busca máxima transparência e luminosidade. Com espessura de 2mm, oferece resistência superior mantendo a transparência total.',
      'Disponível em versão totalmente transparente ou em diversas cores personalizadas, permite que você escolha o visual perfeito para seu projeto. A proteção UV integrada garante durabilidade e proteção contra os raios solares.',
      'O sistema de abertura de 0 a 90 graus permite controle total da ventilação. Em dias quentes, você pode abrir completamente para manter o ambiente fresco. Em dias de chuva, fecha totalmente para proteção.',
      'A estrutura de alumínio é personalizada para cada projeto, garantindo resistência e durabilidade. A pintura eletrostática pode ser feita na cor de sua escolha, harmonizando perfeitamente com o ambiente.',
    ],
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Espessura: 2mm (alta resistência)',
      'Proteção UV integrada',
      'Resistente a impactos',
      'Abertura de 0 a 90 graus',
      'Estrutura de alumínio personalizada',
      'Pintura eletrostática na cor desejada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de churrasqueira',
      'Varanda de apartamento',
      'Pergolado residencial',
      'Área gourmet',
      'Quintal e jardim',
      'Espaço de convivência',
    ],
    vantagens: [
      'Máxima luminosidade natural',
      'Controle total do clima',
      'Proteção contra chuva e sol',
      'Manutenção da ventilação',
      'Automação disponível (Alexa + sensor de chuva)',
      'Alta durabilidade',
    ],
    imagem:
      '/images/produtos/cobertura-retratil/compacto/IMG_8096.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'policarbonato-alveolar': {
    nome: 'Cobertura Abre e Fecha com Policarbonato Alveolar',
    descricao:
      'Sistema abre e fecha com policarbonato alveolar, com excelente isolamento térmico e acústico. Opção de cores personalizadas conforme o projeto.',
    descricaoLonga: [
      'As telhas em policarbonato alveolar combinam leveza estrutural com células internas que melhoram o isolamento térmico e acústico em relação ao compacto, mantendo o sistema abre e fecha com abertura de 0 a 90 graus.',
      'Há opção de cores personalizadas no policarbonato, alinhadas ao projeto. A proteção UV integrada reduz o amarelecimento e prolonga a vida útil das telhas.',
      'É a escolha indicada para áreas de lazer, quintais e espaços de convivência em que se busca mais conforto térmico e menor ruído externo, sem abrir mão da ventilação controlada da cobertura retrátil.',
    ],
    caracteristicas: [
      'Policarbonato Alveolar de alta qualidade',
      'Isolamento térmico superior - mantém ambiente mais fresco',
      'Isolamento acústico - reduz ruídos externos',
      'Opção de cores personalizadas',
      'Abertura de 0 a 90 graus',
      'Proteção UV integrada',
      'Estrutura de alumínio personalizada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de lazer residencial',
      'Quintal e jardim',
      'Espaço de convivência',
      'Área externa coberta',
    ],
    vantagens: [
      'Isolamento térmico e acústico superiores',
      'Cores sob medida',
      'Controle total de ventilação',
      'Proteção UV',
      'Automação disponível',
    ],
    imagem:
      '/images/produtos/cobertura-retratil/alveolar/038c4743-0f19-4063-b8f6-57dc5802ffac.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'automacao-inteligente': {
    nome: 'Cobertura Retrátil com Automação Inteligente',
    descricao: 'Controle total via Alexa, sensor de chuva automático e controle remoto. Tecnologia de ponta.',
    descricaoLonga: [
      'A automação inteligente transforma sua cobertura retrátil em um sistema de última geração. Com integração Alexa, você controla sua cobertura apenas com comandos de voz, sem precisar se levantar.',
      'O sensor de chuva é um diferencial importante. Ele detecta a umidade no ar e fecha automaticamente a cobertura quando começa a chover, mesmo que você não esteja em casa. Sua área externa fica sempre protegida.',
      'Além do controle via Alexa e sensor automático, você também pode usar o controle remoto ou aplicativo no celular. Controle sua cobertura de qualquer lugar do mundo, com total segurança e praticidade.',
      'O sistema permite programação automática. Você pode definir horários específicos para abrir e fechar, criar rotinas personalizadas e integrar com outros dispositivos de automação residencial.',
    ],
    caracteristicas: [
      'Controle via Alexa (comando de voz)',
      'Sensor de chuva automático',
      'Controle remoto',
      'Aplicativo para celular',
      'Fechamento automático em caso de chuva',
      'Abertura programada',
      'Integração com automação residencial',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Qualquer cobertura retrátil',
      'Sistema integrado',
      'Automação residencial completa',
      'Casa inteligente',
    ],
    vantagens: [
      'Controle por voz (Alexa)',
      'Proteção automática contra chuva',
      'Controle remoto de qualquer lugar',
      'Programação personalizada',
      'Integração com outros dispositivos',
      'Praticidade e segurança',
    ],
    imagem:
      '/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
    preco: 'Solicite orçamento personalizado',
  },
};

const foldersPorSlug: Record<
  string,
  { folder: string; capa: string }
> = {
  'telhas-aluminio': {
    folder: 'aluminio',
    capa: '/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg',
  },
  'telhas-intercaladas': {
    folder: 'intercalada',
    capa: '/images/produtos/cobertura-retratil/intercalada/3c2fdde7-3430-4fed-900a-d69838b09493.jpg',
  },
  'policarbonato-alveolar': {
    folder: 'alveolar',
    capa: '/images/produtos/cobertura-retratil/alveolar/038c4743-0f19-4063-b8f6-57dc5802ffac.jpg',
  },
  'policarbonato-compacto': {
    folder: 'compacto',
    capa: '/images/produtos/cobertura-retratil/compacto/capa.jpg',
  },
  'policarbonato-compacto-2mm': {
    folder: 'compacto',
    capa: '/images/produtos/cobertura-retratil/compacto/IMG_8096.jpg',
  },
  'automacao-inteligente': {
    folder: 'compacto',
    capa: '/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
  },
};

async function getGalleryImagesForSlug(slug: string, capaSrc: string) {
  const mapping = foldersPorSlug[slug];
  if (!mapping) return [];

  const dirFsPath = path.join(
    process.cwd(),
    'public',
    'images',
    'produtos',
    'cobertura-retratil',
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

    const imageBaseUrl = `/images/produtos/cobertura-retratil/${mapping.folder}`;
    const allUrls = imageFiles.map((file) => `${imageBaseUrl}/${file}`);

    // A capa já é exibida no hero; a galeria deve mostrar apenas as restantes fotos.
    return allUrls.filter((url) => url !== capaSrc);
  } catch {
    return [];
  }
}

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
    keywords: `cobertura retrátil, ${produto.nome.toLowerCase()}, policarbonato, automação`,
    alternates: {
      canonical: `https://coberturapolicarbonato.com.br/produtos/cobertura-retratil/${slug}`,
    },
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
      url: `https://coberturapolicarbonato.com.br/produtos/cobertura-retratil/${slug}`,
      images: [
        {
          url: `https://coberturapolicarbonato.com.br${produto.imagem}`,
          width: 1200,
          height: 900,
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

export default async function ProdutoDetalhe({ params }: { params: Promise<{ slug: string }> }) {
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
        url={`https://coberturapolicarbonato.com.br/produtos/cobertura-retratil/${slug}`}
      />
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            { label: 'Cobertura Retrátil', href: '/produtos/cobertura-retratil' },
            { label: produto.nome, href: `/produtos/cobertura-retratil/${slug}` },
          ]}
        />

        {/* Hero */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src={produto.imagem}
                alt={`${produto.nome} - Cobertura Retrátil em Policarbonato com Automação - Cobersystem`}
                title={`${produto.nome} - Cobersystem`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
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

