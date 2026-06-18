import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import {
  formatPriceFrom,
  getPergoladoFaqPriceAnswer,
  getServiceSchemaMinPrice,
  PRICE_ESTIMATE_NOTE,
} from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import StructuredData from '@/components/seo/StructuredData';
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
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/projetos/pergolado-01.png',
        width: 1200,
        height: 900,
        alt: 'Cobertura para Pergolado em Policarbonato — Cobersystem SP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/projetos/pergolado-01.png'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura para Pergolado',
  name: 'Cobertura para Pergolado',
  image: ['https://www.coberturapolicarbonato.com.br/images/projetos/pergolado-01.png'],
  description:
    'Cobertura em policarbonato ou telhas de alumínio para pergolado residencial e comercial. Sistema retrátil ou fixo, com opção de automação via Alexa e sensor de chuva.',
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
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-pergolado',
    getServiceSchemaMinPrice('cobertura-pergolado'),
  ),
};

const faqs = [
  {
    question: 'O que é pergolado bioclimático e vale a pena instalar em SP?',
    answer:
      'Pergolado bioclimático é um sistema de cobertura com lâminas orientáveis ou painéis retráteis que se adaptam às condições climáticas — abrindo para ventilação no calor e fechando para proteção na chuva. Em São Paulo, onde o clima varia muito ao longo do dia, vale muito a pena: você usa a área em qualquer estação sem precisar reformar. A Cobersystem instala coberturas retráteis que funcionam como pergolado bioclimático: policarbonato que abre e fecha manualmente ou com automação Alexa e sensor de chuva.',
  },
  {
    question: 'Qual a melhor cobertura para pergolado bioclimático?',
    answer:
      'O sistema retrátil (abre e fecha) em policarbonato compacto ou alveolar é o mais indicado para simular o efeito bioclimático. Quando aberto, permite ventilação total e luz natural. Quando fechado, protege da chuva e reduz o calor. Com automação via Alexa ou sensor de chuva, o sistema responde ao clima de forma automática — exatamente como um pergolado bioclimático premium.',
  },
  {
    question: 'Posso colocar cobertura em pergolado existente?',
    answer:
      'Sim, na maioria dos casos é possível adaptar uma cobertura ao pergolado existente sem demolir a estrutura. A Cobersystem realiza visita técnica para avaliar o pergolado e dimensionar a cobertura mais adequada — fixa ou retrátil — com fixação direta nas vigas existentes.',
  },
  {
    question: 'Quanto custa cobertura para pergolado?',
    answer: getPergoladoFaqPriceAnswer(),
  },
  {
    question: 'Qual a diferença entre cobertura para pergolado fixa, retrátil e bioclimática?',
    answer:
      'Cobertura fixa: permanente, mais barata, sem ventilação. Ideal para quem quer proteção total sem custo elevado. Cobertura retrátil: desliza sobre trilhos e pode ser aberta ou fechada. É a versão residencial do pergolado bioclimático. Bioclimático premium: lâminas giratórias com motor independente para cada ângulo — mais caro e mais tecnológico. A Cobersystem trabalha com o sistema retrátil, que oferece 90% das vantagens do bioclimático a um custo acessível para projetos residenciais em SP.',
  },
];

export default function CoberturaPergolado() {
  return (
    <>
      <StructuredData data={serviceSchema} />
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
                <p className="text-sm font-semibold text-[#D4AF37] mt-4">
                  {formatPriceFrom('retratilAutomatizada')}
                </p>
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
                <p className="text-sm font-semibold text-[#D4AF37] mt-4">
                  {formatPriceFrom('fixaAlveolar')}
                </p>
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

          {/* Pergolado Bioclimático × Retrátil × Fixo — Comparativo */}
          <section className="mb-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Pergolado Bioclimático, Retrátil e Fixo: qual é o certo para você?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Compare os sistemas disponíveis e entenda as diferenças para seu projeto em SP
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="text-sm text-white">
                    <th className="py-3 px-4 font-semibold bg-gray-700 rounded-tl-lg">Característica</th>
                    <th className="py-3 px-4 font-semibold bg-blue-600">Retrátil (Abre/Fecha)</th>
                    <th className="py-3 px-4 font-semibold bg-[#D4AF37] text-black">Bioclimático (lâminas)</th>
                    <th className="py-3 px-4 font-semibold bg-gray-500 rounded-tr-lg">Fixo em Policarbonato</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {[
                    ['Controle de ventilação', '✅ Total (abre/fecha)', '✅ Total (ângulo ajustável)', '❌ Sem ventilação'],
                    ['Proteção contra chuva', '✅ Total quando fechado', '✅ Total quando fechado', '✅ Permanente'],
                    ['Automação', '✅ Alexa, sensor chuva', '✅ Motor por lâmina', '❌ Não se aplica'],
                    ['Preço por m²', formatPriceFrom('abreEFecha'), 'R$ 2.500–4.000/m²', formatPriceFrom('fixaAlveolar')],
                    ['Instalação sobre pergolado', '✅ Sim, sem demolição', '✅ Sim', '✅ Sim'],
                    ['Melhor para', 'Residências em SP', 'Projetos premium', 'Proteção permanente'],
                  ].map(([car, ret, bio, fix]) => (
                    <tr key={car} className="border-b border-gray-100 hover:bg-white transition">
                      <td className="py-3 px-4 font-medium text-gray-800">{car}</td>
                      <td className="py-3 px-4">{ret}</td>
                      <td className="py-3 px-4">{bio}</td>
                      <td className="py-3 px-4">{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">{formatPriceFrom('abreEFecha')} para sistema retrátil. Orçamento personalizado gratuito.</p>
          </section>

          {/* Prova Social */}
          <section className="mb-12 bg-[#D4AF37] text-black rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { n: '+500', l: 'projetos executados em SP' },
                { n: '2 anos', l: 'de garantia na instalação' },
                { n: '1–2 dias', l: 'para instalação completa' },
                { n: 'Gratuita', l: 'visita técnica e orçamento' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="text-3xl font-bold">{n}</p>
                  <p className="text-sm mt-1">{l}</p>
                </div>
              ))}
            </div>
          </section>

          <PriceEstimateNote className="mb-8" />
          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="area-gourmet" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Orçamento para Cobertura de Pergolado</h2>
            <p className="text-xl mb-8 text-gray-900">
              Visita técnica gratuita. Projeto e instalação em SP e Grande SP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink
                href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Preciso+de+or%C3%A7amento+para+cobertura+de+pergolado."
                location="footer-cta"
                serviceSlug="cobertura-pergolado"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                WhatsApp Agora
              </WhatsAppLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
