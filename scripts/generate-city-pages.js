/**
 * Script para gerar landing pages por cidade automaticamente
 * Mantém qualidade SEO com conteúdo único por cidade
 */

const cities = [
  {
    slug: 'sao-paulo',
    name: 'São Paulo',
    region: 'Capital',
    neighborhoods: ['Moema', 'Pinheiros', 'Itaim', 'Vila Madalena'],
    facts: {
      climate: 'subtropical',
      avgTemp: '19-23°C',
      rainyMonths: 'Janeiro-Março',
      population: '12 milhões',
      characteristics: 'Clima variável, chuvas frequentes no verão'
    }
  },
  {
    slug: 'abc',
    name: 'ABC Paulista',
    region: 'Grande São Paulo',
    neighborhoods: ['Santo André', 'São Bernardo', 'São Caetano', 'Diadema'],
    facts: {
      climate: 'subtropical úmido',
      avgTemp: '18-22°C',
      rainyMonths: 'Dezembro-Fevereiro',
      population: '2,7 milhões',
      characteristics: 'Industrial, clima similar à capital'
    }
  }
  // Adicionar mais cidades...
];

function generateCityPage(city) {
  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: \`Cobertura Retrátil em ${city.name} | Instalação Profissional | Cobersystem\`,
  description: \`Cobertura retrátil e pergolado em ${city.name}. Automação Alexa + Sensor de Chuva. Atendemos ${city.neighborhoods.join(', ')}. Orçamento grátis!\`,
  keywords: \`cobertura retratil ${city.slug}, cobertura policarbonato ${city.slug}, pergolado ${city.slug}, cobertura automatica ${city.slug}\`,
};

export default function CityPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Cobertura Retrátil em ${city.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Atendemos toda a região de ${city.name}, incluindo ${city.neighborhoods.join(', ')} 
            e demais bairros. Instalação profissional com garantia estendida.
          </p>
        </section>

        {/* Por que somos a melhor escolha em [CIDADE] */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Por Que Escolher a Cobersystem em ${city.name}?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🚗 Atendimento Local</h3>
              <p>Equipe dedicada para ${city.name} e região. Visita técnica no mesmo dia!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🌦️ Adaptado ao Clima Local</h3>
              <p>Projetos otimizados para o clima ${city.facts.climate} de ${city.name} 
              (${city.facts.avgTemp}). ${city.facts.characteristics}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">⚡ Instalação Rápida</h3>
              <p>Instalação completa em 1-2 dias. Mínima interferência na sua rotina.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">💰 Melhor Custo-Benefício</h3>
              <p>Preços competitivos para ${city.name}. Parcelamento facilitado.</p>
            </div>
          </div>
        </section>

        {/* Regiões Atendidas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Bairros Atendidos em ${city.name}
          </h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <ul className="grid md:grid-cols-3 gap-4">
              ${city.neighborhoods.map(n => \`<li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                ${n}
              </li>\`).join('\\n              ')}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Solicite Seu Orçamento em ${city.name}
          </h2>
          <p className="text-xl mb-8">
            Atendimento rápido para toda região de ${city.name}!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
            >
              Orçamento Grátis
            </Link>
            <a
              href="https://wa.me/5511943615079"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}`;
}

// Gerar todas as páginas
cities.forEach(city => {
  const content = generateCityPage(city);
  // Salvar em app/localizacao/[city.slug]/page.tsx
  console.log(`✅ Gerada: ${city.name}`);
});

console.log(`\n🎉 ${cities.length} landing pages geradas com sucesso!`);
