import { NextRequest, NextResponse } from 'next/server';
import { trackFormSubmit } from '@/components/GoogleAnalytics';
import { trackMetaLead } from '@/components/MetaPixel';
import { trackGoogleAdsConversion } from '@/components/GoogleAds';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, tipoProjeto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - API de email da sua escolha

    // Exemplo com Resend (descomente e configure):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Cobersystem <noreply@coberturapolicarbonato.com.br>',
      to: 'vendas@cobersystem.com.br',
      subject: `Novo Orçamento: ${tipoProjeto || 'Geral'}`,
      html: `
        <h2>Novo Orçamento Recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Tipo de Projeto:</strong> ${tipoProjeto || 'Não especificado'}</p>
        <p><strong>Mensagem:</strong> ${mensagem || 'Sem mensagem'}</p>
      `,
    });
    */

    // Track eventos de conversão
    trackFormSubmit();
    trackMetaLead();
    trackGoogleAdsConversion('form_submit', 0);

    return NextResponse.json(
      { 
        success: true,
        message: 'Orçamento enviado com sucesso! Entraremos em contato em breve.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { error: 'Erro ao processar solicitação' },
      { status: 500 }
    );
  }
}

