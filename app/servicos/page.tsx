import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Nossos Serviços | Coberturas Retráteis e Fixas | Cobersystem",
  description: "Conheça todos os nossos serviços em coberturas retráteis e fixas. Cobertura abre e fecha, área gourmet, piscina, garagem e muito mais. Solicite seu orçamento!",
  keywords: "serviços cobertura, cobertura retrátil, cobertura fixa, cobertura área gourmet, cobertura piscina, serviços cobersystem",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos',
  },
  openGraph: {
    title: "Nossos Serviços | Coberturas Retráteis e Fixas | Cobersystem",
    description: "Conheça todos os nossos serviços em coberturas retráteis e fixas para área gourmet, piscina, garagem e muito mais.",
    url: 'https://www.coberturapolicarbonato.com.br/servicos',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
        width: 1200,
        height: 800,
        alt: 'Serviços de Coberturas Cobersystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg'],
  },
};

const servicos = [
  {
    slug: 'cobertura-abre-e-fecha',
    title: 'Cobertura Abre e Fecha',
    description: 'Sistema retrátil automatizado com Alexa e sensor de chuva.',
    image: '/images/projetos/Cobertura Abre e Fecha.png',
  },
  {
    slug: 'cobertura-retratil-automatizada',
    title: 'Cobertura Retrátil Automatizada',
    description: 'Automação inteligente via Alexa, controle remoto e sensor de chuva.',
    image: '/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
    imageObjectPosition: '50% 30%',
  },
  {
    slug: 'cobertura-retratil',
    title: 'Cobertura Retrátil',
    description: 'Instalação completa com automação Alexa, sensor de chuva e abertura 0 a 90°.',
    image: '/images/projetos/Cobertura Retratil melhorada.png',
  },
  {
    slug: 'cobertura-policarbonato',
    title: 'Cobertura em Policarbonato',
    description: 'Projeto e instalação de cobertura fixa em policarbonato alveolar ou compacto.',
    image: '/images/projetos/Cobertura em Policarbonato.png',
  },
  {
    slug: 'cobertura-area-gourmet',
    title: 'Cobertura para Área Gourmet',
    description: 'Ideal para áreas gourmet e churrasqueiras com controle total do clima.',
    image: '/images/blog/churrasqueira.jpg',
  },
  {
    slug: 'cobertura-varanda-apartamento',
    title: 'Cobertura para Varanda de Apartamento',
    description: 'Cobertura retrátil ou fixa para varandas, com suporte na aprovação do condomínio.',
    image: '/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
    imageObjectPosition: '50% 30%',
  },
  {
    slug: 'cobertura-piscina',
    title: 'Cobertura para Piscina',
    description: 'Proteção para piscina com isolamento térmico e redução de manutenção.',
    image: '/images/produtos/cobertura-retratil/aluminio/IMG_6306.jpg',
  },
  {
    slug: 'cobertura-garagem',
    title: 'Cobertura para Garagem',
    description: 'Proteção completa para veículos contra chuva, sol e granizo.',
    image: '/images/projetos/Cobertura Garagem.png',
  },
  {
    slug: 'cobertura-fixa-policarbonato-alveolar',
    title: 'Cobertura Fixa Policarbonato Alveolar',
    description: 'Isolamento térmico e acústico superior com policarbonato alveolar.',
    image: '/images/projetos/Cobertura Fixa Policarbonato Alveolar.png',
  },
  {
    slug: 'cobertura-fixa-policarbonato-compacto',
    title: 'Cobertura Fixa Policarbonato Compacto',
    description: 'Transparência total com policarbonato compacto 2mm.',
    image: '/images/produtos/cobertura-policarbonato/compacto/IMG_1762.jpg',
  },
  {
    slug: 'cobertura-termoacustica',
    title: 'Cobertura Termoacústica',
    description: 'Isolamento térmico e acústico para máximo conforto.',
    image: '/images/projetos/Cobertura Termoacustica.png',
  },
  {
    slug: 'cobertura-aluminio',
    title: 'Cobertura de Alumínio',
    description: 'Estrutura e telhas em alumínio com pintura eletrostática personalizada.',
    image: '/images/projetos/Cobertura Alumínio Espaço Kids.png',
  },
  {
    slug: 'cobertura-corredor-lateral',
    title: 'Cobertura para Corredor Lateral',
    description: 'Proteção para corredores e passagens laterais da casa.',
    image: '/images/blog/cobertura-abre-fecha.jpg',
  },
  {
    slug: 'cobertura-jardim-de-inverno',
    title: 'Cobertura para Jardim de Inverno',
    description: 'Policarbonato transparente que preserva luz natural para plantas e protege contra chuva.',
    image: '/images/projetos/jardim-de-inverno-02.png',
  },
  {
    slug: 'cobertura-pergolado',
    title: 'Cobertura para Pergolado',
    description: 'Policarbonato ou alumínio, retrátil ou fixo, com automação opcional.',
    image: '/images/projetos/pergolado-01.png',
  },
  {
    slug: 'cobertura-playground',
    title: 'Cobertura para Playground',
    description: 'Cobertura abre e fecha e retrátil para escolas, condomínios e áreas de lazer.',
    image: '/images/projetos/Cobertura Playground.png',
  },
  {
    slug: 'projetos-personalizados',
    title: 'Projetos Personalizados',
    description: 'Consultoria de engenharia e projetos sob medida.',
    image: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
];

const servicosItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Serviços Cobersystem',
  itemListElement: servicos.map((servico, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: servico.title,
    url: `https://www.coberturapolicarbonato.com.br/servicos/${servico.slug}`,
  })),
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Script
        id="schema-servicos-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicosItemListSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Serviços', href: '/servicos' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Nossos Serviços
        </h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Conheça todos os nossos serviços em coberturas retráteis e fixas. 
          Soluções completas para transformar seu espaço externo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <Link
              key={servico.slug}
              href={`/servicos/${servico.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={servico.image}
                  alt={servico.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={
                    'imageObjectPosition' in servico && servico.imageObjectPosition
                      ? { objectPosition: servico.imageObjectPosition }
                      : undefined
                  }
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#D4AF37] transition">
                  {servico.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {servico.description}
                </p>
                <span className="text-[#8A6A00] font-semibold group-hover:underline">
                  Ver detalhes →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

