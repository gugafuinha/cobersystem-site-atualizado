import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura Fixa Policarbonato Alveolar | Preço e Isolamento | Cobersystem",
  description: "Cobertura fixa em policarbonato alveolar. Excelente isolamento térmico e acústico. Proteção permanente. Preço por m² e orçamento. Ideal para áreas que precisam de conforto térmico.",
  keywords: "cobertura fixa policarbonato alveolar, policarbonato alveolar preço, cobertura termoacústica, isolamento térmico cobertura, cobertura fixa SP",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-alveolar',
  },
  openGraph: {
    title: "Cobertura Fixa Policarbonato Alveolar | Preço e Isolamento | Cobersystem",
    description: "Cobertura fixa em policarbonato alveolar com excelente isolamento térmico e acústico. Proteção permanente e conforto.",
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-alveolar',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg',
        width: 1200,
        height: 800,
        alt: 'Cobertura Fixa em Policarbonato Alveolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Fixa Policarbonato Alveolar',
  description: 'Cobertura fixa em policarbonato alveolar com excelente isolamento térmico e acústico.',
  image: ['https://coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-fixa-policarbonato-alveolar',
  },
};

const faqs = [
  {
    question: 'Quanto custa cobertura fixa em policarbonato alveolar?',
    answer: 'O preço de uma cobertura fixa em policarbonato alveolar varia conforme o tamanho e espessura escolhida (4mm, 6mm ou 10mm). Em média, o investimento fica entre R$ 180 e R$ 350 por m², incluindo estrutura de alumínio e instalação.',
  },
  {
    question: 'Qual a diferença entre policarbonato alveolar e compacto?',
    answer: 'O policarbonato alveolar tem câmaras de ar internas que proporcionam excelente isolamento térmico e acústico. O compacto é totalmente transparente e oferece máxima luminosidade. O alveolar é ideal para áreas que precisam de conforto térmico, enquanto o compacto é melhor para máxima transparência.',
  },
  {
    question: 'O policarbonato alveolar isola do calor?',
    answer: 'Sim! O policarbonato alveolar oferece excelente isolamento térmico devido às câmaras de ar internas. Isso reduz significativamente a temperatura interna, especialmente em dias quentes, oferecendo maior conforto.',
  },
];

export default function CoberturaFixaAlveolar() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura Fixa Policarbonato Alveolar', href: '/servicos/cobertura-fixa-policarbonato-alveolar' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg"
                  alt="Cobertura fixa em policarbonato alveolar - Cobersystem"
                  title="Cobertura fixa em policarbonato alveolar"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura Fixa em Policarbonato Alveolar
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cobertura fixa em policarbonato alveolar com excelente isolamento térmico e acústico. Proteção permanente
                  com máximo conforto. Ideal para áreas que precisam de isolamento térmico superior.
                  Estrutura de alumínio resistente e duradoura.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Isolamento térmico superior</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Isolamento acústico para ambientes mais tranquilos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Alta resistência a impactos e intempéries</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Proteção UV para pessoas e móveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é Policarbonato Alveolar?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                O policarbonato alveolar é um material composto por múltiplas camadas com câmaras de ar internas. 
                Essas câmaras criam um excelente isolamento térmico e acústico, tornando-o ideal para áreas que 
                precisam de maior conforto térmico.
              </p>
              <p className="mb-4">
                Diferente do policarbonato compacto (totalmente transparente), o alveolar oferece isolamento 
                superior, reduzindo significativamente a temperatura interna em dias quentes e mantendo calor 
                em dias frios. É a escolha ideal para quem busca conforto térmico sem abrir mão da proteção.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🌡️ Isolamento Térmico</h3>
                <p className="text-gray-600">Excelente isolamento térmico, reduzindo temperatura interna em até 40%.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🔇 Isolamento Acústico</h3>
                <p className="text-gray-600">Reduz ruídos externos, oferecendo ambiente mais silencioso e tranquilo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">💪 Alta Resistência</h3>
                <p className="text-gray-600">Resistente a impactos, granizo e intempéries, com durabilidade superior a 15 anos.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Proteção UV</h3>
                <p className="text-gray-600">Bloqueia até 99% dos raios UV, protegendo pessoas e móveis.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Espessuras Disponíveis</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4mm</h3>
                <p className="text-gray-600">Ideal para áreas pequenas e médias. Boa relação custo-benefício.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6mm</h3>
                <p className="text-gray-600">Mais isolamento térmico. Ideal para áreas médias e grandes.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">10mm</h3>
                <p className="text-gray-600">Máximo isolamento. Ideal para áreas grandes e que precisam de máximo conforto.</p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura fixa com isolamento térmico superior</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

