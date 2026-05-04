import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  const {
    nom, prenom, email, telephone, role,
    codePostal, ville, nombreLots, typeCopropriete,
    avezSyndicActuel, satisfactionSyndicActuel, motifRecherche,
    servicesInteres, commentaires,
  } = data;

  try {
    await resend.emails.send({
      from: 'Formulaire devis <noreply@harmonia-syndic.fr>',
      to: 'harmonia.syndic@whitebird.immo',
      replyTo: email,
      subject: `[Devis] ${prenom} ${nom} — ${ville} (${codePostal})`,
      html: `
        <h2>Nouvelle demande de devis</h2>

        <h3>Contact</h3>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Rôle :</strong> ${role}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>

        <h3>Copropriété</h3>
        <p><strong>Localisation :</strong> ${ville} (${codePostal})</p>
        <p><strong>Nombre de lots :</strong> ${nombreLots}</p>
        <p><strong>Type :</strong> ${typeCopropriete}</p>

        <h3>Situation actuelle</h3>
        <p><strong>Syndic actuel :</strong> ${avezSyndicActuel}</p>
        <p><strong>Satisfaction :</strong> ${satisfactionSyndicActuel || '—'}</p>
        <p><strong>Motif de recherche :</strong> ${motifRecherche}</p>

        <h3>Services souhaités</h3>
        <p>${servicesInteres?.join(', ') || '—'}</p>

        ${commentaires ? `<h3>Commentaires</h3><p>${commentaires.replace(/\n/g, '<br/>')}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}
