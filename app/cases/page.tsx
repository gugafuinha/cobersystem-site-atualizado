import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Projetos Realizados | Cobersystem SP',
  description:
    'Veja nossos cases de sucesso em coberturas retráteis e fixas. Mais de 200 projetos realizados em São Paulo. Antes e depois, depoimentos de clientes satisfeitos.',
  keywords: [
    'cases de sucesso',
    'projetos cobersystem',
    'obras realizadas',
    'depoimentos clientes',
    'portfólio coberturas',
  ],
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/cases',
  },
  openGraph: {
    title: 'Cases de Sucesso | Cobersystem SP',
    description:
      'Mais de 200 projetos em coberturas retráteis, termoacústicas e fixas em São Paulo e região.',
    url: 'https://www.coberturapolicarbonato.com.br/cases',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
  },
};

type CaseItem = {
  id: number;
  titulo: string;
  tipo: string;
  area: string;
  local: string;
  desafio: string;
  solucao: string;
  resultado: string;
  investimento: string;
  prazo: string;
  imagem: string;
  ano: number;
};

const cases: CaseItem[] = [
  {
    id: 1,
    titulo: 'Cobertura Retrátil Automática - Zona Sul SP',
    tipo: 'Cobertura Retrátil',
    area: '20m²',
    local: 'Moema, São Paulo',
    desafio:
      'Cliente queria usar área gourmet o ano todo, mas com pouca insolação no inverno',
    solucao:
      'Cobertura retrátil em policarbonato cristal com automação Alexa e sensor de chuva',
    resultado: 'Uso 12 meses/ano, valorização de 18% no imóvel (avaliação)',
    investimento: 'R$ 24.000',
    prazo: '3 dias',
    imagem: '/images/cases/zona-sul-retratil.jpg',
    ano: 2024,
  },
  {
    id: 2,
    titulo: 'Cobertura Termoacústica - Zona Leste SP',
    tipo: 'Cobertura Termoacústica',
    area: '30m²',
    local: 'Tatuapé, São Paulo',
    desafio: 'Sol forte oeste, churrasqueira grande gerando muito calor',
    solucao: 'Telha termoacústica 50mm + ventiladores de teto',
    resultado: 'Redução de 12°C na temperatura, economia com ventilação',
    investimento: 'R$ 32.000',
    prazo: '4 dias',
    imagem: '/images/cases/zona-leste-termoacustica.jpg',
    ano: 2024,
  },
  {
    id: 3,
    titulo: 'Cobertura Retrátil Automática - Zona Norte SP',
    tipo: 'Cobertura Retrátil',
    area: '25m²',
    local: 'Santana, São Paulo',
    desafio: 'Aprovação em condomínio, estética moderna exigida',
    solucao: 'Policarbonato fumê retrátil + automação smartphone',
    resultado: 'Aprovado em 20 dias, família usa diariamente',
    investimento: 'R$ 28.500',
    prazo: '3 dias',
    imagem: '/images/cases/zona-norte-retratil.jpg',
    ano: 2024,
  },
  {
    id: 4,
    titulo: 'Cobertura Policarbonato Garagem - Zona Oeste SP',
    tipo: 'Cobertura Fixa',
    area: '25m²',
    local: 'Pinheiros, São Paulo',
    desafio: 'Proteger 2 carros mantendo iluminação natural',
    solucao: 'Policarbonato alveolar 10mm cristal',
    resultado: 'Carros protegidos, economia 100% luz artificial durante o dia',
    investimento: 'R$ 15.000',
    prazo: '2 dias',
    imagem: '/images/cases/garagem-pinheiros.jpg',
    ano: 2023,
  },
  {
    id: 5,
    titulo: 'Cobertura para Piscina - Alphaville SP',
    tipo: 'Cobertura Piscina',
    area: '40m²',
    local: 'Alphaville, Barueri',
    desafio: 'Usar piscina no inverno sem aquecer demais',
    solucao: 'Cobertura fixa policarbonato + laterais removíveis',
    resultado: 'Uso 12 meses/ano, economia 40% com aquecimento',
    investimento: 'R$ 48.000',
    prazo: '5 dias',
    imagem: '/images/cases/piscina-alphaville.jpg',
    ano: 2023,
  },
  {
    id: 6,
    titulo: 'Veneziana para Galpão Industrial - Guarulhos',
    tipo: 'Veneziana',
    area: '120m²',
    local: 'Guarulhos, SP',
    desafio: 'Ventilação para 40 funcionários sem ventilação mecânica',
    solucao: 'Veneziana fixa policarbonato alveolar 10mm',
    resultado: 'Temperatura reduzida 10°C, produtividade aumentou 18%',
    investimento: 'R$ 42.000',
    prazo: '6 dias',
    imagem: '/images/cases/galpao-guarulhos.jpg',
    ano: 2024,
  },
];

