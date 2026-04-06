import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/OptimizedImage';
import StructuredData from '@/components/seo/StructuredData';
import VideoHero from '@/components/VideoHero';

export const metadata: Metadata = {
  title: "Cobertura em Policarbonato Retrátil | Abre e Fecha com Automação | Cobersystem",
  description: "Cobertura retrátil em policarbonato com sistema abre e fecha. Automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus. Estruturas de alumínio personalizadas.",
  keywords: "cobertura retrátil, cobertura abre e fecha, cobertura em policarbonato, cobertura automática, sensor de chuva, automação residencial, Alexa",
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cobersystem - Coberturas em Policarbonato',
  image: 'https://www.coberturapolicarbonato.com.br/logo-horizontal-new.svg',
  '@id': 'https://www.coberturapolicarbonato.com.br',
  url: 'https://www.coberturapolicarbonato.com.br',
  telephone: '+5511943615079',
  email: 'vendas@cobersystem.com.br',
  priceRange: '$$-$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Frei Diogo das Chagas, 160',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '03985-060',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.6815,
    longitude: -46.6963,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  sameAs: ['https://www.instagram.com/cobersystem']
};

export default function Home() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <Script
        id="schema-home-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebSiteSchema) }}
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

      {/* Products Section com Imagens */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Nossos Produtos
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Cobertura retrátil e fixa em policarbonato para todos os tipos de projeto
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Solicite um orçamento gratuito e sem compromisso
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition shadow-lg"
          >
            Solicitar Orçamento Agora
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
