import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Cobertura Retrátil Zona Oeste SP | Pinheiros, Vila Madalena, Butantã | Cobersystem",
  description: "Cobertura retrátil e abre e fecha na Zona Oeste de São Paulo. Atendemos Pinheiros, Vila Madalena, Butantã, Lapa. Orçamento grátis.",
  keywords: "cobertura zona oeste SP, cobertura Pinheiros, cobertura Vila Madalena, cobertura Butantã, cobertura Lapa",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/localizacao/zona-oeste',
  },
};

export default function ZonaOestePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'Zona Oeste', href: '/localizacao/zona-oeste' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cobertura Retrátil na Zona Oeste de São Paulo
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A Cobersystem atende toda a Zona Oeste de São Paulo com coberturas retráteis em policarbonato. 
          Atendemos Pinheiros, Vila Madalena, Butantã, Lapa e toda região. Solicite seu orçamento grátis!
        </p>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Bairros Atendidos na Zona Oeste</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pinheiros</h3>
              <p className="text-gray-600">Coberturas retráteis em Pinheiros com automação via Alexa.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Vila Madalena</h3>
              <p className="text-gray-600">Soluções em cobertura para Vila Madalena e região.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Butantã</h3>
              <p className="text-gray-600">Coberturas para área gourmet em Butantã com orçamento grátis.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lapa</h3>
              <p className="text-gray-600">Atendimento completo em Lapa para varandas e áreas gourmet.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Coberturas na Zona Oeste — Ver por Produto</h2>
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
          <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento na Zona Oeste</h2>
          <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}

