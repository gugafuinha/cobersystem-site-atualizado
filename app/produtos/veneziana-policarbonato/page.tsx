import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Veneziana em Policarbonato | Fechamento Lateral Ventilado | Cobersystem",
  description: "Veneziana em policarbonato para fechamento lateral de galpões, quadras e áreas externas. Ventilação controlada mantendo proteção. Ideal para indústrias e comércio.",
  keywords: "veneziana policarbonato, fechamento lateral policarbonato, veneziana para galpão, fechamento ventilado, veneziana industrial, fechamento quadra, policarbonato ventilado",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/produtos/veneziana-policarbonato',
  },
  openGraph: {
    title: "Veneziana em Policarbonato | Cobersystem",
    description: "Fechamento lateral ventilado para galpões, quadras e áreas externas.",
    url: 'https://coberturapolicarbonato.com.br/produtos/veneziana-policarbonato',
    images: [
      {
        url: 'https://coberturapolicarbonato.com.br/images/produtos/veneziana/veneziana.jpg',
        width: 1200,
        height: 800,
        alt: 'Veneziana em Policarbonato',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://coberturapolicarbonato.com.br/images/produtos/veneziana/veneziana.jpg'],
  },
};

const produtosVeneziana = [
  {
    id: 'veneziana-compacta',
    nome: 'Veneziana em Policarbonato Compacto',
    slug: 'veneziana-compacta',
    descricao: 'Sistema de fechamento lateral com lâminas em policarbonato compacto. Alta resistência e durabilidade com ventilação controlada.',
    caracteristicas: [
      'Lâminas em policarbonato compacto de 4mm ou 6mm',
      'Ventilação natural controlada',
      'Alta resistência a impactos',
      'Proteção UV integrada - não amarela',
      'Transparente ou em cores',
      'Fácil manutenção e limpeza',
    ],
    aplicacoes: [
      'Fechamento lateral de galpões industriais',
      'Quadras poliesportivas',
      'Áreas de lazer comerciais',
      'Fachadas ventiladas',
    ],
    image: '/images/produtos/veneziana/veneziana.jpg',
  },
  {
    id: 'veneziana-alveolar',
    nome: 'Veneziana em Policarbonato Alveolar',
    slug: 'veneziana-alveolar',
    descricao: 'Sistema de fechamento lateral com lâminas em policarbonato alveolar. Isolamento térmico superior mantendo ventilação.',
    caracteristicas: [
      'Lâminas em policarbonato alveolar de 6mm ou 10mm',
      'Isolamento térmico superior',
      'Ventilação natural com controle de temperatura',
      'Leveza e resistência',
      'Proteção UV integrada',
      'Cores disponíveis',
    ],
    aplicacoes: [
      'Galpões que precisam controle térmico',
      'Áreas comerciais',
      'Depósitos e armazéns',
      'Fachadas de edifícios',
    ],
    image: '/images/produtos/veneziana/img_3421.jpg',
  },
  {
    id: 'veneziana-metalica-policarbonato',
    nome: 'Veneziana Metálica com Policarbonato',
    slug: 'veneziana-metalica-policarbonato',
    descricao: 'Sistema híbrido com estrutura metálica e lâminas em policarbonato. Máxima resistência e controle de ventilação.',
    caracteristicas: [
      'Estrutura em alumínio ou aço galvanizado',
      'Lâminas em policarbonato compacto',
      'Abertura fixa ou regulável',
      'Máxima durabilidade',
      'Pintura eletrostática personalizada',
      'Ideal para grandes vãos',
    ],
    aplicacoes: [
      'Grandes galpões industriais',
      'Fábricas',
      'Centros de distribuição',
      'Áreas que exigem ventilação intensa',
    ],
    image: '/images/produtos/veneziana/img_4740.jpg',
  },
];

const galeriaVeneziana = [
  {
    src: '/images/produtos/veneziana/veneziana.jpg',
    titulo: 'Projeto em área industrial',
    descricao:
      'Fechamento lateral com veneziana em policarbonato aplicado para ventilação e proteção.',
  },
  {
    src: '/images/produtos/veneziana/img_3421.jpg',
    titulo: 'Aplicação em quadra coberta',
    descricao:
      'Estrutura instalada para melhorar a circulação de ar e manter proteção contra intempéries.',
  },
  {
    src: '/images/produtos/veneziana/img_4740.jpg',
    titulo: 'Veneziana em ambiente esportivo',
    descricao:
      'Solução funcional para iluminação natural e ventilação controlada.',
  },
  {
    src: '/images/produtos/veneziana/img_4742.jpg',
    titulo: 'Estrutura lateral ventilada',
    descricao:
      'Projeto com acabamento limpo e excelente aproveitamento da ventilação natural.',
  },
  {
    src: '/images/produtos/veneziana/img_4863.jpg',
    titulo: 'Detalhe técnico do sistema',
    descricao:
      'Exemplo visual do acabamento da veneziana aplicada em policarbonato.',
  },
] as const;

export default function VenezianaPolcarbonato() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Produtos', href: '/produtos' },
            { label: 'Veneziana em Policarbonato', href: '/produtos/veneziana-policarbonato' },
          ]}
        />

        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Veneziana em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fechamento lateral ventilado para galpões, quadras e áreas externas. 
            Ventilação controlada mantendo proteção contra intempéries.
          </p>
        </section>

        {/* O que é */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            O que é Veneziana em Policarbonato?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                A <strong>veneziana em policarbonato</strong> é um sistema de fechamento lateral 
                composto por lâminas horizontais que permitem <strong>ventilação natural controlada</strong> 
                enquanto protegem o ambiente de chuva, vento e insolação direta.
              </p>
              <p className="text-gray-700 mb-4">
                É amplamente utilizada para <strong>fechamento de galpões industriais, quadras poliesportivas, 
                áreas de lazer</strong> e qualquer ambiente que necessite ventilação constante 
                sem comprometer a proteção.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Principais Vantagens:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Ventilação natural:</strong> Circulação de ar constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Proteção contra chuva:</strong> Lâminas inclinadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Entrada de luz:</strong> Iluminação natural</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Durabilidade:</strong> Policarbonato não oxida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Baixa manutenção:</strong> Fácil limpeza</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="mb-16 space-y-10 md:space-y-12">
          {produtosVeneziana.map((produto, index) => (
            <article key={produto.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                    <OptimizedImage
                      src={produto.image}
                      alt={produto.nome}
                      title={produto.nome}
                      width={800}
                      height={600}
                      priority={index === 0}
                      className={
                        index === 0
                          ? 'h-full w-full rounded-xl object-cover object-[65%_72%]'
                          : 'h-full w-full rounded-xl object-cover'
                      }
                    />
                  </div>
                  <div className="flex min-w-0 flex-col gap-5">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {produto.nome}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {produto.descricao}
                    </p>
                    <div className="grid grid-cols-1 gap-6 border-t border-gray-100 pt-5 md:grid-cols-2 md:gap-x-8">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Características
                        </h3>
                        <ul className="space-y-2">
                          {produto.caracteristicas.map((caracteristica, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-green-600">✓</span>
                              <span className="text-gray-700">{caracteristica}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Aplicações
                        </h3>
                        <ul className="space-y-2">
                          {produto.aplicacoes.map((aplicacao, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-green-600">•</span>
                              <span className="text-gray-700">{aplicacao}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          className="mb-16"
          aria-labelledby="galeria-veneziana-heading"
          aria-describedby="galeria-veneziana-subtitle"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2
              id="galeria-veneziana-heading"
              className="text-3xl font-bold text-gray-800"
            >
              Galeria de Projetos
            </h2>
            <p
              id="galeria-veneziana-subtitle"
              className="mt-3 text-lg leading-relaxed text-gray-600"
            >
              Referências reais de instalações com veneziana em policarbonato —
              ventilação, proteção e acabamento profissional.
            </p>
          </div>
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            {galeriaVeneziana.map((item) => (
              <article
                key={item.src}
                className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-stretch md:gap-8 md:p-8"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 md:w-[42%] md:max-w-md">
                  <OptimizedImage
                    src={item.src}
                    alt={item.titulo}
                    title={item.titulo}
                    width={800}
                    height={600}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
                  <h3 className="text-xl font-semibold leading-snug text-gray-800 md:text-2xl">
                    {item.titulo}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                    {item.descricao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quando Usar */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Quando usar Veneziana em Policarbonato?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4 text-center">🏭</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Galpões Industriais</h3>
              <p className="text-gray-600 text-center">
                Fechamento lateral que permite ventilação constante, essencial para 
                ambientes industriais que precisam renovação de ar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4 text-center">⚽</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Quadras Poliesportivas</h3>
              <p className="text-gray-600 text-center">
                Proteção contra chuva e vento sem perder a sensação de ambiente aberto. 
                Ideal para quadras cobertas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Fachadas Ventiladas</h3>
              <p className="text-gray-600 text-center">
                Fechamento lateral de edifícios comerciais com ventilação natural 
                e entrada de luz controlada.
              </p>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Por que escolher Policarbonato ao invés de Alumínio?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                <span className="text-2xl mr-2">✓</span> Veneziana em Policarbonato
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Não oxida nem enferruja</li>
                <li>• Permite entrada de luz natural</li>
                <li>• Mais leve que alumínio</li>
                <li>• Proteção UV - não amarela</li>
                <li>• Fácil limpeza</li>
                <li>• Cores disponíveis</li>
              </ul>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                <span className="text-2xl mr-2">○</span> Veneziana em Alumínio
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pode oxidar com o tempo</li>
                <li>• Ambiente mais escuro</li>
                <li>• Mais pesada</li>
                <li>• Pintura pode descascar</li>
                <li>• Manutenção frequente</li>
                <li>• Custo de manutenção maior</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre Veneziana em Policarbonato?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition shadow-lg"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
