import { NextRequest, NextResponse } from 'next/server';
import { trackFormSubmit } from '@/components/GoogleAnalytics';
import { trackMetaLead } from '@/components/MetaPixel';
import { trackGoogleAdsConversion } from '@/components/GoogleAds';

const MAX_BODY_CHARS = 32_000;
const MAX_FIELD_LEN = 2000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 20;

const TIPOS_PROJETO = new Set([
  'churrasqueira',
  'varanda',
  'pergolado',
  'area-gourmet',
  'piscina',
  'garagem',
  'outro',
]);

const rateBucket = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

function allowRate(ip: string): boolean {
  const now = Date.now();
  if (rateBucket.size > 5000) {
    rateBucket.clear();
  }
  const entry = rateBucket.get(ip);
  if (!entry || now > entry.resetAt) {
    rateBucket.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_MAX) {
    return false;
  }
  entry.count += 1;
  return true;
}

function isNonEmptyString(v: unknown, maxLen: number): v is string {
  if (typeof v !== 'string') return false;
  const t = v.trim();
  return t.length > 0 && t.length <= maxLen;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST' } },
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!allowRate(ip)) {
    return NextResponse.json(
      { error: 'Muitas solicitações. Tente novamente em alguns minutos.' },
      { status: 429 },
    );
  }

  const contentType = request.headers.get('content-type')?.split(';')[0]?.trim();
  if (contentType !== 'application/json') {
    return NextResponse.json(
      { error: 'Content-Type deve ser application/json' },
      { status: 415 },
    );
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_CHARS) {
      return NextResponse.json({ error: 'Requisição muito grande' }, { status: 413 });
    }
    body = text.length === 0 ? null : JSON.parse(text);
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Formato de dados inválido' }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  // Honeypot: deve permanecer vazio (bots costumam preencher)
  const hp = b.website;
  if (hp !== undefined && hp !== null && String(hp).trim() !== '') {
    return NextResponse.json(
      {
        success: true,
        message: 'Orçamento enviado com sucesso! Entraremos em contato em breve.',
      },
      { status: 200 },
    );
  }

  const nome = b.nome;
  const email = b.email;
  const telefone = b.telefone;
  const tipoProjeto = b.tipoProjeto;
  const mensagem = b.mensagem;

  if (!isNonEmptyString(nome, 200) || !isNonEmptyString(email, 254) || !isNonEmptyString(telefone, 40)) {
    return NextResponse.json(
      { error: 'Campos obrigatórios inválidos ou faltando' },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 });
  }

  if (typeof tipoProjeto !== 'string' || !TIPOS_PROJETO.has(tipoProjeto.trim())) {
    return NextResponse.json({ error: 'Tipo de projeto inválido' }, { status: 400 });
  }

  if (mensagem !== undefined && mensagem !== null) {
    if (typeof mensagem !== 'string' || mensagem.length > MAX_FIELD_LEN) {
      return NextResponse.json({ error: 'Mensagem muito longa' }, { status: 400 });
    }
  }

  try {
    // Aqui você pode integrar com: SendGrid, Resend, Nodemailer, etc.

    trackFormSubmit();
    trackMetaLead();
    trackGoogleAdsConversion('form_submit', 0);

    return NextResponse.json(
      {
        success: true,
        message: 'Orçamento enviado com sucesso! Entraremos em contato em breve.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { error: 'Não foi possível processar o envio. Tente novamente mais tarde.' },
      { status: 500 },
    );
  }
}
