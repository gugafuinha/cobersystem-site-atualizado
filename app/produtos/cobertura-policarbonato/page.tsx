import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import { CIDADES_COBERTURA_POLICARBONATO } from '@/lib/cobertura-policarbonato-cidades';

export const metadata: Metadata = {
  title: "Cobertura Fixa em Policarbonato | Cobersystem",
  description: "Cobertura fixa em policarbonato compacto e alveolar. Proteção permanente com alta qualidade. Ideal para áreas que precisam de cobertura constante.",
  keywords: "cobertura fixa policarbonato, cobertura fixa, policarbonato compacto, policarbonato alveolar, cobertura permanente",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/produtos/cobertura-policarbonato',
  },
  openGraph: {
    title: "Cobertura Fixa em Policarbonato | Cobersystem",
    description: "Cobertura fixa em policarbonato com alta qualidade e durabilidade.",
    url: 'https://coberturapolicarbonato.com.br/produtos/cobertura-policarbonato',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura Fixa em Policarbonato Alveolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg'],
  },
};

const produtosFixa = [
  {
    id: 'fixa-compacto',
    nome: 'Cobertura Fixa em Policarbonato Compacto',
    slug: 'fixa-compacto',
    descricao: 'Cobertura permanente em policarbonato compacto. Transparência total ou cores personalizadas. Proteção constante contra chuva e sol.',
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Proteção permanente',
      'Resistente a impactos',
      'Proteção UV integrada',
      'Estrutura de alumínio robusta',
    ],
    aplicacoes: [
      'Área de estacionamento',
      'Entrada de residência',
      'Área de serviço',
      'Cobertura permanente',
    ],
    image:
      '/images/produtos/cobertura-policarbonato/compacto/IMG_2017.jpg',
  },
  {
    id: 'fixa-alveolar',
    nome: 'Cobertura Fixa em Policarbonato Alveolar',
    slug: 'fixa-alveolar',
    descricao: 'Cobertura fixa com excelente isolamento térmico e acústico. Perfeita para áreas que precisam de proteção constante e conforto.',
    caracteristicas: [
      'Isolamento térmico superior',
      'Redução de ruído',
      'Alta resistência',
      'Proteção permanente',
      'Estrutura de alumínio robusta',
    ],
    aplicacoes: [
      'Área de lazer permanente',
      'Garagem coberta',
      'Área de convivência',
      'Cobertura industrial',
    ],
    image: '/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg',
  },
];

export default function CoberturaFixa() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            { label: 'Cobertura Fixa em Policarbonato', href: '/produtos/cobertura-policarbonato' },
          ]}
        />

        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Fixa em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proteção permanente com alta qualidade. Cobertura fixa em policarbonato 
            compacto e alveolar para áreas que precisam de proteção constante.
          </p>
        </section>

        <section className="mb-16 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <h2 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
            Atendimento por região
          </h2>
          <p className="mb-4 text-gray-600">
            Páginas com informações da linha de cobertura em policarbonato na sua
            cidade:
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {CIDADES_COBERTURA_POLICARBONATO.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/produtos/cobertura-policarbonato/em/${c.slug}`}
                  className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:ring-blue-200"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Produtos */}
        <section className="mb-16 space-y-10 md:space-y-12">
          {produtosFixa.map((produto, index) => (
            <article key={produto.id} className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                  <div className="relative w-full h-72 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={produto.image}
                      alt={produto.nome}
                      fill
                      priority={index === 0}
                      className="object-cover object-center"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col gap-5">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {produto.nome}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {produto.descricao}
                    </p>
                    <div className="grid grid-cols-1 gap-6 border-t border-gray-100 pt-5 md:grid-cols-2 md:gap-x-8">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Características
                        </h3>
                        <ul className="space-y-2">
                          {produto.caracteristicas.map((caracteristica, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-blue-600">✓</span>
                              <span className="text-gray-700">{caracteristica}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Aplicações
                        </h3>
                        <ul className="space-y-2">
                          {produto.aplicacoes.map((aplicacao, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-blue-600">•</span>
                              <span className="text-gray-700">{aplicacao}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href={`/produtos/cobertura-policarbonato/${produto.slug}`}
                      className="inline-block bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 rounded-lg"
                    >
                      Ver Detalhes Completos →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Comparação */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Cobertura Fixa vs Retrátil
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Cobertura Fixa
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Proteção permanente</li>
                <li>✓ Custo mais baixo</li>
                <li>✓ Instalação mais simples</li>
                <li>✗ Sem controle de ventilação</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Cobertura Retrátil
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Controle total do clima</li>
                <li>✓ Ventilação quando necessário</li>
                <li>✓ Automação inteligente</li>
                <li>✗ Investimento maior</li>
              </ul>
            </div>
          </div>
        </section>

        <ProductVejaTambem current="policarbonato" />

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre cobertura fixa?
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
  );
}

