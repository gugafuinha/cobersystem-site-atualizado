import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { COBERSYSTEM_PRICING, formatPricePerM2 } from '@/lib/pricing';

export default function CoberturaFixaAlveolarExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          O Serviço Completo de Cobertura Fixa em Policarbonato Alveolar
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>cobertura fixa em policarbonato alveolar</strong> é a solução permanente para quem
            precisa de proteção contra chuva e sol com <strong>isolamento térmico e acústico</strong>{' '}
            superior ao compacto. As câmaras de ar internas reduzem transferência de calor e atenuam ruído
            de chuva — ideal para{' '}
            <Link href="/servicos/cobertura-garagem" className="text-blue-600 font-semibold hover:underline">
              garagem
            </Link>
            ,{' '}
            <Link href="/servicos/cobertura-corredor-lateral" className="text-blue-600 font-semibold hover:underline">
              corredor lateral
            </Link>
            , lavanderia, área de serviço e{' '}
            <Link
              href="/servicos/cobertura-varanda-apartamento"
              className="text-blue-600 font-semibold hover:underline"
            >
              varanda de apartamento
            </Link>{' '}
            quando não há necessidade de abrir e fechar.
          </p>
          <p>
            Na Cobersystem, o serviço inclui visita técnica gratuita, projeto com memorial descritivo,
            estrutura em alumínio anodizado, chapas alveolar certificadas (4mm, 6mm ou 10mm), calhas
            dimensionadas, instalação por equipe própria e <strong>garantia de 2 anos</strong>. Faixa
            oficial: {formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)} (material + estrutura + mão de obra).
          </p>
          <p>
            Se precisa de máxima transparência (efeito vidro), veja{' '}
            <Link
              href="/servicos/cobertura-fixa-policarbonato-compacto"
              className="text-blue-600 font-semibold hover:underline"
            >
              cobertura fixa compacto
            </Link>
            . Para isolamento acústico premium, consulte{' '}
            <Link href="/servicos/cobertura-termoacustica" className="text-blue-600 font-semibold hover:underline">
              cobertura termoacústica
            </Link>
            . Para flexibilidade de abrir e fechar, avalie{' '}
            <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-600 font-semibold hover:underline">
              cobertura abre e fecha
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Etapas do Projeto: Do Orçamento à Entrega
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Etapa 1 — Contato e orçamento (24–48h)</h3>
          <p>
            Coletamos metragem, tipo de ambiente, inclinação disponível e preferência de espessura (4, 6 ou
            10mm). Enviamos faixa de investimento com base nos preços oficiais Cobersystem.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica gratuita (1–3 dias)</h3>
          <p>
            Medição in loco, análise de pontos de fixação, verificação de interferências (tubulações, ar
            condicionado) e definição de calhas e rufos.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto e orçamento final (2–5 dias)</h3>
          <p>
            Memorial descritivo, planta de implantação, especificação de espessura e orçamento fechado para
            aprovação — incluindo prazo de instalação.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Fabricação (5–10 dias)</h3>
          <p>
            Após contrato, produzimos estrutura sob medida e adquirimos chapas alveolar na cor e espessura
            definidas no projeto.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Instalação (1–3 dias)</h3>
          <p>
            Montagem da estrutura, assentamento das chapas com perfis de vedação, calhas, teste de
            escoamento e limpeza do canteiro.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 6 — Entrega e garantia</h3>
          <p>
            Vistoria conjunta, orientações de limpeza (água e sabão neutro, sem solventes) e ativação da
            garantia de 2 anos.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Alveolar vs Compacto vs Abre e Fecha
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Característica</th>
                <th className="px-4 py-3">Alveolar fixo</th>
                <th className="px-4 py-3">Compacto fixo</th>
                <th className="px-4 py-3">Abre e fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Isolamento térmico', 'Alto (câmaras de ar)', 'Médio', 'Médio-alto'],
                ['Transparência', 'Translúcido', 'Máxima (efeito vidro)', 'Regulável'],
                ['Ruído de chuva', 'Baixo-médio', 'Médio', 'Baixo quando fechado'],
                ['Abre e fecha', 'Não (fixo)', 'Não (fixo)', 'Sim (0–90°)'],
                ['Faixa indicativa', formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar), formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto), formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)],
                ['Melhor para', 'Conforto térmico permanente', 'Luz máxima', 'Flexibilidade climática'],
              ].map(([feat, alv, comp, abre], i) => (
                <tr key={feat} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{feat}</td>
                  <td className="px-4 py-3">{alv}</td>
                  <td className="px-4 py-3">{comp}</td>
                  <td className="px-4 py-3">{abre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura Fixa Alveolar 2026"
        description="Valores oficiais Cobersystem (material + estrutura + instalação). Espessura 10mm pode ter acréscimo conforme vão."
        rows={buildPriceRowsFromKeys([
          { tipo: 'Alveolar 4mm', key: 'fixaAlveolar' },
          { tipo: 'Alveolar 6mm', key: 'fixaAlveolar' },
          { tipo: 'Alveolar 10mm', key: 'fixaAlveolar' },
          { tipo: 'Abre e fecha (alternativa retrátil)', key: 'abreEFecha' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Aplicações com Metragem</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              titulo: 'Garagem residencial (12–20 m²)',
              texto:
                'Desafio: sol forte no veículo e calor no acesso. Solução: alveolar 6mm com inclinação para escoamento. Benefício: garagem mais fresca e protegida de granizo.',
              prazo: '2 dias',
            },
            {
              titulo: 'Corredor lateral (6–12 m²)',
              texto:
                'Desafio: passagem estreita com gotejamento. Solução: cobertura fixa com calha integrada e perfil de vedação lateral. Benefício: circulação seca o ano todo.',
              prazo: '1–2 dias',
            },
            {
              titulo: 'Varanda de apartamento fixa (8–14 m²)',
              texto:
                'Desafio: aprovação do condomínio e ruído de chuva. Solução: alveolar 6mm com perfil discreto e memorial para assembleia. Benefício: varanda utilizável sem sistema móvel.',
              prazo: '2–3 dias',
            },
            {
              titulo: 'Área de serviço / lavanderia (10–18 m²)',
              texto:
                'Desafio: calor acumulado e umidade. Solução: alveolar 4mm ou 6mm com ventilação cruzada planejada. Benefício: ambiente funcional mesmo em dias de chuva.',
              prazo: '2 dias',
            },
          ].map(({ titulo, texto, prazo }) => (
            <div key={titulo}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
              <p>{texto}</p>
              <p className="text-sm text-gray-600 mt-2">
                Prazo típico de instalação: <strong>{prazo}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Galeria de Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <OptimizedImage
            src="/images/projetos/Cobertura Fixa Policarbonato Alveolar.png"
            alt="Cobertura fixa em policarbonato alveolar — projeto Cobersystem"
            width={600}
            height={450}
            className="rounded-lg w-full h-64 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/Cobertura em Policarbonato.png"
            alt="Detalhe de instalação policarbonato alveolar"
            width={600}
            height={450}
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Garantia e Por Que Escolher a Cobersystem</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Garantia de 2 anos</strong> na estrutura, chapas, fixações e vedações instaladas por
            nossa equipe. Manutenção: limpeza trimestral com água e detergente neutro; evitar produtos
            abrasivos que danifiquem o tratamento UV.
          </p>
          <p>
            Mais de 200 projetos em São Paulo e Grande SP, preços transparentes por m² e visita técnica
            gratuita na etapa inicial. Responsabilidade única: projeto, materiais e instalação.
          </p>
        </div>
      </section>
    </div>
  );
}
