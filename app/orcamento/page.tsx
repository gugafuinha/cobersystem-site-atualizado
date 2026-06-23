'use client';

import { useState, type FormEvent, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { trackGoogleAdsConversion, CONVERSION_LABELS } from '@/components/GoogleAds';
import { trackWhatsAppLead } from '@/components/GoogleAnalytics';
import { trackMetaLead } from '@/components/MetaPixel';

const WHATSAPP_NUMBER = '5511943615079';
const WA_DIRECT_URL =
  'https://wa.me/5511943615079?text=Olá! Quero solicitar um orçamento.';

const initialForm = {
  nome: '',
  telefone: '',
  tipoCobertura: '',
  area: '',
  cidade: '',
  mensagem: '',
};

type FormErrors = Partial<Record<keyof typeof initialForm, string>>;

function digitsOnly(s: string): string {
  return s.replace(/\D/g, '');
}

function validate(form: typeof initialForm): FormErrors {
  const errors: FormErrors = {};
  const nome = form.nome.trim();
  if (nome.length < 3) {
    errors.nome = 'Informe seu nome completo (mínimo 3 caracteres).';
  }
  const telDigits = digitsOnly(form.telefone);
  if (telDigits.length < 10 || telDigits.length > 13) {
    errors.telefone = 'Informe um WhatsApp válido com DDD (10 a 13 dígitos).';
  }
  if (!form.tipoCobertura) {
    errors.tipoCobertura = 'Selecione o tipo de cobertura.';
  }
  if (!form.area) {
    errors.area = 'Selecione a área aproximada.';
  }
  const cidade = form.cidade.trim();
  if (cidade.length < 2) {
    errors.cidade = 'Informe a cidade.';
  }
  if (form.mensagem.length > 2000) {
    errors.mensagem = 'Mensagem muito longa (máximo 2000 caracteres).';
  }
  return errors;
}

export default function OrcamentoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof typeof initialForm, boolean>>>(
    {}
  );
  const [enviando, setEnviando] = useState(false);

  const clearFieldError = (field: keyof typeof initialForm) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleDirectWhatsAppClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppLead({ location: 'orcamento-direct' });

    if (!navigator.sendBeacon) {
      e.preventDefault();
      setTimeout(() => {
        window.open(WA_DIRECT_URL, '_blank', 'noopener,noreferrer');
      }, 300);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({
      nome: true,
      telefone: true,
      tipoCobertura: true,
      area: true,
      cidade: true,
      mensagem: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      window.setTimeout(() => {
        document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      }, 0);
      return;
    }

    setEnviando(true);

    const mensagem = `
*Solicitação de Orçamento*

*Nome:* ${formData.nome.trim()}
*Telefone:* ${formData.telefone.trim()}
*Tipo de Cobertura:* ${formData.tipoCobertura}
*Área Aproximada:* ${formData.area}
*Cidade:* ${formData.cidade.trim()}

*Mensagem:*
${formData.mensagem.trim() || '(sem mensagem adicional)'}
    `.trim();

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    trackGoogleAdsConversion(CONVERSION_LABELS.FORM_SUBMIT);
    trackMetaLead();

    const proceed = () => {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      setEnviando(false);
      router.push('/obrigado');
    };

    if (!navigator.sendBeacon) {
      setTimeout(proceed, 300);
    } else {
      proceed();
    }
  };

  const fieldClass = (field: keyof typeof initialForm) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
      errors[field] && touched[field]
        ? 'border-red-500 bg-red-50/30'
        : 'border-gray-300'
    }`;

  return (
    <>
      <Breadcrumb />

      {/* Sticky CTA — visível apenas no mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-600 border-t border-green-700 shadow-lg">
        <a
          href={WA_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDirectWhatsAppClick}
          className="flex items-center justify-center gap-2 py-4 text-white font-bold text-base"
        >
          💬 Falar direto no WhatsApp
        </a>
      </div>

      <main className="min-h-screen bg-gray-50 pb-16 md:pb-0">
        {/* Hero compacto — menor no mobile para mostrar o form above the fold */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6">
              Solicite Seu Orçamento Grátis
            </h1>
            <p className="text-base md:text-2xl text-blue-100">
              Resposta em até 24 horas • Projeto personalizado • Sem compromisso
            </p>
            <p className="mt-3 text-sm md:text-base text-blue-200 font-medium tracking-wide">
              +500 projetos entregues em São Paulo
            </p>
          </div>
        </section>

        {/* Cards de benefícios — ANTES do formulário */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">⚡</div>
              <div className="font-bold mb-1 md:mb-2 text-sm md:text-base">Resposta Rápida</div>
              <div className="text-xs md:text-sm text-gray-600">Orçamento em até 24h</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">📐</div>
              <div className="font-bold mb-1 md:mb-2 text-sm md:text-base">Projeto Grátis</div>
              <div className="text-xs md:text-sm text-gray-600">Visita técnica incluída</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">✅</div>
              <div className="font-bold mb-1 md:mb-2 text-sm md:text-base">Sem Compromisso</div>
              <div className="text-xs md:text-sm text-gray-600">Orçamento sem obrigação</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎯</div>
              <div className="font-bold mb-1 md:mb-2 text-sm md:text-base">Transparência</div>
              <div className="text-xs md:text-sm text-gray-600">Tudo discriminado</div>
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section className="max-w-3xl mx-auto px-4 pb-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-center">Preencha os Dados</h2>

            {/* CTA WhatsApp direto — visível apenas no desktop */}
            <div className="hidden md:flex items-center justify-center mb-6">
              <a
                href={WA_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectWhatsAppClick}
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 underline underline-offset-2 text-sm"
              >
                💬 Prefere falar direto? Chame no WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  value={formData.nome}
                  onChange={(e) => {
                    setFormData({ ...formData, nome: e.target.value });
                    clearFieldError('nome');
                  }}
                  onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
                  className={fieldClass('nome')}
                  placeholder="Seu nome completo"
                  aria-invalid={!!(errors.nome && touched.nome)}
                  aria-describedby={errors.nome && touched.nome ? 'nome-erro' : undefined}
                />
                {errors.nome && touched.nome && (
                  <p id="nome-erro" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.nome}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  autoComplete="tel"
                  value={formData.telefone}
                  onChange={(e) => {
                    setFormData({ ...formData, telefone: e.target.value });
                    clearFieldError('telefone');
                  }}
                  onBlur={() => setTouched((t) => ({ ...t, telefone: true }))}
                  className={fieldClass('telefone')}
                  placeholder="(11) 99999-9999"
                  aria-invalid={!!(errors.telefone && touched.telefone)}
                  aria-describedby={
                    errors.telefone && touched.telefone ? 'telefone-erro' : undefined
                  }
                />
                {errors.telefone && touched.telefone && (
                  <p
                    id="telefone-erro"
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.telefone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="tipoCobertura" className="block text-sm font-semibold mb-2">
                  Tipo de Cobertura *
                </label>
                <select
                  id="tipoCobertura"
                  name="tipoCobertura"
                  value={formData.tipoCobertura}
                  onChange={(e) => {
                    setFormData({ ...formData, tipoCobertura: e.target.value });
                    clearFieldError('tipoCobertura');
                  }}
                  onBlur={() => setTouched((t) => ({ ...t, tipoCobertura: true }))}
                  className={fieldClass('tipoCobertura')}
                  aria-invalid={!!(errors.tipoCobertura && touched.tipoCobertura)}
                  aria-describedby={
                    errors.tipoCobertura && touched.tipoCobertura
                      ? 'tipo-erro'
                      : undefined
                  }
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Cobertura Retrátil Automática">
                    Cobertura Retrátil Automática
                  </option>
                  <option value="Cobertura Retrátil Manual">Cobertura Retrátil Manual</option>
                  <option value="Cobertura Fixa Policarbonato">
                    Cobertura Fixa em Policarbonato
                  </option>
                  <option value="Cobertura Termoacústica">Cobertura Termoacústica</option>
                  <option value="Veneziana Policarbonato">Veneziana em Policarbonato</option>
                  <option value="Cobertura para Piscina">Cobertura para Piscina</option>
                  <option value="Cobertura Área Gourmet">
                    Cobertura Área Gourmet Completa
                  </option>
                  <option value="Ainda não sei">Ainda não sei / Preciso de consultoria</option>
                </select>
                {errors.tipoCobertura && touched.tipoCobertura && (
                  <p id="tipo-erro" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.tipoCobertura}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="area" className="block text-sm font-semibold mb-2">
                    Área Aproximada *
                  </label>
                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={(e) => {
                      setFormData({ ...formData, area: e.target.value });
                      clearFieldError('area');
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, area: true }))}
                    className={fieldClass('area')}
                    aria-invalid={!!(errors.area && touched.area)}
                    aria-describedby={errors.area && touched.area ? 'area-erro' : undefined}
                  >
                    <option value="">Selecione</option>
                    <option value="Até 10m²">Até 10m²</option>
                    <option value="10 a 20m²">10 a 20m²</option>
                    <option value="20 a 30m²">20 a 30m²</option>
                    <option value="30 a 50m²">30 a 50m²</option>
                    <option value="50 a 100m²">50 a 100m²</option>
                    <option value="Acima de 100m²">Acima de 100m²</option>
                    <option value="Não sei">Não sei / Preciso medir</option>
                  </select>
                  {errors.area && touched.area && (
                    <p id="area-erro" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.area}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cidade" className="block text-sm font-semibold mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    autoComplete="address-level2"
                    value={formData.cidade}
                    onChange={(e) => {
                      setFormData({ ...formData, cidade: e.target.value });
                      clearFieldError('cidade');
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, cidade: true }))}
                    className={fieldClass('cidade')}
                    placeholder="Ex: São Paulo, Guarulhos..."
                    aria-invalid={!!(errors.cidade && touched.cidade)}
                    aria-describedby={
                      errors.cidade && touched.cidade ? 'cidade-erro' : undefined
                    }
                  />
                  {errors.cidade && touched.cidade && (
                    <p id="cidade-erro" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.cidade}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => {
                    setFormData({ ...formData, mensagem: e.target.value });
                    clearFieldError('mensagem');
                  }}
                  onBlur={() => setTouched((t) => ({ ...t, mensagem: true }))}
                  className={`${fieldClass('mensagem')} resize-none`}
                  placeholder="Conte mais detalhes sobre seu projeto..."
                  maxLength={2000}
                  aria-invalid={!!(errors.mensagem && touched.mensagem)}
                  aria-describedby={
                    errors.mensagem && touched.mensagem ? 'mensagem-erro' : undefined
                  }
                />
                <div className="flex justify-between mt-1">
                  {errors.mensagem && touched.mensagem ? (
                    <p id="mensagem-erro" className="text-sm text-red-600" role="alert">
                      {errors.mensagem}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-gray-500">
                    {formData.mensagem.length}/2000
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando}
                aria-label="Enviar orçamento via WhatsApp"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {enviando ? (
                  'Abrindo WhatsApp...'
                ) : (
                  <>
                    <span>💬</span>
                    <span>Enviar via WhatsApp</span>
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Tem fotos do espaço? Envie pelo WhatsApp após o contato — é mais rápido e prático.
              </p>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.
                Nosso time responderá em até 24 horas úteis.
              </p>
            </form>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Quanto tempo demora para receber o orçamento?</h3>
                <p className="text-gray-600">
                  Até 24 horas úteis. Em casos urgentes, entre em contato direto via WhatsApp.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">A visita técnica é cobrada?</h3>
                <p className="text-gray-600">
                  Não! A visita técnica e o projeto são 100% gratuitos e sem compromisso.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Atendem em qual região?</h3>
                <p className="text-gray-600">
                  Atendemos toda a Grande São Paulo e cidades próximas (até 60km).
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Posso parcelar o pagamento?</h3>
                <p className="text-gray-600">
                  Sim! Aceitamos parcelamento em até 6x sem juros no cartão ou entrada +
                  parcelas via boleto.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
