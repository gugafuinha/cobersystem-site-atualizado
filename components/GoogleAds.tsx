'use client';

import Script from 'next/script';

// Substitua pelo seu Conversion ID do Google Ads
const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX'; // Substituir pelo ID real

export default function GoogleAds() {
  return (
    <Script
      id="google-ads"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
    />
  );
}

// Função para eventos de conversão
export const trackGoogleAdsConversion = (conversionLabel: string, value?: number, currency = 'BRL') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value,
      currency: currency,
    });
  }
};

