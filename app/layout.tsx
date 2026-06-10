import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup, { organizationSchema, localBusinessSchema, websiteSchema } from "@/components/SchemaMarkup";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  GoogleTagManagerNoScript,
  GoogleTagManagerScript,
} from "@/components/GoogleTagManager";
import MetaPixel from "@/components/MetaPixel";
import GoogleAds from "@/components/GoogleAds";
import ScrollTracker from "@/components/ScrollTracker";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * ════════════════════════════════════════════════════════════════════════
 * 🏢 COBERSYSTEM - Soluções em Coberturas de Policarbonato
 * ════════════════════════════════════════════════════════════════════════
 *
 * Copyright © 2024-2026 Cobersystem. Todos os direitos reservados.
 *
 * ⚖️  AVISO LEGAL:
 * Este código-fonte é propriedade EXCLUSIVA da Cobersystem.
 *
 * É PROIBIDO:
 * ❌ Copiar ou reproduzir este código
 * ❌ Modificar ou criar obras derivadas
 * ❌ Distribuir ou sublicenciar
 * ❌ Usar para fins comerciais sem autorização
 *
 * VIOLAÇÕES estão sujeitas a ações legais conforme:
 * • Lei de Direitos Autorais (Lei 9.610/98)
 * • Código Civil Brasileiro (Arts. 186, 187 e 927)
 * • Lei de Propriedade Industrial (Lei 9.279/96)
 *
 * 💼 Para licenciamento, parcerias ou uso autorizado:
 * 📧 Email: contato@coberturapolicarbonato.com.br
 * 📱 WhatsApp: (11) 94361-5079
 * 🌐 Website: https://www.coberturapolicarbonato.com.br
 *
 * 🚀 Desenvolvido com Next.js 15, React 19 e TypeScript
 * 🎯 Otimizado para SEO, Performance e Conversão
 * ════════════════════════════════════════════════════════════════════════
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coberturapolicarbonato.com.br'),
  title: "Cobertura em Policarbonato Retrátil | Abre e Fecha com Automação Alexa | Cobersystem",
  description: "Cobertura retrátil e abre e fecha em policarbonato com automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus. Estruturas de alumínio personalizadas. Solicite seu orçamento!",
  keywords: "cobertura retrátil, cobertura abre e fecha, cobertura em policarbonato, cobertura automática, sensor de chuva, automação residencial, Alexa, pergolado, área gourmet, policarbonato compacto, policarbonato alveolar",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br',
  },
  openGraph: {
    title: "Cobertura em Policarbonato Retrátil | Cobersystem",
    description: "Cobertura retrátil em policarbonato com automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus.",
    url: 'https://www.coberturapolicarbonato.com.br',
    siteName: 'Cobersystem - Cobertura em Policarbonato',
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
        width: 1200,
        height: 630,
        alt: 'Cobertura em Policarbonato Retrátil - Cobersystem',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cobertura em Policarbonato Retrátil | Cobersystem",
    description: "Cobertura retrátil em policarbonato com automação via Alexa e sensor de chuva.",
    images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <PerformanceOptimizer />
        <link rel="icon" href="/favicon.ico" />
        {/* Verificação Google Search Console */}
        <GoogleTagManagerScript />
        {/* GA4 + Google Ads (gtag) — necessário para trackWhatsAppLead e conversões */}
        <GoogleAds />
        {/* Meta Pixel */}
        <MetaPixel />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoScript />
        <SchemaMarkup type="organization" data={organizationSchema} />
        <SchemaMarkup type="localBusiness" data={localBusinessSchema} />
        <SchemaMarkup type="website" data={websiteSchema} />
        <ScrollTracker />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
