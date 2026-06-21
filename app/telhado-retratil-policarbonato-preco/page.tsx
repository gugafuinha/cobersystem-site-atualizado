import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import WhatsAppLink from '@/components/WhatsAppLink';

export const metadata: Metadata = {
  title: 'Telhado Retrátil Policarbonato Preço 2026 | Tabela por m² | Cobersystem SP',
  description:
    'Telhado retrátil em policarbonato: veja preços reais por m² para 2026. Compacto a partir de R$ 800/m², automação via Alexa. Orçamento grátis em SP. Cobersystem.',
  keywords:
    'telhado retrátil policarbonato preço, telhado retrátil preço m2, cobertura retrátil policarbonato preço, telhado que abre e fecha preço, cobertura abre fecha quanto custa',
  alternates: {
    canonical:
      'https://www.coberturapolicarbonato.com.br/telhado-retratil-policarbonato-preco',
  },
  openGraph: {
    title: 'Telhado Retrátil Policarbonato — Preços 2026 | Cobersystem SP',
    description:
      'Tabela de preços reais para telhado retrátil em policarbonato. A partir de R$ 800/m² com instalação em SP.',
    url: 'https://www.coberturapolicarbonato.com.br/telhado-retratil-policarbonato-preco',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
        width: 1200,
        height: 900,
        alt: 'Telhado Retrátil Policarbonato — Tabela de Preços',
      },
    ],
  },
};

