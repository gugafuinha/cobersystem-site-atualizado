'use client';

import { trackGoogleAdsConversion, CONVERSION_LABELS } from './GoogleAds';

// GoogleAnalytics.tsx — somente exporta funções de tracking.
// A inicialização do gtag (GA4 + Google Ads) está centralizada em GoogleAds.tsx.
// IDs ativos: GA4 = G-EL6RVFYFSJ | Google Ads = AW-1095370047

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

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
  trackEvent('phone_click', 'engagement', 'Telefone');
  trackGoogleAdsConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
};
