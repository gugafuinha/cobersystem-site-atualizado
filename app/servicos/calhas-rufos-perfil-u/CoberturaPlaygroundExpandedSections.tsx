import Link from 'next/link';

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

      <p className="text-gray-700 leading-relaxed mb-6">
        A escolha depende do perfil de uso: em <strong>cobertura para escolas</strong>, priorizamos
        resistência a impactos, proteção UV e durabilidade para alto fluxo de crianças. Em{' '}
        <strong>cobertura para condomínios</strong>, buscamos integração estética com a área comum,
        baixo ruído de operação e automação que fecha sozinha na chuva. A{' '}
        <strong>cobertura retrátil</strong> é a opção mais versátil: abre para brincadeiras ao sol
        e fecha para proteger equipamentos e piso em dias de chuva.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Cobertura Abre e Fecha: proteção inteligente para playgrounds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A <strong>cobertura abre e fecha</strong> funciona como uma persiana horizontal sobre o
        playground: aberta, permite ventilação e sol controlado; fechada, protege contra chuva,
        granizo e excesso de calor. Com sensor de chuva, o sistema fecha automaticamente quando
        detecta precipitação — ideal para escolas e condomínios que não podem depender de alguém
        presente para fechar manualmente. Integração com Alexa e controle remoto também está
        disponível.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Cobertura Retrátil: flexibilidade para escolas e condomínios
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A <strong>cobertura retrátil</strong> permite adaptar o playground ao clima em segundos.
        Em condomínios, isso significa área de lazer utilizável 365 dias por ano. Em escolas,
        garante que recreio e educação física aconteçam mesmo com chuva leve. O policarbonato
        com proteção UV bloqueia raios prejudiciais mantendo luminosidade natural, e a estrutura
        em alumínio anodizado não enferruja nem exige manutenção frequente.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Benefícios da Cobertura para Playground
      </h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Segurança e conforto térmico</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Playgrounds expostos ao sol direto podem atingir temperaturas perigosas no piso e nos
        brinquedos metálicos. Uma <strong>cobertura para playground</strong> reduz a temperatura
        superficial em até 40%, protegendo crianças de queimaduras e permitindo uso seguro mesmo
        nos horários de pico de sol. O policarbonato filtra 99% dos raios UV, prevenindo exposição
        excessiva durante brincadeiras prolongadas.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Proteção contra chuva e intempéries</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Com <strong>cobertura abre e fecha</strong> ou retrátil automatizada, o playground permanece
        seco e utilizável em dias chuvosos. Brinquedos de madeira e plástico duram mais, o piso
        emborracha não acumula lama e a área fica pronta para uso logo após a chuva passar — basta
        abrir a cobertura para ventilar.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Ideal para escolas e condomínios</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Projetos de <strong>cobertura para escolas</strong> exigem conformidade com normas de
        segurança, ART de engenheiro e materiais certificados. A Cobersystem entrega documentação
        completa para aprovação em licitações e conselhos escolares. Para{' '}
        <strong>cobertura para condomínios</strong>, elaboramos memorial descritivo para assembleia
        e projetos que respeitam a estética da área comum, com cores e acabamentos personalizados.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Por que escolher a Cobersystem para seu playground
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Mais de 15 anos de experiência em <strong>cobertura retrátil</strong> e{' '}
        <strong>cobertura abre e fecha</strong> em São Paulo e Grande SP. Projetos sob medida,
        instalação profissional, garantia de 2 anos e suporte pós-venda. Visita técnica gratuita
        para medição e orçamento sem compromisso.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Conheça também nossos serviços de{' '}
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