const faq = [
  {
    q: 'Qual o preço de um telhado retrátil em policarbonato por m²?',
    a: 'O preço varia conforme o tipo de policarbonato e se inclui automação. Policarbonato compacto (6mm) custa entre R$ 800 e R$ 1.200/m². Policarbonato alveolar (termoacústico) fica entre R$ 1.000 e R$ 1.500/m². Automação via Alexa e sensor de chuva adiciona cerca de R$ 250/m². Esses valores incluem estrutura em alumínio, policarbonato e instalação em São Paulo.',
  },
  {
    q: 'O telhado retrátil fecha sozinho na chuva?',
    a: 'Sim! Com o sistema de automação da Cobersystem, o telhado detecta a chuva por sensor e fecha automaticamente — sem você precisar se levantar. Também pode ser controlado por celular, Alexa ou botão físico.',
  },
  {
    q: 'Quanto tempo leva a instalação?',
    a: 'A instalação padrão leva de 1 a 3 dias úteis, dependendo da área. Fazemos a visita técnica gratuita antes para medir e planejar a estrutura.',
  },
  {
    q: 'O telhado retrátil precisa de manutenção?',
    a: 'Sim, mas é simples: limpeza das trilhas com pano seco a cada 3-6 meses e verificação do mecanismo de tração anualmente. O policarbonato tem garantia de 10 anos contra amarelamento.',
  },
  {
    q: 'Qual a diferença entre policarbonato compacto e alveolar?',
    a: 'O compacto (transparente/fumê) é mais fino, transmite mais luz e é ideal para áreas que precisam de claridade. O alveolar tem câmaras internas que reduzem calor em até 40% e barulho de chuva — ideal para varanda e área gourmet onde se fica por mais tempo.',
  },
  {
    q: 'Atendem onde em SP?',
    a: 'Atendemos toda a Grande São Paulo e cidades vizinhas num raio de até 60km: Guarulhos, Santo André, São Bernardo, Campinas, Sorocaba, Osasco, Barueri e mais. Consulte disponibilidade para sua cidade.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Telhado Retrátil Policarbonato',
  description:
    'Telhado retrátil em policarbonato com automação via Alexa e sensor de chuva. Estrutura em alumínio. Atende toda a Grande SP.',
  image: [
    'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
    'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
  ],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    price: '800.00',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: 'https://www.coberturapolicarbonato.com.br/telhado-retratil-policarbonato-preco',
    seller: { '@type': 'Organization', name: 'Cobersystem', url: 'https://www.coberturapolicarbonato.com.br' },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'BR',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnDays: 0,
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'BRL' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'BR', addressRegion: 'SP' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
      },
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function TelhadoRetratilPrecoPage() {
  return (
    <>
      <Script id="schema-product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/30 border border-blue-400/40 text-blue-200 text-sm px-3 py-1 rounded-full mb-4">
              Tabela de preços atualizada — 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Telhado Retrátil Policarbonato:<br className="hidden md:block" />
              Quanto Custa por m²?
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Preços reais com instalação em São Paulo — estrutura de alumínio e mão de obra inclusa.
            </p>

            {/* Cards de preço — visíveis acima da dobra */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-left">
                <p className="text-xs text-blue-300 uppercase tracking-wide mb-1">Alveolar · Alumínio</p>
                <p className="text-2xl font-bold text-white">
                  R$ 800 – R$ 1.400
                  <span className="text-sm font-normal text-blue-200">/m²</span>
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-left">
                <p className="text-xs text-blue-300 uppercase tracking-wide mb-1">Compacto · Transparente e Coloridas</p>
                <p className="text-2xl font-bold text-white">
                  R$ 1.200 – R$ 1.700
                  <span className="text-sm font-normal text-blue-200">/m²</span>
                </p>
              </div>
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl px-5 py-4 text-left">
                <p className="text-xs text-green-300 uppercase tracking-wide mb-1">Visita técnica</p>
                <p className="text-2xl font-bold text-green-300">Gratuita</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
              >
                💬 Orçamento grátis via WhatsApp
              </a>
              <WhatsAppLink
                href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura"
                location="preco-hero"
                serviceSlug="telhado-retratil-policarbonato-preco"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                Ver tabela completa ↓
              </WhatsAppLink>
            </div>
          </div>
        </section>

        {/* Foto + Tabela de preços — lado a lado no desktop, empilhados no mobile */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Coluna direita — Tabela (first on mobile via order) */}
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-1">Tabela de Preços por m²</h2>
                <p className="text-gray-500 text-sm mb-5">
                  Com estrutura em alumínio e instalação inclusa • Grande SP • 2026
                </p>

                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-4 py-3 font-semibold">Tipo</th>
                        <th className="text-center px-3 py-3 font-semibold">Esp.</th>
                        <th className="text-center px-3 py-3 font-semibold">Preço/m²</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-blue-50/30">
                        <td className="px-4 py-4 font-semibold">
                          Alumínio / Alveolar<br />
                          <span className="text-gray-500 font-normal text-xs">Resistente</span>
                        </td>
                        <td className="px-3 py-4 text-center text-gray-600 text-xs">4 mm</td>
                        <td className="px-3 py-4 text-center">
                          <span className="font-bold text-slate-800">R$ 800 – R$ 1.400</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-blue-50/20 hover:bg-blue-50/40">
                        <td className="px-4 py-4 font-semibold">
                          Compacto<br />
                          <span className="text-gray-500 font-normal text-xs">Transparente</span>
                        </td>
                        <td className="px-3 py-4 text-center text-gray-600 text-xs">2 mm</td>
                        <td className="px-3 py-4 text-center">
                          <span className="font-bold text-slate-800">R$ 1.200 – R$ 1.700</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50/30">
                        <td className="px-4 py-4 font-semibold text-green-800">
                          Visita técnica<br />
                          <span className="text-gray-500 font-normal text-xs">Medição e projeto</span>
                        </td>
                        <td className="px-3 py-4 text-center text-gray-400">—</td>
                        <td className="px-3 py-4 text-center">
                          <span className="font-bold text-green-600">Gratuito</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-gray-400 mb-6">
                  * Valores estimados. O preço final varia conforme área, complexidade e localização.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-xl text-base transition-colors flex items-center justify-center gap-2"
                  >
                    💬 Orçamento grátis via WhatsApp
                  </a>
                  <WhatsAppLink
                    href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura"
                    location="preco-tabela"
                    serviceSlug="telhado-retratil-policarbonato-preco"
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl text-base transition-colors text-center"
                  >
                    Preencher formulário
                  </WhatsAppLink>
                </div>
              </div>

              {/* Coluna esquerda — Foto (second on mobile, first on desktop) */}
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/produtos/cobertura-retratil/compacto/IMG_8096.jpg"
                  alt="Cobertura Abre e Fecha com Policarbonato Compacto"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
                <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    Cobertura Abre e Fecha com Policarbonato Compacto
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mecanismos de automação */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-3">Mecanismos de Automação</h2>
            <p className="text-gray-500 text-center text-sm mb-10">
              Escolha o nível de automação que melhor se encaixa na sua rotina
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              {[
                {
                  icon: '🎛️',
                  titulo: 'Controle Remoto',
                  desc: 'Abra e feche a cobertura com um controle na palma da mão. Simples, rápido e sem precisar de smartphone.',
                  preco: 'R$ 2.500,00',
                },
                {
                  icon: '🗣️',
                  titulo: 'Comando por Alexa',
                  desc: 'Integração com Amazon Alexa. Basta falar "Alexa, fechar cobertura" — compatível com Echo e smartphones.',
                  preco: 'R$ 3.000,00',
                },
                {
                  icon: '🌧️',
                  titulo: 'Sensor de Chuva',
                  desc: 'A cobertura detecta a chuva e fecha automaticamente, sem você precisar fazer nada. Ideal para quem viaja ou esquece.',
                  preco: 'R$ 4.000,00',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-bold text-lg mb-2">{item.titulo}</div>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{item.desc}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-2xl font-bold text-slate-800">{item.preco}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-600 text-center font-medium">
              * Valor por comando. Os mecanismos podem ser combinados. Consulte disponibilidade.
            </p>
          </div>
        </section>

        {/* CTA central */}
        <section className="bg-blue-700 text-white py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Quer saber o preço exato do seu projeto?</h2>
            <p className="text-blue-100 mb-8">
              Cada espaço é diferente. Envie uma foto pelo WhatsApp ou preencha o formulário — nossa equipe calcula o preço real em até 24h, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
              >
                💬 Falar com especialista
              </a>
              <WhatsAppLink
                href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura"
                location="preco-cta-central"
                serviceSlug="telhado-retratil-policarbonato-preco"
                className="bg-white text-blue-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transition-colors"
              >
                Formulário de orçamento
              </WhatsAppLink>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Perguntas Frequentes sobre Preço
            </h2>
            <div className="space-y-5">
              {faq.map((f, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50 font-semibold list-none">
                    <span>{f.q}</span>
                    <span className="text-blue-600 ml-4 flex-shrink-0 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-400 mb-2 text-sm">Cobersystem — Especialista em coberturas retráteis em SP</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/produtos/cobertura-retratil" className="text-blue-400 hover:text-blue-300 text-sm underline">
                Ver modelos de cobertura retrátil
              </Link>
              <span className="text-gray-700 hidden sm:block">•</span>
              <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-400 hover:text-blue-300 text-sm underline">
                Cobertura abre e fecha automatizada
              </Link>
              <span className="text-gray-700 hidden sm:block">•</span>
              <Link href="/orcamento" className="text-blue-400 hover:text-blue-300 text-sm underline">
                Fale conosco
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
