import type { Metadata } from 'next';
import Link from 'next/link';
import cidadesData from '@/content/cidades-interior.json';
import { getSlugsCidadesInteriorRetratil } from '@/lib/cobertura-retratil-interior';

const BASE = 'https://www.coberturapolicarbonato.com.br';
const PATH = '/produtos/cobertura-retratil/em';

export const metadata: Metadata = {
  title: 'Cobertura Retrátil no Interior de SP | Cobersystem',
  description:
    'A Cobersystem instala cobertura retrátil e abre e fecha em 42 cidades do interior paulista. Atendemos Jundiaí, Campinas, São José dos Campos e toda a região. Orçamento sem compromisso.',
  keywords:
    'cobertura retrátil interior SP, cobertura abre e fecha interior de São Paulo, cobertura retrátil Jundiaí, cobertura retrátil Campinas, cobertura retrátil Vale do Paraíba',
  alternates: {
    canonical: `${BASE}${PATH}`,
  },
  openGraph: {
    title: 'Cobertura Retrátil no Interior de SP | Cobersystem',
    description:
      'Instalamos cobertura retrátil em 42 cidades do interior de SP. Único especialista que atende a região com projeto, medição e instalação.',
    url: `${BASE}${PATH}`,
  },
};

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#local-business`,
  name: 'Cobersystem',
  description:
    'Especialista em cobertura retrátil abre e fecha com atendimento em todo o estado de São Paulo, incluindo Grande SP e interior paulista.',
  url: BASE,
  telephone: '+55-11-98229-5079',
  image: `${BASE}/images/logo-cobersystem.png`,
  priceRange: 'R$8.000 – R$80.000',
  areaServed: {
    '@type': 'State',
    name: 'Estado de São Paulo',
    containsPlace: cidadesData.cidades.map((c) => ({
      '@type': 'City',
      name: c.nome,
    })),
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/cobersystem',
    'https://www.facebook.com/cobersystem',
  ],
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: BASE },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Produtos',
      item: `${BASE}/produtos`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cobertura Retrátil',
      item: `${BASE}/produtos/cobertura-retratil`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Interior de SP',
      item: `${BASE}${PATH}`,
    },
  ],
};

const TIER_LABELS: Record<number, string> = {
  1: 'Região Prioritária',
  2: 'Atendimento Frequente',
  3: 'Atendimento Sob Agendamento',
  4: 'Atendimento Sob Consulta',
};

const TIER_COLORS: Record<number, string> = {
  1: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  2: 'bg-white border-gray-200 hover:border-blue-300',
  3: 'bg-white border-gray-200 hover:border-gray-400',
  4: 'bg-gray-50 border-gray-200 hover:border-gray-400',
};

const TIER_BADGE_COLORS: Record<number, string> = {
  1: 'bg-blue-100 text-blue-700',
  2: 'bg-green-100 text-green-700',
  3: 'bg-yellow-100 text-yellow-700',
  4: 'bg-gray-100 text-gray-600',
};

const cidades = [...cidadesData.cidades].sort((a, b) => a.tier - b.tier || a.nome.localeCompare(b.nome, 'pt-BR'));

