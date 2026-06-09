import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export default function CoberturaCorredorLateralExpandedSections() {
  return (
    <>
      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Aplicações da Cobertura para Corredor Lateral
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A <strong>cobertura para corredor lateral</strong> protege passagens estreitas entre a
          casa e o muro, áreas que costumam acumular água, sol direto e sujeira. Em São Paulo e
          Grande SP, é uma das soluções mais pedidas para tornar corredores utilizáveis o ano todo.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              titulo: 'Lavanderia e área de serviço',
              texto:
                'Protege tanque, varal e eletrodomésticos contra chuva. Permite secar roupa mesmo em dias de garoa e reduz mofo nas paredes do corredor.',
            },
            {
              titulo: 'Área de serviço externa',
              texto:
                'Cobertura fixa ou retrátil sobre depósito de lixo, ferramentas e produtos de limpeza. Ventilação controlada com opção abre e fecha.',
            },
            {
              titulo: 'Edícula e fundos do terreno',
              texto:
                'Corredor lateral que dá acesso a edícula, quarto de empregada ou escritório nos fundos. Cobertura em policarbonato mantém o caminho seco e iluminado.',
            },
          ].map(({ titulo, texto }) => (
            <div key={titulo} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Cobertura Fixa vs Retrátil para Corredor Lateral
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cobertura Fixa</h3>
            <p className="text-gray-600 mb-4">
              Instalação permanente em policarbonato alveolar ou compacto. Menor custo por m²,
              manutenção mínima e proteção contínua contra chuva e sol. Ideal para corredores com
              boa ventilação lateral e uso diário previsível.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Policarbonato alveolar — isolamento térmico</li>
              <li>• Policarbonato compacto — mais luz natural</li>
              <li>• Estrutura alumínio anodizado</li>
            </ul>
            <p className="text-sm font-semibold text-[#D4AF37] mt-4">R$ 150 – R$ 280/m²</p>
          </div>
          <div className="border-2 border-blue-600 rounded-lg p-6 relative">
            <span className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MAIS VERSÁTIL
            </span>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cobertura Retrátil / Abre e Fecha</h3>
            <p className="text-gray-600 mb-4">
              Abre de 0 a 90° para ventilar o corredor nos dias quentes e fecha na chuva. Sensor
              automático disponível. Indicada quando o corredor precisa de sol controlado ou
              integração com{' '}
              <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-600 hover:underline">
                cobertura abre e fecha
              </Link>
              .
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Controle remoto ou Alexa</li>
              <li>• Sensor de chuva opcional</li>
              <li>• Abertura graduada para ventilação</li>
            </ul>
            <p className="text-sm font-semibold text-blue-700 mt-4">R$ 280 – R$ 450/m²</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Tabela de Preços — Cobertura Corredor Lateral 2026
        </h2>
        <p className="text-gray-600 mb-6">
          Valores médios em São Paulo, incluindo material, estrutura e instalação. Corredores
          estreitos (0,8–1,2 m) costumam ter preço por m² ligeiramente superior devido à complexidade.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3 text-center">Preço/m²</th>
                <th className="px-4 py-3 text-center">Corredor 6 m</th>
                <th className="px-4 py-3 text-center">Corredor 12 m</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { tipo: 'Fixa alveolar', m2: 'R$ 150 – R$ 220', c6: 'R$ 1.800 – R$ 2.640', c12: 'R$ 3.600 – R$ 5.280' },
                { tipo: 'Fixa compacto', m2: 'R$ 180 – R$ 280', c6: 'R$ 2.160 – R$ 3.360', c12: 'R$ 4.320 – R$ 6.720' },
                { tipo: 'Abre e fecha manual', m2: 'R$ 280 – R$ 380', c6: 'R$ 3.360 – R$ 4.560', c12: 'R$ 6.720 – R$ 9.120' },
                { tipo: 'Retrátil automatizada', m2: 'R$ 380 – R$ 450', c6: 'R$ 4.560 – R$ 5.400', c12: 'R$ 9.120 – R$ 10.800' },
              ].map((row, i) => (
                <tr key={row.tipo} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium">{row.tipo}</td>
                  <td className="px-4 py-3 text-center">{row.m2}</td>
                  <td className="px-4 py-3 text-center">{row.c6}</td>
                  <td className="px-4 py-3 text-center">{row.c12}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Valores estimados para corredor com 1 m de largura. Solicite visita técnica gratuita para orçamento fechado.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Galeria de Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <OptimizedImage
            src="/images/blog/cobertura-abre-fecha.jpg"
            alt="Cobertura retrátil em corredor lateral residencial — Cobersystem SP"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/abre-fecha-alveolar-02.jpg"
            alt="Cobertura fixa policarbonato alveolar em passagem lateral"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/fixa-03.jpg"
            alt="Cobertura lateral para área de serviço com policarbonato"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura para Corredor Lateral?</h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Corredores laterais são áreas importantes que muitas vezes ficam desprotegidas. Uma{' '}
            <strong>cobertura lateral casa</strong> oferece proteção contra chuva e sol, permitindo
            uso confortável da <strong>passagem lateral</strong> em qualquer clima. O policarbonato
            transmite luz natural sem o calor excessivo do sol direto, e a estrutura em alumínio não
            enferruja.
          </p>
          <p>
            Para corredores muito estreitos, projetamos inclinação mínima para escoamento de água
            sem reduzir a altura de passagem. Calhas e rufos são dimensionados para evitar
            infiltração na parede do vizinho — ponto crítico em muitos imóveis paulistanos.
          </p>
        </div>
      </section>
    </>
  );
}
