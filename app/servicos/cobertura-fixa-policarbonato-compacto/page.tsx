import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura Fixa Policarbonato Compacto | Transparência Total | Cobersystem",
  description: "Cobertura fixa em policarbonato compacto 2mm. Totalmente transparente ou colorido. Máxima luminosidade e proteção visual. Preço por m² e orçamento.",
  keywords: "cobertura fixa policarbonato compacto, policarbonato compacto 2mm, cobertura transparente, cobertura fixa preço, policarbonato compacto SP",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-compacto',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Fixa Policarbonato Compacto',
  description: 'Cobertura fixa em policarbonato compacto 2mm com transparência total ou cores personalizadas.',
  image: ['https://coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-compacto',
  },
};

const faqs = [
  {
    question: 'Quanto custa cobertura fixa em policarbonato compacto?',
    answer: 'O preço de uma cobertura fixa em policarbonato compacto 2mm varia conforme o tamanho e cor escolhida. Em média, o investimento fica entre R$ 150 e R$ 300 por m², incluindo estrutura de alumínio e instalação. Cores personalizadas podem ter custo adicional.',
  },
  {
    question: 'O policarbonato compacto é totalmente transparente?',
    answer: 'Sim! O policarbonato compacto 2mm oferece transparência de até 90%, permitindo máxima entrada de luz natural. Também está disponível em cores como bronze, azul, verde e outras, para quem prefere menos transparência.',
  },
  {
    question: 'Qual a diferença entre policarbonato compacto e alveolar?',
    answer: 'O policarbonato compacto é totalmente sólido e transparente, oferecendo máxima luminosidade. O alveolar tem câmaras de ar internas e oferece melhor isolamento térmico. O compacto é ideal para quem quer máxima transparência, enquanto o alveolar é melhor para isolamento térmico.',
  },
];

export default function CoberturaFixaCompacto() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura Fixa Policarbonato Compacto', href: '/servicos/cobertura-fixa-policarbonato-compacto' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cobertura Fixa em Policarbonato Compacto 2mm
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Cobertura fixa em policarbonato compacto com transparência total ou cores personalizadas. 
            Máxima luminosidade e proteção visual. Ideal para quem quer transparência e proteção. 
            Estrutura de alumínio resistente.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é Policarbonato Compacto?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                O policarbonato compacto é um material totalmente sólido, sem câmaras de ar internas. 
                Oferece transparência de até 90%, permitindo máxima entrada de luz natural, similar ao vidro, 
                mas com muito mais resistência a impactos.
              </p>
              <p className="mb-4">
                Diferente do policarbonato alveolar (que tem isolamento térmico), o compacto oferece máxima 
                transparência e luminosidade. É ideal para áreas que precisam de muita luz natural, como 
                varandas, áreas gourmet e garagens.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Transparência Total</h3>
                <p className="text-gray-600">Até 90% de transparência, permitindo máxima entrada de luz natural.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🎨 Cores Personalizadas</h3>
                <p className="text-gray-600">Disponível em transparente, bronze, azul, verde e outras cores.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">💪 Alta Resistência</h3>
                <p className="text-gray-600">Resistente a impactos, granizo e intempéries, muito mais resistente que vidro.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Proteção UV</h3>
                <p className="text-gray-600">Bloqueia até 99% dos raios UV, protegendo pessoas e móveis.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fotos de Obras</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <OptimizedImage src="/images/blog/cobertura-retratil-area-gourmet.jpg" alt="Cobertura fixa policarbonato compacto transparente" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/blog/cobertura-policarbonato-tipos.jpg" alt="Policarbonato compacto varanda" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/projetos/abre-fecha-alveolar-01.jpg" alt="Estrutura alumínio policarbonato compacto" width={400} height={300} className="rounded-lg" />
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura fixa com máxima transparência</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

