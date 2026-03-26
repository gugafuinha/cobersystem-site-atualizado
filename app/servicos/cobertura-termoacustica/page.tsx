import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura Termoacústica | Isolamento Térmico e Acústico | Cobersystem",
  description: "Cobertura termoacústica em policarbonato alveolar. Excelente isolamento térmico e acústico. Reduz temperatura e ruído. Preço e orçamento.",
  keywords: "cobertura termoacústica, cobertura isolamento térmico, cobertura isolamento acústico, policarbonato termoacústico, sanduíche TR40",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Termoacústica',
  description: 'Cobertura termoacústica em policarbonato alveolar com excelente isolamento térmico e acústico.',
  image: ['https://coberturapolicarbonato.com.br/images/projetos/fixa-01.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
  },
};

const faqs = [
  {
    question: 'O que é cobertura termoacústica?',
    answer: 'A cobertura termoacústica é uma cobertura que oferece isolamento térmico (reduz temperatura) e acústico (reduz ruído). É feita com policarbonato alveolar de alta espessura (6mm ou 10mm) que cria uma barreira eficiente contra calor e som.',
  },
  {
    question: 'Quanto a cobertura termoacústica reduz a temperatura?',
    answer: 'A cobertura termoacústica pode reduzir a temperatura interna em até 40% comparado a áreas sem cobertura. Isso oferece muito mais conforto, especialmente em dias quentes de verão.',
  },
  {
    question: 'A cobertura termoacústica reduz ruído?',
    answer: 'Sim! O policarbonato alveolar com câmaras de ar internas cria uma barreira eficiente contra ruídos externos, reduzindo significativamente o barulho de trânsito, vizinhos e outras fontes sonoras.',
  },
];

export default function CoberturaTermoacustica() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura Termoacústica', href: '/servicos/cobertura-termoacustica' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cobertura Termoacústica
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Cobertura termoacústica em policarbonato alveolar com excelente isolamento térmico e acústico. 
            Reduz temperatura interna em até 40% e bloqueia ruídos externos. Máximo conforto e tranquilidade. 
            Ideal para áreas que precisam de isolamento superior.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é Cobertura Termoacústica?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                A cobertura termoacústica combina isolamento térmico (reduz calor) e acústico (reduz ruído) 
                em um único sistema. É feita com policarbonato alveolar de alta espessura (6mm ou 10mm) que 
                cria uma barreira eficiente contra calor e som.
              </p>
              <p className="mb-4">
                As câmaras de ar internas do policarbonato alveolar funcionam como isolante, reduzindo 
                significativamente a transferência de calor e bloqueando ruídos externos. Isso oferece 
                máximo conforto térmico e acústico, especialmente em áreas urbanas com muito ruído e calor.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🌡️ Isolamento Térmico Superior</h3>
                <p className="text-gray-600">Reduz temperatura interna em até 40%, oferecendo muito mais conforto.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🔇 Isolamento Acústico</h3>
                <p className="text-gray-600">Bloqueia ruídos externos, criando ambiente mais silencioso e tranquilo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">💰 Economia de Energia</h3>
                <p className="text-gray-600">Reduz necessidade de ar condicionado e ventiladores, economizando energia.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🏠 Conforto Total</h3>
                <p className="text-gray-600">Ambiente mais fresco no verão e mais quente no inverno, com menos ruído.</p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura com isolamento térmico e acústico superior</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

