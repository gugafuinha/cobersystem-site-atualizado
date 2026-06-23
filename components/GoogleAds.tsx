'use client';

import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-11013639885';
const GA4_MEASUREMENT_ID = 'G-EL6RVFYFSJ';

// Labels de conversão gerados pelo Google Ads para cada ação
export const CONVERSION_LABELS = {
  WHATSAPP_CLICK: 'AW-11013639885/PY4iCM6qp5AYEM2d24Mp',
  FORM_SUBMIT: 'AW-11013639885/lGDsCLDlopAYEM2d24Mp',
};

export default function GoogleAds() {
  return (
    <>
      {/* Script unificado — carrega GA4 e Ads com uma única tag */}
      <Script
        id="gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}', { page_path: window.location.pathname });
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
}

// Dispara conversão para o Google Ads com beacon transport para garantir envio
// mesmo quando o usuário navega para fora antes do hit ser processado.
// Usar CONVERSION_LABELS.WHATSAPP_CLICK ou CONVERSION_LABELS.FORM_SUBMIT
export const trackGoogleAdsConversion = (sendTo: string, value?: number, currency = 'BRL') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: sendTo,
      transport_type: 'beacon',
      ...(value !== undefined && { value, currency }),
    });
  }
};
