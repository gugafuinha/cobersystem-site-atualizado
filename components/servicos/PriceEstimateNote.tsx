import { PRICE_ESTIMATE_NOTE } from '@/lib/pricing';

export default function PriceEstimateNote({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-gray-500 mt-4 ${className}`}>{PRICE_ESTIMATE_NOTE}</p>
  );
}
