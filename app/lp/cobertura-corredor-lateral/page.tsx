'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackGoogleAdsConversion, CONVERSION_LABELS } from '@/components/GoogleAds';
import { trackCTAClick, trackPhoneClick, trackWhatsAppLead } from '@/components/GoogleAnalytics';
import WhatsAppLink from '@/components/WhatsAppLink';

const PHONE = '(11) 94361-5079';
const PHONE_HREF = 'tel:+5511943615079';
const WA_HERO  = 'https://wa.me/5511943615079?text=Ol%C3%A1!+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura+para+corredor+lateral';
const WA_FINAL = 'https://wa.me/5511943615079?text=Ol%C3%A1!+Vim+pelo+Google+e+quero+um+or%C3%A7amento+de+cobertura+para+corredor+lateral';
const GBP_URL  = 'https://share.google/Mqi0TYJoGCN7QGDo6';

function trackWaHero() {
  trackGoogleAdsConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
  trackCTAClick('LP Corredor Lateral — WhatsApp Hero');
  trackWhatsAppLead({ location: 'lp-corredor-lateral-hero' });
}

function trackWaFinal() {
  trackGoogleAdsConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
  trackCTAClick('LP Corredor Lateral — WhatsApp Final');
  trackWhatsAppLead({ location: 'lp-corredor-lateral-final' });
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cobertura para Corredor Lateral',
  serviceType: 'Instalação de cobertura sob medida para corredor lateral e espaços estreitos',
  url: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-corredor-lateral',
  description:
    'Cobertura sob medida para corredor lateral em policarbonato e alumínio, fixa ou retrátil, com calha de drenagem integrada. Instalação em 48h e garantia de 2 anos em São Paulo e interior.',
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
  areaServed: { '@type': 'City', name: 'São Paulo' },
  offers: {
    '@type': 'Offer',
    priceRange: 'R$ 600 - R$ 800 por m²',
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.coberturapolicarbonato.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://www.coberturapolicarbonato.com.br/servicos' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cobertura para Corredor Lateral',
      item: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-corredor-lateral',
    },
  ],
};

