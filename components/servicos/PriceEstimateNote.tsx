export default function PriceEstimateNote({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-gray-500 mt-4 ${className}`}>
      * Valores estimados. O preço final pode variar conforme complexidade da estrutura, distância e
      condições do local. Solicite seu orçamento personalizado.
    </p>
  );
}
