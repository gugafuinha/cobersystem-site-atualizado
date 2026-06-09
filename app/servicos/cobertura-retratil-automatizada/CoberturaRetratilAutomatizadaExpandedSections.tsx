import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { AUTOMATION_PRICING, COBERSYSTEM_PRICING, formatBRL, formatPricePerM2 } from '@/lib/pricing';

export default function CoberturaRetratilAutomatizadaExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          O Serviço Completo de Cobertura Retrátil Automatizada
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>cobertura retrátil automatizada</strong> é o topo da linha Cobersystem: sistema
            que abre e fecha de 0 a 90° com <strong>motor, sensor de chuva, controle remoto</strong> e
            integração opcional com <strong>Alexa</strong> ou app. Você contrata projeto, materiais,
            instalação, configuração da automação e garantia de 2 anos em um único fluxo.
          </p>
          <p>
            Diferente de uma cobertura manual, a versão automatizada fecha sozinha quando chove,
            responde a comando de voz e pode ser acionada à distância — ideal para quem não quer
            correr para fechar a cobertura ou quem viaja com frequência. O investimento por m² é
            superior ao abre e fecha manual ({formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}), pois
            inclui motor, sensores, controles e programação.
          </p>
          <p>
            Para instalação geral de cobertura retrátil (com ou sem automação), veja também{' '}
            <Link href="/servicos/cobertura-retratil" className="text-blue-600 font-semibold hover:underline">
              cobertura retrátil
            </Link>
            . Para sistemas abre e fecha sem motor obrigatório, consulte{' '}
            <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-600 font-semibold hover:underline">
              cobertura abre e fecha
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Qual a Diferença? Automatizada vs Retrátil vs Abre e Fecha
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Critério</th>
                <th className="px-4 py-3">Retrátil Automatizada</th>
                <th className="px-4 py-3">Cobertura Retrátil (serviço)</th>
                <th className="px-4 py-3">Abre e Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                [
                  'Acionamento',
                  'Motor + sensor chuva + Alexa/app',
                  'Manual ou motor opcional',
                  'Manual ou motor opcional',
                ],
                [
                  'Fecha na chuva',
                  'Automático (sensor)',
                  'Opcional (se contratar sensor)',
                  'Opcional (se contratar sensor)',
                ],
                [
                  'Investimento/m²',
                  formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada),
                  formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha),
                  formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha),
                ],
                [
                  'Melhor para',
                  'Quem quer conforto total e casa inteligente',
                  'Projeto completo retrátil (várias opções)',
                  'Flexibilidade com menor investimento',
                ],
                [
                  'Página de referência',
                  'Esta página',
                  '/servicos/cobertura-retratil',
                  '/servicos/cobertura-abre-e-fecha',
                ],
              ].map(([c, auto, retr, abre], i) => (
                <tr key={c} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{c}</td>
                  <td className="px-4 py-3">{auto}</td>
                  <td className="px-4 py-3">{retr}</td>
                  <td className="px-4 py-3">{abre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm">
          Em resumo: <strong>abre e fecha</strong> é a base flexível;{' '}
          <strong>cobertura retrátil</strong> descreve o serviço completo de instalação;{' '}
          <strong>automatizada</strong> é a versão premium com motor e sensores inclusos no pacote.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Etapas do Projeto: Do Orçamento à Entrega
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Etapa 1 — Contato e orçamento (24–48h)</h3>
          <p>
            Definimos metragem, tipo de ambiente e pacote de automação desejado (remoto, Alexa, sensor).
            Orçamento preliminar com faixa {formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica gratuita</h3>
          <p>
            Medição, checagem de pontos de fixação e definição de rota de cabos para motor e sensores.
            Avaliamos integração com assistente de voz, se desejado.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto e orçamento final</h3>
          <p>
            Memorial com motor, sensores, controles e sequência de montagem. Orçamento fechado em 2–5 dias
            úteis.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Instalação (2–4 dias)</h3>
          <p>
            Estrutura, trilhos, policarbonato, motorização, fiação, testes de abertura/fechamento e
            calibração do sensor de chuva.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Configuração e treinamento</h3>
          <p>
            Pareamento do controle remoto, app e Alexa (se contratado). Demonstração para toda a família
            e entrega do manual de uso.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 6 — Garantia 2 anos</h3>
          <p>
            Cobertura de estrutura, policarbonato, motor e automação instalada pela Cobersystem, conforme
            contrato.
          </p>
        </div>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura Retrátil Automatizada 2026"
        description="Valores oficiais por m² (estrutura, policarbonato, motor, sensor e instalação). Compare com outras linhas Cobersystem."
        rows={buildPriceRowsFromKeys([
          { tipo: 'Retrátil automatizada (esta página)', key: 'retratilAutomatizada' },
          { tipo: 'Abre e fecha (sem automação obrigatória)', key: 'abreEFecha' },
          { tipo: 'Fixa alveolar (referência)', key: 'fixaAlveolar' },
          { tipo: 'Fixa compacto (referência)', key: 'fixaCompacto' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pacotes de Automação (adicionais)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Valores de referência por comando/sensor — já inclusos ou discriminados no orçamento final conforme
          pacote escolhido.
        </p>
        <ul className="grid sm:grid-cols-3 gap-4 text-sm">
          {Object.values(AUTOMATION_PRICING).map(({ label, price }) => (
            <li key={label} className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
              <span className="font-semibold text-gray-900">{label}</span>
              <span className="block text-red-600 font-bold mt-1">{formatBRL(price)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Aplicações: Onde Instalamos</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              titulo: 'Área gourmet com churrasqueira (15–25 m²)',
              texto:
                'Sensor de chuva fecha antes da garoa molhar mesa e churrasqueira. Alexa abre para ventilar após o churrasco. O pacote automatizado é o mais pedido neste cenário.',
              prazo: '3 dias',
              investimento: 'R$ 20–35 mil',
            },
            {
              titulo: 'Varanda de apartamento (8–15 m²)',
              texto:
                'Fechamento automático na chuva sem precisar estar em casa. Controle remoto para idosos e integração com rotinas de casa inteligente.',
              prazo: '2–3 dias',
              investimento: 'R$ 12–22 mil',
            },
            {
              titulo: 'Piscina e lazer (25–45 m²)',
              texto:
                'Proteção programável: abre para sol, fecha para chuva ou vento forte (sensor opcional). Maior vão exige motor de maior torque.',
              prazo: '4–5 dias',
              investimento: 'R$ 28–55 mil',
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
            src="/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg"
            alt="Cobertura retrátil automatizada com controle remoto"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          <OptimizedImage
            src="/images/blog/cobertura-retratil-area-gourmet.jpg"
            alt="Automação em área gourmet"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/Cobertura Retratil melhorada.png"
            alt="Projeto cobertura retrátil automatizada Cobersystem"
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
            <strong>Garantia de 2 anos</strong> em estrutura, policarbonato, motor, sensores e instalação
            elétrica executada por nós. Suporte pós-venda por WhatsApp com orientação de manutenção preventiva
            (lubrificação de trilhos, teste de sensor).
          </p>
          <p>
            Responsabilidade única: projeto, obra e automação no mesmo padrão Cobersystem. Visita técnica
            gratuita, orçamento transparente e equipe própria em São Paulo e Grande SP.
          </p>
        </div>
      </section>
    </div>
  );
}
