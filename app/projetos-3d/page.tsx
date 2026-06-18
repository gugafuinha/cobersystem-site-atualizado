import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Projetos 3D | Visualize sua Cobertura em Policarbonato | Cobersystem",
  description: "Veja projetos 3D de cobertura retrátil e cobertura em policarbonato. Visualização realista antes da instalação. Projetos personalizados e renderizações em alta qualidade.",
  keywords: "projeto 3d cobertura, renderização cobertura policarbonato, visualização 3d, cobertura render, projeto personalizado, design cobertura, modelagem 3d",
  openGraph: {
    title: "Projetos 3D | Cobersystem",
    description: "Visualize seu projeto de cobertura em policarbonato em 3D antes da instalação!",
  },
};

// Você vai substituir com os dados reais das fotos do Drive
const projetos3D = [
  {
    id: 1,
    titulo: 'Cobertura Retrátil - Área Gourmet Moderna',
    categoria: 'Residencial',
    tipo: 'Cobertura Abre e Fecha',
    descricao: 'Projeto 3D de cobertura retrátil em policarbonato compacto para área gourmet moderna. Estrutura em alumínio com pintura eletrostática cinza grafite.',
    dimensoes: '4m x 5m',
    material: 'Policarbonato Compacto 2mm + Alumínio',
    cores: 'Cinza Grafite',
    caracteristicas: [
      'Abertura de 0 a 90 graus',
      'Automação via controle remoto',
      'Estrutura reforçada',
      'Acabamento premium',
    ],
    imagens: [
      '/images/projetos/abre-fecha-alveolar-01.jpg',
      '/images/projetos/abre-fecha-alveolar-02.jpg',
      '/images/projetos/abre-fecha-alveolar-03.jpg',
      '/images/projetos/abre-fecha-alveolar-04.jpg',
    ],
  },
  {
    id: 2,
    titulo: 'Cobertura Fixa - Garagem Dupla',
    categoria: 'Residencial',
    tipo: 'Cobertura Fixa',
    descricao: 'Projeto 3D de cobertura fixa em policarbonato alveolar para garagem dupla. Proteção total com entrada de luz natural.',
    dimensoes: '5m x 6m',
    material: 'Policarbonato Alveolar 10mm + Alumínio',
    cores: 'Transparente (Cristal)',
    caracteristicas: [
      'Proteção UV integrada',
      'Isolamento térmico',
      'Estrutura robusta',
      'Calhas embutidas',
    ],
    imagens: [
      '/images/projetos/fixa-01.jpg',
      '/images/projetos/fixa-02.jpg',
      '/images/projetos/fixa-03.jpg',
      '/images/projetos/fixa-04.jpg',
    ],
  },
  {
    id: 3,
    titulo: 'Cobertura Automatizada - Apartamento Alto Padrão',
    categoria: 'Residencial',
    tipo: 'Cobertura Abre e Fecha',
    descricao: 'Projeto 3D de cobertura retrátil automatizada para varanda de apartamento. Sistema integrado com Alexa e sensor de chuva.',
    dimensoes: '3m x 4m',
    material: 'Telhas Alumínio + Policarbonato Intercalado',
    cores: 'Branco Premium',
    caracteristicas: [
      'Automação Alexa',
      'Sensor de chuva',
      'App mobile',
      'Design minimalista',
    ],
    imagens: [
      '/images/projetos/telhas-intercaladas-01.jpg',
      '/images/projetos/telhas-intercaladas-01.jpg',
      '/images/projetos/telhas-intercaladas-01.jpg',
      '/images/projetos/telhas-intercaladas-01.jpg',
    ],
  },
  {
    id: 4,
    titulo: 'Cobertura Termoacústica - Galpão Industrial',
    categoria: 'Comercial',
    tipo: 'Cobertura Termoacústica',
    descricao: 'Projeto 3D de cobertura termoacústica (sanduíche) para galpão industrial. Isolamento térmico e acústico superior.',
    dimensoes: '10m x 20m',
    material: 'Cobertura Sanduíche com PU',
    cores: 'Alumínio Natural',
    caracteristicas: [
      'Isolamento térmico até 15°C',
      'Redução de ruído 40 dB',
      'Grande vão livre',
      'Economia de energia',
    ],
    imagens: [
      '/images/projetos/termoacustica-01.jpg',
      '/images/projetos/termoacustica-02.jpg',
      '/images/projetos/termoacustica-03.jpg',
      '/images/projetos/termoacustica-04.jpg',
    ],
  },
  {
    id: 5,
    titulo: 'Veneziana em Policarbonato - Quadra Poliesportiva',
    categoria: 'Esportivo',
    tipo: 'Fechamento Lateral',
    descricao: 'Projeto 3D de fechamento lateral com veneziana em policarbonato para quadra poliesportiva. Ventilação natural com proteção.',
    dimensoes: '15m x 30m',
    material: 'Veneziana Policarbonato Compacto',
    cores: 'Transparente',
    caracteristicas: [
      'Ventilação natural',
      'Proteção contra chuva lateral',
      'Entrada de luz',
      'Durabilidade superior',
    ],
    imagens: [
      '/images/projetos/veneziana-01.jpg',
      '/images/projetos/veneziana-01.jpg',
      '/images/projetos/veneziana-01.jpg',
      '/images/projetos/veneziana-01.jpg',
    ],
  },
  {
    id: 6,
    titulo: 'Pergolado Retrátil - Área de Lazer',
    categoria: 'Residencial',
    tipo: 'Cobertura Abre e Fecha',
    descricao: 'Projeto 3D de pergolado com cobertura retrátil em policarbonato. Sistema abre e fecha para controle total do ambiente.',
    dimensoes: '4m x 6m',
    material: 'Policarbonato Alveolar + Alumínio',
    cores: 'Preto Fosco',
    caracteristicas: [
      'Abertura parcial ou total',
      'Controle remoto',
      'Design moderno',
      'Integração com paisagismo',
    ],
    imagens: [
      '/images/projetos/telhas-aluminio-01.jpg',
      '/images/projetos/telhas-aluminio-01.jpg',
      '/images/projetos/telhas-aluminio-01.jpg',
      '/images/projetos/telhas-aluminio-01.jpg',
    ],
  },
];

