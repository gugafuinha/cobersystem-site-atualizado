import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura de Alumínio | Telhas e Estrutura | Cobersystem",
  description: "Cobertura em alumínio com telhas e estrutura de alta qualidade. Pintura eletrostática personalizada. Resistente à corrosão. Preço e orçamento.",
  keywords: "cobertura de alumínio, telhas de alumínio, estrutura alumínio cobertura, cobertura alumínio preço, empresa cobertura alumínio",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-aluminio',
  },
  openGraph: {
    title: "Cobertura de Alumínio | Estrutura Resistente e Durável | Cobersystem",
    description: "Cobertura de alumínio com estrutura robusta, acabamento de qualidade e alta durabilidade para áreas residenciais e comerciais.",
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-aluminio',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/projetos/abre-fecha-alveolar-01.jpg',
        width: 1200,
        height: 800,
        alt: 'Cobertura de Alumínio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/projetos/abre-fecha-alveolar-01.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura de Alumínio',
  description: 'Cobertura em alumínio com telhas e estrutura de alta qualidade, pintura eletrostática personalizada.',
  image: ['https://coberturapolicarbonato.com.br/images/projetos/abre-fecha-alveolar-01.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-aluminio',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura de alumínio?',
    answer: 'O preço de uma cobertura de alumínio varia conforme o tamanho, tipo de telha e estrutura. Em média, o investimento fica entre R$ 200 e R$ 400 por m², incluindo estrutura, telhas e instalação.',
  },
  {
    question: 'A cobertura de alumínio enferruja?',
    answer: 'Não! O alumínio é naturalmente resistente à corrosão e não enferruja. Com pintura eletrostática, a durabilidade é ainda maior, mantendo a aparência por muitos anos.',
  },
  {
    question: 'Posso escolher a cor da cobertura de alumínio?',
    answer: 'Sim! Oferecemos pintura eletrostática em diversas cores. Você pode escolher a cor que melhor combina com seu projeto, personalizando completamente a aparência da cobertura.',
  },
];

export default function CoberturaAluminio() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura de Alumínio', href: '/servicos/cobertura-aluminio' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cobertura de Alumínio
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Cobertura em alumínio com telhas e estrutura de alta qualidade. Pintura eletrostática personalizada 
            na cor de sua escolha. Resistente à corrosão e intempéries. Durabilidade superior a 20 anos. 
            Ideal para quem busca qualidade e personalização.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura de Alumínio?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                O alumínio é um dos melhores materiais para coberturas devido à sua resistência à corrosão, 
                leveza e durabilidade. Diferente do ferro, não enferruja, mantendo a aparência e funcionalidade 
                por décadas.
              </p>
              <p className="mb-4">
                Com pintura eletrostática personalizada, você pode escolher a cor exata que combina com seu 
                projeto, criando uma cobertura única e personalizada. A estrutura de alumínio é leve, mas 
                extremamente resistente, suportando grandes cargas e intempéries.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🚫 Não Enferruja</h3>
                <p className="text-gray-600">Alumínio é naturalmente resistente à corrosão, não enferrujando nunca.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🎨 Cores Personalizadas</h3>
                <p className="text-gray-600">Pintura eletrostática em diversas cores, personalizando completamente sua cobertura.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">💪 Alta Resistência</h3>
                <p className="text-gray-600">Estrutura leve mas extremamente resistente, suportando grandes cargas.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">⏰ Durabilidade</h3>
                <p className="text-gray-600">Durabilidade superior a 20 anos, mantendo aparência e funcionalidade.</p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura de alumínio personalizada</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

