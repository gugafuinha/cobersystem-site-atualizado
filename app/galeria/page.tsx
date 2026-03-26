import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Galeria de Projetos | Coberturas Retráteis | Cobersystem",
  description: "Veja nossa galeria completa de projetos de cobertura retrátil em policarbonato. Área gourmet, churrasqueira, piscina, varanda e muito mais.",
  keywords: "galeria cobertura retrátil, projetos cobertura policarbonato, fotos cobertura, obras cobersystem",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/galeria',
  },
};

const projetos = [
  {
    categoria: 'Área Gourmet',
    imagens: [
      '/images/blog/cobertura-retratil-area-gourmet.jpg',
      '/images/blog/churrasqueira.jpg',
    ],
  },
  {
    categoria: 'Churrasqueira',
    imagens: [
      '/images/blog/churrasqueira.jpg',
    ],
  },
  {
    categoria: 'Varanda',
    imagens: [
      '/images/blog/cobertura-abre-fecha.jpg',
      '/images/blog/cobertura-policarbonato-tipos.jpg',
    ],
  },
  {
    categoria: 'Policarbonato Compacto',
    imagens: [
      '/images/blog/cobertura-retratil-area-gourmet.jpg',
      '/images/blog/cobertura-abre-fecha.jpg',
    ],
  },
  {
    categoria: 'Policarbonato Alveolar',
    imagens: [
      '/images/projetos/fixa-01.jpg',
      '/images/projetos/fixa-02.jpg',
      '/images/projetos/fixa-03.jpg',
    ],
  },
  {
    categoria: 'Estrutura de Alumínio',
    imagens: [
      '/images/projetos/abre-fecha-alveolar-01.jpg',
    ],
  },
];

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Galeria', href: '/galeria' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Galeria de Projetos
        </h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Conheça nossos projetos de cobertura retrátil em policarbonato. 
          Área gourmet, churrasqueira, piscina, varanda e muito mais.
        </p>

        <div className="space-y-16">
          {projetos.map((projeto, index) => (
            <section key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {projeto.categoria}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {projeto.imagens.map((imagem, imgIndex) => (
                  <div key={imgIndex} className="relative h-64 rounded-lg overflow-hidden group">
                    <OptimizedImage
                      src={imagem}
                      alt={`${projeto.categoria} - Projeto ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-semibold">{projeto.categoria}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 bg-[#D4AF37] text-black rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer um Projeto Personalizado?
          </h2>
          <p className="text-xl mb-8 text-gray-900">
            Entre em contato e solicite seu orçamento grátis
          </p>
          <Link
            href="/contato"
            className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}

