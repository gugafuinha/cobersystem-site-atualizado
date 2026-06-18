import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductVejaTambem from '@/components/ProductVejaTambem';
import ProdutoInstalacaoLink from '@/components/produto/ProdutoInstalacaoLink';
import ProdutoAplicacoes, { AplicacaoItem } from '@/components/produto/ProdutoAplicacoes';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FAQSchema from '@/components/FAQSchema';
import { CIDADES_COBERTURA_POLICARBONATO } from '@/lib/cobertura-policarbonato-cidades';
import { productSchemas } from '@/lib/schemas/product-schemas';
import { faqSchemas } from '@/lib/schemas/faq-schemas';
import { generatePageMetadata } from '@/lib/seo/page-metadata';
import CoberturaPolicarbonatoExpandedSections from './CoberturaPolicarbonatoExpandedSections';
import {
  COBERSYSTEM_PRICING,
  formatPricePerM2,
  getPolicarbonatoFaqPriceAnswer,
  PRICE_ESTIMATE_NOTE,
} from '@/lib/pricing';

export const metadata = generatePageMetadata('cobertura-policarbonato');

const aplicacoesPolicarbonato: AplicacaoItem[] = [
  { href: '/servicos/cobertura-garagem',          label: 'Cobertura de Policarbonato para Garagem',         descricao: 'Proteção permanente de veículos com transparência e resistência a granizo.' },
  { href: '/servicos/cobertura-corredor-lateral', label: 'Cobertura de Policarbonato para Corredor',        descricao: 'Iluminação natural e proteção em passagens laterais e corredores.' },
  { href: '/servicos/cobertura-playground',       label: 'Cobertura de Policarbonato para Playground',     descricao: 'Segurança e proteção solar para playgrounds em condomínios e escolas.' },
  { href: '/servicos/cobertura-jardim-de-inverno',label: 'Cobertura de Policarbonato para Jardim de Inverno', descricao: 'Policarbonato translúcido que mantém luminosidade e protege plantas.' },
];

const produtosFixa = [
  {
    id: 'fixa-compacto',
    nome: 'Cobertura Fixa em Policarbonato Compacto',
    slug: 'fixa-compacto',
    descricao: 'Cobertura permanente em policarbonato compacto. Transparência total ou cores personalizadas. Proteção constante contra chuva e sol.',
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Proteção permanente',
      'Resistente a impactos',
      'Proteção UV integrada',
      'Estrutura de alumínio robusta',
    ],
    aplicacoes: [
      'Área de estacionamento',
      'Entrada de residência',
      'Área de serviço',
      'Cobertura permanente',
    ],
    image:
      '/images/produtos/cobertura-policarbonato/compacto/IMG_2017.jpg',
    alt: 'Cobertura fixa em policarbonato compacto cristal para garagem ou entrada',
  },
  {
    id: 'fixa-alveolar',
    nome: 'Cobertura Fixa em Policarbonato Alveolar',
    slug: 'fixa-alveolar',
    descricao: 'Cobertura fixa com excelente isolamento térmico e acústico. Perfeita para áreas que precisam de proteção constante e conforto.',
    caracteristicas: [
      'Isolamento térmico superior',
      'Redução de ruído',
      'Alta resistência',
      'Proteção permanente',
      'Estrutura de alumínio robusta',
    ],
    aplicacoes: [
      'Área de lazer permanente',
      'Garagem coberta',
      'Área de convivência',
      'Cobertura industrial',
    ],
    image: '/images/produtos/cobertura-policarbonato/alveolar/IMG_4432.jpg',
    alt: 'Cobertura policarbonato alveolar instalada em área externa com telhado',
  },
];