const depoimentos = [
  {
    nome: 'Mariana Silva',
    local: 'Moema, SP',
    projeto: 'Cobertura Retrátil 20m²',
    texto:
      'A automação via Alexa é incrível! Agora uso minha área gourmet todo dia, mesmo quando chove. Valeu cada centavo!',
    nota: 5,
  },
  {
    nome: 'Roberto Mendes',
    local: 'Tatuapé, SP',
    projeto: 'Cobertura Termoacústica 30m²',
    texto:
      'Antes era impossível ficar na área no verão. Agora com a termoacústica ficou perfeito, nem parece que tem sol forte.',
    nota: 5,
  },
  {
    nome: 'Julia Costa',
    local: 'Santana, SP',
    projeto: 'Cobertura Retrátil 25m²',
    texto:
      'Equipe super profissional, cumpriram o prazo e ajudaram com a aprovação no condomínio. Recomendo!',
    nota: 5,
  },
];

const TIPO_SLUG: Record<string, string> = {
  'Cobertura Retrátil': 'retratil',
  'Cobertura Termoacústica': 'termoacustica',
  'Cobertura Fixa': 'fixa',
  'Cobertura Piscina': 'piscina',
  Veneziana: 'veneziana',
};

const SLUG_TO_TIPO: Record<string, string> = Object.fromEntries(
  Object.entries(TIPO_SLUG).map(([tipo, slug]) => [slug, tipo])
);

const filtrosTipos = [
  { slug: '', label: 'Todos' },
  ...Array.from(new Set(cases.map((c) => c.tipo))).map((tipo) => ({
    slug: TIPO_SLUG[tipo] ?? tipo.toLowerCase().replace(/\s+/g, '-'),
    label: tipo,
  })),
];

type PageProps = {
  searchParams: Promise<{ tipo?: string }>;
};

export default async function CasesPage({ searchParams }: PageProps) {
  const { tipo: tipoSlug } = await searchParams;
  const tipoFiltro = tipoSlug ? SLUG_TO_TIPO[tipoSlug] : undefined;
  const casesFiltrados = tipoFiltro
    ? cases.filter((c) => c.tipo === tipoFiltro)
    : cases;

  return (
    <>
      <Breadcrumb />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cases de Sucesso Cobersystem
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Mais de 200 projetos realizados em São Paulo e região
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-blue-200">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-blue-200">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">2 anos</div>
                <div className="text-blue-200">Garantia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">3-5 dias</div>
                <div className="text-blue-200">Prazo Médio</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por tipo */}
        <section
          className="max-w-7xl mx-auto px-4 pt-12 pb-4"
          aria-label="Filtrar cases por tipo"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Filtrar por tipo de projeto
          </h2>
          <div className="flex flex-wrap gap-2">
            {filtrosTipos.map(({ slug, label }) => {
              const href = slug ? `/cases?tipo=${slug}` : '/cases';
              const ativo =
                (!tipoSlug && slug === '') || tipoSlug === slug;
              return (
                <Link
                  key={slug || 'todos'}
                  href={href}
                  scroll={false}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    ativo
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          {tipoFiltro && (
            <p className="mt-4 text-sm text-gray-600">
              Exibindo{' '}
              <span className="font-semibold text-gray-900">
                {casesFiltrados.length}
              </span>{' '}
              {casesFiltrados.length === 1 ? 'projeto' : 'projetos'} —{' '}
              {tipoFiltro}
            </p>
          )}
        </section>

        {/* Grid de Cases */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {casesFiltrados.length === 0 ? (
            <p className="text-center text-gray-600 py-12">
              Nenhum case nesta categoria.{' '}
              <Link href="/cases" className="text-blue-600 font-medium hover:underline">
                Ver todos os projetos
              </Link>
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {casesFiltrados.map((case_) => (
                <article
                  key={case_.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center px-4 text-center border-b border-gray-100">
                    {/* Placeholder até imagens em /public/images/cases */}
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                      {case_.ano}
                    </span>
                    <span className="text-gray-600 text-sm leading-snug">
                      Foto do projeto — {case_.local}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {case_.tipo}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{case_.titulo}</h3>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div>
                        <strong>Local:</strong> {case_.local}
                      </div>
                      <div>
                        <strong>Área:</strong> {case_.area}
                      </div>
                      <div>
                        <strong>Investimento:</strong> {case_.investimento}
                      </div>
                      <div>
                        <strong>Prazo:</strong> {case_.prazo}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="font-semibold text-sm mb-1">Desafio:</div>
                      <p className="text-sm text-gray-600">{case_.desafio}</p>
                    </div>

                    <div className="mb-4">
                      <div className="font-semibold text-sm mb-1">Solução:</div>
                      <p className="text-sm text-gray-600">{case_.solucao}</p>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="font-semibold text-sm text-green-600 mb-1">
                        Resultado:
                      </div>
                      <p className="text-sm">{case_.resultado}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Depoimentos */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Nossos Clientes Dizem
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex mb-3" aria-label={`Nota ${depoimento.nota} de 5`}>
                    {Array.from({ length: depoimento.nota }, (_, i) => (
                      <span key={i} className="text-yellow-400 text-xl" aria-hidden>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &ldquo;{depoimento.texto}&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{depoimento.nome}</div>
                    <div className="text-sm text-gray-600">{depoimento.local}</div>
                    <div className="text-sm text-blue-600">{depoimento.projeto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Quer Ser Nosso Próximo Case de Sucesso?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Orçamento grátis em até 24 horas. Atendemos toda São Paulo e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511943615079?text=Olá!%20Vi%20os%20cases%20no%20site%20e%20quero%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                💬 Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors border-2 border-white text-center"
              >
                📋 Solicitar Orçamento
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
