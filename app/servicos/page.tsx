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
    description: 'Sistema retrátil manual ou com automação opcional.',
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
    description: 'Instalação completa de cobertura retrátil SP.',
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

        <section className="mt-16 rounded-xl bg-[#D4AF37] p-12 text-center text-black">
          <h2 className="mb-4 text-4xl font-bold">Solicite seu orçamento grátis</h2>
          <p className="mb-8 text-xl text-gray-900">
            Visita técnica gratuita em toda a Grande São Paulo. Orçamento em até 24 h.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/orcamento"
              className="inline-block rounded-lg bg-black px-8 py-4 text-lg font-semibold text-[#D4AF37] transition hover:bg-gray-900"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5511943615079?text=Ol%C3%A1%21+Vim+pelo+site+e+quero+um+or%C3%A7amento+de+cobertura."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

