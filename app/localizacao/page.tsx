import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Onde Atendemos | Coberturas em São Paulo e Região | Cobersystem",
  description: "Atendemos toda Grande São Paulo, ABC, Guarulhos, Campinas, Sorocaba e região. Coberturas retráteis em policarbonato com automação. Solicite seu orçamento!",
  keywords: "cobertura São Paulo, cobertura ABC, cobertura Guarulhos, cobertura Campinas, cobertura Sorocaba, onde atendemos",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/localizacao',
  },
};

const localizacoes = [
  {
    slug: 'sao-paulo',
    title: 'São Paulo',
    description: 'Atendemos toda Grande São Paulo, todas as zonas.',
  },
  {
    slug: 'zona-leste',
    title: 'Zona Leste',
    description: 'Vila Prudente, Mooca, Tatuapé, Penha, Itaquera e região.',
  },
  {
    slug: 'zona-sul',
    title: 'Zona Sul',
    description: 'Moema, Vila Olímpia, Campo Belo, Jabaquara e região.',
  },
  {
    slug: 'zona-oeste',
    title: 'Zona Oeste',
    description: 'Pinheiros, Vila Madalena, Butantã, Lapa e região.',
  },
  {
    slug: 'zona-norte',
    title: 'Zona Norte',
    description: 'Santana, Tucuruvi, Vila Guilherme e região.',
  },
  {
    slug: 'abc',
    title: 'ABC Paulista',
    description: 'Santo André, São Bernardo, São Caetano e região.',
  },
  {
    slug: 'guarulhos',
    title: 'Guarulhos',
    description: 'Atendemos toda Guarulhos e região metropolitana.',
  },
  {
    slug: 'campinas',
    title: 'Campinas',
    description: 'Atendemos Campinas e região do interior de SP.',
  },
  {
    slug: 'sorocaba',
    title: 'Sorocaba',
    description: 'Atendemos Sorocaba e região do interior de SP.',
  },
];

export default function LocalizacaoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Localização', href: '/localizacao' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Onde Atendemos
        </h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          A Cobersystem atende toda Grande São Paulo, ABC, Guarulhos, Campinas, Sorocaba e região. 
          Solicite seu orçamento grátis!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {localizacoes.map((localizacao) => (
            <Link
              key={localizacao.slug}
              href={`/localizacao/${localizacao.slug}`}
              className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#D4AF37] transition">
                {localizacao.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {localizacao.description}
              </p>
              <span className="text-[#D4AF37] font-semibold group-hover:underline">
                Ver mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

