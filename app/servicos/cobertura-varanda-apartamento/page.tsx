import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import { buildServiceOffer } from '@/lib/schemas/product-schemas';
import ServiceAutomationSection from '@/components/servicos/ServiceAutomationSection';
import ServicePriceTable, { buildPriceRowsFromKeys } from '@/components/servicos/ServicePriceTable';
import {
  COBERSYSTEM_PRICING,
  formatPricePerM2,
  formatPriceRange,
  getFaqPriceAnswer,
  getServiceSchemaMinPrice,
} from '@/lib/pricing';

const HERO_IMAGE = '/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg';

export const metadata: Metadata = {
  title: 'Cobertura para Varanda de Apartamento em SP | Cobersystem',
  description:
    'Instale cobertura retrátil ou fechamento em policarbonato na varanda do seu apartamento. Projeto personalizado, aprovação no condomínio inclusa. Atendemos toda Grande SP.',
  keywords: [
    'cobertura para varanda de apartamento',
    'cobertura varanda apartamento SP',
    'cobertura varanda apartamento preço',
    'cobertura retrátil varanda apartamento',
    'fechamento varanda apartamento policarbonato',
    'cobertura varanda condomínio',
  ],
  openGraph: {
    title: 'Cobertura para Varanda de Apartamento | Cobersystem SP',
    description:
      'Cobertura retrátil ou policarbonato para varanda de apartamento. Projeto personalizado e suporte na aprovação do condomínio.',
    url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-varanda-apartamento',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
        width: 1200,
        height: 900,
        alt: 'Cobertura retrátil para varanda de apartamento Cobersystem',
      },
    ],
  },
  alternates: {
    canonical:
      'https://www.coberturapolicarbonato.com.br/servicos/cobertura-varanda-apartamento',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobertura para Varanda de Apartamento | Cobersystem SP',
    description:
      'Cobertura retrátil ou policarbonato para varanda de apartamento. Projeto personalizado e suporte na aprovação do condomínio.',
    images: [
      'https://www.coberturapolicarbonato.com.br/images/produtos/cobertura-retratil/compacto/IMG_4754.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cobertura para Varanda de Apartamento',
  serviceType: 'Instalação de cobertura retrátil e policarbonato em varandas',
  url: 'https://www.coberturapolicarbonato.com.br/servicos/cobertura-varanda-apartamento',
  description:
    'Instalação de cobertura retrátil automática ou fechamento fixo em policarbonato para varandas de apartamento em São Paulo. Projeto personalizado e suporte completo na aprovação do condomínio.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Cobersystem',
    telephone: '+5511943615079',
    url: 'https://www.coberturapolicarbonato.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'São Paulo',
  },
  offers: buildServiceOffer(
    'https://www.coberturapolicarbonato.com.br/servicos/cobertura-varanda-apartamento',
    getServiceSchemaMinPrice('cobertura-varanda-apartamento'),
  ),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Precisa de aprovação do condomínio para instalar cobertura na varanda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, na maioria dos condomínios é necessário aprovação em assembleia ou aprovação do síndico. A Cobersystem auxilia em todo o processo, fornecendo documentação técnica, ART do projeto e modelos de solicitação para facilitar a aprovação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa cobrir a varanda de um apartamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `O preço varia conforme o tamanho da varanda e o tipo de cobertura. Cobertura fixa em policarbonato alveolar: ${formatPriceRange(COBERSYSTEM_PRICING.fixaAlveolar)} por m². Cobertura retrátil automatizada: ${formatPriceRange(COBERSYSTEM_PRICING.retratilAutomatizada)} por m². Solicite visita técnica gratuita para orçamento personalizado.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Cobertura retrátil é permitida em condomínios em São Paulo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, coberturas retráteis são geralmente permitidas pois não alteram a estrutura do edifício de forma permanente. A aprovação depende do regimento interno de cada condomínio. Nossa equipe orienta e fornece toda a documentação técnica necessária.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de instalação de cobertura em varanda de apartamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Após aprovação do projeto e do condomínio, a instalação leva de 1 a 3 dias. A fabricação sob medida leva de 15 a 30 dias. Realizamos visita técnica gratuita para medição e elaboração do projeto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual tipo de cobertura é melhor para varanda de apartamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para varandas de apartamento, a cobertura retrátil motorizada é a mais indicada: abre para ventilação, fecha automaticamente na chuva e tem design discreto que não compromete a fachada do edifício. Para orçamentos menores, a cobertura fixa em policarbonato termoacústico é a melhor opção.',
      },
    },
  ],
};

const WHATSAPP_URL =
  'https://wa.me/5511943615079?text=Ol%C3%A1!%20Tenho%20uma%20varanda%20de%20apartamento%20e%20quero%20um%20or%C3%A7amento%20de%20cobertura.';

export default function CoberturaVarandaApartamentoPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <Breadcrumb />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              <OptimizedImage
                src={HERO_IMAGE}
                alt="Cobertura abre e fecha para varanda de apartamento em policarbonato — Cobersystem SP"
                title="Cobertura para Varanda de Apartamento"
                width={1200}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Serviço especializado em apartamentos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cobertura para Varanda de Apartamento
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Projeto personalizado + suporte completo na aprovação do condomínio
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { valor: '48–72h', label: 'Prazo instalação' },
                  { valor: '2 anos', label: 'Garantia total' },
                  { valor: 'Grande SP', label: 'Área atendida' },
                  { valor: 'Condomínio OK', label: 'Suporte completo' },
                ].map(({ valor, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100"
                  >
                    <div className="text-2xl font-bold text-gray-900">{valor}</div>
                    <div className="text-sm text-gray-600 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por que cobrir */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Por Que Cobrir a Varanda do Apartamento?
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            A varanda é um dos espaços mais valorizados em apartamentos paulistanos — mas sem cobertura, fica inutilizável boa parte do ano.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌧️',
                titulo: 'Use na chuva',
                texto: 'Aproveite a varanda mesmo em dias de chuva sem preocupação com molhar móveis e plantas.',
              },
              {
                icon: '☀️',
                titulo: 'Protege do sol forte',
                texto: 'Policarbonato com filtro UV protege contra raios solares e reduz o calor no interior do apartamento.',
              },
              {
                icon: '🪑',
                titulo: 'Protege os móveis',
                texto: 'Cadeiras, sofás e plantas ficam protegidos do sol, chuva e vento — prolongando a vida útil dos móveis.',
              },
              {
                icon: '🏠',
                titulo: 'Valoriza o imóvel',
                texto: 'Varanda coberta é diferencial valorizado na venda e locação de apartamentos em São Paulo.',
              },
              {
                icon: '🔇',
                titulo: 'Reduz barulho de chuva',
                texto: 'Policarbonato termoacústico reduz em até 50% o barulho de chuva — essencial em apartamentos.',
              },
              {
                icon: '🌿',
                titulo: 'Ambiente agradável',
                texto: 'Transforme a varanda em um espaço de leitura, home office ao ar livre ou garden em qualquer clima.',
              },
            ].map(({ icon, titulo, texto }) => (
              <div key={titulo} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tipos */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Tipos de Cobertura para Varanda
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Cada varanda tem um perfil diferente. Veja as opções disponíveis e descubra qual se adapta ao seu apartamento e orçamento.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Retrátil */}
              <div className="rounded-2xl border-2 border-blue-600 p-8 relative">
                <span className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS INDICADA
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cobertura Retrátil Motorizada
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  {[
                    'Abre e fecha por controle remoto ou app',
                    'Sensor de chuva fecha automaticamente',
                    'Compatível com Alexa e Google Home',
                    'Não altera estrutura permanente do edifício',
                    'Design discreto que preserva a fachada',
                    'Aprovação facilitada em condomínios',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5 shrink-0">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-blue-700">
                  {formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}
                </p>
              </div>

              {/* Fixa */}
              <div className="rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cobertura Fixa em Policarbonato
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  {[
                    'Proteção permanente contra chuva e sol',
                    'Policarbonato termoacústico disponível',
                    'Custo-benefício excelente',
                    'Manutenção praticamente nula',
                    'Durabilidade de 10 a 20 anos',
                    'Ideal para varandas com boa ventilação lateral',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-gray-700">
                  {formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)} a{' '}
                  {formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aprovação condomínio */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Aprovação no Condomínio — Fazemos Por Você
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl">
              A principal dúvida de quem mora em apartamento é: o condomínio vai aprovar? Nossa equipe tem experiência em todo o processo de aprovação e fornece tudo que você precisa.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  num: '01',
                  titulo: 'Visita técnica gratuita',
                  texto: 'Medimos a varanda e avaliamos a viabilidade técnica e estrutural do projeto.',
                },
                {
                  num: '02',
                  titulo: 'Projeto técnico com ART',
                  texto: 'Elaboramos o projeto com Anotação de Responsabilidade Técnica (ART) de engenheiro habilitado.',
                },
                {
                  num: '03',
                  titulo: 'Memorial descritivo',
                  texto: 'Documentação completa com especificações dos materiais e impacto na fachada do edifício.',
                },
                {
                  num: '04',
                  titulo: 'Suporte na assembleia',
                  texto: 'Orientamos você em como apresentar o projeto ao síndico e como conduzir a aprovação em assembleia.',
                },
              ].map(({ num, titulo, texto }) => (
                <div key={num} className="flex gap-4">
                  <span className="text-3xl font-bold text-blue-400 shrink-0">{num}</span>
                  <div>
                    <h3 className="font-bold mb-1">{titulo}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{texto}</p>
                  </div>
                </div>
              ))}
            </div>
            <WhatsAppLink
              href={WHATSAPP_URL}
              location="hero"
              serviceSlug="cobertura-varanda-apartamento"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com especialista
            </WhatsAppLink>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <ServicePriceTable
            title="Tabela de Preços — Cobertura para Varanda 2026"
            description="Valores médios para varanda de apartamento em São Paulo. Inclui material, estrutura e instalação."
            rows={buildPriceRowsFromKeys([
              { tipo: 'Policarbonato alveolar fixo', key: 'fixaAlveolar' },
              { tipo: 'Policarbonato compacto fixo', key: 'fixaCompacto' },
              { tipo: 'Cobertura abre e fecha', key: 'abreEFecha' },
              { tipo: 'Cobertura retrátil automatizada', key: 'retratilAutomatizada' },
            ])}
            noteClassName="text-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <ServiceAutomationSection />
        </div>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Links internos */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Veja também
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Cobertura Retrátil com Automação', href: '/servicos/cobertura-retratil' },
                { label: 'Cobertura Abre e Fecha', href: '/servicos/cobertura-abre-e-fecha' },
                { label: 'Ver todos os serviços', href: '/servicos' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-center bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-700 text-gray-700 font-medium px-4 py-3 rounded-lg transition text-sm"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Solicite Seu Orçamento Gratuito
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Visita técnica grátis • Projeto personalizado • Suporte na aprovação do condomínio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                href={WHATSAPP_URL}
                location="footer-cta"
                serviceSlug="cobertura-varanda-apartamento"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                💬 Falar no WhatsApp
              </WhatsAppLink>
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Solicitar Orçamento Online
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
