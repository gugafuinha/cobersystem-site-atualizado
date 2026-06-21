import Link from 'next/link';
import type { CidadeInteriorRetratil } from '@/lib/cobertura-retratil-interior';

const BASE = 'https://www.coberturapolicarbonato.com.br';

// ─── Schemas JSON-LD ─────────────────────────────────────────────────────────

function buildServiceSchema(c: CidadeInteriorRetratil) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Cobertura Retrátil em ${c.nome}`,
    description: `Instalação de cobertura retrátil abre e fecha em policarbonato ou alumínio em ${c.nome} (${c.regiao}). Projeto técnico, fabricação e instalação pela Cobersystem.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Cobersystem',
      url: BASE,
      telephone: '+55-11-98229-5079',
      '@id': `${BASE}/#local-business`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: c.nome,
      containedInPlace: { '@type': 'State', name: 'São Paulo' },
    },
    serviceType: 'Instalação de cobertura retrátil abre e fecha',
    offers: {
      '@type': 'Offer',
      priceRange: 'R$6.000 – R$35.000',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aplicações de Cobertura Retrátil',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Cobertura Retrátil para Piscina em ${c.nome}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Cobertura Retrátil para Área Gourmet em ${c.nome}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Cobertura Retrátil para Varanda em ${c.nome}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Cobertura Retrátil para Garagem em ${c.nome}` } },
      ],
    },
  };
}

function buildFaqSchema(c: CidadeInteriorRetratil) {
  const allFaqs = [
    ...c.faq_geo,
    {
      q: `Quanto custa cobertura retrátil em ${c.nome}?`,
      a: `O preço varia de R$6.000 a R$35.000 dependendo do vão, material e tipo de motorização. O ticket médio de projetos residenciais em ${c.nome} é de R$12.600. Para projetos acima de R$15.000, o deslocamento de SP até ${c.nome} (${c.distancia_sp_km} km) está incluído no preço.`,
    },
    {
      q: `Qual material é melhor para cobertura retrátil em ${c.nome}?`,
      a: `Para piscinas e varandas, o policarbonato alveolar oferece melhor isolamento térmico. Para áreas que precisam de máxima translucidez, o compacto cristal é ideal. Para garagens e áreas com menos necessidade de luz, as telhas em alumínio são mais robustas e opacas. A visita técnica define a melhor opção para seu projeto específico em ${c.nome}.`,
    },
    {
      q: `A cobertura retrátil tem sensor de chuva automático?`,
      a: `Sim. O sensor de chuva é um acessório opcional que detecta precipitação e fecha a cobertura automaticamente em 30 segundos — mesmo que você não esteja em casa. É especialmente útil em ${c.nome} durante o período de chuvas intensas entre outubro e março, protegendo o espaço interno sem ação manual.`,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

function buildBreadcrumbSchema(c: CidadeInteriorRetratil) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Produtos', item: `${BASE}/produtos` },
      { '@type': 'ListItem', position: 3, name: 'Cobertura Retrátil', item: `${BASE}/produtos/cobertura-retratil` },
      { '@type': 'ListItem', position: 4, name: 'Interior de SP', item: `${BASE}/produtos/cobertura-retratil/em` },
      { '@type': 'ListItem', position: 5, name: c.nome, item: `${BASE}/produtos/cobertura-retratil/em/${c.slug}` },
    ],
  };
}

// ─── Static content blocks ────────────────────────────────────────────────────

