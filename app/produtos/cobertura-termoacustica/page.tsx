import type { Metadata } from 'next';
import Link from 'next/link';
import path from 'path';
import { readdir } from 'fs/promises';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cobertura Termoacústica | Cobertura Sanduíche com Isolamento | Cobersystem",
  description: "Cobertura termoacústica (cobertura sanduíche) com isolamento térmico e acústico superior. Ideal para conforto total em ambientes residenciais e comerciais. Solicite orçamento!",
  keywords: "cobertura termoacustica, cobertura sanduíche, isolamento térmico cobertura, isolamento acústico cobertura, cobertura com isolamento, cobertura térmica, cobertura para galpão",
  openGraph: {
    title: "Cobertura Termoacústica (Sanduíche) | Cobersystem",
    description: "Isolamento térmico e acústico superior para conforto total.",
  },
};

const produtosTermoacustica = [
  {
    id: 'sanduiche-eps',
    nome: 'Cobertura Termoacústica com EPS (Isopor)',
    descricao: 'Sistema sanduíche com núcleo de EPS (isopor de alta densidade). Excelente custo-benefício com ótimo isolamento térmico e acústico.',
    caracteristicas: [
      'Núcleo em EPS (Poliestireno Expandido) de alta densidade',
      'Isolamento térmico de até 10°C de diferença',
      'Redução de ruído de até 30 dB',
      'Revestimento externo em alumínio ou aço',
      'Leve e resistente',
      'Instalação rápida e limpa',
    ],
    aplicacoes: [
      'Galpões industriais e comerciais',
      'Residências',
      'Áreas de lazer',
      'Coberturas residenciais',
    ],
    espessuras: ['30mm', '50mm', '100mm'],
  },
  {
    id: 'sanduiche-pu',
    nome: 'Cobertura Termoacústica com PU (Poliuretano)',
    descricao: 'Sistema sanduíche premium com núcleo de Poliuretano. Máxima eficiência em isolamento térmico e acústico.',
    caracteristicas: [
      'Núcleo em PU (Poliuretano) - maior eficiência',
      'Isolamento térmico superior - até 15°C de diferença',
      'Redução de ruído de até 40 dB',
      'Maior durabilidade e resistência',
      'Revestimento externo personalizado',
      'Ideal para ambientes que exigem controle térmico rigoroso',
    ],
    aplicacoes: [
      'Câmaras frias',
      'Galpões industriais',
      'Ambientes comerciais',
      'Residências de alto padrão',
    ],
    espessuras: ['30mm', '50mm', '100mm'],
  },
  {
    id: 'sanduiche-la-rocha',
    nome: 'Cobertura Termoacústica com Lã de Rocha',
    descricao: 'Sistema sanduíche com núcleo de Lã de Rocha. Máxima proteção acústica e térmica com propriedades anti-chama.',
    caracteristicas: [
      'Núcleo em Lã de Rocha - material incombustível',
      'Isolamento acústico excepcional - até 45 dB',
      'Isolamento térmico de alta eficiência',
      'Proteção contra incêndio (material classe A)',
      'Resistente a altas temperaturas',
      'Ideal para ambientes com requisitos de segurança contra incêndio',
    ],
    aplicacoes: [
      'Galpões industriais',
      'Áreas com risco de incêndio',
      'Ambientes comerciais',
      'Fábricas e indústrias',
    ],
    espessuras: ['50mm', '100mm'],
  },
] as const;

const TERM_FS_ROOT = path.join(
  process.cwd(),
  'public',
  'images',
  'produtos',
  'cobertura-termoacustica',
);

