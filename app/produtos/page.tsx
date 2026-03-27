import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Produtos | Cobertura Retrátil em Policarbonato | Cobersystem",
  description: "Conheça nossos produtos: cobertura retrátil em policarbonato compacto e alveolar, com automação via Alexa e sensor de chuva. Estruturas de alumínio personalizadas.",
  keywords: "cobertura retrátil policarbonato, cobertura abre e fecha, policarbonato compacto, policarbonato alveolar, automação Alexa, sensor chuva",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/produtos',
  },
};

const produtosItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Produtos Cobersystem',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Cobertura Retrátil',
      url: 'https://coberturapolicarbonato.com.br/produtos/cobertura-retratil',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Cobertura em Policarbonato',
      url: 'https://coberturapolicarbonato.com.br/produtos/cobertura-policarbonato',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cobertura Termoacústica',
      url: 'https://coberturapolicarbonato.com.br/produtos/cobertura-termoacustica',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Veneziana em Policarbonato',
      url: 'https://coberturapolicarbonato.com.br/produtos/veneziana-policarbonato',
    },
  ],
};

export default function Produtos() {
  return (
    <main className="min-h-screen py-12">
      <Script
        id="schema-produtos-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(produtosItemListSchema) }}
      />
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
          ]}
        />

        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cobertura retrátil e fixa em policarbonato com automação inteligente. 
            Soluções completas para transformar seus espaços externos.
          </p>
        </section>

        {/* Categorias */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Link href="/produtos/cobertura-retratil" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg"
                  alt="Cobertura Abre e Fecha com Telhas em Alumínio"
                  title="Cobertura Retrátil"
                  width={800}
                  height={512}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-4 text-3xl font-bold text-gray-800 transition group-hover:text-blue-600">
                  Cobertura Retrátil
                </h2>
                <p className="text-gray-600 mb-4">
                  Sistema abre e fecha com automação via Alexa e sensor de chuva. 
                  Controle total do clima com abertura de 0 a 90 graus.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Policarbonato Compacto 2mm</li>
                  <li>✓ Policarbonato Alveolar</li>
                  <li>✓ Automação Inteligente</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Produtos Retráteis →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/produtos/cobertura-policarbonato" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg"
                  alt="Cobertura fixa em policarbonato"
                  title="Cobertura em Policarbonato"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover object-[50%_45%]"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-4 text-3xl font-bold text-gray-800 transition group-hover:text-blue-600">
                  Cobertura em Policarbonato
                </h2>
                <p className="text-gray-600 mb-4">
                  Proteção permanente com alta qualidade. Cobertura fixa em policarbonato 
                  compacto e alveolar para áreas que precisam de proteção constante.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Policarbonato Compacto</li>
                  <li>✓ Policarbonato Alveolar</li>
                  <li>✓ Proteção Permanente</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Coberturas em Policarbonato →
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Novos Produtos */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Link href="/produtos/cobertura-termoacustica" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-termoacustica/b54559ed-ffaf-43eb-a738-e9d347954f5a.jpg"
                  alt="Cobertura Termoacústica — cobertura sanduíche com isolamento térmico e acústico"
                  title="Cobertura Termoacústica"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover object-[50%_42%]"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-4 text-3xl font-bold text-gray-800 transition group-hover:text-blue-600">
                  Cobertura Termoacústica
                </h2>
                <p className="text-gray-600 mb-4">
                  Cobertura sanduíche com isolamento térmico e acústico superior. 
                  Ideal para conforto total em ambientes residenciais e comerciais.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Isolamento Térmico</li>
                  <li>✓ Isolamento Acústico</li>
                  <li>✓ Sistema Sanduíche</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Coberturas Termoacústicas →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/produtos/veneziana-policarbonato" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/veneziana/veneziana.jpg"
                  alt="Veneziana em Policarbonato"
                  title="Veneziana em Policarbonato"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover object-[50%_58%]"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-4 text-3xl font-bold text-gray-800 transition group-hover:text-blue-600">
                  Veneziana em Policarbonato
                </h2>
                <p className="text-gray-600 mb-4">
                  Fechamento lateral ventilado para galpões, quadras e áreas externas. 
                  Permite ventilação controlada mantendo proteção.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Ventilação Controlada</li>
                  <li>✓ Fechamento Lateral</li>
                  <li>✓ Ideal para Galpões</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Venezianas em Policarbonato →
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Diferenciais */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Diferenciais da Cobersystem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Controle de Clima</h3>
              <p className="text-gray-600">
                Abertura de 0 a 90 graus para controle total da ventilação
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Automação</h3>
              <p className="text-gray-600">
                Alexa, sensor de chuva e controle remoto integrados
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Ventilação Natural</h3>
              <p className="text-gray-600">
                Cobertura sem perder a ventilação natural do ambiente
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre nossos produtos?
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

