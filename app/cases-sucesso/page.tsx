import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cases de Sucesso | Projetos de Cobertura em Policarbonato | Cobersystem",
  description: "Conheça nossos cases de sucesso em cobertura retrátil e cobertura em policarbonato. Projetos residenciais e comerciais com antes e depois. Veja depoimentos reais de clientes satisfeitos.",
  keywords: "cases de sucesso cobertura, projetos cobertura policarbonato, antes e depois cobertura, cobertura retratil instalada, testemunhos cobertura, depoimentos clientes, transformação área gourmet",
  openGraph: {
    title: "Cases de Sucesso | Cobersystem",
    description: "Projetos reais de cobertura retrátil e cobertura em policarbonato. Veja o antes e depois!",
  },
};

export default function CasesDeSucesso() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cases de Sucesso
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça projetos reais de cobertura retrátil e cobertura em policarbonato. 
            Veja o antes e depois e leia depoimentos de clientes satisfeitos.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Projetos Entregues</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-700">Satisfação</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-700">Anos de Experiência</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-700">Garantia</div>
          </div>
        </section>

        {/* Galeria Completa de Projetos */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Galeria de Projetos Realizados
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Veja mais projetos de cobertura em policarbonato instalados em São Paulo e região
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 4, 5, 7, 10, 12, 15, 17, 18, 19, 23, 27, 28, 29, 31, 32, 37, 38, 39, 40, 41, 42, 43, 45, 47, 48].map((num) => (
              <div key={num} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <OptimizedImage
                  src={`/images/cases-antes-depois/${num}.jpg`}
                  alt={`Projeto de Cobertura em Policarbonato ${num} - Cobersystem`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Projeto #{num}</p>
                    <p className="text-sm">Cobertura em Policarbonato</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <OptimizedImage
                src="/images/cases-antes-depois/33img_6499.jpg"
                alt="Projeto Especial de Cobertura em Policarbonato - Cobersystem"
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Projeto Especial</p>
                  <p className="text-sm">Cobertura em Policarbonato</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <OptimizedImage
                src="/images/cases-antes-depois/34.jpg"
                alt="Projeto de Cobertura em Policarbonato #34 - Cobersystem"
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Projeto #34</p>
                  <p className="text-sm">Cobertura em Policarbonato</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer transformar seu espaço também?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e solicite um orçamento personalizado. Vamos tornar seu projeto realidade!
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Solicitar Orçamento Grátis
          </Link>
        </section>
      </div>
    </main>
  );
}
