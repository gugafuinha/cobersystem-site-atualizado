import { AUTOMATION_PRICING, formatBRL } from '@/lib/pricing';

const AUTOMATION_ITEMS = [
  {
    icon: '🎛️',
    title: AUTOMATION_PRICING.controleRemoto.label,
    description:
      'Abra e feche a cobertura com um controle na palma da mão. Simples, rápido e sem precisar de smartphone.',
    price: formatBRL(AUTOMATION_PRICING.controleRemoto.price),
  },
  {
    icon: '🗣️',
    title: AUTOMATION_PRICING.alexa.label,
    description:
      'Integração com Amazon Alexa. Basta falar "Alexa, fechar cobertura" — compatível com Echo e smartphones.',
    price: formatBRL(AUTOMATION_PRICING.alexa.price),
  },
  {
    icon: '🌧️',
    title: AUTOMATION_PRICING.sensorChuva.label,
    description:
      'A cobertura detecta a chuva e fecha automaticamente, sem você precisar fazer nada. Ideal para quem viaja ou esquece.',
    price: formatBRL(AUTOMATION_PRICING.sensorChuva.price),
  },
];

export default function ServiceAutomationSection() {
  return (
    <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
        Mecanismos de Automação
      </h2>
      <p className="text-gray-500 text-center text-sm mb-8">
        Escolha o nível de automação que melhor se encaixa na sua rotina
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {AUTOMATION_ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">{item.description}</p>
            <div className="border-t border-gray-100 pt-4">
              <div className="text-2xl font-bold text-slate-800">{item.price}</div>
              <p className="text-xs text-red-600 font-medium mt-1">Valor por comando</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
