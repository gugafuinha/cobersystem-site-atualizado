'use client';

import { trackMetaEvent } from './MetaPixel';
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

export type WhatsAppLeadParams = {
  location: string;
  serviceSlug?: string;
};

/** Evento unificado para GA4 (marcar como conversão no painel) + Google Ads + Meta */
export const trackWhatsAppLead = ({ location, serviceSlug }: WhatsAppLeadParams) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      click_location: location,
      service_slug: serviceSlug ?? window.location.pathname,
      page_path: window.location.pathname,
    });
  }
  trackGoogleAdsConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
  trackMetaEvent('Contact', { method: 'WhatsApp', location });
};

export const trackWhatsAppClick = () => {
  trackWhatsAppLead({ location: 'floating-button' });
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
};
