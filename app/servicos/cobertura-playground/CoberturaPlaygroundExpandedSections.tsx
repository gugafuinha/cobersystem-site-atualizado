import Link from 'next/link';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';

export default function CoberturaPlaygroundExpandedSections() {
  return (
    <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Tipos de Cobertura para Playground
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Escolher a <strong>cobertura para playground</strong> ideal é garantir que crianças
        brinquem com segurança em qualquer clima — sol, chuva ou vento. A Cobersystem projeta
        e instala sistemas em policarbonato e alumínio para escolas, condomínios, creches e
        áreas de lazer residenciais. Trabalhamos com <strong>cobertura abre e fecha</strong> e{' '}
        <strong>cobertura retrátil</strong>, permitindo abrir para ventilação nos dias quentes
        e fechar automaticamente na chuva, protegendo brinquedos, piso e usuários.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="font-semibold py-3 px-4 border-b border-gray-200">Tipo</th>
              <th className="font-semibold py-3 px-4 border-b border-gray-200">Abertura</th>
              <th className="font-semibold py-3 px-4 border-b border-gray-200">Uso</th>
              <th className="font-semibold py-3 px-4 border-b border-gray-200">Preço</th>
              <th className="font-semibold py-3 px-4 border-b border-gray-200">Melhor Para</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="align-top">
              <td className="py-4 px-4 border-b border-gray-100 font-medium">Fixa em policarbonato</td>
              <td className="py-4 px-4 border-b border-gray-100">Permanente</td>
              <td className="py-4 px-4 border-b border-gray-100">Proteção contínua</td>
              <td className="py-4 px-4 border-b border-gray-100">R$ 350–600/m²</td>
              <td className="py-4 px-4 border-b border-gray-100">Orçamento acessível, baixa manutenção</td>
            </tr>
            <tr className="align-top">
              <td className="py-4 px-4 border-b border-gray-100 font-medium">Abre e fecha manual</td>
              <td className="py-4 px-4 border-b border-gray-100">0 a 90°</td>
              <td className="py-4 px-4 border-b border-gray-100">Controle de sol e vento</td>
              <td className="py-4 px-4 border-b border-gray-100">R$ 800–1.400/m²</td>
              <td className="py-4 px-4 border-b border-gray-100">Escolas e condomínios médios</td>
            </tr>
            <tr className="align-top">
              <td className="py-4 px-4 border-b border-gray-100 font-medium">Retrátil automatizada</td>
              <td className="py-4 px-4 border-b border-gray-100">Motor + sensor chuva</td>
              <td className="py-4 px-4 border-b border-gray-100">Flexibilidade total</td>
              <td className="py-4 px-4 border-b border-gray-100">R$ 1.200–1.800/m²</td>
              <td className="py-4 px-4 border-b border-gray-100">Condomínios premium, escolas particulares</td>
            </tr>
            <tr className="align-top">
              <td className="py-4 px-4 border-b border-gray-100 font-medium">Termoacústica</td>
              <td className="py-4 px-4 border-b border-gray-100">Fixa ou retrátil</td>
              <td className="py-4 px-4 border-b border-gray-100">Conforto térmico e acústico</td>
              <td className="py-4 px-4 border-b border-gray-100">R$ 500–900/m²</td>
              <td className="py-4 px-4 border-b border-gray-100">Playgrounds próximos a vias movimentadas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PriceEstimateNote className="mb-6" />

      <p className="text-gray-700 leading-relaxed mb-6">
        A escolha depende do perfil de uso: em <strong>cobertura para escolas</strong>, priorizamos
        resistência a impactos, proteção UV e durabilidade para alto fluxo de crianças. Em{' '}
        <strong>cobertura para condomínios</strong>, buscamos integração estética com a área comum,
        baixo ruído de operação e automação que fecha sozinha na chuva.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Benefícios da Cobertura para Playground
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Playgrounds expostos ao sol direto podem atingir temperaturas perigosas no piso e nos
        brinquedos metálicos. Uma <strong>cobertura para playground</strong> reduz a temperatura
        superficial em até 40%, protegendo crianças de queimaduras. O policarbonato filtra 99%
        dos raios UV, prevenindo exposição excessiva durante brincadeiras prolongadas.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Conheça também{' '}
        <Link href="/servicos/cobertura-abre-e-fecha" className="text-blue-600 font-semibold hover:underline">
          Cobertura Abre e Fecha
        </Link>
        ,{' '}
        <Link href="/servicos/cobertura-retratil-automatizada" className="text-blue-600 font-semibold hover:underline">
          Cobertura Retrátil Automatizada
        </Link>{' '}
        e{' '}
        <Link href="/servicos/cobertura-termoacustica" className="text-blue-600 font-semibold hover:underline">
          Cobertura Termoacústica
        </Link>
        .
      </p>
    </section>
  );
}
