import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { COBERSYSTEM_PRICING, formatPricePerM2 } from '@/lib/pricing';

export default function CoberturaTermoacusticaExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          O Serviço Completo de Cobertura Termoacústica
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>cobertura termoacústica</strong> como serviço vai além de instalar chapas: é
            dimensionar isolamento real contra calor e ruído para que sua{' '}
            <strong>área gourmet</strong>, varanda ou ambiente comercial seja utilizável o ano todo.
            Na Cobersystem, o processo inclui visita técnica, projeto com memorial descritivo,
            fornecimento de materiais certificados, instalação por equipe própria e garantia de 2 anos.
          </p>
          <p>
            Trabalhamos com <strong>policarbonato alveolar 6mm e 10mm</strong> (câmaras de ar que
            reduzem transferência térmica) e com painéis <strong>sanduíche termoacústicos</strong>{' '}
            (núcleo isolante + chapas metálicas) para quem precisa de desempenho máximo — até{' '}
            <strong>30 dB de redução de ruído</strong> e queda de até <strong>10 °C</strong> na
            sensação térmica do ambiente coberto, conforme medições de campo em projetos similares.
          </p>
          <p>
            Para especificações de produto, consulte também{' '}
            <Link href="/produtos/cobertura-termoacustica" className="text-blue-600 font-semibold hover:underline">
              Cobertura Termoacústica (produto)
            </Link>
            . Aqui o foco é o serviço: aplicação, etapas, comparativo de materiais e pós-venda.
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
            Coletamos tipo de ambiente, metragem, nível de ruído externo (avenida, aeroporto, vizinhos)
            e expectativa de conforto térmico. Enviamos orçamento preliminar com faixa de investimento.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica gratuita (1–3 dias)</h3>
          <p>
            Medição precisa, análise de pontos de fixação e definição do sistema: alveolar ou sanduíche.
            Registramos fotos e orientamos sobre ventilação e inclinação mínima (~5%).
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto detalhado (2–5 dias úteis)</h3>
          <p>
            Memorial descritivo, especificação de espessura (6mm ou 10mm), calhas dimensionadas e
            orçamento final fechado para aprovação.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Fabricação e agendamento (5–10 dias)</h3>
          <p>
            Após contrato e entrada (30–40%), produzimos estrutura sob medida e adquirimos painéis
            conforme projeto.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Instalação (2–4 dias)</h3>
          <p>
            Montagem da estrutura em alumínio, assentamento dos painéis, vedações, calhas e teste de
            escoamento. Limpeza final do canteiro.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 6 — Entrega e garantia</h3>
          <p>
            Vistoria conjunta, orientações de manutenção (limpeza sem solventes) e ativação da{' '}
            <strong>garantia de 2 anos</strong> no conjunto instalado.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Comparativo: Sanduíche Termoacústico vs Policarbonato Alveolar
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Característica</th>
                <th className="px-4 py-3">Sanduíche (EPS/PU/Lã)</th>
                <th className="px-4 py-3">Policarbonato alveolar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Redução de ruído', 'Até ~30 dB', 'Até ~15–20 dB'],
                ['Redução térmica', 'Até ~10 °C', 'Até ~6–8 °C'],
                ['Luz natural', 'Não (opaco)', 'Sim (translúcido)'],
                ['Peso estrutural', 'Médio-alto', 'Leve'],
                ['Ruído de chuva', 'Muito baixo (~95% bloqueio)', 'Médio'],
                ['Manutenção', 'Baixa', 'Baixa'],
                ['Faixa indicativa', 'Premium (sob consulta)', formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)],
                ['Melhor para', 'Máximo conforto acústico', 'Custo-benefício + luz'],
              ].map(([feat, sand, alv], i) => (
                <tr key={feat} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{feat}</td>
                  <td className="px-4 py-3">{sand}</td>
                  <td className="px-4 py-3">{alv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm">
          Painéis sanduíche são indicados quando o barulho de trânsito ou chuva é crítico. O alveolar
          10mm é a escolha mais equilibrada quando se deseja luz natural com bom isolamento.
        </p>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura Termoacústica 2026"
        description="Valores oficiais para cobertura fixa em policarbonato alveolar (instalação completa). Painéis sanduíche sob orçamento após visita técnica."
        rows={buildPriceRowsFromKeys([
          { tipo: 'Fixa alveolar 6mm', key: 'fixaAlveolar' },
          { tipo: 'Fixa alveolar 10mm (reforço)', key: 'fixaAlveolar' },
          { tipo: 'Abre e fecha termoacústico', key: 'abreEFecha' },
          { tipo: 'Retrátil automatizada', key: 'retratilAutomatizada' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Aplicações: Onde Instalamos</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              titulo: 'Área gourmet próxima a avenida (15–25 m²)',
              texto:
                'Desafio: calor da churrasqueira + ruído de trânsito. Solução: sanduíche ou alveolar 10mm com ventilação planejada. Benefício: jantar ao ar livre com conforto acústico.',
              prazo: '3 dias',
              investimento: 'R$ 12–22 mil',
            },
            {
              titulo: 'Varanda de apartamento (8–15 m²)',
              texto:
                'Desafio: barulho de chuva e vizinhos. Solução: termoacústica com perfil discreto para condomínio. Benefício: varanda utilizável em dias de garoa sem ruído intenso.',
              prazo: '2–3 dias',
              investimento: 'R$ 8–18 mil',
            },
            {
              titulo: 'Escritório ou clínica (20–40 m²)',
              texto:
                'Desafio: silêncio para atendimento. Solução: painel sanduíche com isolamento acústico prioritário. Benefício: redução perceptível de ruído externo.',
              prazo: '3–4 dias',
              investimento: 'R$ 15–35 mil',
            },
            {
              titulo: 'Cobertura de piscina (25–50 m²)',
              texto:
                'Desafio: sol forte + conforto térmico. Solução: alveolar 10mm ou sistema retrátil termoacústico. Benefício: área de lazer mais fresca e protegida.',
              prazo: '4–5 dias',
              investimento: 'R$ 20–45 mil',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { src: '/images/projetos/termoacustica-01.jpg', alt: 'Cobertura termoacústica em área gourmet' },
            { src: '/images/projetos/termoacustica-02.jpg', alt: 'Painel termoacústico instalado em varanda' },
            { src: '/images/projetos/termoacustica-03.jpg', alt: 'Cobertura acústica residencial Cobersystem' },
            { src: '/images/projetos/termoacustica-04.jpg', alt: 'Detalhe de cobertura termoacústica' },
          ].map(({ src, alt }) => (
            <OptimizedImage
              key={src}
              src={src}
              alt={alt}
              width={400}
              height={300}
              className="rounded-lg w-full h-48 object-cover"
            />
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Garantia e Por Que Escolher a Cobersystem</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Garantia de 2 anos</strong> cobre estrutura, painéis, fixações e vedações executadas
            por nós. Manutenção recomendada: limpeza sem abrasivos a cada trimestre e inspeção de calhas
            semestralmente.
          </p>
          <p>
            Você contrata responsabilidade única: projeto, materiais e instalação no mesmo padrão Cobersystem.
            Mais de 200 projetos em São Paulo e região, orçamento transparente e visita técnica gratuita na
            etapa inicial.
          </p>
        </div>
      </section>
    </div>
  );
}
