import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog | Cobertura Retrátil em Policarbonato | Dicas e Informações",
  description: "Aprenda sobre cobertura retrátil, abre e fecha em policarbonato, automação residencial, dicas de instalação e muito mais. Conteúdo exclusivo da Cobersystem.",
  keywords: "blog cobertura retrátil, dicas cobertura policarbonato, automação residencial, sensor chuva, área gourmet, pergolado",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/blog',
  },
};

// Artigos do blog - datas atualizadas para 2026
const artigos = [
  {
    id: 1,
    slug: 'cobertura-retratil-guia-completo',
    titulo: 'Cobertura Retrátil: Guia Completo 2026',
    descricao: 'Tudo que você precisa saber sobre cobertura retrátil em policarbonato. Vantagens, funcionamento e como escolher a melhor opção.',
    data: '2026-01-05',
    categoria: 'Guia',
    palavrasChave: ['cobertura retrátil', 'policarbonato', 'guia completo'],
    imagem: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
  {
    id: 2,
    slug: 'cobertura-abre-fecha-vantagens',
    titulo: 'Cobertura Abre e Fecha: Vantagens e Como Funciona',
    descricao: 'Descubra as principais vantagens do sistema de cobertura abre e fecha. Controle total do clima sem perder ventilação.',
    data: '2026-01-12',
    categoria: 'Informações',
    palavrasChave: ['cobertura abre e fecha', 'ventilação', 'controle clima'],
    imagem: '/images/blog/cobertura-abre-fecha.jpg',
  },
  {
    id: 3,
    slug: 'cobertura-policarbonato-preco-tipos',
    titulo: 'Cobertura em Policarbonato: Preço, Tipos e Instalação',
    descricao: 'Conheça os tipos de policarbonato, faixa de preços e processo de instalação. Tudo para tomar a melhor decisão.',
    data: '2026-01-19',
    categoria: 'Informações',
    palavrasChave: ['cobertura policarbonato', 'preço', 'tipos', 'instalação'],
    imagem: '/images/blog/cobertura-policarbonato-tipos.jpg',
  },
  {
    id: 4,
    slug: 'cobertura-retratil-churrasqueira',
    titulo: 'Cobertura Retrátil para Churrasqueira: Vale a Pena?',
    descricao: 'Descubra por que a cobertura retrátil é a melhor opção para sua área de churrasqueira. Proteção e ventilação.',
    data: '2026-01-26',
    categoria: 'Aplicações',
    palavrasChave: ['cobertura churrasqueira', 'área gourmet', 'proteção'],
    imagem: '/images/blog/churrasqueira.jpg',
  },
  {
    id: 5,
    slug: 'automacao-alexa-sensor-chuva',
    titulo: 'Automação Residencial: Cobertura com Alexa e Sensor de Chuva',
    descricao: 'Como funciona a automação inteligente. Controle via Alexa e fechamento automático com sensor de chuva.',
    data: '2026-02-02',
    categoria: 'Tecnologia',
    palavrasChave: ['automação', 'Alexa', 'sensor chuva', 'casa inteligente'],
    imagem: '/images/blog/automacao-alexa.jpg',
  },
  {
    id: 6,
    slug: 'pergolado-vs-cobertura-retratil',
    titulo: 'Pergolado vs Cobertura Retrátil: Qual Escolher?',
    descricao: 'Comparação completa entre pergolado tradicional e cobertura retrátil. Vantagens e desvantagens de cada opção.',
    data: '2026-02-09',
    categoria: 'Comparação',
    palavrasChave: ['pergolado', 'cobertura retrátil', 'comparação'],
    imagem: '/images/blog/pergolado-vs-cobertura.jpg',
  },
  {
    id: 10,
    slug: 'teto-retratil-automatico-como-funciona-precos',
    titulo: 'Teto Retrátil Automático: Como Funciona e Preços 2026',
    descricao: 'Guia completo sobre teto retrátil automático: como funciona, sensor de chuva, Alexa, preços por m² e onde instalar em SP.',
    data: '2026-06-10',
    categoria: 'Guia',
    palavrasChave: ['teto retrátil automático', 'telhado retrátil', 'teto retrátil preço'],
    imagem: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
  {
    id: 11,
    slug: 'fechamento-de-varanda-tipos-precos',
    titulo: 'Fechamento de Varanda: Tipos, Preços 2026 e Qual Escolher',
    descricao: 'Compare vidro, policarbonato e alumínio para fechar a varanda. Preços por m² em SP, regras de condomínio e qual escolher.',
    data: '2026-06-10',
    categoria: 'Guia',
    palavrasChave: ['fechamento de varanda', 'fechar varanda', 'cobertura para varanda'],
    imagem: '/images/blog/cobertura-abre-fecha.jpg',
  },
  {
    id: 12,
    slug: 'pergolado-bioclimatico-o-que-e-vale-a-pena-precos',
    titulo: 'Pergolado Bioclimático: O Que É, Vale a Pena e Preços 2026',
    descricao: 'Tudo sobre pergolado bioclimático em 2026: lâminas orientáveis, comparação com cobertura retrátil, preços por m² em SP.',
    data: '2026-06-10',
    categoria: 'Guia',
    palavrasChave: ['pergolado bioclimático', 'pergolado bioclimático preço', 'pergolado de alumínio'],
    imagem: '/images/blog/pergolado-vs-cobertura.jpg',
  },
  {
    id: 13,
    slug: 'toldo-retratil-vs-cobertura-retratil-qual-escolher',
    titulo: 'Toldo Retrátil vs Cobertura Retrátil: Qual Escolher? [2026]',
    descricao: 'Comparação completa: toldo ou cobertura retrátil? Proteção, durabilidade, preços e quando cada um faz sentido.',
    data: '2026-06-10',
    categoria: 'Comparação',
    palavrasChave: ['toldo retrátil', 'toldo vs cobertura retrátil', 'toldo motorizado'],
    imagem: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
  {
    id: 8,
    slug: 'cobertura-para-piscina-tipos-precos-guia',
    titulo: 'Cobertura para Piscina: Tipos, Preços e Qual a Melhor Opção [2026]',
    descricao: 'Guia completo sobre cobertura para piscina em 2026. Compare tipos (retrátil, fixa, policarbonato), preços por m², vantagens e como escolher a ideal para sua casa.',
    data: '2026-05-27',
    categoria: 'Guia Completo',
    palavrasChave: ['cobertura para piscina', 'cobertura piscina retrátil', 'cobertura piscina preço'],
    imagem: '/images/blog/cobertura-piscina-retratil.jpg',
  },
  {
    id: 9,
    slug: 'cobertura-area-gourmet-tipos-precos-guia',
    titulo: 'Cobertura para Área Gourmet: Tipos, Preços e Como Escolher [2026]',
    descricao: 'Guia completo sobre cobertura para área gourmet em 2026. Compare retrátil, fixa e policarbonato, veja tabela de preços por m² e saiba qual é a melhor opção para seu espaço.',
    data: '2026-05-27',
    categoria: 'Guia Completo',
    palavrasChave: ['cobertura para área gourmet', 'cobertura área gourmet preço', 'cobertura área gourmet retrátil'],
    imagem: '/images/produtos/cobertura-retratil/intercalada/IMG_8455.jpg',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Blog Cobersystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo exclusivo sobre cobertura retrátil, policarbonato, automação residencial 
            e muito mais. Aprenda tudo para tomar a melhor decisão.
          </p>
        </section>

        {/* Artigos */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos
              .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
              .map((artigo) => (
              <Link 
                key={artigo.id}
                href={`/blog/${artigo.slug}`}
                className="group"
              >
                <article className="relative rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-80">
                  {/* Imagem de fundo via Next.js Image (AVIF/WebP automático) */}
                  <Image
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Overlay escuro com transparência */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300"></div>
                  
                  {/* Conteúdo */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {artigo.categoria}
                      </span>
                      <span className="text-gray-200 text-sm">
                        {new Date(artigo.data).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-[#D4AF37] transition">
                      {artigo.titulo}
                    </h2>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {artigo.descricao}
                    </p>
                    <span className="text-[#8A6A00] font-semibold group-hover:underline">
                      Ler mais →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Tem alguma dúvida?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e tire todas suas dúvidas sobre cobertura retrátil
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Falar com Especialista
          </Link>
        </section>
      </div>
    </main>
  );
}

