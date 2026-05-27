'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackWhatsAppClick } from './GoogleAnalytics';
import { trackMetaEvent } from './MetaPixel';
import { trackGoogleAdsConversion } from './GoogleAds';

const PHONE_NUMBER = '5511943615079';

const ROUTE_MESSAGES: Array<{ match: (path: string) => boolean; message: string }> = [
  // Serviços
  { match: (p) => p.startsWith('/servicos/cobertura-retratil-automatizada'), message: 'Olá! Quero um orçamento de cobertura retrátil com automação Alexa.' },
  { match: (p) => p.startsWith('/servicos/cobertura-retratil'),              message: 'Olá! Quero um orçamento de cobertura retrátil.' },
  { match: (p) => p.startsWith('/servicos/cobertura-piscina'),               message: 'Olá! Quero um orçamento de cobertura para piscina.' },
  { match: (p) => p.startsWith('/servicos/cobertura-abre-e-fecha'),          message: 'Olá! Quero um orçamento de cobertura abre e fecha.' },
  { match: (p) => p.startsWith('/servicos/cobertura-area-gourmet'),          message: 'Olá! Quero um orçamento de cobertura para área gourmet.' },
  { match: (p) => p.startsWith('/servicos/cobertura-garagem'),               message: 'Olá! Quero um orçamento de cobertura para garagem.' },
  { match: (p) => p.startsWith('/servicos/cobertura-fixa-policarbonato-alveolar'), message: 'Olá! Quero um orçamento de cobertura fixa em policarbonato alveolar.' },
  { match: (p) => p.startsWith('/servicos/cobertura-fixa-policarbonato-compacto'),  message: 'Olá! Quero um orçamento de cobertura fixa em policarbonato compacto.' },
  { match: (p) => p.startsWith('/servicos/cobertura-termoacustica'),         message: 'Olá! Quero um orçamento de cobertura termoacústica.' },
  { match: (p) => p.startsWith('/servicos/cobertura-aluminio'),              message: 'Olá! Quero um orçamento de cobertura em alumínio.' },
  { match: (p) => p.startsWith('/servicos/cobertura-corredor-lateral'),      message: 'Olá! Quero um orçamento de cobertura para corredor lateral.' },
  { match: (p) => p.startsWith('/servicos/cobertura-policarbonato'),         message: 'Olá! Quero um orçamento de cobertura em policarbonato.' },
  { match: (p) => p.startsWith('/servicos/calhas-rufos-perfil-u'),           message: 'Olá! Quero um orçamento de calhas, rufos e perfil U.' },
  { match: (p) => p.startsWith('/servicos/projetos-personalizados'),         message: 'Olá! Quero um orçamento para um projeto personalizado de cobertura.' },

  // Produtos
  { match: (p) => p.startsWith('/produtos/cobertura-retratil'),    message: 'Olá! Quero um orçamento de cobertura retrátil.' },
  { match: (p) => p.startsWith('/produtos/cobertura-policarbonato'), message: 'Olá! Quero um orçamento de cobertura em policarbonato.' },
  { match: (p) => p.startsWith('/produtos/cobertura-abre-e-fecha'), message: 'Olá! Quero um orçamento de cobertura abre e fecha.' },
  { match: (p) => p.startsWith('/produtos/cobertura-termoacustica'), message: 'Olá! Quero um orçamento de cobertura termoacústica.' },
  { match: (p) => p.startsWith('/produtos/veneziana-policarbonato'), message: 'Olá! Quero um orçamento de veneziana em policarbonato.' },

  // Blog — posts específicos primeiro, depois genérico
  { match: (p) => p.startsWith('/blog/cobertura-para-piscina'),           message: 'Olá! Li o artigo sobre cobertura para piscina e quero um orçamento.' },
  { match: (p) => p.startsWith('/blog/cobertura-de-policarbonato'),        message: 'Olá! Li o artigo sobre cobertura de policarbonato e quero um orçamento.' },
  { match: (p) => p.startsWith('/blog/cobertura-retratil'),                message: 'Olá! Li o artigo sobre cobertura retrátil e quero um orçamento.' },
  { match: (p) => p.startsWith('/blog/cobertura-abre-fecha'),              message: 'Olá! Li o artigo sobre cobertura abre e fecha e quero um orçamento.' },
  { match: (p) => p.startsWith('/blog/automacao-alexa'),                   message: 'Olá! Li o artigo sobre automação com Alexa e quero um orçamento.' },
  { match: (p) => p.startsWith('/blog/pergolado-vs-cobertura'),            message: 'Olá! Li o artigo comparando pergolado x cobertura e quero um orçamento.' },
  { match: (p) => p.startsWith('/blog/'),                                  message: 'Olá! Li um artigo no blog e gostaria de um orçamento.' },

  // Localização
  { match: (p) => p.startsWith('/localizacao/'), message: 'Olá! Encontrei a Cobersystem pela minha região e gostaria de um orçamento.' },

  // Páginas de conversão
  { match: (p) => p === '/orcamento',  message: 'Olá! Acabei de preencher o formulário de orçamento e gostaria de mais informações.' },
  { match: (p) => p === '/contato',    message: 'Olá! Entrei em contato pelo site e gostaria de falar com um especialista.' },
  { match: (p) => p === '/obrigado',   message: 'Olá! Acabei de enviar um orçamento pelo site e gostaria de confirmar o recebimento.' },
  { match: (p) => p === '/faq',        message: 'Olá! Estava lendo o FAQ e gostaria de tirar uma dúvida sobre coberturas.' },
];

const DEFAULT_MESSAGE = 'Olá! Gostaria de solicitar um orçamento para cobertura em policarbonato.';

function getWhatsAppMessage(pathname: string): string {
  const entry = ROUTE_MESSAGES.find(({ match }) => match(pathname));
  return entry ? entry.message : DEFAULT_MESSAGE;
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const message = getWhatsAppMessage(pathname);
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick();
    trackMetaEvent('Contact', { method: 'WhatsApp' });
    trackGoogleAdsConversion('whatsapp_click');
  };

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center gap-3 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span className="hidden md:block font-semibold whitespace-nowrap group-hover:block">
        Fale Conosco
      </span>
    </Link>
  );
}