/** Todas as imagens sob cobertura-termoacústica (raiz e subpastas), ordenadas, URLs públicas. */
async function listTermoacusticaImages(): Promise<string[]> {
  const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
  const urls: string[] = [];

  async function walk(fsDir: string, segments: string[]) {
    let entries;
    try {
      entries = await readdir(fsDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const ent of entries) {
      const name = ent.name;
      if (ent.isDirectory()) {
        await walk(path.join(fsDir, name), [...segments, name]);
      } else if (allowed.has(path.extname(name).toLowerCase())) {
        const rel = [...segments, name].join('/');
        urls.push(`/images/produtos/cobertura-termoacustica/${rel}`);
      }
    }
  }

  await walk(TERM_FS_ROOT, []);
  urls.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  return urls;
}

function blockImagesFromPool(urls: string[]): [string | null, string | null, string | null] {
  if (urls.length === 0) {
    return [null, null, null];
  }
  if (urls.length === 1) {
    return [urls[0], urls[0], urls[0]];
  }
  if (urls.length === 2) {
    return [urls[0], urls[1], urls[1]];
  }
  return [urls[0], urls[1], urls[2]];
}

export default async function CoberturaTermoacustica() {
  const imageUrls = await listTermoacusticaImages();
  const blockSrcs = blockImagesFromPool(imageUrls);
  const galleryUrls = imageUrls.length > 3 ? imageUrls.slice(3) : [];

  const blocos = produtosTermoacustica.map((p, i) => ({
    ...p,
    image: blockSrcs[i],
  }));

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Termoacústica (Cobertura Sanduíche)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema de cobertura sanduíche com isolamento térmico e acústico superior. 
            Conforto total para ambientes residenciais, comerciais e industriais.
          </p>
        </section>

        {/* O que é */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            O que é Cobertura Termoacústica?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                A cobertura termoacústica, também conhecida como <strong>cobertura sanduíche</strong>, 
                é um sistema construtivo composto por três camadas: duas chapas metálicas externas 
                (alumínio ou aço) e um núcleo isolante (EPS, PU ou Lã de Rocha).
              </p>
              <p className="text-gray-700 mb-4">
                Essa estrutura proporciona <strong>isolamento térmico e acústico</strong> excepcional, 
                mantendo ambientes mais frescos no verão, mais quentes no inverno, e reduzindo 
                drasticamente ruídos externos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Principais Vantagens:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Conforto térmico:</strong> Até 15°C de diferença</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Isolamento acústico:</strong> Redução de até 45 dB</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Economia de energia:</strong> Reduz uso de ar-condicionado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Durabilidade:</strong> Longa vida útil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Instalação rápida:</strong> Sistema modular</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="mb-16 space-y-10 md:space-y-12">
          {blocos.map((produto, index) => (
            <article key={produto.id} className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                    {produto.image ? (
                      <OptimizedImage
                        src={produto.image}
                        alt={produto.nome}
                        title={produto.nome}
                        width={800}
                        height={600}
                        priority={index === 0}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    ) : null}
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
                              <span className="mr-2 text-orange-600">✓</span>
                              <span className="text-gray-700">{caracteristica}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                          Aplicações
                        </h3>
                        <ul className="mb-6 space-y-2">
                          {produto.aplicacoes.map((aplicacao, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-orange-600">•</span>
                              <span className="text-gray-700">{aplicacao}</span>
                            </li>
                          ))}
                        </ul>
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">
                          Espessuras Disponíveis
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {produto.espessuras.map((esp) => (
                            <span
                              key={esp}
                              className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700"
                            >
                              {esp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {galleryUrls.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Galeria de Projetos
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {galleryUrls.map((src) => {
                const filename = src.split('/').pop() || 'imagem';
                const alt = `Cobertura termoacústica - ${filename}`;

                return (
                  <div
                    key={src}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100"
                  >
                    <OptimizedImage
                      src={src}
                      alt={alt}
                      title={alt}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Comparativo */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Qual tipo escolher?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-gray-800">Tipo</th>
                  <th className="p-4 text-gray-800">Isolamento Térmico</th>
                  <th className="p-4 text-gray-800">Isolamento Acústico</th>
                  <th className="p-4 text-gray-800">Custo-Benefício</th>
                  <th className="p-4 text-gray-800">Melhor Para</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-700">EPS (Isopor)</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-gray-700">Galpões, residências</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-700">PU (Poliuretano)</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-gray-700">Alto padrão, câmaras frias</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Lã de Rocha</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-green-600 font-semibold">Superior</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-gray-700">Indústrias, anti-incêndio</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre Cobertura Termoacústica?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition shadow-lg"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
