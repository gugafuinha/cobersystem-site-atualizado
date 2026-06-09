import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import {
  COBERSYSTEM_PRICING,
  formatPriceFrom,
  formatPriceRange,
  getJardimInvernoFaqPriceAnswer,
  getServiceSchemaMinPrice,
} from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';

export const metadata: Metadata = {
  title: 'Cobertura para Jardim de Inverno | Policarbonato Transparente | Cobersystem SP',
  description:
    'Cobertura para jardim de inverno em policarbonato compacto transparente. Mantém luz natural para plantas, proteção contra chuva e temperatura controlada. Projeto e instalação em SP. Orçamento grátis.',
  keywords:
    'cobertura jardim de inverno, cobertura para jardim de inverno, jardim de inverno policarbonato, cobertura transparente jardim, telhado jardim de inverno, cobertura vidro jardim inverno SP',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-jardim-de-inverno',
  },
  openGraph: {
    title: 'Cobertura para Jardim de Inverno | Policarbonato Transparente | Cobersystem SP',
    description:
      'Cobertura em policarbonato para jardim de inverno. Luz natural preservada, proteção total contra chuva e conforto térmico.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-jardim-de-inverno',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Jardim de Inverno',
  image: ['https://www.coberturapolicarbonato.com.br/images/projetos/jardim-de-inverno-02.png'],
  description:
    'Cobertura em policarbonato compacto transparente para jardim de inverno. Preserva luz natural para plantas, com proteção contra chuva, vento e variações de temperatura.',
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-jardim-de-inverno',
    getServiceSchemaMinPrice('cobertura-jardim-de-inverno'),
  ),
};

const faqs = [
  {
    question: 'Qual policarbonato é melhor para jardim de inverno?',
    answer:
      'Para jardim de inverno, o policarbonato compacto transparente de 4mm ou 6mm é a melhor escolha. Ele transmite até 88% da luz solar (essencial para plantas), é resistente a impactos, filtra raios UV e mantém temperatura mais estável que o vidro. O policarbonato alveolar também é usado, mas com menor transparência.',
  },
  {
    question: 'O policarbonato deixa luz suficiente para as plantas?',
    answer:
      'Sim. O policarbonato compacto transparente transmite 82–88% da luz solar, o que é suficiente para a maioria das plantas de interior e jardim de inverno. Ele também filtra raios UV excessivos, o que pode ser benéfico para espécies sensíveis.',
  },
  {
    question: 'Quanto custa uma cobertura para jardim de inverno?',
    answer: getJardimInvernoFaqPriceAnswer(),
  },
  {
    question: 'Posso fechar o jardim de inverno completamente?',
    answer:
      'Sim. A cobertura pode ser combinada com vedação lateral em policarbonato ou vidro, criando um espaço totalmente fechado que regula temperatura, umidade e protege as plantas durante todo o ano. A Cobersystem elabora projetos completos com fechamento total.',
  },
  {
    question: 'A cobertura para jardim de inverno precisa de manutenção?',
    answer:
      'Mínima. O policarbonato e a estrutura de alumínio não enferrujam e exigem apenas limpeza periódica com água e sabão neutro. A garantia do sistema é de 10 anos contra defeitos de fabricação do policarbonato.',
  },
];

