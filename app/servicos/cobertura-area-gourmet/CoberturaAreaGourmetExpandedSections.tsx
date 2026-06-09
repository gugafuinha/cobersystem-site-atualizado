import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import { COBERSYSTEM_PRICING, formatPriceRange } from '@/lib/pricing';

/**
 * Conteúdo SEO expandido — após o hero, antes das demais seções da página.
 */
export default function CoberturaAreaGourmetExpandedSections() {
  return (
    <div className="mx-auto mb-12 max-w-4xl space-y-16 text-gray-700">
      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Por que investir em cobertura para área gourmet
        </h2>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Nos últimos anos, a busca por qualidade de vida transformou a{' '}
            <strong>área externa</strong> em extensão natural da sala e da cozinha — tendência
            acelerada após períodos em que o lar consolidou-se como centro de convívio e trabalho.
            Investir em uma <strong>cobertura área gourmet</strong> bem planejada significa tirar o{' '}
            <strong>espaço gourmet</strong> do tempo bom exclusivamente e passar a utilizá-lo com
            conforto durante todo o ano.
          </p>
          <p>
            Sem proteção adequada, muitas famílias restringem o uso do deck ou da{' '}
            <strong>churrasqueira</strong> a cerca de <strong>8 a 12 meses</strong> — sempre
            dependendo do clima local. Com cobertura dimensionada (fixa, termoacústica ou retrátil),
            o mesmo ambiente pode ser aproveitado em <strong>12 meses</strong>, inclusive em dias de
            chuva leve ou sol intenso, desde que ventilação e escoamento estejam corretos. Esse
            salto de uso real do imóvel costuma aparecer também na percepção de compradores: estudos
            de mercado e laudos de avaliação frequentemente atribuem{' '}
            <strong>15% a 20%</strong> de incremento ao valor de venda quando a{' '}
            <strong>área gourmet</strong> está coberta, iluminada e integrada à casa.
          </p>
          <p>
            Somando valorização patrimonial à economia com soluções improvisadas (tendas, toldos de
            lona, reformas repetidas), o <strong>retorno do investimento (ROI)</strong> costuma se
            concentrar em uma janela de <strong>3 a 5 anos</strong> em mercados aquecidos — além do
            benefício imediato em <strong>qualidade de vida</strong>: mais encontros com amigos,
            aniversários ao ar livre e rotina menos dependente da previsão do tempo.
          </p>
          <p>
            A versatilidade do <strong>espaço gourmet</strong> coberto vai além do fim de semana:
            home office ao ar livre, cantinho de leitura, área kids com brinquedos ou até pequena
            academia com ventilação natural. Em termos de comparativo de investimento, o pacote de
            uma <strong>cobertura área gourmet</strong> completa frequentemente fica na mesma ordem
            de grandeza de uma reforma pontual de cozinha — porém com <strong>uso muito mais
            frequente</strong> e visibilidade imediata na fachada ou fundos.             Mercado imobiliário e
            construtoras costumam listar a <strong>área gourmet</strong> como o{' '}
            <strong>segundo ambiente mais valorizado</strong> do imóvel, ficando atrás apenas da
            cozinha principal — o que reforça a decisão de proteger bem a <strong>churrasqueira</strong>{' '}
            e o entorno.
          </p>
          <p>
            Por fim, lembre-se de que a <strong>área externa</strong> coberta e ventilada reduz a
            sensação de &quot;casa fechada&quot; em dias úteis: o mesmo <strong>espaço gourmet</strong>{' '}
            que recebe visitas no domingo pode servir de refúgio tranquilo na segunda-feira, com mesa
            para notebook e café — algo raro quando o pátio fica exposto à chuva ou ao sol sem
            mediação. Esse uso híbrido multiplica o retorno emocional e financeiro da obra.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Como escolher a cobertura ideal para área gourmet
        </h2>
        <p className="mb-6 text-base leading-relaxed md:text-lg">
          A escolha entre policarbonato <strong>alveolar</strong>, <strong>compacto</strong>, telha{' '}
          <strong>termoacústica</strong> ou sistema <strong>retrátil</strong> depende de insolação,
          orçamento e do papel da <strong>churrasqueira</strong> no dia a dia. Use a tabela como
          ponto de partida e refine com visita técnica.
        </p>
        <div className="mb-8 overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">Tipo de cobertura</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Prós</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Contras</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Preço/m²</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Melhor para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium">Policarbonato alveolar</td>
                <td className="px-4 py-3">Econômico, luz natural</td>
                <td className="px-4 py-3">Ruído médio de chuva</td>
                <td className="px-4 py-3">{formatPriceRange(COBERSYSTEM_PRICING.fixaAlveolar)}</td>
                <td className="px-4 py-3">Orçamento limitado</td>
              </tr>
              <tr className="bg-gray-50/80">
                <td className="px-4 py-3 font-medium">Policarbonato compacto</td>
                <td className="px-4 py-3">Visual elegante, transparente</td>
                <td className="px-4 py-3">Transmite mais calor</td>
                <td className="px-4 py-3">{formatPriceRange(COBERSYSTEM_PRICING.fixaCompacto)}</td>
                <td className="px-4 py-3">Áreas com pouca insolação</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Termoacústica</td>
                <td className="px-4 py-3">Bloqueia ~95% ruído, reduz ~10&nbsp;°C</td>
                <td className="px-4 py-3">Sem luz natural</td>
                <td className="px-4 py-3">{formatPriceRange(COBERSYSTEM_PRICING.fixaAlveolar)}</td>
                <td className="px-4 py-3">Máximo conforto</td>
              </tr>
              <tr className="bg-gray-50/80">
                <td className="px-4 py-3 font-medium">Retrátil policarbonato</td>
                <td className="px-4 py-3">Flexibilidade total</td>
                <td className="px-4 py-3">Investimento maior</td>
                <td className="px-4 py-3">{formatPriceRange(COBERSYSTEM_PRICING.retratilAutomatizada)}</td>
                <td className="px-4 py-3">Quem quer abrir/fechar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PriceEstimateNote />
        <div className="space-y-4 text-base leading-relaxed md:text-lg mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Fatores decisivos</h3>
          <p>
            Avalie se o sol bate <strong>direto o dia todo</strong> sobre a <strong>área
            gourmet</strong> ou se há sombra de árvores e beiral. O uso principal — almoços rápidos,
            jantares prolongados ou <strong>festas</strong> com <strong>churrasqueira</strong> a
            pleno vapor — define quanta <strong>ventilação</strong> você precisa e se vale abrir mão
            de luz natural em troca de silêncio na chuva.
          </p>
          <h3 className="pt-2 text-xl font-semibold text-gray-900">
            Orientação solar e churrasqueira
          </h3>
          <p>
            Fachadas com incidência forte de <strong>norte</strong> ou <strong>oeste</strong> costumam
            beneficiar-se de <strong>telha termoacústica</strong> ou policarbonato em tons{' '}
            <strong>fumê/bronze</strong>, equilibrando calor. <strong>Sul</strong> e{' '}
            <strong>leste</strong> frequentemente permitem <strong>policarbonato</strong> claro com
            bom desempenho. Se a <strong>churrasqueira</strong> for grande e próxima da cobertura, o
            calor radiante pode tornar a termoacústica ou o retrátil mais confortáveis que um
            policarbonato cristal fixo.
          </p>
          <h3 className="pt-2 text-xl font-semibold text-gray-900">
            Estilo da casa e orçamento
          </h3>
          <p>
            Projetos <strong>modernos</strong> dialogam bem com policarbonato e alumínio; linhas mais{' '}
            <strong>rústicas</strong> combinam com telhas em tons terrosos. Para uma{' '}
            <strong>área externa</strong> de cerca de <strong>20&nbsp;m²</strong>, a diferença entre
            tipos de cobertura costuma ficar na ordem de <strong>R$&nbsp;5.000 a R$&nbsp;10.000</strong>{' '}
            no total do projeto — motivo para comparar pacotes completos, não só o preço por metro.
            O <strong>combo ideal</strong> para muitos clientes é <strong>policarbonato fumê ou
            bronze</strong>: preserva privacidade, reduz ofuscamento e ainda entrega luz difusa no{' '}
            <strong>espaço gourmet</strong>.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Projeto e legislação: o que você precisa saber
        </h2>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            <strong>Residências:</strong> a necessidade de aprovação varia por município. Em muitos
            casos, coberturas residenciais de menor porte não exigem aprovação prévia, mas é importante
            consultar a legislação local. A Cobersystem orienta sobre os requisitos específicos da sua
            região sem custo adicional.
          </p>
          <p>
            Em <strong>condomínios</strong>, a regra é clara: <strong>sempre é necessária
            aprovação</strong> do síndico e conformidade com a convenção e o regimento interno,
            independentemente do tamanho. A Cobersystem pode fornecer{' '}
            <strong>projeto técnico em PDF</strong> (plantas, cortes, especificações),{' '}
            <strong>memorial descritivo</strong> com materiais e dimensões, e{' '}
            <strong>ART (Anotação de Responsabilidade Técnica)</strong> quando solicitada para
            instruir a administradora ou a assembleia.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Fluxo típico no condomínio</h3>
          <ol className="list-decimal space-y-2 pl-6 marker:text-blue-600">
            <li>Envio do projeto à administradora com formulários do condomínio.</li>
            <li>Inclusão em pauta de assembleia ou análise pela diretoria, conforme regimento.</li>
            <li>
              <strong>Prazo médio de 15 a 30 dias</strong> para retorno, variando por calendário de
              reuniões.
            </li>
            <li>
              A Cobersystem <strong>orienta o cliente nesse processo sem custo adicional</strong> na
              fase de estudo, alinhando memorial às exigências do prédio.
            </li>
          </ol>
          <p>
            Boas práticas com vizinhos incluem garantir que <strong>águas pluviais</strong> escoem
            para calhas próprias e tubos, <strong>nunca despejadas diretamente no terreno
            vizinho</strong>. Respeite <strong>recuo mínimo</strong> de divisa — valores como{' '}
            <strong>1,5&nbsp;m</strong> são comuns, mas dependem do zoneamento municipal. Em casas
            antigas ou lajes com patologias, pode ser necessário <strong>laudo estrutural</strong>{' '}
            antes de apoiar cargas novas.
          </p>
          <p>
            O <strong>custo para regularizar</strong> documentação costuma ser{' '}
            <strong>R$&nbsp;0</strong> quando apenas aprovação condominial basta; em cenários que
            exijam ART complementar e taxas municipais, o cliente pode enfrentar faixas até cerca de{' '}
            <strong>R$&nbsp;1.500</strong>, conforme complexidade — valores indicativos, não
            substituem consulta local.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Quanto custa cobertura completa para área gourmet
        </h2>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Orçamentos de <strong>cobertura área gourmet</strong> variam com metragem e sistema. Como
            referência para projetos integrados:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-blue-600">
            <li>
              <strong>15&nbsp;m²</strong> (pequena): aproximadamente{' '}
              <strong>R$&nbsp;9.000 a R$&nbsp;18.000</strong>
            </li>
            <li>
              <strong>20&nbsp;m²</strong> (média): <strong>R$&nbsp;12.000 a R$&nbsp;25.000</strong>
            </li>
            <li>
              <strong>30&nbsp;m²</strong> (grande): <strong>R$&nbsp;18.000 a R$&nbsp;40.000</strong>
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900">O que costuma estar incluso</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-blue-600">
            <li>Projeto técnico personalizado</li>
            <li>Estrutura em alumínio naval ou aço pintado (conforme memorial)</li>
            <li>Cobertura em policarbonato ou termoacústica</li>
            <li>Calhas e condutores de água da chuva</li>
            <li>Rufos e acabamentos</li>
            <li>Instalação completa e limpeza pós-obra</li>
            <li>Garantia Cobersystem de 2 anos</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900">Opcionais frequentes</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-blue-600">
            <li>Fechamento lateral com vidro: <strong>+R$&nbsp;300–500/m²</strong></li>
            <li>Iluminação LED embutida: <strong>+R$&nbsp;2.000–4.000</strong></li>
            <li>Ventiladores de teto: <strong>+R$&nbsp;800–1.500/unidade</strong></li>
            <li>Deck de madeira: <strong>+R$&nbsp;200–400/m²</strong></li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900">Pagamento e comparativos</h3>
          <p>
            <strong>À vista</strong> frequentemente permite <strong>desconto de 5% a 10%</strong>.
            Planos parcelados comuns incluem <strong>entrada de 30%</strong> e saldo em até{' '}
            <strong>6x sem juros</strong>; cartão de crédito pode ser aceito conforme condição
            comercial. Para contextualizar: <strong>toldo retrátil</strong> pode custar{' '}
            <strong>R$&nbsp;4.000–8.000</strong>, mas raramente entrega vedação e acabamento de uma
            cobertura estrutural; <strong>alvenaria</strong> fechada pode ir de{' '}
            <strong>R$&nbsp;40.000 a R$&nbsp;80.000</strong> e sacrificar luz natural;{' '}
            <strong>tenda removível</strong> de <strong>R$&nbsp;2.000–4.000</strong> dura poucos anos.
            A <strong>cobertura área gourmet</strong> profissional equilibra durabilidade, estética e
            valorização do <strong>espaço gourmet</strong>.
          </p>
          <p>
            Ao fechar orçamento, peça discriminação entre estrutura, cobertura, calhas e frete de
            equipe — transparência evita surpresas e facilita comparar pacotes equivalentes para a
            mesma <strong>área externa</strong>, especialmente quando a <strong>churrasqueira</strong>{' '}
            exige recortes especiais ou exaustão complementar.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Instalação: cronograma e processo
        </h2>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Para a maioria das <strong>áreas gourmet</strong> até <strong>30&nbsp;m²</strong>, o
            prazo de obra em campo fica entre <strong>3 e 5 dias úteis</strong>, somando preparação e
            acabamentos.
          </p>
          <ul className="list-disc space-y-3 pl-6 marker:text-blue-600">
            <li>
              <strong>Dia 0 (pré-obra):</strong> visita técnica, medições finas e fechamento do
              projeto executivo.
            </li>
            <li>
              <strong>Dia 1:</strong> marcação de apoios, proteção de pisos próximos à{' '}
              <strong>churrasqueira</strong>, início da estrutura.
            </li>
            <li>
              <strong>Dia 2:</strong> montagem completa da estrutura metálica, conferência de níveis.
            </li>
            <li>
              <strong>Dia 3:</strong> instalação das placas ou telhas da cobertura.
            </li>
            <li>
              <strong>Dia 4:</strong> calhas, rufos, vedações e acabamentos visíveis.
            </li>
            <li>
              <strong>Dia 5:</strong> limpeza final, vistoria e entrega com orientações de uso.
            </li>
          </ul>
          <p>
            Sempre que possível, a família continua utilizando a <strong>churrasqueira</strong> em
            horários combinados — a obra busca <strong>interferências mínimas</strong>. Recomendamos
            proteger <strong>móveis</strong>, eletrodomésticos externos e <strong>plantas</strong>{' '}
            sensíveis com lençóis ou lonas leves. Na entrega técnica, explicamos manuseio de calhas,
            pontos de drenagem e cuidados com automação, se houver.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">
            Checklist de vistoria final (18 itens)
          </h3>
          <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            {[
              'Nivelamento geral da estrutura',
              'Fixações e aparafusamento',
              'Integridade das placas/telhas',
              'Continuidade de calhas',
              'Condutores pluviais conectados',
              'Rufos sobre vãos e paredes',
              'Vedação em interfaces',
              'Teste de escoamento (água)',
              'Ausência de vazamentos aparentes',
              'Acabamento de pintura/oxidização',
              'Segurança de bordas cortantes',
              'Acesso a pontos de manutenção',
              'Funcionamento de motores (se retrátil)',
              'Comandos e automação pareados',
              'Limpeza da área de trabalho',
              'Remoção de entulho leve',
              'Entrega de orientações escritas',
              'Registro fotográfico da conclusão',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Design e integração com a casa
        </h2>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Uma <strong>cobertura área gourmet</strong> bem resolvida deve &quot;conversar&quot; com
            linhas da edificação: repetir linguagem de materiais e cores aproxima visualmente a{' '}
            <strong>área externa</strong> da sala envidraçada ou da cozinha gourmet interna.
          </p>
          <ul className="list-disc space-y-3 pl-6 marker:text-blue-600">
            <li>
              <strong>Moderno:</strong> policarbonato cristal com estrutura em alumínio branco ou
              preto fosco.
            </li>
            <li>
              <strong>Industrial:</strong> alumínio grafite e policarbonato fumê.
            </li>
            <li>
              <strong>Rústico:</strong> estrutura com acabamento amadeirado e telha termoacústica bege.
            </li>
            <li>
              <strong>Clássico:</strong> estrutura branca com policarbonato bronze.
            </li>
          </ul>
          <p>
            <strong>Acabamentos</strong> devem dialogar com esquadrias existentes.{' '}
            <strong>Iluminação</strong> precisa constar do projeto — pontos para spots, fitas LED sob
            beiral ou perfis embutidos. <strong>Ventilação</strong> estratégica (aberturas laterais,
            brises parciais) garante brisa na <strong>churrasqueira</strong>. Para{' '}
            <strong>privacidade</strong>, avalie fechamento lateral parcial em vidro ou policarbonato.
            <strong>Paisagismo</strong> com jardim vertical ou vasos pendentes humaniza o{' '}
            <strong>espaço gourmet</strong>. Dica de composição: repetir a <strong>paleta de
            cores</strong> da área interna em detalhes externos (tapete, almofadas, tinta do pergolado)
            para sensação de continuidade.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Cases de sucesso e inspirações
        </h2>
        <div className="space-y-6 text-base leading-relaxed md:text-lg">
          <p className="text-sm text-gray-500">
            Cenários ilustrativos baseados em projetos típicos — resultados variam conforme imóvel e
            região.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Caso 1 — Apartamento, Zona Sul (~20&nbsp;m²)
            </h3>
            <p>
              <strong>Desafio:</strong> pouca insolação direta e vento forte na varanda gourmet.{' '}
              <strong>Solução:</strong> policarbonato compacto cristal com fechamento lateral
              parcial. <strong>Resultado:</strong> uso confortável o ano todo; avaliação imobiliária
              posterior citou <strong>valorização de cerca de 18%</strong> na percepção de venda do
              lote comparável.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Caso 2 — Casa, Zona Leste (~30&nbsp;m²)
            </h3>
            <p>
              <strong>Desafio:</strong> sol forte ao fim da tarde e <strong>churrasqueira</strong>{' '}
              de alto desempenho. <strong>Solução:</strong> telha termoacústica com ventiladores de
              teto. <strong>Resultado:</strong> queda de cerca de <strong>12&nbsp;°C</strong> na
              sensação térmica sob a coberta e menor dependência de ventiladores portáteis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Caso 3 — Sobrado, Zona Norte (~25&nbsp;m²)
            </h3>
            <p>
              <strong>Desafio:</strong> exigências estéticas do condomínio e desejo de automação.{' '}
              <strong>Solução:</strong> policarbonato fumê retrátil com automação.{' '}
              <strong>Resultado:</strong> aprovação em cerca de <strong>20 dias</strong>; família
              passou a usar diariamente o <strong>espaço gourmet</strong>.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Depoimentos (resumo)</h3>
            <p className="mb-2 text-gray-700">
              &quot;Finalmente fazemos churrasco sem olhar toda hora para o radar de chuva.&quot;
            </p>
            <p className="text-gray-700">
              &quot;A cobertura virou nosso escritório ao ar livre de segunda a sexta.&quot;
            </p>
          </div>
          <p>
            No site da Cobersystem você encontra <strong>galeria com fotos de mais de 200
            projetos</strong> — referência visual para inspirar sua <strong>área gourmet</strong> e
            combinar materiais antes da visita técnica.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 md:p-8">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
          Manutenção e durabilidade
        </h2>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Recomendamos limpeza <strong>trimestral</strong> — ou logo após <strong>festas</strong>{' '}
            grandes com respingos de gordura na <strong>churrasqueira</strong>.{' '}
            <strong>Policarbonato:</strong> água morna e detergente neutro, pano macio.{' '}
            <strong>Termoacústica:</strong> vassoura de pelo macio e lavagem suave conforme fabricante.{' '}
            <strong>Alumínio:</strong> pano úmido com detergente neutro, sem esponjas abrasivas.
          </p>
          <p>
            Anualmente, verifique <strong>parafusos</strong>, <strong>vedações</strong> e{' '}
            <strong>calhas</strong>. Vida útil típica: <strong>15–30 anos</strong> para policarbonato
            de linha premium; <strong>20–40 anos</strong> para estruturas de alumínio bem
            mantidas. A <strong>garantia Cobersystem de 2 anos</strong> cobre defeitos de fabricação
            e instalação conforme contrato.
          </p>
          <p>
            <strong>Problemas comuns:</strong> folhas acumuladas em calha (limpeza semestral resolve)
            e parafuso solto (aperto controlado). <strong>Chame o técnico</strong> se notar goteiras
            persistentes ou movimentação anormal da estrutura — situações raras quando o projeto e a
            execução seguem especificação.
          </p>
        </div>
      </section>
    </div>
  );
}
