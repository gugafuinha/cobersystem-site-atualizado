import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Cobertura Retrátil São Bernardo | ABC Paulista | Cobersystem",
  description: "Cobertura retrátil e abre e fecha em São Bernardo do Campo. Policarbonato com automação via Alexa. Orçamento grátis.",
  keywords: "cobertura São Bernardo, cobertura São Bernardo do Campo, cobertura ABC, cobertura São Bernardo orçamento",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/localizacao/sao-bernardo',
  },
};

export default function SaoBernardoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
          { label: 'São Bernardo', href: '/localizacao/sao-bernardo' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cobertura Retrátil em São Bernardo do Campo
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A Cobersystem atende São Bernardo do Campo com coberturas retráteis em policarbonato. 
          Sistema abre e fecha com automação via Alexa. Solicite seu orçamento grátis!
        </p>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Produtos Disponíveis em São Bernardo do Campo</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/produtos/cobertura-policarbonato/em/sao-bernardo-do-campo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura de Policarbonato</span>
              <span className="text-sm text-gray-600">Cobertura fixa em policarbonato compacto ou alveolar</span>
            </Link>
            <Link href="/produtos/cobertura-retratil/em/sao-bernardo-do-campo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura Retrátil</span>
              <span className="text-sm text-gray-600">Sistema abre e fecha com automação e sensor de chuva</span>
            </Link>
            <Link href="/produtos/cobertura-abre-e-fecha/em/sao-bernardo-do-campo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura Abre e Fecha</span>
              <span className="text-sm text-gray-600">Abertura graduada com motor silencioso e integração Alexa</span>
            </Link>
            <Link href="/produtos/cobertura-termoacustica/em/sao-bernardo-do-campo" className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition">
              <span className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition">Cobertura Termoacústica</span>
              <span className="text-sm text-gray-600">Painel sanduíche com isolamento térmico e acústico</span>
            </Link>
          </div>
        </section>

        <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento em São Bernardo</h2>
          <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}

