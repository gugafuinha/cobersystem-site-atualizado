import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { COBERSYSTEM_PRICING, formatPricePerM2 } from '@/lib/pricing';

const CORES_ALUMINIO = [
  'Branco RAL 9016',
  'Preto RAL 9005',
  'Cinza RAL 7016',
  'Bronze / Marrom',
  'Verde musgo',
  'Azul petróleo',
  'Cores RAL sob consulta',
];

export default function CoberturaAluminioExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          O Serviço Completo de Cobertura em Alumínio
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>cobertura de alumínio</strong> como serviço Cobersystem entrega projeto,
            fabricação sob medida, pintura eletrostática na cor escolhida e instalação profissional —
            do primeiro contato à entrega com garantia. Ideal para quem busca acabamento metálico
            elegante, opacidade total e <strong>zero ferrugem</strong> ao longo dos anos.
          </p>
          <p>
            Diferente do ferro galvanizado, o alumínio não oxida de forma visível e suporta décadas
            de exposição em São Paulo. Utilizamos telhas perfiladas e sistemas intercalados para{' '}
            <strong>área gourmet</strong>, <strong>espaço kids</strong>, playgrounds, garagens e
            fachadas comerciais — sempre com estrutura dimensionada conforme vão e carga de vento.
          </p>
          <p>
            Veja também opções em policarbonato em{' '}
            <Link href="/servicos/cobertura-policarbonato" className="text-blue-600 font-semibold hover:underline">
              instalação de cobertura em policarbonato
            </Link>
            . Aqui o foco é alumínio: tipos de telha, cores, processo e aplicações.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Telha em Alumínio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              titulo: 'Telha trapezoidal',
              desc: 'Perfil ondulado clássico. Alta rigidez, excelente escoamento de água. Indicada para garagens e áreas amplas.',
            },
            {
              titulo: 'Telha intercalada',
              desc: 'Módulos alternados alumínio + policarbonato ou vazados. Combina sombra e luz. Muito usada em área gourmet e pergolados.',
            },
            {
              titulo: 'Telha termoacústica alumínio',
              desc: 'Sanduíche com núcleo isolante. Máximo conforto térmico e acústico com acabamento metálico.',
            },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Cores Disponíveis e Pintura Eletrostática
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>pintura eletrostática</strong> aplica pó polyester eletrostático sobre o
              alumínio, curado em estufa a ~200 °C. O resultado é camada uniforme, resistente a riscos
              leves, raios UV e desbotamento — com durabilidade típica de <strong>15–20 anos</strong>{' '}
              em ambiente externo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Processo: preparação da superfície → aplicação do pó → cura → controle de espessura e
              aderência. Cores RAL personalizadas disponíveis para integração com fachada e paisagismo.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {CORES_ALUMINIO.map((cor) => (
              <li key={cor} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <span className="text-blue-600">●</span>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Alumínio vs Policarbonato: Qual Escolher?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Critério</th>
                <th className="px-4 py-3">Alumínio</th>
                <th className="px-4 py-3">Policarbonato</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Luz natural', 'Opaco (controle total de sombra)', 'Translúcido / transparente'],
                ['Estética', 'Metálico, moderno, cores RAL', 'Cristal, fumê, bronze'],
                ['Isolamento térmico', 'Bom (telha sanduíche)', 'Bom (alveolar) a muito bom'],
                ['Ruído de chuva', 'Baixo com sanduíche', 'Médio no alveolar'],
                ['Manutenção', 'Mínima — sem ferrugem', 'Mínima — limpeza periódica'],
                ['Peso', 'Leve', 'Muito leve'],
                ['Faixa indicativa', formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto), formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)],
                ['Melhor para', 'Gourmet, kids, playground, garagem', 'Piscina, varanda, jardim de inverno'],
              ].map(([c, al, po], i) => (
                <tr key={c} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{c}</td>
                  <td className="px-4 py-3">{al}</td>
                  <td className="px-4 py-3">{po}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura em Alumínio 2026"
        description="Valores oficiais Cobersystem por m² (estrutura + telhas + instalação). Projetos com telha sanduíche ou vãos especiais sob orçamento."
        rows={buildPriceRowsFromKeys([
          { tipo: 'Cobertura fixa alumínio', key: 'fixaCompacto' },
          { tipo: 'Cobertura abre e fecha alumínio', key: 'abreEFecha' },
          { tipo: 'Cobertura retrátil automatizada', key: 'retratilAutomatizada' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Etapas do Projeto: Do Orçamento à Entrega
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Etapa 1 — Contato (24–48h)</h3>
          <p>Orçamento preliminar com tipo de telha, cor RAL e metragem aproximada.</p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica gratuita</h3>
          <p>Medição, checagem estrutural e amostra de cores. Duração típica: 30–45 min.</p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto e orçamento final</h3>
          <p>Memorial descritivo, desenho de fixações e valor fechado em 2–5 dias úteis.</p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Fabricação (5–12 dias)</h3>
          <p>Corte, dobra, pintura eletrostática e preparação de perfis estruturais.</p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Instalação (2–5 dias)</h3>
          <p>Montagem, calhas, rufos e limpeza. Vistoria e garantia de 2 anos na entrega.</p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Aplicações: Onde Instalamos</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              titulo: 'Espaço Kids e playground (20–40 m²)',
              texto:
                'Telhas alumínio coloridas (RAL) com proteção UV total. Seguro, sem ferrugem, fácil de higienizar. Ideal para condomínios e escolas.',
              prazo: '3–4 dias',
              investimento: 'R$ 15–30 mil',
            },
            {
              titulo: 'Área gourmet e churrasqueira (15–25 m²)',
              texto:
                'Telhas intercaladas ou trapezoidais na cor da fachada. Sombra permanente sem abrir mão do visual arquitetônico.',
              prazo: '3 dias',
              investimento: 'R$ 14–28 mil',
            },
            {
              titulo: 'Garagem residencial (18–30 m²)',
              texto:
                'Cobertura leve, resistente a granizo e sem manutenção de pintura como ferro. Excelente durabilidade.',
              prazo: '2–3 dias',
              investimento: 'R$ 12–24 mil',
            },
            {
              titulo: 'Fachada comercial (40–100 m²)',
              texto:
                'Grandes vãos com estrutura reforçada e acabamento RAL corporativo. Proteção de clientes na calçada.',
              prazo: '5–8 dias',
              investimento: 'R$ 35–90 mil',
            },
          ].map(({ titulo, texto, prazo, investimento }) => (
            <div key={titulo}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
              <p>{texto}</p>
              <p className="text-sm text-gray-600 mt-2">
                Prazo típico: <strong>{prazo}</strong> · Investimento médio: <strong>{investimento}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Galeria de Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <OptimizedImage
            src="/images/projetos/Cobertura Alumínio Espaço Kids.png"
            alt="Cobertura de alumínio em espaço kids — Cobersystem"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/produtos/cobertura-retratil/aluminio/IMG_6324.jpg"
            alt="Telhas de alumínio em cobertura retrátil"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/Cobertura Playground.png"
            alt="Cobertura alumínio em área de playground"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Garantia e Por Que Escolher a Cobersystem</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Garantia de 2 anos</strong> em estrutura, telhas e pintura eletrostática (uso
            normal, sem vandalismo). Alumínio não requer pintura periódica como aço carbono.
          </p>
          <p>
            Equipe própria, projeto com visita técnica gratuita, orçamento discriminado e suporte
            pós-venda por WhatsApp. Atendemos São Paulo e Grande SP.
          </p>
        </div>
      </section>
    </div>
  );
}
