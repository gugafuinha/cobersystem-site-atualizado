import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobertura para Corredor Lateral SP | Sob Medida',
  description:
    'Cobertura para corredor lateral em policarbonato e alumínio. Fixa ou retrátil, sob medida, instalação em 48h. Orçamento grátis em SP e interior.',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-corredor-lateral',
  },
  openGraph: {
    title: 'Cobertura para Corredor Lateral em SP | Cobersystem',
    description:
      'Cobertura sob medida para espaços estreitos, em policarbonato e alumínio. Instalação em 48h e garantia de 2 anos. Visita técnica gratuita.',
    url: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-corredor-lateral',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function LpCoberturaCorredorLateralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
