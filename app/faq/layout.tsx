import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes (FAQ) | Coberturas em Policarbonato | Cobersystem',
  description:
    'Tire todas suas dúvidas sobre coberturas retráteis e fixas em policarbonato. Preços, instalação, garantia, manutenção e muito mais.',
  keywords: [
    'faq coberturas',
    'dúvidas cobertura policarbonato',
    'perguntas frequentes',
    'cobertura retratil duvidas',
  ],
  openGraph: {
    title: 'FAQ - Perguntas Frequentes | Cobersystem',
    description: '20 perguntas e respostas sobre coberturas em policarbonato',
    url: 'https://www.coberturapolicarbonato.com.br/faq',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
