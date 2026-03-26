/**
 * Schema LocalBusiness + Service Area para SEO Local
 * CRÍTICO para aparecer em Google Maps e "perto de mim"
 */

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cobersystem - Soluções em Coberturas",
    "image": "https://cobersystem.com.br/logo.png",
    "description": "Especialista em cobertura retrátil em policarbonato com automação via Alexa e sensor de chuva. Atendimento em São Paulo, ABC, Guarulhos e região.",
    "@id": "https://cobersystem.com.br",
    "url": "https://cobersystem.com.br",
    "telephone": "+55-11-94361-5079",
    "email": "vendas@cobersystem.com.br",
    "priceRange": "R$$ - R$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "São Paulo",
        "containedIn": {
          "@type": "State",
          "name": "São Paulo"
        }
      },
      {
        "@type": "City",
        "name": "Santo André"
      },
      {
        "@type": "City",
        "name": "São Bernardo do Campo"
      },
      {
        "@type": "City",
        "name": "São Caetano do Sul"
      },
      {
        "@type": "City",
        "name": "Diadema"
      },
      {
        "@type": "City",
        "name": "Guarulhos"
      },
      {
        "@type": "City",
        "name": "Osasco"
      },
      {
        "@type": "City",
        "name": "Barueri"
      },
      {
        "@type": "City",
        "name": "Cotia"
      },
      {
        "@type": "City",
        "name": "Taboão da Serra"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/cobersystem",
      "https://www.youtube.com/@cobersystem"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Cobertura Retrátil em Policarbonato",
        "description": "Sistema abre e fecha com automação via Alexa e sensor de chuva",
        "category": "Cobertura Retrátil"
      },
      {
        "@type": "Offer",
        "name": "Cobertura Fixa em Policarbonato",
        "description": "Proteção permanente com alta qualidade",
        "category": "Cobertura Fixa"
      },
      {
        "@type": "Offer",
        "name": "Automação Inteligente",
        "description": "Controle via Alexa, sensor de chuva automático e controle remoto",
        "category": "Automação"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Cliente Verificado"
        },
        "datePublished": "2024-10-15",
        "reviewBody": "Excelente trabalho! A cobertura retrátil transformou nossa área gourmet. O sensor de chuva funciona perfeitamente e a instalação foi rápida.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Cliente Verificado"
        },
        "datePublished": "2024-09-20",
        "reviewBody": "Muito satisfeito com o resultado. Equipe profissional, prazo cumprido e produto de alta qualidade. Recomendo!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
