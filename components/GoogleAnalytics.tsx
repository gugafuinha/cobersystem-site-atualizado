'use client';

import Script from 'next/script';

// ID via .env.local → NEXT_PUBLIC_GA_ID (ver .env.example)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Funções para eventos
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos
export const trackWhatsAppClick = () => {
  trackEvent('click', 'WhatsApp', 'Botão WhatsApp Fixo');
};

export const trackCTAClick = (ctaName: string) => {
  trackEvent('click', 'CTA', ctaName);
};

export const trackFormSubmit = () => {
  trackEvent('submit', 'Form', 'Formulário de Contato');
};

export const trackScroll90 = () => {
  trackEvent('scroll', 'Engagement', 'Scroll 90%');
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', 'engagement', 'Footer - Telefone');
};

