'use client';

import Link from 'next/link';
import { trackGoogleAdsConversion } from '@/components/GoogleAds';
import { trackCTAClick, trackPhoneClick } from '@/components/GoogleAnalytics';

const PHONE = '(11) 94361-5079';
const PHONE_HREF = 'tel:+5511943615079';
const WA_HERO    = 'https://wa.me/5511943615079?text=Ol%C3%A1!%20Vi%20o%20an%C3%BAncio%20da%20Cobersystem%20e%20quero%20um%20or%C3%A7amento%20de%20cobertura%20retr%C3%A1til.';
const WA_FINAL   = 'https://wa.me/5511943615079?text=Ol%C3%A1!%20Quero%20agendar%20a%20visita%20t%C3%A9cnica%20gratuita%20para%20cobertura%20retr%C3%A1til.';
const GBP_URL    = 'https://share.google/Mqi0TYJoGCN7QGDo6';

function trackWaHero() {
  trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0);
  trackCTAClick('LP Retrátil — WhatsApp Hero');
}

function trackWaFinal() {
  trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0);
  trackCTAClick('LP Retrátil — WhatsApp Final');
}

function trackOrcamento() {
  trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0);
  trackCTAClick('LP Retrátil — Orçamento Online');
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cobertura Retrátil Automática em Policarbonato',
  serviceType: 'Instalação de cobertura retrátil motorizada',
  url: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-retratil',
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
  offers: {
    '@type': 'Offer',
    priceRange: 'R$ 800 - R$ 3.000 por m²',
    availability: 'https://schema.org/InStock',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa uma cobertura retrátil em São Paulo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O preço de uma cobertura retrátil varia entre R$ 800 e R$ 3.000 por m², dependendo do tamanho, tipo de policarbonato e nível de automação. Para uma área de 20m², o investimento médio fica entre R$ 16.000 e R$ 60.000. Solicite uma visita técnica gratuita para receber um orçamento personalizado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de instalação de uma cobertura retrátil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A instalação em si leva de 48 a 72 horas. A fabricação sob medida leva de 15 a 30 dias adicionais. Realizamos a visita técnica gratuita em até 48h após o contato.',
      },
    },
    {
      '@type': 'Question',
      name: 'A cobertura retrátil funciona automaticamente na chuva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Nosso sistema inclui sensor de chuva que fecha a cobertura automaticamente ao detectar precipitação, mesmo que você não esteja em casa. Também é compatível com Alexa, Google Home e controle pelo celular.',
      },
    },
  ],
};

export default function LpCoberturaRetratil() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              Cobertura Retrátil em São Paulo
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Sua Área Coberta.<br />
              <span className="text-[#D4AF37]">Abre e Fecha Sozinha.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Cobertura retrátil motorizada com sensor de chuva, controle pelo celular e integração com Alexa.
            </p>
            <p className="text-gray-400 mb-10">
              Visita técnica gratuita • Projeto personalizado • Instalação em até 72h
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
                { valor: '500+', label: 'Projetos entregues' },
                { valor: '10+', label: 'Anos no mercado' },
                { valor: 'Grande SP', label: 'Área atendida' },
              ].map(({ valor, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-extrabold">{valor}</div>
                  <div className="text-xs md:text-sm font-medium mt-0.5 opacity-80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problema → Solução */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-red-800 mb-4">
                  Sem cobertura, você perde:
                </h2>
                <ul className="space-y-3 text-red-700">
                  {[
                    'Churrascos cancelados por chuva de última hora',
                    'Móveis e equipamentos danificados pelo sol e chuva',
                    'Espaço inutilizável no verão por causa do calor',
                    'Área de lazer parada por meses no inverno',
                    'Manutenção cara de piso e estruturas expostas',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-green-800 mb-4">
                  Com cobertura retrátil Cobersystem:
                </h2>
                <ul className="space-y-3 text-green-700">
                  {[
                    'Área aberta quando brilha o sol, fechada no primeiro sinal de chuva',
                    'Sensor fecha automaticamente — você não precisa fazer nada',
                    'Controle pelo celular, voz (Alexa) ou controle remoto',
                    'Estrutura em alumínio com garantia de 2 anos',
                    'Projeto personalizado para qualquer tamanho ou formato',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Por que escolher a Cobersystem?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📐',
                  titulo: 'Visita técnica gratuita em até 48h',
                  texto: 'Nosso especialista vai até você, mede o espaço e apresenta o projeto sem cobrar nada e sem compromisso.',
                },
                {
                  icon: '🎨',
                  titulo: 'Projeto 3D personalizado incluso',
                  texto: 'Você visualiza exatamente como ficará sua cobertura antes de aprovar qualquer coisa. Projeto sob medida, sem surpresas.',
                },
                {
                  icon: '🛡️',
                  titulo: '2 anos de garantia na instalação',
                  texto: 'Garantia total: estrutura de alumínio, mecanismo de abertura, motor, automação e policarbonato. Atendimento pós-venda incluso.',
                },
              ].map(({ icon, titulo, texto }) => (
                <div key={titulo} className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Como funciona o processo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: '1', titulo: 'Visita técnica grátis', texto: 'Agendamos a visita em até 48h. Nosso especialista mede o espaço e avalia a melhor solução para o seu projeto.' },
                { num: '2', titulo: 'Projeto 3D e orçamento', texto: 'Em até 48h após a visita, você recebe o projeto visual 3D e o orçamento detalhado, sem surpresas.' },
                { num: '3', titulo: 'Instalação em 48–72h', texto: 'Aprovado o projeto, fabricamos sob medida e instalamos em 48 a 72 horas. Sem sujeira, sem obra.' },
              ].map(({ num, titulo, texto }) => (
                <div key={num} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-black font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
                    {num}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWaHero}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-extrabold px-8 py-4 rounded-xl text-lg transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar Visita Gratuita
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Pronto para transformar seu espaço?
            </h2>
            <p className="text-blue-200 text-lg mb-10">
              Visita técnica gratuita • Projeto 3D incluso • Sem compromisso
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
              <Link
                href="/orcamento"
                onClick={trackOrcamento}
                className="inline-flex items-center justify-center bg-white text-blue-800 hover:bg-blue-50 font-extrabold px-8 py-5 rounded-xl text-lg transition"
              >
                Solicitar Orçamento Online
              </Link>
            </div>
            <p className="text-blue-300 text-sm mt-6">
              Resposta em até 24h • Atendemos toda a Grande São Paulo
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

// Metadata exportada separadamente pois o componente é 'use client'
// O arquivo de metadata fica em um arquivo adjacente (route metadata via layout)
export const dynamic = 'force-static';
