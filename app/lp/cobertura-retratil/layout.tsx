import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobertura Retrátil em São Paulo | Orçamento Grátis | Cobersystem',
  description:
    'Cobertura retrátil motorizada com sensor de chuva, Alexa e garantia de 2 anos. Visita técnica gratuita em até 48h. Atendemos toda Grande SP. Solicite seu orçamento.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-retratil',
  },
  openGraph: {
    title: 'Cobertura Retrátil em São Paulo | Cobersystem',
    description:
      'Cobertura retrátil motorizada com sensor de chuva e Alexa. Visita técnica gratuita. Atendemos toda Grande SP.',
    url: 'https://www.coberturapolicarbonato.com.br/lp/cobertura-retratil',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function LpCoberturaRetratilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
