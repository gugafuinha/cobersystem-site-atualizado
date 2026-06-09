import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';

const HERO_IMAGE = '/images/projetos/Cobertura Termoacustica.png';

export const metadata: Metadata = {
  title: "Cobertura Acústica Termoacústica | Redução de Ruído 30dB | Cobersystem SP",
  description: "Cobertura acústica termoacústica em policarbonato alveolar. Reduz até 30dB de ruído e controla temperatura. Ideal para área gourmet, varanda e piscina. Orçamento grátis em SP.",
  keywords: "cobertura acústica, cobertura termoacústica, cobertura isolamento acústico, cobertura isolamento térmico, policarbonato termoacústico, redução ruído cobertura, sanduíche TR40",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
  },
  openGraph: {
    title: "Cobertura Acústica Termoacústica | Redução de Ruído 30dB | Cobersystem SP",
  description: "Cobertura acústica termoacústica que reduz até 30dB de ruído. Excelente desempenho térmico e acústico para área gourmet, varanda e piscina.",
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Termoacustica.png',
        width: 1200,
        height: 900,
        alt: 'Cobertura Termoacústica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Termoacustica.png'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Termoacústica',
  description: 'Cobertura termoacústica em policarbonato alveolar com excelente isolamento térmico e acústico.',
  image: [
    'https://www.coberturapolicarbonato.com.br/images/projetos/Cobertura%20Termoacustica.png',
    'https://www.coberturapolicarbonato.com.br/images/projetos/termoacustica-01.jpg',
    'https://www.coberturapolicarbonato.com.br/images/projetos/termoacustica-02.jpg',
  ],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-termoacustica',
    '650',
  ),
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
  {
    question: 'Quanto custa uma cobertura termoacústica?',
    answer: 'O preço de uma cobertura termoacústica varia de R$ 280 a R$ 480 por m², dependendo da espessura do policarbonato (6mm ou 10mm), tamanho da área e complexidade da instalação. Inclui estrutura de alumínio, policarbonato termoacústico e instalação completa. Solicite um orçamento personalizado para seu projeto.',
  },
  {
    question: 'Onde a cobertura termoacústica é mais indicada?',
    answer: 'A cobertura termoacústica é ideal para: residências próximas a avenidas movimentadas ou aeroportos (reduz ruído), áreas gourmet e varandas que precisam de conforto térmico, escritórios e ambientes comerciais que exigem silêncio, e qualquer local onde isolamento térmico e acústico sejam prioridades.',
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

          {/* Hero — foto esquerda, texto direita */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Cobertura termoacústica em policarbonato alveolar instalada — projeto Cobersystem SP"
                  title="Cobertura Acústica Termoacústica — Cobersystem SP"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cobertura Acústica Termoacústica
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Cobertura em policarbonato alveolar que reduz até 30dB de ruído e controla a temperatura
                  interna. Ideal para varanda, área gourmet e piscina próximos a vias movimentadas.
                  Isolamento térmico e acústico em um único sistema.
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Reduz até 30dB de ruído externo (trânsito, vizinhos)',
                    'Temperatura interna até 40% menor que áreas abertas',
                    'Policarbonato alveolar 6mm ou 10mm com câmaras de ar',
                    'Sem condensação — câmaras isolam do calor e do frio',
                    'Estrutura alumínio anodizado — sem manutenção',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

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

          <ServiceVejaTambem current="termoacustica" />

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

