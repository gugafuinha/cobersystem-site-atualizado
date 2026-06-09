import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ServicePriceTable from '@/components/servicos/ServicePriceTable';
import { COBERSYSTEM_PRICING, formatPricePerM2 } from '@/lib/pricing';

export default function CoberturaGaragemExpandedSections() {
  return (
    <>
      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Cobertura Fixa vs Retrátil para Garagem
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cobertura Fixa</h3>
            <p className="text-gray-600 mb-4">
              Proteção permanente com menor investimento inicial. Policarbonato alveolar ou compacto
              sobre estrutura de alumínio. Ideal para quem busca <strong>cobertura garagem policarbonato</strong>{' '}
              econômica e de baixa manutenção, com boa resistência a granizo.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Proteção 24h contra chuva e sol</li>
              <li>• Instalação em 2–4 dias</li>
              <li>• Durabilidade superior a 15 anos</li>
            </ul>
            <p className="text-sm font-semibold text-[#D4AF37] mt-4">
              {formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)} a{' '}
              {formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)}
            </p>
          </div>
          <div className="border-2 border-blue-600 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cobertura Retrátil</h3>
            <p className="text-gray-600 mb-4">
              Abre para ventilar a garagem e fecha para proteção total. Integração com{' '}
              <Link href="/servicos/cobertura-retratil-automatizada" className="text-blue-600 hover:underline">
                automação e sensor de chuva
              </Link>
              . Recomendada para garagens integradas à área gourmet ou com restrição de altura.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Abertura 0–90° para controle de clima</li>
              <li>• Alexa e controle remoto</li>
              <li>• Fecha automaticamente na chuva</li>
            </ul>
            <p className="text-sm font-semibold text-blue-700 mt-4">
              {formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)} a{' '}
              {formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}
            </p>
          </div>
        </div>
      </section>

      <ServicePriceTable
        title="Tabela de Preços — Cobertura para Garagem 2026"
        description="Valores médios em São Paulo para cobertura para garagem e proteção de veículos. Incluem estrutura, policarbonato e instalação."
      />

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Proteção contra Granizo e Impactos
        </h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            O granizo é uma das maiores ameaças aos veículos em São Paulo. O policarbonato compacto
            e alveolar da Cobersystem suporta impactos muito superiores ao vidro e telhas
            convencionais — até 250 vezes mais resistente que o vidro de mesma espessura. Uma{' '}
            <strong>cobertura para garagem</strong> em policarbonato protege pintura, para-brisas e
            lanternas contra pedras de granizo de até 3 cm.
          </p>
          <p className="mb-4">
            Além do granizo, a cobertura reduz a temperatura interna da garagem em até 35%,
            diminuindo o desgaste de borrachas, plásticos e a necessidade de ar-condicionado ao
            entrar no veículo. A proteção UV integrada evita desbotamento da pintura mesmo com
            exposição diária.
          </p>
          <p>
            Para regiões com histórico de granizo intenso, recomendamos policarbonato compacto 4mm
            ou alveolar 10mm com estrutura reforçada. Solicite avaliação técnica gratuita.
          </p>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Galeria de Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <OptimizedImage
            src="/images/projetos/Cobertura Garagem.png"
            alt="Cobertura para garagem em policarbonato — projeto Cobersystem"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/abre-fecha-alveolar-01.jpg"
            alt="Cobertura garagem policarbonato alveolar"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
          <OptimizedImage
            src="/images/projetos/fixa-04.jpg"
            alt="Cobertura fixa para proteção de veículos"
            width={400}
            height={300}
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura para Garagem?</h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Uma <strong>cobertura para garagem</strong> oferece proteção essencial contra chuva, sol,
            granizo e intempéries. O policarbonato é ideal: resistente a impactos, proteção UV e
            luz natural mantendo a garagem iluminada sem abrir mão da <strong>proteção do veículo</strong>.
          </p>
          <p>
            Você pode escolher entre cobertura fixa (proteção permanente e menor custo) ou retrátil
            (flexibilidade para abrir quando quiser ventilação). Ambas oferecem excelente durabilidade
            e acabamento profissional com calhas dimensionadas para o volume de água do telhado.
          </p>
        </div>
      </section>
    </>
  );
}
