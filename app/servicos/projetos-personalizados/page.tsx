import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Projetos Personalizados | Consultoria Engenharia | Cobersystem",
  description: "Projetos personalizados de cobertura com consultoria de engenharia. Soluções sob medida para suas necessidades. Projeto técnico completo.",
  keywords: "projetos personalizados cobertura, consultoria engenharia cobertura, projeto técnico cobertura, cobertura sob medida",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/projetos-personalizados',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Projetos Personalizados de Cobertura',
  description: 'Projetos personalizados de cobertura com consultoria de engenharia e soluções sob medida.',
  image: ['https://coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/projetos-personalizados',
  },
};

const faqs = [
  {
    question: 'O que inclui um projeto personalizado?',
    answer: 'Um projeto personalizado inclui visita técnica, análise estrutural, projeto técnico completo, cálculo estrutural, especificação de materiais, cronograma de execução e acompanhamento da obra. Tudo sob medida para suas necessidades.',
  },
  {
    question: 'Preciso de projeto técnico para cobertura?',
    answer: 'Para coberturas grandes ou com características especiais, é recomendado projeto técnico assinado por engenheiro. Isso garante segurança estrutural e conformidade com normas técnicas.',
  },
  {
    question: 'Quanto custa um projeto personalizado?',
    answer: 'O custo do projeto personalizado varia conforme a complexidade, tamanho e necessidades específicas. Geralmente, o projeto é incluído no orçamento total da obra. Solicite uma consultoria para avaliação.',
  },
];

export default function ProjetosPersonalizados() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Projetos Personalizados', href: '/servicos/projetos-personalizados' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos Personalizados e Consultoria de Engenharia
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Projetos personalizados de cobertura com consultoria de engenharia. Soluções sob medida para suas 
            necessidades específicas. Projeto técnico completo, cálculo estrutural e acompanhamento da obra. 
            Ideal para projetos complexos ou especiais.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é um Projeto Personalizado?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Um projeto personalizado é desenvolvido especificamente para suas necessidades, considerando 
                características únicas do local, requisitos específicos e preferências pessoais. Inclui consultoria 
                de engenharia, projeto técnico completo e acompanhamento profissional.
              </p>
              <p className="mb-4">
                Diferente de projetos padronizados, o personalizado oferece soluções sob medida, garantindo 
                que cada detalhe seja pensado para seu caso específico. Isso resulta em melhor aproveitamento 
                do espaço, maior eficiência e resultado final superior.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que Inclui</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">📐 Visita Técnica</h3>
                <p className="text-gray-600">Análise completa do local, medições precisas e identificação de necessidades específicas.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">📋 Projeto Técnico</h3>
                <p className="text-gray-600">Projeto técnico completo com plantas, cortes, detalhes e especificações técnicas.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🔧 Cálculo Estrutural</h3>
                <p className="text-gray-600">Cálculo estrutural assinado por engenheiro, garantindo segurança e conformidade.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">👷 Acompanhamento</h3>
                <p className="text-gray-600">Acompanhamento profissional da obra, garantindo execução conforme projeto.</p>
              </div>
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Sua Consultoria</h2>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Consultoria
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

