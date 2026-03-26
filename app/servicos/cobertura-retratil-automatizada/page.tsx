import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura Retrátil Automatizada | Alexa e Sensor de Chuva | Cobersystem",
  description: "Cobertura retrátil automatizada com Alexa e sensor de chuva. Sistema inteligente que abre e fecha automaticamente. Controle total via comando de voz ou remoto. Preço e orçamento.",
  keywords: "cobertura retrátil automatizada, cobertura automática Alexa, sensor de chuva cobertura, cobertura retrátil inteligente, automação residencial cobertura",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-retratil-automatizada',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura Retrátil Automatizada',
  description: 'Cobertura retrátil com automação inteligente via Alexa, controle remoto e sensor de chuva automático.',
  image: ['https://coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-retratil-automatizada',
  },
};

const faqs = [
  {
    question: 'Como funciona a automação da cobertura retrátil?',
    answer: 'A cobertura retrátil automatizada pode ser controlada de três formas: via Alexa (comando de voz como "Alexa, abra a cobertura"), controle remoto ou sensor de chuva automático. O sensor detecta chuva e fecha a cobertura automaticamente, sem necessidade de intervenção manual.',
  },
  {
    question: 'A cobertura fecha sozinha quando chove?',
    answer: 'Sim! O sensor de chuva detecta a precipitação e fecha a cobertura automaticamente em segundos, protegendo o ambiente sem que você precise fazer nada. Quando a chuva para, você pode abrir manualmente ou configurar para abrir automaticamente.',
  },
  {
    question: 'Preciso ter Alexa para usar a automação?',
    answer: 'Não é obrigatório. A cobertura pode ser controlada via controle remoto ou sensor de chuva automático. A integração com Alexa é um diferencial que permite controle por comando de voz, mas não é essencial para o funcionamento.',
  },
  {
    question: 'Quanto custa a automação da cobertura retrátil?',
    answer: 'O custo da automação varia conforme o sistema escolhido. Sensor de chuva básico, controle remoto e integração Alexa têm valores diferentes. Em média, a automação completa adiciona entre R$ 2.000 e R$ 5.000 ao projeto, dependendo do tamanho e complexidade.',
  },
];

export default function CoberturaRetratilAutomatizada() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura Retrátil Automatizada', href: '/servicos/cobertura-retratil-automatizada' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cobertura Retrátil Automatizada com Alexa e Sensor de Chuva
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Sistema inteligente de cobertura retrátil que abre e fecha automaticamente. Controle via Alexa, 
            controle remoto ou sensor de chuva. Tecnologia de ponta para máxima comodidade e proteção. 
            Ideal para quem busca automação residencial de alta qualidade.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é Cobertura Retrátil Automatizada?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                A cobertura retrátil automatizada é um sistema inteligente que combina a flexibilidade de uma 
                cobertura que abre e fecha com tecnologia de automação residencial. O sistema permite controle 
                total via comando de voz (Alexa), controle remoto ou sensor de chuva automático.
              </p>
              <p className="mb-4">
                Diferente das coberturas tradicionais, a automação oferece máxima comodidade: você pode abrir 
                ou fechar a cobertura sem sair de casa, e o sensor de chuva fecha automaticamente quando detecta 
                precipitação, protegendo seu ambiente sem intervenção manual.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens da Automação</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🤖 Controle por Voz (Alexa)</h3>
                <p className="text-gray-600">Abra ou feche a cobertura com comandos de voz simples. "Alexa, abra a cobertura" e pronto!</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🌧️ Sensor de Chuva Automático</h3>
                <p className="text-gray-600">A cobertura fecha sozinha quando detecta chuva, protegendo automaticamente seu ambiente.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">📱 Controle Remoto</h3>
                <p className="text-gray-600">Controle total via controle remoto, mesmo à distância. Ideal para quando você está fora de casa.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">⚡ Resposta Rápida</h3>
                <p className="text-gray-600">Sistema de alta performance que responde em segundos, fechando rapidamente quando necessário.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Aplicações</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Área Gourmet</h3>
                <p className="text-gray-600">Automação perfeita para áreas gourmet, permitindo controle total do ambiente durante churrascos e eventos.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Varanda</h3>
                <p className="text-gray-600">Transforme sua varanda em um espaço inteligente, com proteção automática contra chuva.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Piscina</h3>
                <p className="text-gray-600">Cobertura automatizada para piscina oferece proteção automática e controle de temperatura da água.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fotos de Obras</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <OptimizedImage src="/images/blog/cobertura-retratil-area-gourmet.jpg" alt="Cobertura retrátil automatizada área gourmet" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/blog/cobertura-abre-fecha.jpg" alt="Automação cobertura apartamento" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/blog/churrasqueira.jpg" alt="Cobertura automatizada churrasqueira" width={400} height={300} className="rounded-lg" />
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Automação inteligente para sua cobertura retrátil</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

