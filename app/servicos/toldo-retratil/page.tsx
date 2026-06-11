import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import StructuredData from '@/components/seo/StructuredData';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import {
  COBERSYSTEM_PRICING,
  formatBRL,
  formatPricePerM2,
  getFaqPriceAnswer,
  PRICE_ESTIMATE_NOTE,
} from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/servicos/toldo-retratil`;
const HERO_IMAGE = `${BASE}/images/blog/cobertura-abre-fecha.jpg`;
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20toldo%20retr%C3%A1til.';

export const metadata: Metadata = {
  title: 'Toldo Retrátil em São Paulo | Motorizado e Manual | Cobersystem',
  description:
    'Toldo retrátil manual ou motorizado para varanda, fachada e área gourmet em SP. Diferença entre toldo e cobertura retrátil. Orçamento grátis. Visita técnica em São Paulo e Grande SP.',
  keywords:
    'toldo retrátil, toldo motorizado, toldo retrátil SP, toldo para varanda, toldo motorizado preço, toldo retrátil São Paulo, toldo automatizado Alexa',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Toldo Retrátil em São Paulo | Motorizado e Manual | Cobersystem',
    description:
      'Toldo retrátil manual ou motorizado para varanda, fachada e área gourmet em SP. Visita técnica gratuita.',
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 900, alt: 'Toldo Retrátil São Paulo' }],
  },
  twitter: { card: 'summary_large_image', images: [HERO_IMAGE] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Toldo Retrátil',
  name: 'Toldo Retrátil em São Paulo',
  description:
    'Fornecimento e instalação de toldo retrátil manual ou motorizado para varanda, fachada e área gourmet em São Paulo e Grande SP.',
  image: [HERO_IMAGE],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Cobersystem',
    telephone: '+5511943615079',
    url: BASE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
  areaServed: { '@type': 'City', name: 'São Paulo' },
  offers: buildServiceOffer(PAGE_URL, String(COBERSYSTEM_PRICING.abreEFecha.min)),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa um toldo retrátil motorizado em SP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: getFaqPriceAnswer('abreEFecha'),
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre toldo retrátil e cobertura retrátil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O toldo retrátil é uma lona ou tecido tensionado sobre uma estrutura que avança horizontalmente, protegendo contra sol e chuva leve. A cobertura retrátil da Cobersystem usa policarbonato sobre estrutura de alumínio, com maior resistência a chuvas fortes, granizo e ventos. A cobertura retrátil dura mais (15–25 anos vs 5–10 anos do toldo) e protege melhor em qualquer clima.',
      },
    },
    {
      '@type': 'Question',
      name: 'O toldo retrátil aguenta chuva forte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O toldo de lona suporta chuva moderada, mas pode ceder com ventos fortes ou granizo. A cobertura retrátil em policarbonato suporta qualquer chuva e granizo sem comprometer a estrutura. Para proteção total e durável, a cobertura retrátil em policarbonato é superior ao toldo convencional.',
      },
    },
    {
      '@type': 'Question',
      name: 'É possível motorizar um toldo retrátil existente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, em muitos casos é possível adicionar motor a um toldo retrátil manual existente, com acionamento remoto ou via Alexa. No entanto, se o toldo estiver desgastado, o ideal é substituí-lo. A Cobersystem também instala coberturas retráteis em policarbonato com automação completa — solução mais durável que toldos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando escolher toldo retrátil e quando escolher cobertura retrátil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Escolha o toldo retrátil quando o objetivo for sombra temporária com menor investimento inicial e você puder aceitar manutenção periódica da lona. Escolha a cobertura retrátil em policarbonato quando precisar de proteção permanente contra chuva forte, granizo, vida útil longa (15+ anos) e acabamento premium para área gourmet, piscina ou varanda de alto padrão.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'Quanto custa um toldo retrátil motorizado em SP?',
    answer: getFaqPriceAnswer('abreEFecha'),
  },
  {
    question: 'Qual a diferença entre toldo retrátil e cobertura retrátil?',
    answer:
      'O toldo retrátil é uma lona tensionada que protege contra sol e chuva leve. A cobertura retrátil da Cobersystem usa policarbonato rígido com estrutura de alumínio — maior resistência a chuva forte, granizo e vento, além de vida útil de 15–25 anos contra 5–10 anos do toldo.',
  },
  {
    question: 'O toldo retrátil aguenta chuva forte?',
    answer:
      'Toldos de lona suportam chuva moderada, mas podem ceder com granizo ou ventos fortes. A cobertura retrátil em policarbonato suporta qualquer clima. Para proteção total e durável, a cobertura retrátil é superior.',
  },
  {
    question: 'É possível motorizar um toldo retrátil existente?',
    answer:
      'Sim. É possível adicionar motor a um toldo manual, com acionamento remoto ou Alexa. Se o toldo estiver desgastado, recomendamos substituir por cobertura retrátil em policarbonato — mais durável e com garantia de 2 anos.',
  },
  {
    question: 'Quando escolher toldo e quando escolher cobertura retrátil?',
    answer:
      'Toldo: sombra temporária com menor custo inicial, aceitando manutenção da lona. Cobertura retrátil: proteção permanente contra chuva forte, vida útil longa (15+ anos) e acabamento premium para área gourmet, piscina ou varanda de alto padrão.',
  },
];

export default function ToldoRetratil() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Toldo Retrátil', href: '/servicos/toldo-retratil' },
            ]}
          />

          {/* Hero */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src="/images/blog/cobertura-abre-fecha.jpg"
                  alt="Toldo retrátil motorizado instalado em varanda residencial — Cobersystem SP"
                  title="Toldo Retrátil Motorizado — Cobersystem SP"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Toldo Retrátil em São Paulo
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Toldo retrátil manual ou motorizado para varanda, fachada, área gourmet e
                  estabelecimentos comerciais em São Paulo e Grande SP. Saiba também quando
                  a <strong>cobertura retrátil em policarbonato</strong> é a escolha certa
                  para proteção total — mais durável que toldos convencionais.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: 'Manual ou motor', l: 'Tipo de acionamento' },
                    { v: '2 anos', l: 'Garantia Cobersystem' },
                    { v: formatBRL(COBERSYSTEM_PRICING.abreEFecha.min) + '/m²', l: 'A partir de' },
                    { v: 'Grande SP', l: 'Área atendida' },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-700">{v}</div>
                      <div className="text-xs text-gray-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  {[
                    'Proteção contra sol, chuva e vento',
                    'Manual, motorizado ou com sensor de chuva automático',
                    'Opção de acionamento via Alexa e controle remoto',
                    'Estrutura em alumínio resistente à corrosão',
                    'Projetos sob medida para residências e comércios',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contato"
                    className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition text-center"
                  >
                    Solicitar Orçamento
                  </Link>
                  <WhatsAppLink
                    href={WHATSAPP_URL}
                    location="hero"
                    serviceSlug="toldo-retratil"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                  >
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de Toldo */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tipos de Toldo Retrátil</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '✋',
                  title: 'Manual',
                  desc: 'Acionado por manivela ou crank. Simples, sem custo de motor. Ideal para varandas pequenas de até 4 metros de projeção.',
                  price: `A partir de ${formatBRL(COBERSYSTEM_PRICING.fixaAlveolar.min)}/m²`,
                },
                {
                  icon: '📡',
                  title: 'Motorizado',
                  desc: 'Motor elétrico silencioso com controle remoto. Abrir e fechar com um clique. Ideal para varandas médias e grandes.',
                  price: `A partir de ${formatBRL(COBERSYSTEM_PRICING.abreEFecha.min)}/m²`,
                },
                {
                  icon: '🤖',
                  title: 'Motorizado com Sensor',
                  desc: 'Fecha automaticamente ao detectar chuva ou vento forte. Integração com Alexa e aplicativo no celular.',
                  price: `A partir de ${formatBRL(COBERSYSTEM_PRICING.retratilAutomatizada.min)}/m²`,
                },
              ].map(({ icon, title, desc, price }) => (
                <div key={title} className="border border-gray-200 rounded-lg p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{desc}</p>
                  <p className="text-sm font-semibold text-[#D4AF37]">{price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tabela de preços */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Tabela de Preços — Toldo Retrátil SP
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-blue-600 text-white text-sm">
                    <th className="py-3 px-4 font-semibold rounded-tl-lg">Tipo</th>
                    <th className="py-3 px-4 font-semibold">Preço por m²</th>
                    <th className="py-3 px-4 font-semibold">Acionamento</th>
                    <th className="py-3 px-4 font-semibold rounded-tr-lg">Durabilidade</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Toldo manual (lona)</td>
                    <td className="py-3 px-4">{formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}</td>
                    <td className="py-3 px-4">Manivela</td>
                    <td className="py-3 px-4">5–10 anos</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Toldo motorizado (lona)</td>
                    <td className="py-3 px-4">{formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}</td>
                    <td className="py-3 px-4">Controle remoto</td>
                    <td className="py-3 px-4">5–10 anos</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Cobertura retrátil policarbonato</td>
                    <td className="py-3 px-4">{formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}</td>
                    <td className="py-3 px-4">Manual ou motor</td>
                    <td className="py-3 px-4">15–25 anos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Cobertura retrátil automatizada</td>
                    <td className="py-3 px-4">{formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}</td>
                    <td className="py-3 px-4">Alexa + sensor chuva</td>
                    <td className="py-3 px-4">15–25 anos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">{PRICE_ESTIMATE_NOTE}</p>
          </section>

          {/* Toldo × Cobertura Retrátil */}
          <section className="mb-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Toldo Retrátil × Cobertura Retrátil: qual escolher?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Entenda as diferenças para tomar a melhor decisão para seu projeto
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="text-sm text-white">
                    <th className="py-3 px-4 bg-gray-700 rounded-tl-lg font-semibold">Característica</th>
                    <th className="py-3 px-4 bg-amber-600 font-semibold">Toldo de Lona</th>
                    <th className="py-3 px-4 bg-blue-600 rounded-tr-lg font-semibold">Cobertura em Policarbonato</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {[
                    ['Proteção contra chuva forte', '⚠️ Parcial', '✅ Total'],
                    ['Resistência ao granizo', '❌ Não', '✅ Sim'],
                    ['Vida útil', '5–10 anos', '15–25 anos'],
                    ['Manutenção', 'Troca de lona frequente', 'Mínima (limpeza semestral)'],
                    ['Transparência', '❌ Não', '✅ Até 90% (policarbonato compacto)'],
                    ['Automação Alexa', '⚠️ Alguns modelos', '✅ Sim, com sensor de chuva'],
                    ['Aplicação ideal', 'Fachada, sombra temporária', 'Área gourmet, piscina, varanda'],
                  ].map(([car, toldo, cob]) => (
                    <tr key={car} className="border-b border-gray-100 hover:bg-white transition">
                      <td className="py-3 px-4 font-medium text-gray-800">{car}</td>
                      <td className="py-3 px-4">{toldo}</td>
                      <td className="py-3 px-4">{cob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Aplicações */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Onde usar toldo retrátil?</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: '🏠', title: 'Varanda Residencial', desc: 'Proteção solar e privacidade. Motorizado fecha automaticamente na chuva para proteger móveis e piso.' },
                { icon: '🍖', title: 'Área Gourmet', desc: 'Permite uso do espaço em qualquer clima. Com automação, a proteção é automática.' },
                { icon: '🏢', title: 'Fachada Comercial', desc: 'Visibilidade da vitrine + proteção para clientes. Toldo motorizado com a logo da empresa.' },
                { icon: '☕', title: 'Restaurante e Bar', desc: 'Área externa protegida para mesas ao ar livre. Amplia a capacidade do estabelecimento.' },
                { icon: '🏊', title: 'Área da Piscina', desc: 'Para proteção ao redor da piscina. Para cobertura sobre a piscina, a cobertura retrátil em policarbonato é mais indicada.' },
                { icon: '🌿', title: 'Jardim e Terraço', desc: 'Proteção do espaço externo sem comprometer a luminosidade natural das plantas.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="border border-gray-100 rounded-lg p-5 hover:shadow-sm transition">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Links internos */}
          <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Veja também coberturas retráteis permanentes</h2>
            <p className="text-gray-600 text-sm mb-4">
              Para proteção total e durável contra chuva forte e granizo, a cobertura retrátil em policarbonato é mais indicada que toldos:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/servicos/cobertura-retratil"
                className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition"
              >
                Cobertura Retrátil →
              </Link>
              <Link
                href="/servicos/cobertura-abre-e-fecha"
                className="inline-block bg-white border border-blue-300 text-blue-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
              >
                Cobertura Abre e Fecha →
              </Link>
              <Link
                href="/servicos/cobertura-retratil-automatizada"
                className="inline-block bg-white border border-blue-300 text-blue-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
              >
                Retrátil Automatizada (Alexa) →
              </Link>
            </div>
          </section>

          <PriceEstimateNote className="mb-8" />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="toldo-retratil" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite seu Orçamento de Toldo Retrátil</h2>
            <p className="text-xl mb-8 text-gray-900">
              Visita técnica gratuita em São Paulo e Grande SP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink
                href={WHATSAPP_URL}
                location="footer-cta"
                serviceSlug="toldo-retratil"
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
