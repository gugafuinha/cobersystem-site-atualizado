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
  PRICE_ESTIMATE_NOTE,
} from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PAGE_URL = `${BASE}/servicos/cobertura-vidro`;
const HERO_IMAGE = `${BASE}/images/projetos/fixa-01.jpg`;
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20cobertura%20de%20vidro.';

export const metadata: Metadata = {
  title: 'Cobertura de Vidro em São Paulo | Retrátil e Fixa | Cobersystem',
  description:
    'Cobertura de vidro temperado ou laminado para jardim de inverno, varanda e área gourmet em SP. Compare vidro × policarbonato. Retrátil ou fixa. Orçamento grátis com visita técnica.',
  keywords:
    'cobertura de vidro, cobertura de vidro retrátil, cobertura vidro temperado, cobertura vidro SP, cobertura vidro jardim de inverno, cobertura de vidro varanda, cobertura de vidro preço',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Cobertura de Vidro em São Paulo | Retrátil e Fixa | Cobersystem',
    description:
      'Cobertura de vidro para jardim de inverno, varanda e área gourmet. Compare com policarbonato e escolha a melhor opção.',
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 900, alt: 'Cobertura de Vidro São Paulo' }],
  },
  twitter: { card: 'summary_large_image', images: [HERO_IMAGE] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instalação de Cobertura de Vidro',
  name: 'Cobertura de Vidro em São Paulo',
  description:
    'Projeto e instalação de cobertura de vidro temperado ou laminado para jardim de inverno, varanda e área gourmet em São Paulo e Grande SP.',
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
  offers: buildServiceOffer(PAGE_URL, String(COBERSYSTEM_PRICING.fixaCompacto.min)),
};

const faqs = [
  {
    question: 'Qual o preço de cobertura de vidro por m² em SP?',
    answer: `Cobertura de vidro temperado fixo começa em torno de R$ ${formatBRL(COBERSYSTEM_PRICING.fixaCompacto.min)}/m², podendo chegar a R$ 2.500–4.000/m² para sistemas retráteis com automação. Para projetos residenciais com objetivo de luminosidade, o policarbonato compacto (${formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)}) oferece resultado visual similar ao vidro com custo mais acessível.`,
  },
  {
    question: 'Qual a diferença entre cobertura de vidro e policarbonato?',
    answer:
      'Vidro: estética premium, maior peso e custo, não aceita flexão. Policarbonato compacto: transparência de até 90% (similar ao vidro), 250× mais resistente a impactos, aceita curvatura, menor custo. Para a maioria das residências, o policarbonato compacto é a escolha mais vantajosa.',
  },
  {
    question: 'O vidro temperado é seguro para cobertura?',
    answer:
      'Sim. O vidro temperado é 4× mais resistente que o vidro comum. Para coberturas sobre pessoas, recomenda-se vidro laminado — que mantém fragmentos unidos mesmo quando quebrado, prevenindo acidentes.',
  },
  {
    question: 'É possível fazer cobertura de vidro retrátil?',
    answer:
      'Sim, existem sistemas com painéis de vidro deslizantes sobre trilhos de alumínio. A Cobersystem instala coberturas retráteis em policarbonato compacto cristal — transparência próxima ao vidro, mais prática e acessível para projetos residenciais.',
  },
  {
    question: 'Cobertura de vidro aguenta granizo?',
    answer:
      'Vidro temperado suporta granizo pequeno, mas pode quebrar com granizo intenso (frequente no verão paulistano). O policarbonato é 250× mais resistente a impactos — para coberturas expostas ao clima SP, é a escolha mais segura.',
  },
];

