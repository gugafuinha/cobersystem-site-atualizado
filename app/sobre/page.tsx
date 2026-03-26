import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sobre a Cobersystem | Cobertura Retrátil em Policarbonato",
  description: "Conheça a Cobersystem, especialista em cobertura retrátil e abre e fecha em policarbonato com automação via Alexa e sensor de chuva. Inovação e qualidade em cada projeto.",
  keywords: "sobre cobersystem, empresa cobertura retrátil, cobertura policarbonato, automação residencial",
};

export default function Sobre() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Sobre a Cobersystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Somos especialistas em cobertura retrátil e abre e fecha em policarbonato, 
            oferecendo soluções inovadoras com automação inteligente para transformar 
            seus espaços externos.
          </p>
        </section>

        {/* Missão */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Proporcionar conforto e praticidade através de coberturas retráteis inteligentes 
              que permitem controle total do clima, sem perder a ventilação natural. Nossa 
              tecnologia de automação via Alexa e sensor de chuva oferece a melhor experiência 
              em cobertura para áreas externas.
            </p>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Por que escolher a Cobersystem?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Inovação Tecnológica
              </h3>
              <p className="text-gray-600">
                Somos pioneiros em automação residencial para coberturas. Nossos sistemas 
                integrados com Alexa e sensor de chuva oferecem praticidade incomparável.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Qualidade Superior
              </h3>
              <p className="text-gray-600">
                Utilizamos apenas materiais de primeira linha: policarbonato compacto e alveolar, 
                estruturas de alumínio com pintura eletrostática personalizada.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Controle Total do Clima
              </h3>
              <p className="text-gray-600">
                Sistema único de abertura de 0 a 90 graus permite controlar perfeitamente 
                a ventilação, mantendo o conforto em qualquer estação do ano.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600">
                Cada projeto é único. Oferecemos consultoria especializada para encontrar 
                a solução perfeita para seu espaço.
              </p>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Nossos Produtos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Policarbonato Compacto</h3>
              <p className="text-gray-600 mb-4">
                Transparência total ou cores personalizadas. Ideal para máxima luminosidade.
              </p>
              <Link href="/produtos" className="text-blue-600 font-semibold hover:underline">
                Ver detalhes →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Policarbonato Alveolar</h3>
              <p className="text-gray-600 mb-4">
                Excelente isolamento térmico e acústico. Máximo conforto.
              </p>
              <Link href="/produtos" className="text-blue-600 font-semibold hover:underline">
                Ver detalhes →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Automação Inteligente</h3>
              <p className="text-gray-600 mb-4">
                Controle via Alexa, sensor de chuva e controle remoto.
              </p>
              <Link href="/produtos" className="text-blue-600 font-semibold hover:underline">
                Ver detalhes →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e solicite um orçamento gratuito
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

