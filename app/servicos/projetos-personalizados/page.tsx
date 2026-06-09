import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceVejaTambem from '@/components/ServiceVejaTambem';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import { getFaqPriceAnswer, getServiceSchemaMinPrice } from '@/lib/pricing';
import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';

const HERO_IMAGE = '/images/blog/cobertura-retratil-area-gourmet.jpg';
const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Preciso%20de%20consultoria%20para%20projeto%20personalizado%20de%20cobertura.';

export const metadata: Metadata = {
  title: "Projetos Personalizados | Consultoria Engenharia | Cobersystem",
  description: "Projetos personalizados de cobertura com consultoria de engenharia. Soluções sob medida para suas necessidades. Projeto técnico completo.",
  keywords: "projetos personalizados cobertura, consultoria engenharia cobertura, projeto técnico cobertura, cobertura sob medida",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/servicos/projetos-personalizados',
  },
  openGraph: {
    title: "Projetos Personalizados de Cobertura | Cobersystem",
    description: "Projetos personalizados de coberturas retráteis e fixas com engenharia sob medida e atendimento técnico especializado.",
    url: 'https://www.coberturapolicarbonato.com.br/servicos/projetos-personalizados',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg',
        width: 1200,
        height: 800,
        alt: 'Projetos Personalizados de Cobertura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Projetos Personalizados de Cobertura',
  description: 'Projetos personalizados de cobertura com consultoria de engenharia e soluções sob medida.',
  image: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/projetos-personalizados',
    getServiceSchemaMinPrice('projetos-personalizados'),
  ),
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
  {
    question: 'Quanto tempo leva um projeto personalizado de cobertura?',
    answer: 'Após a visita técnica, o projeto técnico fica pronto em 5 a 10 dias úteis. Obras simples iniciam em 2 semanas após aprovação. Projetos complexos com cálculo estrutural podem levar até 15 dias para documentação completa.',
  },
  {
    question: 'A Cobersystem faz projetos para condomínios e empresas?',
    answer: 'Sim. Atendemos condomínios, escolas, restaurantes e empresas com memorial descritivo, ART de execução e documentação para assembleia ou licitação. Projetos comerciais recebem acompanhamento dedicado de engenharia.',
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

          <section className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <OptimizedImage
                  src={HERO_IMAGE}
                  alt="Projeto personalizado de cobertura retrátil — consultoria de engenharia Cobersystem SP"
                  title="Projetos Personalizados de Cobertura"
                  width={1200}
                  height={900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Projetos Personalizados e Consultoria de Engenharia
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Projetos personalizados de cobertura com consultoria de engenharia. Soluções sob medida para suas
                  necessidades específicas. Projeto técnico completo, cálculo estrutural e acompanhamento da obra.
                </p>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  O que está incluso
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Visita técnica e análise completa do local</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Projeto técnico com plantas, cortes e especificações</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Cálculo estrutural assinado por engenheiro</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Soluções sob medida para projetos complexos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Acompanhamento profissional da obra</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

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

          <PriceEstimateNote className="mb-8" />
          <ServiceAutomationSection />

          <FAQSchema faqs={faqs} />

          <ServiceVejaTambem current="projetos-personalizados" />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Sua Consultoria</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
              >
                Solicitar Consultoria
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                WhatsApp Agora
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