export default function Projetos3D() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Projetos 3D
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize seu projeto de cobertura em policarbonato em 3D antes da instalação. 
            Projetos personalizados com renderizações realistas para você aprovar cada detalhe.
          </p>
        </section>

        {/* Benefícios */}
        <section className="mb-16 grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visualização Realista</h3>
            <p className="text-gray-600 text-sm">Veja exatamente como ficará seu projeto</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">✏️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ajustes Antes</h3>
            <p className="text-gray-600 text-sm">Modifique cores, tamanhos e detalhes</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Economia</h3>
            <p className="text-gray-600 text-sm">Evite surpresas e custos extras</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Agilidade</h3>
            <p className="text-gray-600 text-sm">Aprovação rápida e execução precisa</p>
          </div>
        </section>

        {/* Filtros */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
              Todos
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
              Residencial
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
              Comercial
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
              Esportivo
            </button>
          </div>
        </section>

        {/* Projetos */}
        <section className="space-y-16 mb-16">
          {projetos3D.map((projeto) => (
            <article key={projeto.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Galeria de Renderizações */}
              <div className="grid md:grid-cols-4 gap-0">
                {projeto.imagens.map((imagem, index) => (
                  <div key={index} className="relative h-64 group cursor-pointer">
                    <OptimizedImage
                      src={imagem}
                      alt={`${projeto.titulo} - Vista ${index + 1} - Projeto 3D Cobertura Policarbonato Cobersystem`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Ver Ampliado</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conteúdo */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {projeto.categoria}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {projeto.tipo}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {projeto.titulo}
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  {projeto.descricao}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6 bg-gray-50 p-6 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dimensões</div>
                    <div className="text-lg font-semibold text-gray-800">{projeto.dimensoes}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Material</div>
                    <div className="text-lg font-semibold text-gray-800">{projeto.material}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Cor/Acabamento</div>
                    <div className="text-lg font-semibold text-gray-800">{projeto.cores}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Características do Projeto
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {projeto.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Processo */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Como Funciona o Processo de Projeto 3D?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Medição</h3>
              <p className="text-gray-600 text-sm">Visitamos o local e fazemos medição precisa</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Projeto 3D</h3>
              <p className="text-gray-600 text-sm">Criamos renderizações realistas do seu projeto</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Aprovação</h3>
              <p className="text-gray-600 text-sm">Você visualiza e aprova antes de executar</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Instalação</h3>
              <p className="text-gray-600 text-sm">Executamos exatamente como aprovado</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer ver seu projeto em 3D?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Solicite um orçamento e receba o projeto 3D do seu espaço totalmente grátis!
          </p>
          <Link 
            href="/orcamento" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Solicitar Projeto 3D Grátis
          </Link>
        </section>
      </div>
    </main>
  );
}