export default function InteriorHubPage() {
  const tier1 = cidades.filter((c) => c.tier === 1);
  const tier2 = cidades.filter((c) => c.tier === 2);
  const tier3 = cidades.filter((c) => c.tier === 3);
  const tier4 = cidades.filter((c) => c.tier === 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
          <nav className="text-sm text-gray-500 flex gap-2 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition">Início</Link>
            <span>/</span>
            <Link href="/produtos" className="hover:text-blue-600 transition">Produtos</Link>
            <span>/</span>
            <Link href="/produtos/cobertura-retratil" className="hover:text-blue-600 transition">Cobertura Retrátil</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Interior de SP</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Cobertura Retrátil — Interior de SP
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Cobertura Retrátil no Interior de São Paulo
              </h1>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                A <strong>Cobersystem</strong> é especialista em coberturas retráteis abre e fecha e atende{' '}
                <strong>42 cidades do interior paulista</strong>. Baseada em São Paulo, nossa equipe realiza
                medição, projeto técnico e instalação completa em toda a região — sem necessidade de
                encontrar um instalador local.
              </p>
              <p className="text-gray-500 mb-7 leading-relaxed">
                Do Vale do Paraíba à Região Metropolitana de Campinas, passando por Jundiaí e o Circuito das Águas:
                onde quer que você esteja, entregamos o mesmo padrão de qualidade e a mesma cobertura que
                já instalamos em centenas de residências na Grande SP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/orcamento"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-blue-700 transition shadow-md text-center"
                >
                  Solicitar Orçamento
                </Link>
                <a
                  href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Quero+saber+mais+sobre+cobertura+retr%C3%A1til+para+minha+cidade+no+interior+de+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-green-600 transition shadow-md text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="max-w-6xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏗️', title: 'Projeto Técnico', desc: 'Medição e memorial descritivo incluso' },
              { icon: '🔧', title: 'Instalação Própria', desc: 'Equipe técnica especializada, sem terceiros' },
              { icon: '⚡', title: 'Automação', desc: 'Motor elétrico, sensor de chuva e Alexa' },
              { icon: '📋', title: 'Garantia Escrita', desc: '12 meses em estrutura e mecanismo' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-800 text-sm mb-1">{item.title}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cidades por Tier */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Cidades Atendidas no Interior de SP
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            {cidades.length} cidades · Selecione sua cidade para ver informações e solicitar orçamento
          </p>

          {/* Tier 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${TIER_BADGE_COLORS[1]}`}>
                {TIER_LABELS[1]}
              </span>
              <span className="text-xs text-gray-400">{tier1.length} cidades</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {tier1.map((cidade) => (
                <CidadeCard key={cidade.slug} cidade={cidade} />
              ))}
            </div>
          </div>

          {/* Tier 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${TIER_BADGE_COLORS[2]}`}>
                {TIER_LABELS[2]}
              </span>
              <span className="text-xs text-gray-400">{tier2.length} cidades</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {tier2.map((cidade) => (
                <CidadeCard key={cidade.slug} cidade={cidade} />
              ))}
            </div>
          </div>

          {/* Tier 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${TIER_BADGE_COLORS[3]}`}>
                {TIER_LABELS[3]}
              </span>
              <span className="text-xs text-gray-400">{tier3.length} cidades</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {tier3.map((cidade) => (
                <CidadeCard key={cidade.slug} cidade={cidade} />
              ))}
            </div>
          </div>

          {/* Tier 4 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${TIER_BADGE_COLORS[4]}`}>
                {TIER_LABELS[4]}
              </span>
              <span className="text-xs text-gray-400">{tier4.length} cidades</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {tier4.map((cidade) => (
                <CidadeCard key={cidade.slug} cidade={cidade} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção informativa */}
        <section className="bg-white border-t border-gray-100 py-14">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Por que contratar da Cobersystem para o interior de SP?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Único instalador especializado na região</h3>
                <p className="text-sm">
                  A cobertura retrátil abre e fecha é um produto técnico que exige engenharia de projeto,
                  trilhos de precisão e motorização calibrada. No interior de SP, não existe empresa local
                  com esse know-how — e é exatamente por isso que a Cobersystem atende essas cidades
                  com equipe própria deslocada de SP.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Processo transparente de ponta a ponta</h3>
                <p className="text-sm">
                  Da primeira conversa até a instalação, você acompanha cada etapa: medição in loco,
                  projeto 3D, aprovação antes da fabricação, entrega com data agendada e treinamento de
                  uso. Tudo documentado e com garantia contratual.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Aplicações mais comuns no interior</h3>
                <p className="text-sm">
                  No interior paulista, as aplicações mais solicitadas são cobertura retrátil para piscina,
                  para área gourmet com churrasqueira e para varandas de casas amplas — perfil de residência
                  mais comum em cidades como Jundiaí, Indaiatuba, Vinhedo e Valinhos.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Ticket médio e prazo de retorno</h3>
                <p className="text-sm">
                  O investimento médio para uma cobertura retrátil residencial é de R$12.600. O prazo
                  médio de produção e instalação é de 25 a 40 dias após aprovação do projeto.
                  Financiamento disponível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-blue-600 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Sua cidade está na lista?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Fale com a equipe da Cobersystem e descubra como funciona a instalação na sua cidade.
              Orçamento gratuito, sem visita obrigatória na primeira conversa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/orcamento"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
              >
                Solicitar Orçamento Online
              </Link>
              <a
                href="https://wa.me/5511982295079?text=Ol%C3%A1%21+Vim+pelo+site+e+quero+saber+se+voc%C3%AAs+atendem+minha+cidade+no+interior+de+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition shadow-lg"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const SLUGS_COM_PAGINA = new Set(getSlugsCidadesInteriorRetratil());

function CidadeCard({ cidade }: { cidade: (typeof cidadesData.cidades)[number] }) {
  const colorClass = TIER_COLORS[cidade.tier as keyof typeof TIER_COLORS] ?? 'bg-white border-gray-200';
  const temPagina = SLUGS_COM_PAGINA.has(cidade.slug);

  const conteudo = (
    <>
      <div className={`font-semibold text-sm leading-tight mb-1 ${temPagina ? 'text-gray-800 group-hover:text-blue-700 transition' : 'text-gray-500'}`}>
        {cidade.nome}
      </div>
      <div className="text-xs text-gray-400 truncate">{cidade.regiao.replace('Região Metropolitana de ', 'RM ')}</div>
      {!temPagina && (
        <div className="text-xs text-gray-300 mt-1">Em breve</div>
      )}
    </>
  );

  if (temPagina) {
    return (
      <Link
        href={`/produtos/cobertura-retratil/em/${cidade.slug}`}
        className={`block rounded-xl border p-4 shadow-sm transition ${colorClass} group`}
      >
        {conteudo}
      </Link>
    );
  }

  return (
    <div className={`block rounded-xl border p-4 shadow-sm cursor-default ${colorClass} opacity-60`}>
      {conteudo}
    </div>
  );
}
