import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cobertura Retrátil em Policarbonato | Abre e Fecha com Automação | Cobersystem",
  description: "Cobertura retrátil em policarbonato com sistema abre e fecha. Automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus. Solicite orçamento!",
  keywords: "cobertura retrátil, cobertura retrátil policarbonato, cobertura abre e fecha, cobertura retrátil área gourmet, cobertura retrátil churrasqueira",
  openGraph: {
    title: "Cobertura Retrátil em Policarbonato | Cobersystem",
    description: "Cobertura retrátil com automação via Alexa e sensor de chuva. Controle total do clima.",
  },
};

/** Ordem: linha 1 (alumínio, intercaladas), linha 2 (alveolar, compacto) — grelha 2×2 */
const cardsRetratil = [
  {
    slug: 'telhas-aluminio',
    nome: 'Cobertura Abre e Fecha com Telhas em Alumínio',
    image: '/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg',
  },
  {
    slug: 'telhas-intercaladas',
    nome: 'Cobertura Abre e Fecha com Telhas Intercaladas',
    image:
      '/images/produtos/cobertura-retratil/intercalada/3c2fdde7-3430-4fed-900a-d69838b09493.jpg',
  },
  {
    slug: 'policarbonato-alveolar',
    nome: 'Cobertura Abre e Fecha com Policarbonato Alveolar',
    image:
      '/images/produtos/cobertura-retratil/alveolar/038c4743-0f19-4063-b8f6-57dc5802ffac.jpg',
  },
  {
    slug: 'policarbonato-compacto',
    nome: 'Cobertura Abre e Fecha com Policarbonato Compacto',
    image: '/images/produtos/cobertura-retratil/compacto/capa.jpg',
  },
] as const;

export default function CoberturaRetratil() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Retrátil em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema abre e fecha com automação inteligente. Controle total do clima 
            com abertura de 0 a 90 graus. Sem perder ventilação, com proteção completa.
          </p>
        </section>

        {/* Produtos — grelha 2×2 (1 coluna no mobile) */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Escolha o tipo de cobertura retrátil
          </h2>
          <div className="mx-auto grid max-w-5xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
            {cardsRetratil.map((item, index) => (
              <Link
                key={item.slug}
                href={`/produtos/cobertura-retratil/${item.slug}`}
                className="group flex h-full min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl"
              >
                <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200/80 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200/60">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-gray-100">
                    <OptimizedImage
                      src={item.image}
                      alt={item.nome}
                      title={item.nome}
                      width={800}
                      height={512}
                      priority={index === 0}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
                    <h3 className="text-lg font-bold leading-snug text-gray-800 transition group-hover:text-blue-600 md:text-xl">
                      {item.nome}
                    </h3>
                    <div className="mt-auto pt-4 text-center">
                      <span className="text-sm font-semibold text-blue-600">
                        Ver detalhes →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre cobertura retrátil?
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

