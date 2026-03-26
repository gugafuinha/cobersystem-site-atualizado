import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura para Corredor Lateral | Policarbonato | Cobersystem",
  description: "Cobertura para corredor lateral em policarbonato. Proteção para passagem lateral da casa. Fixa ou retrátil. Preço e orçamento.",
  keywords: "cobertura corredor lateral, cobertura lateral casa, cobertura passagem lateral, cobertura corredor preço",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-corredor-lateral',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Corredor Lateral',
  description: 'Cobertura em policarbonato para corredor lateral, protegendo passagem lateral da casa.',
  image: ['https://coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-corredor-lateral',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para corredor lateral?',
    answer: 'O preço varia conforme o comprimento e largura do corredor, material escolhido e tipo (fixa ou retrátil). Em média, o investimento fica entre R$ 150 e R$ 350 por m².',
  },
  {
    question: 'Qual o melhor tipo de cobertura para corredor lateral?',
    answer: 'Para corredor lateral, você pode escolher entre cobertura fixa (mais econômica) ou retrátil (mais versátil). A fixa oferece proteção permanente, enquanto a retrátil permite abrir quando quiser ventilação.',
  },
];

export default function CoberturaCorredorLateral() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Corredor Lateral', href: '/servicos/cobertura-corredor-lateral' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cobertura para Corredor Lateral
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Cobertura em policarbonato para corredor lateral da casa. Proteção contra chuva e sol na passagem lateral. 
            Fixa ou retrátil. Estrutura de alumínio resistente. Ideal para proteger corredores e passagens laterais.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura para Corredor Lateral?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Corredores laterais são áreas importantes da casa que muitas vezes ficam desprotegidas. Uma cobertura 
                para corredor lateral oferece proteção contra chuva e sol, permitindo uso confortável da passagem 
                em qualquer clima.
              </p>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

