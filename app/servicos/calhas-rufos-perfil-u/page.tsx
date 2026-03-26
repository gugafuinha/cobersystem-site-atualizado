import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Calhas, Rufos e Perfil U | Acessórios Cobertura | Cobersystem",
  description: "Calhas, rufos e perfil U em alumínio para coberturas. Acessórios de alta qualidade. Pintura eletrostática. Preço e orçamento.",
  keywords: "calhas alumínio, rufos cobertura, perfil u cobertura, acessórios cobertura, calhas preço",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/calhas-rufos-perfil-u',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Calhas, Rufos e Perfil U',
  description: 'Calhas, rufos e perfil U em alumínio para coberturas, com pintura eletrostática personalizada.',
  image: ['https://coberturapolicarbonato.com.br/images/projetos/abre-fecha-alveolar-01.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/calhas-rufos-perfil-u',
  },
};

const faqs = [
  {
    question: 'O que são rufos e perfil U?',
    answer: 'Rufos são peças que vedam e protegem as laterais da cobertura, evitando entrada de água e vento. Perfil U é um acessório estrutural usado para fixação e acabamento. Ambos são essenciais para uma instalação profissional.',
  },
  {
    question: 'As calhas são incluídas na cobertura?',
    answer: 'As calhas podem ser incluídas no projeto da cobertura ou instaladas separadamente. Elas são essenciais para drenagem correta da água da chuva, evitando acúmulo e problemas estruturais.',
  },
];

export default function CalhasRufosPerfilU() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Calhas, Rufos e Perfil U', href: '/servicos/calhas-rufos-perfil-u' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calhas, Rufos e Perfil U
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Acessórios essenciais para coberturas: calhas para drenagem, rufos para vedação e perfil U para 
            acabamento. Todos em alumínio com pintura eletrostática personalizada. Alta qualidade e durabilidade.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Acessórios Essenciais</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Calhas</h3>
                <p className="text-gray-600">Drenagem correta da água da chuva, evitando acúmulo e problemas estruturais.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Rufos</h3>
                <p className="text-gray-600">Vedação e proteção das laterais da cobertura, evitando entrada de água e vento.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Perfil U</h3>
                <p className="text-gray-600">Acessório estrutural para fixação e acabamento profissional.</p>
              </div>
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

