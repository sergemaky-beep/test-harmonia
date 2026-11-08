import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nom, prenom, email, telephone, objet, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Formulaire contact <noreply@harmoniasyndic.fr>',
      to: 'harmonia.syndic@whitebird.immo',
      replyTo: email,
      subject: `[Contact] ${objet} — ${prenom} ${nom}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <hr/>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}
