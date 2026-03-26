import { NextResponse } from 'next/server';

const baseUrl = 'https://coberturapolicarbonato.com.br';

const artigos = [
  {
    slug: 'cobertura-retratil-guia-completo',
    titulo: 'Cobertura Retrátil: Guia Completo 2024',
    descricao: 'Tudo que você precisa saber sobre cobertura retrátil em policarbonato.',
    data: '2024-11-14',
  },
  {
    slug: 'cobertura-abre-fecha-vantagens',
    titulo: 'Cobertura Abre e Fecha: Vantagens e Como Funciona',
    descricao: 'Descubra as principais vantagens do sistema de cobertura abre e fecha.',
    data: '2024-11-14',
  },
  {
    slug: 'cobertura-policarbonato-preco-tipos',
    titulo: 'Cobertura em Policarbonato: Preço, Tipos e Instalação',
    descricao: 'Conheça os tipos de policarbonato, faixa de preços e processo de instalação.',
    data: '2024-11-14',
  },
  {
    slug: 'cobertura-retratil-churrasqueira',
    titulo: 'Cobertura Retrátil para Churrasqueira: Vale a Pena?',
    descricao: 'Descubra por que a cobertura retrátil é a melhor opção para sua área de churrasqueira.',
    data: '2024-11-14',
  },
  {
    slug: 'automacao-alexa-sensor-chuva',
    titulo: 'Automação Residencial: Cobertura com Alexa e Sensor de Chuva',
    descricao: 'Como funciona a automação inteligente. Controle via Alexa e fechamento automático.',
    data: '2024-11-14',
  },
  {
    slug: 'pergolado-vs-cobertura-retratil',
    titulo: 'Pergolado vs Cobertura Retrátil: Qual Escolher?',
    descricao: 'Comparação completa entre pergolado tradicional e cobertura retrátil.',
    data: '2024-11-14',
  },
];

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Cobersystem - Blog</title>
    <link>${baseUrl}</link>
    <description>Blog sobre cobertura retrátil em policarbonato, automação residencial e muito mais.</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${artigos.map(artigo => `
    <item>
      <title>${artigo.titulo}</title>
      <link>${baseUrl}/blog/${artigo.slug}</link>
      <description>${artigo.descricao}</description>
      <pubDate>${new Date(artigo.data).toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${artigo.slug}</guid>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

