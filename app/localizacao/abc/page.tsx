import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Cobertura Retrátil ABC | Santo André, São Bernardo, São Caetano | Cobersystem",
  description: "Cobertura retrátil e abre e fecha no ABC Paulista. Atendemos Santo André, São Bernardo do Campo, São Caetano. Orçamento grátis.",
  keywords: "cobertura ABC, cobertura Santo André, cobertura São Bernardo, cobertura São Caetano, cobertura ABC Paulista",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/localizacao/abc',
  },
};

export default function ABCPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'ABC', href: '/localizacao/abc' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cobertura Retrátil no ABC Paulista
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A Cobersystem atende todo o ABC Paulista com coberturas retráteis em policarbonato. 
          Atendemos Santo André, São Bernardo do Campo, São Caetano e toda região. Solicite seu orçamento grátis!
        </p>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Cidades Atendidas no ABC</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Santo André</h3>
              <p className="text-gray-600">Coberturas retráteis em Santo André com automação via Alexa.</p>
              <Link href="/localizacao/santo-andre" className="text-[#D4AF37] hover:underline text-sm">
                Ver mais →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">São Bernardo</h3>
              <p className="text-gray-600">Soluções em cobertura para São Bernardo do Campo.</p>
              <Link href="/localizacao/sao-bernardo" className="text-[#D4AF37] hover:underline text-sm">
                Ver mais →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">São Caetano</h3>
              <p className="text-gray-600">Coberturas para área gourmet em São Caetano.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento no ABC</h2>
          <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}