export default function LpCoberturaCorredorLateral() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white font-sans">

        {/* LP Header — logo + telefone, sem navegação */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="shrink-0">
              <img
                src="/logo-horizontal-new.svg"
                alt="Cobersystem — Coberturas Retráteis"
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <a
              href={PHONE_HREF}
              onClick={trackPhoneClick}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition text-sm md:text-base"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Ligar agora</span>
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4">
              Cobertura para Corredor Lateral
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Cobertura para Corredor Lateral em SP
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Proteção sob medida para espaços estreitos — policarbonato, alumínio e instalação profissional
            </p>
            <p className="text-gray-400 mb-10">
              Visita técnica gratuita • Projeto sob medida • Instalação em 48h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWaHero}
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-extrabold px-8 py-5 rounded-xl text-lg transition shadow-2xl shadow-green-900/50"
              >
                <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Quero Meu Orçamento Grátis
              </a>
              <a
                href={PHONE_HREF}
                onClick={trackPhoneClick}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-5 rounded-xl text-lg transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-[#D4AF37] py-6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 text-center text-black">
              {[
                { valor: '+500', label: 'Projetos entregues em SP' },
                { valor: '10+', label: 'Anos no mercado' },
                { valor: 'Grande SP', label: 'e interior atendidos' },
              ].map(({ valor, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-extrabold">{valor}</div>
                  <div className="text-xs md:text-sm font-medium mt-0.5 opacity-80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foto do produto */}
        <section className="bg-white py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/blog/cobertura-retratil-corredor-lateral.png"
                alt="Cobertura para corredor lateral em policarbonato — Cobersystem São Paulo"
                width={1200}
                height={800}
                className="w-full object-cover"
                priority
              />
              <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  Cobertura para corredor lateral sob medida — projeto real Cobersystem SP
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios — 3 cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Feita sob medida para o seu corredor
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📏',
                  titulo: 'Sob medida para qualquer largura',
                  texto: 'Do corredor mais estreito ao mais largo, o projeto é desenhado exatamente para o seu espaço, sem desperdício de material.',
                },
                {
                  icon: '☀️',
                  titulo: 'Policarbonato com proteção UV 99%',
                  texto: 'Bloqueia quase toda a radiação ultravioleta, protegendo quem passa e o que está guardado no corredor, sem perder luminosidade.',
                },
                {
                  icon: '⚡',
                  titulo: 'Instalação em 48h com garantia de 2 anos',
                  texto: 'Fabricação sob medida e instalação rápida por equipe própria, com garantia total de 2 anos em estrutura e material.',
                },
              ].map(({ icon, titulo, texto }) => (
                <div key={titulo} className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos e preços */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Tipos de cobertura para corredor lateral
            </h2>
            <p className="text-gray-500 text-center mb-12">
              Preços de referência para 2026 — valor final depende da largura, comprimento e acabamento
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  titulo: 'Cobertura Fixa para Corredor',
                  preco: 'a partir de R$600/m²',
                  texto: 'Estrutura permanente em policarbonato e alumínio, ideal para proteção contínua sem necessidade de abertura.',
                },
                {
                  titulo: 'Cobertura Retrátil para Corredor',
                  preco: 'a partir de R$800/m²',
                  texto: 'Sistema que abre e fecha sob comando, útil quando o corredor também recebe plantas ou precisa de ventilação.',
                },
                {
                  titulo: 'Cobertura com Calha Embutida',
                  preco: 'sob orçamento',
                  texto: 'Inclui calha de drenagem integrada à estrutura, direcionando a água da chuva para longe da passagem.',
                },
              ].map(({ titulo, preco, texto }) => (
                <div key={titulo} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{titulo}</h3>
                  <p className="text-[#D4AF37] font-extrabold text-xl mb-4">{preco}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicações */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Onde a cobertura para corredor lateral se aplica
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '🏠', titulo: 'Corredor lateral da casa', texto: 'Protege a passagem estreita ao lado da casa contra sol e chuva, sem perder espaço útil.' },
                { icon: '🔗', titulo: 'Passagem entre construções', texto: 'Cobre o vão entre a casa e a edícula, garagem ou área de serviço, criando um trajeto seco.' },
                { icon: '🚗', titulo: 'Acesso coberto garagem → porta de serviço', texto: 'Permite ir da garagem até a cozinha ou área de serviço sem se molhar, mesmo com as mãos cheias de sacolas.' },
                { icon: '🧺', titulo: 'Proteção de área de serviço', texto: 'Cobre tanques, máquina de lavar e varal, evitando que a chuva atrapalhe a rotina doméstica.' },
              ].map(({ icon, titulo, texto }) => (
                <div key={titulo} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-lg mb-2">{titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materiais */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Materiais utilizados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { titulo: 'Policarbonato alveolar', texto: 'Leve e econômico, com câmaras internas que ajudam no isolamento térmico. Ótimo custo-benefício para corredores.' },
                { titulo: 'Policarbonato compacto', texto: 'Chapa maciça, mais resistente a impacto, com visual mais sofisticado e maior durabilidade.' },
                { titulo: 'Estrutura em alumínio anodizado', texto: 'Resistente à corrosão e ao desgaste do tempo, sem enferrujar mesmo em espaços mais úmidos.' },
                { titulo: 'Calha de drenagem integrada', texto: 'Direciona a água da chuva para um ponto de escoamento, evitando poças na passagem.' },
              ].map(({ titulo, texto }) => (
                <div key={titulo} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-sm">
              <span className="text-[#D4AF37]">→</span> Saiba mais
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/servicos/cobertura-corredor-lateral" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">
                Cobertura para Corredor Lateral — serviço completo
              </Link>
              <Link href="/produtos/cobertura-retratil" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">
                Catálogo — Cobertura Retrátil
              </Link>
              <Link href="/orcamento" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">
                Solicitar Orçamento
              </Link>
              <Link href="/blog/cobertura-corredor-lateral-casa" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">
                Blog — Cobertura para Corredor Lateral em Casa
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Pronto para proteger seu corredor lateral?
            </h2>
            <p className="text-blue-200 text-lg mb-10">
              Visita técnica gratuita e sem compromisso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_FINAL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWaFinal}
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-extrabold px-8 py-5 rounded-xl text-lg transition shadow-2xl"
              >
                <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                💬 Falar no WhatsApp
              </a>
              <WhatsAppLink
                href={WA_FINAL}
                location="lp-corredor-lateral-cta-final"
                serviceSlug="cobertura-corredor-lateral"
                className="inline-flex items-center justify-center bg-white text-blue-800 hover:bg-blue-50 font-extrabold px-8 py-5 rounded-xl text-lg transition"
              >
                Solicitar Orçamento Online
              </WhatsAppLink>
            </div>
            <p className="text-blue-300 text-sm mt-6">
              Visita técnica gratuita e sem compromisso • {PHONE}
            </p>
          </div>
        </section>

        {/* LP Footer — minimal */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <img
              src="/logo-horizontal-new.svg"
              alt="Cobersystem"
              width={120}
              height={33}
              className="h-8 w-auto opacity-70"
            />
            <div className="text-center">
              <a href={PHONE_HREF} onClick={trackPhoneClick} className="hover:text-white transition">
                {PHONE}
              </a>
              {' · '}
              <a href={WA_FINAL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                WhatsApp
              </a>
              {' · '}
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Ver no Google Maps
              </a>
            </div>
            <p className="text-xs text-center md:text-right">
              São Paulo e Grande SP<br />
              © 2024–2026 Cobersystem
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}

export const dynamic = 'force-static';