const APLICACOES = [
  {
    id: 'piscina',
    titulo: 'Cobertura Retrátil para Piscina',
    descricao:
      'Proteção total contra chuva, folhas e detritos. O sistema fecha em segundos quando o tempo muda e abre totalmente quando a piscina está em uso — preservando a luminosidade natural. Material: policarbonato alveolar UV ou compacto cristal.',
    href: '/servicos/cobertura-piscina',
  },
  {
    id: 'area-gourmet',
    titulo: 'Cobertura Retrátil para Área Gourmet',
    descricao:
      'Integra churrasqueira, pergolado e espaço social com controle de ventilação de 0° a 90°. Pode ser combinada com fechamento lateral em vidro ou cortina de rolo. Perfeita para uso o ano todo — aberta no verão, fechada no inverno.',
    href: '/servicos/cobertura-area-gourmet',
  },
  {
    id: 'churrasqueira',
    titulo: 'Cobertura Retrátil para Churrasqueira',
    descricao:
      'Resistente ao calor e à fuligem gerados pela grelha. Material com tratamento UV dupla face. Abertura total durante o uso para ventilação máxima, fechamento quando não utilizado para proteger o espaço.',
    href: '/servicos/cobertura-area-gourmet',
  },
  {
    id: 'garagem',
    titulo: 'Cobertura Retrátil para Garagem',
    descricao:
      'Proteção veicular sem bloquear a entrada de ar. Perfis de alumínio extrudado anodizado resistentes ao clima da região. Combinável com fechamento frontal com portão retrátil. Fácil manutenção sem desmontagem.',
    href: '/servicos/cobertura-garagem',
  },
  {
    id: 'varanda',
    titulo: 'Cobertura Retrátil para Varanda',
    descricao:
      'Dimensionada para varandas de casas e sobrados. Opções em alumínio intercalado (mais opacidade) ou policarbonato (mais luz). Automação opcional via Alexa, Google Home ou controle remoto. Fechamento silencioso.',
    href: '/servicos/cobertura-varanda-apartamento',
  },
  {
    id: 'jardim-inverno',
    titulo: 'Cobertura Retrátil para Jardim de Inverno',
    descricao:
      'Teto que abre para ventilação natural no verão. Perfis slim que não comprometem a estética. Integração com fechamento de vidro nas laterais. Ideal para ambientes que precisam de luz natural com proteção contra chuva.',
    href: '/servicos/cobertura-jardim-de-inverno',
  },
  {
    id: 'area-servico',
    titulo: 'Cobertura Retrátil para Área de Serviço',
    descricao:
      'Protege roupa no varal mesmo durante chuva intensa. Perfil compacto que não compromete a circulação. Acionamento simples por corda, manivela ou motor elétrico — escolha o que melhor se encaixa na sua rotina.',
    href: '/produtos/cobertura-retratil',
  },
];

const MATERIAIS = [
  { material: 'Policarbonato alveolar', translucidez: 'Alta', uv: 'Sim (dupla face)', termico: 'Melhor', uso: 'Piscinas, áreas abertas' },
  { material: 'Policarbonato compacto', translucidez: 'Máxima (cristal)', uv: 'Sim', termico: 'Moderado', uso: 'Varandas, jardim de inverno' },
  { material: 'Telha em alumínio', translucidez: 'Opaco', uv: 'N/A', termico: 'Excelente', uso: 'Garagem, áreas com sombreamento' },
  { material: 'Telha intercalada', translucidez: 'Parcial', uv: 'Sim', termico: 'Bom', uso: 'Área gourmet, churrasqueira' },
];

