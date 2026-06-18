import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import { generatePageMetadata } from '@/lib/seo/page-metadata';
import CoberturaPiscinaExpandedSections from './CoberturaPiscinaExpandedSections';

export const metadata = generatePageMetadata('cobertura-piscina');

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura para Piscina Retrátil',
  name: 'Cobertura para Piscina Retrátil',
  description: 'Cobertura retrátil em policarbonato para piscina com automação e proteção contra chuva e folhas.',
  image: [
    'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg',
  ],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Cobersystem',
    telephone: '+5511943615079',
    url: 'https://www.coberturapolicarbonato.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
  areaServed: { '@type': 'City', name: 'São Paulo' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-piscina',
    getServiceSchemaMinPrice('cobertura-piscina'),
  ),
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para piscina em SP?',
    answer: getFaqPriceAnswer('fixaCompacto'),
  },
  {
    question: 'A cobertura para piscina mantém a água aquecida?',
    answer: 'Sim. A cobertura retrátil para piscina ajuda a manter a temperatura da água, especialmente quando fechada. O policarbonato cria um efeito estufa que aquece a água naturalmente e reduz a perda de calor noturna — diminuindo o consumo do aquecedor em até 30%.',
  },
  {
    question: 'A cobertura protege contra folhas e sujeira?',
    answer: 'Sim. Quando fechada, a cobertura protege completamente a piscina contra folhas, galhos, insetos e poeira. Isso reduz a frequência de limpeza pesada e mantém a química da água mais estável, com menos adição de cloro.',
  },
  {
    question: 'Posso usar a piscina com a cobertura fechada?',
    answer: 'A cobertura retrátil permite abrir totalmente quando você quer nadar e fechar quando não está em uso. Dependendo da altura do sistema (semi-alta ou walk-in), é possível até nadar com ela parcialmente aberta para ventilação.',
  },
  {
    question: 'Qual o prazo de instalação de cobertura para piscina?',
    answer: 'Para piscinas de até 40 m², a instalação leva de 2 a 4 dias úteis após a aprovação do projeto. A estrutura de alumínio não exige obras nem quebra de pisos. O processo inclui: visita técnica gratuita, projeto, fabricação e instalação com equipe especializada. Garantia de 2 anos.',
  },
];

export default function CoberturaPiscina() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <Breadcrumb />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Piscina', href: '/servicos/cobertura-piscina' },
          ]} />

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg"
                  alt="Cobertura piscina retrátil em policarbonato com proteção UV e sombra"
                  title="Cobertura para Piscina"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Piscina Retrátil
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sistema em policarbonato com abertura controlada: protege a água, reduz sujeira e ajuda a manter o
                  conforto térmico, com opção de automação.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Especificações e benefícios
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Policarbonato com proteção UV e boa resistência a impactos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Abertura e fechamento para adaptar ao clima e ao uso da piscina</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Menos folhas e sujeira na água quando fechada</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Ajuda a reduzir evaporação e perda de calor da água</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Automação opcional (Alexa, controle remoto, sensor de chuva)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <CoberturaPiscinaExpandedSections />

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura Retrátil para Piscina?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Uma cobertura para piscina oferece inúmeros benefícios: protege contra folhas e sujeira, mantém a 
                temperatura da água, reduz evaporação e permite uso mesmo em dias chuvosos. A cobertura retrátil 
                é ideal porque permite abrir totalmente quando você quiser usar a piscina e fechar quando não estiver 
                em uso, oferecendo proteção sem comprometer o acesso.
              </p>
              <p className="mb-4">
                Diferente das coberturas fixas, a retrátil oferece flexibilidade total: abra para nadar ao sol ou 
                feche para proteger e aquecer a água. Com automação, você pode controlar tudo via Alexa ou sensor 
                de chuva automático.
              </p>
            </div>
          </section>

          {/* Prova Social + Cases */}
          <section className="mb-12 bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Coberturas para Piscina executadas em SP pela Cobersystem
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              {[
                { n: '+500', l: 'projetos concluídos em SP' },
                { n: '2 anos', l: 'de garantia na instalação' },
                { n: '1–4 dias', l: 'prazo de instalação' },
                { n: '100%', l: 'projetos sob medida' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="text-3xl font-bold text-[#D4AF37]">{n}</p>
                  <p className="text-sm text-blue-100 mt-1">{l}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  loc: 'Morumbi — SP',
                  desc: 'Cobertura retrátil alta (walk-in) em policarbonato alveolar sobre piscina de 48 m². Sistema automatizado com sensor de chuva.',
                  tipo: 'Retrátil automática',
                },
                {
                  loc: 'Alphaville — Barueri',
                  desc: 'Cobertura telescópica em policarbonato compacto cristal para piscina de 35 m². Instalação sem obra, 3 dias de execução.',
                  tipo: 'Fixa telescópica',
                },
                {
                  loc: 'Jardins — SP',
                  desc: 'Cobertura semi-alta em alveolar bronze sobre piscina de 22 m². Estrutura integrada ao paisagismo do jardim.',
                  tipo: 'Fixa semi-alta',
                },
              ].map(({ loc, desc, tipo }) => (
                <div key={loc} className="bg-blue-700 rounded-lg p-4">
                  <p className="text-xs font-semibold text-[#D4AF37] mb-1">{tipo}</p>
                  <p className="font-bold text-white mb-2">📍 {loc}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="piscina" />

          {/* Artigos Relacionados */}
          <section className="mb-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Artigos Relacionados</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/blog/cobertura-vidro-ou-policarbonato-comparativo"
                className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Cobertura de Vidro vs Policarbonato: Comparativo Completo</span>
                <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
              </a>
              <a
                href="/blog/acrilico-ou-policarbonato-qual-melhor"
                className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Acrílico ou Policarbonato: Qual o Melhor para Cobertura? [2026]</span>
                <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
              </a>
            </div>
          </section>

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura perfeita para sua piscina</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orcamento" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Quero+um+or%C3%A7amento+de+cobertura+para+piscina."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

