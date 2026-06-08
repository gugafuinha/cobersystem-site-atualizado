import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';

export const metadata: Metadata = {
  title: 'Cobertura para Pergolado | Policarbonato e Alumínio | Cobersystem SP',
  description:
    'Cobertura para pergolado em policarbonato ou telhas de alumínio. Sistema retrátil ou fixo, com automação opcional. Projetos sob medida para pergolado residencial e comercial em SP. Orçamento grátis.',
  keywords:
    'cobertura para pergolado, cobertura pergolado policarbonato, pergolado com cobertura retrátil, cobertura pergolado alumínio, telhado para pergolado, cobertura abre e fecha pergolado SP',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-pergolado',
  },
  openGraph: {
    title: 'Cobertura para Pergolado | Policarbonato e Alumínio | Cobersystem SP',
    description:
      'Cobertura retrátil ou fixa para pergolado em policarbonato e alumínio. Projetos sob medida em SP.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-pergolado',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Pergolado',
  image: ['https://www.coberturapolicarbonato.com.br/images/projetos/pergolado-01.png'],
  description:
    'Cobertura em policarbonato ou telhas de alumínio para pergolado residencial e comercial. Sistema retrátil ou fixo, com opção de automação via Alexa e sensor de chuva.',
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    price: '800',
    availability: 'https://schema.org/InStock',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-pergolado',
    seller: { '@type': 'Organization', name: 'Cobersystem' },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'BR',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'BRL' },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'BR',
        addressRegion: 'SP',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 7, maxValue: 21, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
      },
    },
  },
};

const faqs = [
  {
    question: 'Qual a melhor cobertura para pergolado?',
    answer:
      'A melhor cobertura para pergolado depende do uso. Para ambientes que precisam de luz natural, o policarbonato compacto ou alveolar é ideal. Para quem prefere proteção total do sol, as telhas de alumínio ou termoacústicas são melhores. A opção retrátil (abre e fecha) é a mais versátil: combina proteção total quando fechada com aproveitamento do sol e ventilação quando aberta.',
  },
  {
    question: 'Posso colocar cobertura em pergolado existente?',
    answer:
      'Sim, na maioria dos casos é possível adaptar uma cobertura ao pergolado existente sem demolir a estrutura. A Cobersystem realiza visita técnica para avaliar a estrutura do pergolado e dimensionar a cobertura mais adequada, seja fixa ou retrátil.',
  },
  {
    question: 'Quanto custa cobertura para pergolado?',
    answer:
      'O preço de cobertura para pergolado varia conforme o sistema (fixo ou retrátil), o material (policarbonato ou alumínio) e a área. A cobertura fixa começa a partir de R$ 800/m², e a retrátil a partir de R$ 1.200/m², incluindo estrutura e instalação. Solicite orçamento para medição gratuita.',
  },
  {
    question: 'A cobertura retrátil funciona em pergolado?',
    answer:
      'Sim. A cobertura retrátil é uma das mais indicadas para pergolado justamente por transformar a estrutura aberta em um ambiente protegido quando necessário. O sistema desliza sobre trilhos fixados na estrutura do pergolado e pode ser acionado manualmente, por controle remoto ou via Alexa.',
  },
  {
    question: 'Qual a diferença entre cobertura e pergolado?',
    answer:
      'O pergolado é uma estrutura decorativa aberta (vigas e colunas), sem proteção contra chuva. A cobertura é o elemento instalado sobre o pergolado para criar proteção: pode ser em policarbonato (transparente), telhas de alumínio ou sistema retrátil abre e fecha. A Cobersystem instala coberturas sobre pergolados novos ou existentes.',
  },
];

