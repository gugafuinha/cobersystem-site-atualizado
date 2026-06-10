import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import { COBERSYSTEM_PRICING, formatPricePerM2 } from '@/lib/pricing';

export default function ProjetosPersonalizadosExpandedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Consultoria de Engenharia e Projeto Sob Medida
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Projetos personalizados</strong> na Cobersystem são para quem precisa de mais do que um
            orçamento padrão: geometrias complexas, integração com{' '}
            <Link href="/servicos/cobertura-area-gourmet" className="text-blue-600 font-semibold hover:underline">
              área gourmet
            </Link>
            ,{' '}
            <Link href="/servicos/cobertura-piscina" className="text-blue-600 font-semibold hover:underline">
              piscina
            </Link>
            , fachada comercial ou exigências de condomínio com memorial descritivo e ART.
          </p>
          <p>
            O serviço inclui visita técnica, levantamento topográfico quando necessário, projeto com plantas
            e cortes, cálculo estrutural assinado, especificação de materiais (alveolar, compacto, alumínio
            ou retrátil), cronograma de obra e acompanhamento da execução pela mesma equipe que dimensionou
            o projeto.
          </p>
          <p>
            Para soluções padronizadas com preço por m², consulte{' '}
            <Link href="/servicos/cobertura-retratil" className="text-blue-600 font-semibold hover:underline">
              cobertura retrátil
            </Link>
            ,{' '}
            <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-600 font-semibold hover:underline">
              abre e fecha
            </Link>{' '}
            ou{' '}
            <Link href="/servicos/cobertura-policarbonato" className="text-blue-600 font-semibold hover:underline">
              cobertura em policarbonato
            </Link>
            . Aqui o foco é engenharia sob medida para casos que exigem documentação e responsabilidade técnica.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Etapas do Projeto Personalizado</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Etapa 1 — Briefing e consultoria inicial</h3>
          <p>
            Entendemos objetivo, restrições do local, prazo desejado e orçamento disponível. Definimos se o
            projeto exige cálculo estrutural formal ou memorial simplificado.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 2 — Visita técnica e levantamento</h3>
          <p>
            Medição, fotos, análise de cargas, interferências e normas do condomínio ou prefeitura quando
            aplicável.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 3 — Projeto técnico (5–10 dias úteis)</h3>
          <p>
            Plantas, cortes, detalhes de fixação, especificação de perfis e chapas, memorial descritivo e
            orçamento executivo.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 4 — Aprovação e contrato</h3>
          <p>
            Ajustes finais, cronograma de fabricação e instalação, condições de pagamento e garantia de 2 anos
            na execução Cobersystem.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Etapa 5 — Execução e acompanhamento</h3>
          <p>
            Obra com responsável técnico de obra, relatórios de avanço e vistoria de entrega conforme projeto
            aprovado.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quando Contratar Projeto Personalizado</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            {
              titulo: 'Condomínios e assembleias',
              texto: 'Memorial descritivo, ART e documentação para aprovação em assembleia — comum em varandas e áreas comuns.',
            },
            {
              titulo: 'Comércio e restaurantes',
              texto: 'Integração com exaustão, iluminação e fluxo de clientes; cálculo de cargas de vento em fachadas.',
            },
            {
              titulo: 'Vãos grandes ou formatos irregulares',
              texto: 'Projetos com mais de 40 m², curvas, desníveis ou integração com pergolado existente.',
            },
            {
              titulo: 'Automação customizada',
              texto: 'Sensores, integração Alexa/Google Home e lógica de fechamento específica para o ambiente.',
            },
          ].map(({ titulo, texto }) => (
            <div key={titulo} className="border border-gray-100 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{titulo}</h3>
              <p className="text-sm leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicePriceTable
        title="Referência de Investimento por Tipo de Cobertura"
        description={`Projetos personalizados partem das faixas oficiais abaixo, com acréscimo de engenharia conforme complexidade. Consultoria incorporada ao orçamento: alveolar ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}, automatizada ${formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}.`}
        rows={buildPriceRowsFromKeys([
          { tipo: 'Fixa alveolar', key: 'fixaAlveolar' },
          { tipo: 'Fixa compacto', key: 'fixaCompacto' },
          { tipo: 'Abre e fecha', key: 'abreEFecha' },
          { tipo: 'Retrátil automatizada', key: 'retratilAutomatizada' },
        ])}
      />

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Casos de Aplicação</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              titulo: 'Restaurante com área externa (30–60 m²)',
              texto:
                'Projeto com ventilação para cozinha, cobertura retrátil e integração com iluminação. Memorial para AVCB quando solicitado.',
            },
            {
              titulo: 'Condomínio — área comum (40–80 m²)',
              texto:
                'Documentação para assembleia, especificação de materiais antichamas e cronograma de obra em horários restritos.',
            },
            {
              titulo: 'Residência com piscina e gourmet integrados (50+ m²)',
              texto:
                'Cálculo estrutural unificado, transição entre sistemas fixo e retrátil, automação centralizada.',
            },
          ].map(({ titulo, texto }) => (
            <div key={titulo}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Galeria e Referências</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <OptimizedImage
            src="/images/blog/cobertura-retratil-area-gourmet.jpg"
            alt="Projeto personalizado cobertura área gourmet"
            width={600}
            height={400}
            className="rounded-lg w-full h-56 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/Cobertura Retratil melhorada.png"
            alt="Projeto retrátil personalizado Cobersystem"
            width={600}
            height={400}
            className="rounded-lg w-full h-56 object-cover"
          />
        </div>
      </section>
    </div>
  );
}
