import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup, { organizationSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import MetaPixel from "@/components/MetaPixel";
import GoogleAds from "@/components/GoogleAds";
import ScrollTracker from "@/components/ScrollTracker";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://coberturapolicarbonato.com.br'),
  title: "Cobertura em Policarbonato Retrátil | Abre e Fecha com Automação Alexa | Cobersystem",
  description: "Cobertura retrátil e abre e fecha em policarbonato com automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus. Estruturas de alumínio personalizadas. Solicite seu orçamento!",
  keywords: "cobertura retrátil, cobertura abre e fecha, cobertura em policarbonato, cobertura automática, sensor de chuva, automação residencial, Alexa, pergolado, área gourmet, policarbonato compacto, policarbonato alveolar",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br',
  },
  openGraph: {
    title: "Cobertura em Policarbonato Retrátil | Cobersystem",
    description: "Cobertura retrátil em policarbonato com automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus.",
    url: 'https://coberturapolicarbonato.com.br',
    siteName: 'Cobersystem - Cobertura em Policarbonato',
    type: "website",
    locale: "pt_BR",
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
        {/* Google Search Console Verification - Substituir pelo código real */}
        <meta name="google-site-verification" content="SUBSTITUIR_PELO_CODIGO_DE_VERIFICACAO" />
        {/* Google Analytics */}
        <GoogleAnalytics />
        {/* Google Tag Manager */}
        <GoogleTagManager />
        {/* Meta Pixel */}
        <MetaPixel />
        {/* Google Ads */}
        <GoogleAds />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SchemaMarkup type="organization" data={organizationSchema} />
        <SchemaMarkup type="localBusiness" data={localBusinessSchema} />
        <ScrollTracker />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
