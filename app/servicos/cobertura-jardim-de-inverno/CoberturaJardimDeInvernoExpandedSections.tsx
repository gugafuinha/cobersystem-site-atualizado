import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { COBERSYSTEM_PRICING, formatPriceFrom, formatPricePerM2, formatPriceRange } from '@/lib/pricing';

export default function CoberturaJardimDeInvernoExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          O Serviço Completo de Cobertura para Jardim de Inverno
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>cobertura para jardim de inverno</strong> não é apenas um telhado: é um projeto que
            equilibra <strong>luz natural para plantas</strong>, <strong>controle térmico</strong>,{' '}
            <strong>umidade</strong> e proteção contra chuva e vento. Na Cobersystem, dimensionamos o
            policarbonato conforme as espécies (folhagens de sombra, orquídeas, suculentas ou tropicais),
            definimos inclinação para escoamento sem gotejamento sobre as folhas e, se necessário, vedação
            lateral para criar microclima estável o ano todo.
          </p>
          <p>
            O policarbonato <strong>compacto transparente 4mm ou 6mm</strong> transmite 82–88% da luz solar
            — essencial para fotossíntese — e filtra UV excessivo que queima folhas sensíveis. Para jardins
            que priorizam conforto térmico (menos variação entre dia e noite), o{' '}
            <strong>alveolar 6mm</strong> reduz calor com transparência moderada (60–75% de luz).
          </p>
          <p>
            Para cobertura fixa em outros ambientes, veja{' '}
            <Link
              href="/servicos/cobertura-fixa-policarbonato-compacto"
              className="text-blue-600 font-semibold hover:underline"
            >
              cobertura fixa compacto
            </Link>
            . Se precisa abrir para ventilar plantas nos dias quentes, consulte{' '}
            <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-600 font-semibold hover:underline">
              cobertura abre e fecha
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Etapas do Projeto: Do Brief à Entrega do Jardim Coberto
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Etapa 1 — Brief e orçamento (24–48h)</h3>
          <p>
            Coletamos metragem, espécies de plantas, necessidade de luz (pleno sol, meia-sombra ou
            sombra), se há irrigação automática e se deseja fechamento lateral. Orçamento preliminar com
            faixa {formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)} (compacto) ou{' '}
            {formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)} (alveolar).
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica gratuita</h3>
          <p>
            Medição do vão, análise de exposição solar (manhã/tarde), pontos de fixação, drenagem e
            umidade existente. Avaliamos se há pergolado ou estrutura prévia e orientamos posicionamento
            das plantas após a cobertura.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto botânico-técnico</h3>
          <p>
            Memorial com tipo e espessura do policarbonato por zona, calhas para não gotejar sobre folhas,
            ventilação (aberturas ou retrátil opcional) e vedação lateral se o objetivo for microclima
            fechado. Orçamento final em 2–5 dias úteis.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Fabricação (5–10 dias)</h3>
          <p>
            Produção da estrutura em alumínio anodizado e chapas sob medida. Cores e transparência
            conforme projeto aprovado.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Instalação (2–4 dias)</h3>
          <p>
            Montagem com cuidado para não danificar plantas já instaladas. Teste de escoamento, vedações
            e verificação de incidência de luz no centro do jardim.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 6 — Entrega e orientação</h3>
          <p>
            Vistoria conjunta, manual de limpeza (água e sabão neutro — sem solventes que prejudicam
            plantas) e <strong>garantia de 2 anos</strong> na instalação Cobersystem.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Aplicações: Cenários de Jardim de Inverno
        </h2>
        <p className="text-gray-600 mb-8 text-sm">
          Cada cenário considera necessidades distintas de luz, temperatura e umidade — não são aplicações
          genéricas de varanda ou área gourmet.
        </p>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              titulo: 'Orquidário e plantas de meia-sombra (8–14 m²)',
              texto:
                'Compacto 4mm com 85% de luz difusa para orquídeas, bromélias e samambaias. O filtro UV evita manchas nas pétalas; a vedação lateral opcional mantém umidade entre 60–70% sem encharcar o substrato. Calhas direcionadas para que a chuva não pingue sobre as flores.',
              prazo: '2–3 dias',
              investimento: 'R$ 9–15 mil',
            },
            {
              titulo: 'Jardim de inverno integrado à sala (12–22 m²)',
              texto:
                'Cobertura transparente que conecta visualmente sala e área verde. Compacto 6mm reduz variação térmica entre o interior e o jardim, evitando choque de temperatura nas plantas tropicais (filodendros, costelas-de-adão). Iluminação natural preservada para leitura e convivência no espaço.',
              prazo: '3–4 dias',
              investimento: 'R$ 14–24 mil',
            },
            {
              titulo: 'Átrio e claraboia com vegetação (6–12 m²)',
              texto:
                'Telhado em policarbonato sobre poço de luz ou átrio central. Priorizamos transmissão de luz vertical para plantas em vasos altos e trepadeiras. Estrutura leve (4–6 kg/m²) compatível com lajes existentes; escoamento perimetral para não acumular umidade na base dos vasos.',
              prazo: '2 dias',
              investimento: 'R$ 7–12 mil',
            },
            {
              titulo: 'Jardim de inverno em cobertura de edifício (10–18 m²)',
              texto:
                'Ambiente exposto a vento e sol pleno no terraço. Alveolar 6mm equilibra conforto térmico (menos estresse hídrico nas plantas ao meio-dia) com luminosidade suficiente para suculentas e herbáceas. Projeto com ancoragem reforçada e consideração de carga adicional de vasos e substrato.',
              prazo: '3–4 dias',
              investimento: 'R$ 11–20 mil',
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tipos de Policarbonato para Jardim de Inverno
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Compacto 4mm</h3>
            <p className="text-gray-600 mb-3">
              Máxima transparência (88% de luz). Indicado para orquídeas, samambaias e espécies que
              pedem luminosidade difusa sem sol direto intenso.
            </p>
            <p className="text-sm font-semibold text-[#D4AF37]">{formatPriceFrom('fixaCompacto')}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Compacto 6mm</h3>
            <p className="text-gray-600 mb-3">
              Maior isolamento térmico e resistência. Ideal para jardins maiores e integração sala-verde,
              com menos oscilação de temperatura sobre as folhas.
            </p>
            <p className="text-sm font-semibold text-[#D4AF37]">{formatPriceFrom('fixaCompacto')}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Alveolar 6mm</h3>
            <p className="text-gray-600 mb-3">
              60–75% de luz com melhor barreira térmica. Recomendado para terraços com sol forte e plantas
              que sofrem com calor excessivo ao meio-dia.
            </p>
            <p className="text-sm font-semibold text-[#D4AF37]">{formatPriceFrom('fixaAlveolar')}</p>
          </div>
        </div>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura Jardim de Inverno 2026"
        description="Valores oficiais por m² (estrutura em alumínio, policarbonato e instalação). Vedação lateral e fechamento total sob consulta."
        rows={buildPriceRowsFromKeys([
          { tipo: 'Fixa compacto (transparente — jardim de inverno)', key: 'fixaCompacto' },
          { tipo: 'Fixa alveolar (mais conforto térmico)', key: 'fixaAlveolar' },
          { tipo: 'Abre e fecha (ventilação para plantas)', key: 'abreEFecha' },
          { tipo: 'Retrátil automatizada (referência)', key: 'retratilAutomatizada' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Policarbonato vs. Vidro para Jardim de Inverno
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Característica</th>
                <th className="px-4 py-3">Policarbonato</th>
                <th className="px-4 py-3">Vidro Temperado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Transmissão de luz (plantas)', '82–88% (compacto)', '90%'],
                ['Filtro UV integrado', 'Sim — protege folhas', 'Não padrão'],
                ['Resistência a granizo/impacto', '250× maior que vidro', 'Quebra — risco às plantas'],
                ['Isolamento térmico', 'Bom — menos estresse térmico', 'Fraco — amplifica calor'],
                ['Peso estrutural', '4–6 kg/m²', '25–30 kg/m²'],
                [
                  'Custo por m²',
                  `${formatPriceRange(COBERSYSTEM_PRICING.fixaAlveolar)} a ${formatPriceRange(COBERSYSTEM_PRICING.fixaCompacto)}`,
                  'R$ 1.500–3.000',
                ],
                ['Manutenção no jardim', 'Limpeza simples, sem risco de estilhaços', 'Risco se quebrar sobre vasos'],
              ].map(([feat, poly, glass], i) => (
                <tr key={feat} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{feat}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">{poly}</td>
                  <td className="px-4 py-3">{glass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm">
          Para jardim de inverno, o policarbonato combina luz para plantas, segurança (sem estilhaços) e
          melhor custo-benefício que vidro temperado.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Galeria de Projetos Reais</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <figure>
            <OptimizedImage
              src="/images/projetos/jardim-de-inverno-02.png"
              alt="Jardim de inverno integrado à cozinha com cobertura em policarbonato compacto — Cobersystem SP"
              width={600}
              height={800}
              className="rounded-lg w-full h-72 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              Jardim de inverno integrado — policarbonato compacto transparente
            </figcaption>
          </figure>
          <figure>
            <OptimizedImage
              src="/images/projetos/jardim-de-inverno-01.png"
              alt="Projeto executado de cobertura para jardim de inverno em São Paulo — Cobersystem"
              width={800}
              height={600}
              className="rounded-lg w-full h-72 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              Projeto executado em São Paulo — luz natural preservada para plantas
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Garantia e Por Que Escolher a Cobersystem</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Garantia de 2 anos</strong> em estrutura, policarbonato e instalação. O policarbonato
            de fábrica possui garantia estendida contra amarelamento prematuro. Suporte pós-venda com
            orientação de limpeza que não prejudica plantas (sem ácidos ou solventes).
          </p>
          <p>
            Projeto pensado para o microclima do seu jardim: luz, temperatura e umidade. Visita técnica
            gratuita, orçamento transparente e equipe própria em São Paulo e Grande SP.
          </p>
        </div>
      </section>
    </div>
  );
}
