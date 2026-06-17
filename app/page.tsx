import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/OptimizedImage';
import VideoHero from '@/components/VideoHero';
import { getRetratilFaqPriceAnswer, getPolicarbonatoFaqPriceAnswer, COBERSYSTEM_PRICING, formatPricePerM2 } from '@/lib/pricing';

export const metadata: Metadata = {
  title: "Cobersystem | Coberturas Retráteis em Policarbonato SP | Orçamento Grátis",
  description: "A Cobersystem é especialista em coberturas retráteis que abrem e fecham automaticamente. Policarbonato, alumínio, automação Alexa e sensor de chuva. +500 projetos em SP. Orçamento grátis.",
  keywords: "cobersystem, cobertura retrátil, cobertura em policarbonato, cobertura abre e fecha, telhado retrátil, cobertura automática Alexa, sensor de chuva, área gourmet SP",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br',
  },
};

const homeWebSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cobersystem',
  url: 'https://www.coberturapolicarbonato.com.br',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.coberturapolicarbonato.com.br/blog?busca={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const homeLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cobersystem — Coberturas Retráteis SP',
  url: 'https://www.coberturapolicarbonato.com.br',
  telephone: '+5511943615079',
  image: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
  description: 'Especialistas em coberturas retráteis em policarbonato para São Paulo e Grande SP. Mais de 500 projetos executados. Visita técnica e orçamento gratuitos.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5505,
    longitude: -46.6333,
  },
  areaServed: [
    { '@type': 'City', name: 'São Paulo' },
    { '@type': 'City', name: 'Guarulhos' },
    { '@type': 'City', name: 'Campinas' },
    { '@type': 'City', name: 'Santo André' },
    { '@type': 'City', name: 'São Bernardo do Campo' },
    { '@type': 'City', name: 'Osasco' },
    { '@type': 'City', name: 'Barueri' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
  priceRange: '$$',
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa uma cobertura retrátil em São Paulo?',
      acceptedAnswer: { '@type': 'Answer', text: getRetratilFaqPriceAnswer() },
    },
    {
      '@type': 'Question',
      name: 'A Cobersystem faz visita técnica gratuita em SP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim! A visita técnica é gratuita e sem compromisso para toda São Paulo e Grande SP. Nossa equipe vai até o seu endereço, mede a área, avalia a estrutura e apresenta o projeto com orçamento detalhado no mesmo dia.' },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de instalação de cobertura retrátil em SP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Para áreas de até 30 m², a instalação leva de 1 a 2 dias úteis. Áreas maiores ou projetos com automação (Alexa, sensor de chuva) levam de 2 a 4 dias. Não há necessidade de obras, quebra de paredes ou entulho.' },
    },
    {
      '@type': 'Question',
      name: 'A cobertura retrátil funciona com automação Alexa e sensor de chuva?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A Cobersystem instala coberturas retráteis com automação completa: controle por voz (Alexa), aplicativo no celular, controle remoto e sensor de chuva automático. O sensor fecha a cobertura sozinho ao detectar chuva, sem você precisar fazer nada.' },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa cobertura fixa em policarbonato em SP?',
      acceptedAnswer: { '@type': 'Answer', text: getPolicarbonatoFaqPriceAnswer() },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-home-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebSiteSchema) }}
      />
      <Script
        id="schema-home-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLocalBusinessSchema) }}
      />
      <Script
        id="schema-home-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <main className="min-h-screen">
      <VideoHero />

      {/* Galeria de Imagens */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Projetos
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/blog/cobertura-abre-fecha.jpg"
                alt="Cobertura retrátil em policarbonato instalada em área gourmet residencial"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Área Gourmet e Varanda</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/produtos/cobertura-retratil/intercalada/IMG_4733.jpg"
                alt="Cobertura retrátil em alumínio com policarbonato alveolar em residência"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Cobertura em Alumínio</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/produtos/cobertura-policarbonato/alveolar/IMG_5837.jpg"
                alt="Cobertura para Piscinas"
                title="Cobertura para Piscinas"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Cobertura para Piscinas</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/produtos/cobertura-retratil/aluminio/capa.jpg"
                alt="Estrutura em alumínio para cobertura retrátil em projeto personalizado"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Estrutura em Alumínio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Por que escolher a Cobersystem?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-2xl font-semibold mb-4">Controle Total do Clima</h3>
              <p className="text-gray-600">
                Abertura de 0 a 90 graus permite controlar perfeitamente a ventilação. 
                Abra nos dias quentes e feche quando chover ou esfriar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-4">Automação Inteligente</h3>
              <p className="text-gray-600">
                Controle via Alexa, controle remoto ou sensor de chuva automático. 
                Sua cobertura fecha sozinha quando detecta chuva!
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold mb-4">Sem Perder Ventilação</h3>
              <p className="text-gray-600">
                Única cobertura que permite cobrir sua casa sem perder a ventilação natural. 
                Funciona como uma persiana horizontal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social Numérica */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '+500', l: 'Projetos executados em SP' },
              { n: '2 anos', l: 'de garantia em todos os projetos' },
              { n: '+10 anos', l: 'de experiência no mercado' },
              { n: '0€', l: 'visita técnica e orçamento' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="text-4xl font-bold text-[#D4AF37]">{n}</p>
                <p className="text-gray-300 text-sm mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline — imediatamente após prova social, no pico de confiança */}
      <div className="bg-gray-800 py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <p className="text-white font-medium">Quer fazer parte desses +500 projetos?</p>
          <a
            href="https://wa.me/5511943615079?text=Olá! Quero um orçamento de cobertura."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition whitespace-nowrap"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Products Section com Imagens */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Nossos Produtos em São Paulo
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Cobertura retrátil e fixa em policarbonato para todos os projetos em SP e Grande SP
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/produtos/cobertura-retratil/policarbonato-compacto-2mm" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/produtos/cobertura-retratil/compacto/IMG_8096.jpg"
                    alt="Cobertura retrátil em policarbonato compacto cristal com alta luminosidade"
                    title="Cobertura Retrátil Policarbonato Compacto 2mm - Cobersystem"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#D4AF37] transition">
                    Cobertura Retrátil
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Policarbonato Compacto 2mm - Totalmente transparente ou colorido. 
                    Ideal para máxima luminosidade.
                  </p>
                  <span className="text-[#8A6A00] font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/produtos/cobertura-policarbonato" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/projetos/fixa-01.jpg"
                    alt="Cobertura fixa em policarbonato alveolar para garagem e áreas externas"
                    title="Cobertura Policarbonato Fixa - Alta Resistência - Cobersystem"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#D4AF37] transition">
                    Cobertura Policarbonato
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cobertura fixa em policarbonato alveolar ou compacto. 
                    Ideal para garagens, áreas e proteção permanente.
                  </p>
                  <span className="text-[#8A6A00] font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/produtos/cobertura-retratil/automacao-inteligente" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg"
                    style={{ objectPosition: '50% 30%' }}
                    alt="Cobertura automática retrátil com Alexa e sensor de chuva integrado"
                    title="Automação Inteligente Cobertura Retrátil - Alexa e Sensor de Chuva - Cobersystem"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#D4AF37] transition">
                    Automação Inteligente
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Controle via Alexa, sensor de chuva automático e controle remoto. 
                    Tecnologia de ponta.
                  </p>
                  <span className="text-[#8A6A00] font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Soluções completas em coberturas para todos os ambientes externos
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/servicos/cobertura-retratil" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Cobertura Retrátil</h3>
              <p className="text-sm text-gray-500 mt-1">Automação Alexa</p>
            </Link>
            <Link href="/servicos/cobertura-abre-e-fecha" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">↕️</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Abre e Fecha</h3>
              <p className="text-sm text-gray-500 mt-1">Sensor de chuva</p>
            </Link>
            <Link href="/servicos/cobertura-piscina" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Cobertura Piscina</h3>
              <p className="text-sm text-gray-500 mt-1">Proteção UV 99%</p>
            </Link>
            <Link href="/servicos/cobertura-area-gourmet" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">🍖</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Área Gourmet</h3>
              <p className="text-sm text-gray-500 mt-1">Churrasqueira</p>
            </Link>
            <Link href="/servicos/cobertura-garagem" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Cobertura Garagem</h3>
              <p className="text-sm text-gray-500 mt-1">Proteção veículos</p>
            </Link>
            <Link href="/servicos/cobertura-policarbonato" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Policarbonato</h3>
              <p className="text-sm text-gray-500 mt-1">Cobertura fixa</p>
            </Link>
            <Link href="/servicos/cobertura-termoacustica" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">🔇</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Termoacústica</h3>
              <p className="text-sm text-gray-500 mt-1">Isolamento térmico</p>
            </Link>
            <Link href="/servicos/cobertura-aluminio" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-[#D4AF37]/10 transition-all group">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#D4AF37]">Cobertura Alumínio</h3>
              <p className="text-sm text-gray-500 mt-1">Estrutura premium</p>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/servicos" className="inline-block bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Tabela de Preços Resumida */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
            Preço de Cobertura em São Paulo
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">Valores por m² — visita técnica gratuita para orçamento preciso</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-[#D4AF37] text-black text-sm">
                  <th className="py-3 px-4 font-semibold rounded-tl-lg">Tipo de Cobertura</th>
                  <th className="py-3 px-4 font-semibold">Preço por m²</th>
                  <th className="py-3 px-4 font-semibold rounded-tr-lg">Melhor Para</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Fixa em Policarbonato Alveolar</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}</td>
                  <td className="py-3 px-4">Garagem, varanda, área de serviço</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Fixa em Policarbonato Compacto</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)}</td>
                  <td className="py-3 px-4">Entrada, corredor, alta transparência</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Retrátil Abre e Fecha</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}</td>
                  <td className="py-3 px-4">Área gourmet, varanda, piscina</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Retrátil Automatizada (Alexa)</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}</td>
                  <td className="py-3 px-4">Automação completa, sensor de chuva</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">* Valores estimados. Preço final varia por área, complexidade e condições locais.</p>
        </div>
      </section>

      {/* FAQ Visível */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
            Perguntas Frequentes — Cobertura Retrátil em São Paulo
          </h2>
          <p className="text-center text-gray-500 mb-10">Tire suas dúvidas sobre instalação, preços e automação</p>
          <div className="space-y-4">
            {[
              {
                q: 'Quanto custa uma cobertura retrátil em São Paulo?',
                a: getRetratilFaqPriceAnswer(),
              },
              {
                q: 'A Cobersystem faz visita técnica gratuita em SP?',
                a: 'Sim. A visita técnica é 100% gratuita e sem compromisso para toda São Paulo e Grande SP. Nossa equipe vai até o seu endereço, mede a área, avalia a estrutura e entrega o orçamento no mesmo dia.',
              },
              {
                q: 'Qual o prazo de instalação em SP?',
                a: 'Para áreas de até 30 m², a instalação leva 1 a 2 dias úteis. Projetos maiores ou com automação (Alexa, sensor de chuva) levam de 2 a 4 dias. Sem obras, sem quebra de paredes, sem entulho.',
              },
              {
                q: 'A cobertura retrátil funciona com Alexa e sensor de chuva?',
                a: 'Sim. Instalamos automação completa: controle por voz (Alexa), aplicativo no celular, controle remoto e sensor de chuva automático — que fecha a cobertura sozinho ao detectar chuva.',
              },
              {
                q: 'Quanto custa cobertura fixa em policarbonato em SP?',
                a: getPolicarbonatoFaqPriceAnswer(),
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white rounded-lg shadow-sm border border-gray-100 group">
                <summary className="p-5 font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center hover:text-blue-700 transition">
                  {q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu espaço em São Paulo?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Solicite um orçamento gratuito e sem compromisso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/orcamento" 
              className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition shadow-lg"
            >
              Solicitar Orçamento Agora
            </Link>
            <a
              href="https://wa.me/5511943615079?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20de%20cobertura."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg"
            >
              WhatsApp Agora
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
