import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Cobertura Retrátil Zona Leste SP | Vila Prudente, Mooca, Tatuapé | Cobersystem",
  description: "Cobertura retrátil e abre e fecha na Zona Leste de São Paulo. Atendemos Vila Prudente, Mooca, Tatuapé, Penha, Itaquera. Orçamento grátis.",
  keywords: "cobertura zona leste SP, cobertura Vila Prudente, cobertura Mooca, cobertura Tatuapé, cobertura Penha, cobertura Itaquera",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/localizacao/zona-leste',
  },
};

export default function ZonaLestePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Zona Leste', href: '/localizacao/zona-leste' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cobertura Retrátil na Zona Leste de São Paulo
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A Cobersystem atende toda a Zona Leste de São Paulo com coberturas retráteis em policarbonato. 
          Atendemos Vila Prudente, Mooca, Tatuapé, Penha, Itaquera e toda região. Solicite seu orçamento grátis!
        </p>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Bairros Atendidos na Zona Leste</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Vila Prudente</h3>
              <p className="text-gray-600">Coberturas retráteis e fixas em Vila Prudente com automação via Alexa.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mooca</h3>
              <p className="text-gray-600">Atendimento completo em Mooca para áreas gourmet e varandas.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tatuapé</h3>
              <p className="text-gray-600">Coberturas para piscina e área gourmet em Tatuapé.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Penha</h3>
              <p className="text-gray-600">Soluções em cobertura para Penha e região.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Itaquera</h3>
              <p className="text-gray-600">Coberturas retráteis em Itaquera com orçamento grátis.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Coberturas na Zona Leste — Ver por Produto</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/produtos/cobertura-policarbonato/em/sao-paulo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura de Policarbonato</span>
              <span className="text-sm text-gray-600">Cobertura fixa em policarbonato compacto ou alveolar</span>
            </Link>
            <Link href="/produtos/cobertura-retratil/em/sao-paulo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura Retrátil</span>
              <span className="text-sm text-gray-600">Sistema abre e fecha com automação e sensor de chuva</span>
            </Link>
            <Link href="/produtos/cobertura-abre-e-fecha/em/sao-paulo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura Abre e Fecha</span>
              <span className="text-sm text-gray-600">Abertura graduada com motor silencioso e integração Alexa</span>
            </Link>
            <Link href="/produtos/cobertura-termoacustica/em/sao-paulo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura Termoacústica</span>
              <span className="text-sm text-gray-600">Painel sanduíche com isolamento térmico e acústico</span>
            </Link>
          </div>
        </section>

        <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento na Zona Leste</h2>
          <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}

