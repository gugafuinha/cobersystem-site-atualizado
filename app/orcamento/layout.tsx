import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orçamento Grátis de Cobertura Retrátil em SP | Cobersystem',
  description:
    'Solicite orçamento gratuito para cobertura retrátil, cobertura abre e fecha ou cobertura em policarbonato. Atendemos toda Grande São Paulo. Resposta em até 24h.',
  keywords:
    'orçamento cobertura retrátil, orçamento cobertura policarbonato, orçamento cobertura abre e fecha, cobertura sp preço, cobersystem orçamento',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/orcamento',
  },
  openGraph: {
    title: 'Orçamento Grátis de Cobertura Retrátil | Cobersystem',
    description:
      'Solicite orçamento gratuito para cobertura retrátil em policarbonato. Atendemos toda Grande São Paulo. Resposta em até 24h.',
    url: 'https://www.coberturapolicarbonato.com.br/orcamento',
    type: 'website',
    siteName: 'Cobersystem - Cobertura em Policarbonato',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg',
        width: 1200,
        height: 630,
        alt: 'Orçamento Cobertura Retrátil - Cobersystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orçamento Grátis de Cobertura Retrátil | Cobersystem',
    description:
      'Solicite orçamento gratuito para cobertura retrátil em policarbonato. Atendemos toda Grande São Paulo.',
    images: ['https://www.coberturapolicarbonato.com.br/images/blog/cobertura-abre-fecha.jpg'],
  },
};

const orcamentoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Orçamento de Cobertura Retrátil e em Policarbonato',
  serviceType: 'Cobertura retrátil, abre e fecha e fixa em policarbonato',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Cobersystem',
    telephone: '+5511943615079',
    areaServed: 'Grande São Paulo',
    url: 'https://www.coberturapolicarbonato.com.br',
  },
  areaServed: { '@type': 'City', name: 'São Paulo' },
  url: 'https://www.coberturapolicarbonato.com.br/orcamento',
};

export default function OrcamentoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orcamentoServiceSchema) }}
      />
      {children}
    </>
  );
}