export default function CoberturaJardimDeInverno() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Cobertura Jardim de Inverno', href: '/servicos/cobertura-jardim-de-inverno' },
            ]}
          />

          {/* Hero */}
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <figure className="relative w-full overflow-hidden rounded-xl bg-gray-900" style={{ aspectRatio: '3/4' }}>
                <OptimizedImage
                  src="/images/projetos/jardim-de-inverno-02.png"
                  alt="Jardim de inverno integrado à cozinha com cobertura em policarbonato compacto retrátil — projeto Cobersystem SP"
                  title="Cobertura para Jardim de Inverno com Policarbonato Compacto — Cobersystem"
                  width={900}
                  height={1200}
                  priority
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 50%' }}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-2 px-3">
                  Cobertura para Jardim de Inverno com Policarbonato Compacto
                </figcaption>
              </figure>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cobertura para Jardim de Inverno
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cobertura em policarbonato compacto transparente especialmente projetada para jardins de inverno.
                  Preserva até 88% da luz natural para as plantas, protege contra chuva e vento, e mantém
                  temperatura estável o ano todo. Estrutura em alumínio anodizado, sem manutenção.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Por que policarbonato para jardim de inverno
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Transmissão de luz de até 88% — ideal para plantas que precisam de sol</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Filtro UV integrado protege folhas de queimaduras por radiação excessiva</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>250x mais resistente que vidro — sem risco de quebra por granizo ou impacto</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Isolamento térmico superior ao vidro simples — menos variação de temperatura</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Estrutura em alumínio anodizado — sem ferrugem, manutenção mínima</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Opção retrátil: abre e fecha para ventilação natural nos dias de sol</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tipos de policarbonato */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Tipos de Policarbonato para Jardim de Inverno
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compacto 4mm</h3>
                <p className="text-gray-600 mb-3">
                  Alta transparência (88% de transmissão de luz). Indicado para jardins com plantas que
                  precisam de muita luminosidade.
                </p>
                <p className="text-sm font-semibold text-[#D4AF37]">
                  {formatPriceFrom('fixaCompacto')}
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compacto 6mm</h3>
                <p className="text-gray-600 mb-3">
                  Maior resistência estrutural e melhor isolamento térmico. Ideal para vãos maiores e regiões
                  com variações climáticas intensas.
                </p>
                <p className="text-sm font-semibold text-[#D4AF37]">
                  {formatPriceFrom('fixaCompacto')}
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Alveolar 6mm</h3>
                <p className="text-gray-600 mb-3">
                  Menor transparência (60–75% de luz), porém excelente isolamento térmico. Indicado para
                  jardins que precisam de mais conforto térmico.
                </p>
                <p className="text-sm font-semibold text-[#D4AF37]">
                  {formatPriceFrom('fixaAlveolar')}
                </p>
              </div>
            </div>
          </section>

          {/* Seção com imagem de projeto */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Projetos Executados</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <figure className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 relative">
                <OptimizedImage
                  src="/images/projetos/jardim-de-inverno-01.png"
                  alt="Projeto executado de cobertura para jardim de inverno em São Paulo — Cobersystem"
                  title="Projeto executado — Cobertura para Jardim de Inverno em SP"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-2 px-3">
                  Projeto executado — Cobertura para Jardim de Inverno em SP
                </figcaption>
              </figure>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Do Projeto à Instalação em SP
                </h3>
                <p className="text-gray-700 mb-4">
                  A Cobersystem realiza todo o processo: visita técnica gratuita, projeto personalizado com
                  dimensionamento do vão, escolha do policarbonato ideal para cada tipo de planta e
                  instalação profissional em São Paulo e Grande SP.
                </p>
                <p className="text-gray-700 mb-4">
                  Todos os projetos incluem estrutura de alumínio com perfis específicos para jardim de
                  inverno, vedação lateral opcional (em policarbonato ou vidro), e sistema de calhas e
                  rufos para escoamento de chuva.
                </p>
                <Link
                  href="/contato"
                  className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A030] transition"
                >
                  Solicitar Orçamento Grátis
                </Link>
              </div>
            </div>
          </section>

          {/* Comparativo com vidro */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Policarbonato vs. Vidro para Jardim de Inverno
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 font-semibold text-gray-700 border">Característica</th>
                    <th className="p-3 font-semibold text-gray-700 border">Policarbonato</th>
                    <th className="p-3 font-semibold text-gray-700 border">Vidro Temperado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Transmissão de luz', '82–88%', '90%'],
                    ['Resistência a impacto', '250x maior', 'Quebra'],
                    ['Peso (kg/m²)', '4–6 kg', '25–30 kg'],
                    ['Isolamento térmico', 'Bom', 'Fraco'],
                    ['Filtro UV integrado', 'Sim', 'Não padrão'],
                    [
                      'Custo por m²',
                      `${formatPriceRange(COBERSYSTEM_PRICING.fixaAlveolar)} a ${formatPriceRange(COBERSYSTEM_PRICING.fixaCompacto)}`,
                      'R$ 1.500–3.000',
                    ],
                    ['Risco de quebra', 'Mínimo', 'Alto'],
                  ].map(([feat, poly, glass]) => (
                    <tr key={feat} className="border-b">
                      <td className="p-3 font-medium text-gray-700 border">{feat}</td>
                      <td className="p-3 text-green-700 font-medium border">{poly}</td>
                      <td className="p-3 text-gray-600 border">{glass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PriceEstimateNote />
          </section>

          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="area-gourmet" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Orçamento para Jardim de Inverno</h2>
            <p className="text-xl mb-8 text-gray-900">
              Visita técnica gratuita em SP. Resposta em até 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Gostaria+de+or%C3%A7amento+para+cobertura+de+jardim+de+inverno."
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
