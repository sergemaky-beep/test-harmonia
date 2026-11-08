import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales | Harmonia Syndic & Gestion',
  description:
    'Mentions légales, informations réglementaires (loi Hoguet) et politique de confidentialité d\'Harmonia Syndic & Gestion.',
  alternates: { canonical: 'https://harmoniasyndic.fr/mentions-legales' },
};

// Les champs marqués A_COMPLETER doivent être renseignés avant la mise en production.
const A_COMPLETER = '[à compléter]';

const SOCIETE = {
  denomination: 'NAJAYA',
  forme: 'SAS au capital de 1 000 €',
  marque: 'Harmonia Syndic & Gestion',
  siege: '144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine',
  rcs: 'RCS Nanterre 943 866 293',
  siret: '943 866 293 00013',
  tva: 'FR14 943 866 293',
  carte: 'Carte professionnelle n° CPI 9201 2025 000 000 112',
  carteMentions: 'Gestion immobilière (G), Syndic de copropriété (S), Transaction (T)',
  carteDelivree: 'CCI Paris Île-de-France',
  directeur: 'Serge MAKY, Président',
  telephone: '01 89 71 43 54',
  email: 'harmonia.syndic@whitebird.immo',
  garant: 'GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris',
  garantMontant: '120 000 € (activité de syndic de copropriété)',
  rcp: 'GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris — contrat n° RCP_01_174670J',
  mediateur: A_COMPLETER,
};

function Bloc({ titre, id, children }: { titre: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-2xl font-bold text-primary mb-4">{titre}</h2>
      <div className="space-y-2 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <main className="container-custom section-padding max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-10">Mentions légales</h1>

      <Bloc titre="Éditeur du site">
        <p>
          Le site harmoniasyndic.fr est édité par la société <strong>{SOCIETE.denomination}</strong>, {SOCIETE.forme},
          exerçant sous la marque <strong>{SOCIETE.marque}</strong>.
        </p>
        <p>Siège social : {SOCIETE.siege}</p>
        <p>{SOCIETE.rcs} · SIRET {SOCIETE.siret} · TVA intracommunautaire {SOCIETE.tva}</p>
        <p>
          Téléphone : {SOCIETE.telephone} · E-mail : {SOCIETE.email}
        </p>
        <p>Directeur de la publication : {SOCIETE.directeur}</p>
      </Bloc>

      <Bloc titre="Activité réglementée (loi Hoguet)">
        <p>
          {SOCIETE.carte}, délivrée par la {SOCIETE.carteDelivree}, mentions : {SOCIETE.carteMentions}.
        </p>
        <p>
          Garantie financière : {SOCIETE.garant}, pour un montant de {SOCIETE.garantMontant}.
        </p>
        <p>Assurance responsabilité civile professionnelle : {SOCIETE.rcp}.</p>
        <p>
          Le cabinet ne peut recevoir aucun fonds, effet ou valeur en dehors de ceux prévus par la garantie financière
          mentionnée ci-dessus.
        </p>
        <p>Membre du réseau White Bird.</p>
      </Bloc>

      <Bloc titre="Médiation de la consommation">
        <p>
          Conformément aux articles L.612-1 et suivants du Code de la consommation, en cas de litige non résolu
          avec le cabinet, le consommateur peut recourir gratuitement au médiateur suivant : {SOCIETE.mediateur}.
        </p>
      </Bloc>

      <Bloc titre="Hébergement">
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</p>
      </Bloc>

      <Bloc titre="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus de ce site (textes, visuels, logo, guides) est la propriété de {SOCIETE.denomination} ou
          de ses partenaires. Toute reproduction sans autorisation écrite préalable est interdite.
        </p>
      </Bloc>

      <Bloc titre="Politique de confidentialité" id="confidentialite">
        <p>
          Les données transmises via les formulaires de contact et de demande de devis (nom, coordonnées, informations
          sur la copropriété) sont traitées par {SOCIETE.denomination}, responsable de traitement, dans le seul but de
          répondre à votre demande et, le cas échéant, d&apos;établir une proposition commerciale.
        </p>
        <p>
          Base légale : mesures précontractuelles prises à votre demande. Destinataires : les équipes du cabinet et
          son réseau White Bird. Durée de conservation : 3 ans à compter du dernier contact.
        </p>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition
          sur vos données. Pour l&apos;exercer : {SOCIETE.email}. Vous pouvez également introduire une réclamation
          auprès de la CNIL (cnil.fr).
        </p>
        <p>Ce site ne dépose pas de cookies publicitaires.</p>
      </Bloc>
    </main>
  );
}
