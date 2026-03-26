import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Cobertura Retrátil São Bernardo | ABC Paulista | Cobersystem",
  description: "Cobertura retrátil e abre e fecha em São Bernardo do Campo. Policarbonato com automação via Alexa. Orçamento grátis.",
  keywords: "cobertura São Bernardo, cobertura São Bernardo do Campo, cobertura ABC, cobertura São Bernardo orçamento",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/localizacao/sao-bernardo',
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