const FAQS_GENERICAS = (cidade: string, distancia: number, tempo: string) => [
  {
    q: `Quanto custa cobertura retrátil em ${cidade}?`,
    a: `O preço varia de R$6.000 a R$35.000 dependendo do vão, material e tipo de motorização. O ticket médio residencial em ${cidade} é de R$12.600. Para projetos acima de R$15.000, o deslocamento de SP (${distancia} km, ${tempo}) está incluído no preço — sem custo adicional de frete.`,
  },
  {
    q: `Qual material é melhor para cobertura retrátil em ${cidade}?`,
    a: `Para piscinas e varandas, o policarbonato alveolar oferece melhor isolamento térmico. Para máxima translucidez, o compacto cristal é indicado. Para garagens, as telhas em alumínio são mais robustas. A visita técnica em ${cidade} define a melhor opção para o seu projeto.`,
  },
  {
    q: `A cobertura retrátil tem sensor de chuva automático?`,
    a: `Sim. O sensor de chuva detecta precipitação e fecha a cobertura automaticamente em 30 segundos. É especialmente útil em ${cidade} durante os meses de chuvas intensas (outubro a março), protegendo o espaço sem ação manual.`,
  },
  {
    q: `Precisa de obra de alvenaria para instalar cobertura retrátil?`,
    a: `Não. O sistema é fixado sobre estrutura de alumínio parafusada na alvenaria, laje ou madeira existentes. Não é necessário quebrar paredes ou fazer fundação nova. A instalação completa em ${cidade} leva de 1 a 2 dias sem obra pesada.`,
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function InteriorCidadePageContent({ cidade }: { cidade: CidadeInteriorRetratil }) {
  const pageUrl = `${BASE}/produtos/cobertura-retratil/em/${cidade.slug}`;
  const waLink = `https://wa.me/5511982295079?text=Ol%C3%A1%21+Quero+um+or%C3%A7amento+de+cobertura+retr%C3%A1til+em+${encodeURIComponent(cidade.nome)}`;
  const allFaqs = [...cidade.faq_geo, ...FAQS_GENERICAS(cidade.nome, cidade.distancia_sp_km, cidade.tempo_deslocamento)];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(cidade)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(cidade)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(cidade)) }} />

      <main className="min-h-screen bg-white">

        {/* ── Breadcrumb visual ───────────────────────────────────────────── */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500 flex gap-2 flex-wrap items-center">
              <Link href="/" className="hover:text-blue-600 transition">Início</Link>
              <span>/</span>
              <Link href="/produtos" className="hover:text-blue-600 transition">Produtos</Link>
              <span>/</span>
              <Link href="/produtos/cobertura-retratil" className="hover:text-blue-600 transition">Cobertura Retrátil</Link>
              <span>/</span>
              <Link href="/produtos/cobertura-retratil/em" className="hover:text-blue-600 transition">Interior de SP</Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">{cidade.nome}</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {cidade.regiao}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Cobertura Retrátil em {cidade.nome}
              </h1>
              {cidade.intro.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base">
                  {p}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-green-600 transition shadow-md text-center text-sm"
                >
                  Orçamento no WhatsApp
                </a>
                <Link
                  href="/orcamento"
                  className="inline-block bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md text-center text-sm"
                >
                  Orçamento Online
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/produtos/cobertura-retratil/aluminio/IMG_0305.jpg"
                alt={`Cobertura retrátil em ${cidade.nome} - Cobersystem`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── Destaques rápidos ───────────────────────────────────────────── */}
        <section className="bg-blue-600 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { v: `${cidade.distancia_sp_km} km de SP`, l: `${cidade.tempo_deslocamento} até ${cidade.nome}` },
                { v: 'Projeto 3D', l: 'Em até 5 dias após visita' },
                { v: '12 meses', l: 'Garantia em estrutura' },
                { v: 'Equipe própria', l: 'Sem terceiros na instalação' },
              ].map((item) => (
                <div key={item.v}>
                  <div className="text-xl font-bold">{item.v}</div>
                  <div className="text-blue-200 text-xs mt-1">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Aplicações ──────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Onde instalar cobertura retrátil em {cidade.nome}
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            7 aplicações atendidas pela Cobersystem em {cidade.nome} e {cidade.regiao}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APLICACOES.map((ap) => (
              <Link
                key={ap.id}
                href={ap.href}
                className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition mb-2 text-sm leading-snug">
                  {ap.titulo} em {cidade.nome}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{ap.descricao}</p>
                <span className="mt-3 text-xs font-semibold text-blue-600 block">Ver mais →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Como funciona ───────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Como funciona a instalação em {cidade.nome}
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  titulo: 'Orçamento online (sem visita)',
                  desc: `Envie fotos e medidas aproximadas pelo WhatsApp. Em até 24h apresentamos estimativa preliminar de custo e prazo para ${cidade.nome}.`,
                },
                {
                  num: '02',
                  titulo: `Visita técnica em ${cidade.nome}`,
                  desc: `Nossa equipe se desloca de SP (${cidade.distancia_sp_km} km, ${cidade.tempo_deslocamento}) para medição in loco, avaliação da estrutura e coleta de medidas exatas.`,
                },
                {
                  num: '03',
                  titulo: 'Projeto 3D',
                  desc: `Em até 5 dias úteis após a visita você recebe o projeto com vistas frontal, lateral e superior, incluindo especificação de materiais, trilhos e motorização.`,
                },
                {
                  num: '04',
                  titulo: 'Fabricação em SP',
                  desc: 'Após aprovação do projeto, fabricamos em nossa unidade em São Paulo. Prazo médio: 18 a 28 dias úteis, com cronograma comunicado antes do início.',
                },
                {
                  num: '05',
                  titulo: `Instalação em ${cidade.nome}`,
                  desc: `Equipe de instalação se desloca até ${cidade.nome} para montagem completa em 1 a 2 dias, seguida de treinamento de uso e entrega da garantia escrita.`,
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1 text-sm">{step.titulo}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Materiais ───────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Materiais disponíveis para cobertura retrátil em {cidade.nome}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Material', 'Translucidez', 'UV', 'Isolamento', 'Mais indicado para'].map((h) => (
                    <th key={h} className="text-left py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATERIAIS.map((m, i) => (
                  <tr key={m.material} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-gray-800">{m.material}</td>
                    <td className="py-3 px-4 text-gray-600">{m.translucidez}</td>
                    <td className="py-3 px-4 text-gray-600">{m.uv}</td>
                    <td className="py-3 px-4 text-gray-600">{m.termico}</td>
                    <td className="py-3 px-4 text-gray-600">{m.uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Toda a estrutura é em alumínio anodizado — não enferruja, não exige pintura e tem vida útil de 15 a 25 anos.
          </p>
        </section>

        {/* ── Preço ───────────────────────────────────────────────────────── */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Quanto custa cobertura retrátil em {cidade.nome}?
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              O preço em {cidade.nome} segue a mesma tabela da Grande SP — não há acréscimo por distância para projetos acima de R$15.000.
              O custo de deslocamento ({cidade.distancia_sp_km} km, {cidade.tempo_deslocamento}) está incluído nesses casos.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { tipo: 'Cobertura retrátil para piscina', range: 'R$12.000 – R$35.000' },
                { tipo: 'Cobertura retrátil para área gourmet', range: 'R$8.000 – R$25.000' },
                { tipo: 'Cobertura retrátil para garagem (1 carro)', range: 'R$7.500 – R$18.000' },
                { tipo: 'Cobertura retrátil para varanda', range: 'R$6.000 – R$20.000' },
              ].map((item) => (
                <div key={item.tipo} className="bg-white rounded-xl border border-blue-100 p-4 flex justify-between items-center shadow-sm">
                  <span className="text-sm text-gray-700">{item.tipo}</span>
                  <span className="font-bold text-blue-700 text-sm whitespace-nowrap ml-3">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Ticket médio geral: <strong>R$12.600</strong>. Valores dependem de vão, material, motorização e número de trilhos.
              Financiamento disponível — consulte condições pelo WhatsApp.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-green-600 transition shadow-md text-sm"
            >
              Pedir orçamento para {cidade.nome}
            </a>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perguntas frequentes — Cobertura Retrátil em {cidade.nome}
          </h2>
          <div className="space-y-4">
            {allFaqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-gray-800 text-sm hover:bg-gray-50 transition list-none">
                  {q}
                  <span className="ml-4 shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Links internos ──────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-5">
              Explore mais sobre coberturas retráteis
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {/* Produto irmão */}
              <Link
                href={`/produtos/cobertura-abre-e-fecha/em/${cidade.slug}`}
                className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-blue-600 shrink-0">↔</span>
                <span>Cobertura Abre e Fecha em {cidade.nome}</span>
              </Link>

              {/* Hub interior */}
              <Link
                href="/produtos/cobertura-retratil/em"
                className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-blue-600 shrink-0">🗺</span>
                <span>Todas as cidades atendidas no interior de SP</span>
              </Link>

              {/* Página-mãe */}
              <Link
                href="/produtos/cobertura-retratil"
                className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-blue-600 shrink-0">↑</span>
                <span>Linha completa de coberturas retráteis</span>
              </Link>

              {/* Cidades vizinhas */}
              {cidade.cidades_vizinhas_slugs.map((vizSlug, i) => {
                const vizNome = cidade.cidades_vizinhas[i];
                return (
                  <Link
                    key={vizSlug}
                    href={`/produtos/cobertura-retratil/em/${vizSlug}`}
                    className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition"
                  >
                    <span className="text-blue-600 shrink-0">📍</span>
                    <span>Cobertura Retrátil em {vizNome}</span>
                  </Link>
                );
              })}

              {/* Blog */}
              <Link
                href="/blog/sensor-chuva-cobertura-retratil-como-funciona"
                className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-blue-600 shrink-0">📖</span>
                <span>Como funciona o sensor de chuva</span>
              </Link>

              <Link
                href="/orcamento"
                className="flex items-center gap-3 bg-blue-600 text-white rounded-lg border border-blue-600 p-4 hover:bg-blue-700 transition font-semibold"
              >
                <span className="shrink-0">✓</span>
                <span>Solicitar orçamento agora</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA Final ───────────────────────────────────────────────────── */}
        <section className="bg-blue-700 py-14 text-center text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Solicite orçamento de cobertura retrátil em {cidade.nome}
            </h2>
            <p className="text-blue-200 mb-3 text-base leading-relaxed">
              Fale com nossa equipe e receba uma estimativa personalizada.
              Sem visita obrigatória na primeira conversa — comece com fotos e medidas pelo WhatsApp.
            </p>
            <p className="text-blue-300 text-sm mb-8">
              {cidade.regiao} · {cidade.distancia_sp_km} km de SP · {cidade.tempo_deslocamento} até {cidade.nome}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition shadow-lg"
              >
                WhatsApp — Orçamento em {cidade.nome}
              </a>
              <Link
                href="/orcamento"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
              >
                Formulário de Orçamento
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
