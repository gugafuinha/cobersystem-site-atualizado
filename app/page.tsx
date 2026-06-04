import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/OptimizedImage';
import VideoHero from '@/components/VideoHero';

export const metadata: Metadata = {
  title: "Cobertura em Policarbonato Abre e Fecha | Automação Alexa | Cobersystem SP",
  description: "Cobertura retrátil em policarbonato que abre e fecha automaticamente via Alexa e sensor de chuva. Abertura 0 a 90°, estrutura alumínio, área gourmet e varanda. Orçamento grátis em SP.",
  keywords: "cobertura em policarbonato, cobertura policarbonato, cobertura retrátil, cobertura abre e fecha, telhado retrátil, cobertura automática Alexa, sensor de chuva, área gourmet SP",
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

export default function Home() {
  return (
    <>
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
