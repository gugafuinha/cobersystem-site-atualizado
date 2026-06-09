import PriceEstimateNote from '@/components/servicos/PriceEstimateNote';
import {
  COBERSYSTEM_PRICING,
  formatPricePerM2,
  getStandardPriceTableRows,
  type PricingKey,
} from '@/lib/pricing';

type PriceTableRow = {
  tipo: string;
  precoM2: string;
};

type ServicePriceTableProps = {
  title: string;
  description?: string;
  rows?: PriceTableRow[];
  noteClassName?: string;
};

export function buildPriceRowsFromKeys(
  entries: Array<{ tipo: string; key: PricingKey }>,
): PriceTableRow[] {
  return entries.map(({ tipo, key }) => ({
    tipo,
    precoM2: formatPricePerM2(COBERSYSTEM_PRICING[key]),
  }));
}

export default function ServicePriceTable({
  title,
  description,
  rows = getStandardPriceTableRows(),
  noteClassName,
}: ServicePriceTableProps) {
  return (
    <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      {description ? (
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3 text-center">Preço/m²</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, i) => (
              <tr key={row.tipo} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-medium">{row.tipo}</td>
                <td className="px-4 py-3 text-center">{row.precoM2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PriceEstimateNote className={noteClassName} />
    </section>
  );
}