export default function CoberturaPergolado() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura para Pergolado', href: '/servicos/cobertura-pergolado' },
            ]}
          />

          {/* Hero */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src="/images/projetos/pergolado-01.png"
                  alt="Cobertura para pergolado com policarbonato retrátil sobre estrutura de madeira — projeto executado em SP pela Cobersystem"
                  title="Cobertura para Pergolado com Policarbonato — Cobersystem SP"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-2 px-3">
                  Cobertura para Pergolado com Policarbonato — Projeto executado em SP
                </figcaption>
              </figure>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Pergolado
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Transforme seu pergolado em um espaço protegido e funcional com cobertura em policarbonato
                  ou telhas de alumínio. Sistema fixo ou retrátil (abre e fecha), com automação opcional
                  via Alexa e sensor de chuva. Projetos sob medida para pergolados residenciais e comerciais
                  em São Paulo e Grande SP.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  O que a cobertura oferece
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Protege contra chuva, vento e sol intenso sem reformar o pergolado</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Sistema retrátil: abre para ventilação, fecha quando chove</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Policarbonato preserva luminosidade natural do espaço</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Adapta-se a pergolados existentes sem demolição</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Automação Alexa, controle remoto ou sensor de chuva automático</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Estrutura em alumínio anodizado — sem manutenção e sem ferrugem</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sistemas disponíveis */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sistemas de Cobertura para Pergolado</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">🔄 Sistema Retrátil</h3>
                <p className="text-gray-600 mb-4">
                  A cobertura desliza sobre trilhos fixados no pergolado. Pode ser aberta para máxima
                  ventilação ou fechada para proteção total. Com automação, fecha sozinha na chuva.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Policarbonato compacto ou alveolar</li>
                  <li>• Telhas de alumínio intercaladas</li>
                  <li>• Motorização opcional com Alexa</li>
                  <li>• Sensor de chuva automático</li>
                </ul>
                <p className="text-sm font-semibold text-[#D4AF37] mt-4">A partir de R$ 1.200/m²</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">🏠 Sistema Fixo</h3>
                <p className="text-gray-600 mb-4">
                  Cobertura permanente instalada sobre o pergolado. Solução mais econômica e estruturalmente
                  sólida para quem não precisa de abertura/fechamento frequente.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Policarbonato alveolar ou compacto</li>
                  <li>• Telhas termoacústicas</li>
                  <li>• Perfis de alumínio estruturais</li>
                  <li>• Calhas e rufos inclusos</li>
                </ul>
                <p className="text-sm font-semibold text-[#D4AF37] mt-4">A partir de R$ 800/m²</p>
              </div>
            </div>
          </section>

          {/* Projetos */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Projetos de Cobertura em Pergolado</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <figure className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 relative">
                <OptimizedImage
                  src="/images/projetos/pergolado-01.png"
                  alt="Cobertura retrátil em policarbonato sobre pergolado residencial — Cobersystem SP"
                  title="Cobertura retrátil em policarbonato sobre pergolado residencial"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1 px-2">
                  Cobertura retrátil em policarbonato sobre pergolado residencial
                </figcaption>
              </figure>
              <figure className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 relative">
                <OptimizedImage
                  src="/images/projetos/pergolado-alveolar-01.png"
                  alt="Cobertura em policarbonato alveolar para pergolado em corredor residencial — Cobersystem SP"
                  title="Cobertura em Policarbonato Alveolar para Pergolado"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1 px-2">
                  Cobertura em Policarbonato Alveolar para Pergolado
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Como funciona */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Como Funciona a Instalação</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { n: '01', t: 'Visita Técnica', d: 'Avaliamos o pergolado existente, medimos o vão e verificamos a estrutura.' },
                { n: '02', t: 'Projeto', d: 'Elaboramos o projeto com escolha do sistema, material e automação.' },
                { n: '03', t: 'Fabricação', d: 'Produzimos a estrutura em alumínio e cortamos o policarbonato sob medida.' },
                { n: '04', t: 'Instalação', d: 'Instalamos em 1–2 dias com equipe especializada, sem entulho.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="text-center">
                  <div className="w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {n}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="area-gourmet" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Orçamento para Cobertura de Pergolado</h2>
            <p className="text-xl mb-8 text-gray-900">
              Visita técnica gratuita. Projeto e instalação em SP e Grande SP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Preciso+de+or%C3%A7amento+para+cobertura+de+pergolado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                WhatsApp Agora
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
