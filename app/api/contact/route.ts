import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? '');
  }
  return _resend;
}

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 20;

const MAX_FIELD_LEN = 2000;
const MAX_FILES = 5;
const MAX_FILE_SIZE_BYTES = 1 * 1024 * 1024;
const MAX_TOTAL_FILES_BYTES = 5 * 1024 * 1024;
const ALLOWED_FILE_MIME_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

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

function sanitizeFilename(name: string): string {
  const clean = name
    .normalize('NFKD')
    .replace(/[^\w.\- ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .slice(0, 100);

  return clean || `foto-${Date.now()}.jpg`;
}

function detectMimeFromBytes(bytes: Uint8Array): string | null {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'image/jpeg';
  }

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return 'image/png';
  }

  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return 'image/webp';
  }

  if (
    bytes.length >= 12 &&
    bytes[4] === 0x66 &&
    bytes[5] === 0x74 &&
    bytes[6] === 0x79 &&
    bytes[7] === 0x70
  ) {
    return 'image/heic';
  }

  return null;
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
      { error: 'Muitas solicitacoes. Tente novamente em alguns minutos.' },
      { status: 429 },
    );
  }

  const contentType = request.headers.get('content-type')?.toLowerCase() || '';
  if (!contentType.startsWith('multipart/form-data')) {
    return NextResponse.json(
      { error: 'Content-Type deve ser multipart/form-data' },
      { status: 415 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Falha ao ler dados do formulario.' }, { status: 400 });
  }

  const nome = formData.get('nome');
  const email = formData.get('email');
  const telefone = formData.get('telefone');
  const tipoProjeto = formData.get('tipoProjeto');
  const mensagem = formData.get('mensagem');
  const website = formData.get('website');

  if (website !== null && String(website).trim() !== '') {
    return NextResponse.json(
      {
        success: true,
        message: 'Orcamento enviado com sucesso! Entraremos em contato em breve.',
      },
      { status: 200 },
    );
  }

  if (
    !isNonEmptyString(nome, 200) ||
    !isNonEmptyString(email, 254) ||
    !isNonEmptyString(telefone, 40)
  ) {
    return NextResponse.json(
      { error: 'Campos obrigatorios invalidos ou faltando' },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'E-mail invalido' }, { status: 400 });
  }

  if (typeof tipoProjeto !== 'string' || !TIPOS_PROJETO.has(tipoProjeto.trim())) {
    return NextResponse.json({ error: 'Tipo de projeto invalido' }, { status: 400 });
  }

  if (mensagem !== undefined && mensagem !== null) {
    if (typeof mensagem !== 'string' || mensagem.length > MAX_FIELD_LEN) {
      return NextResponse.json({ error: 'Mensagem muito longa' }, { status: 400 });
    }
  }

  const files = formData.getAll('fotos').filter((v): v is File => v instanceof File);

  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Maximo de ${MAX_FILES} fotos por envio.` }, { status: 400 });
  }

  let totalBytes = 0;
  const attachments: { filename: string; content: string }[] = [];
  const photosSummary: string[] = [];

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];

    if (file.size <= 0) {
      return NextResponse.json({ error: `Foto ${i + 1} invalida.` }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: `Foto ${i + 1} excede 1MB apos compressao.` },
        { status: 400 },
      );
    }

    totalBytes += file.size;
    if (totalBytes > MAX_TOTAL_FILES_BYTES) {
      return NextResponse.json(
        { error: 'Total das fotos excede 5MB. Remova algumas imagens.' },
        { status: 400 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    const detectedMime = detectMimeFromBytes(bytes);

    if (detectedMime === 'image/heic') {
      return NextResponse.json(
        { error: 'Formato nao suportado apos processamento (HEIC/HEIF). Envie JPG ou PNG.' },
        { status: 400 },
      );
    }

    if (!detectedMime || !ALLOWED_FILE_MIME_TYPES.has(detectedMime)) {
      return NextResponse.json(
        { error: `Formato da foto ${i + 1} nao suportado. Use JPG, PNG ou WebP.` },
        { status: 400 },
      );
    }

    const declared = (file.type || '').toLowerCase();
    if (declared && !ALLOWED_FILE_MIME_TYPES.has(declared)) {
      return NextResponse.json(
        { error: `Formato da foto ${i + 1} nao suportado. Use JPG, PNG ou WebP.` },
        { status: 400 },
      );
    }

    const safeFilename = sanitizeFilename(file.name);
    const base64Content = Buffer.from(arrayBuffer).toString('base64');

    attachments.push({
      filename: safeFilename,
      content: base64Content,
    });

    photosSummary.push(`${safeFilename} (${Math.round(file.size / 1024)}KB)`);
  }

  const tipoProjetoTrim = tipoProjeto.trim();
  const nomeTrim = nome.trim();
  const emailTrim = email.trim();
  const telefoneTrim = telefone.trim();
  const mensagemStr = typeof mensagem === 'string' && mensagem.trim() ? mensagem.trim() : '';

  try {
    await getResend().emails.send({
      from: 'Cobersystem <contato@cobersystem.com.br>',
      to: ['contato@cobersystem.com.br'],
      subject: `Novo Orcamento - ${tipoProjetoTrim}`,
      html: `
        <h2>Novo pedido de orcamento</h2>
        <p><strong>Nome:</strong> ${nomeTrim}</p>
        <p><strong>Email:</strong> ${emailTrim}</p>
        <p><strong>Telefone:</strong> ${telefoneTrim}</p>
        <p><strong>Tipo de Projeto:</strong> ${tipoProjetoTrim}</p>
        ${mensagemStr ? `<p><strong>Mensagem:</strong> ${mensagemStr}</p>` : ''}
        <p><strong>Fotos anexadas:</strong> ${attachments.length}</p>
        ${
          photosSummary.length
            ? `<ul>${photosSummary.map((s) => `<li>${s}</li>`).join('')}</ul>`
            : '<p>Nenhuma foto enviada.</p>'
        }
      `,
      attachments,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Orcamento enviado com sucesso! Entraremos em contato em breve.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erro ao processar formulario:', error);
    return NextResponse.json(
      { error: 'Nao foi possivel processar o envio. Tente novamente mais tarde.' },
      { status: 500 },
    );
  }
}
