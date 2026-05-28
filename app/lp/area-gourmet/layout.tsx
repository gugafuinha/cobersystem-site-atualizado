import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobertura para Área Gourmet em São Paulo | Orçamento Grátis | Cobersystem',
  description:
    'Cobertura retrátil para área gourmet com sensor de chuva, ventilação automática e Alexa. Visita técnica gratuita em até 48h. Atendemos toda Grande SP.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/lp/area-gourmet',
  },
  openGraph: {
    title: 'Cobertura para Área Gourmet em São Paulo | Cobersystem',
    description:
      'Cobertura retrátil para área gourmet com sensor de chuva e Alexa. Visita técnica gratuita. Atendemos toda Grande SP.',
    url: 'https://www.coberturapolicarbonato.com.br/lp/area-gourmet',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function LpAreaGourmetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
