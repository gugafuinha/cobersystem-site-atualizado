import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { AUTOMATION_PRICING, COBERSYSTEM_PRICING, formatBRL, formatPricePerM2 } from '@/lib/pricing';

export default function CoberturaAbreEFechaExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          O Serviço Completo de Cobertura Abre e Fecha
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            A <strong>cobertura abre e fecha</strong> é um sistema retrátil em policarbonato que funciona
            como uma persiana horizontal: as lâminas abrem de <strong>0 a 90°</strong> para ventilação e
            fecham para proteção contra chuva e sol. Na Cobersystem, você contrata projeto, estrutura em
            alumínio, policarbonato certificado, instalação e garantia de 2 anos — com opção de{' '}
            <strong>automação</strong> (motor, sensor de chuva, Alexa) conforme o orçamento.
          </p>
          <p>
            É a solução mais flexível da linha retrátil: menor investimento que a{' '}
            <Link
              href="/servicos/cobertura-retratil-automatizada"
              className="text-blue-600 font-semibold hover:underline"
            >
              retrátil automatizada premium
            </Link>{' '}
            ({formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}), mas com a mesma lógica de
            abrir para o sol e fechar na chuva.             Ideal para <strong>acessos, corredores, </strong>
            <Link
              href="/servicos/cobertura-varanda-apartamento"
              className="text-blue-600 font-semibold hover:underline"
            >
              varandas de apartamento
            </Link>
            , <Link
              href="/servicos/cobertura-area-gourmet"
              className="text-blue-600 font-semibold hover:underline"
            >
              área gourmet
            </Link>{' '}
            e churrasqueiras em São Paulo e Grande SP.
          </p>
          <p>
            Para instalação retrátil em geral (várias configurações), veja também{' '}
            <Link href="/servicos/cobertura-retratil" className="text-blue-600 font-semibold hover:underline">
              cobertura retrátil
            </Link>
            . Se precisa de cobertura fixa permanente, consulte{' '}
            <Link
              href="/servicos/cobertura-fixa-policarbonato-alveolar"
              className="text-blue-600 font-semibold hover:underline"
            >
              cobertura fixa alveolar
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Qual a Diferença? Abre e Fecha vs Retrátil vs Automatizada
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Critério</th>
                <th className="px-4 py-3">Abre e Fecha (esta página)</th>
                <th className="px-4 py-3">Cobertura Retrátil</th>
                <th className="px-4 py-3">Retrátil Automatizada</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                [
                  'Acionamento',
                  'Manual ou motor opcional',
                  'Manual ou motor opcional',
                  'Motor + sensor inclusos',
                ],
                [
                  'Investimento/m²',
                  formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha),
                  formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha),
                  formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada),
                ],
                [
                  'Abertura',
                  '0 a 90° (lâminas)',
                  '0 a 90° conforme sistema',
                  '0 a 90° automatizado',
                ],
                [
                  'Melhor para',
                  'Flexibilidade com menor investimento',
                  'Projeto retrátil completo',
                  'Casa inteligente e conforto total',
                ],
                [
                  'Página',
                  '/servicos/cobertura-abre-e-fecha',
                  '/servicos/cobertura-retratil',
                  '/servicos/cobertura-retratil-automatizada',
                ],
              ].map(([c, abre, retr, auto], i) => (
                <tr key={c} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{c}</td>
                  <td className="px-4 py-3">{abre}</td>
                  <td className="px-4 py-3">{retr}</td>
                  <td className="px-4 py-3">{auto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm">
          O abre e fecha é a porta de entrada da linha retrátil: você escolhe manual ou adiciona
          automação depois. A versão automatizada já traz motor e sensores no pacote.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Etapas do Projeto: Do Orçamento à Entrega
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Etapa 1 — Contato e orçamento (24–48h)</h3>
          <p>
            Coletamos metragem, tipo de ambiente (varanda, corredor, gourmet) e se deseja automação.
            Orçamento preliminar com faixa {formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica gratuita</h3>
          <p>
            Medição, checagem de pontos de fixação, inclinação mínima (~5%) e avaliação de ventilação.
            Definimos policarbonato compacto ou alveolar conforme o uso.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto e orçamento final</h3>
          <p>
            Memorial com quantidade de lâminas, trilhos, calhas e opcionais de automação. Orçamento
            fechado em 2–5 dias úteis.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Instalação (2–4 dias)</h3>
          <p>
            Montagem da estrutura em alumínio, trilhos, lâminas de policarbonato, calhas e testes de
            abertura/fechamento manual ou motorizado.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Configuração (se automatizado)</h3>
          <p>
            Pareamento de controle remoto, sensor de chuva e Alexa (se contratado). Treinamento de uso
            para toda a família.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 6 — Garantia 2 anos</h3>
          <p>
            Cobertura de estrutura, policarbonato e instalação executada pela Cobersystem, conforme
            contrato.
          </p>
        </div>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura Abre e Fecha 2026"
        description="Valores oficiais por m² (estrutura, policarbonato e instalação). Automação é opcional e discriminada no orçamento."
        rows={buildPriceRowsFromKeys([
          { tipo: 'Abre e fecha (esta página)', key: 'abreEFecha' },
          { tipo: 'Retrátil automatizada (com motor incluso)', key: 'retratilAutomatizada' },
          { tipo: 'Fixa alveolar (referência)', key: 'fixaAlveolar' },
          { tipo: 'Fixa compacto (referência)', key: 'fixaCompacto' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Automação Opcional (adicionais)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          O abre e fecha pode ser manual ou receber motor e sensores. Valores de referência:
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
              titulo: 'Corredor lateral e acesso (6–12 m²)',
              texto:
                'Protege o caminho entre garagem e casa sem perder ventilação. Abre para sol da manhã, fecha na chuva da tarde. Opção manual ou com sensor.',
              prazo: '1–2 dias',
              investimento: 'R$ 6–12 mil',
            },
            {
              titulo: 'Varanda de apartamento (8–15 m²)',
              texto:
                'Transforma varanda em área de lazer utilizável o ano todo. Lâminas em 45° ventilam sem deixar chuva entrar. Muito pedido em condomínios de SP.',
              prazo: '2–3 dias',
              investimento: 'R$ 8–16 mil',
            },
            {
              titulo: 'Área gourmet e churrasqueira (12–25 m²)',
              texto:
                'Abre para fumaça e calor do churrasco; fecha quando chove ou à noite. Automação com sensor evita molhar mesa e churrasqueira.',
              prazo: '2–4 dias',
              investimento: 'R$ 12–25 mil',
            },
            {
              titulo: 'Piscina e lazer (20–40 m²)',
              texto:
                'Cobertura retrátil sobre deck ou borda da piscina. Maior vão pode exigir reforço estrutural e motor de maior torque.',
              prazo: '3–5 dias',
              investimento: 'R$ 18–40 mil',
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Modelos e Materiais</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Policarbonato Compacto 2mm</h3>
            <p className="mb-2">
              Transparente ou colorido. Máxima luminosidade e visão do céu. Proteção UV 99%.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Ideal para varandas e áreas que pedem luz</li>
              <li>Resistente a impactos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Policarbonato Alveolar</h3>
            <p className="mb-2">
              Melhor isolamento térmico e acústico. Recomendado para gourmet e ambientes quentes.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Espessuras 4mm, 6mm e 10mm</li>
              <li>Reduz calor e ruído de chuva</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-gray-600">
          Estrutura em <strong>alumínio com pintura eletrostática</strong> — resistente à corrosão e
          personalizável em cores RAL.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Galeria de Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <OptimizedImage
            src="/images/projetos/Cobertura Abre e Fecha.png"
            alt="Cobertura abre e fecha em policarbonato — projeto Cobersystem"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/blog/cobertura-abre-fecha.jpg"
            alt="Cobertura abre e fecha em varanda"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/blog/cobertura-retratil-area-gourmet.jpg"
            alt="Abre e fecha em área gourmet"
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
            <strong>Garantia de 2 anos</strong> em estrutura, policarbonato e instalação. Suporte
            pós-venda por WhatsApp com orientação de lubrificação de trilhos e limpeza das lâminas.
          </p>
          <p>
            Projeto, obra e automação opcional no mesmo padrão Cobersystem. Visita técnica gratuita,
            orçamento transparente e equipe própria em São Paulo e Grande SP.
          </p>
        </div>
      </section>
    </div>
  );
}