export default function CoberturaVidro() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura de Vidro', href: '/servicos/cobertura-vidro' },
            ]}
          />

          {/* Hero */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src="/images/projetos/fixa-01.jpg"
                  alt="Cobertura de vidro temperado para jardim de inverno e varanda — projeto Cobersystem SP"
                  title="Cobertura de Vidro — Cobersystem SP"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura de Vidro em São Paulo
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Soluções de cobertura em vidro temperado ou laminado para jardim de inverno,
                  varanda, área gourmet e fachada em SP. Entenda também quando o{' '}
                  <strong>policarbonato compacto</strong> é a alternativa mais inteligente
                  ao vidro — com transparência similar, maior resistência e menor custo.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { v: 'Temperado ou Laminado', l: 'Tipo de vidro' },
                    { v: 'Fixo ou Retrátil', l: 'Sistema' },
                    { v: formatBRL(COBERSYSTEM_PRICING.fixaCompacto.min) + '/m²', l: 'A partir de' },
                    { v: 'Grande SP', l: 'Área atendida' },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold text-blue-700">{v}</div>
                      <div className="text-xs text-gray-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  {[
                    'Vidro temperado 8–12mm ou laminado para segurança máxima',
                    'Estrutura de alumínio anodizado resistente à corrosão',
                    'Sistema fixo, basculante ou retrátil com painéis deslizantes',
                    'Ideal para jardim de inverno, varanda e área gourmet premium',
                    'Alternativa: policarbonato compacto cristal — 250× mais resistente que vidro',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/orcamento"
                    className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition text-center"
                  >
                    Solicitar Orçamento
                  </Link>
                  <WhatsAppLink
                    href={WHATSAPP_URL}
                    location="hero"
                    serviceSlug="cobertura-vidro"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                  >
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de vidro */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tipos de Vidro para Cobertura</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🔷',
                  title: 'Vidro Temperado',
                  specs: ['Espessura: 8–12mm', '4× mais resistente que vidro comum', 'Fragmenta em pedaços arredondados', 'Menor custo entre os vidros de segurança'],
                  best: 'Coberturas com baixo risco de impacto',
                },
                {
                  icon: '🛡️',
                  title: 'Vidro Laminado',
                  specs: ['Película entre duas lâminas de vidro', 'Mantém fragmentos unidos ao quebrar', 'Segurança máxima para coberturas sobre pessoas', 'Maior isolamento acústico'],
                  best: 'Jardim de inverno, área gourmet premium',
                },
                {
                  icon: '🌡️',
                  title: 'Vidro Insulado (duplo)',
                  specs: ['Duas lâminas com câmara de ar', 'Melhor isolamento térmico', 'Reduz perda de calor no inverno', 'Mais pesado — exige estrutura reforçada'],
                  best: 'Jardim de inverno com climatização',
                },
              ].map(({ icon, title, specs, best }) => (
                <div key={title} className="border border-gray-200 rounded-lg p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {specs.map((s) => <li key={s} className="flex gap-2"><span className="text-blue-500">•</span>{s}</li>)}
                  </ul>
                  <p className="text-xs font-semibold text-[#D4AF37]">Ideal para: {best}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tabela comparativa vidro × policarbonato */}
          <section className="mb-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Cobertura de Vidro × Policarbonato Compacto
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Qual material é mais indicado para o seu projeto?
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="text-sm text-white">
                    <th className="py-3 px-4 bg-gray-700 rounded-tl-lg font-semibold">Característica</th>
                    <th className="py-3 px-4 bg-blue-700 font-semibold">Vidro</th>
                    <th className="py-3 px-4 bg-blue-500 rounded-tr-lg font-semibold">Policarbonato Compacto</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {[
                    ['Transparência', 'Até 92%', 'Até 90%'],
                    ['Resistência a impactos', 'Alta (temperado)', '250× mais que vidro'],
                    ['Resistência ao granizo', '⚠️ Pode quebrar', '✅ Alta resistência'],
                    ['Peso (kg/m²)', '20–30 kg (8mm)', '2,4 kg (2mm)'],
                    ['Preço por m²', 'R$ 800–4.000/m²', formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)],
                    ['Curvatura / formatos', '❌ Não aceita curvas', '✅ Aceita curvatura'],
                    ['Vida útil', '20–30 anos', '15–25 anos'],
                    ['Isolamento térmico', '⚠️ Regular', '⚠️ Regular (alveolar: bom)'],
                  ].map(([car, vidro, poli]) => (
                    <tr key={car} className="border-b border-gray-100 hover:bg-white transition">
                      <td className="py-3 px-4 font-medium text-gray-800">{car}</td>
                      <td className="py-3 px-4">{vidro}</td>
                      <td className="py-3 px-4">{poli}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Aplicações */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Aplicações para Cobertura de Vidro</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🌿',
                  title: 'Jardim de Inverno',
                  desc: 'O ambiente mais indicado para vidro: luminosidade total, proteção das plantas e visual premium. Vidro laminado garante segurança máxima sobre vegetação e móveis.',
                  link: '/servicos/cobertura-jardim-de-inverno',
                },
                {
                  icon: '🏠',
                  title: 'Varanda e Terraço',
                  desc: 'Cobertura de vidro retrátil ou fixa para varandas de alto padrão. Para varandas com exposição ao sol intenso, o policarbonato alveolar é mais eficiente termicamente.',
                  link: '/servicos/cobertura-varanda-apartamento',
                },
                {
                  icon: '🍖',
                  title: 'Área Gourmet Premium',
                  desc: 'Vidro laminado cria ambiente integrado e elegante para espaços gourmet de luxo. Combine com perfis de alumínio e iluminação embutida.',
                  link: '/servicos/cobertura-area-gourmet',
                },
                {
                  icon: '🏢',
                  title: 'Fachada e Pergolado',
                  desc: 'Coberturas em vidro para fachadas de comércios, condomínios e espaços de eventos. Integrado ao pergolado para resultado arquitetônico premium.',
                  link: '/servicos/cobertura-pergolado',
                },
              ].map(({ icon, title, desc, link }) => (
                <div key={title} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                  <Link href={link} className="text-blue-600 text-sm font-semibold hover:underline">
                    Saiba mais →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Links internos */}
          <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Veja também alternativas em policarbonato</h2>
            <p className="text-gray-600 text-sm mb-4">
              Para projetos residenciais, o policarbonato compacto cristal oferece transparência próxima ao vidro com maior resistência e menor custo:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/servicos/cobertura-jardim-de-inverno"
                className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition"
              >
                Jardim de Inverno →
              </Link>
              <Link
                href="/servicos/cobertura-retratil"
                className="inline-block bg-white border border-blue-300 text-blue-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
              >
                Cobertura Retrátil →
              </Link>
              <Link
                href="/servicos/cobertura-fixa-policarbonato-compacto"
                className="inline-block bg-white border border-blue-300 text-blue-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
              >
                Policarbonato Compacto →
              </Link>
            </div>
          </section>

          <PriceEstimateNote className="mb-8" />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="cobertura-vidro" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Orçamento de Cobertura de Vidro</h2>
            <p className="text-xl mb-8 text-gray-900">
              Visita técnica gratuita em SP — projeto personalizado para seu espaço
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <WhatsAppLink
                href={WHATSAPP_URL}
                location="footer-cta"
                serviceSlug="cobertura-vidro"
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