export default function CoberturaFixa() {
  return (
    <>
      <StructuredData data={productSchemas.coberturaPolicarbonato} />
      <StructuredData data={faqSchemas.coberturaPolicarbonato} />
      <Breadcrumb />
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            { label: 'Cobertura Fixa em Policarbonato', href: '/produtos/cobertura-policarbonato' },
          ]}
        />

        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Fixa em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proteção permanente com alta qualidade. Cobertura fixa em policarbonato 
            compacto e alveolar para áreas que precisam de proteção constante.
          </p>
          <p className="mt-4 text-lg font-semibold text-blue-700">
            A partir de {formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}/m² · Visita técnica gratuita
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5511943615079?text=Olá! Tenho interesse em cobertura de policarbonato e quero um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              💬 Falar no WhatsApp
            </a>
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </section>

        {/* Produtos */}
        <section className="mb-16 space-y-10 md:space-y-12">
          {produtosFixa.map((produto, index) => (
            <article key={produto.id} className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                  <div className="relative w-full h-72 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={produto.image}
                      alt={produto.alt}
                      fill
                      priority={index === 0}
                      className="object-cover object-center"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col gap-5">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {produto.nome}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {produto.descricao}
                    </p>
                    <div className="grid grid-cols-1 gap-6 border-t border-gray-100 pt-5 md:grid-cols-2 md:gap-x-8">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Características
                        </h3>
                        <ul className="space-y-2">
                          {produto.caracteristicas.map((caracteristica, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-blue-600">✓</span>
                              <span className="text-gray-700">{caracteristica}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Aplicações
                        </h3>
                        <ul className="space-y-2">
                          {produto.aplicacoes.map((aplicacao, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-blue-600">•</span>
                              <span className="text-gray-700">{aplicacao}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href={`/produtos/cobertura-policarbonato/${produto.slug}`}
                      className="inline-block bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 rounded-lg"
                    >
                      Ver Detalhes Completos →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-16 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <h2 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
            Atendimento por região
          </h2>
          <p className="mb-4 text-gray-600">
            Páginas com informações da linha de cobertura em policarbonato na sua
            cidade:
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {CIDADES_COBERTURA_POLICARBONATO.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/produtos/cobertura-policarbonato/em/${c.slug}`}
                  className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:ring-blue-200"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CoberturaPolicarbonatoExpandedSections />

        {/* Comparação */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Cobertura Fixa vs Retrátil
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Cobertura Fixa
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Proteção permanente</li>
                <li>✓ Custo mais baixo</li>
                <li>✓ Instalação mais simples</li>
                <li>✗ Sem controle de ventilação</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Cobertura Retrátil
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Controle total do clima</li>
                <li>✓ Ventilação quando necessário</li>
                <li>✓ Automação inteligente</li>
                <li>✗ Investimento maior</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tabela de Preços por Tipo e Espessura */}
        <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Preço de Cobertura em Policarbonato por m²
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Valores para São Paulo e Grande SP — visita técnica e orçamento gratuitos
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-blue-600 text-white text-sm">
                  <th className="py-3 px-4 font-semibold rounded-tl-lg">Tipo / Espessura</th>
                  <th className="py-3 px-4 font-semibold">Preço por m²</th>
                  <th className="py-3 px-4 font-semibold">Melhor Para</th>
                  <th className="py-3 px-4 font-semibold rounded-tr-lg">Durabilidade</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100 hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-medium">Alveolar 6mm</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">{formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}</td>
                  <td className="py-4 px-4">Garagem, varanda, área gourmet</td>
                  <td className="py-4 px-4">15–20 anos</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-medium">Alveolar 10mm</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">{formatPricePerM2({ min: COBERSYSTEM_PRICING.fixaAlveolar.min + 100, max: COBERSYSTEM_PRICING.fixaAlveolar.max + 100 })}</td>
                  <td className="py-4 px-4">Jardim de inverno, regiões quentes</td>
                  <td className="py-4 px-4">20–25 anos</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-medium">Compacto 2mm</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">{formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)}</td>
                  <td className="py-4 px-4">Entrada, corredor, máxima transparência</td>
                  <td className="py-4 px-4">15–20 anos</td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-medium">Compacto 4mm</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">{formatPricePerM2({ min: COBERSYSTEM_PRICING.fixaCompacto.min + 100, max: COBERSYSTEM_PRICING.fixaCompacto.max + 100 })}</td>
                  <td className="py-4 px-4">Uso intenso, garagem coberta, industria</td>
                  <td className="py-4 px-4">20–25 anos</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">{PRICE_ESTIMATE_NOTE}</p>
        </section>

        {/* Comparativo Alveolar × Compacto */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Alveolar ou Compacto? Qual escolher?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Entenda as diferenças entre os dois tipos de policarbonato para fazer a escolha certa
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="text-sm text-gray-600 border-b-2 border-gray-300">
                  <th className="py-3 px-4 font-semibold">Característica</th>
                  <th className="py-3 px-4 font-semibold text-blue-700">Alveolar</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">Compacto</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {[
                  ['Transparência', 'Translúcido (difusa)', 'Até 90% (cristal)'],
                  ['Isolamento térmico', 'Excelente (câmaras de ar)', 'Regular'],
                  ['Isolamento acústico', 'Bom (reduz ruído de chuva)', 'Menor'],
                  ['Resistência a impacto', 'Alta', 'Muito alta'],
                  ['Preço por m²', formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar), formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)],
                  ['Espessuras disponíveis', '4mm, 6mm, 8mm, 10mm', '2mm, 3mm, 4mm'],
                  ['Melhor para', 'Área gourmet, jardim inverno, piscina', 'Entrada, corredor, garagem'],
                  ['Peso (kg/m²)', '~1,0–1,3 kg', '~2,4–4,8 kg'],
                ].map(([car, alv, comp]) => (
                  <tr key={car} className="border-b border-gray-100 hover:bg-white transition">
                    <td className="py-3 px-4 font-medium text-gray-800">{car}</td>
                    <td className="py-3 px-4">{alv}</td>
                    <td className="py-3 px-4">{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">✅ Escolha o Alveolar se:</h3>
              <ul className="text-sm text-blue-900 space-y-1">
                <li>• Quer conforto térmico e menos calor no verão</li>
                <li>• Precisa reduzir o ruído de chuva</li>
                <li>• O ambiente é área gourmet, piscina ou jardim de inverno</li>
                <li>• Quer o melhor custo-benefício para coberturas amplas</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">✅ Escolha o Compacto se:</h3>
              <ul className="text-sm text-amber-900 space-y-1">
                <li>• Quer máxima transparência e claridade</li>
                <li>• O ambiente é entrada, corredor ou garagem</li>
                <li>• Precisa de alta resistência a impactos e granizo</li>
                <li>• Quer resultado visual mais próximo ao vidro</li>
              </ul>
            </div>
          </div>
        </section>

        <ProdutoInstalacaoLink
          servicoSlug="cobertura-policarbonato"
          servicoLabel="cobertura de policarbonato"
          descricao="Veja como funciona o serviço de instalação de cobertura de policarbonato em SP: visita técnica gratuita, projeto sob medida e garantia de 2 anos."
        />

        <ProdutoAplicacoes aplicacoes={aplicacoesPolicarbonato} />

        {/* FAQ visível — 8 perguntas */}
        <FAQSchema
          faqs={[
            {
              question: 'Quanto custa cobertura em policarbonato fixa por m²?',
              answer: getPolicarbonatoFaqPriceAnswer(),
            },
            {
              question: 'Qual a diferença de preço entre policarbonato alveolar e compacto?',
              answer: getPolicarbonatoFaqPriceAnswer(),
            },
            {
              question: 'Policarbonato 6mm ou 10mm: qual escolher?',
              answer: 'O policarbonato alveolar 6mm é o mais utilizado para residências: boa relação entre isolamento térmico, leveza e custo. O 10mm oferece isolamento superior e é indicado para regiões com calor intenso ou muito barulho externo (chuva, trânsito). Para coberturas de garagem e área gourmet, o 6mm atende a maioria dos casos. Para jardim de inverno ou ambiente que precisa de maior conforto climático, o 10mm vale o investimento.',
            },
            {
              question: 'Cobertura de policarbonato esquenta muito?',
              answer: 'Depende do tipo. Policarbonato alveolar reduz até 40% do calor graças às câmaras de ar internas. Policarbonato compacto cristal transmite mais calor, mas oferecemos versões com tratamento térmico que bloqueiam até 60% do calor. Para áreas muito expostas ao sol, recomendamos o alveolar bronze ou fumê (reduz até 70% do calor).',
            },
            {
              question: 'Qual a vida útil de cobertura de policarbonato?',
              answer: 'Policarbonato de qualidade com proteção UV dura 15 a 25 anos sem amarelar ou perder transparência. A garantia da Cobersystem é de 2 anos contra defeitos de fabricação e instalação. Estrutura de alumínio dura mais de 30 anos.',
            },
            {
              question: 'Policarbonato protege contra raios UV?',
              answer: 'Sim! Todo policarbonato que fornecemos tem proteção UV 99%, bloqueando raios UVA e UVB. Isso protege pessoas, móveis, estofados e a pintura de veículos. A camada UV é aplicada durante a fabricação e não sai com o tempo.',
            },
            {
              question: 'Quanto tempo leva a instalação de cobertura fixa em policarbonato?',
              answer: 'A instalação leva de 1 a 3 dias úteis para áreas de até 40 m², sem obras ou quebra de paredes. A estrutura de alumínio é fixada diretamente na alvenaria. Nossa equipe deixa o espaço limpo ao término. Garantia de 2 anos para estrutura e materiais.',
            },
            {
              question: 'Pode instalar cobertura de policarbonato em qualquer lugar?',
              answer: 'Sim, o policarbonato é extremamente versátil! Instalamos em garagens, áreas gourmet, piscinas, varandas, jardins de inverno, corredores, entradas de prédios e coberturas industriais — em residências e comércios. A estrutura se adapta a alvenaria, madeira e estrutura metálica. Projeto personalizado com garantia de 2 anos.',
            },
          ]}
        />

        <ProductVejaTambem current="policarbonato" />

        {/* Artigos Relacionados */}
        <section className="mb-12 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Artigos Relacionados</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="/blog/acrilico-ou-policarbonato-qual-melhor"
              className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
              <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Acrílico ou Policarbonato: Qual o Melhor para Cobertura? [2026]</span>
              <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
            </a>
            <a
              href="/blog/chapa-policarbonato-tipos-medidas-precos"
              className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
              <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Chapa de Policarbonato: Tipos, Medidas e Preços por Metro</span>
              <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
            </a>
            <a
              href="/blog/cobertura-acustica-reduzir-barulho-chuva"
              className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2 block">Blog</span>
              <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition leading-snug block">Cobertura Acústica: Como Reduzir o Barulho da Chuva [2026]</span>
              <span className="mt-3 text-sm text-blue-600 font-medium block">Ler artigo →</span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre cobertura fixa?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5511943615079?text=Olá! Tenho interesse em cobertura de policarbonato e quero um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}

