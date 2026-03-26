import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Nossos Serviços | Coberturas Retráteis e Fixas | Cobersystem",
  description: "Conheça todos os nossos serviços em coberturas retráteis e fixas. Cobertura abre e fecha, área gourmet, piscina, garagem e muito mais. Solicite seu orçamento!",
  keywords: "serviços cobertura, cobertura retrátil, cobertura fixa, cobertura área gourmet, cobertura piscina, serviços cobersystem",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos',
  },
};

const servicos = [
  {
    slug: 'cobertura-abre-e-fecha',
    title: 'Cobertura Abre e Fecha',
    description: 'Sistema retrátil automatizado com Alexa e sensor de chuva.',
    image: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
  {
    slug: 'cobertura-retratil-automatizada',
    title: 'Cobertura Retrátil Automatizada',
    description: 'Automação inteligente via Alexa, controle remoto e sensor de chuva.',
    image: '/images/blog/cobertura-abre-fecha.jpg',
  },
  {
    slug: 'cobertura-area-gourmet',
    title: 'Cobertura para Área Gourmet',
    description: 'Ideal para áreas gourmet e churrasqueiras com controle total do clima.',
    image: '/images/blog/churrasqueira.jpg',
  },
  {
    slug: 'cobertura-piscina',
    title: 'Cobertura para Piscina',
    description: 'Proteção para piscina com isolamento térmico e redução de manutenção.',
    image: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
  {
    slug: 'cobertura-garagem',
    title: 'Cobertura para Garagem',
    description: 'Proteção completa para veículos contra chuva, sol e granizo.',
    image: '/images/projetos/abre-fecha-alveolar-01.jpg',
  },
  {
    slug: 'cobertura-fixa-policarbonato-alveolar',
    title: 'Cobertura Fixa Policarbonato Alveolar',
    description: 'Isolamento térmico e acústico superior com policarbonato alveolar.',
    image: '/images/projetos/fixa-01.jpg',
  },
  {
    slug: 'cobertura-fixa-policarbonato-compacto',
    title: 'Cobertura Fixa Policarbonato Compacto',
    description: 'Transparência total com policarbonato compacto 2mm.',
    image: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
  {
    slug: 'cobertura-termoacustica',
    title: 'Cobertura Termoacústica',
    description: 'Isolamento térmico e acústico para máximo conforto.',
    image: '/images/projetos/fixa-02.jpg',
  },
  {
    slug: 'cobertura-aluminio',
    title: 'Cobertura de Alumínio',
    description: 'Estrutura e telhas em alumínio com pintura eletrostática personalizada.',
    image: '/images/projetos/abre-fecha-alveolar-01.jpg',
  },
  {
    slug: 'cobertura-corredor-lateral',
    title: 'Cobertura para Corredor Lateral',
    description: 'Proteção para corredores e passagens laterais da casa.',
    image: '/images/blog/cobertura-abre-fecha.jpg',
  },
  {
    slug: 'calhas-rufos-perfil-u',
    title: 'Calhas, Rufos e Perfil U',
    description: 'Acessórios essenciais para coberturas em alumínio.',
    image: '/images/projetos/abre-fecha-alveolar-01.jpg',
  },
  {
    slug: 'projetos-personalizados',
    title: 'Projetos Personalizados',
    description: 'Consultoria de engenharia e projetos sob medida.',
    image: '/images/blog/cobertura-retratil-area-gourmet.jpg',
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
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
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#D4AF37] transition">
                  {servico.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {servico.description}
                </p>
                <span className="text-[#D4AF37] font-semibold group-hover:underline">
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

